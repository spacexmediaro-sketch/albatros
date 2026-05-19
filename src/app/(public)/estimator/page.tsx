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
  "Altă marcă",
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
      zone: "Bara față",
      severity: "Medie",
      description: "Fisură și deformare bara față, necesită înlocuire.",
    },
    {
      zone: "Aripă stânga față",
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
    "Tinichigerie aripă stânga față — îndreptare și pregătire",
    "Vopsire aripă stânga față",
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
      return "bg-yellow-100 text-yellow-800 border-yellow-300";
    case "Medie":
      return "bg-orange-100 text-orange-800 border-orange-300";
    case "Severă":
      return "bg-red-100 text-red-800 border-red-300";
    default:
      return "bg-gray-100 text-gray-800 border-gray-300";
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
      <section className="relative overflow-hidden bg-[#0A2540] bg-grid-pattern px-4 py-20 sm:px-6 lg:px-8">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#E63946]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-60 w-60 rounded-full bg-[#3B82F6]/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-[#E63946]/20 px-4 py-1.5 text-sm font-semibold text-[#E63946]">
            {"Nou \u2014 Tehnologie AI"}
          </span>
          <h1 className="mt-4 font-[family-name:var(--font-dm-serif)] text-4xl text-white sm:text-5xl">
            Estimator avarii auto cu{" "}
            <span className="gradient-text">AI</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Încarcă fotografii cu avariile mașinii tale și primești o estimare
            instantanee a costurilor de reparație. Tehnologia noastră AI
            analizează imaginile și identifică daunele, operațiile necesare și un
            interval de preț orientativ.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Upload Section */}
          <div>
            <Label className="mb-2 block text-sm font-semibold text-[#0A2540]">
              Fotografii avarii (1–4 imagini)
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
                  ? "border-[#E63946] bg-red-50 shadow-lg shadow-[#E63946]/10"
                  : "border-gray-300 bg-gray-50 hover:border-transparent hover:bg-gradient-to-br hover:from-[#E63946]/5 hover:to-[#3B82F6]/5 hover:shadow-lg hover:shadow-[#E63946]/5"
              }`}
              style={
                !dragOver
                  ? {
                      backgroundImage:
                        "linear-gradient(white, white), linear-gradient(135deg, #E63946, #3B82F6)",
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                    }
                  : undefined
              }
              onClick={() =>
                document.getElementById("file-upload")?.click()
              }
            >
              <svg
                className="mb-3 h-10 w-10 text-gray-400 transition-colors group-hover:text-[#E63946]"
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
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-[#E63946]">
                  Click pentru upload
                </span>{" "}
                sau trage imaginile aici
              </p>
              <p className="mt-1 text-xs text-gray-400">
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
                    className="group relative h-24 w-24 overflow-hidden rounded-lg border border-gray-200"
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
                      className="absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/60 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Form Fields — Glassmorphism */}
          <div className="mt-8 rounded-2xl border border-white/20 bg-white/60 p-6 shadow-xl backdrop-blur-sm sm:p-8">
            <h3 className="mb-5 text-lg font-semibold text-[#0A2540]">
              Detalii vehicul
            </h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="marca" className="mb-1.5 block text-sm font-medium text-[#0A2540]">
                  Marca *
                </Label>
                <select
                  id="marca"
                  value={marca}
                  onChange={(e) => setMarca(e.target.value)}
                  className="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 outline-none"
                >
                  <option value="">Selectează marca</option>
                  {MARCI.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label htmlFor="model" className="mb-1.5 block text-sm font-medium text-[#0A2540]">
                  Model *
                </Label>
                <Input
                  id="model"
                  placeholder="ex: Serie 3, Golf, Logan"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="an" className="mb-1.5 block text-sm font-medium text-[#0A2540]">
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
                />
              </div>

              <div>
                <Label htmlFor="culoare" className="mb-1.5 block text-sm font-medium text-[#0A2540]">
                  Culoare
                </Label>
                <Input
                  id="culoare"
                  placeholder="ex: Negru metalic"
                  value={culoare}
                  onChange={(e) => setCuloare(e.target.value)}
                />
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="descriere" className="mb-1.5 block text-sm font-medium text-[#0A2540]">
                  Descrierea problemei
                </Label>
                <Textarea
                  id="descriere"
                  rows={3}
                  placeholder="Descrieți pe scurt ce s-a întâmplat — coliziune, zgârieturi, grindină etc."
                  value={descriere}
                  onChange={(e) => setDescriere(e.target.value)}
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
              className="bg-[#E63946] px-8 py-3 text-base font-semibold text-white hover:bg-[#d42d3a] disabled:opacity-50"
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
                <Badge className="bg-gradient-to-r from-[#E63946] to-[#3B82F6] px-6 py-2 text-base font-bold text-white shadow-lg">
                  Încredere analiză: {result.confidence}%
                </Badge>
              </div>

              {/* Damages Detected */}
              <div>
                <h2 className="mb-4 font-[family-name:var(--font-dm-serif)] text-2xl text-[#0A2540]">
                  Avarii detectate
                </h2>
                <div className="grid gap-4 sm:grid-cols-3">
                  {result.damages.map((d) => (
                    <Card key={d.zone} className="card-hover relative overflow-hidden">
                      {/* Gradient accent at top */}
                      <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#E63946] to-[#3B82F6]" />
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-[#0A2540]">
                            {d.zone}
                          </CardTitle>
                          <span
                            className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${severityColor(d.severity)}`}
                          >
                            {d.severity}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">{d.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Repair Operations */}
              <div>
                <h2 className="mb-4 font-[family-name:var(--font-dm-serif)] text-2xl text-[#0A2540]">
                  Operații de reparație
                </h2>
                <Card>
                  <CardContent>
                    <ul className="space-y-2">
                      {result.operations.map((op, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#E63946]" />
                          {op}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Cost Estimate */}
              <div>
                <h2 className="mb-4 font-[family-name:var(--font-dm-serif)] text-2xl text-[#0A2540]">
                  Estimare cost
                </h2>
                <Card className="glow-pulse relative overflow-hidden border-2 border-[#0A2540]/10">
                  {/* Gradient accent at top */}
                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#E63946] to-[#3B82F6]" />
                  <CardContent className="flex flex-col items-center py-8">
                    <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                      Interval estimat
                    </p>
                    <p className="mt-2 bg-gradient-to-r from-[#0A2540] to-[#3B82F6] bg-clip-text text-5xl font-bold text-transparent">
                      {result.costMin.toLocaleString("ro-RO")} –{" "}
                      {result.costMax.toLocaleString("ro-RO")} LEI
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      inclusiv manoperă și piese
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Warnings */}
              {result.warnings.length > 0 && (
                <div>
                  <h2 className="mb-4 font-[family-name:var(--font-dm-serif)] text-2xl text-[#0A2540]">
                    Atenționări
                  </h2>
                  <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-5">
                    <ul className="space-y-2">
                      {result.warnings.map((w, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-yellow-900">
                          <span className="mt-0.5 text-yellow-600">{"\u26A0"}</span>
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Disclaimer */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-center">
                <p className="text-sm text-gray-600">
                  Estimarea este orientativă, prețul final se stabilește la
                  inspecția fizică. Nu reprezintă ofertă fermă.
                </p>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Link href="/programare">
                  <Button
                    size="lg"
                    className="bg-[#E63946] px-8 py-3 text-base font-semibold text-white hover:bg-[#d42d3a]"
                  >
                    Programează inspecție gratuită
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
