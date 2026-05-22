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
  { name: "Diagnoză auto", slug: "diagnoza-auto", desc: "Echipament profesional. Identificăm problema exact." },
  { name: "Reparații diesel", slug: "reparatii-motoare-diesel", desc: "Injectoare și turbine. Standarde Q-SERVICE." },
  { name: "Tinichigerie & Vopsitorie", slug: "tinichigerie-auto", desc: "Caroserie + cabină vopsitorie dedicată." },
  { name: "Geometrie roți 3D", slug: "geometrie-roti", desc: "Aliniere laser 3D." },
  { name: "Electrică auto", slug: "electrica-auto", desc: "Sisteme electrice complet." },
  { name: "Aer condiționat", slug: "incarcari-aer-conditionat", desc: "R134a și R1234yf." },
];

const reviews = [
  { name: "Gabi Stan", text: "Foarte mulțumit." },
  { name: "Razvan", text: "Un service foarte bun, cu eficiență și calitate ridicate." },
  { name: "Eugen", text: "Un service unde profesionalismul și reparațiile sunt de nota 10.. recomand cu încredere." },
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
      {/* ────────────────────────────────────────────────────────── */}
      {/* HERO                                                      */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex flex-col justify-end bg-[#09090b] overflow-hidden">
        {/* Ambient light — very subtle, top-right */}
        <div className="pointer-events-none absolute -top-[30%] right-[10%] w-[60vw] h-[60vw] rounded-full bg-[#C9A84C]/[0.03] blur-[120px]" />

        <motion.div
          ref={heroRef}
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 mx-auto w-full max-w-[88rem] px-6 pb-16 pt-44 lg:px-12 lg:pb-24"
        >
          <div className="grid lg:grid-cols-2 lg:gap-16 lg:items-end">
            {/* Left — headline */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-[family-name:var(--font-space-grotesk)] text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-white"
              >
                Service
                <br />
                auto <TextRotator />
              </motion.h1>
            </div>

            {/* Right — description + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 lg:mt-0"
            >
              <p className="text-base leading-relaxed text-white/40 max-w-sm lg:text-lg">
                Repari mașina o singură dată, cum trebuie.
                Diagnoză gratuită, piese originale, tracking live.
              </p>
              <div className="mt-8 flex items-center gap-5">
                <Link href="/programare">
                  <Button className="rounded-full bg-white px-7 py-5 text-sm font-semibold text-black hover:bg-white/90 transition-colors">
                    Programează
                  </Button>
                </Link>
                <a href="tel:+40723177032" className="text-sm text-white/30 hover:text-white transition-colors">
                  0723 177 032
                </a>
              </div>
            </motion.div>
          </div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-20 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-white/15"
          >
            {["Q-SERVICE Romania", "Din 1992", "Multimarcă", "5.000+ clienți"].map((t, i) => (
              <span key={t} className="flex items-center gap-2">
                {i > 0 && <span className="h-3 w-px bg-white/10" />}
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* CENTRU DAUNE — Gold card, sales-focused                   */}
      {/* ────────────────────────────────────────────────────────── */}
      <section id="centru-daune" className="relative bg-[#09090b] px-6 lg:px-12 scroll-mt-32">
        <div className="mx-auto max-w-[88rem] py-24 lg:py-32">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#C9A84C] via-[#b8973f] to-[#9a7e30]">
              {/* Subtle grain */}
              <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

              <div className="relative grid gap-10 p-8 lg:grid-cols-5 lg:items-center lg:gap-12 lg:p-14">
                {/* Left — 3 cols */}
                <div className="lg:col-span-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-black/50">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/30 animate-pulse" />
                    Centru Daune Autorizat
                  </span>

                  <h2 className="mt-6 font-[family-name:var(--font-space-grotesk)] text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1] tracking-tight text-black/90">
                    Ai avut un accident?
                  </h2>
                  <p className="mt-4 text-lg text-black/50 max-w-md">
                    Tu aduci mașina. Noi ne ocupăm de dosar, constatare, reparație și comunicarea cu asiguratorul.
                  </p>

                  <div className="mt-8 space-y-0">
                    {[
                      "Deschidere și administrare completă dosar RCA",
                      "Constatare și reparație la standard de fabrică",
                      "Comunicare transparentă pe toată durata lucrării",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 border-b border-black/[0.08] py-3.5 last:border-0">
                        <svg className="h-4 w-4 shrink-0 text-black/30" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-black/60">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link href="/programare">
                      <Button className="rounded-full bg-black px-7 py-5 text-sm font-semibold text-[#C9A84C] hover:bg-black/90 transition-colors">
                        Programează constatare
                      </Button>
                    </Link>
                    <a href="tel:+40723177032" className="text-sm font-medium text-black/40 hover:text-black/70 transition-colors">
                      Sună acum &rarr;
                    </a>
                  </div>
                </div>

                {/* Right — 2 cols: the big promise */}
                <div className="lg:col-span-2 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-black/10 p-5">
                      <p className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-black/80">2.000+</p>
                      <p className="mt-1 text-xs text-black/35">dosare RCA</p>
                    </div>
                    <div className="rounded-2xl bg-black/10 p-5">
                      <p className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-black/80">24h</p>
                      <p className="mt-1 text-xs text-black/35">timp constatare</p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-black p-7 lg:p-8">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-white/30">
                      Inclus în fiecare dosar
                    </p>
                    <p className="mt-4 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white lg:text-3xl">
                      Mașină la schimb
                    </p>
                    <p className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-[#C9A84C] lg:text-3xl">
                      GRATUIT
                    </p>
                    <p className="mt-3 text-sm text-white/25">
                      Pe toată perioada reparației. Zero costuri.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* SERVICII — Bento grid, 2 large + 4 compact                */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="bg-[#09090b] px-6 lg:px-12">
        <div className="mx-auto max-w-[88rem] border-t border-white/[0.04] py-24 lg:py-32">
          <FadeIn>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-12">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-white lg:text-4xl">
                Servicii
              </h2>
              <Link href="/servicii" className="text-sm text-white/20 hover:text-white transition-colors">
                Toate serviciile &rarr;
              </Link>
            </div>
          </FadeIn>

          {/* Row 1 — 2 large cards */}
          <div className="grid gap-3 lg:grid-cols-2">
            {services.slice(0, 2).map((s, i) => (
              <FadeIn key={s.slug} delay={i * 0.08}>
                <Link href={`/servicii/${s.slug}`} className="group block">
                  <div className="rounded-2xl bg-white/[0.02] border border-white/[0.04] p-7 lg:p-9 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.08]">
                    <div className="flex items-start justify-between">
                      <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white/80 group-hover:text-white transition-colors lg:text-2xl">
                        {s.name}
                      </h3>
                      <svg className="h-4 w-4 text-white/10 transition-all duration-500 group-hover:text-white/40 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                    <p className="mt-3 text-sm text-white/25 max-w-sm">{s.desc}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* Row 2 — 4 compact */}
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(2).map((s, i) => (
              <FadeIn key={s.slug} delay={0.16 + i * 0.05}>
                <Link href={`/servicii/${s.slug}`} className="group block">
                  <div className="rounded-xl bg-white/[0.02] border border-white/[0.04] p-5 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.08]">
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-[15px] font-semibold text-white/70 group-hover:text-white transition-colors">
                      {s.name}
                    </h3>
                    <p className="mt-1 text-[13px] text-white/20">{s.desc}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* SOCIAL PROOF — Compact, editorial                         */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="bg-[#09090b] px-6 lg:px-12">
        <div className="mx-auto max-w-[88rem] border-t border-white/[0.04] py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Left — big number + label */}
            <FadeIn className="lg:col-span-2">
              <div className="flex items-baseline gap-4">
                <span className="font-[family-name:var(--font-space-grotesk)] text-7xl font-bold tracking-tight text-white/[0.06] lg:text-8xl">
                  4.9
                </span>
                <div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => (
                      <svg key={s} className="h-3.5 w-3.5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-white/20">Google Reviews</p>
                </div>
              </div>
            </FadeIn>

            {/* Right — reviews */}
            <div className="lg:col-span-3 space-y-6">
              {reviews.map((r, i) => (
                <FadeIn key={r.name} delay={i * 0.08}>
                  <div className="flex gap-4">
                    <div className="mt-1 h-8 w-8 shrink-0 rounded-full bg-white/[0.04] flex items-center justify-center text-xs font-medium text-white/30">
                      {r.name[0]}
                    </div>
                    <div>
                      <p className="text-sm text-white/40 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                      <p className="mt-1.5 text-xs text-white/15">
                        {r.name} &middot; {r.car}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* PROCES — Horizontal, minimal                              */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="bg-[#09090b] px-6 lg:px-12">
        <div className="mx-auto max-w-[88rem] border-t border-white/[0.04] py-20 lg:py-24">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold tracking-tight text-white lg:text-3xl mb-12">
              Cum funcționează
            </h2>
          </FadeIn>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Programezi", d: "Online sau telefonic" },
              { n: "02", t: "Diagnoză gratuită", d: "Echipament profesional" },
              { n: "03", t: "Aprobi devizul", d: "Transparent, fără surprize" },
              { n: "04", t: "Tracking live", d: "Urmărești din telefon" },
            ].map((step, i) => (
              <FadeIn key={step.n} delay={i * 0.06}>
                <div className="relative pl-5 border-l border-white/[0.06]">
                  <span className="font-[family-name:var(--font-space-grotesk)] text-[11px] font-semibold text-[#C9A84C]/40">{step.n}</span>
                  <h3 className="mt-1 font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-white/70">{step.t}</h3>
                  <p className="mt-0.5 text-[13px] text-white/20">{step.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* BLOG                                                      */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="bg-[#09090b] px-6 lg:px-12">
        <div className="mx-auto max-w-[88rem] border-t border-white/[0.04] py-16 lg:py-20">
          <FadeIn>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white/50">Blog</h2>
              <Link href="/blog" className="text-xs text-white/15 hover:text-white transition-colors">
                Toate &rarr;
              </Link>
            </div>
          </FadeIn>
          {blogArticles.map((a, i) => (
            <FadeIn key={a.slug} delay={i * 0.04}>
              <Link
                href={`/blog/${a.slug}`}
                className="group flex items-center justify-between border-t border-white/[0.03] py-4"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[11px] text-white/15 w-20 shrink-0">{a.category}</span>
                  <span className="text-sm text-white/35 group-hover:text-white/70 transition-colors">{a.title}</span>
                </div>
                <svg className="hidden sm:block h-3.5 w-3.5 text-white/8 group-hover:text-white/30 transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* CTA                                                       */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="bg-[#09090b] px-6 lg:px-12">
        <div className="mx-auto max-w-[88rem] border-t border-white/[0.04] py-24 lg:py-36">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2rem,5vw,4rem)] font-bold leading-[1] tracking-[-0.03em] text-white max-w-2xl">
              Mașina ta merită un service pe care te poți baza.
            </h2>
            <div className="mt-10 flex items-center gap-5">
              <Link href="/programare">
                <Button className="rounded-full bg-white px-8 py-5 text-sm font-semibold text-black hover:bg-white/90 transition-colors">
                  Programează acum
                </Button>
              </Link>
              <a href="tel:+40723177032" className="text-sm text-white/25 hover:text-white transition-colors">
                0723 177 032
              </a>
            </div>
            <p className="mt-14 text-xs text-white/10">
              Șos. Ploiești-Văleni FN, Blejoi, Prahova &middot; Luni-Vineri 08:30-17:30 &middot; 0244 410 650
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* FLOATING PILL                                             */}
      {/* ────────────────────────────────────────────────────────── */}
      <motion.div
        initial={false}
        animate={showPill
          ? { opacity: 1, y: 0, pointerEvents: "auto" as const }
          : { opacity: 0, y: 12, pointerEvents: "none" as const }
        }
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      >
        <a
          href="#centru-daune"
          className="group flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-[#141414]/95 backdrop-blur-xl px-5 py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-white/[0.15] hover:bg-[#1a1a1a]"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 rounded-full bg-[#C9A84C] animate-ping opacity-40" />
            <span className="relative rounded-full h-1.5 w-1.5 bg-[#C9A84C]" />
          </span>
          <span className="text-[13px] font-medium text-white/60 whitespace-nowrap group-hover:text-white/90 transition-colors">
            Centru Daune &mdash; mașină la schimb gratuit
          </span>
        </a>
      </motion.div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  FADE-IN                                                            */
/* ------------------------------------------------------------------ */

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
