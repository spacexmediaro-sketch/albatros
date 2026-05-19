"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const STATUSES = [
  { key: "RECEPTIONAT", label: "Recepționat" },
  { key: "IN_DIAGNOZA", label: "În diagnoză" },
  { key: "ASTEAPTA_PIESE", label: "Așteaptă piese" },
  { key: "IN_REPARATIE", label: "În reparație" },
  { key: "IN_PROBA", label: "În probă" },
  { key: "FINALIZAT", label: "Finalizat" },
  { key: "PREDAT", label: "Predat" },
] as const;

type StatusKey = (typeof STATUSES)[number]["key"];

interface TimelineEvent {
  timestamp: string;
  status: StatusKey;
  message: string;
}

interface MockJob {
  code: string;
  vehicle: string;
  licensePlate: string;
  currentStatus: StatusKey;
  eta: string;
  events: TimelineEvent[];
}

const MOCK_JOB: MockJob = {
  code: "ALB-2024-0847",
  vehicle: "Volkswagen Passat B8 2.0 TDI",
  licensePlate: "PH 99 ABC",
  currentStatus: "IN_REPARATIE",
  eta: "2024-12-20",
  events: [
    {
      timestamp: "2024-12-16T09:15:00",
      status: "RECEPTIONAT",
      message:
        "Mașina a fost recepționată. Clientul semnalează pierdere de putere și fum la accelerare.",
    },
    {
      timestamp: "2024-12-16T11:30:00",
      status: "IN_DIAGNOZA",
      message:
        "Diagnosticare computerizată efectuată. Cod eroare P0299 — presiune turbo sub limită. Se verifică turbina și furtunurile de intercooler.",
    },
    {
      timestamp: "2024-12-17T14:00:00",
      status: "IN_REPARATIE",
      message:
        "Turbina a fost demontată pentru recondiționare. Se înlocuiesc garniturile și se verifică geometria variabilă.",
    },
  ],
};

function getStatusIndex(statusKey: StatusKey): number {
  return STATUSES.findIndex((s) => s.key === statusKey);
}

function formatDateTime(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getStatusLabel(key: StatusKey): string {
  return STATUSES.find((s) => s.key === key)?.label ?? key;
}

function SearchForm({
  initialCode,
  onSearch,
}: {
  initialCode?: string;
  onSearch: (code: string) => void;
}) {
  const [value, setValue] = useState(initialCode ?? "");

  return (
    <div className="flex w-full max-w-md gap-2">
      <Input
        type="text"
        placeholder="Ex: ALB-2024-0847"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === "Enter" && value.trim()) {
            onSearch(value.trim());
          }
        }}
        className="h-10 text-base"
      />
      <Button
        size="lg"
        className="bg-[#E63946] text-white hover:bg-[#d32f3c] shrink-0"
        onClick={() => {
          if (value.trim()) onSearch(value.trim());
        }}
      >
        Caută
      </Button>
    </div>
  );
}

function StatusStepper({ currentStatus }: { currentStatus: StatusKey }) {
  const activeIndex = getStatusIndex(currentStatus);

  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="flex min-w-[600px] items-start justify-between">
        {STATUSES.map((status, index) => {
          const isCompleted = index < activeIndex;
          const isCurrent = index === activeIndex;
          const isPending = index > activeIndex;

          return (
            <div key={status.key} className="flex flex-1 flex-col items-center relative">
              {/* Connector line */}
              {index > 0 && (
                <div
                  className={`absolute top-4 right-1/2 w-full h-0.5 -translate-y-1/2 ${
                    isCompleted ? "bg-[#0A2540]" : "bg-gray-200"
                  }`}
                  style={{ zIndex: 0 }}
                />
              )}

              {/* Circle */}
              <div
                className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all ${
                  isCompleted
                    ? "bg-[#0A2540] text-white"
                    : isCurrent
                      ? "bg-[#E63946] text-white ring-4 ring-[#E63946]/20"
                      : "bg-gray-200 text-gray-500"
                }`}
              >
                {isCompleted ? (
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>

              {/* Label */}
              <span
                className={`mt-2 text-center text-xs font-medium leading-tight ${
                  isCurrent
                    ? "text-[#E63946] font-semibold"
                    : isCompleted
                      ? "text-[#0A2540]"
                      : "text-gray-400"
                } ${isPending ? "" : ""}`}
              >
                {status.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="relative space-y-0">
      {events.map((event, index) => (
        <div key={index} className="relative flex gap-4 pb-8 last:pb-0">
          {/* Vertical line */}
          {index < events.length - 1 && (
            <div className="absolute left-[11px] top-6 h-full w-0.5 bg-gray-200" />
          )}

          {/* Dot */}
          <div
            className={`relative z-10 mt-1 h-6 w-6 shrink-0 rounded-full border-2 ${
              index === events.length - 1
                ? "border-[#E63946] bg-[#E63946]"
                : "border-[#0A2540] bg-[#0A2540]"
            }`}
          />

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <Badge
                variant={index === events.length - 1 ? "default" : "secondary"}
                className={
                  index === events.length - 1
                    ? "bg-[#E63946] text-white"
                    : ""
                }
              >
                {getStatusLabel(event.status)}
              </Badge>
              <span className="text-xs text-muted-foreground">
                {formatDateTime(event.timestamp)}
              </span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              {event.message}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function TrackerPage() {
  const router = useRouter();
  const params = useParams<{ code: string }>();
  const code = params.code;

  const isPlaceholder = code === "cauta";
  const showSearch = isPlaceholder || !code;

  // Demo: only show data for the mock code
  const job = !showSearch && code === "ALB-2024-0847" ? MOCK_JOB : null;
  const notFound = !showSearch && !job;

  function handleSearch(searchCode: string) {
    router.push(`/tracker/${encodeURIComponent(searchCode)}`);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[#0A2540] sm:text-4xl">
          Urmărire comandă service
        </h1>
        <p className="mt-3 text-muted-foreground">
          Introdu codul de urmărire primit la recepția mașinii pentru a vedea stadiul lucrării.
        </p>
      </div>

      {/* Search form — always visible */}
      <div className="flex justify-center mb-10">
        <SearchForm
          initialCode={showSearch ? "" : code}
          onSearch={handleSearch}
        />
      </div>

      {/* Empty state */}
      {showSearch && (
        <Card className="text-center">
          <CardContent className="py-12 px-6">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <svg
                className="h-8 w-8 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <p className="text-lg font-medium text-[#0A2540]">
              Introdu codul de urmărire
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Codul se găsește pe bonul de recepție sau în SMS-ul/email-ul primit la predarea mașinii.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Demo: încearcă codul <strong>ALB-2024-0847</strong>
            </p>
          </CardContent>
        </Card>
      )}

      {/* Not found */}
      {notFound && (
        <Card className="text-center border-[#E63946]/20">
          <CardContent className="py-12 px-6">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
              <svg
                className="h-8 w-8 text-[#E63946]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </div>
            <p className="text-lg font-medium text-[#0A2540]">
              Comanda nu a fost găsită
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Codul <strong className="text-foreground">{code}</strong> nu corespunde niciunei comenzi active.
              Verifică dacă l-ai introdus corect sau contactează-ne la{" "}
              <a
                href="tel:+40723177032"
                className="text-[#E63946] font-medium hover:underline"
              >
                0723 177 032
              </a>
              .
            </p>
          </CardContent>
        </Card>
      )}

      {/* Job found */}
      {job && (
        <div className="space-y-8">
          {/* Vehicle info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#0A2540]">
                {job.vehicle}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Număr înmatriculare:</span>{" "}
                  <strong>{job.licensePlate}</strong>
                </div>
                <div>
                  <span className="text-muted-foreground">Cod urmărire:</span>{" "}
                  <strong>{job.code}</strong>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Status stepper */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#0A2540]">
                Stadiu curent
              </CardTitle>
            </CardHeader>
            <CardContent>
              <StatusStepper currentStatus={job.currentStatus} />
            </CardContent>
          </Card>

          {/* ETA */}
          <Card className="border-[#E63946]/20 bg-red-50/30">
            <CardContent className="flex items-center gap-4 py-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E63946]/10">
                <svg
                  className="h-6 w-6 text-[#E63946]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-[#0A2540]">
                  Dată estimată de finalizare
                </p>
                <p className="text-lg font-semibold text-[#E63946]">
                  {new Date(job.eta).toLocaleDateString("ro-RO", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#0A2540]">
                Istoric actualizări
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Timeline events={[...job.events].reverse()} />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
