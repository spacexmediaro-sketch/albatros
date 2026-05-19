import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/schemas";

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

    // TODO: Send email via Resend
    console.log("Contact form submission:", { name, phone, email, message });

    return NextResponse.json({ success: true, message: "Mesajul a fost trimis" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Eroare internă" }, { status: 500 });
  }
}
