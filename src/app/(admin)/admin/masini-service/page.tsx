import { revalidatePath } from "next/cache";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { db } from "@/lib/db";
import type { JobStatus } from "@prisma/client";

const statusColumns: { status: JobStatus; label: string; color: string }[] = [
  { status: "RECEPTIONAT", label: "Recepționat", color: "bg-white/5 border border-white/[0.08]" },
  { status: "IN_DIAGNOZA", label: "În diagnoză", color: "bg-[#C9A84C]/5 border border-[#C9A84C]/20" },
  {
    status: "ASTEAPTA_PIESE",
    label: "Așteaptă piese",
    color: "bg-yellow-500/5 border border-yellow-500/20",
  },
  { status: "IN_REPARATIE", label: "În reparație", color: "bg-orange-500/5 border border-orange-500/20" },
  { status: "IN_PROBA", label: "În probă", color: "bg-[#C9A84C]/5 border border-[#C9A84C]/20" },
  { status: "FINALIZAT", label: "Finalizat", color: "bg-green-500/5 border border-green-500/20" },
];

const statusBadgeColor: Record<JobStatus, string> = {
  RECEPTIONAT: "bg-white/10 text-[#8B8D97] border-white/[0.08]",
  IN_DIAGNOZA: "bg-[#C9A84C]/10 text-[#C9A84C] border-[#C9A84C]/30",
  ASTEAPTA_PIESE: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  IN_REPARATIE: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  IN_PROBA: "bg-[#C9A84C]/10 text-[#C9A84C] border-[#C9A84C]/30",
  FINALIZAT: "bg-green-500/10 text-green-400 border-green-500/30",
  PREDAT: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
};

function getTimeElapsed(receivedAt: Date): string {
  const diffMs = Date.now() - receivedAt.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  if (diffHours < 24) return `${diffHours}h`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}z ${diffHours % 24}h`;
}

async function updateJobStatus(formData: FormData) {
  "use server";
  const jobId = formData.get("jobId") as string;
  const newStatus = formData.get("newStatus") as JobStatus;
  await db.serviceJob.update({
    where: { id: jobId },
    data: { status: newStatus },
  });
  await db.serviceJobEvent.create({
    data: {
      jobId,
      status: newStatus,
      message: `Status actualizat la ${newStatus}`,
    },
  });
  revalidatePath("/admin/masini-service");
}

export default async function MasiniServicePage() {
  const jobs = await db.serviceJob.findMany({
    where: { status: { not: "PREDAT" } },
    include: {
      car: {
        include: { user: { select: { name: true } } },
      },
    },
    orderBy: { receivedAt: "desc" },
  });

  return (
    <div className="max-w-full mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Mașini Service</h1>
          <p className="text-sm text-[#8B8D97] mt-1">
            Tracker lucrări în curs ({jobs.length} mașini)
          </p>
        </div>
      </div>

      {/* Kanban board */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {statusColumns.map((col) => {
          const colJobs = jobs.filter((j) => j.status === col.status);
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
                {colJobs.map((job) => {
                  const nextStatusIdx = statusColumns.findIndex(
                    (s) => s.status === job.status
                  );
                  const nextStatus =
                    nextStatusIdx < statusColumns.length - 1
                      ? statusColumns[nextStatusIdx + 1]
                      : null;

                  return (
                    <div
                      key={job.id}
                      className="bg-[#0F1017] border border-white/[0.08] rounded-xl shadow-sm"
                    >
                      <div className="p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-[#C9A84C]">
                            {job.trackingCode}
                          </span>
                          <Badge
                            variant="outline"
                            className={`text-[10px] ${statusBadgeColor[job.status]}`}
                          >
                            {getTimeElapsed(job.receivedAt)}
                          </Badge>
                        </div>
                        <p className="font-medium text-sm text-white">
                          {job.car.make} {job.car.model} {job.car.year}
                        </p>
                        <div className="flex items-center justify-between text-xs text-[#8B8D97]">
                          <span>{job.car.plateNumber || "—"}</span>
                          <span>{job.car.user?.name || "—"}</span>
                        </div>
                        {job.estimatedReady && (
                          <p className="text-xs text-[#4A4B55]">
                            Estimare: {job.estimatedReady.toLocaleDateString("ro-RO")}
                          </p>
                        )}
                        {nextStatus && (
                          <form action={updateJobStatus} className="pt-1">
                            <input type="hidden" name="jobId" value={job.id} />
                            <input
                              type="hidden"
                              name="newStatus"
                              value={nextStatus.status}
                            />
                            <Button
                              type="submit"
                              size="sm"
                              className="w-full text-xs bg-white/5 text-[#E2E4E9] border border-white/[0.08] hover:bg-white/10"
                            >
                              → {nextStatus.label}
                            </Button>
                          </form>
                        )}
                      </div>
                    </div>
                  );
                })}
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
