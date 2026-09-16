import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VideoGallery } from "@/components/media-gallery";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isLocale } from "@/lib/site-content";

type VideosPageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: VideosPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: locale === "te" ? "వీడియో ఆర్కైవ్" : "Video archive" };
}

export default async function VideosPage({ params }: VideosPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = locale === "te" ? {
    home: "హోమ్", eyebrow: "మీడియా ఆర్కైవ్", title: "వీడియోలు",
    intro: "అందించిన ఎనిమిది గుండంచర్ల వీడియోలు. తేదీ, ఖచ్చితమైన స్థలం, సమ్మతి వివరాలు నిర్ధారణలో ఉన్నందున ప్రతి అంశం సామాజిక నివేదికగా గుర్తించబడింది.",
    gallery: "గుండంచర్ల గ్యాలరీ",
  } : {
    home: "Home", eyebrow: "Media archive", title: "Videos",
    intro: "All eight supplied Gundancharla videos. Each remains labelled as a community report while date, precise location and consent details are confirmed.",
    gallery: "Gundancharla gallery",
  };

  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <header className="bg-river-dark text-white"><div className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
          <Link href={`/${locale}`} className="text-sm font-bold text-gold">← {copy.home}</Link>
          <p className="eyebrow mt-10 text-xs font-black text-gold">{copy.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black sm:text-6xl">{copy.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">{copy.intro}</p>
          <Link href={`/${locale}/gc-gallery`} className="mt-8 inline-flex rounded-full bg-gold px-5 py-3 font-black text-ink">{copy.gallery}</Link>
        </div></header>
        <section className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
          <VideoGallery locale={locale} />
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
