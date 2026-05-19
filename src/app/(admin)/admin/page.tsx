import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    label: "Programări azi",
    value: "5",
    description: "2 confirmate, 3 în așteptare",
    color: "text-blue-600",
  },
  {
    label: "Lucrări active",
    value: "3",
    description: "1 în diagnoză, 2 în reparație",
    color: "text-orange-600",
  },
  {
    label: "Clienți total",
    value: "127",
    description: "+4 luna aceasta",
    color: "text-green-600",
  },
  {
    label: "Venituri lună",
    value: "45.200 RON",
    description: "+12% față de luna trecută",
    color: "text-emerald-600",
  },
];

const recentActivity = [
  {
    time: "10:32",
    text: "Programare nouă: Andrei Popescu - Schimb ulei și filtre (BMW X3)",
  },
  {
    time: "09:45",
    text: "Job ALB-0412 actualizat: IN_REPARATIE → IN_PROBA",
  },
  {
    time: "09:15",
    text: "Estimare AI trimisă: Dacia Duster 2019 - Bară față lovită",
  },
  {
    time: "08:50",
    text: "Client nou înregistrat: Maria Ionescu (0745 123 456)",
  },
  {
    time: "Ieri",
    text: "Job ALB-0410 finalizat și predat: VW Golf 7 - Revizie completă",
  },
];

export default function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Bine ai venit în panoul de administrare Albatros A Service
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className={`text-2xl font-bold mt-1 ${stat.color}`}>
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Acțiuni rapide */}
      <Card>
        <CardHeader>
          <CardTitle>Acțiuni rapide</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/admin/programari">+ Programare nouă</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/admin/masini-service">+ Job service nou</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/admin/blog">+ Articol nou</Link>
          </Button>
        </CardContent>
      </Card>

      {/* Activitate recentă */}
      <Card>
        <CardHeader>
          <CardTitle>Activitate recentă</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-sm border-b last:border-0 pb-3 last:pb-0"
              >
                <span className="text-xs font-mono text-muted-foreground w-12 shrink-0 pt-0.5">
                  {item.time}
                </span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
