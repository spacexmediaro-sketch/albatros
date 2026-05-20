import { redirect } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { generatePageMetadata } from "@/lib/seo";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import type { BookingStatus } from "@prisma/client";

export const metadata = generatePageMetadata({
  title: "Programările mele",
  description: "Vizualizează programările tale la Albatros A Service - viitoare și trecute.",
  path: "/garaj/programari",
  noIndex: true,
});

const statusConfig: Record<BookingStatus, { label: string; className: string }> = {
  CONFIRMED: { label: "Confirmată", className: "bg-green-500/10 text-green-400 border border-green-500/20" },
  PENDING: { label: "În așteptare", className: "bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20" },
  COMPLETED: { label: "Finalizată", className: "bg-white/5 text-[#8B8D97] border border-white/[0.08]" },
  CANCELLED: { label: "Anulată", className: "bg-red-500/10 text-red-400 border border-red-500/20" },
  NO_SHOW: { label: "Neprezentare", className: "bg-red-500/10 text-red-400 border border-red-500/20" },
};

type BookingWithRelations = {
  id: string;
  scheduledAt: Date;
  status: BookingStatus;
  service: { name: string };
  car: { make: string; model: string; year: number } | null;
  guestName: string | null;
};

function BookingCard({ booking }: { booking: BookingWithRelations }) {
  const config = statusConfig[booking.status];
  const carLabel = booking.car
    ? `${booking.car.make} ${booking.car.model} ${booking.car.year}`
    : booking.guestName ?? "—";

  const scheduledDate = booking.scheduledAt;

  return (
    <Card className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
      <CardContent className="flex items-center justify-between p-4">
        <div className="space-y-1">
          <p className="font-medium text-white">{booking.service.name}</p>
          <p className="text-sm text-[#8B8D97]">{carLabel}</p>
          <p className="text-xs text-[#4A4B55]">
            {scheduledDate.toLocaleDateString("ro-RO", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            la{" "}
            {scheduledDate.toLocaleTimeString("ro-RO", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${config.className}`}
        >
          {config.label}
        </span>
      </CardContent>
    </Card>
  );
}

export default async function ProgramariPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/autentificare");

  const now = new Date();

  const bookings = await db.booking.findMany({
    where: { userId: session.user.id },
    include: {
      service: { select: { name: true } },
      car: { select: { make: true, model: true, year: true } },
    },
    orderBy: { scheduledAt: "asc" },
  });

  const upcoming = bookings.filter(
    (b) => b.scheduledAt >= now && b.status !== "CANCELLED" && b.status !== "COMPLETED" && b.status !== "NO_SHOW"
  );
  const past = bookings.filter(
    (b) => b.scheduledAt < now || b.status === "CANCELLED" || b.status === "COMPLETED" || b.status === "NO_SHOW"
  );

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-white">Programările mele</h1>

      {/* Upcoming */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-white">Programări viitoare</h2>
        {upcoming.length > 0 ? (
          <div className="space-y-3">
            {upcoming.map((b) => (
              <BookingCard key={b.id} booking={b} />
            ))}
          </div>
        ) : (
          <Card className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
            <CardContent className="p-6 text-center">
              <p className="text-[#8B8D97]">Nu ai programări viitoare.</p>
              <p className="mt-1 text-sm text-[#4A4B55]">
                Mergi la Garajul meu pentru a programa o mașină la service.
              </p>
            </CardContent>
          </Card>
        )}
      </section>

      {/* Past */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-white">Programări trecute</h2>
        {past.length > 0 ? (
          <div className="space-y-3">
            {past.map((b) => (
              <BookingCard key={b.id} booking={b} />
            ))}
          </div>
        ) : (
          <Card className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
            <CardContent className="p-6 text-center">
              <p className="text-[#8B8D97]">Nicio programare anterioară.</p>
            </CardContent>
          </Card>
        )}
      </section>
    </div>
  );
}
