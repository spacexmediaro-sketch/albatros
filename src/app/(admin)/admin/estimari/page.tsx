import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Estim\u0103ri AI - Admin",
  description: "Coad\u0103 estim\u0103ri AI Albatros A Service",
  path: "/admin/estimari",
  noIndex: true,
});

const mockEstimates = [
  {
    id: "1",
    carInfo: "Dacia Duster 2019 Diesel, 85.000 km",
    description: "Bar\u0103 fa\u021B\u0103 lovit\u0103 + far st\u00e2ng spart",
    estimatedMin: 1200,
    estimatedMax: 1800,
    status: "PENDING_REVIEW",
    statusLabel: "A\u0219teapt\u0103 revizuire",
    statusColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    createdAt: "2026-05-19 09:15",
    images: 3,
  },
  {
    id: "2",
    carInfo: "VW Passat B8 2020 Diesel, 62.000 km",
    description: "Zgomot suspensie fa\u021B\u0103 dreapta la denivel\u0103ri",
    estimatedMin: 400,
    estimatedMax: 900,
    status: "REVIEWED",
    statusLabel: "Revizuit",
    statusColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    createdAt: "2026-05-18 14:30",
    images: 1,
  },
  {
    id: "3",
    carInfo: "Renault Clio 4 2017 Benzin\u0103, 120.000 km",
    description: "Motor porne\u0219te greu diminea\u021Ba, fum alb la evacuare",
    estimatedMin: 600,
    estimatedMax: 2500,
    status: "OFFER_SENT",
    statusLabel: "Ofert\u0103 trimis\u0103",
    statusColor: "bg-green-500/10 text-green-400 border-green-500/30",
    createdAt: "2026-05-17 11:00",
    images: 2,
  },
];

export default function EstimariPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Estim\u0103ri AI</h1>
          <p className="text-sm text-[#8B8D97] mt-1">
            {mockEstimates.length} estim\u0103ri \u00een coad\u0103
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockEstimates.map((estimate) => (
          <div
            key={estimate.id}
            className="bg-[#0F1017] border border-white/[0.08] rounded-2xl"
          >
            <div className="p-6 border-b border-white/[0.08]">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold text-white">
                  {estimate.carInfo}
                </h3>
                <Badge
                  variant="outline"
                  className={`shrink-0 text-[10px] ${estimate.statusColor}`}
                >
                  {estimate.statusLabel}
                </Badge>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <p className="text-sm text-[#8B8D97]">{estimate.description}</p>

              <div className="bg-white/5 border border-white/[0.08] rounded-lg p-3">
                <p className="text-xs text-[#4A4B55] mb-1">Estimare cost AI</p>
                <p className="text-lg font-bold text-white">
                  {estimate.estimatedMin.toLocaleString("ro-RO")} -{" "}
                  {estimate.estimatedMax.toLocaleString("ro-RO")} RON
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-[#4A4B55]">
                <span>{estimate.images} imagini ata\u0219ate</span>
                <span>{estimate.createdAt}</span>
              </div>

              <div className="flex gap-2 pt-2">
                {estimate.status === "PENDING_REVIEW" && (
                  <>
                    <Button
                      size="sm"
                      className="flex-1 bg-[#FF2D2D] text-[#050505] hover:bg-[#FF2D2D]/90"
                    >
                      Revizuie\u0219te
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-white/5 text-[#E2E4E9] border border-white/[0.08] hover:bg-white/10"
                    >
                      Trimite ofert\u0103
                    </Button>
                  </>
                )}
                {estimate.status === "REVIEWED" && (
                  <Button
                    size="sm"
                    className="w-full bg-[#FF2D2D] text-[#050505] hover:bg-[#FF2D2D]/90"
                  >
                    Trimite ofert\u0103
                  </Button>
                )}
                {estimate.status === "OFFER_SENT" && (
                  <Button
                    size="sm"
                    className="w-full bg-white/5 text-[#E2E4E9] border border-white/[0.08] hover:bg-white/10"
                  >
                    Vezi oferta
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
