import { siteConfig } from "@/lib/seo";

/* ------------------------------------------------------------------ */
/*  Shared LocalBusiness + AutoRepair schema                          */
/* ------------------------------------------------------------------ */

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoRepair"],
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: [siteConfig.phone, siteConfig.phoneLandline],
    email: siteConfig.email,
    image: `${siteConfig.url}/og-image.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.county,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.lat,
      longitude: siteConfig.address.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    sameAs: [],
  };
}

/* ------------------------------------------------------------------ */
/*  Service + Offer schema for service detail pages                   */
/* ------------------------------------------------------------------ */

export function getServiceSchema({
  name,
  description,
  slug,
  priceFrom,
}: {
  name: string;
  description: string;
  slug: string;
  priceFrom: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteConfig.url}/servicii/${slug}`,
    provider: {
      "@type": "AutoRepair",
      "@id": `${siteConfig.url}/#localbusiness`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Ploiesti",
      },
      {
        "@type": "AdministrativeArea",
        name: "Prahova",
      },
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "RON",
      price: priceFrom,
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "RON",
        price: priceFrom,
        description: `De la ${priceFrom} RON`,
      },
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Article schema for blog posts                                      */
/* ------------------------------------------------------------------ */

export function getArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  slug,
  category,
  wordCount,
}: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  slug: string;
  category: string;
  wordCount: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${slug}`,
    },
    articleSection: category,
    wordCount,
    inLanguage: "ro",
  };
}

/* ------------------------------------------------------------------ */
/*  BreadcrumbList schema                                              */
/* ------------------------------------------------------------------ */

export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/* ------------------------------------------------------------------ */
/*  Helper: safely stringify for JSON-LD (XSS protection)              */
/* ------------------------------------------------------------------ */

export function safeJsonLd(schema: Record<string, unknown>): string {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}
