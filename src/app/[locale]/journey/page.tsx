import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { publicPhotos } from "@/components/media-gallery";
import { VerificationBadge } from "@/components/verification-badge";
import { journeyContent } from "@/lib/journey-content";
import { isLocale } from "@/lib/site-content";
import { publicAssetUrl } from "@/lib/public-url";

type JourneyPageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: JourneyPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: journeyContent[locale].title, description: journeyContent[locale].intro };
}

export default async function JourneyPage({ params }: JourneyPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const currentLocale = locale;
  const content = journeyContent[currentLocale];
  const photoBySlug = new Map(publicPhotos.map((photo) => [photo.slug, photo]));
  const labels = locale === "te"
    ? { eyebrow: "మానవ కాలక్రమం", home: "హోమ్", notice: "మూలాల గమనిక", mediaSource: "సామాజిక సమర్పణ · తేదీ, స్థలం ధృవీకరణలో ఉన్నాయి" }
    : { eyebrow: "The human timeline", home: "Home", notice: "Source notice", mediaSource: "Community submission · Date and location pending confirmation" };

  return (
    <>
      <SiteHeader locale={currentLocale} />
      <main id="main-content">
        <header className="documentary-grid bg-river-dark text-white">
          <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
            <Link href={`/${currentLocale}`} className="text-sm font-bold text-gold">← {labels.home}</Link>
            <p className="eyebrow mt-10 text-xs font-black text-gold">{labels.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">{content.title}</h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-white/70">{content.intro}</p>
            <aside className="mt-10 rounded-2xl border border-gold/30 bg-gold/10 p-5 text-sm leading-7 text-white/80">
              <strong className="text-gold">{labels.notice}:</strong> {content.sourceNotice}
            </aside>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
          <ol className="relative space-y-8 before:absolute before:bottom-0 before:left-6 before:top-0 before:w-px before:bg-line sm:before:left-8">
            {content.stages.map((stage) => {
              const photo = stage.mediaSlug ? photoBySlug.get(stage.mediaSlug) : undefined;
              return (
                <li key={stage.number} className="relative pl-16 sm:pl-24">
                  <span className="absolute left-0 top-0 grid size-12 place-items-center rounded-full border-4 border-paper bg-river text-sm font-black text-white shadow sm:size-16 sm:text-lg">
                    {String(stage.number).padStart(2, "0")}
                  </span>
                  <article className="overflow-hidden rounded-3xl border border-line bg-surface shadow-sm">
                    {photo ? (
                      <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                        <div className="relative min-h-64 bg-line">
                          <Image src={publicAssetUrl(photo.src)} alt={currentLocale === "te" ? photo.altTe : photo.altEn} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
                        </div>
                        <StageCopy />
                      </div>
                    ) : <StageCopy />}
                  </article>
                </li>
              );

              function StageCopy() {
                return (
                  <div className="p-6 sm:p-8">
                    <VerificationBadge classification={stage.classification} locale={currentLocale} />
                    <h2 className="mt-5 text-2xl font-black sm:text-3xl">{stage.title}</h2>
                    <p className="mt-4 leading-8 text-muted">{stage.summary}</p>
                    {photo ? <p className="mt-6 border-t border-line pt-4 text-xs font-bold text-muted">{labels.mediaSource}</p> : null}
                  </div>
                );
              }
            })}
          </ol>
        </div>
      </main>
      <SiteFooter locale={currentLocale} />
    </>
  );
}
