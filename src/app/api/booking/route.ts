import { NextRequest, NextResponse } from "next/server";
import { bookingSchema } from "@/lib/validation/schemas";
import { db } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = bookingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Date invalide", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { guestName, guestPhone, serviceId, scheduledAt, notes, carId, userId } = parsed.data;

    const booking = await db.booking.create({
      data: {
        guestName,
        guestPhone,
        serviceId,
        scheduledAt: new Date(scheduledAt),
        notes: notes || null,
        carId: carId || null,
        userId: userId || null,
        source: "web",
        status: "PENDING",
      },
    });

    return NextResponse.json(
      { success: true, bookingId: booking.id, status: booking.status },
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking creation error:", error);
    return NextResponse.json({ error: "Eroare internă" }, { status: 500 });
  }
}
