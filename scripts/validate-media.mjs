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

await walk(sourceRoot);

const unclassified = discovered.filter((file) => !classified.has(file));
const missing = [...classified].filter((file) => !discovered.includes(file));
const duplicateClassifications = [...classified].filter((file) => {
  const occurrences = manifest.publicPhotos.filter((item) => item.source === file).length
    + manifest.reviewGroups.reduce((count, group) => count + group.files.filter((item) => item === file).length, 0);
  return occurrences > 1;
});

const generated = JSON.parse(await readFile(path.join(root, "content", "generated-media.json"), "utf8"));
for (const photo of generated.photos) await access(path.join(root, "public", photo.src));
for (const video of generated.videos) {
  await access(path.join(root, "public", video.src));
  await access(path.join(root, "public", video.poster));
}

if (unclassified.length || missing.length || duplicateClassifications.length) {
  console.error({ unclassified, missing, duplicateClassifications });
  process.exitCode = 1;
} else {
  console.log(`Media manifest valid: ${discovered.length} source assets classified, ${generated.photos.length} unique photos and ${generated.videos.length} videos published.`);
}
