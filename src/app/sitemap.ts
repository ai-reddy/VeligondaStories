import type { MetadataRoute } from "next";
import { locales } from "@/lib/site-content";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/journey", "/gallery", "/gc-gallery", "/gc-live-status", "/gc-live-status-updates", "/evidence", "/claims-and-evidence", "/updates", "/videos"];

  return locales.flatMap((locale) => routes.map((route) => ({
    url: `${siteUrl}/${locale}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
    alternates: {
      languages: {
        en: `${siteUrl}/en${route}`,
        te: `${siteUrl}/te${route}`,
      },
    },
  })));
}
