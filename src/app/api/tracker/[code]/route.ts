import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params;

  if (!code || code.length < 6) {
    return NextResponse.json({ error: "Cod de tracking invalid" }, { status: 400 });
  }

  try {
    const job = await db.serviceJob.findUnique({
      where: { trackingCode: code.toUpperCase() },
      include: {
        car: { select: { make: true, model: true, year: true, plateNumber: true } },
        events: { orderBy: { createdAt: "desc" } },
      },
    });

    if (!job) {
      return NextResponse.json({ error: "Codul de tracking nu a fost găsit" }, { status: 404 });
    }

    return NextResponse.json(job);
  } catch (error) {
    console.error("Tracker lookup error:", error);
    return NextResponse.json({ error: "Eroare internă" }, { status: 500 });
  }
}
