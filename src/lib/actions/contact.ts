'use server';

import { contactSchema } from '@/lib/validation/schemas';
import { Resend } from 'resend';

export async function contactAction(prevState: any, formData: FormData) {
  const raw = {
    name: formData.get('name') as string,
    phone: formData.get('phone') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const firstError = parsed.error.errors[0]?.message || 'Date invalide';
    return { error: firstError };
  }

  const { name, phone, email, message } = parsed.data;

  try {
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'Albatros A Service <onboarding@resend.dev>',
        to: 'albatros_service@q-service.ro',
        subject: `Mesaj contact: ${name}`,
        text: `Nume: ${name}\nTelefon: ${phone}\nEmail: ${email || 'nespecificat'}\n\nMesaj:\n${message}`,
      });
    } else {
      console.log('[Contact] RESEND_API_KEY not set. Logging submission:', { name, phone, email, message });
    }

    return { success: true, message: 'Mesajul a fost trimis cu succes!' };
  } catch (error) {
    console.error('[Contact] Email send error:', error);
    return { error: 'A aparut o eroare. Incearca din nou sau suna-ne direct.' };
  }
}
