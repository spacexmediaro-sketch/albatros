import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Programările mele",
  description: "Vizualizează programările tale la Albatros A Service - viitoare și trecute.",
  path: "/garaj/programari",
  noIndex: true,
});

type BookingStatus = "CONFIRMED" | "PENDING" | "COMPLETED";

const statusConfig: Record<BookingStatus, { label: string; className: string }> = {
  CONFIRMED: { label: "Confirmată", className: "bg-green-100 text-green-800" },
  PENDING: { label: "În așteptare", className: "bg-yellow-100 text-yellow-800" },
  COMPLETED: { label: "Finalizată", className: "bg-gray-100 text-gray-700" },
};

const mockBookings = [
  {
    id: "b-1",
    car: "BMW Seria 3 2019",
    service: "Revizie completă 120.000 km",
    date: "2026-05-28",
    time: "09:00",
    status: "CONFIRMED" as BookingStatus,
  },
  {
    id: "b-2",
    car: "Dacia Duster 2022",
    service: "Schimb anvelope vară",
    date: "2026-06-02",
    time: "10:30",
    status: "PENDING" as BookingStatus,
  },
  {
    id: "b-3",
    car: "BMW Seria 3 2019",
    service: "Geometrie roți 3D",
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
    <Card>
      <CardContent className="flex items-center justify-between p-4">
        <div className="space-y-1">
          <p className="font-medium text-[#0A2540]">{booking.service}</p>
          <p className="text-sm text-[#0A2540]/60">{booking.car}</p>
          <p className="text-xs text-[#0A2540]/50">
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
      <h1 className="text-2xl font-bold text-[#0A2540]">Programările mele</h1>

      {/* Upcoming */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-[#0A2540]">Programări viitoare</h2>
        {upcoming.length > 0 ? (
          <div className="space-y-3">
            {upcoming.map((b) => (
              <BookingCard key={b.id} booking={b} />
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-[#0A2540]/60">Nu ai programări viitoare.</p>
              <p className="mt-1 text-sm text-[#0A2540]/40">
                Mergi la Garajul meu pentru a programa o mașină la service.
              </p>
            </CardContent>
          </Card>
        )}
      </section>

      {/* Past */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-[#0A2540]">Programări trecute</h2>
        {past.length > 0 ? (
          <div className="space-y-3">
            {past.map((b) => (
              <BookingCard key={b.id} booking={b} />
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-[#0A2540]/60">Nicio programare anterioară.</p>
            </CardContent>
          </Card>
        )}
      </section>
    </div>
  );
}
