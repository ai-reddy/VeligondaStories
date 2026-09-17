import { getPublishedSubmissions } from "@/lib/submissions";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const submissions = await getPublishedSubmissions();
  const links = [...new Set(submissions.flatMap((submission) => submission.socialLinks ?? []))]
    .filter(isSupportedSocialLink)
    .slice(0, 12);

  return Response.json({ links }, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

function isSupportedSocialLink(value: string) {
  try {
    const url = new URL(value);
    if (url.protocol !== "https:") return false;
    const host = url.hostname.toLowerCase().replace(/^www\./, "");
    return ["instagram.com", "facebook.com", "fb.watch", "youtube.com", "youtu.be", "x.com", "twitter.com"]
      .some((supported) => host === supported || host.endsWith(`.${supported}`));
  } catch {
    return false;
  }
}