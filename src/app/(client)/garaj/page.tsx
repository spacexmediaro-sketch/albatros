import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Garajul meu",
  description:
    "Gestionează mașinile tale, vezi istoricul reparațiilor și programează-te online la Albatros A Service.",
  path: "/garaj",
});

const mockCars = [
  {
    id: "car-1",
    make: "BMW",
    model: "Seria 3",
    year: 2019,
    fuel: "Diesel",
    plate: "PH-01-ABC",
    km: 125000,
    itp: { label: "ITP", status: "Expiră în 45 zile", color: "warning" as const },
    rca: { label: "RCA", status: "Valid", color: "success" as const },
    lastService: { label: "Ultima revizie", status: "Acum 3 luni", color: "success" as const },
  },
  {
    id: "car-2",
    make: "Dacia",
    model: "Duster",
    year: 2022,
    fuel: "Diesel",
    plate: "PH-02-XYZ",
    km: 48000,
    itp: { label: "ITP", status: "Valid", color: "success" as const },
    rca: { label: "RCA", status: "Valid", color: "success" as const },
    lastService: { label: "Ultima revizie", status: "Acum 6 luni", color: "warning" as const },
  },
];

function HealthIndicator({
  label,
  status,
  color,
}: {
  label: string;
  status: string;
  color: "success" | "warning" | "danger";
}) {
  const dotColor = {
    success: "bg-green-500",
    warning: "bg-yellow-500",
    danger: "bg-red-500",
  }[color];

  return (
    <div className="flex items-center gap-2">
      <span className={`inline-block h-2.5 w-2.5 rounded-full ${dotColor}`} />
      <span className="text-xs text-[#8B8D97]">{label}:</span>
      <span className="text-xs font-medium text-[#E2E4E9]">{status}</span>
    </div>
  );
}

export default function GarajPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Garajul meu</h1>
        <Button
          className="bg-[#FF2D2D] text-[#050505] shadow-[0_0_20px_rgba(255,45,45,0.3)] hover:bg-[#FF2D2D]/90"
          asChild
        >
          <Link href="/garaj/adauga-masina">Adaugă mașină</Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {mockCars.map((car) => (
          <Card key={car.id} className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg text-white">
                    {car.make} {car.model} {car.year}
                  </CardTitle>
                  <p className="mt-1 text-sm text-[#8B8D97]">{car.plate}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-white/5 text-[#E2E4E9] border border-white/[0.08]">{car.fuel}</Badge>
                  <Badge className="bg-white/5 text-[#E2E4E9] border border-white/[0.08]">
                    {car.km.toLocaleString("ro-RO")} km
                  </Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-2">
              <HealthIndicator
                label={car.itp.label}
                status={car.itp.status}
                color={car.itp.color}
              />
              <HealthIndicator
                label={car.rca.label}
                status={car.rca.status}
                color={car.rca.color}
              />
              <HealthIndicator
                label={car.lastService.label}
                status={car.lastService.status}
                color={car.lastService.color}
              />
            </CardContent>

            <CardFooter className="gap-2">
              <Button
                size="sm"
                className="bg-[#FF2D2D] text-[#050505] shadow-[0_0_20px_rgba(255,45,45,0.3)] hover:bg-[#FF2D2D]/90"
                asChild
              >
                <Link href={`/garaj/programari`}>Programează</Link>
              </Button>
              <Button
                size="sm"
                className="bg-white/5 text-[#E2E4E9] border border-white/[0.08] hover:bg-white/10"
                asChild
              >
                <Link href={`/garaj/masini/${car.id}`}>Vezi istoric</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
