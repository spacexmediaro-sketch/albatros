import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Blog auto",
  description:
    "Sfaturi intretinere auto, ghiduri reparatii si noutati din lumea auto. Blog Albatros A Service Ploiesti.",
  path: "/blog",
});

// Placeholder articles - will come from DB
const articles = [
  {
    slug: "cand-schimbi-uleiul-motor",
    title: "Cand trebuie sa schimbi uleiul de motor?",
    excerpt:
      "Ghid complet despre intervalele de schimb ulei in functie de tipul motorului si stilul de condus.",
    category: "Intretinere",
    date: "2024-12-15",
    readingTime: 5,
    accent: "from-[#FF2D2D] to-[#FF2D2D]/40",
    badgeColor: "bg-[#FF2D2D]/10 text-[#FF2D2D] border-[#FF2D2D]/20",
  },
  {
    slug: "semne-probleme-turbo",
    title: "5 semne ca turbina ta are probleme",
    excerpt:
      "Invata sa recunosti din timp simptomele unei turbine defecte si evita reparatiile costisitoare.",
    category: "Diagnostic",
    date: "2024-11-28",
    readingTime: 4,
    accent: "from-[#3B82F6] to-[#3B82F6]/40",
    badgeColor: "bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/20",
  },
  {
    slug: "pregatire-masina-iarna",
    title: "Cum sa-ti pregatesti masina pentru iarna",
    excerpt:
      "Lista completa de verificari si intretinere pentru sezonul rece: anvelope, baterie, antigel, vizibilitate.",
    category: "Sezonier",
    date: "2024-10-20",
    readingTime: 6,
    accent: "from-[#FF2D2D] to-[#3B82F6]",
    badgeColor: "bg-[#FF2D2D]/10 text-[#FF2D2D] border-[#FF2D2D]/20",
  },
];

export default function BlogPage() {
  return (
    <div className="relative min-h-screen bg-[#04040A]">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        {/* Grid pattern overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gradient orbs */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#FF2D2D]/[0.07] blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#3B82F6]/[0.07] blur-[120px]" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-[#FF2D2D]/[0.04] blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Badge with pulsing dot */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#0F1017] px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF2D2D] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF2D2D]" />
              </span>
              <span className="text-xs font-medium tracking-wide text-[#8B8D97]">
                Articole noi in fiecare luna
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Blog{" "}
              <span className="bg-gradient-to-r from-[#FF2D2D] to-[#3B82F6] bg-clip-text text-transparent">
                Auto
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#8B8D97]">
              Sfaturi, ghiduri si noutati pentru intretinerea optima a masinii
              tale. Experienta noastra, la dispozitia ta.
            </p>
          </div>
        </div>
      </section>

      {/* ── Articles Grid ── */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Subtle background orb behind cards */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-[#3B82F6]/[0.03] blur-[100px]" />

        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className={`group block ${index === 1 ? "sm:translate-y-6" : ""}`}
            >
              <Card className="relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0F1017] shadow-none transition-all duration-500 hover:border-white/[0.15] hover:shadow-[0_0_40px_-12px_rgba(255,45,45,0.15)]">
                {/* Gradient accent line at top */}
                <div
                  className={`h-[2px] w-full bg-gradient-to-r ${article.accent} opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Hover glow overlay */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <CardContent className="relative p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge
                      className={`rounded-full border px-3 py-0.5 text-[11px] font-medium ${article.badgeColor}`}
                    >
                      {article.category}
                    </Badge>
                    <span className="text-xs font-medium text-[#4A4B55]">
                      {article.readingTime} min citire
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-[#E2E4E9]">
                    {article.title}
                  </h2>

                  <p className="text-sm leading-relaxed text-[#8B8D97]">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
                    <time className="text-xs text-[#4A4B55]">
                      {new Date(article.date).toLocaleDateString("ro-RO", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>

                    {/* Read more arrow */}
                    <span className="flex items-center gap-1 text-xs font-medium text-[#8B8D97] transition-colors duration-300 group-hover:text-[#FF2D2D]">
                      Citeste
                      <svg
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
