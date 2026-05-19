import { Button } from "@/components/ui/button";
import { generatePageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = generatePageMetadata({
  title: "Admin Dashboard",
  description: "Panou administrare Albatros A Service",
  path: "/admin",
  noIndex: true,
});

const stats = [
  {
    label: "Program\u0103ri azi",
    value: "5",
    description: "2 confirmate, 3 \u00een a\u0219teptare",
    color: "text-blue-400",
    accent: "border-blue-500/30 bg-blue-500/10",
  },
  {
    label: "Lucr\u0103ri active",
    value: "3",
    description: "1 \u00een diagnoz\u0103, 2 \u00een repara\u021Bie",
    color: "text-orange-400",
    accent: "border-orange-500/30 bg-orange-500/10",
  },
  {
    label: "Clien\u021Bi total",
    value: "127",
    description: "+4 luna aceasta",
    color: "text-green-400",
    accent: "border-green-500/30 bg-green-500/10",
  },
  {
    label: "Venituri lun\u0103",
    value: "45.200 RON",
    description: "+12% fa\u021B\u0103 de luna trecut\u0103",
    color: "text-emerald-400",
    accent: "border-emerald-500/30 bg-emerald-500/10",
  },
];

const recentActivity = [
  {
    time: "10:32",
    text: "Programare nou\u0103: Andrei Popescu - Schimb ulei \u0219i filtre (BMW X3)",
  },
  {
    time: "09:45",
    text: "Job ALB-0412 actualizat: IN_REPARATIE \u2192 IN_PROBA",
  },
  {
    time: "09:15",
    text: "Estimare AI trimis\u0103: Dacia Duster 2019 - Bar\u0103 fa\u021B\u0103 lovit\u0103",
  },
  {
    time: "08:50",
    text: "Client nou \u00eenregistrat: Maria Ionescu (0745 123 456)",
  },
  {
    time: "Ieri",
    text: "Job ALB-0410 finalizat \u0219i predat: VW Golf 7 - Revizie complet\u0103",
  },
];

export default function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-sm text-[#8B8D97] mt-1">
          Bine ai venit \u00een panoul de administrare Albatros A Service
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

      {/* Ac\u021Biuni rapide */}
      <div className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
        <div className="p-6 border-b border-white/[0.08]">
          <h2 className="text-base font-semibold text-white">
            Ac\u021Biuni rapide
          </h2>
        </div>
        <div className="p-6 flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-[#FF2D2D] text-[#050505] hover:bg-[#FF2D2D]/90"
          >
            <Link href="/admin/programari">+ Programare nou\u0103</Link>
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

      {/* Activitate recent\u0103 */}
      <div className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
        <div className="p-6 border-b border-white/[0.08]">
          <h2 className="text-base font-semibold text-white">
            Activitate recent\u0103
          </h2>
        </div>
        <div className="p-6">
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
        </div>
      </div>
    </div>
  );
}
