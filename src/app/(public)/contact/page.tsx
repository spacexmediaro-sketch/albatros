import { Card, CardContent } from "@/components/ui/card";
import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/seo";
import { ContactForm } from "./contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Contact",
  description:
    "Contactează Albatros A Service Ploiești. Telefon: 0723 177 032, email: albatros_service@q-service.ro. Program: L-V 08:00-17:00, S 08:00-13:00.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#04040A]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#04040A] pt-24 pb-16">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#C9A84C]/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#3B82F6]/[0.04] rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Contact
          </h1>
          <p className="mt-4 text-lg text-[#8B8D97] max-w-2xl mx-auto">
            Suntem aici să te ajutăm. Contactează-ne prin orice metodă.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* LEFT column */}
          <div className="space-y-8">
            {/* Contact info card */}
            <Card className="bg-[#0F1017] border border-white/[0.08] rounded-2xl shadow-none">
              <CardContent className="p-8 space-y-0">
                {/* Adresa */}
                <div className="flex items-start gap-4 py-6 first:pt-0">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/10">
                    <MapPin className="h-5 w-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#E2E4E9]">
                      Adresa
                    </h3>
                    <p className="mt-1 text-sm text-[#8B8D97]">
                      {siteConfig.address.street}, {siteConfig.address.city},{" "}
                      {siteConfig.address.county} {siteConfig.address.postalCode}
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/[0.06]" />

                {/* Telefon */}
                <div className="flex items-start gap-4 py-6">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/10">
                    <Phone className="h-5 w-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#E2E4E9]">
                      Telefon
                    </h3>
                    <p className="mt-1 text-sm text-[#8B8D97]">
                      Mobil:{" "}
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="hover:text-[#C9A84C] transition-colors"
                      >
                        {siteConfig.phone}
                      </a>
                      <br />
                      Fix:{" "}
                      <a
                        href={`tel:${siteConfig.phoneLandline}`}
                        className="hover:text-[#C9A84C] transition-colors"
                      >
                        {siteConfig.phoneLandline}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/[0.06]" />

                {/* Email */}
                <div className="flex items-start gap-4 py-6">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/10">
                    <Mail className="h-5 w-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#E2E4E9]">
                      Email
                    </h3>
                    <p className="mt-1 text-sm text-[#8B8D97]">
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="hover:text-[#C9A84C] transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/[0.06]" />

                {/* Program */}
                <div className="flex items-start gap-4 py-6 last:pb-0">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/10">
                    <Clock className="h-5 w-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#E2E4E9]">
                      Program
                    </h3>
                    <p className="mt-1 text-sm text-[#8B8D97]">
                      Luni - Vineri: 08:00 - 17:00
                      <br />
                      Sâmbătă: 08:00 - 13:00
                      <br />
                      Duminică: Închis
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps */}
            <div className="aspect-video overflow-hidden rounded-2xl border border-white/[0.08]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.5!2d26.032!3d44.9886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDU5JzE5LjAiTiAyNsKwMDEnNTUuMiJF!5e0!3m2!1sro!2sro!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Albatros A Service - Locație pe hartă"
              />
            </div>
          </div>

          {/* RIGHT column */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
