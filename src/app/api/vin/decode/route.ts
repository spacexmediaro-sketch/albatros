import { NextRequest, NextResponse } from "next/server";
import { vinSchema } from "@/lib/validation/schemas";

// ---------------------------------------------------------------------------
// VIN checksum validation (position 9 check digit, standard algorithm)
// ---------------------------------------------------------------------------

const TRANSLITERATION: Record<string, number> = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8,
  J: 1, K: 2, L: 3, M: 4, N: 5, P: 7, R: 9,
  S: 2, T: 3, U: 4, V: 5, W: 6, X: 7, Y: 8, Z: 9,
  "0": 0, "1": 1, "2": 2, "3": 3, "4": 4,
  "5": 5, "6": 6, "7": 7, "8": 8, "9": 9,
};

const WEIGHTS = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];

function validateVinChecksum(vin: string): boolean {
  const upper = vin.toUpperCase();
  let sum = 0;
  for (let i = 0; i < 17; i++) {
    const val = TRANSLITERATION[upper[i]];
    if (val === undefined) return false;
    sum += val * WEIGHTS[i];
  }
  const remainder = sum % 11;
  const expected = remainder === 10 ? "X" : String(remainder);
  return upper[8] === expected;
}

// ---------------------------------------------------------------------------
// Simple in-memory cache (avoids hammering NHTSA for the same VIN)
// Rate limiting is handled by the global middleware — no need to duplicate here
// ---------------------------------------------------------------------------

interface CacheEntry {
  data: VinDecodeResult;
  cachedAt: number;
}

const cache = new Map<string, CacheEntry>();
const CACHE_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

// ---------------------------------------------------------------------------
// NHTSA response types
// ---------------------------------------------------------------------------

// DecodeVinValues endpoint returns a single Results[0] object with named keys
type NhtsaRecord = Record<string, string>;

interface VinDecodeResult {
  vin: string;
  make: string | null;
  model: string | null;
  year: string | null;
  fuelType: string | null;
  bodyClass: string | null;
  engineCylinders: string | null;
  displacementL: string | null;
  driveType: string | null;
  transmission: string | null;
  engineConfiguration: string | null;
  country: string | null;
}

// ---------------------------------------------------------------------------
// Helper: treat NHTSA's "Not Applicable" / empty strings as null
// ---------------------------------------------------------------------------

function clean(val: string | undefined): string | null {
  if (!val || val.trim() === "" || val === "Not Applicable" || val === "0") {
    return null;
  }
  return val.trim();
}

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------

export async function GET(request: NextRequest) {
  const raw = request.nextUrl.searchParams.get("vin");

  if (!raw) {
    return NextResponse.json(
      { success: false, error: "Parametrul VIN lipsește" },
      { status: 400 },
    );
  }

  const vin = raw.toUpperCase().trim();

  // Zod: 17 chars + no I/O/Q
  const parsed = vinSchema.safeParse(vin);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: parsed.error.errors[0].message },
      { status: 400 },
    );
  }

  // Checksum validation (position 9)
  // NOTE: Many European VINs pre-1981 or non-US-spec vehicles don't follow
  // the North-American checksum standard, so we warn rather than hard-reject.
  const checksumValid = validateVinChecksum(vin);

  // Serve from cache if available
  const cached = cache.get(vin);
  if (cached && Date.now() - cached.cachedAt < CACHE_TTL_MS) {
    return NextResponse.json({
      success: true,
      checksumValid,
      fromCache: true,
      data: cached.data,
    });
  }

  // Call NHTSA DecodeVinValues — returns named fields in Results[0]
  // This endpoint is free, no API key required.
  let nhtsaRecord: NhtsaRecord;
  try {
    const res = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/${encodeURIComponent(vin)}?format=json`,
      {
        // Next.js fetch cache: revalidate every 30 days on the server cache layer too
        next: { revalidate: 60 * 60 * 24 * 30 },
        signal: AbortSignal.timeout(8000), // 8 s timeout
      },
    );

    if (!res.ok) {
      return NextResponse.json(
        { success: false, error: `API NHTSA indisponibil (HTTP ${res.status})` },
        { status: 502 },
      );
    }

    const body = await res.json() as { Results: NhtsaRecord[] };

    if (!body.Results || body.Results.length === 0) {
      return NextResponse.json(
        { success: false, error: "Niciun rezultat returnat de API-ul NHTSA" },
        { status: 502 },
      );
    }

    nhtsaRecord = body.Results[0];
  } catch (err) {
    const isTimeout = err instanceof Error && err.name === "TimeoutError";
    console.error("VIN decode fetch error:", err);
    return NextResponse.json(
      {
        success: false,
        error: isTimeout
          ? "API-ul NHTSA nu a răspuns în timp util. Încearcă din nou."
          : "Eroare de rețea la decodarea VIN. Încearcă din nou.",
      },
      { status: 502 },
    );
  }

  // Map named NHTSA fields to our response shape
  const result: VinDecodeResult = {
    vin,
    make: clean(nhtsaRecord.Make),
    model: clean(nhtsaRecord.Model),
    year: clean(nhtsaRecord.ModelYear),
    fuelType: clean(nhtsaRecord.FuelTypePrimary),
    bodyClass: clean(nhtsaRecord.BodyClass),
    engineCylinders: clean(nhtsaRecord.EngineCylinders),
    displacementL: clean(nhtsaRecord.DisplacementL),
    driveType: clean(nhtsaRecord.DriveType),
    transmission: clean(nhtsaRecord.TransmissionStyle),
    engineConfiguration: clean(nhtsaRecord.EngineConfiguration),
    country: clean(nhtsaRecord.PlantCountry),
  };

  // Store in memory cache
  cache.set(vin, { data: result, cachedAt: Date.now() });

  return NextResponse.json({
    success: true,
    checksumValid,
    fromCache: false,
    data: result,
  });
}
