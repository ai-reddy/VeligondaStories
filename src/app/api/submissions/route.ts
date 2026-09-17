import { randomUUID } from "node:crypto";
import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { getStore } from "@netlify/blobs";
import { createSubmissionId, isNetlifyRuntime, publishSubmission, type PublishedSubmission, type SubmissionMedia } from "@/lib/submissions";

export const runtime = "nodejs";

const MAX_FILES = 6;
const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const MAX_VIDEO_BYTES = 5 * 1024 * 1024;
const MAX_TOTAL_BYTES = 5 * 1024 * 1024;
const MAX_SOCIAL_LINKS = 5;
const categories = new Set(["ground-reality", "rehabilitation", "development", "document-update", "village-story", "other"]);
const attempts = new Map<string, number[]>();

export function OPTIONS(request: Request) {
  const origin = permittedOrigin(request);
  if (!origin) return new Response(null, { status: 403 });
  return new Response(null, { status: 204, headers: corsHeaders(origin) });
}

export async function POST(request: Request) {
  const createdFiles: string[] = [];

  try {
    enforceSameOrigin(request);
    enforceRateLimit(request);
    const form = await request.formData();
    if (String(form.get("website") ?? "")) throw new SubmissionError("The update could not be submitted.");
    const title = text(form, "title", 3, 160);
    const content = text(form, "content", 10, 5000);
    const villageValue = String(form.get("village") ?? "");
    const category = String(form.get("category") ?? "");
    const eventDateValue = String(form.get("eventDate") ?? "").trim();
    const rightsConfirmed = form.get("rightsConfirmed") === "on";
    const socialLinks = parseSocialLinks(String(form.get("socialLinks") ?? ""));

    if (villageValue !== "gundancharla" && villageValue !== "project-wide") throw new SubmissionError("Select a valid location.");
    if (!categories.has(category)) throw new SubmissionError("Select a valid category.");
    if (eventDateValue && !/^\d{4}-\d{2}-\d{2}$/.test(eventDateValue)) throw new SubmissionError("Enter a valid event date.");

    const files = form.getAll("media").filter((value): value is File => value instanceof File && value.size > 0);
    if (files.length > MAX_FILES) throw new SubmissionError(`Upload no more than ${MAX_FILES} files.`);
    if (files.length && !rightsConfirmed) throw new SubmissionError("Confirm that the submitted media may be archived and reviewed for publication.");
    if (files.reduce((total, file) => total + file.size, 0) > MAX_TOTAL_BYTES) throw new SubmissionError("The total upload exceeds 5 MB.");

    const submissionId = createSubmissionId();
    const uploadDirectory = path.join(process.cwd(), "public", "media", "uploads", submissionId);
    if (!isNetlifyRuntime()) await mkdir(uploadDirectory, { recursive: true });
    const media: SubmissionMedia[] = [];

    for (const file of files) {
      const bytes = Buffer.from(await file.arrayBuffer());
      const mediaId = randomUUID();

      if (file.type.startsWith("image/")) {
        if (file.size > MAX_IMAGE_BYTES) throw new SubmissionError(`${file.name} exceeds the 5 MB image limit.`);
        const transformed = await sharp(bytes, { limitInputPixels: 40_000_000 })
          .rotate()
          .resize({ width: 1800, height: 1800, fit: "inside", withoutEnlargement: true })
          .webp({ quality: 82, effort: 4 })
          .toBuffer({ resolveWithObject: true });
        const src = await saveMedia(submissionId, mediaId, "webp", transformed.data, "image/webp", uploadDirectory, createdFiles);
        media.push({ id: mediaId, kind: "image", src, width: transformed.info.width, height: transformed.info.height });
        continue;
      }

      if (file.type === "video/mp4") {
        if (file.size > MAX_VIDEO_BYTES) throw new SubmissionError(`${file.name} exceeds the 5 MB video limit.`);
        if (bytes.length < 12 || bytes.subarray(4, 12).toString("ascii").includes("ftyp") === false) throw new SubmissionError(`${file.name} is not a valid MP4 file.`);
        const src = await saveMedia(submissionId, mediaId, "mp4", bytes, "video/mp4", uploadDirectory, createdFiles);
        media.push({ id: mediaId, kind: "video", src });
        continue;
      }

      throw new SubmissionError(`${file.name} is not a supported image or MP4 video.`);
    }

    const submission: PublishedSubmission = {
      id: submissionId,
      title,
      content,
      village: villageValue,
      category,
      eventDate: eventDateValue || null,
      submittedAt: new Date().toISOString(),
      status: "community-report",
      media,
      socialLinks,
    };

    await publishSubmission(submission);
    return Response.json({ id: submission.id, village: submission.village }, { status: 201, headers: corsHeaders(permittedOrigin(request)) });
  } catch (error) {
    await Promise.all(createdFiles.map((file) => rm(file, { force: true })));
    const message = error instanceof SubmissionError ? error.message : "The update could not be submitted.";
    return Response.json({ error: message }, { status: error instanceof SubmissionError ? 400 : 500, headers: corsHeaders(permittedOrigin(request)) });
  }
}

function text(form: FormData, key: string, minimum: number, maximum: number) {
  const value = String(form.get(key) ?? "").trim();
  if (value.length < minimum || value.length > maximum) throw new SubmissionError(`${key} must be between ${minimum} and ${maximum} characters.`);
  return value;
}

function parseSocialLinks(value: string) {
  const links = value.split(/[\r\n,]+/).map((link) => link.trim()).filter(Boolean);
  if (links.length > MAX_SOCIAL_LINKS) throw new SubmissionError(`Add no more than ${MAX_SOCIAL_LINKS} social media links.`);

  const normalized = links.map((link) => {
    let url: URL;
    try {
      url = new URL(link);
    } catch {
      throw new SubmissionError("Enter complete social links beginning with https://.");
    }

    if (url.protocol !== "https:") throw new SubmissionError("Social links must use https://.");
    const host = url.hostname.toLowerCase().replace(/^www\./, "");
    const supportedHosts = ["instagram.com", "facebook.com", "fb.watch", "youtube.com", "youtu.be", "x.com", "twitter.com"];
    if (!supportedHosts.some((supported) => host === supported || host.endsWith(`.${supported}`))) {
      throw new SubmissionError("Use a public Instagram, Facebook, YouTube, X or Twitter link.");
    }

    url.hash = "";
    for (const parameter of [...url.searchParams.keys()]) {
      if (parameter.startsWith("utm_") || ["igsh", "igshid", "stkn", "feature", "si"].includes(parameter)) url.searchParams.delete(parameter);
    }
    return url.toString();
  });

  return [...new Set(normalized)];
}

class SubmissionError extends Error {}

async function saveMedia(submissionId: string, mediaId: string, extension: string, bytes: Buffer, contentType: string, uploadDirectory: string, createdFiles: string[]) {
  if (isNetlifyRuntime()) {
    const key = `${submissionId}/${mediaId}.${extension}`;
    const result = await getStore("veligonda-media").set(key, Uint8Array.from(bytes).buffer, { metadata: { contentType }, onlyIfNew: true });
    if (!result.modified) throw new Error("A media file with this ID already exists.");
    return `/api/media/${key}`;
  }

  const outputPath = path.join(/* turbopackIgnore: true */ uploadDirectory, `${mediaId}.${extension}`);
  await writeFile(outputPath, bytes);
  createdFiles.push(outputPath);
  return `/media/uploads/${submissionId}/${mediaId}.${extension}`;
}

function enforceSameOrigin(request: Request) {
  if (request.headers.get("origin") && !permittedOrigin(request)) throw new SubmissionError("Invalid submission origin.");
}

function enforceRateLimit(request: Request) {
  const key = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const now = Date.now();
  const recent = (attempts.get(key) ?? []).filter((timestamp) => now - timestamp < 10 * 60 * 1000);
  if (recent.length >= 5) throw new SubmissionError("Too many submissions. Please try again later.");
  recent.push(now);
  attempts.set(key, recent);
}

function permittedOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return null;
  const host = request.headers.get("host");
  if (host && new URL(origin).host === host) return origin;
  const configured = (process.env.PUBLIC_SUBMISSION_ORIGINS ?? "https://ai-reddy.github.io").split(",").map((value) => value.trim());
  return configured.includes(origin) ? origin : null;
}

function corsHeaders(origin: string | null): Headers {
  const headers = new Headers();
  if (origin) {
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type");
    headers.set("Vary", "Origin");
  }
  return headers;
}
