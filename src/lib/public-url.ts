import type { Locale } from "@/lib/site-content";
import type { PublishedSubmission } from "@/lib/submissions";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";
const liveOrigin = process.env.NEXT_PUBLIC_LIVE_ORIGIN?.replace(/\/$/, "") ?? "";

export function publicAssetUrl(source: string) {
  if (source.startsWith("/api/media/") && liveOrigin) return `${liveOrigin}${source}`;
  if (source.startsWith("/")) return `${basePath}${source}`;
  return source;
}

export function submissionEndpoint() {
  return liveOrigin ? `${liveOrigin}/api/submissions` : "/api/submissions";
}

export function socialLinksEndpoint() {
  return liveOrigin ? `${liveOrigin}/api/social-links` : "/api/social-links";
}

export function liveGalleryUrl(locale: Locale, village: PublishedSubmission["village"], submissionId: string) {
  const route = village === "gundancharla" ? "gc-live-status" : "updates";
  return liveOrigin ? `${liveOrigin}/${locale}/${route}?submitted=${submissionId}` : `/${locale}/${route}?submitted=${submissionId}`;
}

export function liveUpdatesUrl(locale: Locale) {
  return liveOrigin ? `${liveOrigin}/${locale}/updates` : `/${locale}/updates`;
}
