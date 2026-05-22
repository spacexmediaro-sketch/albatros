"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TextRotator } from "@/components/public/text-rotator";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const services = [
  {
    name: "Diagnoză auto",
    slug: "diagnoza-auto",
    desc: "Echipament profesional de ultimă generație. Identificăm problema exact, fără ghiceli.",
  },
  {
    name: "Reparații diesel",
    slug: "reparatii-motoare-diesel",
    desc: "Specialiști injectoare și turbine diesel. Standarde Q-SERVICE.",
  },
  {
    name: "Tinichigerie & Vopsitorie",
    slug: "tinichigerie-auto",
    desc: "Reparații caroserie, îndreptare tablă și vopsitorie în cabină dedicată. Finisaj de fabrică.",
  },
  {
    name: "Geometrie roți 3D",
    slug: "geometrie-roti",
    desc: "Aliniere precisă cu echipament laser 3D. Siguranță maximă.",
  },
  {
    name: "Electrică auto",
    slug: "electrica-auto",
    desc: "Diagnoză și reparații sisteme electrice, senzori, alternatoare.",
  },
  {
    name: "Aer condiționat",
    slug: "incarcari-aer-conditionat",
    desc: "Încărcare și verificare AC. R134a și R1234yf.",
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
    text: "Vopsitorie de calitate excelentă, nu se vede diferența față de original.",
    car: "Skoda Octavia III",
  },
  {
    name: "Elena S.",
    rating: 5,
    text: "Tracker-ul live e genial, am urmărit tot procesul de pe telefon. Foarte transparent și modern.",
    car: "Ford Focus MK4",
  },
];

const blogArticles = [
  {
    slug: "cand-schimbi-uleiul-motor",
    title: "Când trebuie să schimbi uleiul de motor?",
    excerpt: "Ghid complet despre intervalele de schimb ulei în funcție de tipul motorului și stilul de condus.",
    category: "Întreținere",
  },
  {
    slug: "semne-probleme-turbo",
    title: "5 semne că turbina ta are probleme",
    excerpt: "Învață să recunoști din timp simptomele unei turbine defecte și evită reparațiile costisitoare.",
    category: "Diagnostic",
  },
  {
    slug: "pregatire-masina-iarna",
    title: "Cum să-ți pregătești mașina pentru iarnă",
    excerpt: "Lista completă de verificări și întreținere pentru sezonul rece.",
    category: "Sezonier",
  },
];

const trustItems = [
  "Q-SERVICE Romania",
  "20+ ani experiență",
  "Multimarcă",
  "Garanție lucrări",
  "Piese originale",
  "Diagnoză gratuită",
  "Tracking live",
  "Centru Daune RCA",
  "Mașină la schimb GRATUIT",
];

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -60]);

  const [showPill, setShowPill] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowPill(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* HERO                                                          */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex items-center bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(201,168,76,0.08),transparent)]" />

        <motion.div
          ref={heroRef}
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-[family-name:var(--font-space-grotesk)] text-xs font-medium uppercase tracking-[0.3em] text-[#C9A84C]"
          >
            Din 1992 &middot; Blejoi-Ploiești
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-[family-name:var(--font-space-grotesk)] text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-white"
          >
            Service auto
            <br />
            <TextRotator />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-white/50"
          >
            Repari mașina o singură dată, cum trebuie. Diagnoză gratuită,
            piese originale, tracking live al fiecărei reparații.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link href="/programare">
              <Button
                size="lg"
                className="bg-[#C9A84C] px-8 py-6 text-base font-semibold text-black hover:bg-[#d4b155] transition-colors"
              >
                Programează acum
              </Button>
            </Link>
            <a href="tel:+40723177032">
              <Button
                size="lg"
                variant="outline"
                className="border-white/15 px-8 py-6 text-base text-white hover:bg-white/5 hover:border-white/25 transition-colors"
              >
                0723 177 032
              </Button>
            </a>
          </motion.div>

          {/* Inline social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-14 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-10"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["A", "M", "C", "E"].map((letter, i) => (
                  <div
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0a0a0a] bg-[#1a1a1a] text-xs font-medium text-white/60"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="h-3 w-3 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-white/30">5.000+ clienți mulțumiți</p>
              </div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-white/10" />
            <p className="text-sm text-white/30">
              <span className="text-white/60 font-medium">20+ ani</span> pe piață &middot; <span className="text-white/60 font-medium">15 mărci</span> auto
            </p>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </section>

      {/* TRUST MARQUEE */}
      <section className="border-y border-white/[0.06] bg-[#0a0a0a] py-4 overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-8">
          {[...trustItems, ...trustItems].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2 whitespace-nowrap text-sm text-white/25 font-medium"
            >
              <span className="h-1 w-1 rounded-full bg-[#C9A84C]" />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CENTRU DAUNE — Dramatic, full-width, sales-focused            */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="centru-daune" className="relative bg-[#0a0a0a] overflow-hidden scroll-mt-28">
        {/* Accent glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(201,168,76,0.06),transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-5 lg:items-center">
            {/* Left — 3 cols */}
            <FadeIn className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/5 px-4 py-1.5 text-xs font-medium text-[#C9A84C]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
                Centru Daune Autorizat
              </div>

              <h2 className="mt-6 font-[family-name:var(--font-space-grotesk)] text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-white">
                Ai avut un accident?
                <br />
                <span className="text-white/40">Noi ne ocupăm de tot.</span>
              </h2>

              <div className="mt-10 space-y-0">
                {[
                  { text: "Deschidere și administrare completă dosar RCA", highlight: false },
                  { text: "Constatare și reparație la standard de fabrică", highlight: false },
                  { text: "Comunicare transparentă pe toată durata lucrării", highlight: false },
                  { text: "Mașină la schimb GRATUIT pe perioada reparației", highlight: true },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-4 py-4 ${
                      i < 3 ? "border-b border-white/[0.06]" : ""
                    }`}
                  >
                    <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                      item.highlight
                        ? "bg-[#C9A84C] text-black"
                        : "bg-white/[0.06] text-[#C9A84C]"
                    }`}>
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={`text-[15px] leading-snug ${
                      item.highlight ? "font-semibold text-white" : "text-white/60"
                    }`}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/programare">
                  <Button
                    size="lg"
                    className="bg-[#C9A84C] px-8 py-6 text-base font-semibold text-black hover:bg-[#d4b155] transition-colors"
                  >
                    Programează constatare
                  </Button>
                </Link>
                <a href="tel:+40723177032">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/15 px-8 py-6 text-base text-white hover:bg-white/5 hover:border-white/25 transition-colors"
                  >
                    Sună acum &rarr;
                  </Button>
                </a>
              </div>
            </FadeIn>

            {/* Right — 2 cols, statement block */}
            <FadeIn delay={0.2} className="lg:col-span-2">
              <div className="relative">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#C9A84C]/20 via-[#C9A84C]/5 to-transparent" />
                <div className="relative rounded-2xl bg-[#0f0f0f] p-10 lg:p-12">
                  <p className="font-[family-name:var(--font-space-grotesk)] text-[1.7rem] font-bold leading-snug text-white">
                    Tu aduci mașina.
                  </p>
                  <p className="font-[family-name:var(--font-space-grotesk)] text-[1.7rem] font-bold leading-snug text-[#C9A84C]">
                    Noi rezolvăm restul.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center justify-between rounded-lg bg-white/[0.03] px-4 py-3">
                      <span className="text-sm text-white/50">Timp mediu constatare</span>
                      <span className="font-[family-name:var(--font-space-grotesk)] font-semibold text-white">24h</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-white/[0.03] px-4 py-3">
                      <span className="text-sm text-white/50">Dosare RCA gestionate</span>
                      <span className="font-[family-name:var(--font-space-grotesk)] font-semibold text-white">2.000+</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-white/[0.03] px-4 py-3">
                      <span className="text-sm text-white/50">Mașină la schimb</span>
                      <span className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#C9A84C]">GRATUIT</span>
                    </div>
                  </div>

                  <p className="mt-8 text-center font-[family-name:var(--font-space-grotesk)] text-[11px] font-medium uppercase tracking-[0.2em] text-white/20">
                    Albatros&rsquo;A &mdash; Centru Daune &amp; Reparații Auto
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SERVICII — Mixed layout, not uniform grid                     */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#080808] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Servicii auto complete
              </h2>
              <Link
                href="/servicii"
                className="group inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
              >
                Vezi toate
                <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </FadeIn>

          {/* Top row — 2 featured services, larger */}
          <div className="mt-10 grid gap-3 lg:grid-cols-2">
            {services.slice(0, 2).map((service, i) => (
              <FadeIn key={service.slug} delay={i * 0.1}>
                <Link href={`/servicii/${service.slug}`} className="group block h-full">
                  <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-300 hover:border-[#C9A84C]/20 hover:bg-white/[0.04]">
                    <div className="flex items-start justify-between">
                      <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-white">
                        {service.name}
                      </h3>
                      <svg className="h-5 w-5 text-white/20 transition-all group-hover:text-[#C9A84C] group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/40 max-w-md">
                      {service.desc}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* Bottom row — 4 compact services */}
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(2).map((service, i) => (
              <FadeIn key={service.slug} delay={0.2 + i * 0.06}>
                <Link href={`/servicii/${service.slug}`} className="group block h-full">
                  <div className="h-full rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:border-[#C9A84C]/20 hover:bg-white/[0.04]">
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-white">
                      {service.name}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-white/35">
                      {service.desc}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* INLINE TESTIMONIAL — Break the grid pattern                   */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] px-6 py-16 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center gap-1 mb-5">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="h-4 w-4 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="font-[family-name:var(--font-space-grotesk)] text-xl leading-relaxed text-white/70 sm:text-2xl">
              &ldquo;Am venit cu o problemă la injectoare diesel și au rezolvat-o în aceeași zi.
              Prețuri corecte și echipă profesionistă.&rdquo;
            </blockquote>
            <p className="mt-5 text-sm text-white/30">
              <span className="text-white/50 font-medium">Andrei M.</span> &middot; VW Passat B8 2.0 TDI
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CUM FUNCȚIONEAZĂ — Connected timeline, not cards               */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#080808] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Cum funcționează
            </h2>
            <p className="mt-3 text-white/40 max-w-lg">
              De la programare până la predare, totul e simplu și transparent.
            </p>
          </FadeIn>

          <div className="mt-14 relative">
            {/* Vertical connector line — desktop only */}
            <div className="hidden lg:block absolute left-[calc(50%-0.5px)] top-0 bottom-0 w-px bg-white/[0.06]" />

            {[
              { n: "1", title: "Programezi online sau suni", desc: "Alege serviciul și o dată convenabilă. Sau sună la 0723 177 032.", side: "left" },
              { n: "2", title: "Diagnoză gratuită", desc: "Evaluăm mașina cu echipament profesional și stabilim problema exact.", side: "right" },
              { n: "3", title: "Aprobi devizul", desc: "Primești estimarea clară înainte de orice reparație. Fără surprize, fără costuri ascunse.", side: "left" },
              { n: "4", title: "Urmărești live", desc: "Tracking în timp real prin Service Tracker. Știi mereu în ce stadiu e mașina ta.", side: "right" },
            ].map((step, i) => (
              <FadeIn key={step.n} delay={i * 0.12}>
                <div className={`relative flex flex-col lg:flex-row items-start gap-4 lg:gap-0 mb-10 lg:mb-16 last:mb-0 ${
                  step.side === "right" ? "lg:flex-row-reverse" : ""
                }`}>
                  {/* Content */}
                  <div className={`lg:w-1/2 ${step.side === "left" ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/40">
                      {step.desc}
                    </p>
                  </div>

                  {/* Center dot — desktop */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 h-8 w-8 items-center justify-center rounded-full border border-white/[0.1] bg-[#080808]">
                    <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold text-[#C9A84C]">{step.n}</span>
                  </div>

                  {/* Mobile number */}
                  <div className="lg:hidden flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-[#080808] order-first">
                    <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold text-[#C9A84C]">{step.n}</span>
                  </div>

                  <div className="lg:w-1/2" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* REVIEWS — Featured + small grid, not 4 identical cards        */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ce spun clienții noștri
            </h2>
          </FadeIn>

          <div className="mt-10 grid gap-3 lg:grid-cols-3">
            {/* Featured review — spans 1 col but is taller */}
            <FadeIn>
              <div className="h-full rounded-2xl border border-[#C9A84C]/10 bg-[#C9A84C]/[0.03] p-8">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="h-4 w-4 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-5 font-[family-name:var(--font-space-grotesk)] text-lg leading-relaxed text-white/70">
                  &ldquo;Tracker-ul live e genial, am urmărit tot procesul de pe telefon.
                  Foarte transparent și modern ca abordare.&rdquo;
                </p>
                <div className="mt-6">
                  <p className="text-sm font-medium text-white">Elena S.</p>
                  <p className="text-xs text-white/30">Ford Focus MK4</p>
                </div>
              </div>
            </FadeIn>

            {/* Other reviews — stacked in remaining 2 cols */}
            <div className="lg:col-span-2 grid gap-3 sm:grid-cols-2">
              {reviews.slice(1, 4).map((review, i) => (
                <FadeIn key={review.name} delay={0.1 + i * 0.08}>
                  <div className="h-full rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <svg
                          key={j}
                          className={`h-3 w-3 ${j < review.rating ? "text-[#C9A84C]" : "text-white/10"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/50">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div className="mt-4 pt-3 border-t border-white/[0.06]">
                      <p className="text-sm font-medium text-white">{review.name}</p>
                      <p className="text-xs text-white/25">{review.car}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* BLOG — Horizontal list, not grid                              */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#080808] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="flex items-end justify-between">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Din blog
              </h2>
              <Link
                href="/blog"
                className="group hidden sm:inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
              >
                Toate articolele
                <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </FadeIn>

          <div className="mt-10 divide-y divide-white/[0.06]">
            {blogArticles.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 0.08}>
                <Link
                  href={`/blog/${article.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-6 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="shrink-0 rounded-md bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-white/40">
                      {article.category}
                    </span>
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-medium text-white/70 group-hover:text-white transition-colors">
                      {article.title}
                    </h3>
                  </div>
                  <svg className="hidden sm:block h-4 w-4 shrink-0 text-white/15 transition-all group-hover:text-[#C9A84C] group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* FINAL CTA — Bold, not another card grid                       */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] px-6 py-20 lg:px-8 lg:py-28">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-tight text-white leading-tight">
              Mașina ta merită un service
              <br className="hidden sm:block" />
              <span className="text-[#C9A84C]"> pe care te poți baza.</span>
            </h2>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/programare">
                <Button
                  size="lg"
                  className="bg-[#C9A84C] px-10 py-6 text-base font-semibold text-black hover:bg-[#d4b155] transition-colors"
                >
                  Programează acum
                </Button>
              </Link>
              <a href="tel:+40723177032">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/15 px-10 py-6 text-base text-white hover:bg-white/5 hover:border-white/25 transition-colors"
                >
                  0723 177 032
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/25">
              <span>Șos. Ploiești-Văleni FN, Blejoi</span>
              <span className="hidden sm:block">&middot;</span>
              <span>Luni – Vineri: 08:30 – 17:30</span>
              <span className="hidden sm:block">&middot;</span>
              <span>0244 410 650</span>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* FLOATING PILL — Centru Daune shortcut                         */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={showPill ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      >
        <a
          href="#centru-daune"
          className="group flex items-center gap-3 rounded-full border border-white/[0.1] bg-[#111111]/90 backdrop-blur-xl px-5 py-3 shadow-2xl shadow-black/50 transition-all duration-300 hover:border-[#C9A84C]/30 hover:bg-[#111111]"
        >
          <span className="flex h-2 w-2 items-center justify-center">
            <span className="absolute h-2 w-2 rounded-full bg-[#C9A84C] animate-ping opacity-40" />
            <span className="relative h-2 w-2 rounded-full bg-[#C9A84C]" />
          </span>
          <span className="text-sm font-medium text-white/80 whitespace-nowrap group-hover:text-white transition-colors">
            Accident? Mașină la schimb gratuit
          </span>
          <svg className="h-3.5 w-3.5 text-white/30 transition-all group-hover:text-[#C9A84C] group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </motion.div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  FADE-IN WRAPPER                                                    */
/* ------------------------------------------------------------------ */

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
