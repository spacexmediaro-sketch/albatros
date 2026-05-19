import { NextRequest, NextResponse } from "next/server";
import { estimateSchema } from "@/lib/validation/schemas";
import { db } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = estimateSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Date invalide", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { carInfo, imageUrls, description } = parsed.data;

    // TODO: Replace mock with Claude Vision API call
    const aiAnalysis = {
      damages: [
        {
          type: "zgârietură adâncă",
          panel: "ușă față stânga",
          severity: "moderată",
          lengthEstimateCm: 25,
        },
      ],
      repairOperations: ["îndreptare tablă", "chituire", "vopsire"],
      estimatedHoursLow: 4,
      estimatedHoursHigh: 8,
      estimatedCostRON: { min: 800, max: 1500 },
      confidence: "medium" as const,
      warnings: [
        "Estimarea este orientativă. Prețul final se stabilește la inspecția fizică.",
      ],
    };

    const estimate = await db.estimate.create({
      data: {
        carInfo,
        imageUrls,
        aiAnalysis,
        estimatedMin: aiAnalysis.estimatedCostRON.min,
        estimatedMax: aiAnalysis.estimatedCostRON.max,
        status: "PENDING_REVIEW",
      },
    });

    return NextResponse.json({
      success: true,
      estimateId: estimate.id,
      analysis: aiAnalysis,
    });
  } catch (error) {
    console.error("Estimator error:", error);
    return NextResponse.json({ error: "Eroare internă" }, { status: 500 });
  }
}
