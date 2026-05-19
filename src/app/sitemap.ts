import type { MetadataRoute } from "next";

const BASE_URL = "https://albatrosa.ro";

const services = [
  "diagnoza-auto",
  "reparatii-motoare-diesel",
  "reparatii-injectoare",
  "rectificari-chiulase",
  "tinichigerie-auto",
  "vopsitorie-auto",
  "geometrie-roti",
  "electrica-auto",
  "mecanica-auto",
  "incarcari-aer-conditionat",
];

const blogSlugs = [
  "cand-schimbi-uleiul-motor",
  "semne-probleme-turbo",
  "pregatire-masina-iarna",
];

const zones = [
  "service-auto-ploiesti",
  "service-auto-campina",
  "service-auto-baicoi",
  "service-auto-valenii-de-munte",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/servicii`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/despre`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/programare`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/estimator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/politica-confidentialitate`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/termeni-conditii`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/politica-cookies`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${BASE_URL}/servicii/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const zonePages: MetadataRoute.Sitemap = zones.map((slug) => ({
    url: `${BASE_URL}/zone/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPages, ...zonePages];
}
