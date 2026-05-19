"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/public/scroll-reveal";

const services = [
  { slug: "diagnoza-auto", name: "Diagnoză auto computerizată", category: "Diagnoză", desc: "Citire erori, resetare martori, diagnoză completă pentru toate mărcile auto." },
  { slug: "reparatii-motoare-diesel", name: "Reparații motoare diesel", category: "Motor", desc: "Specialiști în motoare diesel — reparații complete, regenerări turbine, pompe de injecție." },
  { slug: "reparatii-injectoare", name: "Reparații injectoare", category: "Motor", desc: "Testare, recalibrare și reparații injectoare diesel common-rail." },
  { slug: "rectificari-chiulase", name: "Rectificări chiulase", category: "Motor", desc: "Rectificare profesională chiulase cu echipament specializat." },
  { slug: "tinichigerie-auto", name: "Tinichigerie auto", category: "Caroserie", desc: "Îndreptare tablă, sudură, reparații structurale caroserie." },
  { slug: "vopsitorie-auto", name: "Vopsitorie auto", category: "Caroserie", desc: "Vopsire integrală sau parțială în cabină profesională." },
  { slug: "geometrie-roti", name: "Geometrie roți", category: "Suspensie", desc: "Geometrie 3D pentru aliniere perfectă și uzură uniformă anvelope." },
  { slug: "electrica-auto", name: "Electrică auto", category: "Electrică", desc: "Diagnoză și reparații instalație electrică, alternator, electromotor." },
  { slug: "mecanica-auto", name: "Mecanică auto", category: "Mecanică", desc: "Reparații mecanice generale — frâne, ambreiaj, suspensie, distribuție." },
  { slug: "incarcari-aer-conditionat", name: "Încărcări aer condiționat", category: "Confort", desc: "Verificare etanșeitate, încărcare freon, dezinfecție sistem AC." },
];

const categoryColors: Record<string, string> = {
  "Diagnoză": "bg-blue-100 text-blue-700",
  "Motor": "bg-red-100 text-red-700",
  "Caroserie": "bg-amber-100 text-amber-700",
  "Suspensie": "bg-green-100 text-green-700",
  "Electrică": "bg-purple-100 text-purple-700",
  "Mecanică": "bg-slate-100 text-slate-700",
  "Confort": "bg-cyan-100 text-cyan-700",
};

export default function ServiciiPage() {
  return (
    <>
      {/* Dark Hero Banner */}
      <section className="relative overflow-hidden bg-[#0A2540] bg-grid-pattern px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#E63946]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-60 w-60 rounded-full bg-[#3B82F6]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Serviciile{" "}
            <span className="gradient-text">noastre</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Albatros A Service oferă o gamă completă de servicii auto pentru toate
            mărcile. Fiecare reparație vine cu garanție și transparență totală.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link key={service.slug} href={`/servicii/${service.slug}`} className="group">
                  <Card className="card-hover relative h-full overflow-hidden transition-all">
                    {/* Gradient accent bar */}
                    <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#E63946] to-[#3B82F6]" />
                    <CardContent className="p-6">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                          categoryColors[service.category] || "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {service.category}
                      </span>
                      <h2 className="mt-3 text-lg font-semibold text-[#0A2540]">
                        {service.name}
                      </h2>
                      <p className="mt-1 text-sm text-gray-600">{service.desc}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#E63946] transition-transform">
                        Detalii{" "}
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                          {"\u2192"}
                        </span>
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
