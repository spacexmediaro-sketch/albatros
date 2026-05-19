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
    title: "Geometrie roti 3D",
    description: "Aliniere geometrie pe ambele punti, reglaj convergenta",
    km: 112000,
    cost: 250,
  },
  {
    id: "sj-3",
    date: "2025-06-20",
    title: "Inlocuire placute frana",
    description: "Placute frana fata si spate, verificare discuri",
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
  const config =
    days < 0
      ? { dot: "bg-red-500", badge: "bg-red-500/10 text-red-400 border border-red-500/20" }
      : days < 30
        ? { dot: "bg-red-500", badge: "bg-red-500/10 text-red-400 border border-red-500/20" }
        : days < 90
          ? { dot: "bg-yellow-500", badge: "bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20" }
          : { dot: "bg-green-500", badge: "bg-green-500/10 text-green-400 border border-green-500/20" };

  const text =
    days < 0
      ? `Expirat de ${Math.abs(days)} zile`
      : days === 0
        ? "Expiră astăzi"
        : `${days} zile rămase`;

  return (
    <div className="flex items-center justify-between rounded-lg border border-white/[0.08] bg-[#080808] p-3">
      <span className="text-sm font-medium text-white">{label}</span>
      <div className="flex items-center gap-2">
        <span className={`inline-block h-2.5 w-2.5 rounded-full ${config.dot}`} />
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${config.badge}`}>{text}</span>
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
          <h1 className="text-2xl font-bold text-white">
            {mockCar.make} {mockCar.model} {mockCar.year}
          </h1>
          <p className="mt-1 text-sm text-[#8B8D97]">
            {mockCar.plate} &middot; {mockCar.km.toLocaleString("ro-RO")} km
          </p>
        </div>
        <Button
          className="bg-[#FF2D2D] text-[#050505] shadow-[0_0_20px_rgba(255,45,45,0.3)] hover:bg-[#FF2D2D]/90"
          asChild
        >
          <Link href="/garaj/programari">Programează service</Link>
        </Button>
      </div>

      {/* Car details */}
      <Card className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
        <CardHeader>
          <CardTitle className="text-white">Informații vehicul</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div>
              <p className="text-xs text-[#4A4B55]">Marca</p>
              <p className="font-medium text-[#E2E4E9]">{mockCar.make}</p>
            </div>
            <div>
              <p className="text-xs text-[#4A4B55]">Model</p>
              <p className="font-medium text-[#E2E4E9]">{mockCar.model}</p>
            </div>
            <div>
              <p className="text-xs text-[#4A4B55]">An</p>
              <p className="font-medium text-[#E2E4E9]">{mockCar.year}</p>
            </div>
            <div>
              <p className="text-xs text-[#4A4B55]">Combustibil</p>
              <p className="font-medium text-[#E2E4E9]">{mockCar.fuel}</p>
            </div>
            <div>
              <p className="text-xs text-[#4A4B55]">Nr. înmatriculare</p>
              <p className="font-medium text-[#E2E4E9]">{mockCar.plate}</p>
            </div>
            <div>
              <p className="text-xs text-[#4A4B55]">Kilometraj</p>
              <p className="font-medium text-[#E2E4E9]">{mockCar.km.toLocaleString("ro-RO")} km</p>
            </div>
            <div className="col-span-2">
              <p className="text-xs text-[#4A4B55]">VIN</p>
              <p className="font-mono font-medium text-[#E2E4E9]">{mockCar.vin}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Health dashboard */}
      <Card className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
        <CardHeader>
          <CardTitle className="text-white">Stare vehicul</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <CountdownBadge label="ITP" dateStr={mockCar.itpExpires} />
          <CountdownBadge label="RCA" dateStr={mockCar.rcaExpires} />
        </CardContent>
      </Card>

      {/* Service history timeline */}
      <Card className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
        <CardHeader>
          <CardTitle className="text-white">Istoric service</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative space-y-6 pl-6 before:absolute before:left-2 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-white/[0.08]">
            {mockServiceHistory.map((entry) => (
              <div key={entry.id} className="relative">
                <span className="absolute -left-6 top-1.5 h-3 w-3 rounded-full border-2 border-[#FF2D2D] bg-[#0F1017]" />
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-white">{entry.title}</p>
                    <p className="mt-0.5 text-sm text-[#8B8D97]">
                      {entry.description}
                    </p>
                    <div className="mt-1 flex items-center gap-3 text-xs text-[#4A4B55]">
                      <span>{new Date(entry.date).toLocaleDateString("ro-RO")}</span>
                      <span>{entry.km.toLocaleString("ro-RO")} km</span>
                    </div>
                  </div>
                  <Badge className="bg-white/5 text-[#E2E4E9] border border-white/[0.08]">{entry.cost} lei</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
