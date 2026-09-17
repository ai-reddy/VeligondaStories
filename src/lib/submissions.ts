import { randomUUID } from "node:crypto";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { getStore } from "@netlify/blobs";
import curatedGcUpdates from "../../content/gc-live-status-updates.json";

export type SubmissionMedia = {
  id: string;
  kind: "image" | "video" | "document";
  src: string;
  width?: number;
  height?: number;
};

export type PublishedSubmission = {
  id: string;
  title: string;
  content: string;
  village: "gundancharla" | "project-wide" | "kalanuthala" | "sukesula" | "gottepadiya";
  category: string;
  eventDate: string | null;
  submittedAt: string;
  status: "community-report";
  media: SubmissionMedia[];
  socialLinks?: string[];
};

const dataDirectory = path.join(process.cwd(), "data");
const submissionsPath = path.join(dataDirectory, "submissions.json");
let writeQueue = Promise.resolve();

export async function getPublishedSubmissions(village?: PublishedSubmission["village"]): Promise<PublishedSubmission[]> {
  const seedSubmissions = await readSubmissions();
  const netlifySubmissions = await readNetlifySubmissions();
  const curatedSubmissions = curatedGcUpdates as PublishedSubmission[];
  const submissions = [...curatedSubmissions, ...seedSubmissions, ...netlifySubmissions]
    .filter((submission, index, values) => values.findIndex((candidate) => candidate.id === submission.id) === index);
  return submissions
    .filter((submission) => !village || submission.village === village)
    .sort((left, right) => right.submittedAt.localeCompare(left.submittedAt));
}

export function createSubmissionId() {
  return randomUUID();
}

export async function publishSubmission(submission: PublishedSubmission) {
  if (isNetlifyRuntime()) {
    const result = await getStore({ name: "veligonda-submissions", consistency: "strong" }).setJSON(`submissions/${submission.id}.json`, submission, { onlyIfNew: true });
    if (!result.modified) throw new Error("A submission with this ID already exists.");
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
  const blobs = [];
  for await (const page of store.list({ prefix: "submissions/", paginate: true })) blobs.push(...page.blobs);
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
