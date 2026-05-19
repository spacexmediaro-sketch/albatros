import { Card, CardContent } from "@/components/ui/card";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Despre noi",
  description:
    "Albatros A Service - service auto multimarca in Blejoi-Ploiesti din 2005. Membru Q-SERVICE Romania. Echipa de mecanici experimentati, echipamente moderne.",
  path: "/despre",
});

const milestones = [
  { year: "2005", text: "Infiintarea Albatros A Service in Blejoi, Prahova" },
  { year: "2010", text: "Aderarea la reteaua Q-SERVICE Romania" },
  { year: "2015", text: "Extindere cu sectie de tinichigerie si vopsitorie" },
  { year: "2020", text: "Modernizare echipamente diagnoza si geometrie 3D" },
  { year: "2024", text: "Digitalizare completa - programari online si tracking" },
];

const values = [
  {
    title: "Transparenta",
    desc: "Fiecare lucrare este documentata cu poze si explicatii. Stii mereu ce se intampla cu masina ta.",
  },
  {
    title: "Calitate",
    desc: "Folosim piese originale si aftermarket premium. Garantie la toate lucrarile efectuate.",
  },
  {
    title: "Experienta",
    desc: "Peste 19 ani de experienta in reparatii auto multimarca, cu specializare pe motoare diesel.",
  },
  {
    title: "Tehnologie",
    desc: "Echipamente de ultima generatie pentru diagnoza computerizata, geometrie 3D si vopsitorie.",
  },
];

export default function DesprePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold sm:text-4xl">Despre Albatros A Service</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Din 2005, oferim servicii auto complete in Blejoi-Ploiesti. Suntem
          membrii ai retelei Q-SERVICE Romania si ne mandrim cu o echipa de
          profesionisti dedicati.
        </p>
      </div>

      {/* Values */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
        {values.map((v) => (
          <Card key={v.title}>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg">{v.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Timeline */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Istoria noastra</h2>
        <div className="space-y-6">
          {milestones.map((m) => (
            <div key={m.year} className="flex gap-4">
              <span className="font-bold text-primary min-w-[4rem]">{m.year}</span>
              <p className="text-muted-foreground">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
