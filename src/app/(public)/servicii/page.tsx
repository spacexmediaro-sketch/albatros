import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Servicii auto",
  description:
    "Servicii complete de reparații auto: diagnoză, motor diesel, tinichigerie, vopsitorie, geometrie roți, electrică auto. Service multimarca Ploiești.",
  path: "/servicii",
});

const services = [
  { slug: "diagnoza-auto", name: "Diagnoză auto computerizată", category: "Diagnoză", desc: "Citire erori, resetare martori, diagnoză completă pentru toate mărcile auto." },
  { slug: "reparatii-motoare-diesel", name: "Reparații motoare diesel", category: "Motor", desc: "Specialiști în motoare diesel — reparații complete, regenerări turbine, pompe de injecție." },
  { slug: "reparatii-injectoare", name: "Reparații injectoare", category: "Motor", desc: "Testare, recalibrare și reparații injectoare diesel common-rail." },
  { slug: "rectificari-chiulase", name: "Rectificări chiulase", category: "Motor", desc: "Rectificare profesională chiulase cu echipament specializat." },
  { slug: "tinichigerie-auto", name: "Tinichigerie auto", category: "Caroserie", desc: "Îndreptare tablă, sudură, reparații structurale caroserie." },
  { slug: "vopsitorie-auto", name: "Vopsitorie auto", category: "Caroserie", desc: "Vopsire integrală sau parțială în cabină profesională." },
  { slug: "geometrie-roti", name: "Geometrie roți", category: "Suspensie", desc: "Geometrie 3D pentru aliniere perfectă și uzură uniformă anvelope." },
  { slug: "electrica-auto", name: "Electrică auto", category: "Electrică", desc: "Diagnoză și reparații instalație electrică, alternator, electromotor." },
  { slug: "mecanica-auto", name: "Mecanică auto", category: "Mecanică", desc: "Reparații mecanice generale — frâne, ambreiaj, suspensie, distribuție." },
  { slug: "incarcari-aer-conditionat", name: "Încărcări aer condiționat", category: "Confort", desc: "Verificare etanșeitate, încărcare freon, dezinfecție sistem AC." },
];

export default function ServiciiPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-[#0A2540]">
          Serviciile noastre
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          Albatros A Service oferă o gamă completă de servicii auto pentru toate
          mărcile. Fiecare reparație vine cu garanție și transparență totală.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} href={`/servicii/${service.slug}`}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-[#E63946]">
                    {service.category}
                  </span>
                  <h2 className="mt-2 text-lg font-semibold text-[#0A2540]">
                    {service.name}
                  </h2>
                  <p className="mt-1 text-sm text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
