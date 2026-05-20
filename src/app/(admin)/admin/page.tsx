import { Button } from "@/components/ui/button";
import { generatePageMetadata } from "@/lib/seo";
import Link from "next/link";
import { db } from "@/lib/db";

export const metadata = generatePageMetadata({
  title: "Admin Dashboard",
  description: "Panou administrare Albatros A Service",
  path: "/admin",
  noIndex: true,
});

export default async function AdminDashboard() {
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const endOfToday = new Date(startOfToday.getTime() + 24 * 60 * 60 * 1000);
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const [
    bookingsToday,
    bookingsTodayConfirmed,
    bookingsTodayPending,
    activeJobs,
    totalClients,
    newClientsThisMonth,
    recentBookings,
    recentJobs,
    recentClients,
  ] = await Promise.all([
    db.booking.count({
      where: { scheduledAt: { gte: startOfToday, lt: endOfToday } },
    }),
    db.booking.count({
      where: {
        scheduledAt: { gte: startOfToday, lt: endOfToday },
        status: "CONFIRMED",
      },
    }),
    db.booking.count({
      where: {
        scheduledAt: { gte: startOfToday, lt: endOfToday },
        status: "PENDING",
      },
    }),
    db.serviceJob.count({
      where: {
        status: {
          in: ["RECEPTIONAT", "IN_DIAGNOZA", "ASTEAPTA_PIESE", "IN_REPARATIE", "IN_PROBA"],
        },
      },
    }),
    db.user.count({ where: { role: "CLIENT" } }),
    db.user.count({
      where: { role: "CLIENT", createdAt: { gte: startOfMonth } },
    }),
    db.booking.findMany({
      take: 3,
      orderBy: { createdAt: "desc" },
      include: { service: { select: { name: true } }, user: { select: { name: true } } },
    }),
    db.serviceJob.findMany({
      take: 2,
      orderBy: { receivedAt: "desc" },
      include: { events: { orderBy: { createdAt: "desc" }, take: 1 } },
    }),
    db.user.findMany({
      take: 2,
      where: { role: "CLIENT" },
      orderBy: { createdAt: "desc" },
      select: { name: true, phone: true, createdAt: true },
    }),
  ]);

  // Build activity feed from recent DB records
  type ActivityItem = { time: string; text: string; ts: Date };
  const activityItems: ActivityItem[] = [];

  for (const b of recentBookings) {
    const clientName = b.user?.name ?? b.guestName ?? "Client necunoscut";
    activityItems.push({
      ts: b.createdAt,
      time: b.createdAt.toLocaleTimeString("ro-RO", { hour: "2-digit", minute: "2-digit" }),
      text: `Programare nouă: ${clientName} - ${b.service.name}`,
    });
  }
  for (const j of recentJobs) {
    const lastEvent = j.events[0];
    if (lastEvent) {
      activityItems.push({
        ts: lastEvent.createdAt,
        time: lastEvent.createdAt.toLocaleTimeString("ro-RO", { hour: "2-digit", minute: "2-digit" }),
        text: `Job ${j.trackingCode} actualizat: ${lastEvent.status}`,
      });
    }
  }
  for (const c of recentClients) {
    activityItems.push({
      ts: c.createdAt,
      time: c.createdAt.toLocaleTimeString("ro-RO", { hour: "2-digit", minute: "2-digit" }),
      text: `Client nou înregistrat: ${c.name ?? "—"}${c.phone ? ` (${c.phone})` : ""}`,
    });
  }

  activityItems.sort((a, b) => b.ts.getTime() - a.ts.getTime());
  const recentActivity = activityItems.slice(0, 5);

  const stats = [
    {
      label: "Programări azi",
      value: String(bookingsToday),
      description: `${bookingsTodayConfirmed} confirmate, ${bookingsTodayPending} în așteptare`,
      color: "text-blue-400",
      accent: "border-blue-500/30 bg-blue-500/10",
    },
    {
      label: "Lucrări active",
      value: String(activeJobs),
      description: "mașini în service acum",
      color: "text-orange-400",
      accent: "border-orange-500/30 bg-orange-500/10",
    },
    {
      label: "Clienți total",
      value: String(totalClients),
      description: `+${newClientsThisMonth} luna aceasta`,
      color: "text-green-400",
      accent: "border-green-500/30 bg-green-500/10",
    },
    {
      label: "Estimări în coadă",
      value: String(
        await db.estimate.count({ where: { status: "PENDING_REVIEW" } })
      ),
      description: "așteaptă revizuire",
      color: "text-emerald-400",
      accent: "border-emerald-500/30 bg-emerald-500/10",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-sm text-[#8B8D97] mt-1">
          Bine ai venit în panoul de administrare Albatros A Service
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`bg-[#0F1017] border border-white/[0.08] rounded-2xl p-6 ${stat.accent}`}
          >
            <p className="text-sm text-[#8B8D97]">{stat.label}</p>
            <p className={`text-2xl font-bold mt-1 ${stat.color}`}>
              {stat.value}
            </p>
            <p className="text-xs text-[#4A4B55] mt-1">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Acțiuni rapide */}
      <div className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
        <div className="p-6 border-b border-white/[0.08]">
          <h2 className="text-base font-semibold text-white">
            Acțiuni rapide
          </h2>
        </div>
        <div className="p-6 flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-[#FF2D2D] text-[#050505] hover:bg-[#FF2D2D]/90"
          >
            <Link href="/admin/programari">+ Programare nouă</Link>
          </Button>
          <Button
            asChild
            className="bg-white/5 text-[#E2E4E9] border border-white/[0.08] hover:bg-white/10"
          >
            <Link href="/admin/masini-service">+ Job service nou</Link>
          </Button>
          <Button
            asChild
            className="bg-white/5 text-[#E2E4E9] border border-white/[0.08] hover:bg-white/10"
          >
            <Link href="/admin/blog">+ Articol nou</Link>
          </Button>
        </div>
      </div>

      {/* Activitate recentă */}
      <div className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
        <div className="p-6 border-b border-white/[0.08]">
          <h2 className="text-base font-semibold text-white">
            Activitate recentă
          </h2>
        </div>
        <div className="p-6">
          {recentActivity.length === 0 ? (
            <p className="text-sm text-[#4A4B55] text-center py-4">
              Nicio activitate înregistrată încă.
            </p>
          ) : (
            <div className="space-y-4">
              {recentActivity.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-sm border-b border-white/[0.08] last:border-0 pb-3 last:pb-0"
                >
                  <span className="text-xs font-mono text-[#4A4B55] w-12 shrink-0 pt-0.5">
                    {item.time}
                  </span>
                  <span className="text-[#E2E4E9]">{item.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
