import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isLocale } from "@/lib/site-content";
import { publicAssetUrl } from "@/lib/public-url";

const redactedDocumentSrc = "/media/documents/collector-representation-relocation-arrangements-redacted.pdf";

type EvidencePageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: EvidencePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: locale === "te" ? "పత్రాలు మరియు ఆధారాలు" : "Documents and evidence" };
}

export default async function EvidencePage({ params }: EvidencePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = locale === "te" ? {
    home: "హోమ్", eyebrow: "ఆధారాల ఆర్కైవ్", title: "పత్రాలు మరియు ఆధారాలు",
    intro: "ప్రజా రికార్డు పారదర్శకంగా ఉండాలి; వ్యక్తిగత సమాచారం మాత్రం రక్షించాలి.",
    document: "తరలింపు ఏర్పాట్లపై కలెక్టర్‌కు వినతిపత్రం", type: "వినతిపత్రం",
    restricted: "సంతకాలు తొలగించి ప్రచురించబడింది",
    reason: "అసలు పత్రంలో గ్రామస్తుల సంతకాలు మరియు వ్యక్తిగత వివరాలు ఉన్నాయి. దిగువ ప్రచురించిన ప్రజా కాపీలో ముగింపు విభాగంలోని సంతకాలు, వ్యక్తిగత వివరాలు తొలగించబడ్డాయి; మిగిలిన విషయం పూర్తిగా కనిపిస్తుంది.",
    available: "ప్రస్తుతం అందుబాటులో ఉన్నది", availableText: "సంతకాలు తొలగించిన ప్రజా PDF దిగువన అందుబాటులో ఉంది. అసలు ఫైల్ సురక్షిత మూల ఆర్కైవ్‌లో నిల్వ ఉంది.",
    next: "తదుపరి చర్య", nextText: "సమర్పణ తేదీ, శాఖ, రసీదు సంఖ్య, స్పందన స్థితిని జతచేయాలి.",
    file: "మూల ఫైల్", fileValue: "Collector representation for relocation arrengements.pdf · 10 MB · ప్రైవేట్ మూల ఆర్కైవ్", download: "సంతకాలు తొలగించిన PDF చూడండి", submit: "సవరించిన పత్రాన్ని సమర్పించండి",
  } : {
    home: "Home", eyebrow: "Evidence archive", title: "Documents and evidence",
    intro: "A public record should be transparent while still protecting personal information.",
    document: "Representation to the Collector concerning relocation arrangements", type: "Representation",
    restricted: "Published with signatures redacted",
    reason: "The original document contains villagers’ signatures and potentially identifying details. In the public copy below, the closing section — signatures and personal details — has been masked; the rest of the content remains fully visible.",
    available: "Currently available", availableText: "A public copy with signatures redacted is available below. The original file remains in the protected source archive.",
    next: "Next action", nextText: "Attach submission date, department, acknowledgement number and response status.",
    file: "Source file", fileValue: "Collector representation for relocation arrengements.pdf · 10 MB · Private source archive", download: "View the redacted PDF", submit: "Submit a redacted document update",
  };

  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <header className="bg-ink text-white"><div className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
          <Link href={`/${locale}`} className="text-sm font-bold text-gold">← {copy.home}</Link>
          <p className="eyebrow mt-10 text-xs font-black text-gold">{copy.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black sm:text-6xl">{copy.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">{copy.intro}</p>
        </div></header>
        <section className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
          <article className="rounded-3xl border border-line bg-surface p-7 shadow-sm sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="rounded-full bg-river/10 px-3 py-1 text-xs font-black text-river-dark">{copy.type}</span>
              <span className="rounded-full bg-earth/10 px-3 py-1 text-xs font-black text-earth">{copy.restricted}</span>
            </div>
            <h2 className="mt-7 text-2xl font-black sm:text-3xl">{copy.document}</h2>
            <p className="mt-5 leading-8 text-muted">{copy.reason}</p>
            <p className="mt-5 rounded-2xl border border-line bg-paper p-4 text-sm font-bold text-muted"><strong className="text-ink">{copy.file}:</strong> {copy.fileValue}</p>
            <a
              href={publicAssetUrl(redactedDocumentSrc)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-full bg-ink px-5 py-3 font-black text-white"
            >
              {copy.download}
            </a>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-paper p-5"><dt className="font-black">{copy.available}</dt><dd className="mt-2 text-sm leading-6 text-muted">{copy.availableText}</dd></div>
              <div className="rounded-2xl bg-paper p-5"><dt className="font-black">{copy.next}</dt><dd className="mt-2 text-sm leading-6 text-muted">{copy.nextText}</dd></div>
            </dl>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={`/${locale}/claims-and-evidence`} className="inline-flex rounded-full bg-river px-5 py-3 font-black text-white">{locale === "te" ? "వాదనలు మరియు ఆధారాలు" : "Claims and evidence"}</Link>
              <Link href={`/${locale}/submit`} className="inline-flex rounded-full border border-river px-5 py-3 font-black text-river">{copy.submit}</Link>
            </div>
          </article>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
