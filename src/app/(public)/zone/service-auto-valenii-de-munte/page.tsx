import Link from "next/link";
import { generatePageMetadata, siteConfig } from "@/lib/seo";
import { Phone, MapPin, Clock, Car, Wrench, Gauge, Zap, Droplets, Cog, CircuitBoard, Paintbrush, Shield, Globe, Award } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Service Auto Vălenii de Munte — Albatros A Service | Prahova",
  description:
    "Service auto complet pentru Vălenii de Munte și nord-estul Prahovei. 30 km pe DN1A, ~30 min. Diesel, injectoare, caroserie, geometrie 3D. Tel: 0723 177 032.",
  path: "/zone/service-auto-valenii-de-munte",
});

const services = [
  { name: "Diagnoză computerizată", desc: "Scanner profesional pentru toate mărcile — rezultate în 30 de minute.", icon: Gauge, color: "#3B82F6" },
  { name: "Reparații motoare diesel", desc: "Service complet motoare diesel — de la diagnoza defectului până la proba finală.", icon: Cog, color: "#FF2D2D" },
  { name: "Reparații injectoare", desc: "Singura bancă de testare injectoare common-rail din zona Prahova.", icon: Zap, color: "#FF2D2D" },
  { name: "Rectificări chiulase", desc: "Rectificare cu precizie micrometrică pe mașini specializate.", icon: Wrench, color: "#FF2D2D" },
  { name: "Tinichigerie auto", desc: "Reparații caroserie complete — de la o ușă lovită la refaceri structurale.", icon: Shield, color: "#F59E0B" },
  { name: "Vopsitorie auto", desc: "Cabină de vopsire profesională cu spectrofotometru pentru potrivire culoare.", icon: Paintbrush, color: "#F59E0B" },
  { name: "Geometrie roți 3D", desc: "Stand 3D de ultimă generație — precizie maximă la aliniere.", icon: CircuitBoard, color: "#22C55E" },
  { name: "Electrică auto", desc: "Depanare completă instalație electrică, diagnoză CAN-bus.", icon: CircuitBoard, color: "#8B5CF6" },
  { name: "Mecanică generală", desc: "Toate lucrările mecanice: distribuție, ambreiaj, turbo, suspensie.", icon: Wrench, color: "#6B7280" },
  { name: "Aer condiționat auto", desc: "Încărcare și service complet AC — ideal înainte de sezonul cald.", icon: Droplets, color: "#06B6D4" },
];

const advantages = [
  { title: "Acoperim tot județul", desc: "De la Vălenii de Munte la Sinaia, de la Urlați la Mizil — deservim întreaga Prahovă cu servicii profesionale.", color: "#FF2D2D", icon: Globe },
  { title: "19+ ani de experiență", desc: "Din 2005, am reparat mii de mașini. Experiența contează când ai o problemă complexă.", color: "#3B82F6", icon: Award },
  { title: "Piese pe stoc", desc: "Colaborăm cu furnizori premium și avem piese uzuale pe stoc. Reducem timpul de așteptare.", color: "#22C55E", icon: Wrench },
  { title: "Lasă mașina, ridic-o gata", desc: "Adu mașina dimineața, noi o reparăm. O ridici seara sau a doua zi — fără stres.", color: "#F59E0B", icon: Car },
];

export default function ServiceAutoValeniiDeMuntePage() {
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
            url: `${siteConfig.url}/zone/service-auto-valenii-de-munte`,
            address: {
              "@type": "PostalAddress",
              streetAddress: siteConfig.address.street,
              addressLocality: siteConfig.address.city,
              addressRegion: siteConfig.address.county,
              postalCode: siteConfig.address.postalCode,
              addressCountry: siteConfig.address.country,
            },
            geo: { "@type": "GeoCoordinates", latitude: siteConfig.address.lat, longitude: siteConfig.address.lng },
            areaServed: { "@type": "City", name: "Vălenii de Munte" },
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
          <li className="text-[#E2E4E9]">Service Auto Vălenii de Munte</li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden px-4 pt-16 pb-24 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="pointer-events-none absolute -top-40 left-0 h-[500px] w-[500px] rounded-full bg-[#8B5CF6]/[0.04] blur-[130px]" />
        <div className="pointer-events-none absolute -bottom-20 right-1/4 h-[400px] w-[400px] rounded-full bg-[#FF2D2D]/[0.04] blur-[100px]" />

        <div className="relative mx-auto max-w-7xl text-center">
          <span className="mb-6 inline-block rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#8B5CF6]">
            Deservim întreaga Prahovă
          </span>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Service Auto{" "}
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#FF2D2D] bg-clip-text text-transparent">Vălenii de Munte</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#8B8D97]">
            Locuiești în Vălenii de Munte sau împrejurimi și cauți un service auto serios? Albatros A Service
            din Blejoi este referința în Prahova pentru reparații auto profesionale. La 30 km distanță,
            pe DN1A, ajungi în 30 de minute la un service cu echipamente pe care nu le găsești mai aproape.
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
            <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl font-bold text-white sm:text-4xl">De ce merită drumul până la Albatros?</h2>
            <p className="mx-auto mt-3 max-w-xl text-[#8B8D97]">
              Un service complet la care poți veni cu orice problemă — și pleci cu mașina reparată corect.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((a) => (
              <div key={a.title} className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0F1017] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.16]">
                <div className="absolute top-0 left-0 h-[2px] w-full opacity-60" style={{ backgroundColor: a.color }} />
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: `${a.color}15` }}>
                  <a.icon className="h-5 w-5" style={{ color: a.color }} />
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
            <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl font-bold text-white sm:text-4xl">Servicii auto complete pentru zona Teleajen</h2>
            <p className="mx-auto mt-3 max-w-xl text-[#8B8D97]">Tot ce are nevoie mașina ta, de la revizia anuală până la reparații majore de motor.</p>
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
              <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl font-bold text-white sm:text-4xl">Traseu de la Vălenii de Munte</h2>
              <div className="mt-6 space-y-4 text-[#E2E4E9]">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#FF2D2D]" />
                  <p>Din Vălenii de Munte, ieși pe DN1A spre sud, direcția Ploiești. Treci prin Bălțești și Albești-Paleologu. La Blejoi, faci stânga pe DN1B (Șoseaua Ploiești-Văleni). Ne găsești pe partea dreaptă, după 500 m.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Car className="mt-1 h-5 w-5 shrink-0 text-[#3B82F6]" />
                  <p>Distanță: ~30 km. Timp estimat: 30 de minute. Traseu simplu pe drum național, fără zone aglomerate.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-[#22C55E]" />
                  <p>Recomandare: sună cu o zi înainte pentru programare. Putem comanda piesele necesare și mașina ta va fi gata mai repede.</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.5!2d26.032!3d44.9886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDU5JzE5LjAiTiAyNsKwMDEnNTUuMiJF!5e0!3m2!1sro!2sro!4v1"
                width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Albatros A Service - Harta Vălenii de Munte"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#8B5CF6]/[0.03] to-transparent" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl font-bold text-white sm:text-4xl">
            Service-ul de referință din Prahova
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#8B8D97]">
            Indiferent dacă ești din Vălenii de Munte, Slănic, Boldești sau Urlați — Albatros A Service
            îți oferă cele mai complete servicii auto din județul Prahova.
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
