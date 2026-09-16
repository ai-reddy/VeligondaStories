import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteUrl } from "@/lib/site";
import { isLocale, locales, siteContent } from "@/lib/site-content";
import "../globals.css";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const isTelugu = locale === "te";
  const title = isTelugu
    ? "VeligondaStories | ప్రతి ఊరు · ప్రతి కథ · ప్రతి ఆధారం"
    : "VeligondaStories | Every Village. Every Story. Every Record.";

  return {
    metadataBase: new URL(siteUrl),
    title,
    description: siteContent[locale].intro,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", te: "/te" },
    },
    openGraph: {
      title,
      description: siteContent[locale].intro,
      locale: isTelugu ? "te_IN" : "en_IN",
      type: "website",
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale} className="h-full scroll-smooth">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
