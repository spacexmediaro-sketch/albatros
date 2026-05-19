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
    <Card className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
      <CardContent className="p-6 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">Creează un cont</h1>
          <p className="text-sm text-[#8B8D97] mt-1">
            Înregistrează-te pentru a-ți gestiona mașinile și programările
          </p>
        </div>

        {state?.error && (
          <div className="rounded-md bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400">
            {state.error}
          </div>
        )}

        {state?.success && (
          <div className="rounded-md bg-green-500/10 border border-green-500/20 p-3 text-sm text-green-400">
            Cont creat cu succes! Redirecționare...
          </div>
        )}

        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-[#E2E4E9]">Nume complet</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Andrei Popescu"
              required
              className="border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/30"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#E2E4E9]">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="email@exemplu.ro"
              required
              className="border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/30"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-[#E2E4E9]">Telefon</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="0723 456 789"
              required
              className="border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/30"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#E2E4E9]">Parola</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              className="border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/30"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-[#E2E4E9]">Confirmă parola</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              className="border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/30"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#FF2D2D] text-[#050505] shadow-[0_0_20px_rgba(255,45,45,0.3)] hover:bg-[#FF2D2D]/90"
            disabled={pending}
          >
            {pending ? "Se creează contul..." : "Creează contul"}
          </Button>
        </form>

        <Separator className="bg-white/[0.08]" />

        <Button
          variant="outline"
          className="w-full bg-white/5 text-[#E2E4E9] border-white/[0.08] hover:bg-white/10"
          onClick={() => loginWithGoogle()}
        >
          Continuă cu Google
        </Button>

        <p className="text-center text-sm text-[#8B8D97]">
          Ai deja cont?{" "}
          <Link href="/autentificare" className="text-[#FF2D2D] hover:text-[#FF5555] underline">
            Conectează-te
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
