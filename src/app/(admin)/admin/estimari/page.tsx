import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Estimări AI - Admin",
  description: "Coadă estimări AI Albatros A Service",
  path: "/admin/estimari",
  noIndex: true,
});

const mockEstimates = [
  {
    id: "1",
    carInfo: "Dacia Duster 2019 Diesel, 85.000 km",
    description: "Bară față lovită + far stâng spart",
    estimatedMin: 1200,
    estimatedMax: 1800,
    status: "PENDING_REVIEW",
    statusLabel: "Așteaptă revizuire",
    statusColor: "bg-yellow-100 text-yellow-800 border-yellow-200",
    createdAt: "2026-05-19 09:15",
    images: 3,
  },
  {
    id: "2",
    carInfo: "VW Passat B8 2020 Diesel, 62.000 km",
    description: "Zgomot suspensie față dreapta la denivelări",
    estimatedMin: 400,
    estimatedMax: 900,
    status: "REVIEWED",
    statusLabel: "Revizuit",
    statusColor: "bg-blue-100 text-blue-800 border-blue-200",
    createdAt: "2026-05-18 14:30",
    images: 1,
  },
  {
    id: "3",
    carInfo: "Renault Clio 4 2017 Benzină, 120.000 km",
    description: "Motor pornește greu dimineața, fum alb la evacuare",
    estimatedMin: 600,
    estimatedMax: 2500,
    status: "OFFER_SENT",
    statusLabel: "Ofertă trimisă",
    statusColor: "bg-green-100 text-green-800 border-green-200",
    createdAt: "2026-05-17 11:00",
    images: 2,
  },
];

export default function EstimariPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Estimări AI</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {mockEstimates.length} estimări în coadă
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockEstimates.map((estimate) => (
          <Card key={estimate.id}>
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-sm">{estimate.carInfo}</CardTitle>
                <Badge
                  variant="outline"
                  className={`shrink-0 text-[10px] ${estimate.statusColor}`}
                >
                  {estimate.statusLabel}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                {estimate.description}
              </p>

              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-xs text-muted-foreground mb-1">
                  Estimare cost AI
                </p>
                <p className="text-lg font-bold">
                  {estimate.estimatedMin.toLocaleString("ro-RO")} -{" "}
                  {estimate.estimatedMax.toLocaleString("ro-RO")} RON
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{estimate.images} imagini atașate</span>
                <span>{estimate.createdAt}</span>
              </div>

              <div className="flex gap-2 pt-2">
                {estimate.status === "PENDING_REVIEW" && (
                  <>
                    <Button size="sm" className="flex-1">
                      Revizuiește
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Trimite ofertă
                    </Button>
                  </>
                )}
                {estimate.status === "REVIEWED" && (
                  <Button size="sm" className="w-full">
                    Trimite ofertă
                  </Button>
                )}
                {estimate.status === "OFFER_SENT" && (
                  <Button variant="outline" size="sm" className="w-full">
                    Vezi oferta
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
