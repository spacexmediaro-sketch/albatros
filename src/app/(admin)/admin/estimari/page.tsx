import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generatePageMetadata } from "@/lib/seo";
import { db } from "@/lib/db";

export const metadata = generatePageMetadata({
  title: "Estimări AI - Admin",
  description: "Coadă estimări AI Albatros A Service",
  path: "/admin/estimari",
  noIndex: true,
});

const statusConfig: Record<string, { label: string; color: string }> = {
  PENDING_REVIEW: {
    label: "Așteaptă revizuire",
    color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  },
  REVIEWED: {
    label: "Revizuit",
    color: "bg-[#C9A84C]/10 text-[#C9A84C] border-[#C9A84C]/30",
  },
  OFFER_SENT: {
    label: "Ofertă trimisă",
    color: "bg-green-500/10 text-green-400 border-green-500/30",
  },
  BOOKED: {
    label: "Programat",
    color: "bg-[#C9A84C]/10 text-[#C9A84C] border-[#C9A84C]/30",
  },
};

export default async function EstimariPage() {
  const estimates = await db.estimate.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Estimări AI</h1>
          <p className="text-sm text-[#8B8D97] mt-1">
            {estimates.length} estimări
          </p>
        </div>
      </div>

      {estimates.length === 0 ? (
        <div className="bg-[#0F1017] border border-white/[0.08] rounded-2xl p-8 text-center">
          <p className="text-[#8B8D97]">Nicio estimare AI încă.</p>
          <p className="text-sm text-[#4A4B55] mt-1">
            Estimările vor apărea aici când clienții folosesc estimatorul de pe site.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {estimates.map((estimate) => {
            const config = statusConfig[estimate.status] ?? {
              label: estimate.status,
              color: "bg-white/10 text-[#8B8D97] border-white/[0.08]",
            };
            const carInfo =
              typeof estimate.carInfo === "object" && estimate.carInfo !== null
                ? JSON.stringify(estimate.carInfo)
                : String(estimate.carInfo);

            return (
              <div
                key={estimate.id}
                className="bg-[#0F1017] border border-white/[0.08] rounded-2xl"
              >
                <div className="p-6 border-b border-white/[0.08]">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-semibold text-white truncate">
                      {carInfo}
                    </h3>
                    <Badge
                      variant="outline"
                      className={`shrink-0 text-[10px] ${config.color}`}
                    >
                      {config.label}
                    </Badge>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="bg-white/5 border border-white/[0.08] rounded-lg p-3">
                    <p className="text-xs text-[#4A4B55] mb-1">Estimare cost AI</p>
                    <p className="text-lg font-bold text-white">
                      {estimate.estimatedMin.toLocaleString("ro-RO")} -{" "}
                      {estimate.estimatedMax.toLocaleString("ro-RO")} RON
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#4A4B55]">
                    <span>{estimate.imageUrls.length} imagini atașate</span>
                    <span>
                      {estimate.createdAt.toLocaleDateString("ro-RO")}{" "}
                      {estimate.createdAt.toLocaleTimeString("ro-RO", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>

                  {estimate.finalQuote && (
                    <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
                      <p className="text-xs text-green-400/70 mb-1">Ofertă finală</p>
                      <p className="text-lg font-bold text-green-400">
                        {estimate.finalQuote.toLocaleString("ro-RO")} RON
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
