import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { Badge } from "@/components/ui/badge";
import { generatePageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = generatePageMetadata({
  title: "Programări - Admin",
  description: "Gestionare programări Albatros A Service",
  path: "/admin/programari",
  noIndex: true,
});

type BookingStatus = "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED" | "NO_SHOW";

const statusConfig: Record<BookingStatus, { label: string; className: string }> = {
  PENDING: {
    label: "În așteptare",
    className: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  },
  CONFIRMED: {
    label: "Confirmată",
    className: "bg-[#C9A84C]/10 text-[#C9A84C] border-[#C9A84C]/30",
  },
  COMPLETED: {
    label: "Finalizată",
    className: "bg-green-500/10 text-green-400 border-green-500/30",
  },
  CANCELLED: {
    label: "Anulată",
    className: "bg-red-500/10 text-red-400 border-red-500/30",
  },
  NO_SHOW: {
    label: "Neprezentare",
    className: "bg-white/5 text-[#4A4B55] border-white/[0.08]",
  },
};

async function updateBookingStatusAction(formData: FormData) {
  "use server";
  const id = formData.get("id") as string;
  const status = formData.get("status") as BookingStatus;
  try {
    await db.booking.update({ where: { id }, data: { status } });
  } catch (e) {
    console.error("[programari] updateBookingStatus error:", e);
  }
  revalidatePath("/admin/programari");
}

async function cancelBookingAction(formData: FormData) {
  "use server";
  const id = formData.get("id") as string;
  try {
    await db.booking.update({ where: { id }, data: { status: "CANCELLED" } });
  } catch (e) {
    console.error("[programari] cancelBooking error:", e);
  }
  revalidatePath("/admin/programari");
}

export default async function ProgramariPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const params = await searchParams;
  const filter = (params.status as BookingStatus | "ALL") || "ALL";

  const where =
    filter === "ALL"
      ? {}
      : { status: filter as BookingStatus };

  const [bookings, counts] = await Promise.all([
    db.booking.findMany({
      where,
      orderBy: { scheduledAt: "asc" },
      include: {
        service: { select: { name: true } },
        user: { select: { name: true, phone: true } },
        car: { select: { make: true, model: true, year: true } },
      },
    }),
    db.booking.groupBy({
      by: ["status"],
      _count: { id: true },
    }),
  ]);

  const total = counts.reduce((sum, c) => sum + c._count.id, 0);
  const countByStatus = Object.fromEntries(
    counts.map((c) => [c.status, c._count.id])
  ) as Record<string, number>;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Programări</h1>
          <p className="text-sm text-[#8B8D97] mt-1">
            Gestionează programările clienților
          </p>
        </div>
      </div>

      {/* Filtre */}
      <div className="flex flex-wrap gap-2">
        <Link
          href="/admin/programari"
          className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
            filter === "ALL"
              ? "bg-[#C9A84C] text-[#050505]"
              : "bg-white/5 text-[#E2E4E9] border border-white/[0.08] hover:bg-white/10"
          }`}
        >
          Toate ({total})
        </Link>
        {(Object.keys(statusConfig) as BookingStatus[]).map((status) => (
          <Link
            key={status}
            href={`/admin/programari?status=${status}`}
            className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              filter === status
                ? "bg-[#C9A84C] text-[#050505]"
                : "bg-white/5 text-[#E2E4E9] border border-white/[0.08] hover:bg-white/10"
            }`}
          >
            {statusConfig[status].label} ({countByStatus[status] ?? 0})
          </Link>
        ))}
      </div>

      {/* Tabel */}
      <div className="bg-[#0F1017] border border-white/[0.08] rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.08] bg-[#1A1B25]">
                <th className="text-left p-3 font-medium text-[#8B8D97]">Client</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Telefon</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Serviciu</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Data</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Status</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Acțiuni</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => {
                const clientName =
                  booking.user?.name ?? booking.guestName ?? "—";
                const phone =
                  booking.user?.phone ?? booking.guestPhone ?? "—";
                const scheduledAt = new Date(booking.scheduledAt);
                const dateStr = scheduledAt.toLocaleDateString("ro-RO");
                const timeStr = scheduledAt.toLocaleTimeString("ro-RO", {
                  hour: "2-digit",
                  minute: "2-digit",
                });
                const status = booking.status as BookingStatus;

                return (
                  <tr
                    key={booking.id}
                    className="border-b border-white/[0.08] last:border-0 hover:bg-[#1A1B25] transition-colors"
                  >
                    <td className="p-3 font-medium text-white">{clientName}</td>
                    <td className="p-3 text-[#8B8D97]">{phone}</td>
                    <td className="p-3 text-[#E2E4E9]">{booking.service.name}</td>
                    <td className="p-3 text-[#8B8D97]">
                      {dateStr} {timeStr}
                    </td>
                    <td className="p-3">
                      <Badge
                        variant="outline"
                        className={statusConfig[status]?.className}
                      >
                        {statusConfig[status]?.label ?? status}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <div className="flex gap-2 flex-wrap">
                        {status === "PENDING" && (
                          <form action={updateBookingStatusAction}>
                            <input type="hidden" name="id" value={booking.id} />
                            <input type="hidden" name="status" value="CONFIRMED" />
                            <button
                              type="submit"
                              className="text-xs px-2 py-1 rounded bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/30 hover:bg-[#C9A84C]/20 transition-colors"
                            >
                              Confirmă
                            </button>
                          </form>
                        )}
                        {(status === "PENDING" || status === "CONFIRMED") && (
                          <form action={updateBookingStatusAction}>
                            <input type="hidden" name="id" value={booking.id} />
                            <input type="hidden" name="status" value="COMPLETED" />
                            <button
                              type="submit"
                              className="text-xs px-2 py-1 rounded bg-green-500/10 text-green-400 border border-green-500/30 hover:bg-green-500/20 transition-colors"
                            >
                              Finalizează
                            </button>
                          </form>
                        )}
                        {status !== "CANCELLED" && status !== "COMPLETED" && (
                          <form action={cancelBookingAction}>
                            <input type="hidden" name="id" value={booking.id} />
                            <button
                              type="submit"
                              className="text-xs px-2 py-1 rounded bg-white/5 text-[#8B8D97] border border-white/[0.08] hover:bg-white/10 transition-colors"
                            >
                              Anulează
                            </button>
                          </form>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
              {bookings.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-[#4A4B55]">
                    Nicio programare găsită.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
