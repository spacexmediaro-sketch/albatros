import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Programările mele",
  description: "Vizualizeaza programarile tale la Albatros A Service - viitoare si trecute.",
  path: "/garaj/programari",
  noIndex: true,
});

type BookingStatus = "CONFIRMED" | "PENDING" | "COMPLETED";

const statusConfig: Record<BookingStatus, { label: string; className: string }> = {
  CONFIRMED: { label: "Confirmată", className: "bg-green-500/10 text-green-400 border border-green-500/20" },
  PENDING: { label: "În așteptare", className: "bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20" },
  COMPLETED: { label: "Finalizată", className: "bg-white/5 text-[#8B8D97] border border-white/[0.08]" },
};

const mockBookings = [
  {
    id: "b-1",
    car: "BMW Seria 3 2019",
    service: "Revizie completa 120.000 km",
    date: "2026-05-28",
    time: "09:00",
    status: "CONFIRMED" as BookingStatus,
  },
  {
    id: "b-2",
    car: "Dacia Duster 2022",
    service: "Schimb anvelope vara",
    date: "2026-06-02",
    time: "10:30",
    status: "PENDING" as BookingStatus,
  },
  {
    id: "b-3",
    car: "BMW Seria 3 2019",
    service: "Geometrie roti 3D",
    date: "2026-03-15",
    time: "14:00",
    status: "COMPLETED" as BookingStatus,
  },
];

function BookingCard({
  booking,
}: {
  booking: (typeof mockBookings)[number];
}) {
  const config = statusConfig[booking.status];
  const isPast = new Date(booking.date) < new Date();

  return (
    <Card className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
      <CardContent className="flex items-center justify-between p-4">
        <div className="space-y-1">
          <p className="font-medium text-white">{booking.service}</p>
          <p className="text-sm text-[#8B8D97]">{booking.car}</p>
          <p className="text-xs text-[#4A4B55]">
            {new Date(booking.date).toLocaleDateString("ro-RO", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            la {booking.time}
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

export default function ProgramariPage() {
  const upcoming = mockBookings.filter((b) => new Date(b.date) >= new Date());
  const past = mockBookings.filter((b) => new Date(b.date) < new Date());

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
