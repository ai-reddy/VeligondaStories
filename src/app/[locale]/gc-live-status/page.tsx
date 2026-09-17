import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { GcLiveStatusPage } from "@/components/gc-live-status-page";
import { isLocale } from "@/lib/site-content";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: locale === "te" ? "గుండంచర్ల ప్రస్తుత స్థితి" : "Gundancharla live status", description: locale === "te" ? "గుండంచర్ల తాజా ధృవీకరించిన చిత్రాలు మరియు సామాజిక అప్‌డేట్‌లు." : "Latest verified Gundancharla images and community updates." };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  if (process.env.GITHUB_PAGES !== "true") await connection();
  return <GcLiveStatusPage locale={locale} />;
}