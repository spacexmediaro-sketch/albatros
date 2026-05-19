import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Înregistrare",
  description:
    "Creează un cont Albatros A Service pentru a-ți gestiona mașinile și a te programa online la service.",
  path: "/inregistrare",
});

export default function InregistrarePage() {
  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0A2540]">Creează un cont</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Înregistrează-te pentru a-ți gestiona mașinile și programările
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nume complet</Label>
            <Input id="name" type="text" placeholder="Andrei Popescu" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="email@exemplu.ro" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefon</Label>
            <Input id="phone" type="tel" placeholder="0723 456 789" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Parola</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmă parola</Label>
            <Input id="confirmPassword" type="password" required />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#E63946] text-white hover:bg-[#E63946]/90"
          >
            Creează contul
          </Button>
        </form>

        <Separator />

        <Button variant="outline" className="w-full">
          Continuă cu Google
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Ai deja cont?{" "}
          <Link href="/autentificare" className="text-[#E63946] underline">
            Conectează-te
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
