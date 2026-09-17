import type { Locale } from "@/lib/site-content";
import { instagramReels, siteContent } from "@/lib/site-content";
import { FooterSocialLinks } from "@/components/footer-social-links";

export function SiteFooter({ locale }: { locale: Locale }) {
  const content = siteContent[locale];

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
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-5 text-sm font-semibold text-white/80">
            <a href="#evidence">{content.methodology}</a>
            <a href="#privacy">{content.privacy}</a>
            <a href="#corrections">{content.corrections}</a>
          </nav>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} VeligondaStories · Apache-2.0
      </div>
    </footer>
  );
}
