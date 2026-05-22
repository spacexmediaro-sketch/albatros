"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const services = [
  { slug: "diagnoza-auto", name: "Diagnoză auto computerizată", category: "Diagnoză", desc: "Citire erori, resetare martori, diagnoză completă pentru toate mărcile auto.", color: "#3B82F6", icon: "search" },
  { slug: "reparatii-motoare-diesel", name: "Reparații motoare diesel", category: "Motor", desc: "Specialiști în motoare diesel — reparații complete, regenerări turbine, pompe de injecție.", color: "#C9A84C", icon: "engine" },
  { slug: "reparatii-injectoare", name: "Reparații injectoare", category: "Motor", desc: "Testare, recalibrare și reparații injectoare diesel common-rail.", color: "#C9A84C", icon: "injector" },
  { slug: "rectificari-chiulase", name: "Rectificări chiulase", category: "Motor", desc: "Rectificare profesională chiulase cu echipament specializat.", color: "#C9A84C", icon: "cylinder" },
  { slug: "tinichigerie-auto", name: "Tinichigerie auto", category: "Caroserie", desc: "Îndreptare tablă, sudură, reparații structurale caroserie.", color: "#F59E0B", icon: "hammer" },
  { slug: "vopsitorie-auto", name: "Vopsitorie auto", category: "Caroserie", desc: "Vopsire integrală sau parțială în cabină profesională.", color: "#F59E0B", icon: "paint" },
  { slug: "geometrie-roti", name: "Geometrie roți", category: "Suspensie", desc: "Geometrie 3D pentru aliniere perfectă și uzură uniformă anvelope.", color: "#22C55E", icon: "wheel" },
  { slug: "electrica-auto", name: "Electrică auto", category: "Electrică", desc: "Diagnoză și reparații instalație electrică, alternator, electromotor.", color: "#8B5CF6", icon: "bolt" },
  { slug: "mecanica-auto", name: "Mecanică auto", category: "Mecanică", desc: "Reparații mecanice generale — frâne, ambreiaj, suspensie, distribuție.", color: "#6B7280", icon: "wrench" },
  { slug: "incarcari-aer-conditionat", name: "Încărcări aer condiționat", category: "Confort", desc: "Verificare etanșeitate, încărcare freon, dezinfecție sistem AC.", color: "#06B6D4", icon: "snowflake" },
];

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "Diagnoză": { bg: "rgba(59,130,246,0.1)", text: "#3B82F6", border: "rgba(59,130,246,0.2)" },
  "Motor": { bg: "rgba(201,168,76,0.1)", text: "#C9A84C", border: "rgba(201,168,76,0.2)" },
  "Caroserie": { bg: "rgba(245,158,11,0.1)", text: "#F59E0B", border: "rgba(245,158,11,0.2)" },
  "Suspensie": { bg: "rgba(34,197,94,0.1)", text: "#22C55E", border: "rgba(34,197,94,0.2)" },
  "Electrică": { bg: "rgba(139,92,246,0.1)", text: "#8B5CF6", border: "rgba(139,92,246,0.2)" },
  "Mecanică": { bg: "rgba(107,114,128,0.1)", text: "#9CA3AF", border: "rgba(107,114,128,0.2)" },
  "Confort": { bg: "rgba(6,182,212,0.1)", text: "#06B6D4", border: "rgba(6,182,212,0.2)" },
};

function ServiceCard({ service, index }: { service: typeof services[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const catColor = categoryColors[service.category] || { bg: "rgba(107,114,128,0.1)", text: "#9CA3AF", border: "rgba(107,114,128,0.2)" };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link href={`/servicii/${service.slug}`} className="group block h-full">
        <div
          className="relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0F1017] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.15]"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 0%, ${service.color}08 0%, transparent 60%)`,
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.backgroundImage = `radial-gradient(circle at 50% 0%, ${service.color}18 0%, transparent 60%)`;
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.backgroundImage = `radial-gradient(circle at 50% 0%, ${service.color}08 0%, transparent 60%)`;
          }}
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 h-[2px] w-full opacity-60 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
          />

          {/* Category badge */}
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
            style={{
              backgroundColor: catColor.bg,
              color: catColor.text,
              border: `1px solid ${catColor.border}`,
            }}
          >
            {service.category}
          </span>

          {/* Service name */}
          <h2 className="mt-4 text-lg font-bold text-white">
            {service.name}
          </h2>

          {/* Description */}
          <p className="mt-2 text-sm leading-relaxed text-[#8B8D97]">
            {service.desc}
          </p>

          {/* Arrow link */}
          <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[#C9A84C] transition-colors duration-200 group-hover:text-[#D4AF37]">
            Detalii
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
              {"\u2192"}
            </span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServiciiPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      {/* Dark Hero Section */}
      <section className="relative overflow-hidden bg-[#04040A] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        {/* Grid pattern overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Radial gradient orbs */}
        <motion.div
          className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div ref={heroRef} className="relative mx-auto max-w-7xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-block"
          >
            <span className="inline-block rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              Servicii complete
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Serviciile{" "}
            <span className="bg-gradient-to-r from-[#C9A84C] to-[#FF6B35] bg-clip-text text-transparent">
              noastre
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#8B8D97]"
          >
            Albatros A Service oferă o gamă completă de servicii auto pentru toate
            mărcile. Fiecare reparație vine cu garanție și transparență totală.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#04040A] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
