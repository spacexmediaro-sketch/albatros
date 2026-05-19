import { Card, CardContent } from "@/components/ui/card";
import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/seo";
import { ContactForm } from "./contact-form";

export const metadata = generatePageMetadata({
  title: "Contact",
  description:
    "Contacteaza Albatros A Service Ploiesti. Telefon: 0723 177 032, email: albatros_service@q-service.ro. Program: L-V 08:00-17:00, S 08:00-13:00.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold sm:text-4xl">Contact</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Suntem aici sa te ajutam. Contacteaza-ne prin orice metoda.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Info */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="font-semibold">Adresa</h3>
                <p className="text-sm text-muted-foreground">
                  {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.county} {siteConfig.address.postalCode}
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Telefon</h3>
                <p className="text-sm text-muted-foreground">
                  Mobil: {siteConfig.phone}
                  <br />
                  Fix: {siteConfig.phoneLandline}
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-muted-foreground">{siteConfig.email}</p>
              </div>
              <div>
                <h3 className="font-semibold">Program</h3>
                <p className="text-sm text-muted-foreground">
                  Luni - Vineri: 08:00 - 17:00
                  <br />
                  Sambata: 08:00 - 13:00
                  <br />
                  Duminica: Inchis
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Google Maps embed */}
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.5!2d26.032!3d44.9886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDU5JzE5LjAiTiAyNsKwMDEnNTUuMiJF!5e0!3m2!1sro!2sro!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Albatros A Service - Locatie pe harta"
            />
          </div>
        </div>

        {/* Form */}
        <ContactForm />
      </div>
    </div>
  );
}
