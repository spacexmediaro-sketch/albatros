import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api", "/garaj"],
      },
    ],
    sitemap: "https://albatrosa.ro/sitemap.xml",
  };
}
