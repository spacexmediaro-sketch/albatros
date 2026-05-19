"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type JobStatus =
  | "RECEPTIONAT"
  | "IN_DIAGNOZA"
  | "ASTEAPTA_PIESE"
  | "IN_REPARATIE"
  | "IN_PROBA"
  | "FINALIZAT"
  | "PREDAT";

interface MockJob {
  id: string;
  trackingCode: string;
  car: string;
  plateNumber: string;
  client: string;
  status: JobStatus;
  receivedAt: string;
  estimatedReady: string;
}

const statusColumns: { status: JobStatus; label: string; color: string }[] = [
  { status: "RECEPTIONAT", label: "Recepționat", color: "bg-gray-100" },
  { status: "IN_DIAGNOZA", label: "În diagnoză", color: "bg-blue-50" },
  {
    status: "ASTEAPTA_PIESE",
    label: "Așteaptă piese",
    color: "bg-yellow-50",
  },
  { status: "IN_REPARATIE", label: "În reparație", color: "bg-orange-50" },
  { status: "IN_PROBA", label: "În probă", color: "bg-purple-50" },
  { status: "FINALIZAT", label: "Finalizat", color: "bg-green-50" },
];

const statusBadgeColor: Record<JobStatus, string> = {
  RECEPTIONAT: "bg-gray-200 text-gray-800 border-gray-300",
  IN_DIAGNOZA: "bg-blue-100 text-blue-800 border-blue-200",
  ASTEAPTA_PIESE: "bg-yellow-100 text-yellow-800 border-yellow-200",
  IN_REPARATIE: "bg-orange-100 text-orange-800 border-orange-200",
  IN_PROBA: "bg-purple-100 text-purple-800 border-purple-200",
  FINALIZAT: "bg-green-100 text-green-800 border-green-200",
  PREDAT: "bg-emerald-100 text-emerald-800 border-emerald-200",
};

const mockJobs: MockJob[] = [
  {
    id: "1",
    trackingCode: "ALB-0412",
    car: "BMW X3 2020 Diesel",
    plateNumber: "PH-12-ABC",
    client: "Andrei Popescu",
    status: "IN_REPARATIE",
    receivedAt: "2026-05-17 08:30",
    estimatedReady: "2026-05-20",
  },
  {
    id: "2",
    trackingCode: "ALB-0413",
    car: "VW Golf 7 2018 Benzină",
    plateNumber: "PH-45-DEF",
    client: "Elena Stanciu",
    status: "IN_DIAGNOZA",
    receivedAt: "2026-05-18 10:00",
    estimatedReady: "2026-05-21",
  },
  {
    id: "3",
    trackingCode: "ALB-0414",
    car: "Dacia Duster 2021 Diesel",
    plateNumber: "B-99-GHI",
    client: "Gheorghe Dumitrescu",
    status: "RECEPTIONAT",
    receivedAt: "2026-05-19 08:00",
    estimatedReady: "2026-05-22",
  },
  {
    id: "4",
    trackingCode: "ALB-0411",
    car: "Skoda Octavia 2019 Diesel",
    plateNumber: "PH-78-JKL",
    client: "Mihai Radu",
    status: "FINALIZAT",
    receivedAt: "2026-05-15 09:00",
    estimatedReady: "2026-05-19",
  },
];

function getTimeElapsed(receivedAt: string): string {
  const received = new Date(receivedAt);
  const now = new Date("2026-05-19T12:00:00");
  const diffMs = now.getTime() - received.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  if (diffHours < 24) return `${diffHours}h`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}z ${diffHours % 24}h`;
}

export default function MasiniServicePage() {
  return (
    <div className="max-w-full mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Mașini Service</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Tracker lucrări în curs ({mockJobs.length} mașini)
          </p>
        </div>
        <Button>+ Job nou</Button>
      </div>

      {/* Kanban board */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {statusColumns.map((col) => {
          const colJobs = mockJobs.filter((j) => j.status === col.status);
          return (
            <div
              key={col.status}
              className={`min-w-[280px] flex-1 rounded-xl p-3 ${col.color}`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-sm">{col.label}</h3>
                <Badge variant="secondary" className="text-xs">
                  {colJobs.length}
                </Badge>
              </div>

              <div className="space-y-3">
                {colJobs.map((job) => (
                  <Card key={job.id} className="shadow-sm">
                    <CardContent className="p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-blue-700">
                          {job.trackingCode}
                        </span>
                        <Badge
                          variant="outline"
                          className={`text-[10px] ${statusBadgeColor[job.status]}`}
                        >
                          {getTimeElapsed(job.receivedAt)}
                        </Badge>
                      </div>
                      <p className="font-medium text-sm">{job.car}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{job.plateNumber}</span>
                        <span>{job.client}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Estimare: {job.estimatedReady}
                      </p>
                    </CardContent>
                  </Card>
                ))}
                {colJobs.length === 0 && (
                  <p className="text-xs text-muted-foreground text-center py-8">
                    Niciun job
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
