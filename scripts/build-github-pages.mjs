import { spawnSync } from "node:child_process";
import { mkdir, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const apiDirectory = path.join(root, "src", "app", "api");
const backupDirectory = path.join(root, ".github-pages-api-backup");
const outDirectory = path.join(root, "out");

await rm(backupDirectory, { recursive: true, force: true });
await rm(outDirectory, { recursive: true, force: true });
await rename(apiDirectory, backupDirectory);

try {
  const result = spawnSync(
    process.execPath,
    [path.join(root, "node_modules", "next", "dist", "bin", "next"), "build"],
    {
      cwd: root,
      env: {
        ...process.env,
        GITHUB_PAGES: "true",
        NEXT_PUBLIC_BASE_PATH: "/VeligondaStories",
        NEXT_PUBLIC_SITE_URL: "https://ai-reddy.github.io/VeligondaStories",
        NEXT_PUBLIC_LIVE_ORIGIN: "https://veligondastories.netlify.app",
      },
      encoding: "utf8",
      stdio: "inherit",
    },
  );
  if (result.status !== 0) process.exitCode = result.status ?? 1;
  else {
    await mkdir(outDirectory, { recursive: true });
    await writeFile(path.join(outDirectory, ".nojekyll"), "", "utf8");
  }
} finally {
  await rename(backupDirectory, apiDirectory);
}
