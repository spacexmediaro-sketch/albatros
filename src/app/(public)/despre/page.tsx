"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
    color: "#FF2D2D",
  },
  {
    title: "Calitate",
    desc: "Folosim piese originale si aftermarket premium. Garantie la toate lucrarile efectuate.",
    color: "#3B82F6",
  },
  {
    title: "Experienta",
    desc: "Peste 19 ani de experienta in reparatii auto multimarca, cu specializare pe motoare diesel.",
    color: "#8B5CF6",
  },
  {
    title: "Tehnologie",
    desc: "Echipamente de ultima generatie pentru diagnoza computerizata, geometrie 3D si vopsitorie.",
    color: "#F59E0B",
  },
];

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function DesprePage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-[#04040A] px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
      >
        {/* Grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gradient orbs */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#FF2D2D]/8 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#3B82F6]/8 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-[#8B5CF6]/5 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center rounded-full border border-[#FF2D2D]/20 bg-[#FF2D2D]/10 px-4 py-1.5"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#FF2D2D]">
              DESPRE NOI
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Despre{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #FF2D2D, #3B82F6)",
              }}
            >
              Albatros A Service
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mx-auto mt-5 max-w-2xl text-lg text-[#8B8D97]"
          >
            Din 2005, oferim servicii auto complete in Blejoi-Ploiesti. Suntem
            membrii ai retelei Q-SERVICE Romania si ne mandrim cu o echipa de
            profesionisti dedicati.
          </motion.p>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="bg-[#050505] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Valorile noastre
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[#8B8D97]">
              Principiile care ne ghideaza in fiecare zi
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0F1017] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.16]"
                  style={{
                    boxShadow: "0 0 0 0 transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 8px 40px -12px ${v.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 0 0 transparent";
                  }}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 h-[2px] w-full opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ backgroundColor: v.color }}
                  />

                  {/* Radial glow on hover */}
                  <div
                    className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100"
                    style={{ backgroundColor: `${v.color}15` }}
                  />

                  {/* Icon dot */}
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${v.color}15` }}
                  >
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: v.color }}
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#8B8D97]">
                    {v.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="bg-[#04040A] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Istoria noastra
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[#8B8D97]">
              Parcursul Albatros A Service de-a lungul anilor
            </p>
          </AnimatedSection>

          <div ref={timelineRef} className="relative">
            {/* Gradient connecting line */}
            <div
              className="absolute left-[1.4rem] top-3 bottom-3 w-[2px]"
              style={{
                backgroundImage: "linear-gradient(to bottom, #FF2D2D, #3B82F6)",
              }}
            />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    timelineInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: i * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="relative flex items-start gap-6"
                >
                  {/* Timeline dot */}
                  <div
                    className="relative z-10 flex h-[2.8rem] w-[2.8rem] shrink-0 items-center justify-center rounded-full shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #FF2D2D, #3B82F6)",
                      boxShadow: "0 0 20px rgba(255, 45, 45, 0.2)",
                    }}
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-white" />
                  </div>

                  {/* Content card */}
                  <div className="group flex-1 rounded-2xl border border-white/[0.08] bg-[#080808] p-5 transition-all duration-300 hover:border-white/[0.16] hover:shadow-[0_4px_30px_-8px_rgba(255,45,45,0.08)]">
                    <span className="text-sm font-bold text-[#FF2D2D]">
                      {m.year}
                    </span>
                    <p className="mt-1.5 leading-relaxed text-[#8B8D97]">
                      {m.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
