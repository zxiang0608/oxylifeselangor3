import type { MetadataRoute } from "next";

const getSiteUrl = () => {
  const rawUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    "http://localhost:3000";

  return rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`;
};

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/consultant"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/consultant"],
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/consultant"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/consultant"],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/consultant"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/consultant"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
