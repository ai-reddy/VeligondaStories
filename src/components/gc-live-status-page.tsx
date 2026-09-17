import Link from "next/link";
import { SubmissionUpdates, verifiedVillagePhotos } from "@/components/media-gallery";
import { PhotoLightbox } from "@/components/photo-lightbox";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Locale } from "@/lib/site-content";
import { getPublishedSubmissions } from "@/lib/submissions";

export async function GcLiveStatusPage({ locale }: { locale: Locale }) {
  const submissions = await getPublishedSubmissions("gundancharla");
  const copy = locale === "te"
    ? { home: "హోమ్", gallery: "గుండంచర్ల గ్యాలరీ", eyebrow: "గుండంచర్ల ప్రత్యక్ష స్థితి", title: "గుండంచర్ల ప్రస్తుత స్థితి అప్‌డేట్‌లు", intro: "గ్రామం నుంచి అందిన తాజా చిత్రాలు మరియు సామాజిక నివేదికలు. ధృవీకరించిన చిత్రాలు, సమాజం పంపిన వాదనలు వేర్వేరు స్థితులతో చూపబడతాయి.", verified: "ధృవీకరించిన తాజా గ్రామ చిత్రాలు", notice: "గమనిక: క్రింద ఉన్న వ్రాతపూర్వక సమర్పణలు సామాజిక నివేదికలు. వాటిలోని ఆరోపణలను VeligondaStories స్వతంత్రంగా ధృవీకరించలేదు.", submit: "గుండంచర్ల అప్‌డేట్ సమర్పించండి" }
    : { home: "Home", gallery: "Gundancharla gallery", eyebrow: "Gundancharla live status", title: "Gundancharla current-status updates", intro: "Recent village images and community reports. Verified photographs and community-submitted claims are shown with separate status labels.", verified: "Latest verified village images", notice: "Note: Written submissions below are community reports. VeligondaStories has not independently verified allegations contained in them.", submit: "Submit a Gundancharla update" };

  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <header className="documentary-grid bg-river-dark text-white"><div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="flex flex-wrap gap-5 text-sm font-bold text-white/80"><Link href={`/${locale}`}>← {copy.home}</Link><Link href={`/${locale}/gc-gallery`}>{copy.gallery}</Link></div>
          <p className="eyebrow mt-10 text-xs font-black text-gold">{copy.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black sm:text-6xl">{copy.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">{copy.intro}</p>
          <Link href={`/${locale}/submit`} className="mt-8 inline-flex rounded-full bg-gold px-5 py-3 font-black text-ink">{copy.submit}</Link>
        </div></header>
        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <h2 className="mb-8 text-3xl font-black">{copy.verified}</h2>
          <PhotoLightbox locale={locale} photos={verifiedVillagePhotos} />
          <p className="my-12 rounded-2xl border border-gold/40 bg-gold/10 p-5 text-sm leading-6 text-muted">{copy.notice}</p>
          <SubmissionUpdates locale={locale} submissions={submissions} />
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}