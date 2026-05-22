export const dynamic = "force-dynamic";

import Link from "next/link";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generatePageMetadata } from "@/lib/seo";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export const metadata = generatePageMetadata({
  title: "Garajul meu",
  description:
    "Gestionează mașinile tale, vezi istoricul reparațiilor și programează-te online la Albatros A Service.",
  path: "/garaj",
  noIndex: true,
});

function calcDays(date: Date | null): number | null {
  if (!date) return null;
  return Math.ceil((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
}

function healthColor(days: number | null): "success" | "warning" | "danger" {
  if (days === null) return "warning";
  if (days < 0) return "danger";
  if (days < 30) return "danger";
  if (days < 90) return "warning";
  return "success";
}

function healthLabel(days: number | null, prefix: string): string {
  if (days === null) return `${prefix}: Nedefinit`;
  if (days < 0) return `${prefix}: Expirat`;
  if (days === 0) return `${prefix}: Expiră astăzi`;
  if (days < 90) return `${prefix}: Expiră în ${days} zile`;
  return `${prefix}: Valid`;
}

function lastServiceLabel(date: Date | null): { status: string; color: "success" | "warning" | "danger" } {
  if (!date) return { status: "Fără revizie înregistrată", color: "warning" };
  const daysSince = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24));
  if (daysSince < 90) return { status: `Acum ${daysSince} zile`, color: "success" };
  if (daysSince < 180) return { status: `Acum ${Math.floor(daysSince / 30)} luni`, color: "warning" };
  return { status: `Acum ${Math.floor(daysSince / 30)} luni`, color: "danger" };
}

function fuelLabel(fuel: string): string {
  const map: Record<string, string> = {
    DIESEL: "Diesel",
    BENZINA: "Benzină",
    HIBRID: "Hibrid",
    ELECTRIC: "Electric",
  };
  return map[fuel] ?? fuel;
}

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

export default async function GarajPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/autentificare");

  const cars = await db.car.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Garajul meu</h1>
        <Button
          className="bg-[#C9A84C] text-[#050505] shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:bg-[#C9A84C]/90"
          asChild
        >
          <Link href="/garaj/adauga-masina">Adaugă mașină</Link>
        </Button>
      </div>

      {cars.length === 0 ? (
        <Card className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
          <CardContent className="p-8 text-center">
            <p className="text-[#8B8D97]">Nu ai nicio mașină adăugată.</p>
            <p className="mt-1 text-sm text-[#4A4B55]">
              Adaugă prima ta mașină pentru a urmări starea ITP, RCA și istoricul service.
            </p>
            <Button
              className="mt-4 bg-[#C9A84C] text-[#050505] shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:bg-[#C9A84C]/90"
              asChild
            >
              <Link href="/garaj/adauga-masina">Adaugă mașină</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {cars.map((car) => {
            const itpDays = calcDays(car.itpExpires);
            const rcaDays = calcDays(car.rcaExpires);
            const svc = lastServiceLabel(car.lastService);

            const itpStatus = itpDays === null
              ? "Nedefinit"
              : itpDays < 0
                ? "Expirat"
                : itpDays === 0
                  ? "Expiră astăzi"
                  : itpDays < 90
                    ? `Expiră în ${itpDays} zile`
                    : "Valid";

            const rcaStatus = rcaDays === null
              ? "Nedefinit"
              : rcaDays < 0
                ? "Expirat"
                : rcaDays === 0
                  ? "Expiră astăzi"
                  : rcaDays < 90
                    ? `Expiră în ${rcaDays} zile`
                    : "Valid";

            return (
              <Card key={car.id} className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg text-white">
                        {car.make} {car.model} {car.year}
                      </CardTitle>
                      <p className="mt-1 text-sm text-[#8B8D97]">
                        {car.plateNumber ?? "Fără nr. înmatriculare"}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-white/5 text-[#E2E4E9] border border-white/[0.08]">
                        {fuelLabel(car.fuel)}
                      </Badge>
                      {car.km != null && (
                        <Badge className="bg-white/5 text-[#E2E4E9] border border-white/[0.08]">
                          {car.km.toLocaleString("ro-RO")} km
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-2">
                  <HealthIndicator
                    label="ITP"
                    status={itpStatus}
                    color={healthColor(itpDays)}
                  />
                  <HealthIndicator
                    label="RCA"
                    status={rcaStatus}
                    color={healthColor(rcaDays)}
                  />
                  <HealthIndicator
                    label="Ultima revizie"
                    status={svc.status}
                    color={svc.color}
                  />
                </CardContent>

                <CardFooter className="gap-2">
                  <Button
                    size="sm"
                    className="bg-[#C9A84C] text-[#050505] shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:bg-[#C9A84C]/90"
                    asChild
                  >
                    <Link href="/garaj/programari">Programează</Link>
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
            );
          })}
        </div>
      )}
    </div>
  );
}
