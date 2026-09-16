"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

let scriptPromise: Promise<void> | null = null;

function loadEmbedScript() {
  scriptPromise ??= new Promise((resolve) => {
    if (window.instgrm) return resolve();
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
  return scriptPromise;
}

export function InstagramEmbed({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    loadEmbedScript().then(() => {
      if (!cancelled) window.instgrm?.Embeds.process();
    });
    return () => {
      cancelled = true;
    };
  }, [url]);

  // Crop Instagram's own profile header (~60px) and cap the total height so
  // each preview stays noticeably shorter than the default embed.
  return (
    <div ref={containerRef} className="overflow-hidden rounded-2xl bg-white" style={{ height: 480 }}>
      <div style={{ transform: "translateY(-60px)" }}>
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-captioned={false}
          style={{ margin: 0, width: "100%" }}
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        </blockquote>
      </div>
    </div>
  );
}
