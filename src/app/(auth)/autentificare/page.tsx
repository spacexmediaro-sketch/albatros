import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Autentificare",
  description: "Conecteaza-te la contul tau Albatros A Service pentru a vedea statusul reparatiilor si istoricul masinii.",
  path: "/autentificare",
});

export default function LoginPage() {
  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Bine ai revenit</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Conecteaza-te pentru a vedea statusul masinii tale
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="email@exemplu.ro" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Parola</Label>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Conectare
          </Button>
        </form>

        <Separator />

        <Button variant="outline" className="w-full">
          Continua cu Google
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Nu ai cont?{" "}
          <Link href="/inregistrare" className="text-primary underline">
            Creeaza unul
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
