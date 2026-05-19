import Link from "next/link";
import { generatePageMetadata, siteConfig } from "@/lib/seo";
import { Phone, MapPin, Clock, Shield, Wrench, Gauge, Zap, Droplets, Cog, CircuitBoard, Paintbrush, Car } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Service Auto Ploiești — Albatros A Service | Blejoi",
  description:
    "Service auto lângă Ploiești, la doar 5 minute de centru. Diagnoză computerizată, reparații diesel, injectoare, tinichigerie, vopsitorie, geometrie 3D. Programări: 0723 177 032.",
  path: "/zone/service-auto-ploiesti",
});

const services = [
  { name: "Diagnoză computerizată", desc: "Citire erori, resetare martori — toate mărcile auto.", icon: Gauge, color: "#3B82F6" },
  { name: "Reparații motoare diesel", desc: "Specialiști în motoare diesel cu peste 19 ani experiență.", icon: Cog, color: "#FF2D2D" },
  { name: "Reparații injectoare", desc: "Testare și recalibrare injectoare common-rail.", icon: Zap, color: "#FF2D2D" },
  { name: "Rectificări chiulase", desc: "Rectificare profesională cu echipament specializat.", icon: Wrench, color: "#FF2D2D" },
  { name: "Tinichigerie auto", desc: "Îndreptare tablă, sudură, reparații structurale.", icon: Shield, color: "#F59E0B" },
  { name: "Vopsitorie auto", desc: "Vopsire profesională în cabină dedicată.", icon: Paintbrush, color: "#F59E0B" },
  { name: "Geometrie roți 3D", desc: "Aliniere precisă pentru uzură uniformă anvelope.", icon: CircuitBoard, color: "#22C55E" },
  { name: "Electrică auto", desc: "Diagnoză și reparații instalație electrică completă.", icon: CircuitBoard, color: "#8B5CF6" },
  { name: "Mecanică generală", desc: "Frâne, ambreiaj, distribuție, suspensie.", icon: Wrench, color: "#6B7280" },
  { name: "Aer condiționat auto", desc: "Verificare, încărcare freon, dezinfecție AC.", icon: Droplets, color: "#06B6D4" },
];

const advantages = [
  { title: "5 minute de Ploiești", desc: "Cel mai apropiat service profesional de centrul orașului. Fără aglomerație, fără căutare de parcare.", color: "#FF2D2D" },
  { title: "Membru Q-SERVICE", desc: "Parte din rețeaua Q-SERVICE Romania — standarde europene de calitate și echipamente certificate.", color: "#3B82F6" },
  { title: "Garanție la lucrări", desc: "Toate lucrările vin cu garanție scrisă. Folosim piese originale și aftermarket premium.", color: "#22C55E" },
  { title: "Programare rapidă", desc: "Programare telefonică sau online. Fără cozi — te așteptăm la ora stabilită.", color: "#8B5CF6" },
];

export default function ServiceAutoPloiestiPage() {
  return (
    <div className="min-h-screen bg-[#04040A]">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            name: siteConfig.name,
            image: `${siteConfig.url}/logo.png`,
            telephone: siteConfig.phone,
            email: siteConfig.email,
            url: `${siteConfig.url}/zone/service-auto-ploiesti`,
            address: {
              "@type": "PostalAddress",
              streetAddress: siteConfig.address.street,
              addressLocality: siteConfig.address.city,
              addressRegion: siteConfig.address.county,
              postalCode: siteConfig.address.postalCode,
              addressCountry: siteConfig.address.country,
            },
            geo: { "@type": "GeoCoordinates", latitude: siteConfig.address.lat, longitude: siteConfig.address.lng },
            areaServed: { "@type": "City", name: "Ploiești" },
            openingHoursSpecification: [
              { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:30", closes: "17:30" },
            ],
          }),
        }}
      />

      {/* BREADCRUMB */}
      <nav className="relative z-10 mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-2 text-sm text-[#8B8D97]">
          <li><Link href="/" className="hover:text-white transition-colors">Acasă</Link></li>
          <li>/</li>
          <li><Link href="/zone/service-auto-ploiesti" className="hover:text-white transition-colors">Zone</Link></li>
          <li>/</li>
          <li className="text-[#E2E4E9]">Service Auto Ploiești</li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden px-4 pt-16 pb-24 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#FF2D2D]/[0.06] blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#3B82F6]/[0.05] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl text-center">
          <span className="mb-6 inline-block rounded-full border border-[#FF2D2D]/20 bg-[#FF2D2D]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#FF2D2D]">
            La 5 minute de centrul Ploieștiului
          </span>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Service Auto{" "}
            <span className="bg-gradient-to-r from-[#FF2D2D] to-[#FF6B35] bg-clip-text text-transparent">Ploiești</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#8B8D97]">
            Albatros A Service se află în Blejoi, pe Șoseaua Ploiești-Văleni, la doar 5 minute de centrul Ploieștiului.
            Oferim servicii complete de reparații auto multimarcă, cu echipamente profesionale și garanție la fiecare lucrare.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/programare" className="inline-flex items-center rounded-xl bg-[#FF2D2D] px-7 py-3.5 text-sm font-bold text-[#050505] shadow-[0_0_20px_rgba(255,45,45,0.3)] transition-colors hover:bg-[#FF5555]">
              Programează-te acum
            </Link>
            <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-[#E2E4E9] transition-colors hover:bg-white/[0.08]">
              <Phone className="h-4 w-4" /> {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* DE CE ALBATROS */}
      <section className="bg-[#050505] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl font-bold text-white sm:text-4xl">De ce aleg ploieștenii Albatros?</h2>
            <p className="mx-auto mt-3 max-w-xl text-[#8B8D97]">
              Peste 70% dintre clienții noștri vin din Ploiești. Aflați de ce ne preferă în fiecare lună.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((a) => (
              <div key={a.title} className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0F1017] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.16]">
                <div className="absolute top-0 left-0 h-[2px] w-full opacity-60" style={{ backgroundColor: a.color }} />
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: `${a.color}15` }}>
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: a.color }} />
                </div>
                <h3 className="text-lg font-semibold text-white">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#8B8D97]">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICII */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl font-bold text-white sm:text-4xl">Servicii disponibile pentru Ploiești</h2>
            <p className="mx-auto mt-3 max-w-xl text-[#8B8D97]">Gamă completă de servicii auto — de la diagnoză până la caroserie.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.name} className="rounded-2xl border border-white/[0.08] bg-[#0F1017] p-5 transition-all duration-300 hover:border-white/[0.15]" style={{ backgroundImage: `radial-gradient(circle at 50% 0%, ${s.color}08 0%, transparent 60%)` }}>
                <s.icon className="h-6 w-6 mb-3" style={{ color: s.color }} />
                <h3 className="text-base font-semibold text-white">{s.name}</h3>
                <p className="mt-1.5 text-sm text-[#8B8D97]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECȚII */}
      <section className="bg-[#050505] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl font-bold text-white sm:text-4xl">Cum ajungi de la Ploiești</h2>
              <div className="mt-6 space-y-4 text-[#E2E4E9]">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#FF2D2D]" />
                  <p>La doar 5 minute de centrul Ploieștiului, pe DN1B (Centura de Nord). Din Piața Victoriei, mergi pe Șoseaua Nordului spre Văleni — ne găsești pe partea dreaptă, în Blejoi.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Car className="mt-1 h-5 w-5 shrink-0 text-[#3B82F6]" />
                  <p>Distanță: ~4 km de la centrul Ploieștiului. Acces facil din orice cartier — Vest, Nord, Sud sau Malu Roșu.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-[#22C55E]" />
                  <p>Program: Luni - Vineri, 08:30 - 17:30. Parcare gratuită și spațioasă.</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.5!2d26.032!3d44.9886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDU5JzE5LjAiTiAyNsKwMDEnNTUuMiJF!5e0!3m2!1sro!2sro!4v1"
                width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Albatros A Service - Harta Ploiești"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FF2D2D]/[0.04] to-transparent" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl font-bold text-white sm:text-4xl">
            Programează-te de la Ploiești
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#8B8D97]">
            Sună-ne sau completează formularul online. Îți confirmăm programarea în cel mai scurt timp.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/programare" className="inline-flex items-center rounded-xl bg-[#FF2D2D] px-8 py-4 text-sm font-bold text-[#050505] shadow-[0_0_20px_rgba(255,45,45,0.3)] transition-colors hover:bg-[#FF5555]">
              Programare online
            </Link>
            <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.04] px-8 py-4 text-sm font-medium text-[#E2E4E9] transition-colors hover:bg-white/[0.08]">
              <Phone className="h-4 w-4" /> {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
