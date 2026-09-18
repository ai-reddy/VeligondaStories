import { notFound } from "next/navigation";
import Link from "next/link";
import { connection } from "next/server";
import { MediaGallery, SubmissionUpdates } from "@/components/media-gallery";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { liveUpdatesUrl } from "@/lib/public-url";
import { groundRealityVillages, isLocale, siteContent } from "@/lib/site-content";
import { getPublishedSubmissions } from "@/lib/submissions";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocaleHome({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  if (process.env.GITHUB_PAGES !== "true") await connection();
  const content = siteContent[locale];
  const latestSubmissions = await getPublishedSubmissions();

  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <section className="documentary-grid relative overflow-hidden bg-river-dark text-white">
          <div aria-hidden="true" className="absolute -right-24 top-12 size-80 rounded-full border-46 border-white/5" />
          <div aria-hidden="true" className="absolute -bottom-32 left-1/3 size-72 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative mx-auto grid min-h-162.5 max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
            <div>
              <p className="eyebrow mb-5 text-xs font-black text-gold">{content.masthead}</p>
              <h1 className="max-w-4xl text-4xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
                {content.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">{content.intro}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#project" className="rounded-full bg-gold px-6 py-3 font-black text-ink transition hover:bg-white">
                  {content.exploreProject}
                </a>
                <a href="#villages" className="rounded-full border border-white/30 px-6 py-3 font-black transition hover:bg-white hover:text-ink">
                  {content.exploreVillages}
                </a>
              </div>
            </div>
            <aside className="relative rounded-4xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur sm:p-8">
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px flex-1 bg-white/25" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">VeligondaStories</span>
                <span className="h-px flex-1 bg-white/25" />
              </div>
              <div className="space-y-3">
                {content.principles.map((principle, index) => (
                  <div key={principle} className="flex items-center gap-4 rounded-2xl bg-black/10 px-4 py-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gold font-black text-ink">{index + 1}</span>
                    <span className="text-lg font-bold">{principle}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 border-l-2 border-gold pl-4 text-sm leading-6 text-white/70">{content.sourceNote}</p>
            </aside>
          </div>
        </section>

        <section id="updates" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <SectionHeading eyebrow={content.latestEyebrow} title={content.latestTitle} intro={content.latestIntro} />
          <div className="mt-10">
            {latestSubmissions.length ? <SubmissionUpdates locale={locale} submissions={latestSubmissions.slice(0, 3)} /> : <p className="rounded-3xl border border-line bg-surface p-8 text-muted">{locale === "te" ? "ఇంకా కమ్యూనిటీ అప్‌డేట్‌లు ప్రచురించబడలేదు." : "No community submissions have been published yet."}</p>}
          </div>
          <Link href={liveUpdatesUrl(locale)} className="mt-8 inline-flex rounded-full bg-earth px-5 py-3 font-black text-white transition hover:bg-ink">
            {locale === "te" ? "అన్ని తాజా అప్‌డేట్‌లు చూడండి" : "View all latest updates"}
          </Link>
        </section>

        <section id="project" className="bg-ink py-20 text-white">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow={content.projectEyebrow} title={content.projectTitle} intro={content.projectIntro} dark />
            <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {content.waterStages.map(([stage, detail, source], index) => (
                <li key={stage} className="relative rounded-2xl border border-white/10 bg-white/5 p-5">
                  <span className="text-3xl font-black text-gold/40">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-8 font-black">{stage}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{detail}</p>
                  <p className="mt-4 border-t border-white/10 pt-3 text-xs leading-5 text-white/45">{source}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="villages" className="bg-paper py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow={locale === "te" ? "వెలిగొండ · నేలమీద వాస్తవం" : "Ground reality · Veligonda"}
              title={locale === "te" ? "ప్రతి గ్రామానికి ఒక Ground Reality కార్డు" : "Each village has its own Ground Reality card"}
              intro={locale === "te" ? "11 గ్రామాలు. వేల కుటుంబాలు. వేర్వేరు కథలు. ఒక పెద్ద మార్పు. క్రింది కార్డులు అందించిన సమాచారం, పేర్కొన్న మీడియా నివేదికలు, ప్రజల నివేదికలను వేర్వేరు స్థితులతో చూపిస్తాయి." : "11 villages. Thousands of families. Different stories. One transformation. These cards distinguish supplied community information from the dated reporting named in the project record."}
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {groundRealityVillages.map((village, index) => (
                <article key={village.nameEn} className="overflow-hidden rounded-3xl border border-line bg-surface shadow-sm">
                  <div className={`h-2 ${index % 2 === 0 ? "bg-earth" : "bg-river"}`} />
                  <div className="p-7 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="eyebrow text-xs font-black text-earth">{locale === "te" ? village.nameTe : village.nameEn}</p>
                        <h3 className="mt-3 text-2xl font-black">{locale === "te" ? village.titleTe : village.titleEn}</h3>
                      </div>
                      <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-black text-earth">{locale === "te" ? "Ground Reality" : "Ground Reality"}</span>
                    </div>
                    <p className="mt-5 leading-7 text-muted">{locale === "te" ? village.summaryTe : village.summaryEn}</p>
                    <blockquote className="mt-6 border-l-4 border-gold pl-4 text-lg font-bold leading-8 text-ink">“{locale === "te" ? village.quoteTe : village.quoteEn}”</blockquote>
                    <p className="mt-6 border-t border-line pt-4 text-xs leading-5 text-muted"><strong className="text-ink">{locale === "te" ? "మూలం మరియు స్థితి: " : "Source and status: "}</strong>{locale === "te" ? village.sourceTe : village.sourceEn}</p>
                    {"trackerTitleTe" in village ? <>
                      <div className="mt-6 rounded-2xl border border-river/20 bg-river/5 p-5">
                        <h4 className="font-black text-river-dark">{locale === "te" ? village.trackerTitleTe : village.trackerTitleEn}</h4>
                        <p className="mt-2 text-sm leading-6 text-muted">{locale === "te" ? village.trackerNoteTe : village.trackerNoteEn}</p>
                      </div>
                      <div className="mt-6 border-t border-line pt-6">
                        <h4 className="text-xl font-black">{locale === "te" ? village.realityTitleTe : village.realityTitleEn}</h4>
                        <p className="mt-4 whitespace-pre-line leading-7 text-muted">{locale === "te" ? village.realityTe : village.realityEn}</p>
                      </div>
                    </> : null}
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 rounded-3xl border border-line bg-surface p-6 sm:p-8">
              <h3 className="text-xl font-black">{locale === "te" ? "మిగిలిన అధికారికంగా పేర్కొన్న ముంపు ఆవాసాలు" : "Other habitations named in the supplied official-list reference"}</h3>
              <p className="mt-3 leading-7 text-muted">{locale === "te" ? "చింతలముడిపి · కాటంరాజు తండా · సాయిరాం నగర్ · రామలింగేశ్వరపురం / మెట్టుగొండి · కృష్ణానగర్ · లక్ష్మీపురం / పొట్టిబసవాయపల్లి · అక్కచెరువు" : "Chintalamudipi · Katamraju Thanda · Sairam Nagar · Ramalingeswarapuram / Mettugondi · Krishna Nagar · Lakshmipuram / Pottibasavayapalli · Akkacheruvu"}</p>
              <p className="mt-4 text-xs leading-5 text-muted">{locale === "te" ? "పూర్తి జాబితా, పేర్ల వేరియంట్లు, ప్రతి గ్రామానికి సంబంధించిన ఆధారాలు అధికారిక మూలాలతో సరిపోల్చాల్సి ఉంది." : "The complete list, spelling variants and village-level evidence still need reconciliation against the authoritative source."}</p>
            </div>
          </div>
        </section>

        <section id="stories" className="border-y border-line bg-surface py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow={content.storyEyebrow} title={content.storyTitle} />
            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
              {content.storyItems.map(([title, description], index) => (
                <article key={title} className="bg-surface p-8 sm:p-10">
                  <span className="grid size-12 place-items-center rounded-full bg-paper text-lg font-black text-river">{index + 1}</span>
                  <h3 className="mt-8 text-2xl font-black">{title}</h3>
                  <p className="mt-4 leading-7 text-muted">{description}</p>
                </article>
              ))}
            </div>
            <Link href={`/${locale}/journey`} className="mt-8 inline-flex rounded-full bg-earth px-5 py-3 font-black text-white transition hover:bg-ink">
              {locale === "te" ? "పూర్తి ప్రయాణాన్ని చూడండి" : "View the complete journey"}
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <SectionHeading
            eyebrow={locale === "te" ? "ఛాయాచిత్రాల ఆర్కైవ్" : "Photograph archive"}
            title={locale === "te" ? "నమోదైన దృశ్యాలు" : "Documented scenes"}
            intro={locale === "te" ? "వ్యక్తిగత సమాచారం లేని సమీక్షించిన చిత్రాలు. తేదీ, స్థలం, మూలం ధృవీకరణ స్థితి ప్రతి కార్డులో కనిపిస్తుంది." : "Reviewed images without obvious personal information. Each card exposes date, location and source-verification status."}
          />
          <div className="mt-10"><MediaGallery locale={locale} limit={3} /></div>
          <Link href={`/${locale}/gallery`} className="mt-8 inline-flex rounded-full border border-river px-5 py-3 font-black text-river transition hover:bg-river hover:text-white">
            {locale === "te" ? "అన్ని చిత్రాలు చూడండి" : "View all photographs"}
          </Link>
        </section>

        <section id="evidence" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <SectionHeading eyebrow={content.evidenceEyebrow} title={content.evidenceTitle} intro={content.evidenceCopy} />
            <Link href={`/${locale}/claims-and-evidence`} className="mt-8 inline-flex rounded-full bg-river px-5 py-3 font-black text-white transition hover:bg-river-dark">
              {content.evidenceCta}
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {content.evidenceTypes.map((type, index) => (
              <div key={type} className="flex min-h-24 items-center gap-4 rounded-2xl border border-line bg-surface p-5">
                <span className={`size-3 shrink-0 rounded-full ${index < 3 ? "bg-river" : index === 4 ? "bg-earth" : "bg-gold"}`} />
                <span className="font-bold">{type}</span>
              </div>
            ))}
          </div>
        </section>

        <span id="privacy" className="sr-only" />
        <span id="corrections" className="sr-only" />
        <span id="methodology" className="sr-only" />
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}

function SectionHeading({ eyebrow, title, intro, dark = false }: { eyebrow: string; title: string; intro?: string; dark?: boolean }) {
  return (
    <div className="max-w-3xl">
      <p className={`eyebrow text-xs font-black ${dark ? "text-gold" : "text-earth"}`}>{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">{title}</h2>
      {intro ? <p className={`mt-5 text-lg leading-8 ${dark ? "text-white/65" : "text-muted"}`}>{intro}</p> : null}
    </div>
  );
}
