import { notFound } from "next/navigation";
import Link from "next/link";
import { MediaGallery } from "@/components/media-gallery";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isLocale, siteContent } from "@/lib/site-content";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocaleHome({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = siteContent[locale];

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
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {content.updates.map(([type, title, description], index) => (
              <article key={title} className="group overflow-hidden rounded-3xl border border-line bg-surface shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className={`h-2 ${index === 0 ? "bg-earth" : index === 1 ? "bg-river" : "bg-gold"}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="eyebrow text-[10px] font-black text-earth">{type}</p>
                    <span className="rounded-full bg-paper px-3 py-1 text-[11px] font-bold text-muted">{content.pending}</span>
                  </div>
                  <h3 className="mt-8 text-2xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-muted">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="project" className="bg-ink py-20 text-white">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow={content.projectEyebrow} title={content.projectTitle} intro={content.projectIntro} dark />
            <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
              {content.waterStages.map((stage, index) => (
                <li key={stage} className="relative rounded-2xl border border-white/10 bg-white/5 p-5">
                  <span className="text-3xl font-black text-gold/40">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-8 font-black">{stage}</h3>
                  <p className="mt-2 text-xs leading-5 text-white/50">{content.stageStatus}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="villages" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <SectionHeading eyebrow={content.villagesEyebrow} title={content.villagesTitle} intro={content.villagesIntro} />
          <article className="relative overflow-hidden rounded-4xl bg-earth p-8 text-white shadow-xl sm:p-10">
            <div aria-hidden="true" className="absolute -right-12 -top-12 size-48 rounded-full border-30 border-white/10" />
            <p className="eyebrow text-xs font-black text-white/65">{content.featuredVillage}</p>
            <p className="mt-8 text-4xl font-black sm:text-5xl">{content.villageTe}</p>
            <h3 className="mt-1 text-xl font-bold text-white/75">{content.villageName}</h3>
            <p className="mt-6 max-w-2xl leading-7 text-white/80">{content.villageCopy}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {content.archiveSections.map((item) => (
                <span key={item} className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold">{item}</span>
              ))}
            </div>
          </article>
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
            <Link href={`/${locale}/evidence`} className="mt-8 inline-flex rounded-full bg-river px-5 py-3 font-black text-white transition hover:bg-river-dark">
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
