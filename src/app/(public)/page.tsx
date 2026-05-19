import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: "🔍", name: "Diagnoză auto", slug: "diagnoza-auto", desc: "Diagnoză computerizată pentru toate mărcile" },
  { icon: "��️", name: "Reparații diesel", slug: "reparatii-motoare-diesel", desc: "Specialiști motoare diesel și injectoare" },
  { icon: "🔧", name: "Tinichigerie", slug: "tinichigerie-auto", desc: "Reparații caroserie și îndreptare tablă" },
  { icon: "🎨", name: "Vopsitorie", slug: "vopsitorie-auto", desc: "Vopsitorie profesională în cabină dedicată" },
  { icon: "📐", name: "Geometrie roți", slug: "geometrie-roti", desc: "Aliniere precisă cu echipament 3D" },
  { icon: "❄️", name: "Aer condiționat", slug: "incarcari-aer-conditionat", desc: "Încărcare și verificare sistem AC" },
];

const steps = [
  { step: "1", title: "Programezi online", desc: "Alege serviciul și o dată convenabilă" },
  { step: "2", title: "Diagnoză gratuită", desc: "Evaluăm mașina și stabilim problema" },
  { step: "3", title: "Aprobi devizul", desc: "Primești estimarea înainte de orice reparație" },
  { step: "4", title: "Tracking live", desc: "Urmărești progresul mașinii tale în timp real" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0A2540] px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Service auto multimarca
            <br />
            <span className="text-[#E63946]">în Ploiești</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-gray-300">
            Diagnoză azi, mașina ta înapoi mâine. Specializați în motoare
            diesel, tinichigerie și vopsitorie auto.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/programare">
              <Button
                size="lg"
                className="bg-[#E63946] text-white hover:bg-[#d32f3c]"
              >
                Programează acum
              </Button>
            </Link>
            <Link href="/estimator">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Estimează avariile
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 text-center text-sm font-medium text-gray-600">
          <span>20+ ani experiență</span>
          <span className="hidden h-4 w-px bg-gray-300 sm:block" />
          <span>15 mărci auto</span>
          <span className="hidden h-4 w-px bg-gray-300 sm:block" />
          <span>Rețea Q-SERVICE</span>
          <span className="hidden h-4 w-px bg-gray-300 sm:block" />
          <span>Garanție lucrări</span>
        </div>
      </section>

      {/* Servicii */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[#0A2540]">
            Serviciile noastre
          </h2>
          <p className="mt-2 text-gray-600">
            Acoperim toate nevoile mașinii tale, de la diagnoză la vopsitorie.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.slug} href={`/servicii/${service.slug}`}>
                <Card className="h-full transition-shadow hover:shadow-md">
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
        </div>
      </section>

      {/* Cum funcționează */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[#0A2540]">
            Cum funcționează
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#E63946] text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 font-semibold text-[#0A2540]">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact preview */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[#0A2540]">
            Unde ne găsești
          </h2>
          <p className="mt-2 text-gray-600">
            Șoseaua Ploiești-Văleni FN, Blejoi, Prahova (DN1B — Centura de Nord
            Ploiești)
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
            Luni – Vineri: 08:30 – 17:30
          </p>
        </div>
      </section>

      {/* Features showcase */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-[family-name:var(--font-dm-serif)] text-3xl text-[#0A2540]">
            Tehnologie pentru mașina ta
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Funcționalități inovatoare care îți simplifică experiența la service.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "📡",
                title: "Service Tracker Live",
                subtitle: "Urmărește mașina ta în timp real",
                desc: "Vezi exact în ce etapă e reparația, cu notificări la fiecare pas.",
                href: "/tracker/demo",
              },
              {
                icon: "🚗",
                title: "Garaj Virtual",
                subtitle: "Toate mașinile tale, un singur loc",
                desc: "Istoric reparații, remindere ITP/RCA, programări rapide.",
                href: "/garaj",
              },
              {
                icon: "🤖",
                title: "Estimator AI",
                subtitle: "Estimează costul reparației din fotografii",
                desc: "Inteligența artificială analizează avariile și estimează costul în secunde.",
                href: "/estimator",
              },
            ].map((feature) => (
              <Card key={feature.title} className="h-full transition-shadow hover:shadow-md">
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
                    Află mai mult →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-[family-name:var(--font-dm-serif)] text-3xl text-[#0A2540]">
            Ce spun clienții noștri
          </h2>
          <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Andrei M.",
                rating: "★★★★★",
                text: "Am venit cu o problemă la injectoare diesel și au rezolvat-o în aceeași zi. Prețuri corecte și echipă profesionistă.",
                car: "VW Passat B8 2.0 TDI",
              },
              {
                name: "Maria P.",
                rating: "★★★★★",
                text: "Geometria 3D a fost impecabilă. Mașina merge drept ca pe șine acum. Recomand cu încredere!",
                car: "BMW Seria 3 F30",
              },
              {
                name: "Cristian D.",
                rating: "★★★★☆",
                text: "Vopsitorie de calitate excelentă, nu se vede diferența față de original. Singura mică problemă a fost termenul de livrare.",
                car: "Skoda Octavia III",
              },
              {
                name: "Elena S.",
                rating: "★★★★★",
                text: "Tracker-ul live e genial, am urmărit tot procesul de pe telefon. Foarte transparent și modern ca abordare.",
                car: "Ford Focus MK4",
              },
            ].map((review) => (
              <Card key={review.name} className="h-full">
                <CardContent className="p-6">
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
      </section>

      {/* Blog preview */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
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
                <Card className="h-full transition-shadow hover:shadow-md">
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
              Vezi toate articolele →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
