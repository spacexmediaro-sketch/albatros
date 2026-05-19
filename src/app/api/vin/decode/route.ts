import { NextRequest, NextResponse } from "next/server";
import { vinSchema } from "@/lib/validation/schemas";

export async function GET(request: NextRequest) {
  const vin = request.nextUrl.searchParams.get("vin");

  if (!vin) {
    return NextResponse.json({ error: "Parametrul VIN lipsește" }, { status: 400 });
  }

  const parsed = vinSchema.safeParse(vin);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.errors[0].message }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`,
      { next: { revalidate: 60 * 60 * 24 * 30 } } // cache 30 days
    );

    if (!res.ok) {
      return NextResponse.json({ error: "Eroare NHTSA API" }, { status: 502 });
    }

    const data = await res.json();
    const results = data.Results as Array<{ VariableId: number; Value: string | null }>;

    const getValue = (variableId: number) =>
      results.find((r) => r.VariableId === variableId)?.Value || null;

    return NextResponse.json({
      vin,
      make: getValue(26),
      model: getValue(28),
      year: getValue(29),
      fuelType: getValue(24),
      bodyClass: getValue(5),
      engineCylinders: getValue(13),
      displacementL: getValue(11),
      driveType: getValue(15),
      transmission: getValue(37),
    });
  } catch (error) {
    console.error("VIN decode error:", error);
    return NextResponse.json({ error: "Eroare la decodare VIN" }, { status: 500 });
  }
}
