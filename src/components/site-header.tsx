import Link from "next/link";
import type { Locale } from "@/lib/site-content";
import { liveUpdatesUrl, publicAssetUrl } from "@/lib/public-url";
import { siteContent } from "@/lib/site-content";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const content = siteContent[locale];
  const otherLocale = locale === "te" ? "en" : "te";

  return (
    <header className="border-b border-line bg-surface/95">
      <a
        href="#main-content"
        className="sr-only z-50 rounded bg-ink px-4 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {content.skip}
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link href={`/${locale}`} className="group flex items-center gap-3" aria-label="VeligondaStories home">
          {/* eslint-disable-next-line @next/next/no-img-element -- static SVG, no optimization needed */}
          <img src={publicAssetUrl("/logo.svg")} alt="" width={44} height={44} className="size-11" />
          <span>
            <span className="block text-lg font-black tracking-tight">VeligondaStories</span>
            <span className="hidden text-[11px] font-semibold text-muted sm:block">Every Village. Every Story. Every Record.</span>
          </span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
          {content.nav.map(([label, id]) => (
            <Link key={id} href={id === "updates" ? liveUpdatesUrl(locale) : id === "gallery" || id === "evidence" ? `/${locale}/${id}` : `/${locale}#${id}`} className="text-sm font-semibold text-muted transition hover:text-river">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href={`/${otherLocale}`}
            hrefLang={otherLocale}
            aria-label={content.languageLabel}
            className="rounded-full border border-line bg-white px-3 py-2 text-sm font-bold transition hover:border-river hover:text-river"
          >
            {content.language}
          </Link>
          <Link href={`/${locale}/submit`} className="hidden rounded-full bg-earth px-4 py-2 text-sm font-bold text-white transition hover:bg-ink sm:inline-flex">
            {content.submit}
          </Link>
        </div>
      </div>
    </header>
  );
}
