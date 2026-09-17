"use client";

import { useEffect, useState } from "react";
import { InstagramEmbed } from "@/components/instagram-embed";
import type { Locale } from "@/lib/site-content";
import { socialLinksEndpoint } from "@/lib/public-url";

type SocialLinksResponse = { links?: string[] };

export function FooterSocialLinks({ locale, initialLinks }: { locale: Locale; initialLinks: string[] }) {
  const [links, setLinks] = useState(initialLinks);
  const sourceLabel = locale === "te" ? "సమర్పించిన సోషల్ మీడియా మూలం" : "Submitted social media source";

  useEffect(() => {
    const controller = new AbortController();
    fetch(socialLinksEndpoint(), { cache: "no-store", signal: controller.signal })
      .then((response) => response.ok ? response.json() as Promise<SocialLinksResponse> : null)
      .then((result) => {
        if (result?.links) setLinks([...new Set([...result.links, ...initialLinks])]);
      })
      .catch((error: unknown) => {
        if (!(error instanceof DOMException && error.name === "AbortError")) console.error("Could not load submitted social links.");
      });
    return () => controller.abort();
  }, [initialLinks]);

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {links.map((url) => isInstagramUrl(url) ? (
        <InstagramEmbed key={url} url={url} />
      ) : (
        <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="flex min-h-40 flex-col justify-between rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:border-gold hover:bg-white/10">
          <span className="text-xs font-black uppercase tracking-widest text-gold">{platformName(url)}</span>
          <span className="mt-8 break-all text-sm font-bold leading-6 text-white">{url}</span>
          <span className="mt-5 text-xs text-white/55">{sourceLabel} ↗</span>
        </a>
      ))}
    </div>
  );
}

function isInstagramUrl(url: string) {
  return /^https:\/\/(?:www\.)?instagram\.com\/(?:reel|p)\//i.test(url);
}

function platformName(url: string) {
  const host = new URL(url).hostname.toLowerCase();
  if (host.includes("youtu")) return "YouTube";
  if (host.includes("facebook") || host === "fb.watch") return "Facebook";
  if (host === "x.com" || host.endsWith(".x.com") || host.includes("twitter")) return "X / Twitter";
  return "Social media";
}