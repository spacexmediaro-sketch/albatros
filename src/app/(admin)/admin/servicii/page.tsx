import { Card, CardContent } from "@/components/ui/card";
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
    name: "Schimb ulei și filtre",
    category: "Întreținere",
    priceFrom: 150,
    duration: 60,
    published: true,
  },
  {
    id: "2",
    name: "Diagnoză computerizată",
    category: "Diagnoză",
    priceFrom: 100,
    duration: 30,
    published: true,
  },
  {
    id: "3",
    name: "Geometrie roți",
    category: "Geometrie",
    priceFrom: 120,
    duration: 45,
    published: true,
  },
  {
    id: "4",
    name: "Revizie completă",
    category: "Întreținere",
    priceFrom: 350,
    duration: 180,
    published: true,
  },
  {
    id: "5",
    name: "Schimb plăcuțe frână",
    category: "Frâne",
    priceFrom: 200,
    duration: 90,
    published: true,
  },
  {
    id: "6",
    name: "Vopsitorie parțială",
    category: "Tinichigerie & Vopsitorie",
    priceFrom: 500,
    duration: 480,
    published: true,
  },
  {
    id: "7",
    name: "Reparație motor diesel",
    category: "Motor",
    priceFrom: 800,
    duration: 360,
    published: true,
  },
  {
    id: "8",
    name: "Climatizare - Încărcare freon",
    category: "Climatizare",
    priceFrom: 180,
    duration: 60,
    published: true,
  },
  {
    id: "9",
    name: "Înlocuire distribuție",
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
          <h1 className="text-2xl font-bold">Servicii</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {mockServices.length} servicii configurate
          </p>
        </div>
        <Button>+ Adaugă serviciu</Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-3 font-medium">Nume</th>
                  <th className="text-left p-3 font-medium">Categorie</th>
                  <th className="text-left p-3 font-medium">Preț de la</th>
                  <th className="text-left p-3 font-medium">Durată</th>
                  <th className="text-left p-3 font-medium">Status</th>
                  <th className="text-left p-3 font-medium">Acțiuni</th>
                </tr>
              </thead>
              <tbody>
                {mockServices.map((service) => (
                  <tr key={service.id} className="border-b last:border-0">
                    <td className="p-3 font-medium">{service.name}</td>
                    <td className="p-3 text-muted-foreground">
                      {service.category}
                    </td>
                    <td className="p-3">{service.priceFrom} RON</td>
                    <td className="p-3 text-muted-foreground">
                      {formatDuration(service.duration)}
                    </td>
                    <td className="p-3">
                      <Badge
                        variant="outline"
                        className={
                          service.published
                            ? "bg-green-100 text-green-800 border-green-200"
                            : "bg-gray-100 text-gray-600 border-gray-200"
                        }
                      >
                        {service.published ? "Activ" : "Inactiv"}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          Editează
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          Șterge
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
