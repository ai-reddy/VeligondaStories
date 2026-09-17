import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isLocale } from "@/lib/site-content";
import { getPublishedSubmissions } from "@/lib/submissions";
import { publicAssetUrl } from "@/lib/public-url";

type ClaimsEvidencePageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: ClaimsEvidencePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: locale === "te" ? "వాదనలు మరియు ఆధారాలు" : "Claims and evidence" };
}

export default async function ClaimsEvidencePage({ params }: ClaimsEvidencePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  if (process.env.GITHUB_PAGES !== "true") await connection();

  const submissions = await getPublishedSubmissions();
  const documentClaims = submissions.filter((submission) => submission.media.some((media) => media.kind === "document"));
  const copy = locale === "te" ? {
    home: "హోమ్", eyebrow: "ఆధారాల ఆర్కైవ్", title: "వాదనలు మరియు ఆధారాలు",
    intro: "ప్రతి కమ్యూనిటీ వాదనకు తేదీ, గ్రామం, మూలం మరియు అందుబాటులో ఉన్న పత్రాన్ని కలిపి ఉంచే స్థలం.",
    rule: "కమ్యూనిటీ సమర్పణలు స్వతంత్రంగా ధృవీకరించిన వాస్తవాలు కావు. పత్రం జతచేస్తే అది ఆధారంగా భద్రపరచబడుతుంది; పత్రం వాదనను నిజమని స్వయంచాలకంగా నిరూపించదు.",
    documents: "పత్రాలతో వచ్చిన సమర్పణలు", empty: "ఇంకా పత్రంతో కూడిన సమర్పణ లేదు.",
    document: "సమర్పించిన పత్రాన్ని తెరవండి", report: "కమ్యూనిటీ నివేదిక", submitted: "సమర్పించిన తేదీ", submit: "వాదన లేదా పత్రాన్ని సమర్పించండి",
  } : {
    home: "Home", eyebrow: "Evidence archive", title: "Claims and evidence",
    intro: "A traceable place where each community claim can stay connected to its date, village, source and any document supplied with it.",
    rule: "Community submissions are not independently verified facts. An attached document is preserved as evidence; it does not automatically prove the claim.",
    documents: "Submissions with documents", empty: "No document-backed submissions have been published yet.",
    document: "Open submitted document", report: "Community report", submitted: "Submitted", submit: "Submit a claim or document",
  };

  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <header className="bg-ink text-white">
          <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
            <Link href={`/${locale}`} className="text-sm font-bold text-gold">← {copy.home}</Link>
            <p className="eyebrow mt-10 text-xs font-black text-gold">{copy.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-black sm:text-6xl">{copy.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">{copy.intro}</p>
          </div>
        </header>
        <section className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
          <aside className="mb-12 rounded-3xl border border-gold/40 bg-gold/10 p-6 leading-7 text-muted">{copy.rule}</aside>
          <h2 className="mb-8 text-3xl font-black">{copy.documents}</h2>
          {documentClaims.length ? (
            <div className="grid gap-6">
              {documentClaims.map((submission) => (
                <article key={submission.id} className="rounded-3xl border border-line bg-surface p-6 shadow-sm sm:p-8">
                  <div className="flex flex-wrap gap-2 text-xs font-bold"><span className="rounded-full bg-gold/20 px-3 py-1">{copy.report}</span><span className="rounded-full bg-paper px-3 py-1">{submission.village}</span><span className="rounded-full bg-paper px-3 py-1">{submission.category}</span></div>
                  <h3 className="mt-5 text-2xl font-black">{submission.title}</h3>
                  <p className="mt-4 whitespace-pre-wrap leading-7 text-muted">{submission.content}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {submission.media.filter((media) => media.kind === "document").map((media) => <a key={media.id} href={publicAssetUrl(media.src)} target="_blank" rel="noopener noreferrer" className="rounded-full bg-river px-4 py-2 text-sm font-black text-white">{copy.document}</a>)}
                  </div>
                  <p className="mt-5 text-xs font-bold text-muted">{submission.eventDate ? `${submission.eventDate} · ` : ""}{copy.submitted}: {new Date(submission.submittedAt).toLocaleString(locale === "te" ? "te-IN" : "en-IN")}</p>
                </article>
              ))}
            </div>
          ) : <p className="rounded-3xl border border-line bg-surface p-8 text-muted">{copy.empty}</p>}
          <Link href={`/${locale}/submit`} className="mt-8 inline-flex rounded-full bg-earth px-5 py-3 font-black text-white">{copy.submit}</Link>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
