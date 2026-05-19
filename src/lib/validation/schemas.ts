import { z } from "zod";

export const bookingSchema = z.object({
  guestName: z.string().min(2, "Numele trebuie să aibă minim 2 caractere"),
  guestPhone: z.string().regex(/^(\+40|0)[0-9]{9}$/, "Număr de telefon invalid"),
  serviceId: z.string().min(1, "Selectează un serviciu"),
  scheduledAt: z.string().datetime({ message: "Data invalidă" }),
  notes: z.string().max(500).optional(),
  carId: z.string().optional(),
  userId: z.string().optional(),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Numele trebuie să aibă minim 2 caractere"),
  phone: z.string().regex(/^(\+40|0)[0-9]{9}$/, "Număr de telefon invalid"),
  email: z.string().email("Email invalid").optional().or(z.literal("")),
  message: z.string().min(10, "Mesajul trebuie să aibă minim 10 caractere").max(2000),
});

export const estimateSchema = z.object({
  carInfo: z.object({
    make: z.string().min(1, "Selectează marca"),
    model: z.string().min(1, "Completează modelul"),
    year: z.number().int().min(1990).max(new Date().getFullYear() + 1),
    color: z.string().min(1, "Completează culoarea"),
  }),
  imageUrls: z.array(z.string().url()).min(1, "Încarcă minim o poză").max(4),
  description: z.string().min(5, "Descrie avaria").max(1000),
});

export const vinSchema = z
  .string()
  .length(17, "VIN-ul trebuie să aibă 17 caractere")
  .regex(/^[A-HJ-NPR-Z0-9]{17}$/, "VIN invalid (nu poate conține I, O, Q)");

export const carSchema = z.object({
  make: z.string().min(1, "Selectează marca"),
  model: z.string().min(1, "Completează modelul"),
  year: z.number().int().min(1990).max(new Date().getFullYear() + 1),
  fuel: z.enum(["DIESEL", "BENZINA", "HIBRID", "ELECTRIC"]),
  km: z.number().int().min(0).optional(),
  plateNumber: z.string().optional(),
  vin: z.string().optional(),
  itpExpires: z.string().optional(),
  rcaExpires: z.string().optional(),
});

export const registerSchema = z.object({
  name: z.string().min(2, "Numele trebuie să aibă minim 2 caractere"),
  email: z.string().email("Email invalid"),
  phone: z.string().regex(/^(\+40|0)[0-9]{9}$/, "Număr de telefon invalid"),
  password: z.string().min(6, "Parola trebuie să aibă minim 6 caractere"),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Parolele nu coincid",
  path: ["confirmPassword"],
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type BookingInput = z.infer<typeof bookingSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type EstimateInput = z.infer<typeof estimateSchema>;
export type CarInput = z.infer<typeof carSchema>;
