import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const manifest = JSON.parse(await readFile(path.join(root, "content", "media-manifest.json"), "utf8"));
const sourceRoot = path.join(root, manifest.policy.sourceDirectory);
const classified = new Set([
  ...manifest.publicPhotos.map((item) => item.source),
  ...manifest.reviewGroups.flatMap((group) => group.files),
]);

const relevantExtensions = new Set([".jfif", ".jpg", ".jpeg", ".png", ".webp", ".mp4", ".mov", ".pdf"]);
const discovered = [];

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) await walk(absolute);
    else if (relevantExtensions.has(path.extname(entry.name).toLowerCase())) {
      discovered.push(path.relative(sourceRoot, absolute).replaceAll("\\", "/"));
    }
  }
}

let sourceArchiveAvailable = true;
try {
  await access(sourceRoot);
  await walk(sourceRoot);
} catch (error) {
  if (error?.code === "ENOENT") sourceArchiveAvailable = false;
  else throw error;
}

const unclassified = discovered.filter((file) => !classified.has(file));
const missing = [...classified].filter((file) => !discovered.includes(file));
const duplicateClassifications = [...classified].filter((file) => {
  const occurrences = manifest.publicPhotos.filter((item) => item.source === file).length
    + manifest.reviewGroups.reduce((count, group) => count + group.files.filter((item) => item === file).length, 0);
  return occurrences > 1;
});

const generated = JSON.parse(await readFile(path.join(root, "content", "generated-media.json"), "utf8"));
const verified = JSON.parse(await readFile(path.join(root, "content", "verified-media.json"), "utf8"));
for (const photo of generated.photos) await access(path.join(root, "public", photo.src));
for (const photo of verified.photos) await access(path.join(root, "public", photo.src));
for (const video of verified.videos) {
  await access(path.join(root, "public", video.src));
  await access(path.join(root, "public", video.poster));
}
for (const video of generated.videos) {
  await access(path.join(root, "public", video.src));
  await access(path.join(root, "public", video.poster));
}

if ((sourceArchiveAvailable && (unclassified.length || missing.length || duplicateClassifications.length))) {
  console.error({ unclassified, missing, duplicateClassifications });
  process.exitCode = 1;
} else {
  const sourceMessage = sourceArchiveAvailable ? `${discovered.length} source assets classified` : "raw source archive intentionally unavailable";
  console.log(`Media manifest valid: ${sourceMessage}, ${generated.photos.length + verified.photos.length} unique photos and ${generated.videos.length + verified.videos.length} videos published.`);
}
