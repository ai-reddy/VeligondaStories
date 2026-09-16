import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SubmissionForm } from "@/components/submission-form";
import { isLocale } from "@/lib/site-content";

type SubmitPageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: SubmitPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: locale === "te" ? "అప్‌డేట్ సమర్పించండి" : "Submit an update", robots: { index: false, follow: false } };
}

export default async function SubmitPage({ params }: SubmitPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = locale === "te"
    ? { home: "హోమ్", eyebrow: "సామాజిక సమర్పణ", title: "అప్‌డేట్ సమర్పించండి", intro: "వివరాలు తప్పనిసరి. ఫోటోలు, వీడియోలు ఐచ్చికం. గుండంచర్ల అప్‌డేట్‌లు ప్రచురించిన వెంటనే గుండంచర్ల గ్యాలరీలో కనిపిస్తాయి." }
    : { home: "Home", eyebrow: "Community submission", title: "Submit an update", intro: "Written details are mandatory; photos and videos are optional. Gundancharla updates appear in the Gundancharla gallery immediately after publication." };

  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <header className="bg-river-dark text-white"><div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
          <Link href={`/${locale}`} className="text-sm font-bold text-gold">← {copy.home}</Link>
          <p className="eyebrow mt-10 text-xs font-black text-gold">{copy.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black sm:text-6xl">{copy.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">{copy.intro}</p>
        </div></header>
        <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8"><SubmissionForm locale={locale} /></section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
