"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/public/scroll-reveal";

const milestones = [
  { year: "2005", text: "Infiintarea Albatros A Service in Blejoi, Prahova" },
  { year: "2010", text: "Aderarea la reteaua Q-SERVICE Romania" },
  { year: "2015", text: "Extindere cu sectie de tinichigerie si vopsitorie" },
  { year: "2020", text: "Modernizare echipamente diagnoza si geometrie 3D" },
  { year: "2024", text: "Digitalizare completa - programari online si tracking" },
];

const values = [
  {
    title: "Transparenta",
    desc: "Fiecare lucrare este documentata cu poze si explicatii. Stii mereu ce se intampla cu masina ta.",
  },
  {
    title: "Calitate",
    desc: "Folosim piese originale si aftermarket premium. Garantie la toate lucrarile efectuate.",
  },
  {
    title: "Experienta",
    desc: "Peste 19 ani de experienta in reparatii auto multimarca, cu specializare pe motoare diesel.",
  },
  {
    title: "Tehnologie",
    desc: "Echipamente de ultima generatie pentru diagnoza computerizata, geometrie 3D si vopsitorie.",
  },
];

export default function DesprePage() {
  return (
    <>
      {/* Dark Hero Banner */}
      <section className="relative overflow-hidden bg-[#0A2540] bg-grid-pattern px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#E63946]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-60 w-60 rounded-full bg-[#3B82F6]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Despre{" "}
            <span className="gradient-text">Albatros A Service</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Din 2005, oferim servicii auto complete in Blejoi-Ploiesti. Suntem
            membrii ai retelei Q-SERVICE Romania si ne mandrim cu o echipa de
            profesionisti dedicati.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Values */}
        <ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {values.map((v) => (
              <Card key={v.title} className="card-hover relative overflow-hidden transition-all">
                {/* Gradient accent bar */}
                <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#E63946] to-[#3B82F6]" />
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-[#0A2540]">{v.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[#0A2540] text-center mb-10">
              Istoria noastra
            </h2>
            <div className="relative">
              {/* Gradient connecting line */}
              <div className="absolute left-[1.9rem] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#E63946] to-[#3B82F6]" />

              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <div key={m.year} className="relative flex items-start gap-6 pl-2">
                    {/* Timeline dot */}
                    <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#E63946] to-[#3B82F6] shadow-lg shadow-[#E63946]/20">
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>
                    {/* Content */}
                    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md flex-1">
                      <span className="text-sm font-bold text-[#E63946]">{m.year}</span>
                      <p className="mt-1 text-gray-600">{m.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
