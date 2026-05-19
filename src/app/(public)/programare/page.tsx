import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Programare online",
  description:
    "Programeaza-te online la Albatros A Service Ploiesti. Alege serviciul, data si ora potrivita. Confirmare rapida.",
  path: "/programare",
});

const services = [
  "Diagnoza computerizata",
  "Schimb ulei si filtre",
  "Reparatii motor diesel",
  "Tinichigerie auto",
  "Vopsitorie auto",
  "Geometrie roti 3D",
  "Electrica auto",
  "Revizie periodica",
  "Pregatire ITP",
  "Altele",
];

export default function ProgramarePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Programare online</h1>
        <p className="mt-2 text-muted-foreground">
          Completeaza formularul si te contactam pentru confirmare in maxim 2 ore.
        </p>
      </div>

      <Card>
        <CardContent className="p-6">
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nume complet *</Label>
                <Input id="name" placeholder="Ion Popescu" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon *</Label>
                <Input id="phone" type="tel" placeholder="07xx xxx xxx" required />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="car">Masina (marca + model) *</Label>
                <Input id="car" placeholder="ex: VW Golf 7 2.0 TDI" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">An fabricatie</Label>
                <Input id="year" type="number" placeholder="2019" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Serviciu dorit *</Label>
              <select
                id="service"
                className="w-full rounded-md border px-3 py-2 text-sm"
                required
              >
                <option value="">Alege serviciul</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="date">Data preferata</Label>
                <Input id="date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Ora preferata</Label>
                <select id="time" className="w-full rounded-md border px-3 py-2 text-sm">
                  <option value="">Orice ora</option>
                  <option value="08:00">08:00</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Detalii suplimentare</Label>
              <Textarea id="notes" placeholder="Descrie problema sau ce doresti..." rows={4} />
            </div>

            <Button type="submit" className="w-full" size="lg">
              Trimite programarea
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Te vom contacta telefonic pentru confirmare in maxim 2 ore lucratoare.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
