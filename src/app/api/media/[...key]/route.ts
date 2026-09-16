import { getStore } from "@netlify/blobs";

export const runtime = "nodejs";

type MediaRouteProps = { params: Promise<{ key: string[] }> };

export async function GET(_request: Request, { params }: MediaRouteProps) {
  const { key } = await params;
  const blobKey = key.join("/");

  if (!/^[a-f0-9-]+\/[a-f0-9-]+\.(webp|mp4)$/.test(blobKey)) {
    return new Response("Not found", { status: 404 });
  }

  const entry = await getStore("veligonda-media").getWithMetadata(blobKey, { type: "arrayBuffer" });
  if (!entry) return new Response("Not found", { status: 404 });

  const fallbackType = blobKey.endsWith(".mp4") ? "video/mp4" : "image/webp";
  const contentType = typeof entry.metadata?.contentType === "string" ? entry.metadata.contentType : fallbackType;
  return new Response(entry.data, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
