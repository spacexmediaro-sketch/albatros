import { siteConfig } from "@/lib/seo";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "LocalBusiness"],
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: "+40723177032",
    email: siteConfig.email,
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
        opens: "08:30",
        closes: "17:30",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "RON",
    paymentAccepted: "Cash, Card",
    areaServed: [
      { "@type": "City", name: "Ploiești" },
      { "@type": "City", name: "Blejoi" },
      { "@type": "City", name: "Băicoi" },
      { "@type": "City", name: "Câmpina" },
      { "@type": "City", name: "Boldești-Scăieni" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
