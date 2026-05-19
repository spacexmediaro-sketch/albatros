"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function SetariPage() {
  const [saving, setSaving] = useState(false);
  const [emailNotif, setEmailNotif] = useState(true);
  const [whatsappNotif, setWhatsappNotif] = useState(false);

  function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => setSaving(false), 1000);
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Setari cont</h1>

      {/* Profile form */}
      <Card className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
        <CardHeader>
          <CardTitle className="text-white">Informatii profil</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#E2E4E9]">Nume complet</Label>
              <Input
                id="name"
                defaultValue="Andrei Popescu"
                required
                className="border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#E2E4E9]">Email</Label>
              <Input
                id="email"
                type="email"
                defaultValue="andrei@exemplu.ro"
                required
                className="border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[#E2E4E9]">Telefon</Label>
              <Input
                id="phone"
                type="tel"
                defaultValue="0723 456 789"
                required
                className="border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/50"
              />
            </div>
            <Button
              type="submit"
              className="bg-[#FF2D2D] text-[#050505] shadow-[0_0_20px_rgba(255,45,45,0.3)] hover:bg-[#FF2D2D]/90"
              disabled={saving}
            >
              {saving ? "Se salveaza..." : "Salveaza modificarile"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Notification preferences */}
      <Card className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
        <CardHeader>
          <CardTitle className="text-white">Preferinte notificari</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-[#8B8D97]">
            Alege cum doresti sa primesti notificarile despre programari, ITP si RCA.
          </p>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={emailNotif}
                onChange={(e) => setEmailNotif(e.target.checked)}
                className="h-4 w-4 rounded border-white/10 bg-[#080808] text-[#FF2D2D] focus:ring-[#FF2D2D]/50"
              />
              <div>
                <p className="text-sm font-medium text-[#E2E4E9]">Email</p>
                <p className="text-xs text-[#4A4B55]">
                  Primesti notificari pe adresa de email din cont
                </p>
              </div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={whatsappNotif}
                onChange={(e) => setWhatsappNotif(e.target.checked)}
                className="h-4 w-4 rounded border-white/10 bg-[#080808] text-[#FF2D2D] focus:ring-[#FF2D2D]/50"
              />
              <div>
                <p className="text-sm font-medium text-[#E2E4E9]">WhatsApp</p>
                <p className="text-xs text-[#4A4B55]">
                  Primesti mesaje pe WhatsApp la numarul de telefon din cont
                </p>
              </div>
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Data & account actions */}
      <Card className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
        <CardHeader>
          <CardTitle className="text-white">Date si confidentialitate</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-[#8B8D97]">
              Descarca toate datele asociate contului tau (masini, programari, istoric).
            </p>
            <Button
              className="mt-2 bg-white/5 text-[#E2E4E9] border border-white/[0.08] hover:bg-white/10"
            >
              Descarca datele mele
            </Button>
          </div>

          <Separator className="bg-white/[0.08]" />

          <div>
            <p className="text-sm text-red-400">
              Stergerea contului este permanenta. Toate datele tale vor fi eliminate.
            </p>
            <Button
              className="mt-2 bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20"
              onClick={() => {
                if (
                  window.confirm(
                    "Esti sigur ca doresti sa stergi contul? Aceasta actiune este ireversibila."
                  )
                ) {
                  // Mock delete - will connect to API
                }
              }}
            >
              Sterge contul
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
