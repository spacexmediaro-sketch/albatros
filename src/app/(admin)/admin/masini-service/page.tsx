"use client";

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
  { status: "RECEPTIONAT", label: "Recep\u021Bionat", color: "bg-white/5 border border-white/[0.08]" },
  { status: "IN_DIAGNOZA", label: "\u00cen diagnoz\u0103", color: "bg-blue-500/5 border border-blue-500/20" },
  {
    status: "ASTEAPTA_PIESE",
    label: "A\u0219teapt\u0103 piese",
    color: "bg-yellow-500/5 border border-yellow-500/20",
  },
  { status: "IN_REPARATIE", label: "\u00cen repara\u021Bie", color: "bg-orange-500/5 border border-orange-500/20" },
  { status: "IN_PROBA", label: "\u00cen prob\u0103", color: "bg-purple-500/5 border border-purple-500/20" },
  { status: "FINALIZAT", label: "Finalizat", color: "bg-green-500/5 border border-green-500/20" },
];

const statusBadgeColor: Record<JobStatus, string> = {
  RECEPTIONAT: "bg-white/10 text-[#8B8D97] border-white/[0.08]",
  IN_DIAGNOZA: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  ASTEAPTA_PIESE: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  IN_REPARATIE: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  IN_PROBA: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  FINALIZAT: "bg-green-500/10 text-green-400 border-green-500/30",
  PREDAT: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
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
    car: "VW Golf 7 2018 Benzin\u0103",
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
          <h1 className="text-2xl font-bold text-white">Ma\u0219ini Service</h1>
          <p className="text-sm text-[#8B8D97] mt-1">
            Tracker lucr\u0103ri \u00een curs ({mockJobs.length} ma\u0219ini)
          </p>
        </div>
        <Button className="bg-[#FF2D2D] text-[#050505] hover:bg-[#FF2D2D]/90">
          + Job nou
        </Button>
      </div>

      {/* Kanban board */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {statusColumns.map((col) => {
          const colJobs = mockJobs.filter((j) => j.status === col.status);
          return (
            <div
              key={col.status}
              className={`min-w-[280px] flex-1 rounded-2xl p-3 ${col.color}`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-sm text-[#E2E4E9]">{col.label}</h3>
                <Badge
                  variant="secondary"
                  className="text-xs bg-white/10 text-[#8B8D97] border-0"
                >
                  {colJobs.length}
                </Badge>
              </div>

              <div className="space-y-3">
                {colJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-[#0F1017] border border-white/[0.08] rounded-xl shadow-sm"
                  >
                    <div className="p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-blue-400">
                          {job.trackingCode}
                        </span>
                        <Badge
                          variant="outline"
                          className={`text-[10px] ${statusBadgeColor[job.status]}`}
                        >
                          {getTimeElapsed(job.receivedAt)}
                        </Badge>
                      </div>
                      <p className="font-medium text-sm text-white">{job.car}</p>
                      <div className="flex items-center justify-between text-xs text-[#8B8D97]">
                        <span>{job.plateNumber}</span>
                        <span>{job.client}</span>
                      </div>
                      <p className="text-xs text-[#4A4B55]">
                        Estimare: {job.estimatedReady}
                      </p>
                    </div>
                  </div>
                ))}
                {colJobs.length === 0 && (
                  <p className="text-xs text-[#4A4B55] text-center py-8">
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
