"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/public/scroll-reveal";
import { HeroParticles } from "@/components/public/hero-particles";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const services = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
      </svg>
    ),
    name: "Diagnoză auto",
    slug: "diagnoza-auto",
    desc: "Diagnoză computerizată pentru toate mărcile cu echipament profesional de ultimă generație.",
    color: "#FF2D2D",
    label: "POPULAR",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93s.844.083 1.16-.188l.68-.557a1.125 1.125 0 011.544.131l.773.774c.39.389.44 1.002.131 1.544l-.557.68c-.271.316-.305.756-.188 1.16s.506.71.93.78l.894.15c.542.09.94.56.94 1.109v1.094c0 .55-.398 1.02-.94 1.11l-.894.149c-.424.07-.764.384-.93.78s-.083.844.188 1.16l.557.68a1.125 1.125 0 01-.131 1.544l-.773.773a1.125 1.125 0 01-1.544.131l-.68-.557c-.316-.271-.756-.305-1.16-.188s-.71.506-.78.93l-.15.894c-.09.542-.56.94-1.109.94h-1.094c-.55 0-1.02-.398-1.11-.94l-.149-.894c-.07-.424-.384-.764-.78-.93s-.844-.083-1.16.188l-.68.557a1.125 1.125 0 01-1.544-.131l-.773-.774a1.125 1.125 0 01-.131-1.544l.557-.68c.271-.316.305-.756.188-1.16s-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.764-.384.93-.78s.083-.844-.188-1.16l-.557-.68a1.125 1.125 0 01.131-1.544l.773-.773a1.125 1.125 0 011.544-.131l.68.557c.316.271.756.305 1.16.188s.71-.506.78-.93l.15-.894z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    name: "Reparații diesel",
    slug: "reparatii-motoare-diesel",
    desc: "Specialiști motoare diesel și injectoare. Diagnoză și reparații la standarde Q-SERVICE.",
    color: "#3B82F6",
    label: "SPECIALITATE",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.66-5.66a2 2 0 010-2.83l.71-.71a2 2 0 012.83 0l5.66 5.66m-2.83 2.83l5.66 5.66a2 2 0 002.83 0l.71-.71a2 2 0 000-2.83l-5.66-5.66" />
      </svg>
    ),
    name: "Tinichigerie",
    slug: "tinichigerie-auto",
    desc: "Reparații caroserie și îndreptare tablă. Rezultate impecabile cu tehnologie modernă.",
    color: "#8B5CF6",
    label: "PREMIUM",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    name: "Vopsitorie",
    slug: "vopsitorie-auto",
    desc: "Vopsitorie profesională în cabină dedicată. Culori exacte, finisaj de fabrică.",
    color: "#F59E0B",
    label: "CABINA DEDICATA",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    name: "Geometrie roți",
    slug: "geometrie-roti",
    desc: "Aliniere precisă cu echipament 3D. Siguranță și uzură uniformă a anvelopelor.",
    color: "#3B82F6",
    label: "3D LASER",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    name: "Aer condiționat",
    slug: "incarcari-aer-conditionat",
    desc: "Încărcare și verificare sistem AC. Freon R134a și R1234yf disponibil.",
    color: "#8B5CF6",
    label: "AC AUTO",
  },
];

const steps = [
  {
    step: "01",
    title: "Programezi online",
    desc: "Alege serviciul și o dată convenabilă din calendarul nostru.",
    color: "#FF2D2D",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Diagnoză gratuită",
    desc: "Evaluăm mașina și stabilim problema exactă cu echipament profesional.",
    color: "#3B82F6",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Aprobi devizul",
    desc: "Primești estimarea înainte de orice reparație. Fără surprize.",
    color: "#8B5CF6",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Tracking live",
    desc: "Urmărești progresul mașinii tale în timp real prin Service Tracker.",
    color: "#F59E0B",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

const reviews = [
  {
    name: "Andrei M.",
    rating: 5,
    text: "Am venit cu o problemă la injectoare diesel și au rezolvat-o în aceeași zi. Prețuri corecte și echipă profesionistă.",
    car: "VW Passat B8 2.0 TDI",
  },
  {
    name: "Maria P.",
    rating: 5,
    text: "Geometria 3D a fost impecabilă. Mașina merge drept ca pe șine acum. Recomand cu încredere!",
    car: "BMW Seria 3 F30",
  },
  {
    name: "Cristian D.",
    rating: 4,
    text: "Vopsitorie de calitate excelentă, nu se vede diferența față de original. Singura mică problemă a fost termenul de livrare.",
    car: "Skoda Octavia III",
  },
  {
    name: "Elena S.",
    rating: 5,
    text: "Tracker-ul live e genial, am urmărit tot procesul de pe telefon. Foarte transparent și modern ca abordare.",
    car: "Ford Focus MK4",
  },
];

const blogArticles = [
  {
    slug: "cand-schimbi-uleiul-motor",
    title: "Cand trebuie sa schimbi uleiul de motor?",
    excerpt: "Ghid complet despre intervalele de schimb ulei in functie de tipul motorului si stilul de condus.",
    category: "Intretinere",
    color: "#FF2D2D",
  },
  {
    slug: "semne-probleme-turbo",
    title: "5 semne ca turbina ta are probleme",
    excerpt: "Invata sa recunosti din timp simptomele unei turbine defecte si evita reparatiile costisitoare.",
    category: "Diagnostic",
    color: "#3B82F6",
  },
  {
    slug: "pregatire-masina-iarna",
    title: "Cum sa-ti pregatesti masina pentru iarna",
    excerpt: "Lista completa de verificari si intretinere pentru sezonul rece: anvelope, baterie, antigel, vizibilitate.",
    category: "Sezonier",
    color: "#8B5CF6",
  },
];

/* ------------------------------------------------------------------ */
/*  ANIMATION HELPERS                                                  */
/* ------------------------------------------------------------------ */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function StaggerSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      {/* ============================================================ */}
      {/* HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#04040A]">
        {/* Animated particles */}
        <HeroParticles />

        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,45,45,0.03) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Radial gradient orbs */}
        <div className="absolute top-20 right-10 h-[500px] w-[500px] rounded-full bg-[#FF2D2D]/[0.06] blur-[150px]" />
        <div className="absolute bottom-20 left-10 h-[400px] w-[400px] rounded-full bg-[#3B82F6]/[0.06] blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#8B5CF6]/[0.03] blur-[180px]" />

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#04040A] to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 w-full">
          <motion.div
            ref={heroRef}
            className="grid items-center gap-12 lg:grid-cols-2"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF2D2D] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF2D2D]" />
                </span>
                <span className="text-sm text-[#8B8D97]">Membru rețea Q-SERVICE Romania</span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 font-[family-name:var(--font-dm-serif)] text-5xl leading-[1.1] text-white sm:text-6xl lg:text-7xl"
              >
                Service auto
                <br />
                <span className="text-gradient-brand">de elită</span>
                <br />
                <span className="text-[#4A4B55]">în Ploiești</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="mt-6 max-w-lg text-lg leading-relaxed text-[#8B8D97]"
              >
                Diagnoză computerizată de precizie, reparații diesel de specialitate, tinichigerie și vopsitorie profesională. Urmărire live a reparației prin Service Tracker.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link href="/programare">
                  <Button
                    size="lg"
                    className="btn-shine glow-pulse bg-[#FF2D2D] px-8 py-6 text-base font-semibold text-white hover:bg-[#E62626] shadow-[0_0_30px_rgba(255,45,45,0.3)]"
                  >
                    Programează acum
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Button>
                </Link>
                <Link href="/estimator">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/10 bg-white/5 px-8 py-6 text-base text-white backdrop-blur-sm hover:bg-white/10 hover:border-[#FF2D2D]/50"
                  >
                    Centru de Daune AI
                  </Button>
                </Link>
              </motion.div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="mt-12 flex gap-8 border-t border-white/[0.08] pt-8"
              >
                <div>
                  <p className="text-3xl font-bold text-white">20+</p>
                  <p className="text-sm text-[#4A4B55]">ani experiență</p>
                </div>
                <div className="w-px bg-white/[0.08]" />
                <div>
                  <p className="text-3xl font-bold text-white">5000+</p>
                  <p className="text-sm text-[#4A4B55]">clienți mulțumiți</p>
                </div>
                <div className="w-px bg-white/[0.08]" />
                <div>
                  <p className="text-3xl font-bold text-white">15</p>
                  <p className="text-sm text-[#4A4B55]">mărci auto</p>
                </div>
              </motion.div>
            </div>

            {/* Right: Feature cards stack */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="relative space-y-4">
                {/* Card 1: Service Tracker */}
                <div className="group rounded-2xl border border-white/[0.08] bg-white/5 p-5 backdrop-blur-sm transition-all duration-500 hover:border-[#FF2D2D]/30 hover:bg-white/[0.08] hover:shadow-[0_8px_40px_rgba(255,45,45,0.1)]">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF2D2D]/10 text-[#FF2D2D]">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Service Tracker Live</h3>
                      <p className="text-sm text-[#8B8D97]">Urmărește reparația în timp real</p>
                    </div>
                    <div className="ml-auto rounded-full bg-green-500/10 border border-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
                      LIVE
                    </div>
                  </div>
                </div>

                {/* Card 2: AI Estimator */}
                <div className="group rounded-2xl border border-white/[0.08] bg-white/5 p-5 backdrop-blur-sm transition-all duration-500 hover:border-[#3B82F6]/30 hover:bg-white/[0.08] hover:shadow-[0_8px_40px_rgba(59,130,246,0.1)]">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3B82F6]/10 text-[#3B82F6]">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Estimator AI Daune</h3>
                      <p className="text-sm text-[#8B8D97]">Estimare cost din fotografii</p>
                    </div>
                    <div className="ml-auto rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 px-3 py-1 text-xs font-medium text-[#3B82F6]">
                      AI
                    </div>
                  </div>
                </div>

                {/* Card 3: Virtual Garage */}
                <div className="group rounded-2xl border border-white/[0.08] bg-white/5 p-5 backdrop-blur-sm transition-all duration-500 hover:border-[#8B5CF6]/30 hover:bg-white/[0.08] hover:shadow-[0_8px_40px_rgba(139,92,246,0.1)]">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6]">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Garaj Virtual</h3>
                      <p className="text-sm text-[#8B8D97]">Istoric + remindere ITP/RCA</p>
                    </div>
                    <div className="ml-auto rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-[#8B8D97]">
                      BETA
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-8 w-5 rounded-full border border-white/10 flex justify-center pt-1.5">
            <div className="h-2 w-1 rounded-full bg-white/30 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION DIVIDER                                               */}
      {/* ============================================================ */}
      <div className="section-divider h-px bg-gradient-to-r from-transparent via-[#FF2D2D]/40 to-transparent" />

      {/* ============================================================ */}
      {/* SERVICII                                                      */}
      {/* ============================================================ */}
      <section className="relative bg-[#04040A] px-4 py-24 sm:px-6 lg:px-8 overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,45,45,0.03) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#8B8D97]">
                Ce facem
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-dm-serif)] text-4xl text-white sm:text-5xl">
                Servicii auto{" "}
                <span className="text-gradient-brand">complete</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[#8B8D97]">
                Acoperim toate nevoile mașinii tale, de la diagnoză la vopsitorie, cu echipament profesional și garanție.
              </p>
            </div>
          </ScrollReveal>

          <StaggerSection className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <motion.div key={service.slug} variants={itemVariants}>
                <Link href={`/servicii/${service.slug}`} className="block h-full">
                  <div
                    className="group relative h-full rounded-2xl border border-white/[0.08] bg-[#0F1017] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.15] hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
                  >
                    {/* Hover radial glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(600px circle at 50% 0%, ${service.color}08, transparent 60%)`,
                      }}
                    />

                    <div className="relative">
                      {/* Icon */}
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl"
                        style={{
                          backgroundColor: `${service.color}15`,
                          color: service.color,
                        }}
                      >
                        {service.icon}
                      </div>

                      {/* Label badge */}
                      <span
                        className="mt-4 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                        style={{
                          backgroundColor: `${service.color}15`,
                          color: service.color,
                        }}
                      >
                        {service.label}
                      </span>

                      <h3 className="mt-3 text-lg font-semibold text-white">
                        {service.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#8B8D97]">
                        {service.desc}
                      </p>

                      {/* Arrow */}
                      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#4A4B55] transition-colors group-hover:text-white">
                        Detalii
                        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </StaggerSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION DIVIDER                                               */}
      {/* ============================================================ */}
      <div className="section-divider h-px bg-gradient-to-r from-transparent via-[#FF2D2D]/30 to-transparent" />

      {/* ============================================================ */}
      {/* CUM FUNCTIONEAZA                                              */}
      {/* ============================================================ */}
      <section className="relative bg-[#050505] px-4 py-24 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#8B8D97]">
                Procesul nostru
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-dm-serif)] text-4xl text-white sm:text-5xl">
                Cum{" "}
                <span className="text-gradient-brand">funcționează</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[#8B8D97]">
                Patru pași simpli de la programare la livrare.
              </p>
            </div>
          </ScrollReveal>

          <StaggerSection className="relative mt-16">
            {/* Connector line (desktop) */}
            <div className="absolute top-[4.5rem] left-[calc(12.5%+3rem)] right-[calc(12.5%+3rem)] hidden h-px border-t-2 border-dashed border-[#FF2D2D]/20 lg:block" />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((item) => (
                <motion.div key={item.step} variants={itemVariants} className="relative">
                  <div className="group rounded-2xl border border-white/[0.08] bg-[#080808] p-6 text-center transition-all duration-500 hover:border-white/[0.15] hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
                    {/* Large step number (faded) */}
                    <div
                      className="absolute top-4 right-4 text-5xl font-black leading-none select-none"
                      style={{ color: `${item.color}10` }}
                    >
                      {item.step}
                    </div>

                    {/* Icon circle */}
                    <div
                      className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full"
                      style={{
                        backgroundColor: `${item.color}15`,
                        color: item.color,
                      }}
                    >
                      {item.icon}
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#8B8D97]">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </StaggerSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION DIVIDER                                               */}
      {/* ============================================================ */}
      <div className="section-divider h-px bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent" />

      {/* ============================================================ */}
      {/* CENTRU DE DAUNE AI                                            */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-[#04040A] px-4 py-24 sm:px-6 lg:px-8">
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,45,45,0.03) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Gradient accent blobs */}
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#FF2D2D]/[0.05] blur-[180px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#3B82F6]/[0.05] blur-[180px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <ScrollReveal>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#FF2D2D]/20 bg-[#FF2D2D]/10 px-4 py-1.5 text-sm font-semibold text-[#FF2D2D]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                  Nou — Tehnologie AI
                </span>

                <h2 className="mt-6 font-[family-name:var(--font-dm-serif)] text-4xl text-white sm:text-5xl">
                  Centru de Daune
                  <br />
                  <span className="text-gradient-brand">Inteligent</span>
                </h2>

                <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#8B8D97]">
                  Încarcă fotografii cu avariile mașinii tale și primești o estimare instantanee a costurilor. Inteligența artificială identifică daunele, operațiile necesare și intervalul de preț — totul în mai puțin de 60 de secunde.
                </p>

                <ul className="mt-8 space-y-4">
                  {[
                    "Analiză AI din fotografii în sub 60 secunde",
                    "Identificare automată zone avariate + severitate",
                    "Estimare cost manoperă + piese orientativă",
                    "Programare inspecție gratuită direct din rezultat",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#8B8D97]">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF2D2D]/10 text-xs text-[#FF2D2D]">
                        &#10003;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/estimator">
                    <Button
                      size="lg"
                      className="btn-shine glow-pulse bg-[#FF2D2D] px-8 text-white hover:bg-[#E62626] shadow-[0_0_30px_rgba(255,45,45,0.3)]"
                    >
                      Estimează Gratuit
                      <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Button>
                  </Link>
                  <Link href="/servicii/tinichigerie-auto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/10 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/20"
                    >
                      Despre tinichigerie
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Browser mockup */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative">
                <div className="rounded-2xl border border-white/[0.08] bg-[#050505] p-6 backdrop-blur-sm">
                  {/* Browser bar */}
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#FF2D2D]/40" />
                    <div className="h-3 w-3 rounded-full bg-[#F59E0B]/40" />
                    <div className="h-3 w-3 rounded-full bg-green-500/40" />
                    <div className="ml-3 h-7 flex-1 rounded-lg bg-white/5 border border-white/[0.06] px-3 flex items-center">
                      <span className="text-xs text-[#4A4B55]">albatrosa.ro/estimator</span>
                    </div>
                  </div>

                  {/* Content mockup */}
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="h-20 w-20 rounded-lg bg-gradient-to-br from-[#FF2D2D]/20 to-[#3B82F6]/20 border border-white/[0.06] flex items-center justify-center">
                        <svg className="h-8 w-8 text-[#8B8D97]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                        </svg>
                      </div>
                      <div className="h-20 w-20 rounded-lg bg-gradient-to-br from-[#FF2D2D]/10 to-[#3B82F6]/10 border border-white/[0.06] flex items-center justify-center">
                        <svg className="h-8 w-8 text-[#4A4B55]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                        </svg>
                      </div>
                      <div className="h-20 w-20 rounded-lg border-2 border-dashed border-white/10 flex items-center justify-center text-[#4A4B55] text-xl">
                        +
                      </div>
                    </div>

                    <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4 space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-[#8B8D97]">Bară față</span>
                        <span className="rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 px-2.5 py-0.5 text-xs font-medium text-[#F59E0B]">
                          Medie
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-[#8B8D97]">Aripă stânga</span>
                        <span className="rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 px-2.5 py-0.5 text-xs font-medium text-[#F59E0B]">
                          Ușoară
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-[#8B8D97]">Far stânga</span>
                        <span className="rounded-full bg-[#FF2D2D]/10 border border-[#FF2D2D]/20 px-2.5 py-0.5 text-xs font-medium text-[#FF2D2D]">
                          Severă
                        </span>
                      </div>
                    </div>

                    <div className="rounded-xl bg-gradient-to-r from-[#FF2D2D]/[0.08] to-[#3B82F6]/[0.08] border border-white/[0.06] p-4 text-center">
                      <p className="text-xs text-[#4A4B55] uppercase tracking-wider font-medium">
                        Estimare cost
                      </p>
                      <p className="mt-1 text-2xl font-bold text-white">
                        2.800 — 4.200 LEI
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating AI Powered badge */}
                <div className="absolute -top-3 -right-3 rounded-full bg-gradient-to-r from-[#FF2D2D] to-[#3B82F6] px-4 py-1.5 text-xs font-bold text-white shadow-[0_4px_20px_rgba(255,45,45,0.4)] animate-float">
                  AI Powered
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION DIVIDER                                               */}
      {/* ============================================================ */}
      <div className="section-divider h-px bg-gradient-to-r from-transparent via-[#FF2D2D]/30 to-transparent" />

      {/* ============================================================ */}
      {/* REVIEWS                                                       */}
      {/* ============================================================ */}
      <section className="relative bg-[#050505] px-4 py-24 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#8B8D97]">
                Testimoniale
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-dm-serif)] text-4xl text-white sm:text-5xl">
                Ce spun{" "}
                <span className="text-gradient-brand">clienții noștri</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerSection className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((review) => (
              <motion.div key={review.name} variants={itemVariants}>
                <div className="group relative h-full rounded-2xl border border-white/[0.08] bg-[#0F1017] overflow-hidden transition-all duration-500 hover:border-white/[0.15] hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
                  {/* Top gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#FF2D2D] to-[#3B82F6]" />

                  <div className="relative p-6 pt-7">
                    {/* Quote decoration */}
                    <span className="absolute top-3 right-4 font-[family-name:var(--font-dm-serif)] text-6xl leading-none text-[#FF2D2D]/[0.06] select-none">
                      &ldquo;
                    </span>

                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${i < review.rating ? "text-[#F59E0B]" : "text-[#4A4B55]"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Text */}
                    <p className="mt-4 text-sm leading-relaxed text-[#8B8D97]">
                      &ldquo;{review.text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="mt-5 pt-4 border-t border-white/[0.06]">
                      <p className="text-sm font-semibold text-white">{review.name}</p>
                      <p className="text-xs text-[#4A4B55]">{review.car}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION DIVIDER                                               */}
      {/* ============================================================ */}
      <div className="section-divider h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent" />

      {/* ============================================================ */}
      {/* BLOG PREVIEW                                                  */}
      {/* ============================================================ */}
      <section className="relative bg-[#04040A] px-4 py-24 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#8B8D97]">
                Blog
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-dm-serif)] text-4xl text-white sm:text-5xl">
                Din blogul{" "}
                <span className="text-gradient-brand">nostru</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerSection className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogArticles.map((article) => (
              <motion.div key={article.slug} variants={itemVariants}>
                <Link href={`/blog/${article.slug}`} className="block h-full">
                  <div className="group relative h-full rounded-2xl border border-white/[0.08] bg-[#0F1017] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.15] hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(600px circle at 50% 0%, ${article.color}08, transparent 60%)`,
                      }}
                    />

                    <div className="relative">
                      <span
                        className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                        style={{
                          backgroundColor: `${article.color}15`,
                          color: article.color,
                        }}
                      >
                        {article.category}
                      </span>

                      <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-white/90">
                        {article.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#8B8D97]">
                        {article.excerpt}
                      </p>

                      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#4A4B55] transition-colors group-hover:text-[#FF2D2D]">
                        Citește
                        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </StaggerSection>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 text-center">
              <Link href="/blog" className="group inline-flex items-center gap-2 text-sm font-medium text-[#8B8D97] transition-colors hover:text-white">
                Vezi toate articolele
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION DIVIDER                                               */}
      {/* ============================================================ */}
      <div className="section-divider h-px bg-gradient-to-r from-transparent via-[#FF2D2D]/30 to-transparent" />

      {/* ============================================================ */}
      {/* CONTACT / LOCATION                                            */}
      {/* ============================================================ */}
      <section className="relative bg-[#050505] px-4 py-24 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-[#FF2D2D]/[0.03] blur-[150px]" />

        <div className="relative mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#8B8D97]">
                Contact
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-dm-serif)] text-4xl text-white sm:text-5xl">
                Unde ne{" "}
                <span className="text-gradient-brand">găsești</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-[#8B8D97]">
                Șoseaua Ploiești-Văleni FN, Blejoi, Prahova (DN1B — Centura de Nord Ploiești)
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {/* Phone 1 */}
              <a
                href="tel:+40723177032"
                className="group flex flex-col items-center rounded-2xl border border-white/[0.08] bg-[#0F1017] p-6 transition-all duration-500 hover:border-[#FF2D2D]/30 hover:shadow-[0_8px_40px_rgba(255,45,45,0.1)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF2D2D]/10 text-[#FF2D2D]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <span className="mt-3 text-lg font-semibold text-white group-hover:text-[#FF2D2D] transition-colors">
                  0723 177 032
                </span>
                <span className="text-xs text-[#4A4B55]">Mobil</span>
              </a>

              {/* Phone 2 */}
              <a
                href="tel:+40244410650"
                className="group flex flex-col items-center rounded-2xl border border-white/[0.08] bg-[#0F1017] p-6 transition-all duration-500 hover:border-[#3B82F6]/30 hover:shadow-[0_8px_40px_rgba(59,130,246,0.1)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3B82F6]/10 text-[#3B82F6]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <span className="mt-3 text-lg font-semibold text-white group-hover:text-[#3B82F6] transition-colors">
                  0244 410 650
                </span>
                <span className="text-xs text-[#4A4B55]">Fix</span>
              </a>

              {/* Schedule */}
              <div className="flex flex-col items-center rounded-2xl border border-white/[0.08] bg-[#0F1017] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="mt-3 text-lg font-semibold text-white">
                  Luni – Vineri
                </span>
                <span className="text-xs text-[#4A4B55]">08:30 – 17:30</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-10 text-center">
              <Link href="/programare">
                <Button
                  size="lg"
                  className="btn-shine glow-pulse bg-[#FF2D2D] px-10 py-6 text-base font-semibold text-white hover:bg-[#E62626] shadow-[0_0_30px_rgba(255,45,45,0.3)]"
                >
                  Programează o vizită
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
