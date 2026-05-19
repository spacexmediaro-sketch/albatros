"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/public/scroll-reveal";
import { HeroParticles } from "@/components/public/hero-particles";

const services = [
  { icon: "\uD83D\uDD0D", name: "Diagnoz\u0103 auto", slug: "diagnoza-auto", desc: "Diagnoz\u0103 computerizat\u0103 pentru toate m\u0103rcile" },
  { icon: "\u2699\uFE0F", name: "Repara\u021Bii diesel", slug: "reparatii-motoare-diesel", desc: "Speciali\u0219ti motoare diesel \u0219i injectoare" },
  { icon: "\uD83D\uDD27", name: "Tinichigerie", slug: "tinichigerie-auto", desc: "Repara\u021Bii caroserie \u0219i \u00EEndreptare tabl\u0103" },
  { icon: "\uD83C\uDFA8", name: "Vopsitorie", slug: "vopsitorie-auto", desc: "Vopsitorie profesional\u0103 \u00EEn cabin\u0103 dedicat\u0103" },
  { icon: "\uD83D\uDCD0", name: "Geometrie ro\u021Bi", slug: "geometrie-roti", desc: "Aliniere precis\u0103 cu echipament 3D" },
  { icon: "\u2744\uFE0F", name: "Aer condi\u021Bionat", slug: "incarcari-aer-conditionat", desc: "\u00CEnc\u0103rcare \u0219i verificare sistem AC" },
];

const steps = [
  { step: "1", title: "Programezi online", desc: "Alege serviciul \u0219i o dat\u0103 convenabil\u0103" },
  { step: "2", title: "Diagnoz\u0103 gratuit\u0103", desc: "Evalu\u0103m ma\u0219ina \u0219i stabilim problema" },
  { step: "3", title: "Aprobi devizul", desc: "Prime\u0219ti estimarea \u00EEnainte de orice repara\u021Bie" },
  { step: "4", title: "Tracking live", desc: "Urm\u0103re\u0219ti progresul ma\u0219inii tale \u00EEn timp real" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — Full viewport, cinematic */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A2540]">
        {/* Animated particles background */}
        <HeroParticles />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        {/* Gradient orbs */}
        <div className="absolute top-20 right-10 h-96 w-96 rounded-full bg-[#E63946]/8 blur-[120px]" />
        <div className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-[#3B82F6]/8 blur-[100px]" />
        {/* Animated gradient line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E63946]/50 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              {/* Animated badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E63946] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E63946]" />
                </span>
                <span className="text-sm text-gray-300">{"Membru re\u021Bea Q-SERVICE Romania"}</span>
              </div>

              <h1 className="mt-6 font-[family-name:var(--font-dm-serif)] text-5xl leading-[1.1] text-white sm:text-6xl lg:text-7xl">
                Service auto
                <br />
                <span className="gradient-text">{"de elit\u0103"}</span>
                <br />
                <span className="text-white/60">{"in Ploie\u0219ti"}</span>
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-400">
                {"Diagnoz\u0103 computerizat\u0103 de precizie, repara\u021Bii diesel de specialitate, tinichigerie \u0219i vopsitorie profesional\u0103. Urm\u0103rire live a repara\u021Biei prin Service Tracker."}
              </p>

              {/* CTA buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/programare">
                  <Button size="lg" className="btn-shine glow-pulse bg-[#E63946] px-8 py-6 text-base font-semibold text-white hover:bg-[#d32f3c]">
                    {"Programeaz\u0103 acum"}
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </Button>
                </Link>
                <Link href="/estimator">
                  <Button size="lg" variant="outline" className="border-white/20 px-8 py-6 text-base text-white hover:bg-white/5 hover:border-[#E63946]/50">
                    Centru de Daune AI
                  </Button>
                </Link>
              </div>

              {/* Stats row */}
              <div className="mt-12 flex gap-8 border-t border-white/10 pt-8">
                <div>
                  <p className="text-3xl font-bold text-white">20+</p>
                  <p className="text-sm text-gray-500">{"ani experien\u021B\u0103"}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">5000+</p>
                  <p className="text-sm text-gray-500">{"clien\u021Bi mul\u021Bumi\u021Bi"}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">15</p>
                  <p className="text-sm text-gray-500">{"m\u0103rci auto"}</p>
                </div>
              </div>
            </div>

            {/* Right side: Feature cards stack */}
            <div className="hidden lg:block">
              <div className="relative space-y-4">
                {/* Card 1: Service Tracker preview */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-500 hover:border-[#E63946]/30 hover:bg-white/[0.08]">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E63946]/20 text-xl">{"\uD83D\uDCE1"}</div>
                    <div>
                      <h3 className="font-semibold text-white">Service Tracker Live</h3>
                      <p className="text-sm text-gray-400">{"Urm\u0103re\u0219te repara\u021Bia \u00EEn timp real"}</p>
                    </div>
                    <div className="ml-auto rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">LIVE</div>
                  </div>
                </div>
                {/* Card 2: AI Estimator preview */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-500 hover:border-[#3B82F6]/30 hover:bg-white/[0.08]">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3B82F6]/20 text-xl">{"\uD83E\uDD16"}</div>
                    <div>
                      <h3 className="font-semibold text-white">Estimator AI Daune</h3>
                      <p className="text-sm text-gray-400">Estimare cost din fotografii</p>
                    </div>
                    <div className="ml-auto rounded-full bg-[#3B82F6]/20 px-3 py-1 text-xs font-medium text-[#3B82F6]">AI</div>
                  </div>
                </div>
                {/* Card 3: Virtual Garage preview */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl">{"\uD83D\uDE97"}</div>
                    <div>
                      <h3 className="font-semibold text-white">Garaj Virtual</h3>
                      <p className="text-sm text-gray-400">Istoric + remindere ITP/RCA</p>
                    </div>
                    <div className="ml-auto rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-300">BETA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-8 w-5 rounded-full border border-white/20 flex justify-center pt-1.5">
            <div className="h-2 w-1 rounded-full bg-white/40 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Divider: dark to light (dramatic) */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#E63946]/40 to-transparent" />

      {/* Servicii */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[#0A2540]">
            Serviciile noastre
          </h2>
          <p className="mt-2 text-gray-600">
            {"Acoperim toate nevoile ma\u0219inii tale, de la diagnoz\u0103 la vopsitorie."}
          </p>
          <ScrollReveal delay={0.2}>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link key={service.slug} href={`/servicii/${service.slug}`}>
                  <Card className="h-full card-hover transition-all">
                    <CardContent className="p-6">
                      <span className="text-3xl">{service.icon}</span>
                      <h3 className="mt-3 text-lg font-semibold text-[#0A2540]">
                        {service.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">{service.desc}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E63946]/20 to-transparent" />

      {/* Cum functioneaza — Connected timeline */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal delay={0.1}>
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-[family-name:var(--font-dm-serif)] text-3xl text-[#0A2540]">
              {"Cum func\u021Bioneaz\u0103"}
            </h2>
            <p className="mt-2 text-center text-gray-600">
              {"Patru pa\u0219i simpli de la programare la livrare."}
            </p>
            <div className="relative mt-12">
              {/* Connecting dashed line (desktop only) */}
              <div className="absolute top-8 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] hidden h-px border-t-2 border-dashed border-[#E63946]/30 lg:block" />
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((item) => (
                  <div key={item.step} className="relative text-center">
                    {/* Glass card */}
                    <div className="rounded-2xl border border-gray-200/60 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
                      {/* Large numbered circle */}
                      <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#E63946] to-[#d32f3c] shadow-lg shadow-[#E63946]/20">
                        <span className="text-2xl font-bold text-white">{item.step}</span>
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-[#0A2540]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Divider: light to dark (dramatic) */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#E63946]/40 to-transparent" />

      {/* Centru de Daune — Hero Feature */}
      <section className="relative overflow-hidden bg-[#0A2540] px-4 py-20 sm:px-6 lg:px-8">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        {/* Gradient accent blob */}
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#E63946]/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#3B82F6]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: Text content */}
            <div>
              <span className="inline-block rounded-full bg-[#E63946]/20 px-4 py-1.5 text-sm font-semibold text-[#E63946]">
                {"Nou \u2014 Tehnologie AI"}
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-dm-serif)] text-4xl text-white sm:text-5xl">
                Centru de Daune
                <br />
                <span className="gradient-text">Inteligent</span>
              </h2>
              <p className="mt-4 max-w-lg text-lg text-gray-300">
                {"\u00CEncarc\u0103 fotografii cu avariile ma\u0219inii tale \u0219i prime\u0219ti o estimare instantanee a costurilor. Inteligen\u021Ba artificial\u0103 identific\u0103 daunele, opera\u021Biile necesare \u0219i intervalul de pre\u021B \u2014 totul \u00EEn mai pu\u021Bin de 60 de secunde."}
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Analiz\u0103 AI din fotografii \u00EEn sub 60 secunde",
                  "Identificare automat\u0103 zone avariate + severitate",
                  "Estimare cost manoper\u0103 + piese orientativ\u0103",
                  "Programare inspec\u021Bie gratuit\u0103 direct din rezultat",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E63946]/20 text-xs text-[#E63946]">{"\u2713"}</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/estimator">
                  <Button size="lg" className="btn-shine glow-pulse bg-[#E63946] text-white hover:bg-[#d32f3c] px-8">
                    {"Estimeaz\u0103 Gratuit"}
                  </Button>
                </Link>
                <Link href="/servicii/tinichigerie-auto">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Despre tinichigerie
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Visual mockup of the estimator */}
            <div className="relative">
              {/* Phone/browser mockup frame */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                {/* Fake browser bar */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/60" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <div className="h-3 w-3 rounded-full bg-green-500/60" />
                  <div className="ml-3 h-6 flex-1 rounded-md bg-white/10 px-3 flex items-center">
                    <span className="text-xs text-gray-400">albatrosa.ro/estimator</span>
                  </div>
                </div>
                {/* Content mockup */}
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="h-20 w-20 rounded-lg bg-gradient-to-br from-[#E63946]/30 to-[#3B82F6]/30 flex items-center justify-center text-2xl">{"\uD83D\uDCF8"}</div>
                    <div className="h-20 w-20 rounded-lg bg-gradient-to-br from-[#E63946]/20 to-[#3B82F6]/20 flex items-center justify-center text-2xl">{"\uD83D\uDCF8"}</div>
                    <div className="h-20 w-20 rounded-lg border-2 border-dashed border-white/20 flex items-center justify-center text-white/40 text-xl">+</div>
                  </div>
                  <div className="rounded-lg bg-white/5 p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{"Bar\u0103 fa\u021B\u0103"}</span>
                      <span className="rounded-full bg-orange-500/20 px-2 text-xs text-orange-400">Medie</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{"Arip\u0103 st\u00E2nga"}</span>
                      <span className="rounded-full bg-yellow-500/20 px-2 text-xs text-yellow-400">{"U\u0219oar\u0103"}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{"Far st\u00E2nga"}</span>
                      <span className="rounded-full bg-red-500/20 px-2 text-xs text-red-400">{"Sever\u0103"}</span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-gradient-to-r from-[#E63946]/10 to-[#3B82F6]/10 p-4 text-center">
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Estimare cost</p>
                    <p className="mt-1 text-2xl font-bold text-white">{"2.800 \u2014 4.200 LEI"}</p>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 rounded-full bg-[#E63946] px-3 py-1.5 text-xs font-bold text-white shadow-lg animate-float">
                AI Powered
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider: dark to light (dramatic) */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#E63946]/40 to-transparent" />

      {/* Contact preview */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[#0A2540]">
              {"Unde ne g\u0103se\u0219ti"}
            </h2>
            <p className="mt-2 text-gray-600">
              {"\u0218oseaua Ploie\u0219ti-V\u0103leni FN, Blejoi, Prahova (DN1B \u2014 Centura de Nord Ploie\u0219ti)"}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
              <a
                href="tel:+40723177032"
                className="text-lg font-semibold text-[#E63946] hover:underline"
              >
                0723 177 032
              </a>
              <a
                href="tel:+40244410650"
                className="text-lg font-semibold text-[#0A2540] hover:underline"
              >
                0244 410 650
              </a>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              {"Luni \u2013 Vineri: 08:30 \u2013 17:30"}
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E63946]/20 to-transparent" />

      {/* Features showcase */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal delay={0.2}>
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-[family-name:var(--font-dm-serif)] text-3xl text-[#0A2540]">
            {"Tehnologie pentru ma\u0219ina ta"}
          </h2>
          <p className="mt-2 text-center text-gray-600">
            {"Func\u021Bionalit\u0103\u021Bi inovatoare care \u00EE\u021Bi simplific\u0103 experien\u021Ba la service."}
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "\uD83D\uDCE1",
                title: "Service Tracker Live",
                subtitle: "Urm\u0103re\u0219te ma\u0219ina ta \u00EEn timp real",
                desc: "Vezi exact \u00EEn ce etap\u0103 e repara\u021Bia, cu notific\u0103ri la fiecare pas.",
                href: "/tracker/demo",
              },
              {
                icon: "\uD83D\uDE97",
                title: "Garaj Virtual",
                subtitle: "Toate ma\u0219inile tale, un singur loc",
                desc: "Istoric repara\u021Bii, remindere ITP/RCA, program\u0103ri rapide.",
                href: "/garaj",
              },
              {
                icon: "\uD83E\uDD16",
                title: "Estimator AI",
                subtitle: "Estimeaz\u0103 costul repara\u021Biei din fotografii",
                desc: "Inteligen\u021Ba artificial\u0103 analizeaz\u0103 avariile \u0219i estimeaz\u0103 costul \u00EEn secunde.",
                href: "/estimator",
              },
            ].map((feature) => (
              <Card key={feature.title} className="h-full card-hover transition-all">
                <CardContent className="p-6">
                  <span className="text-3xl">{feature.icon}</span>
                  <h3 className="mt-3 text-lg font-semibold text-[#0A2540]">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#E63946]">
                    {feature.subtitle}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">{feature.desc}</p>
                  <Link
                    href={feature.href}
                    className="mt-4 inline-block text-sm font-medium text-[#E63946] hover:underline"
                  >
                    {"Afl\u0103 mai mult \u2192"}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E63946]/20 to-transparent" />

      {/* Reviews */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-[family-name:var(--font-dm-serif)] text-3xl text-[#0A2540]">
            {"Ce spun clien\u021Bii no\u0219tri"}
          </h2>
          <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Andrei M.",
                rating: "\u2605\u2605\u2605\u2605\u2605",
                text: "Am venit cu o problem\u0103 la injectoare diesel \u0219i au rezolvat-o \u00EEn aceea\u0219i zi. Pre\u021Buri corecte \u0219i echip\u0103 profesionist\u0103.",
                car: "VW Passat B8 2.0 TDI",
              },
              {
                name: "Maria P.",
                rating: "\u2605\u2605\u2605\u2605\u2605",
                text: "Geometria 3D a fost impecabil\u0103. Ma\u0219ina merge drept ca pe \u0219ine acum. Recomand cu \u00EEncredere!",
                car: "BMW Seria 3 F30",
              },
              {
                name: "Cristian D.",
                rating: "\u2605\u2605\u2605\u2605\u2606",
                text: "Vopsitorie de calitate excelent\u0103, nu se vede diferen\u021Ba fa\u021B\u0103 de original. Singura mic\u0103 problem\u0103 a fost termenul de livrare.",
                car: "Skoda Octavia III",
              },
              {
                name: "Elena S.",
                rating: "\u2605\u2605\u2605\u2605\u2605",
                text: "Tracker-ul live e genial, am urm\u0103rit tot procesul de pe telefon. Foarte transparent \u0219i modern ca abordare.",
                car: "Ford Focus MK4",
              },
            ].map((review) => (
              <Card key={review.name} className="relative h-full card-hover transition-all overflow-hidden">
                {/* Gradient accent line at top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E63946] to-[#3B82F6]" />
                <CardContent className="relative p-6 pt-7">
                  {/* Large quotation mark decoration */}
                  <span className="absolute top-3 right-4 font-[family-name:var(--font-dm-serif)] text-6xl leading-none text-[#E63946]/10 select-none">&ldquo;</span>
                  <p className="text-lg text-yellow-500">{review.rating}</p>
                  <p className="mt-2 text-sm text-gray-600">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-[#0A2540]">
                      {review.name}
                    </p>
                    <p className="text-xs text-gray-500">{review.car}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E63946]/20 to-transparent" />

      {/* Blog preview */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal delay={0.1}>
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-[family-name:var(--font-dm-serif)] text-3xl text-[#0A2540]">
            Din blogul nostru
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                slug: "cand-schimbi-uleiul-motor",
                title: "Cand trebuie sa schimbi uleiul de motor?",
                excerpt:
                  "Ghid complet despre intervalele de schimb ulei in functie de tipul motorului si stilul de condus.",
                category: "Intretinere",
              },
              {
                slug: "semne-probleme-turbo",
                title: "5 semne ca turbina ta are probleme",
                excerpt:
                  "Invata sa recunosti din timp simptomele unei turbine defecte si evita reparatiile costisitoare.",
                category: "Diagnostic",
              },
              {
                slug: "pregatire-masina-iarna",
                title: "Cum sa-ti pregatesti masina pentru iarna",
                excerpt:
                  "Lista completa de verificari si intretinere pentru sezonul rece: anvelope, baterie, antigel, vizibilitate.",
                category: "Sezonier",
              },
            ].map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`}>
                <Card className="h-full card-hover transition-all">
                  <CardContent className="p-6">
                    <span className="inline-block rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-700">
                      {article.category}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-[#0A2540]">
                      {article.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {article.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="text-sm font-medium text-[#E63946] hover:underline"
            >
              {"Vezi toate articolele \u2192"}
            </Link>
          </div>
        </div>
        </ScrollReveal>
      </section>
    </>
  );
}
