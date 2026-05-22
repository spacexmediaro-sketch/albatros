import Link from "next/link";
import { generatePageMetadata, siteConfig } from "@/lib/seo";
import { Phone, MapPin, Clock, Car, Wrench, Gauge, Zap, Droplets, Cog, CircuitBoard, Paintbrush, Shield } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Service Auto Câmpina — Albatros A Service | Blejoi, Prahova",
  description:
    "Service auto pentru șoferii din Câmpina. Specializare diesel și injectoare common-rail. La 25 km pe DN1, ~25 min. Programări: 0723 177 032.",
  path: "/zone/service-auto-campina",
});

const services = [
  { name: "Diagnoză computerizată", desc: "Echipament profesional multimarcă — identificare rapidă a problemelor.", icon: Gauge, color: "#C9A84C" },
  { name: "Reparații motoare diesel", desc: "Expertiză recunoscută în motoare diesel — de la turisme la utilitare.", icon: Cog, color: "#C9A84C" },
  { name: "Reparații injectoare", desc: "Bancă de testare și recalibrare injectoare common-rail de ultimă generație.", icon: Zap, color: "#C9A84C" },
  { name: "Rectificări chiulase", desc: "Rectificare de precizie pentru toate tipurile de chiulase.", icon: Wrench, color: "#C9A84C" },
  { name: "Tinichigerie auto", desc: "Reparații caroserie, îndreptare tablă, sudură profesională.", icon: Shield, color: "#F59E0B" },
  { name: "Vopsitorie auto", desc: "Cabină de vopsire profesională cu potrivire exactă a culorii.", icon: Paintbrush, color: "#F59E0B" },
  { name: "Geometrie roți 3D", desc: "Corectare geometrie pentru siguranță și economie de anvelope.", icon: CircuitBoard, color: "#22C55E" },
  { name: "Electrică auto", desc: "Reparații alternator, electromotor, instalație electrică.", icon: CircuitBoard, color: "#A8A9AD" },
  { name: "Mecanică generală", desc: "Distribuție, frâne, ambreiaj, suspensie — orice reparație mecanică.", icon: Wrench, color: "#6B7280" },
  { name: "Aer condiționat auto", desc: "Încărcare freon, verificare sistem, dezinfecție.", icon: Droplets, color: "#06B6D4" },
];

const reasons = [
  { title: "Specialiști diesel de top", desc: "Câmpinenii ne caută pentru expertiza în motoare diesel și injectoare common-rail. Reparăm ce alții refuză.", color: "#C9A84C" },
  { title: "Echipament de referință", desc: "Bancă de testare injectoare, diagnoză multimarcă, geometrie 3D — investiții constante în tehnologie.", color: "#C9A84C" },
  { title: "Prețuri corecte", desc: "Estimare detaliată înainte de orice lucrare. Fără surprize, fără costuri ascunse.", color: "#22C55E" },
  { title: "Drum simplu pe DN1", desc: "25 km pe traseu drept, fără complicații. Merită drumul pentru calitatea lucrărilor.", color: "#F59E0B" },
];

export default function ServiceAutoCampinaPage() {
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
            url: `${siteConfig.url}/zone/service-auto-campina`,
            address: {
              "@type": "PostalAddress",
              streetAddress: siteConfig.address.street,
              addressLocality: siteConfig.address.city,
              addressRegion: siteConfig.address.county,
              postalCode: siteConfig.address.postalCode,
              addressCountry: siteConfig.address.country,
            },
            geo: { "@type": "GeoCoordinates", latitude: siteConfig.address.lat, longitude: siteConfig.address.lng },
            areaServed: { "@type": "City", name: "Câmpina" },
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
          <li className="text-[#E2E4E9]">Service Auto Câmpina</li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden px-4 pt-16 pb-24 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="pointer-events-none absolute -top-32 right-0 h-[450px] w-[450px] rounded-full bg-[#C9A84C]/[0.05] blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 -left-32 h-[400px] w-[400px] rounded-full bg-[#C9A84C]/[0.04] blur-[110px]" />

        <div className="relative mx-auto max-w-7xl text-center">
          <span className="mb-6 inline-block rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
            Specialiști diesel pentru Câmpina
          </span>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Service Auto{" "}
            <span className="bg-gradient-to-r from-[#C9A84C] to-[#A8A9AD] bg-clip-text text-transparent">Câmpina</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#8B8D97]">
            Mulți câmpineni fac drumul până la noi special pentru lucrări diesel complexe: injectoare common-rail,
            pompe de înaltă presiune, turbosuflante. La doar 25 km pe DN1, investiția în drum se întoarce
            în reparații făcute corect din prima.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/programare" className="inline-flex items-center rounded-xl bg-[#C9A84C] px-7 py-3.5 text-sm font-bold text-[#050505] shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-colors hover:bg-[#D4AF37]">
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
            <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl font-bold text-white sm:text-4xl">De ce vin câmpinenii la Albatros?</h2>
            <p className="mx-auto mt-3 max-w-xl text-[#8B8D97]">
              Service-urile din Câmpina trimit cazurile dificile la noi. Iată de ce merită drumul.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div key={r.title} className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0F1017] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.16]">
                <div className="absolute top-0 left-0 h-[2px] w-full opacity-60" style={{ backgroundColor: r.color }} />
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: `${r.color}15` }}>
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: r.color }} />
                </div>
                <h3 className="text-lg font-semibold text-white">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#8B8D97]">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICII */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl font-bold text-white sm:text-4xl">Servicii pentru șoferii din Câmpina</h2>
            <p className="mx-auto mt-3 max-w-xl text-[#8B8D97]">De la diagnoză rapidă la reparații complexe de motor — totul sub același acoperiș.</p>
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
              <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl font-bold text-white sm:text-4xl">Cum ajungi de la Câmpina</h2>
              <div className="mt-6 space-y-4 text-[#E2E4E9]">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#C9A84C]" />
                  <p>Ieși din Câmpina spre sud pe DN1 (E60) direcția Ploiești. După ~20 km, la sensul giratoriu de la Blejoi, faci dreapta pe DN1B (Șoseaua Ploiești-Văleni). Service-ul este la 2 km, pe partea stângă.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Car className="mt-1 h-5 w-5 shrink-0 text-[#C9A84C]" />
                  <p>Distanță totală: ~25 km. Timp estimat: 25 minute. Drum național fără taxe sau restricții.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-[#22C55E]" />
                  <p>Sfat: programează-te dimineața la 08:30 — poți lăsa mașina și o ridici la finalul zilei.</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.5!2d26.032!3d44.9886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDU5JzE5LjAiTiAyNsKwMDEnNTUuMiJF!5e0!3m2!1sro!2sro!4v1"
                width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Albatros A Service - Harta Câmpina"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#C9A84C]/[0.03] to-transparent" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl font-bold text-white sm:text-4xl">
            Vii din Câmpina? Te așteptăm!
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#8B8D97]">
            Programează-te telefonic sau online și beneficiezi de diagnoză gratuită la prima vizită.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/programare" className="inline-flex items-center rounded-xl bg-[#C9A84C] px-8 py-4 text-sm font-bold text-[#050505] shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-colors hover:bg-[#D4AF37]">
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
