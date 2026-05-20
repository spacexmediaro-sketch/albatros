'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { db } from '@/lib/db';

const programareSchema = z.object({
  name: z.string().min(2, 'Numele trebuie să aibă minim 2 caractere'),
  phone: z.string().regex(/^(\+40|0)[0-9]{9}$/, 'Număr de telefon invalid'),
  car: z.string().min(2, 'Completează marca și modelul mașinii'),
  year: z.string().optional(),
  service: z.string().min(1, 'Selectează un serviciu'),
  date: z.string().optional(),
  time: z.string().optional(),
  notes: z.string().max(1000).optional(),
});

/**
 * Returns a Service record for the given free-text service name.
 * If no exact match is found, falls back to upsert-ing a "Altele" catch-all service
 * so we always have a valid serviceId FK for the Booking record.
 */
async function resolveServiceId(serviceName: string): Promise<string> {
  // Try to find a service whose name matches (case-insensitive)
  const match = await db.service.findFirst({
    where: { name: { equals: serviceName, mode: 'insensitive' } },
    select: { id: true },
  });
  if (match) return match.id;

  // Upsert a generic "Altele" service used for web bookings with free-text service names
  const fallback = await db.service.upsert({
    where: { slug: 'altele' },
    update: {},
    create: {
      slug: 'altele',
      name: 'Altele',
      shortDesc: 'Serviciu solicitat prin formularul de programare',
      fullContent: 'Serviciu solicitat prin formularul de programare de pe site.',
      durationMin: 60,
      category: 'general',
      published: false,
    },
    select: { id: true },
  });
  return fallback.id;
}

/**
 * Builds a scheduledAt DateTime from optional date + time strings submitted by the form.
 * If no date is provided, defaults to next business day at 08:30.
 */
function buildScheduledAt(date?: string, time?: string): Date {
  if (date) {
    const [hours, minutes] = (time || '08:30').split(':').map(Number);
    const dt = new Date(`${date}T00:00:00`);
    dt.setHours(hours ?? 8, minutes ?? 30, 0, 0);
    return dt;
  }
  // Default: next weekday at 08:30
  const dt = new Date();
  dt.setDate(dt.getDate() + 1);
  while (dt.getDay() === 0 || dt.getDay() === 6) {
    dt.setDate(dt.getDate() + 1);
  }
  dt.setHours(8, 30, 0, 0);
  return dt;
}

export async function programareAction(prevState: unknown, formData: FormData) {
  const raw = {
    name: formData.get('name') as string,
    phone: formData.get('phone') as string,
    car: formData.get('car') as string,
    year: formData.get('year') as string,
    service: formData.get('service') as string,
    date: formData.get('date') as string,
    time: formData.get('time') as string,
    notes: formData.get('notes') as string,
  };

  const parsed = programareSchema.safeParse(raw);

  if (!parsed.success) {
    const firstError = parsed.error.errors[0]?.message || 'Date invalide';
    return { success: false, message: '', error: firstError };
  }

  const { name, phone, car, year, service, date, time, notes } = parsed.data;

  try {
    const serviceId = await resolveServiceId(service);
    const scheduledAt = buildScheduledAt(date || undefined, time || undefined);

    // Build the notes field: include car info + any extra details from the form
    const carInfo = year ? `${car} (${year})` : car;
    const fullNotes = [
      `Mașină: ${carInfo}`,
      `Serviciu solicitat: ${service}`,
      notes ? `Detalii: ${notes}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    await db.booking.create({
      data: {
        guestName: name,
        guestPhone: phone,
        serviceId,
        scheduledAt,
        notes: fullNotes,
        source: 'web',
        status: 'PENDING',
      },
    });

    // Send email notification if Resend is configured
    if (process.env.RESEND_API_KEY) {
      const emailText = [
        'Programare nouă de pe site',
        '',
        `Nume: ${name}`,
        `Telefon: ${phone}`,
        `Mașină: ${carInfo}`,
        `Serviciu: ${service}`,
        date ? `Data preferată: ${date}` : 'Data: prima zi disponibilă',
        time ? `Ora preferată: ${time}` : null,
        notes ? `\nDetalii suplimentare:\n${notes}` : null,
      ]
        .filter(Boolean)
        .join('\n');

      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'Albatros A Service <onboarding@resend.dev>',
        to: 'albatros_service@q-service.ro',
        subject: `Programare: ${name} — ${service}`,
        text: emailText,
      });
    } else {
      console.log('[Programare] RESEND_API_KEY not set. Submission logged:', raw);
    }

    return {
      success: true,
      message: 'Programarea a fost trimisă! Te vom contacta în maxim 2 ore lucrătoare pentru confirmare.',
      error: '',
    };
  } catch (error) {
    console.error('[Programare] Error:', error);
    return {
      success: false,
      message: '',
      error: 'A apărut o eroare. Încearcă din nou sau sună-ne direct.',
    };
  }
}
