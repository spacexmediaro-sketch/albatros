'use client';

import Link from "next/link";
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { registerUser, loginWithGoogle } from "@/lib/actions/auth";

export default function InregistrarePage() {
  const [state, formAction, pending] = useActionState(registerUser, undefined);
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push("/autentificare");
    }
  }, [state?.success, router]);

  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0A2540]">Creează un cont</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Înregistrează-te pentru a-ți gestiona mașinile și programările
          </p>
        </div>

        {state?.error && (
          <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">
            {state.error}
          </div>
        )}

        {state?.success && (
          <div className="rounded-md bg-green-50 p-3 text-sm text-green-600">
            Cont creat cu succes! Redirecționare...
          </div>
        )}

        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nume complet</Label>
            <Input id="name" name="name" type="text" placeholder="Andrei Popescu" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="email@exemplu.ro" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefon</Label>
            <Input id="phone" name="phone" type="tel" placeholder="0723 456 789" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Parola</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmă parola</Label>
            <Input id="confirmPassword" name="confirmPassword" type="password" required />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#E63946] text-white hover:bg-[#E63946]/90"
            disabled={pending}
          >
            {pending ? "Se creează contul..." : "Creează contul"}
          </Button>
        </form>

        <Separator />

        <Button
          variant="outline"
          className="w-full"
          onClick={() => loginWithGoogle()}
        >
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
