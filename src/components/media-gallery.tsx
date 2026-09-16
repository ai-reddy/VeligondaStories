import Image from "next/image";
import generatedMedia from "../../content/generated-media.json";
import { PhotoLightbox } from "@/components/photo-lightbox";
import type { Locale } from "@/lib/site-content";
import type { PublishedSubmission } from "@/lib/submissions";
import { publicAssetUrl } from "@/lib/public-url";

export type PublicPhoto = (typeof generatedMedia.photos)[number];

export const publicPhotos = generatedMedia.photos;
export const publicVideos = generatedMedia.videos;

export function MediaGallery({ locale, limit }: { locale: Locale; limit?: number }) {
  const photos = typeof limit === "number" ? publicPhotos.slice(0, limit) : publicPhotos;
  return <PhotoLightbox locale={locale} photos={photos} />;
}

export function VideoGallery({ locale }: { locale: Locale }) {
  const labels = locale === "te"
    ? { source: "మూలం: సామాజిక సమర్పణ", status: "సామాజిక నివేదిక", date: "తేదీ నిర్ధారణలో ఉంది", unsupported: "మీ బ్రౌజర్ ఈ వీడియోను ప్లే చేయలేకపోయింది." }
    : { source: "Source: Community submission", status: "Community report", date: "Date pending confirmation", unsupported: "Your browser could not play this video." };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {publicVideos.map((video) => (
        <article key={video.slug} className="overflow-hidden rounded-3xl border border-line bg-surface shadow-sm">
          <video controls preload="metadata" poster={publicAssetUrl(video.poster)} className="aspect-video w-full bg-ink" aria-label={locale === "te" ? video.titleTe : video.titleEn}>
            <source src={publicAssetUrl(video.src)} type="video/mp4" />{labels.unsupported}
          </video>
          <div className="p-5">
            <h3 className="text-lg font-black">{locale === "te" ? video.titleTe : video.titleEn}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{locale === "te" ? video.descriptionTe : video.descriptionEn}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-bold text-muted">
              <span className="rounded-full bg-paper px-3 py-1">{labels.source}</span><span className="rounded-full bg-gold/15 px-3 py-1">{labels.status}</span><span className="rounded-full bg-paper px-3 py-1">{labels.date}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function SubmissionUpdates({ locale, submissions }: { locale: Locale; submissions: PublishedSubmission[] }) {
  if (!submissions.length) return null;
  const labels = locale === "te" ? { heading: "తాజా సామాజిక అప్‌డేట్‌లు", report: "సామాజిక నివేదిక", submitted: "సమర్పించిన తేదీ", event: "సంఘటన తేదీ" } : { heading: "Latest community updates", report: "Community report", submitted: "Submitted", event: "Event date" };

  return (
    <section className="mb-16">
      <h2 className="mb-8 text-3xl font-black">{labels.heading}</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        {submissions.map((submission) => (
          <article key={submission.id} className="overflow-hidden rounded-3xl border border-line bg-surface shadow-sm">
            {submission.media.length ? <div className="grid grid-cols-2 gap-px bg-line">
              {submission.media.map((media) => media.kind === "image" ? (
                <a key={media.id} href={publicAssetUrl(media.src)} target="_blank" rel="noopener noreferrer" className="relative block aspect-4/3 bg-line"><Image src={publicAssetUrl(media.src)} alt="" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" /></a>
              ) : (
                <video key={media.id} controls preload="metadata" className="aspect-4/3 w-full bg-ink"><source src={publicAssetUrl(media.src)} type="video/mp4" /></video>
              ))}
            </div> : null}
            <div className="p-6">
              <div className="flex flex-wrap gap-2 text-xs font-bold"><span className="rounded-full bg-gold/20 px-3 py-1">{labels.report}</span><span className="rounded-full bg-paper px-3 py-1">{submission.category}</span></div>
              <h3 className="mt-5 text-2xl font-black">{submission.title}</h3>
              <p className="mt-3 whitespace-pre-wrap leading-7 text-muted">{submission.content}</p>
              <p className="mt-5 text-xs font-bold text-muted">{submission.eventDate ? `${labels.event}: ${submission.eventDate} · ` : ""}{labels.submitted}: {new Date(submission.submittedAt).toLocaleString(locale === "te" ? "te-IN" : "en-IN")}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
