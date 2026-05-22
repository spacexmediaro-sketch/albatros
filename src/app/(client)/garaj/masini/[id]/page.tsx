export const dynamic = "force-dynamic";

import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generatePageMetadata } from "@/lib/seo";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export const metadata = generatePageMetadata({
  title: "Detalii mașină",
  description: "Vizualizează detaliile mașinii tale, starea ITP/RCA și istoricul service.",
  path: "/garaj/masini",
  noIndex: true,
});

function daysUntil(date: Date): number {
  return Math.ceil((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
}

function CountdownBadge({ label, date }: { label: string; date: Date | null }) {
  if (!date) {
    return (
      <div className="flex items-center justify-between rounded-lg border border-white/[0.08] bg-[#080808] p-3">
        <span className="text-sm font-medium text-white">{label}</span>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#4A4B55]" />
          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-white/5 text-[#8B8D97] border border-white/[0.08]">
            Nedefinit
          </span>
        </div>
      </div>
    );
  }

  const days = daysUntil(date);
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
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${config.badge}`}>
          {text}
        </span>
      </div>
    </div>
  );
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

function jobStatusLabel(status: string): string {
  const map: Record<string, string> = {
    RECEPTIONAT: "Recepționat",
    IN_DIAGNOZA: "În diagnoză",
    ASTEAPTA_PIESE: "Așteaptă piese",
    IN_REPARATIE: "În reparație",
    IN_PROBA: "În probă",
    FINALIZAT: "Finalizat",
    PREDAT: "Predat",
  };
  return map[status] ?? status;
}

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await auth();
  if (!session?.user?.id) redirect("/autentificare");

  const car = await db.car.findUnique({
    where: { id },
    include: {
      serviceJobs: {
        orderBy: { receivedAt: "desc" },
        include: {
          events: {
            orderBy: { createdAt: "asc" },
          },
        },
      },
    },
  });

  // Ensure car belongs to current user
  if (!car || car.userId !== session.user.id) notFound();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">
            {car.make} {car.model} {car.year}
          </h1>
          <p className="mt-1 text-sm text-[#8B8D97]">
            {car.plateNumber ?? "Fără nr. înmatriculare"}
            {car.km != null && ` · ${car.km.toLocaleString("ro-RO")} km`}
          </p>
        </div>
        <Button
          className="bg-[#C9A84C] text-[#050505] shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:bg-[#C9A84C]/90"
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
              <p className="font-medium text-[#E2E4E9]">{car.make}</p>
            </div>
            <div>
              <p className="text-xs text-[#4A4B55]">Model</p>
              <p className="font-medium text-[#E2E4E9]">{car.model}</p>
            </div>
            <div>
              <p className="text-xs text-[#4A4B55]">An</p>
              <p className="font-medium text-[#E2E4E9]">{car.year}</p>
            </div>
            <div>
              <p className="text-xs text-[#4A4B55]">Combustibil</p>
              <p className="font-medium text-[#E2E4E9]">{fuelLabel(car.fuel)}</p>
            </div>
            <div>
              <p className="text-xs text-[#4A4B55]">Nr. înmatriculare</p>
              <p className="font-medium text-[#E2E4E9]">{car.plateNumber ?? "—"}</p>
            </div>
            <div>
              <p className="text-xs text-[#4A4B55]">Kilometraj</p>
              <p className="font-medium text-[#E2E4E9]">
                {car.km != null ? `${car.km.toLocaleString("ro-RO")} km` : "—"}
              </p>
            </div>
            {car.vin && (
              <div className="col-span-2">
                <p className="text-xs text-[#4A4B55]">VIN</p>
                <p className="font-mono font-medium text-[#E2E4E9]">{car.vin}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Health dashboard */}
      <Card className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
        <CardHeader>
          <CardTitle className="text-white">Stare vehicul</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <CountdownBadge label="ITP" date={car.itpExpires} />
          <CountdownBadge label="RCA" date={car.rcaExpires} />
        </CardContent>
      </Card>

      {/* Service history timeline */}
      <Card className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
        <CardHeader>
          <CardTitle className="text-white">Istoric service</CardTitle>
        </CardHeader>
        <CardContent>
          {car.serviceJobs.length === 0 ? (
            <p className="text-center text-sm text-[#8B8D97] py-4">
              Nicio intervenție înregistrată pentru această mașină.
            </p>
          ) : (
            <div className="relative space-y-6 pl-6 before:absolute before:left-2 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-white/[0.08]">
              {car.serviceJobs.map((job) => {
                const firstEvent = job.events[0];
                const description = firstEvent?.message ?? jobStatusLabel(job.status);

                return (
                  <div key={job.id} className="relative">
                    <span className="absolute -left-6 top-1.5 h-3 w-3 rounded-full border-2 border-[#C9A84C] bg-[#0F1017]" />
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-white">
                          {jobStatusLabel(job.status)} — #{job.trackingCode}
                        </p>
                        <p className="mt-0.5 text-sm text-[#8B8D97]">{description}</p>
                        <div className="mt-1 flex items-center gap-3 text-xs text-[#4A4B55]">
                          <span>
                            {job.receivedAt.toLocaleDateString("ro-RO", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </span>
                          {job.estimatedReady && (
                            <span>
                              Estimat gata:{" "}
                              {job.estimatedReady.toLocaleDateString("ro-RO")}
                            </span>
                          )}
                        </div>
                      </div>
                      {job.totalCost != null && (
                        <Badge className="bg-white/5 text-[#E2E4E9] border border-white/[0.08]">
                          {job.totalCost.toLocaleString("ro-RO")} lei
                        </Badge>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
