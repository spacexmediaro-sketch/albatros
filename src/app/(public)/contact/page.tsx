import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/seo";

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

          {/* Google Maps embed placeholder */}
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground text-sm">Google Maps - Se va integra</p>
          </div>
        </div>

        {/* Form */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Trimite un mesaj</h2>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nume</Label>
                  <Input id="name" placeholder="Numele tau" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input id="phone" type="tel" placeholder="07xx xxx xxx" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="email@exemplu.ro" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mesaj</Label>
                <Textarea id="message" placeholder="Descrie problema sau intrebarea ta..." rows={5} required />
              </div>
              <Button type="submit" className="w-full">
                Trimite mesajul
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
