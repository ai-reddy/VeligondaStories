import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/VeligondaStories" : "";

const nextConfig: NextConfig = isGitHubPages
  ? {
    output: "export" as const,
    basePath,
    assetPrefix: basePath,
    trailingSlash: true,
    images: { unoptimized: true },
  }
  : {
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            { key: "X-Content-Type-Options", value: "nosniff" },
            { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
            { key: "X-Frame-Options", value: "SAMEORIGIN" },
            { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          ],
        },
      ];
    },
  };

export default nextConfig;
