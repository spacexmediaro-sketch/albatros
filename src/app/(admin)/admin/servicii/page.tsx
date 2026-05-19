import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Servicii - Admin",
  description: "Gestionare servicii Albatros A Service",
  path: "/admin/servicii",
  noIndex: true,
});

const mockServices = [
  {
    id: "1",
    name: "Schimb ulei \u0219i filtre",
    category: "\u00centre\u021Binere",
    priceFrom: 150,
    duration: 60,
    published: true,
  },
  {
    id: "2",
    name: "Diagnoz\u0103 computerizat\u0103",
    category: "Diagnoz\u0103",
    priceFrom: 100,
    duration: 30,
    published: true,
  },
  {
    id: "3",
    name: "Geometrie ro\u021Bi",
    category: "Geometrie",
    priceFrom: 120,
    duration: 45,
    published: true,
  },
  {
    id: "4",
    name: "Revizie complet\u0103",
    category: "\u00centre\u021Binere",
    priceFrom: 350,
    duration: 180,
    published: true,
  },
  {
    id: "5",
    name: "Schimb pl\u0103cu\u021Be fr\u00e2n\u0103",
    category: "Fr\u00e2ne",
    priceFrom: 200,
    duration: 90,
    published: true,
  },
  {
    id: "6",
    name: "Vopsitorie par\u021Bial\u0103",
    category: "Tinichigerie & Vopsitorie",
    priceFrom: 500,
    duration: 480,
    published: true,
  },
  {
    id: "7",
    name: "Repara\u021Bie motor diesel",
    category: "Motor",
    priceFrom: 800,
    duration: 360,
    published: true,
  },
  {
    id: "8",
    name: "Climatizare - \u00cenc\u0103rcare freon",
    category: "Climatizare",
    priceFrom: 180,
    duration: 60,
    published: true,
  },
  {
    id: "9",
    name: "\u00cenlocuire distribu\u021Bie",
    category: "Motor",
    priceFrom: 600,
    duration: 300,
    published: true,
  },
  {
    id: "10",
    name: "Tinichigerie auto",
    category: "Tinichigerie & Vopsitorie",
    priceFrom: 400,
    duration: 240,
    published: false,
  },
];

function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}min` : `${h}h`;
}

export default function ServiciiPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Servicii</h1>
          <p className="text-sm text-[#8B8D97] mt-1">
            {mockServices.length} servicii configurate
          </p>
        </div>
        <Button className="bg-[#FF2D2D] text-[#050505] hover:bg-[#FF2D2D]/90">
          + Adaug\u0103 serviciu
        </Button>
      </div>

      <div className="bg-[#0F1017] border border-white/[0.08] rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.08] bg-[#1A1B25]">
                <th className="text-left p-3 font-medium text-[#8B8D97]">Nume</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Categorie</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Pre\u021B de la</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Durat\u0103</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Status</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Ac\u021Biuni</th>
              </tr>
            </thead>
            <tbody>
              {mockServices.map((service) => (
                <tr
                  key={service.id}
                  className="border-b border-white/[0.08] last:border-0 hover:bg-[#1A1B25] transition-colors"
                >
                  <td className="p-3 font-medium text-white">{service.name}</td>
                  <td className="p-3 text-[#8B8D97]">{service.category}</td>
                  <td className="p-3 text-[#E2E4E9]">{service.priceFrom} RON</td>
                  <td className="p-3 text-[#8B8D97]">
                    {formatDuration(service.duration)}
                  </td>
                  <td className="p-3">
                    <Badge
                      variant="outline"
                      className={
                        service.published
                          ? "bg-green-500/10 text-green-400 border-green-500/30"
                          : "bg-white/5 text-[#4A4B55] border-white/[0.08]"
                      }
                    >
                      {service.published ? "Activ" : "Inactiv"}
                    </Badge>
                  </td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#E2E4E9] hover:bg-white/10"
                      >
                        Editeaz\u0103
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#FF2D2D] hover:bg-[#FF2D2D]/10"
                      >
                        \u0218terge
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
