'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const programareSchema = z.object({
  name: z.string().min(2, 'Numele trebuie sa aiba minim 2 caractere'),
  phone: z.string().regex(/^(\+40|0)[0-9]{9}$/, 'Numar de telefon invalid'),
  car: z.string().min(2, 'Completeaza marca si modelul masinii'),
  year: z.string().optional(),
  service: z.string().min(1, 'Selecteaza un serviciu'),
  date: z.string().optional(),
  time: z.string().optional(),
  notes: z.string().max(1000).optional(),
});

export async function programareAction(prevState: any, formData: FormData) {
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
    return { error: firstError };
  }

  const { name, phone, car, year, service, date, time, notes } = parsed.data;

  try {
    const emailText = [
      `Programare noua de pe site`,
      ``,
      `Nume: ${name}`,
      `Telefon: ${phone}`,
      `Masina: ${car}`,
      year ? `An fabricatie: ${year}` : null,
      `Serviciu: ${service}`,
      date ? `Data preferata: ${date}` : null,
      time ? `Ora preferata: ${time}` : null,
      notes ? `\nDetalii suplimentare:\n${notes}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'Albatros A Service <onboarding@resend.dev>',
        to: 'albatros_service@q-service.ro',
        subject: `Programare: ${name} - ${service}`,
        text: emailText,
      });
    } else {
      console.log('[Programare] RESEND_API_KEY not set. Logging submission:', raw);
    }

    return { success: true, message: 'Programarea a fost trimisa! Te vom contacta in maxim 2 ore.' };
  } catch (error) {
    console.error('[Programare] Email send error:', error);
    return { error: 'A aparut o eroare. Incearca din nou sau suna-ne direct.' };
  }
}
