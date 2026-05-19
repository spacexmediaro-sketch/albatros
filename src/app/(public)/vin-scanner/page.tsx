"use client";

// TODO: SEO metadata should be added via a parent layout.tsx or by splitting
// this into a server component wrapper + client component, since 'use client'
// pages cannot export generateMetadata directly.

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/* ------------------------------------------------------------------ */
/*  VIN DECODE TABLES                                                  */
/* ------------------------------------------------------------------ */

const WMI_BRANDS: Record<string, string> = {
  WBA: "BMW", WBS: "BMW M", WBY: "BMW i", WVW: "Volkswagen", WV1: "Volkswagen",
  VF1: "Renault", VF7: "Citroen", VF3: "Peugeot", UU1: "Dacia", WF0: "Ford",
  WAU: "Audi", WDB: "Mercedes-Benz", WDD: "Mercedes-Benz", TMB: "Skoda",
  W0L: "Opel", ZFA: "Fiat", YV1: "Volvo", SJN: "Nissan", KMH: "Hyundai",
  WP0: "Porsche", SAL: "Land Rover", SAJ: "Jaguar", JTD: "Toyota",
};

const COUNTRY_MAP: Record<string, string> = {
  W: "Germania", V: "Franta", U: "Romania", Z: "Italia", S: "Marea Britanie",
  J: "Japonia", K: "Coreea de Sud", T: "Elvetia / Cehia", Y: "Suedia / Finlanda",
  "1": "SUA", "2": "Canada", "3": "Mexic", "4": "SUA", "5": "SUA",
  L: "China", M: "India / Indonezia",
};

const YEAR_CODES: Record<string, number> = {
  A: 2010, B: 2011, C: 2012, D: 2013, E: 2014, F: 2015, G: 2016, H: 2017,
  J: 2018, K: 2019, L: 2020, M: 2021, N: 2022, P: 2023, R: 2024, S: 2025,
  T: 2026, V: 2027, W: 2028, X: 2029, Y: 2030, "1": 2031, "2": 2032,
  "3": 2033, "4": 2034, "5": 2035, "6": 2036, "7": 2037, "8": 2038, "9": 2039,
};

const TRANSLITERATIONS: Record<string, number> = {
  A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,J:1,K:2,L:3,M:4,N:5,P:7,R:9,
  S:2,T:3,U:4,V:5,W:6,X:7,Y:8,Z:9,
  "0":0,"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,
};

const WEIGHTS = [8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2];

function validateVinChecksum(vin: string): boolean {
  const upper = vin.toUpperCase();
  let sum = 0;
  for (let i = 0; i < 17; i++) {
    const val = TRANSLITERATIONS[upper[i]];
    if (val === undefined) return false;
    sum += val * WEIGHTS[i];
  }
  const remainder = sum % 11;
  const checkChar = remainder === 10 ? "X" : String(remainder);
  return upper[8] === checkChar;
}

function isValidVinChars(vin: string): boolean {
  return /^[A-HJ-NPR-Z0-9]{17}$/i.test(vin);
}

interface DecodedVin {
  marca: string;
  model: string;
  an: string;
  tara: string;
  motor: string;
}

function decodeVin(vin: string): DecodedVin {
  const v = vin.toUpperCase();
  const wmi = v.substring(0, 3);
  const marca = WMI_BRANDS[wmi] || "Marca necunoscuta — verificare manuala necesara";
  const tara = COUNTRY_MAP[v[0]] || "Tara necunoscuta";
  const yearChar = v[9];
  const year = YEAR_CODES[yearChar];
  const an = year ? String(year) : "An necunoscut";

  return {
    marca,
    model: "Detectat din baza de date",
    an,
    tara,
    motor: "Disponibil dupa verificare completa",
  };
}

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function VinScannerPage() {
  const [vin, setVin] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DecodedVin | null>(null);
  const [showCamera, setShowCamera] = useState(false);

  const cleaned = vin.replace(/\s/g, "").toUpperCase();
  const hasCorrectLength = cleaned.length === 17;
  const hasValidChars = isValidVinChars(cleaned);
  const hasValidChecksum = hasCorrectLength && hasValidChars && validateVinChecksum(cleaned);
  const isValid = hasCorrectLength && hasValidChars && hasValidChecksum;

  const handleDecode = () => {
    if (!isValid) return;
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setResult(decodeVin(cleaned));
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#04040A] px-4 py-20 sm:px-6 lg:px-8">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,45,45,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,45,45,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#FF2D2D]/10 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-60 w-60 rounded-full bg-[#3B82F6]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FF2D2D]/20 bg-[#FF2D2D]/10 px-4 py-1.5 text-sm font-semibold text-[#FF2D2D]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF2D2D] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF2D2D]" />
            </span>
            Scanare instantanee
          </span>
          <h1 className="mt-4 font-[family-name:var(--font-dm-serif)] text-4xl text-white sm:text-5xl">
            Scanner{" "}
            <span className="bg-gradient-to-r from-[#FF2D2D] to-[#3B82F6] bg-clip-text text-transparent">
              VIN
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#8B8D97]">
            Introdu codul VIN al masinii tale si afla instant marca, anul de
            fabricatie, tara de origine si alte informatii decodate din cele 17
            caractere ale Vehicle Identification Number.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="bg-[#04040A] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-8">

          {/* Manual Input Card */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0F1017] p-6 sm:p-8">
            <h3 className="mb-5 text-lg font-semibold text-white">Introducere manuala VIN</h3>
            <div>
              <Label htmlFor="vin" className="mb-1.5 block text-sm font-medium text-[#E2E4E9]">
                Cod VIN (17 caractere)
              </Label>
              <Input
                id="vin"
                maxLength={17}
                placeholder="ex: WBAPH5C55BA123456"
                value={vin}
                onChange={(e) => {
                  setVin(e.target.value.toUpperCase());
                  setResult(null);
                }}
                className="border-white/10 bg-[#080808] font-mono text-lg tracking-widest text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/30"
              />
            </div>

            {/* Live validation indicators */}
            {cleaned.length > 0 && (
              <div className="mt-4 space-y-2">
                <ValidationRow ok={hasCorrectLength} label={`Lungime: ${cleaned.length}/17 caractere`} />
                <ValidationRow ok={hasValidChars} label="Caractere valide (fara I, O, Q)" />
                {hasCorrectLength && hasValidChars && (
                  <ValidationRow ok={hasValidChecksum} label="Cifra de control valida (pozitia 9)" />
                )}
              </div>
            )}

            <div className="mt-6 text-center">
              <Button
                size="lg"
                disabled={!isValid || loading}
                onClick={handleDecode}
                className="bg-[#FF2D2D] px-8 py-3 text-base font-semibold text-[#050505] shadow-[0_0_20px_rgba(255,45,45,0.3)] transition-all hover:bg-[#FF5555] hover:shadow-[0_0_30px_rgba(255,45,45,0.5)] disabled:opacity-50 disabled:shadow-none"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Se decodeaza...
                  </span>
                ) : (
                  "Decodeaza"
                )}
              </Button>
            </div>
          </div>

          {/* Camera Scan Card */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0F1017] p-6 sm:p-8">
            <h3 className="mb-4 text-lg font-semibold text-white">Scanare cu camera</h3>
            {!showCamera ? (
              <Button
                variant="outline"
                onClick={() => setShowCamera(true)}
                className="border-white/10 bg-[#080808] text-[#E2E4E9] hover:border-[#FF2D2D]/40 hover:bg-[#FF2D2D]/5 hover:text-white"
              >
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                </svg>
                Scaneaza cu camera
              </Button>
            ) : (
              <div className="rounded-xl border border-white/10 bg-[#080808] p-6 text-center">
                <svg className="mx-auto mb-3 h-10 w-10 text-[#4A4B55]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <p className="text-sm text-[#8B8D97]">
                  Functionalitatea de scanare cu camera va fi disponibila in curand.
                </p>
              </div>
            )}
          </div>

          {/* ── Decoded Result ── */}
          {result && (
            <div className="space-y-4">
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-white">
                Rezultat decodare
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <ResultCard label="Marca" value={result.marca} />
                <ResultCard label="Model" value={result.model} />
                <ResultCard label="An fabricatie" value={result.an} />
                <ResultCard label="Tara de origine" value={result.tara} />
                <ResultCard label="Tip motor" value={result.motor} className="sm:col-span-2" />
              </div>
            </div>
          )}

          {/* ── Ce este VIN-ul? ── */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0F1017] p-6 sm:p-8">
            <h3 className="mb-4 font-[family-name:var(--font-dm-serif)] text-xl text-white">
              Ce este VIN-ul?
            </h3>
            <p className="text-sm leading-relaxed text-[#8B8D97]">
              VIN (Vehicle Identification Number) este un cod unic de 17 caractere
              atribuit fiecarui vehicul fabricat. Contine informatii despre marca,
              modelul, anul de fabricatie, tara de origine si numarul de serie al
              masinii.
            </p>
            <h4 className="mt-5 mb-2 text-sm font-semibold text-[#E2E4E9]">
              Unde gasesti VIN-ul?
            </h4>
            <ul className="space-y-2">
              {[
                "Pe placa metalica vizibila prin parbriz, in partea de jos, stanga",
                "Pe eticheta de pe stalpul usii soferului (deschide usa si priviti pe cant)",
                "In certificatul de inmatriculare (talonul masinii), rubrica E",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#8B8D97]">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2D2D]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── CTA ── */}
          <div className="text-center">
            <Link href="/garaj">
              <Button
                size="lg"
                className="bg-[#FF2D2D] px-8 py-3 text-base font-semibold text-[#050505] shadow-[0_0_20px_rgba(255,45,45,0.3)] transition-all hover:bg-[#FF5555] hover:shadow-[0_0_30px_rgba(255,45,45,0.5)]"
              >
                Adauga masina in garajul virtual
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  SUB-COMPONENTS                                                     */
/* ------------------------------------------------------------------ */

function ValidationRow({ ok, label }: { ok: boolean; label: string }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      {ok ? (
        <svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="h-4 w-4 text-red-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}
      <span className={ok ? "text-emerald-400" : "text-red-400"}>{label}</span>
    </div>
  );
}

function ResultCard({ label, value, className = "" }: { label: string; value: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0F1017] p-5 ${className}`}>
      <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#FF2D2D] to-[#3B82F6]" />
      <p className="text-xs font-medium uppercase tracking-wider text-[#4A4B55]">{label}</p>
      <p className="mt-1 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}
