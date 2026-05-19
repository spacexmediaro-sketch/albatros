import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Detalii mașină",
  description: "Vizualizează detaliile mașinii tale, starea ITP/RCA și istoricul service.",
  path: "/garaj/masini",
  noIndex: true,
});

const mockCar = {
  id: "car-1",
  make: "BMW",
  model: "Seria 3",
  year: 2019,
  fuel: "Diesel",
  plate: "PH-01-ABC",
  km: 125000,
  vin: "WBAPH5C55BA123456",
  itpExpires: "2026-07-03",
  rcaExpires: "2027-01-15",
};

const mockServiceHistory = [
  {
    id: "sj-1",
    date: "2026-03-12",
    title: "Schimb ulei + filtre",
    description: "Ulei motor 5W-30, filtru ulei, filtru aer, filtru habitaclu",
    km: 120000,
    cost: 850,
  },
  {
    id: "sj-2",
    date: "2025-11-05",
    title: "Geometrie roți 3D",
    description: "Aliniere geometrie pe ambele punți, reglaj convergență",
    km: 112000,
    cost: 250,
  },
  {
    id: "sj-3",
    date: "2025-06-20",
    title: "Înlocuire plăcuțe frână",
    description: "Plăcuțe frână față și spate, verificare discuri",
    km: 105000,
    cost: 620,
  },
];

function daysUntil(dateStr: string): number {
  const target = new Date(dateStr);
  const now = new Date();
  return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

function CountdownBadge({ label, dateStr }: { label: string; dateStr: string }) {
  const days = daysUntil(dateStr);
  const color =
    days < 0
      ? "bg-red-500"
      : days < 30
        ? "bg-red-500"
        : days < 90
          ? "bg-yellow-500"
          : "bg-green-500";

  const text =
    days < 0
      ? `Expirat de ${Math.abs(days)} zile`
      : days === 0
        ? "Expiră astăzi"
        : `${days} zile rămase`;

  return (
    <div className="flex items-center justify-between rounded-lg border p-3">
      <span className="text-sm font-medium text-[#0A2540]">{label}</span>
      <div className="flex items-center gap-2">
        <span className={`inline-block h-2.5 w-2.5 rounded-full ${color}`} />
        <span className="text-sm text-[#0A2540]/70">{text}</span>
      </div>
    </div>
  );
}

export default function CarDetailPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0A2540]">
            {mockCar.make} {mockCar.model} {mockCar.year}
          </h1>
          <p className="mt-1 text-sm text-[#0A2540]/60">
            {mockCar.plate} &middot; {mockCar.km.toLocaleString("ro-RO")} km
          </p>
        </div>
        <Button
          className="bg-[#E63946] text-white hover:bg-[#E63946]/90"
          asChild
        >
          <Link href="/garaj/programari">Programează service</Link>
        </Button>
      </div>

      {/* Car details */}
      <Card>
        <CardHeader>
          <CardTitle>Informații vehicul</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div>
              <p className="text-xs text-[#0A2540]/50">Marcă</p>
              <p className="font-medium">{mockCar.make}</p>
            </div>
            <div>
              <p className="text-xs text-[#0A2540]/50">Model</p>
              <p className="font-medium">{mockCar.model}</p>
            </div>
            <div>
              <p className="text-xs text-[#0A2540]/50">An</p>
              <p className="font-medium">{mockCar.year}</p>
            </div>
            <div>
              <p className="text-xs text-[#0A2540]/50">Combustibil</p>
              <p className="font-medium">{mockCar.fuel}</p>
            </div>
            <div>
              <p className="text-xs text-[#0A2540]/50">Nr. înmatriculare</p>
              <p className="font-medium">{mockCar.plate}</p>
            </div>
            <div>
              <p className="text-xs text-[#0A2540]/50">Kilometraj</p>
              <p className="font-medium">{mockCar.km.toLocaleString("ro-RO")} km</p>
            </div>
            <div className="col-span-2">
              <p className="text-xs text-[#0A2540]/50">VIN</p>
              <p className="font-mono font-medium">{mockCar.vin}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Health dashboard */}
      <Card>
        <CardHeader>
          <CardTitle>Stare vehicul</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <CountdownBadge label="ITP" dateStr={mockCar.itpExpires} />
          <CountdownBadge label="RCA" dateStr={mockCar.rcaExpires} />
        </CardContent>
      </Card>

      {/* Service history timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Istoric service</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative space-y-6 pl-6 before:absolute before:left-2 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gray-200">
            {mockServiceHistory.map((entry) => (
              <div key={entry.id} className="relative">
                <span className="absolute -left-6 top-1.5 h-3 w-3 rounded-full border-2 border-[#E63946] bg-white" />
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-[#0A2540]">{entry.title}</p>
                    <p className="mt-0.5 text-sm text-[#0A2540]/60">
                      {entry.description}
                    </p>
                    <div className="mt-1 flex items-center gap-3 text-xs text-[#0A2540]/50">
                      <span>{new Date(entry.date).toLocaleDateString("ro-RO")}</span>
                      <span>{entry.km.toLocaleString("ro-RO")} km</span>
                    </div>
                  </div>
                  <Badge variant="outline">{entry.cost} lei</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
