import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { MediaGallery, SubmissionUpdates, VideoGallery } from "@/components/media-gallery";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isLocale } from "@/lib/site-content";
import { getPublishedSubmissions } from "@/lib/submissions";

type GcGalleryPageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: GcGalleryPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: locale === "te" ? "గుండంచర్ల గ్యాలరీ" : "Gundancharla gallery", description: locale === "te" ? "గుండంచర్ల గ్రామ చిత్రాలు, వీడియోలు, సామాజిక అప్‌డేట్‌లు." : "Gundancharla village photographs, videos and community updates." };
}

export default async function GcGalleryPage({ params }: GcGalleryPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  if (process.env.GITHUB_PAGES !== "true") await connection();
  const submissions = await getPublishedSubmissions("gundancharla");
  const copy = locale === "te" ? {
    home: "హోమ్", all: "అన్ని మీడియా", documents: "పత్రాలు", eyebrow: "గ్రామ ఆర్కైవ్", title: "గుండంచర్ల గ్యాలరీ", intro: "గుండంచర్లకు కేటాయించిన అన్ని అందించిన చిత్రాలు, వీడియోలు మరియు వెంటనే ప్రచురించిన సామాజిక అప్‌డేట్‌లు.", photos: "గుండంచర్ల చిత్రాలు", videos: "గుండంచర్ల వీడియోలు", submit: "గుండంచర్ల అప్‌డేట్ సమర్పించండి",
  } : {
    home: "Home", all: "All media", documents: "Documents", eyebrow: "Village archive", title: "Gundancharla gallery", intro: "Every supplied image and video assigned to Gundancharla, together with immediately published community updates.", photos: "Gundancharla photographs", videos: "Gundancharla videos", submit: "Submit a Gundancharla update",
  };

  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <header className="documentary-grid bg-earth text-white"><div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="flex flex-wrap gap-5 text-sm font-bold text-white/80"><Link href={`/${locale}`}>← {copy.home}</Link><Link href={`/${locale}/gallery`}>{copy.all}</Link><Link href={`/${locale}/evidence`}>{copy.documents}</Link></div>
          <p className="eyebrow mt-10 text-xs font-black text-white/65">{copy.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black sm:text-6xl">{copy.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">{copy.intro}</p>
          <Link
            href={`/${locale}/submit`}
            className="mt-8 inline-flex rounded-full px-5 py-3 font-black shadow-sm transition hover:brightness-95"
            style={{ backgroundColor: "#ffffff", color: "#7f361d" }}
          >
            {copy.submit}
          </Link>
        </div></header>
        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <SubmissionUpdates locale={locale} submissions={submissions} />
          <h2 className="mb-8 text-3xl font-black">{copy.photos}</h2><MediaGallery locale={locale} />
          <h2 className="mb-8 mt-20 text-3xl font-black">{copy.videos}</h2><VideoGallery locale={locale} />
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
