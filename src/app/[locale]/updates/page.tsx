import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { SubmissionUpdates } from "@/components/media-gallery";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isLocale } from "@/lib/site-content";
import { getPublishedSubmissions } from "@/lib/submissions";

type UpdatesPageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: UpdatesPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: locale === "te" ? "తాజా వెలిగొండ అప్‌డేట్‌లు" : "Latest Veligonda updates",
    description: locale === "te" ? "తేదీ క్రమంలో తాజా వెలిగొండ సామాజిక నివేదికలు మరియు మూలాలు." : "The latest Veligonda community reports and sources in date order.",
  };
}

export default async function UpdatesPage({ params }: UpdatesPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  if (process.env.GITHUB_PAGES !== "true") await connection();
  const submissions = await getPublishedSubmissions();
  const copy = locale === "te"
    ? { home: "హోమ్", eyebrow: "సజీవ ప్రజా ఆర్కైవ్", title: "తాజా వెలిగొండ అప్‌డేట్‌లు", intro: "కొత్తగా సమర్పించిన నివేదికలు, సోషల్ మీడియా మూలాలు, ఫోటోలు మరియు వీడియోలను తేదీ క్రమంలో ఇక్కడ చూడవచ్చు.", empty: "ఇంకా సామాజిక అప్‌డేట్‌లు ప్రచురించబడలేదు.", submit: "కొత్త అప్‌డేట్ ప్రచురించండి" }
    : { home: "Home", eyebrow: "Living public archive", title: "Latest Veligonda updates", intro: "Track newly submitted reports, social media sources, photographs and videos here in date order.", empty: "No community updates have been published yet.", submit: "Publish a new update" };

  return (
    <>
      <SiteHeader locale={locale} currentPath="/updates" />
      <main id="main-content">
        <header className="bg-river-dark text-white"><div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <Link href={`/${locale}`} className="text-sm font-bold text-gold">← {copy.home}</Link>
          <p className="eyebrow mt-10 text-xs font-black text-gold">{copy.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black sm:text-6xl">{copy.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">{copy.intro}</p>
          <Link href={`/${locale}/submit`} className="mt-8 inline-flex rounded-full bg-gold px-5 py-3 font-black text-ink">{copy.submit}</Link>
        </div></header>
        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          {submissions.length ? <SubmissionUpdates locale={locale} submissions={submissions} /> : <p className="rounded-3xl border border-line bg-surface p-8 text-muted">{copy.empty}</p>}
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}