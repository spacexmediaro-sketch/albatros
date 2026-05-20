"use client";

import { useState, useCallback, type DragEvent, type ChangeEvent } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

const MARCI = [
  "BMW",
  "Audi",
  "VW",
  "Mercedes",
  "Dacia",
  "Ford",
  "Opel",
  "Renault",
  "Hyundai",
  "Skoda",
  "Peugeot",
  "Fiat",
  "Volvo",
  "Nissan",
  "Alta marca",
] as const;

interface DamageResult {
  damages: { zone: string; severity: string; description: string }[];
  operations: string[];
  costMin: number;
  costMax: number;
  confidence: number;
  warnings: string[];
}

const MOCK_RESULT: DamageResult = {
  damages: [
    {
      zone: "Bară față",
      severity: "Medie",
      description: "Fisură și deformare bară față, necesită înlocuire.",
    },
    {
      zone: "Aripă stângă față",
      severity: "Ușoară",
      description: "Zgârieturi superficiale și lovituri minore pe aripă.",
    },
    {
      zone: "Far stânga",
      severity: "Severă",
      description: "Far spart, necesită înlocuire completă.",
    },
  ],
  operations: [
    "Demontare / montare bară față",
    "Înlocuire bară față (piesă nouă)",
    "Tinichigerie aripă stângă față — îndreptare și pregătire",
    "Vopsire aripă stângă față",
    "Înlocuire far stânga",
    "Reglaj faruri",
    "Verificare senzori parcare",
  ],
  costMin: 2800,
  costMax: 4200,
  confidence: 82,
  warnings: [
    "Estimarea nu include eventuale avarii ascunse la structura interioară.",
    "Prețul pieselor poate varia în funcție de disponibilitate și producător.",
    "Culoarea poate necesita bitonare pentru potrivire perfectă.",
  ],
};

function severityColor(severity: string) {
  switch (severity) {
    case "Ușoară":
      return "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20";
    case "Medie":
      return "bg-[#F97316]/10 text-[#F97316] border-[#F97316]/20";
    case "Severă":
      return "bg-[#EF4444]/10 text-[#EF4444] border-[#EF4444]/20";
    default:
      return "bg-white/5 text-[#8B8D97] border-white/10";
  }
}

export default function EstimatorPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [marca, setMarca] = useState("");
  const [model, setModel] = useState("");
  const [an, setAn] = useState("");
  const [culoare, setCuloare] = useState("");
  const [descriere, setDescriere] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DamageResult | null>(null);

  const handleFiles = useCallback(
    (newFiles: FileList | null) => {
      if (!newFiles) return;
      const accepted = Array.from(newFiles)
        .filter((f) => f.type.startsWith("image/"))
        .slice(0, 4 - files.length);
      setFiles((prev) => [...prev, ...accepted].slice(0, 4));
    },
    [files.length]
  );

  const handleDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setDragOver(false);
      handleFiles(e.dataTransfer.files);
    },
    [handleFiles]
  );

  const handleFileInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      handleFiles(e.target.files);
      e.target.value = "";
    },
    [handleFiles]
  );

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setLoading(false);
      setResult(MOCK_RESULT);
    }, 3000);
  };

  const isValid = files.length > 0 && marca && model && an;

  return (
    <>
      {/* Dark Hero Section */}
      <section className="relative overflow-hidden bg-[#04040A] px-4 py-20 sm:px-6 lg:px-8">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,45,45,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,45,45,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#FF2D2D]/10 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-60 w-60 rounded-full bg-[#3B82F6]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          {/* Badge with pulsing dot */}
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FF2D2D]/20 bg-[#FF2D2D]/10 px-4 py-1.5 text-sm font-semibold text-[#FF2D2D]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF2D2D] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF2D2D]" />
            </span>
            Tehnologie AI
          </span>
          <h1 className="mt-4 font-[family-name:var(--font-dm-serif)] text-4xl text-white sm:text-5xl">
            Estimator avarii auto cu{" "}
            <span className="bg-gradient-to-r from-[#FF2D2D] to-[#3B82F6] bg-clip-text text-transparent">
              AI
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#8B8D97]">
            Încarcă fotografii cu avariile mașinii tale și primești o estimare
            instantanee a costurilor de reparație. Tehnologia noastră AI
            analizează imaginile și identifică daunele, operațiile necesare și un
            interval de preț orientativ.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#04040A] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Upload Section */}
          <div>
            <Label className="mb-2 block text-sm font-semibold text-[#E2E4E9]">
              Fotografii avarii (1-4 imagini)
            </Label>
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              className={`group relative flex min-h-[180px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed transition-all duration-300 ${
                dragOver
                  ? "border-[#FF2D2D] bg-[#FF2D2D]/10"
                  : "border-white/10 bg-[#080808] hover:border-[#FF2D2D]/40 hover:bg-[#FF2D2D]/5"
              }`}
              onClick={() =>
                document.getElementById("file-upload")?.click()
              }
            >
              <svg
                className="mb-3 h-10 w-10 text-[#8B8D97] transition-colors group-hover:text-[#FF2D2D]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 16V4m0 0l-4 4m4-4 4 4M4 14v4a2 2 0 002 2h12a2 2 0 002-2v-4"
                />
              </svg>
              <p className="text-sm text-[#8B8D97]">
                <span className="font-semibold text-[#FF2D2D]">
                  Click pentru upload
                </span>{" "}
                sau trage imaginile aici
              </p>
              <p className="mt-1 text-xs text-[#4A4B55]">
                JPG, PNG sau WebP — maximum 4 fotografii
              </p>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleFileInput}
              />
            </div>

            {/* File Previews */}
            {files.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {files.map((file, i) => (
                  <div
                    key={`${file.name}-${i}`}
                    className="group relative h-24 w-24 overflow-hidden rounded-lg border border-white/10 bg-[#0F1017]"
                  >
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="h-full w-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile(i);
                      }}
                      className="absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#0F1017]/80 text-xs text-white opacity-0 transition-opacity hover:bg-[#FF2D2D] group-hover:opacity-100"
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Form Fields — Dark Glassmorphism */}
          <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#0F1017] p-6 shadow-xl sm:p-8">
            <h3 className="mb-5 text-lg font-semibold text-white">
              Detalii vehicul
            </h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="marca" className="mb-1.5 block text-sm font-medium text-[#E2E4E9]">
                  Marca *
                </Label>
                <select
                  id="marca"
                  value={marca}
                  onChange={(e) => setMarca(e.target.value)}
                  className="flex h-9 w-full rounded-lg border border-white/10 bg-[#080808] px-3 py-1 text-sm text-white shadow-xs transition-colors placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-1 focus-visible:ring-[#FF2D2D]/30 focus-visible:outline-none"
                >
                  <option value="" className="bg-[#080808] text-[#4A4B55]">Selectează marca</option>
                  {MARCI.map((m) => (
                    <option key={m} value={m} className="bg-[#080808] text-white">
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label htmlFor="model" className="mb-1.5 block text-sm font-medium text-[#E2E4E9]">
                  Model *
                </Label>
                <Input
                  id="model"
                  placeholder="ex: Serie 3, Golf, Logan"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/30"
                />
              </div>

              <div>
                <Label htmlFor="an" className="mb-1.5 block text-sm font-medium text-[#E2E4E9]">
                  An fabricație *
                </Label>
                <Input
                  id="an"
                  type="number"
                  min={1990}
                  max={2026}
                  placeholder="ex: 2019"
                  value={an}
                  onChange={(e) => setAn(e.target.value)}
                  className="border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/30"
                />
              </div>

              <div>
                <Label htmlFor="culoare" className="mb-1.5 block text-sm font-medium text-[#E2E4E9]">
                  Culoare
                </Label>
                <Input
                  id="culoare"
                  placeholder="ex: Negru metalic"
                  value={culoare}
                  onChange={(e) => setCuloare(e.target.value)}
                  className="border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/30"
                />
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="descriere" className="mb-1.5 block text-sm font-medium text-[#E2E4E9]">
                  Descrierea problemei
                </Label>
                <Textarea
                  id="descriere"
                  rows={3}
                  placeholder="Descrieți pe scurt ce s-a întâmplat — coliziune, zgârieturi, grindină etc."
                  value={descriere}
                  onChange={(e) => setDescriere(e.target.value)}
                  className="border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/30"
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="mt-8 text-center">
            <Button
              size="lg"
              disabled={!isValid || loading}
              onClick={handleSubmit}
              className="bg-[#FF2D2D] px-8 py-3 text-base font-semibold text-[#050505] shadow-[0_0_20px_rgba(255,45,45,0.3)] transition-all hover:bg-[#FF5555] hover:shadow-[0_0_30px_rgba(255,45,45,0.5)] disabled:opacity-50 disabled:shadow-none"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Se analizează...
                </span>
              ) : (
                "Analizează avariile"
              )}
            </Button>
          </div>

          {/* Results */}
          {result && (
            <div className="mt-12 space-y-8">
              {/* Confidence Badge */}
              <div className="flex justify-center">
                <Badge className="bg-[#FF2D2D] px-6 py-2 text-base font-bold text-[#050505] shadow-[0_0_20px_rgba(255,45,45,0.3)]">
                  Încredere analiză: {result.confidence}%
                </Badge>
              </div>

              {/* Damages Detected */}
              <div>
                <h2 className="mb-4 font-[family-name:var(--font-dm-serif)] text-2xl text-white">
                  Avarii detectate
                </h2>
                <div className="grid gap-4 sm:grid-cols-3">
                  {result.damages.map((d) => (
                    <div
                      key={d.zone}
                      className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0F1017] p-5"
                    >
                      {/* Gradient accent at top */}
                      <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#FF2D2D] to-[#3B82F6]" />
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-white">
                          {d.zone}
                        </h3>
                        <span
                          className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${severityColor(d.severity)}`}
                        >
                          {d.severity}
                        </span>
                      </div>
                      <p className="mt-3 text-sm text-[#8B8D97]">{d.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Repair Operations */}
              <div>
                <h2 className="mb-4 font-[family-name:var(--font-dm-serif)] text-2xl text-white">
                  Operații de reparație
                </h2>
                <div className="rounded-2xl border border-white/[0.08] bg-[#0F1017] p-6">
                  <ul className="space-y-2">
                    {result.operations.map((op, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#8B8D97]">
                        <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D2D]" />
                        {op}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Cost Estimate */}
              <div>
                <h2 className="mb-4 font-[family-name:var(--font-dm-serif)] text-2xl text-white">
                  Estimare cost
                </h2>
                <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080808] p-1 animate-pulse-glow">
                  {/* Gradient top line */}
                  <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#FF2D2D] to-[#3B82F6]" />
                  {/* Gradient border glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF2D2D]/20 via-transparent to-[#3B82F6]/20 opacity-50" />
                  <div className="relative rounded-xl bg-[#080808] px-6 py-8">
                    <div className="flex flex-col items-center">
                      <p className="text-sm font-medium uppercase tracking-wider text-[#8B8D97]">
                        Interval estimat
                      </p>
                      <p className="mt-2 bg-gradient-to-r from-[#FF2D2D] to-[#3B82F6] bg-clip-text text-5xl font-bold text-transparent">
                        {result.costMin.toLocaleString("ro-RO")} -{" "}
                        {result.costMax.toLocaleString("ro-RO")} LEI
                      </p>
                      <p className="mt-1 text-sm text-[#4A4B55]">
                        inclusiv manoperă și piese
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Warnings */}
              {result.warnings.length > 0 && (
                <div>
                  <h2 className="mb-4 font-[family-name:var(--font-dm-serif)] text-2xl text-white">
                    Avertizări
                  </h2>
                  <div className="rounded-xl border border-[#F59E0B]/20 bg-[#F59E0B]/5 p-5">
                    <ul className="space-y-2">
                      {result.warnings.map((w, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#F59E0B]">
                          <span className="mt-0.5 text-[#F59E0B]">{"\u26A0"}</span>
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Disclaimer */}
              <div className="rounded-2xl border border-white/[0.08] bg-[#0F1017] p-5 text-center">
                <p className="text-sm text-[#8B8D97]">
                  Estimarea este orientativă, prețul final se stabilește la
                  inspecția fizică. Nu reprezintă ofertă fermă.
                </p>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Link href="/programare">
                  <Button
                    size="lg"
                    className="bg-[#FF2D2D] px-8 py-3 text-base font-semibold text-[#050505] shadow-[0_0_20px_rgba(255,45,45,0.3)] transition-all hover:bg-[#FF5555] hover:shadow-[0_0_30px_rgba(255,45,45,0.5)]"
                  >
                    Programează inspecție gratuită
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Inline style for glow-pulse animation */}
      <style jsx global>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 15px rgba(255, 45, 45, 0.15), 0 0 30px rgba(59, 130, 246, 0.1); }
          50% { box-shadow: 0 0 25px rgba(255, 45, 45, 0.3), 0 0 50px rgba(59, 130, 246, 0.2); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
