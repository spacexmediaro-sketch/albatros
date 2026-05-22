"use client";

import Link from "next/link";
import { useRef } from "react";
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
    desc: "Diagnoză computerizată pentru toate mărcile cu echipament profesional de ultimă generație.",
    tag: "POPULAR",
  },
  {
    name: "Reparații diesel",
    slug: "reparatii-motoare-diesel",
    desc: "Specialiști motoare diesel și injectoare. Diagnoză și reparații la standarde Q-SERVICE.",
    tag: "SPECIALITATE",
  },
  {
    name: "Tinichigerie",
    slug: "tinichigerie-auto",
    desc: "Reparații caroserie și îndreptare tablă. Rezultate impecabile cu tehnologie modernă.",
    tag: "PREMIUM",
  },
  {
    name: "Vopsitorie",
    slug: "vopsitorie-auto",
    desc: "Vopsitorie profesională în cabină dedicată. Culori exacte, finisaj de fabrică.",
    tag: "CABINĂ DEDICATĂ",
  },
  {
    name: "Geometrie roți",
    slug: "geometrie-roti",
    desc: "Aliniere precisă cu echipament 3D. Siguranță și uzură uniformă a anvelopelor.",
    tag: "3D LASER",
  },
  {
    name: "Aer condiționat",
    slug: "incarcari-aer-conditionat",
    desc: "Încărcare și verificare sistem AC. Freon R134a și R1234yf disponibil.",
    tag: "AC AUTO",
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
    excerpt: "Lista completă de verificări și întreținere pentru sezonul rece: anvelope, baterie, antigel, vizibilitate.",
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

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* HERO — Editorial, bold, no noise                              */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex items-center bg-[#0a0a0a] overflow-hidden">
        {/* Single subtle gradient — not multiple orbs */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(201,168,76,0.08),transparent)]" />

        <motion.div
          ref={heroRef}
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8"
        >
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-[family-name:var(--font-space-grotesk)] text-xs font-medium uppercase tracking-[0.3em] text-[#C9A84C]"
          >
            Din 1992 &middot; Blejoi-Ploiești
          </motion.p>

          {/* Main headline */}
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

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/50"
          >
            Diagnoză computerizată, reparații motoare diesel, tinichigerie și
            vopsitorie profesională. Urmărire live a fiecărei reparații.
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
            <Link href="#centru-daune">
              <Button
                size="lg"
                variant="outline"
                className="border-white/15 px-8 py-6 text-base text-white hover:bg-white/5 hover:border-white/25 transition-colors"
              >
                Centru de Daune
              </Button>
            </Link>
          </motion.div>

          {/* Stats — minimal, horizontal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-16 flex items-center gap-12 text-white/30"
          >
            <div>
              <span className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white">20+</span>
              <span className="ml-2 text-sm">ani</span>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <div>
              <span className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white">5000+</span>
              <span className="ml-2 text-sm">clienți</span>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <div>
              <span className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white">15</span>
              <span className="ml-2 text-sm">mărci auto</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* TRUST MARQUEE                                                  */}
      {/* ═══════════════════════════════════════════════════════════════ */}
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
      {/* CENTRU DAUNE                                                   */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="centru-daune" className="bg-[#0a0a0a] px-6 py-24 lg:px-8 scroll-mt-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left — Content */}
            <FadeIn>
              <p className="font-[family-name:var(--font-space-grotesk)] text-xs font-medium uppercase tracking-[0.3em] text-[#C9A84C]">
                Centru Daune
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Ai avut un accident?
              </h2>
              <p className="mt-4 text-xl text-white/60 font-medium">
                Noi ne ocupăm de tot.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Deschidere și administrare completă dosar RCA",
                  "Constatare și reparație la standard corect",
                  "Comunicare transparentă pe toată durata lucrării",
                  "Mașină la schimb GRATUIT pe perioada reparației",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/70 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

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
                    Sună acum
                  </Button>
                </a>
              </div>
            </FadeIn>

            {/* Right — Statement card */}
            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-10 text-center">
                <p className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold leading-relaxed text-white/80">
                  Tu aduci mașina.
                  <br />
                  <span className="text-[#C9A84C]">Noi rezolvăm restul.</span>
                </p>
                <div className="mt-6 h-px w-16 mx-auto bg-[#C9A84C]/30" />
                <p className="mt-6 font-[family-name:var(--font-space-grotesk)] text-sm font-medium uppercase tracking-[0.2em] text-white/30">
                  Albatros&rsquo;A &mdash; Centru Daune &amp; Reparații Auto
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SERVICII — Bento grid                                         */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section header — left-aligned, editorial */}
          <FadeIn>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-[family-name:var(--font-space-grotesk)] text-xs font-medium uppercase tracking-[0.3em] text-[#C9A84C]">
                  Servicii
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Ce facem
                </h2>
              </div>
              <Link
                href="/servicii"
                className="group inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
              >
                Toate serviciile
                <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </FadeIn>

          {/* Bento grid — first two large, rest smaller */}
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <FadeIn key={service.slug} delay={i * 0.08}>
                <Link href={`/servicii/${service.slug}`} className="group block h-full">
                  <div
                    className={`relative h-full overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] ${
                      i < 2 ? "sm:p-8 lg:row-span-1" : ""
                    }`}
                  >
                    <span className="inline-block rounded-md bg-white/[0.06] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/40">
                      {service.tag}
                    </span>
                    <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/40">
                      {service.desc}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm text-white/25 transition-colors group-hover:text-[#C9A84C]">
                      Detalii
                      <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CUM FUNCȚIONEAZĂ — Horizontal steps                           */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#080808] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="font-[family-name:var(--font-space-grotesk)] text-xs font-medium uppercase tracking-[0.3em] text-[#C9A84C]">
              Proces
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-white sm:text-5xl">
              4 pași simpli
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", title: "Programezi online", desc: "Alege serviciul și o dată convenabilă din calendarul nostru." },
              { n: "02", title: "Diagnoză gratuită", desc: "Evaluăm mașina și stabilim problema exactă cu echipament profesional." },
              { n: "03", title: "Aprobi devizul", desc: "Primești estimarea înainte de orice reparație. Fără surprize." },
              { n: "04", title: "Tracking live", desc: "Urmărești progresul mașinii tale în timp real prin Service Tracker." },
            ].map((step, i) => (
              <FadeIn key={step.n} delay={i * 0.1}>
                <div className="relative bg-[#080808] p-8 h-full">
                  <span className="font-[family-name:var(--font-space-grotesk)] text-5xl font-bold text-white/[0.04]">
                    {step.n}
                  </span>
                  <h3 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/40">
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* REVIEWS — Horizontal cards                                    */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#080808] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="font-[family-name:var(--font-space-grotesk)] text-xs font-medium uppercase tracking-[0.3em] text-[#C9A84C]">
              Recenzii
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ce spun clienții
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((review, i) => (
              <FadeIn key={review.name} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg
                        key={j}
                        className={`h-3.5 w-3.5 ${j < review.rating ? "text-[#C9A84C]" : "text-white/10"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-white/50">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  <div className="mt-5 pt-4 border-t border-white/[0.06]">
                    <p className="text-sm font-medium text-white">{review.name}</p>
                    <p className="text-xs text-white/25">{review.car}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* BLOG                                                          */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-[family-name:var(--font-space-grotesk)] text-xs font-medium uppercase tracking-[0.3em] text-[#C9A84C]">
                  Blog
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Articole recente
                </h2>
              </div>
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
              >
                Toate articolele
                <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {blogArticles.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 0.08}>
                <Link href={`/blog/${article.slug}`} className="group block h-full">
                  <div className="h-full rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]">
                    <span className="inline-block rounded-md bg-white/[0.06] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/40">
                      {article.category}
                    </span>
                    <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/40">
                      {article.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm text-white/25 transition-colors group-hover:text-[#C9A84C]">
                      Citește
                      <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CONTACT                                                       */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#080808] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <p className="font-[family-name:var(--font-space-grotesk)] text-xs font-medium uppercase tracking-[0.3em] text-[#C9A84C]">
              Contact
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Unde ne găsești
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/40">
              Șoseaua Ploiești-Văleni FN, Blejoi, Prahova
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              <a
                href="tel:+40723177032"
                className="group flex flex-col items-center rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]"
              >
                <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white group-hover:text-[#C9A84C] transition-colors">
                  0723 177 032
                </span>
                <span className="mt-1 text-xs text-white/25">Mobil</span>
              </a>

              <a
                href="tel:+40244410650"
                className="group flex flex-col items-center rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]"
              >
                <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white group-hover:text-[#C9A84C] transition-colors">
                  0244 410 650
                </span>
                <span className="mt-1 text-xs text-white/25">Fix</span>
              </a>

              <div className="flex flex-col items-center rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
                <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white">
                  Luni – Vineri
                </span>
                <span className="mt-1 text-xs text-white/25">08:30 – 17:30</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="mt-10">
              <Link href="/programare">
                <Button
                  size="lg"
                  className="bg-[#C9A84C] px-10 py-6 text-base font-semibold text-black hover:bg-[#d4b155] transition-colors"
                >
                  Programează o vizită
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
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
