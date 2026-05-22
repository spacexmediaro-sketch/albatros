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
  { name: "Diagnoză auto", slug: "diagnoza-auto", desc: "Echipament profesional de ultimă generație. Identificăm problema exact." },
  { name: "Reparații diesel", slug: "reparatii-motoare-diesel", desc: "Specialiști injectoare și turbine diesel. Standarde Q-SERVICE." },
  { name: "Tinichigerie & Vopsitorie", slug: "tinichigerie-auto", desc: "Caroserie, îndreptare tablă, vopsitorie în cabină dedicată." },
  { name: "Geometrie roți 3D", slug: "geometrie-roti", desc: "Aliniere laser 3D. Siguranță maximă." },
  { name: "Electrică auto", slug: "electrica-auto", desc: "Sisteme electrice, senzori, alternatoare." },
  { name: "Aer condiționat", slug: "incarcari-aer-conditionat", desc: "Încărcare AC. R134a și R1234yf." },
];

const reviews = [
  { name: "Andrei M.", text: "Au rezolvat problema la injectoare diesel în aceeași zi. Prețuri corecte.", car: "VW Passat B8" },
  { name: "Maria P.", text: "Geometria 3D a fost impecabilă. Mașina merge drept ca pe șine.", car: "BMW Seria 3" },
  { name: "Cristian D.", text: "Vopsitorie excelentă, nu se vede diferența față de original.", car: "Skoda Octavia" },
  { name: "Elena S.", text: "Tracker-ul live e genial, am urmărit tot procesul de pe telefon.", car: "Ford Focus MK4" },
];

const blogArticles = [
  { slug: "cand-schimbi-uleiul-motor", title: "Când trebuie să schimbi uleiul de motor?", category: "Întreținere" },
  { slug: "semne-probleme-turbo", title: "5 semne că turbina ta are probleme", category: "Diagnostic" },
  { slug: "pregatire-masina-iarna", title: "Cum să-ți pregătești mașina pentru iarnă", category: "Sezonier" },
];

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.12], [0, -80]);

  const [showPill, setShowPill] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowPill(window.scrollY > window.innerHeight * 0.5);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════ */}
      {/* HERO — Confident, minimal, big type                       */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex items-end bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_60%_-10%,rgba(201,168,76,0.07),transparent)]" />

        <motion.div
          ref={heroRef}
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 mx-auto w-full max-w-[90rem] px-6 pb-20 pt-40 lg:px-10 lg:pb-28"
        >
          {/* Oversized headline — designer move: let it breathe */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-[family-name:var(--font-space-grotesk)] text-[clamp(3.2rem,9vw,7rem)] font-bold leading-[0.95] tracking-[-0.03em] text-white"
          >
            Service auto
            <br />
            <TextRotator />
          </motion.h1>

          {/* Bottom bar — split between info and CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
          >
            <p className="max-w-md text-base leading-relaxed text-white/40 lg:text-lg">
              Repari mașina o singură dată, cum trebuie.
              <br className="hidden sm:block" />
              Diagnoză gratuită. Piese originale. Tracking live.
            </p>

            <div className="flex items-center gap-4">
              <Link href="/programare">
                <Button className="bg-[#C9A84C] px-7 py-5 text-sm font-semibold text-black hover:bg-[#d4b155] transition-colors">
                  Programează
                </Button>
              </Link>
              <a href="tel:+40723177032" className="text-sm font-medium text-white/40 transition-colors hover:text-white">
                0723 177 032
              </a>
            </div>
          </motion.div>

          {/* Subtle trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-12 flex items-center gap-6 text-[13px] text-white/20"
          >
            <span>Q-SERVICE Romania</span>
            <span className="h-3 w-px bg-white/10" />
            <span>Din 1992</span>
            <span className="h-3 w-px bg-white/10" />
            <span>5.000+ clienți</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* CENTRU DAUNE BILLBOARD — Full-bleed, impossible to miss   */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section id="centru-daune" className="relative scroll-mt-32 overflow-hidden">
        {/* Gold gradient background — only section with color */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C] via-[#b8973f] to-[#a08535]" />
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.08] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

        <div className="relative mx-auto max-w-[90rem] px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left — headline */}
            <FadeIn>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/40">
                Centru Daune Autorizat
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1] tracking-tight text-black">
                Ai avut un
                <br />
                accident?
              </h2>
              <p className="mt-5 text-lg text-black/60 max-w-md">
                Tu aduci mașina. Noi ne ocupăm de dosar, constatare, reparație și comunicarea cu asiguratorul.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/programare">
                  <Button className="bg-black px-7 py-5 text-sm font-semibold text-[#C9A84C] hover:bg-black/90 transition-colors">
                    Programează constatare
                  </Button>
                </Link>
                <a href="tel:+40723177032">
                  <Button variant="outline" className="border-black/20 px-7 py-5 text-sm font-semibold text-black hover:bg-black/10 transition-colors">
                    Sună acum
                  </Button>
                </a>
              </div>
            </FadeIn>

            {/* Right — the big promise */}
            <FadeIn delay={0.15}>
              <div className="rounded-3xl bg-black/10 backdrop-blur-sm p-8 lg:p-10">
                <div className="space-y-5">
                  {[
                    "Deschidere completă dosar RCA",
                    "Constatare și reparație la standard de fabrică",
                    "Comunicare transparentă pe toată durata",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black/20">
                        <svg className="h-3 w-3 text-black" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[15px] text-black/70">{item}</span>
                    </div>
                  ))}
                </div>

                {/* THE BIG ONE */}
                <div className="mt-8 rounded-2xl bg-black p-6 lg:p-8">
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/40">Inclus în fiecare dosar</p>
                  <p className="mt-3 font-[family-name:var(--font-space-grotesk)] text-[clamp(1.5rem,3.5vw,2.2rem)] font-bold leading-tight text-white">
                    Mașină la schimb
                  </p>
                  <p className="font-[family-name:var(--font-space-grotesk)] text-[clamp(1.5rem,3.5vw,2.2rem)] font-bold leading-tight text-[#C9A84C]">
                    GRATUIT
                  </p>
                  <p className="mt-3 text-sm text-white/30">
                    Pe toată perioada reparației. Fără costuri ascunse.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* STATS STRIP — Big numbers, not cards                      */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] px-6 lg:px-10">
        <div className="mx-auto max-w-[90rem] border-b border-white/[0.06] py-16 lg:py-20">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { number: "20+", label: "ani pe piață" },
              { number: "5.000+", label: "clienți mulțumiți" },
              { number: "2.000+", label: "dosare RCA" },
              { number: "15", label: "mărci auto" },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.08}>
                <div>
                  <p className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-white">
                    {stat.number}
                  </p>
                  <p className="mt-1 text-sm text-white/30">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SERVICII — Numbered list, not card grid                   */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[90rem]">
          <FadeIn>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-tight text-white">
                Servicii
              </h2>
              <Link
                href="/servicii"
                className="group inline-flex items-center gap-2 text-sm text-white/30 transition-colors hover:text-white"
              >
                Toate serviciile &rarr;
              </Link>
            </div>
          </FadeIn>

          <div className="mt-12">
            {services.map((service, i) => (
              <FadeIn key={service.slug} delay={i * 0.05}>
                <Link
                  href={`/servicii/${service.slug}`}
                  className="group flex items-baseline gap-6 border-t border-white/[0.06] py-6 lg:py-8 transition-colors first:border-t-0"
                >
                  <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium text-white/15 tabular-nums w-8 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-8">
                      <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white/70 transition-colors group-hover:text-white lg:text-2xl">
                        {service.name}
                      </h3>
                      <p className="text-sm text-white/25 shrink-0 max-w-xs text-right hidden lg:block">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                  <svg className="h-4 w-4 shrink-0 text-white/10 transition-all group-hover:text-[#C9A84C] group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* TESTIMONIAL — Single big quote, editorial                 */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#080808] px-6 lg:px-10">
        <div className="mx-auto max-w-[90rem] border-t border-white/[0.06] py-20 lg:py-28">
          <FadeIn>
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              {/* Left — big quote mark + attribution */}
              <div className="lg:col-span-2">
                <span className="font-[family-name:var(--font-space-grotesk)] text-8xl font-bold leading-none text-[#C9A84C]/20">&ldquo;</span>
                <div className="mt-4">
                  <div className="flex gap-0.5 mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="h-3.5 w-3.5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-white/60">Elena S.</p>
                  <p className="text-xs text-white/25">Ford Focus MK4</p>
                </div>
              </div>

              {/* Right — the quote */}
              <div className="lg:col-span-3">
                <blockquote className="font-[family-name:var(--font-space-grotesk)] text-[clamp(1.3rem,3vw,2rem)] font-medium leading-relaxed text-white/60">
                  Tracker-ul live e genial, am urmărit tot procesul de pe telefon.
                  Foarte transparent și modern ca abordare. Recomand cu încredere.
                </blockquote>
              </div>
            </div>
          </FadeIn>

          {/* More reviews — compact strip */}
          <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-white/[0.06] sm:grid-cols-3">
            {reviews.slice(0, 3).map((review, i) => (
              <FadeIn key={review.name} delay={i * 0.08}>
                <div className="bg-[#080808] p-6">
                  <p className="text-sm leading-relaxed text-white/40">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p className="mt-4 text-xs text-white/20">
                    <span className="text-white/40 font-medium">{review.name}</span> &middot; {review.car}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* PROCESS — Horizontal, inline, compact                     */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] px-6 lg:px-10">
        <div className="mx-auto max-w-[90rem] border-t border-white/[0.06] py-16 lg:py-20">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/20 mb-10">Cum funcționează</p>
          </FadeIn>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Programezi", d: "Online sau la telefon" },
              { n: "02", t: "Diagnoză gratuită", d: "Echipament profesional" },
              { n: "03", t: "Aprobi devizul", d: "Fără surprize" },
              { n: "04", t: "Tracking live", d: "Urmărești din telefon" },
            ].map((step, i) => (
              <FadeIn key={step.n} delay={i * 0.08}>
                <div>
                  <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-medium text-[#C9A84C]">{step.n}</span>
                  <h3 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-white">{step.t}</h3>
                  <p className="mt-1 text-sm text-white/30">{step.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* BLOG — Minimal list                                       */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] px-6 lg:px-10">
        <div className="mx-auto max-w-[90rem] border-t border-white/[0.06] py-16 lg:py-20">
          <FadeIn>
            <div className="flex items-center justify-between mb-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/20">Blog</p>
              <Link href="/blog" className="text-xs text-white/20 transition-colors hover:text-white">
                Toate &rarr;
              </Link>
            </div>
          </FadeIn>
          {blogArticles.map((article, i) => (
            <FadeIn key={article.slug} delay={i * 0.05}>
              <Link
                href={`/blog/${article.slug}`}
                className="group flex items-center justify-between border-t border-white/[0.04] py-4 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-medium text-white/20 w-20 shrink-0">{article.category}</span>
                  <span className="text-sm text-white/50 group-hover:text-white transition-colors">{article.title}</span>
                </div>
                <svg className="hidden sm:block h-3.5 w-3.5 shrink-0 text-white/10 group-hover:text-[#C9A84C] transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* FINAL CTA — Bold closing statement                        */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] px-6 lg:px-10">
        <div className="mx-auto max-w-[90rem] border-t border-white/[0.06] py-24 lg:py-32">
          <FadeIn>
            <div className="max-w-3xl">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2rem,5vw,3.8rem)] font-bold leading-[1.05] tracking-tight text-white">
                Mașina ta merită
                <br />
                un service <span className="text-[#C9A84C]">pe care
                <br className="hidden sm:block" /> te poți baza.</span>
              </h2>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/programare">
                  <Button className="bg-[#C9A84C] px-8 py-5 text-sm font-semibold text-black hover:bg-[#d4b155] transition-colors">
                    Programează acum
                  </Button>
                </Link>
                <a href="tel:+40723177032" className="text-sm font-medium text-white/40 transition-colors hover:text-white">
                  0723 177 032
                </a>
              </div>

              <p className="mt-10 text-sm text-white/15">
                Șos. Ploiești-Văleni FN, Blejoi, Prahova &middot; L-V 08:30–17:30 &middot; 0244 410 650
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* FLOATING PILL — Centru Daune                               */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <motion.div
        initial={false}
        animate={showPill ? { opacity: 1, y: 0 } : { opacity: 0, y: 16, pointerEvents: "none" as const }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      >
        <a
          href="#centru-daune"
          className="group flex items-center gap-2.5 rounded-full bg-[#C9A84C] px-5 py-2.5 shadow-[0_8px_30px_rgba(201,168,76,0.3)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(201,168,76,0.5)] hover:scale-105"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-black/30 animate-ping" />
            <span className="relative rounded-full h-2 w-2 bg-black/40" />
          </span>
          <span className="text-sm font-semibold text-black whitespace-nowrap">
            Accident? Mașină la schimb gratuit
          </span>
          <svg className="h-3.5 w-3.5 text-black/40 transition-transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
