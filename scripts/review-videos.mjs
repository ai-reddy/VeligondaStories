import { spawnSync } from "node:child_process";
import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import ffmpegPath from "@ffmpeg-installer/ffmpeg";

const root = process.cwd();
const inputDirectory = path.join(root, "src", "assets", "source-media", "videos");
const reviewDirectory = path.join(root, ".media-review", "videos");

await mkdir(reviewDirectory, { recursive: true });

const videos = (await readdir(inputDirectory))
  .filter((name) => name.toLowerCase().endsWith(".mp4"))
  .sort((left, right) => left.localeCompare(right, undefined, { numeric: true }));

for (const [index, video] of videos.entries()) {
  const output = path.join(reviewDirectory, `video-${String(index + 1).padStart(2, "0")}.jpg`);
  const result = spawnSync(
    ffmpegPath.path,
    ["-hide_banner", "-loglevel", "error", "-ss", "00:00:01", "-i", path.join(inputDirectory, video), "-frames:v", "1", "-q:v", "3", "-y", output],
    { encoding: "utf8" },
  );

  if (result.status !== 0) {
    throw new Error(`Could not extract review frame from ${video}: ${result.stderr}`);
  }

  console.log(`${video} -> ${path.relative(root, output)}`);
}
