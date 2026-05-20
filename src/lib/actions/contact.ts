'use server';

import { contactSchema } from '@/lib/validation/schemas';
import { db } from '@/lib/db';
import { Resend } from 'resend';

/**
 * Returns (or creates) a sentinel Service record used exclusively for
 * contact-form submissions, so we can store them in the Booking table
 * without requiring a real service selection.
 */
async function getContactServiceId(): Promise<string> {
  const record = await db.service.upsert({
    where: { slug: 'contact-mesaj' },
    update: {},
    create: {
      slug: 'contact-mesaj',
      name: 'Mesaj contact',
      shortDesc: 'Mesaj primit prin formularul de contact de pe site',
      fullContent: 'Mesaj primit prin formularul de contact de pe site.',
      durationMin: 0,
      category: 'contact',
      published: false,
    },
    select: { id: true },
  });
  return record.id;
}

export async function contactAction(prevState: unknown, formData: FormData) {
  const raw = {
    name: formData.get('name') as string,
    phone: formData.get('phone') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const firstError = parsed.error.errors[0]?.message || 'Date invalide';
    return { success: false, message: '', error: firstError };
  }

  const { name, phone, email, message } = parsed.data;

  try {
    const serviceId = await getContactServiceId();

    // Store the contact message as a Booking record with source="contact"
    // Notes carry the full message + email so nothing is lost.
    const notesContent = [
      email ? `Email: ${email}` : null,
      `Mesaj:\n${message}`,
    ]
      .filter(Boolean)
      .join('\n');

    await db.booking.create({
      data: {
        guestName: name,
        guestPhone: phone,
        serviceId,
        scheduledAt: new Date(), // contact messages have no real scheduled time
        notes: notesContent,
        source: 'contact',
        status: 'PENDING',
      },
    });

    // Send email notification if Resend is configured
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'Albatros A Service <onboarding@resend.dev>',
        to: 'albatros_service@q-service.ro',
        subject: `Mesaj contact: ${name}`,
        text: `Nume: ${name}\nTelefon: ${phone}\nEmail: ${email || 'nespecificat'}\n\nMesaj:\n${message}`,
      });
    } else {
      console.log('[Contact] RESEND_API_KEY not set. Submission logged:', { name, phone, email, message });
    }

    return {
      success: true,
      message: 'Mesajul tău a fost trimis cu succes! Te vom contacta în curând.',
      error: '',
    };
  } catch (error) {
    console.error('[Contact] Error:', error);
    return {
      success: false,
      message: '',
      error: 'A apărut o eroare. Încearcă din nou sau sună-ne direct.',
    };
  }
}
