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
import { loginWithCredentials, loginWithGoogle } from "@/lib/actions/auth";

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(loginWithCredentials, undefined);
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push("/garaj");
    }
  }, [state?.success, router]);

  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Bine ai revenit</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Conecteaza-te pentru a vedea statusul masinii tale
          </p>
        </div>

        {state?.error && (
          <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">
            {state.error}
          </div>
        )}

        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="email@exemplu.ro" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Parola</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          <Button type="submit" className="w-full" disabled={pending}>
            {pending ? "Se conecteaza..." : "Conectare"}
          </Button>
        </form>

        <Separator />

        <Button
          variant="outline"
          className="w-full"
          onClick={() => loginWithGoogle()}
        >
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
