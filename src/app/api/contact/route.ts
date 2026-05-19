import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/schemas";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Date invalide", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, phone, email, message } = parsed.data;

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'Albatros A Service <onboarding@resend.dev>',
        to: 'albatros_service@q-service.ro',
        subject: `Mesaj contact: ${name}`,
        text: `Nume: ${name}\nTelefon: ${phone}\nEmail: ${email || 'nespecificat'}\n\nMesaj:\n${message}`,
      });
    } else {
      console.log("[Contact API] RESEND_API_KEY not set. Logging:", { name, phone, email, message });
    }

    return NextResponse.json({ success: true, message: "Mesajul a fost trimis" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Eroare interna" }, { status: 500 });
  }
}
