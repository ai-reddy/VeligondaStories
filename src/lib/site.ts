const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const siteUrl = configuredSiteUrl
  ? configuredSiteUrl.replace(/\/$/, "")
  : "http://localhost:3000";
