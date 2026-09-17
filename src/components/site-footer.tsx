"use client";

import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/lib/site-content";
import { instagramReels, siteContent } from "@/lib/site-content";
import { FooterSocialLinks } from "@/components/footer-social-links";

export function SiteFooter({ locale }: { locale: Locale }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const content = siteContent[locale];
  const footerLinks = [
    { label: locale === "te" ? "హోమ్" : "Home", href: `/${locale}` },
    { label: content.nav[0][0], href: `/${locale}/journey` },
    { label: content.nav[3][0], href: `/${locale}/gallery` },
    { label: content.nav[5][0], href: `/${locale}/updates` },
    { label: locale === "te" ? "వాదనలు మరియు ఆధారాలు" : "Claims and evidence", href: `/${locale}/claims-and-evidence` },
    { label: locale === "te" ? "నీటి ప్రయాణం" : "Water journey", href: `/${locale}/journey` },
    { label: content.submit, href: `/${locale}/submit` },
    { label: content.methodology, href: "#evidence" },
    { label: content.privacy, href: "#privacy" },
    { label: content.corrections, href: "#corrections" },
  ];

  return (
    <footer id="submit" className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 pt-14 lg:px-8">
        <p className="mb-5 text-xs font-black uppercase tracking-widest text-white/50">{content.instagram}</p>
        <FooterSocialLinks locale={locale} initialLinks={instagramReels} />
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <p className="mb-4 text-2xl font-black">VeligondaStories</p>
          <p className="max-w-2xl text-base leading-8 text-white/70">{content.footerCopy}</p>
        </div>
        <div className="flex flex-col items-start gap-3 lg:items-end">
          <p className="rounded-full border border-white/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/70">
            {content.status}
          </p>
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-3 text-sm font-semibold text-white/80">
            <a href="#evidence" className="transition hover:text-white">{content.methodology}</a>
            <a href="#privacy" className="transition hover:text-white">{content.privacy}</a>
            <a href="#corrections" className="transition hover:text-white">{content.corrections}</a>

            <div className="relative">
              <button
                type="button"
                aria-label={locale === "te" ? "అన్ని లింకులు చూపించు" : "Show all links"}
                aria-expanded={menuOpen}
                aria-controls="footer-links-menu"
                onClick={() => setMenuOpen((open) => !open)}
                className="grid size-9 place-items-center rounded-full border border-white/15 bg-white/5 text-base transition hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                ☰
              </button>

              {menuOpen ? (
                <div id="footer-links-menu" className="absolute right-0 top-full z-20 mt-3 min-w-52 rounded-2xl border border-white/10 bg-[#1d1c1a] p-2 shadow-2xl">
                  <ul className="space-y-1">
                    {footerLinks.map((link) => (
                      <li key={link.href}>
                        {link.href.startsWith("#") ? (
                          <a href={link.href} className="block rounded-xl px-3 py-2 text-left text-sm text-white/75 transition hover:bg-white/5 hover:text-white" onClick={() => setMenuOpen(false)}>
                            {link.label}
                          </a>
                        ) : (
                          <Link href={link.href} className="block rounded-xl px-3 py-2 text-left text-sm text-white/75 transition hover:bg-white/5 hover:text-white" onClick={() => setMenuOpen(false)}>
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </nav>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} VeligondaStories · Apache-2.0
      </div>
    </footer>
  );
}
