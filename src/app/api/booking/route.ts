import { NextRequest, NextResponse } from "next/server";
import { bookingSchema } from "@/lib/validation/schemas";
import { db } from "@/lib/db";

// ─── Business-hours constants ────────────────────────────────────────────────

/** Opening time in minutes from midnight (08:30). */
const OPEN_MINUTES = 8 * 60 + 30;   // 510
/** Closing time in minutes from midnight (17:30). */
const CLOSE_MINUTES = 17 * 60 + 30; // 1050
/** Duration of one appointment slot in minutes. */
const SLOT_DURATION = 60;
/** Buffer between slots in minutes. */
const SLOT_BUFFER = 15;
/** How many days ahead to calculate available slots. */
const LOOKAHEAD_DAYS = 14;

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Returns true if the given Date falls on a Romanian work-week day (Mon–Fri). */
function isWorkDay(date: Date): boolean {
  const day = date.getDay(); // 0=Sun, 6=Sat
  return day >= 1 && day <= 5;
}

/** Formats a Date as "YYYY-MM-DD" in local time. */
function formatDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/** Formats minutes-from-midnight as "HH:MM". */
function formatMinutes(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

/**
 * Returns every possible start-time (in minutes from midnight) for a single
 * working day, ignoring any existing bookings.
 * Slots are 60 min long with 15 min buffer; the next slot starts at +75 min.
 */
function allSlotsForDay(): number[] {
  const slots: number[] = [];
  let cursor = OPEN_MINUTES;
  while (cursor + SLOT_DURATION <= CLOSE_MINUTES) {
    slots.push(cursor);
    cursor += SLOT_DURATION + SLOT_BUFFER;
  }
  return slots;
}

// ─── GET — available time slots ──────────────────────────────────────────────

export async function GET() {
  try {
    const now = new Date();
    const windowEnd = new Date(now);
    windowEnd.setDate(windowEnd.getDate() + LOOKAHEAD_DAYS);

    // Fetch all CONFIRMED bookings in the next LOOKAHEAD_DAYS days
    const confirmedBookings = await db.booking.findMany({
      where: {
        status: "CONFIRMED",
        scheduledAt: {
          gte: now,
          lte: windowEnd,
        },
      },
      select: { scheduledAt: true },
    });

    // Build a Set of taken slots: "YYYY-MM-DD|HH:MM"
    // A slot is taken if a CONFIRMED booking's scheduledAt falls within
    // [slotStart - SLOT_BUFFER, slotStart + SLOT_DURATION + SLOT_BUFFER).
    const takenSlots = new Set<string>();
    const allSlots = allSlotsForDay();
    for (const booking of confirmedBookings) {
      const dateKey = formatDate(booking.scheduledAt);
      const bookingMinutes =
        booking.scheduledAt.getHours() * 60 + booking.scheduledAt.getMinutes();
      for (const slotStart of allSlots) {
        if (
          bookingMinutes >= slotStart - SLOT_BUFFER &&
          bookingMinutes < slotStart + SLOT_DURATION + SLOT_BUFFER
        ) {
          takenSlots.add(`${dateKey}|${formatMinutes(slotStart)}`);
        }
      }
    }

    // Generate the result array
    type SlotResult = { date: string; time: string; available: boolean };
    const results: SlotResult[] = [];

    for (let i = 0; i < LOOKAHEAD_DAYS; i++) {
      const day = new Date(now);
      day.setDate(day.getDate() + i);
      day.setHours(0, 0, 0, 0);

      if (!isWorkDay(day)) continue;

      const dateKey = formatDate(day);

      for (const slotStart of allSlots) {
        // Skip slots that are in the past (for today)
        if (i === 0) {
          const slotDateTime = new Date(day);
          slotDateTime.setHours(Math.floor(slotStart / 60), slotStart % 60, 0, 0);
          if (slotDateTime <= now) continue;
        }

        const timeKey = formatMinutes(slotStart);
        const key = `${dateKey}|${timeKey}`;

        results.push({
          date: dateKey,
          time: timeKey,
          available: !takenSlots.has(key),
        });
      }
    }

    return NextResponse.json(results);
  } catch (error) {
    console.error("[GET /api/booking] Error:", error);
    return NextResponse.json({ error: "Eroare internă" }, { status: 500 });
  }
}

// ─── POST — create booking ────────────────────────────────────────────────────

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

    // Verify the service exists
    const service = await db.service.findUnique({
      where: { id: serviceId },
      select: { id: true },
    });
    if (!service) {
      return NextResponse.json(
        { error: "Serviciul selectat nu există" },
        { status: 422 }
      );
    }

    // Check that the requested slot is not already taken by a CONFIRMED booking
    const slotStart = new Date(scheduledAt);
    const slotEnd = new Date(slotStart.getTime() + (SLOT_DURATION + SLOT_BUFFER) * 60_000);

    const conflict = await db.booking.findFirst({
      where: {
        status: "CONFIRMED",
        scheduledAt: {
          gte: new Date(slotStart.getTime() - SLOT_BUFFER * 60_000),
          lt: slotEnd,
        },
      },
      select: { id: true },
    });

    if (conflict) {
      return NextResponse.json(
        { error: "Intervalul orar selectat nu mai este disponibil. Te rugăm să alegi altul." },
        { status: 409 }
      );
    }

    const booking = await db.booking.create({
      data: {
        guestName,
        guestPhone,
        serviceId,
        scheduledAt: slotStart,
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
    console.error("[POST /api/booking] Error:", error);
    return NextResponse.json({ error: "Eroare internă" }, { status: 500 });
  }
}
