"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const addCarSchema = z.object({
  make: z.string().min(1, "Marca este obligatorie"),
  model: z.string().min(1, "Modelul este obligatoriu"),
  year: z.coerce.number().int().min(1990).max(2026),
  fuel: z.enum(["DIESEL", "BENZINA", "HIBRID", "ELECTRIC"]),
  km: z.coerce.number().int().min(0).optional().or(z.literal("")),
  plateNumber: z.string().optional(),
  vin: z.string().max(17).optional(),
  itpExpires: z.string().optional(),
  rcaExpires: z.string().optional(),
});

export async function addCar(_prev: unknown, formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) {
    return { error: "Trebuie să fii autentificat pentru a adăuga o mașină." };
  }

  const raw = Object.fromEntries(formData);
  const parsed = addCarSchema.safeParse(raw);

  if (!parsed.success) {
    return { error: parsed.error.errors[0]?.message || "Date invalide." };
  }

  const { make, model, year, fuel, km, plateNumber, vin, itpExpires, rcaExpires } =
    parsed.data;

  try {
    await db.car.create({
      data: {
        userId: session.user.id,
        make,
        model,
        year,
        fuel,
        km: typeof km === "number" ? km : undefined,
        plateNumber: plateNumber || undefined,
        vin: vin || undefined,
        itpExpires: itpExpires ? new Date(itpExpires) : undefined,
        rcaExpires: rcaExpires ? new Date(rcaExpires) : undefined,
      },
    });

    revalidatePath("/garaj");
    return { success: true };
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes("Unique constraint")
    ) {
      return { error: "O mașină cu acest VIN există deja." };
    }
    return { error: "A apărut o eroare. Încearcă din nou." };
  }
}
