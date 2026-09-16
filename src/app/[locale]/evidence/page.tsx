import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isLocale } from "@/lib/site-content";

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
    restricted: "ప్రజలకు అందుబాటులో లేదు — సవరణ అవసరం",
    reason: "అసలు పత్రంలో గ్రామస్తుల సంతకాలు మరియు వ్యక్తిగత వివరాలు ఉన్నాయి. ప్రజా కాపీ విడుదలకు ముందు సంతకాలు, ఫోన్ నంబర్లు, చిరునామాలు, ఇతర గుర్తింపు వివరాలను తొలగించాలి.",
    available: "ప్రస్తుతం అందుబాటులో ఉన్నది", availableText: "పత్రం పేరు, రకం, సమర్పణ సందర్భం మాత్రమే. అసలు ఫైల్ సురక్షిత మూల ఆర్కైవ్‌లో నిల్వ ఉంది.",
    next: "తదుపరి చర్య", nextText: "పేజీల వారీ గోప్యతా సమీక్ష, సవరించిన ప్రజా PDF, సమర్పణ తేదీ, శాఖ, రసీదు సంఖ్య, స్పందన స్థితిని జతచేయాలి.",
    file: "మూల ఫైల్", fileValue: "Collector representation for relocation arrengements.pdf · 10 MB · ప్రైవేట్ మూల ఆర్కైవ్", submit: "సవరించిన పత్రాన్ని సమర్పించండి",
  } : {
    home: "Home", eyebrow: "Evidence archive", title: "Documents and evidence",
    intro: "A public record should be transparent while still protecting personal information.",
    document: "Representation to the Collector concerning relocation arrangements", type: "Representation",
    restricted: "Not publicly available — redaction required",
    reason: "The original document contains villagers’ signatures and potentially identifying details. Signatures, phone numbers, addresses and other personal identifiers must be removed before a public copy is released.",
    available: "Currently available", availableText: "Document title, type and submission context only. The original file remains in the protected source archive.",
    next: "Next action", nextText: "Complete page-by-page privacy review, produce a redacted public PDF, and attach submission date, department, acknowledgement number and response status.",
    file: "Source file", fileValue: "Collector representation for relocation arrengements.pdf · 10 MB · Private source archive", submit: "Submit a redacted document update",
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
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-paper p-5"><dt className="font-black">{copy.available}</dt><dd className="mt-2 text-sm leading-6 text-muted">{copy.availableText}</dd></div>
              <div className="rounded-2xl bg-paper p-5"><dt className="font-black">{copy.next}</dt><dd className="mt-2 text-sm leading-6 text-muted">{copy.nextText}</dd></div>
            </dl>
            <Link href={`/${locale}/submit`} className="mt-7 inline-flex rounded-full bg-river px-5 py-3 font-black text-white">{copy.submit}</Link>
          </article>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
