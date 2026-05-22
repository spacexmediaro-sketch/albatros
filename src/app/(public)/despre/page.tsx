"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
  { year: "2005", text: "Înființarea Albatros A Service în Blejoi, Prahova" },
  { year: "2010", text: "Aderarea la rețeaua Q-SERVICE România" },
  { year: "2015", text: "Extindere cu secție de tinichigerie și vopsitorie" },
  { year: "2020", text: "Modernizare echipamente diagnoză și geometrie 3D" },
  { year: "2024", text: "Digitalizare completă - programări online și tracking" },
];

const values = [
  {
    title: "Transparență",
    desc: "Fiecare lucrare este documentată cu poze și explicații. Știi mereu ce se întâmplă cu mașina ta.",
    color: "#C9A84C",
  },
  {
    title: "Calitate",
    desc: "Folosim piese originale și aftermarket premium. Garanție la toate lucrările efectuate.",
    color: "#C9A84C",
  },
  {
    title: "Experiență",
    desc: "Peste 19 ani de experiență în reparații auto multimarcă, cu specializare pe motoare diesel.",
    color: "#A8A9AD",
  },
  {
    title: "Tehnologie",
    desc: "Echipamente de ultimă generație pentru diagnoză computerizată, geometrie 3D și vopsitorie.",
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
        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#C9A84C]/8 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#C9A84C]/8 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-[#A8A9AD]/5 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/10 px-4 py-1.5"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#C9A84C]">
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
                backgroundImage: "linear-gradient(135deg, #C9A84C, #C9A84C)",
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
            Din 2005, oferim servicii auto complete în Blejoi-Ploiești. Suntem
            membri ai rețelei Q-SERVICE România și ne mândrim cu o echipă de
            profesioniști dedicați.
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
              Principiile care ne ghidează în fiecare zi
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
              Istoria noastră
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
                backgroundImage: "linear-gradient(to bottom, #C9A84C, #C9A84C)",
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
                      background: "linear-gradient(135deg, #C9A84C, #C9A84C)",
                      boxShadow: "0 0 20px rgba(201, 168, 76, 0.2)",
                    }}
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-white" />
                  </div>

                  {/* Content card */}
                  <div className="group flex-1 rounded-2xl border border-white/[0.08] bg-[#080808] p-5 transition-all duration-300 hover:border-white/[0.16] hover:shadow-[0_4px_30px_-8px_rgba(201,168,76,0.08)]">
                    <span className="text-sm font-bold text-[#C9A84C]">
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
