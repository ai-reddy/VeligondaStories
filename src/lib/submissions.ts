import { randomUUID } from "node:crypto";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { getStore } from "@netlify/blobs";

export type SubmissionMedia = {
  id: string;
  kind: "image" | "video";
  src: string;
  width?: number;
  height?: number;
};

export type PublishedSubmission = {
  id: string;
  title: string;
  content: string;
  village: "gundancharla" | "project-wide";
  category: string;
  eventDate: string | null;
  submittedAt: string;
  status: "community-report";
  media: SubmissionMedia[];
};

const dataDirectory = path.join(process.cwd(), "data");
const submissionsPath = path.join(dataDirectory, "submissions.json");
let writeQueue = Promise.resolve();

export async function getPublishedSubmissions(village?: PublishedSubmission["village"]): Promise<PublishedSubmission[]> {
  const seedSubmissions = await readSubmissions();
  const netlifySubmissions = await readNetlifySubmissions();
  const submissions = [...seedSubmissions, ...netlifySubmissions.filter((remote) => !seedSubmissions.some((seed) => seed.id === remote.id))];
  return submissions
    .filter((submission) => !village || submission.village === village)
    .sort((left, right) => right.submittedAt.localeCompare(left.submittedAt));
}

export function createSubmissionId() {
  return randomUUID();
}

export async function publishSubmission(submission: PublishedSubmission) {
  if (isNetlifyRuntime()) {
    await getStore({ name: "veligonda-submissions", consistency: "strong" }).setJSON(`submissions/${submission.id}.json`, submission, { onlyIfNew: true });
    return;
  }

  writeQueue = writeQueue.then(async () => {
    const submissions = await readSubmissions();
    submissions.push(submission);
    await mkdir(dataDirectory, { recursive: true });
    const temporaryPath = `${submissionsPath}.${process.pid}.tmp`;
    await writeFile(temporaryPath, `${JSON.stringify(submissions, null, 2)}\n`, "utf8");
    await rename(temporaryPath, submissionsPath);
  });
  await writeQueue;
}

async function readNetlifySubmissions(): Promise<PublishedSubmission[]> {
  if (!isNetlifyRuntime()) return [];
  const store = getStore({ name: "veligonda-submissions", consistency: "strong" });
  const { blobs } = await store.list({ prefix: "submissions/" });
  const values = await Promise.all(blobs.map((blob) => store.get(blob.key, { type: "json", consistency: "strong" })));
  return values.filter((value): value is PublishedSubmission => Boolean(value && typeof value === "object"));
}

export function isNetlifyRuntime() {
  return process.env.NETLIFY === "true" || Boolean(process.env.NETLIFY_SITE_ID);
}

async function readSubmissions(): Promise<PublishedSubmission[]> {
  try {
    const parsed = JSON.parse(await readFile(submissionsPath, "utf8"));
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}
