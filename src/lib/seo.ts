import type { Metadata } from "next";

export const siteConfig = {
  name: "Albatros A Service",
  url: "https://albatrosa.ro",
  description:
    "Service auto multimarca în Blejoi-Ploiești, specializat în reparații motoare diesel, tinichigerie și vopsitorie auto. Membru al rețelei Q-SERVICE Romania.",
  phone: "0723 177 032",
  phoneLandline: "0244 410 650",
  email: "albatros_service@q-service.ro",
  address: {
    street: "Șoseaua Ploiești-Văleni FN",
    city: "Blejoi",
    county: "Prahova",
    postalCode: "107070",
    country: "RO",
    lat: 44.9886,
    lng: 26.032,
  },
  hours: {
    monday: "08:30-17:30",
    tuesday: "08:30-17:30",
    wednesday: "08:30-17:30",
    thursday: "08:30-17:30",
    friday: "08:30-17:30",
    saturday: "closed",
    sunday: "closed",
  },
};

export function generatePageMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "ro_RO",
      type: "website",
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}
