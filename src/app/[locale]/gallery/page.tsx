import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { MediaGallery, SubmissionUpdates, VideoGallery } from "@/components/media-gallery";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isLocale } from "@/lib/site-content";
import { getPublishedSubmissions } from "@/lib/submissions";

type GalleryPageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: GalleryPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: locale === "te" ? "ఛాయాచిత్రాల ఆర్కైవ్" : "Photograph archive",
    description: locale === "te" ? "మూలం, తేదీ, ధృవీకరణ స్థితితో వెలిగొండ ఛాయాచిత్రాలు." : "Veligonda photographs with source, date and verification status.",
  };
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  if (process.env.GITHUB_PAGES !== "true") await connection();
  const submissions = await getPublishedSubmissions();
  const copy = locale === "te"
    ? { home: "హోమ్", eyebrow: "మీడియా ఆర్కైవ్", title: "గ్యాలరీ", intro: "అందించిన అన్ని ప్రత్యేక చిత్రాలు, వీడియోలు మరియు కొత్త సామాజిక అప్‌డేట్‌లు. తేదీలు, స్థలాలు, మూలాల ధృవీకరణ స్థితి స్పష్టంగా చూపబడుతుంది.", photos: "అన్ని చిత్రాలు", videos: "అన్ని వీడియోలు", gc: "గుండంచర్ల గ్యాలరీ" }
    : { home: "Home", eyebrow: "Media archive", title: "Gallery", intro: "Every unique supplied image and video, plus newly published community updates. Date, location and source-verification status remain visible.", photos: "All photographs", videos: "All videos", gc: "Gundancharla gallery" };

  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <header className="bg-ink text-white">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
            <Link href={`/${locale}`} className="text-sm font-bold text-gold">← {copy.home}</Link>
            <p className="eyebrow mt-10 text-xs font-black text-gold">{copy.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-black sm:text-6xl">{copy.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">{copy.intro}</p>
            <Link href={`/${locale}/gc-gallery`} className="mt-8 inline-flex rounded-full bg-gold px-5 py-3 font-black text-ink">{copy.gc}</Link>
          </div>
        </header>
        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <SubmissionUpdates locale={locale} submissions={submissions} />
          <h2 className="mb-8 text-3xl font-black">{copy.photos}</h2>
          <MediaGallery locale={locale} />
          <h2 className="mb-8 mt-20 text-3xl font-black">{copy.videos}</h2>
          <VideoGallery locale={locale} />
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
