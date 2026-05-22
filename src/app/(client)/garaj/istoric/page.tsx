export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function IstoricPage({
  searchParams,
}: {
  searchParams: Promise<{ car?: string }>;
}) {
  const session = await auth();
  if (!session?.user?.id) redirect("/autentificare");

  const { car: selectedCar } = await searchParams;

  const cars = await db.car.findMany({
    where: { userId: session.user.id },
    select: { id: true, make: true, model: true, year: true },
    orderBy: { createdAt: "desc" },
  });

  const history = await db.serviceJob.findMany({
    where: {
      car: {
        userId: session.user.id,
        ...(selectedCar && selectedCar !== "all" ? { id: selectedCar } : {}),
      },
    },
    include: {
      car: { select: { make: true, model: true, year: true } },
      events: { orderBy: { createdAt: "desc" }, take: 1 },
    },
    orderBy: { receivedAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Istoric reparații</h1>
        {cars.length > 1 && (
          <form className="flex items-center gap-2">
            <label htmlFor="car-filter" className="text-sm text-[#8B8D97]">
              Filtrează:
            </label>
            <select
              id="car-filter"
              name="car"
              defaultValue={selectedCar || "all"}
              onChange="this.form.submit()"
              className="flex h-9 rounded-md border border-white/10 bg-[#080808] px-3 py-1 text-sm text-white shadow-sm transition-colors focus-visible:outline-none focus-visible:border-[#C9A84C]/50 focus-visible:ring-1 focus-visible:ring-[#C9A84C]/50"
            >
              <option value="all" className="bg-[#080808]">Toate mașinile</option>
              {cars.map((c) => (
                <option key={c.id} value={c.id} className="bg-[#080808]">
                  {c.make} {c.model} {c.year}
                </option>
              ))}
            </select>
          </form>
        )}
      </div>

      {history.length === 0 ? (
        <Card className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
          <CardContent className="p-6 text-center">
            <p className="text-[#8B8D97]">Nicio intervenție găsită.</p>
            <p className="text-sm text-[#4A4B55] mt-1">
              Istoricul reparațiilor va apărea aici după prima vizită la service.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="relative space-y-6 pl-6 before:absolute before:left-2 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-white/[0.08]">
          {history.map((job) => (
            <div key={job.id} className="relative">
              <span className="absolute -left-6 top-1.5 h-3 w-3 rounded-full border-2 border-[#C9A84C] bg-[#0F1017]" />
              <Card className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <p className="font-medium text-white">
                        {job.events[0]?.message || job.trackingCode}
                      </p>
                      <p className="text-sm text-[#8B8D97]">
                        Status: {job.status.replace(/_/g, " ").toLowerCase()}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-[#4A4B55]">
                        <span>
                          {job.receivedAt.toLocaleDateString("ro-RO", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        <Badge className="bg-white/5 text-[#E2E4E9] border border-white/[0.08] text-xs">
                          {job.car.make} {job.car.model} {job.car.year}
                        </Badge>
                      </div>
                    </div>
                    {job.totalCost && (
                      <Badge className="shrink-0 bg-white/5 text-[#E2E4E9] border border-white/[0.08]">
                        {job.totalCost.toLocaleString("ro-RO")} lei
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
