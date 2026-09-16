"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/site-content";
import { publicAssetUrl } from "@/lib/public-url";

type LightboxPhoto = {
  slug: string;
  src: string;
  titleEn: string;
  titleTe: string;
  altEn: string;
  altTe: string;
  width: number;
  height: number;
};

export function PhotoLightbox({ locale, photos }: { locale: Locale; photos: LightboxPhoto[] }) {
  const [selected, setSelected] = useState<LightboxPhoto | null>(null);
  const labels = locale === "te"
    ? { open: "పూర్తి చిత్రాన్ని చూడండి", close: "మూసివేయండి", original: "పూర్తి పరిమాణంలో తెరవండి", source: "మూలం: సామాజిక సమర్పణ", status: "ధృవీకరణలో ఉంది", date: "తేదీ నిర్ధారణలో ఉంది" }
    : { open: "View full image", close: "Close", original: "Open full-size file", source: "Source: Community submission", status: "Verification pending", date: "Date pending confirmation" };

  useEffect(() => {
    if (!selected) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setSelected(null); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", close); };
  }, [selected]);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo) => (
          <figure key={photo.slug} className="overflow-hidden rounded-3xl border border-line bg-surface shadow-sm">
            <button type="button" onClick={() => setSelected(photo)} aria-label={`${labels.open}: ${locale === "te" ? photo.titleTe : photo.titleEn}`} className="group relative block aspect-4/3 w-full cursor-zoom-in overflow-hidden bg-line text-left">
              <Image src={publicAssetUrl(photo.src)} alt={locale === "te" ? photo.altTe : photo.altEn} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
              <span className="absolute bottom-3 right-3 rounded-full bg-ink/85 px-3 py-2 text-xs font-black text-white shadow">{labels.open}</span>
            </button>
            <figcaption className="p-5">
              <p className="text-lg font-black">{locale === "te" ? photo.titleTe : photo.titleEn}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-bold text-muted">
                <span className="rounded-full bg-paper px-3 py-1">{labels.source}</span><span className="rounded-full bg-gold/15 px-3 py-1">{labels.status}</span><span className="rounded-full bg-paper px-3 py-1">{labels.date}</span>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      {selected ? (
        <div role="dialog" aria-modal="true" aria-label={locale === "te" ? selected.titleTe : selected.titleEn} className="fixed inset-0 z-50 flex flex-col bg-black/95 p-3 sm:p-6">
          <div className="mb-3 flex items-center justify-between gap-4 text-white">
            <p className="truncate font-black">{locale === "te" ? selected.titleTe : selected.titleEn}</p>
            <button type="button" onClick={() => setSelected(null)} autoFocus className="rounded-full bg-white px-4 py-2 font-black text-black">{labels.close} ×</button>
          </div>
          <button type="button" aria-label={labels.close} onClick={() => setSelected(null)} className="relative min-h-0 flex-1 cursor-zoom-out">
            <Image src={publicAssetUrl(selected.src)} alt={locale === "te" ? selected.altTe : selected.altEn} fill sizes="100vw" className="object-contain" priority />
          </button>
          <a href={publicAssetUrl(selected.src)} target="_blank" rel="noopener noreferrer" className="mx-auto mt-3 rounded-full border border-white/40 px-4 py-2 text-sm font-black text-white hover:bg-white hover:text-black">{labels.original}</a>
        </div>
      ) : null}
    </>
  );
}
