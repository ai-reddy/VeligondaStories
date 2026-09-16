const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";
const liveOrigin = process.env.NEXT_PUBLIC_LIVE_ORIGIN?.replace(/\/$/, "") ?? "";

export function publicAssetUrl(source: string) {
  if (source.startsWith("/media/")) return `${basePath}${source}`;
  if (source.startsWith("/api/media/") && liveOrigin) return `${liveOrigin}${source}`;
  return source;
}

export function submissionEndpoint() {
  return liveOrigin ? `${liveOrigin}/api/submissions` : "/api/submissions";
}

export function liveGalleryUrl(locale: string, village: string, submissionId: string) {
  const route = village === "gundancharla" ? "gc-gallery" : "gallery";
  return liveOrigin ? `${liveOrigin}/${locale}/${route}?submitted=${submissionId}` : `/${locale}/${route}?submitted=${submissionId}`;
}
