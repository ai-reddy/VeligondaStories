import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { copyFile, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import ffmpegPath from "@ffmpeg-installer/ffmpeg";
import sharp from "sharp";

const root = process.cwd();
const manifestPath = path.join(root, "content", "media-manifest.json");
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const sourceRoot = path.join(root, manifest.policy.sourceDirectory);
const publicRoot = path.join(root, manifest.policy.publicDirectory);
const publicPhotosRoot = path.join(publicRoot, "photos");
const publicVideosRoot = path.join(publicRoot, "videos");
const generatedPhotos = [];
const generatedVideos = [];
const curatedBySource = new Map(manifest.publicPhotos.map((photo) => [photo.source, photo]));

await rm(publicPhotosRoot, { recursive: true, force: true });
await rm(publicVideosRoot, { recursive: true, force: true });
await mkdir(publicPhotosRoot, { recursive: true });
await mkdir(publicVideosRoot, { recursive: true });

const photoNames = (await readdir(path.join(sourceRoot, "photos")))
  .filter((name) => /\.(jpe?g|jfif|png|webp)$/i.test(name))
  .sort(naturalSort);
const seenHashes = new Set();

for (const [sourceIndex, name] of photoNames.entries()) {
  const source = `photos/${name}`;
  const sourcePath = path.join(sourceRoot, source);
  const sourceBytes = await readFile(sourcePath);
  const sourceSha256 = createHash("sha256").update(sourceBytes).digest("hex");
  if (seenHashes.has(sourceSha256)) {
    console.log(`Duplicate skipped: ${source}`);
    continue;
  }
  seenHashes.add(sourceSha256);

  const curated = curatedBySource.get(source);
  const sequence = String(sourceIndex + 1).padStart(2, "0");
  const slug = curated?.slug ?? `gundancharla-archive-${sequence}`;
  const outputPath = path.join(publicPhotosRoot, `${slug}.webp`);

  const result = await sharp(sourceBytes)
    .rotate()
    .resize({ width: 1600, height: 1200, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(outputPath);

  generatedPhotos.push({
    source,
    slug,
    stage: curated?.stage ?? "community-archive",
    village: "gundancharla",
    titleEn: curated?.titleEn ?? `Gundancharla archive image ${sequence}`,
    titleTe: curated?.titleTe ?? `గుండంచర్ల ఆర్కైవ్ చిత్రం ${sequence}`,
    altEn: curated?.altEn ?? `Submitted Gundancharla archive image ${sequence}`,
    altTe: curated?.altTe ?? `సమర్పించిన గుండంచర్ల ఆర్కైవ్ చిత్రం ${sequence}`,
    verification: curated?.verification ?? "community-report",
    capturedAt: curated?.capturedAt ?? null,
    src: `/media/photos/${slug}.webp`,
    width: result.width,
    height: result.height,
    sourceSha256,
  });

  console.log(`${source} -> ${path.relative(root, outputPath)} (${result.size} bytes)`);
}

const videoNames = (await readdir(path.join(sourceRoot, "videos")))
  .filter((name) => name.toLowerCase().endsWith(".mp4"))
  .sort(naturalSort);

for (const [index, name] of videoNames.entries()) {
  const sequence = String(index + 1).padStart(2, "0");
  const slug = `gundancharla-video-${sequence}`;
  const source = `videos/${name}`;
  const sourcePath = path.join(sourceRoot, source);
  const outputPath = path.join(publicVideosRoot, `${slug}.mp4`);
  const posterPath = path.join(publicVideosRoot, `${slug}-poster.webp`);
  const sourceBytes = await readFile(sourcePath);

  await copyFile(sourcePath, outputPath);
  const frame = spawnSync(
    ffmpegPath.path,
    ["-hide_banner", "-loglevel", "error", "-ss", "00:00:01", "-i", sourcePath, "-frames:v", "1", "-f", "image2pipe", "-vcodec", "mjpeg", "pipe:1"],
    { encoding: null, maxBuffer: 20 * 1024 * 1024 },
  );
  if (frame.status !== 0 || !frame.stdout?.length) {
    throw new Error(`Could not generate poster for ${source}: ${frame.stderr?.toString()}`);
  }
  await sharp(frame.stdout).resize({ width: 1280, height: 720, fit: "inside" }).webp({ quality: 78 }).toFile(posterPath);

  generatedVideos.push({
    source,
    slug,
    village: "gundancharla",
    titleEn: `Gundancharla archive video ${sequence}`,
    titleTe: `గుండంచర్ల ఆర్కైవ్ వీడియో ${sequence}`,
    descriptionEn: "Community-submitted video. Date, location and participant consent details are pending confirmation.",
    descriptionTe: "సామాజికంగా సమర్పించిన వీడియో. తేదీ, స్థలం, పాల్గొన్న వారి సమ్మతి వివరాలు నిర్ధారణలో ఉన్నాయి.",
    verification: "community-report",
    capturedAt: null,
    src: `/media/videos/${slug}.mp4`,
    poster: `/media/videos/${slug}-poster.webp`,
    sourceSha256: createHash("sha256").update(sourceBytes).digest("hex"),
  });
  console.log(`${source} -> ${path.relative(root, outputPath)}`);
}

await writeFile(
  path.join(root, "content", "generated-media.json"),
  `${JSON.stringify({ generatedAt: new Date().toISOString(), photos: generatedPhotos, videos: generatedVideos }, null, 2)}\n`,
  "utf8",
);

function naturalSort(left, right) {
  return left.localeCompare(right, undefined, { numeric: true, sensitivity: "base" });
}
