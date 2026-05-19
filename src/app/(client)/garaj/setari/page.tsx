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
      <h1 className="text-2xl font-bold text-[#0A2540]">Setări cont</h1>

      {/* Profile form */}
      <Card>
        <CardHeader>
          <CardTitle>Informații profil</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nume complet</Label>
              <Input id="name" defaultValue="Andrei Popescu" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                defaultValue="andrei@exemplu.ro"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefon</Label>
              <Input
                id="phone"
                type="tel"
                defaultValue="0723 456 789"
                required
              />
            </div>
            <Button
              type="submit"
              className="bg-[#E63946] text-white hover:bg-[#E63946]/90"
              disabled={saving}
            >
              {saving ? "Se salvează..." : "Salvează modificările"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Notification preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Preferințe notificări</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-[#0A2540]/60">
            Alege cum dorești să primești notificările despre programări, ITP și RCA.
          </p>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={emailNotif}
                onChange={(e) => setEmailNotif(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-[#E63946] focus:ring-[#E63946]"
              />
              <div>
                <p className="text-sm font-medium text-[#0A2540]">Email</p>
                <p className="text-xs text-[#0A2540]/50">
                  Primești notificări pe adresa de email din cont
                </p>
              </div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={whatsappNotif}
                onChange={(e) => setWhatsappNotif(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-[#E63946] focus:ring-[#E63946]"
              />
              <div>
                <p className="text-sm font-medium text-[#0A2540]">WhatsApp</p>
                <p className="text-xs text-[#0A2540]/50">
                  Primești mesaje pe WhatsApp la numărul de telefon din cont
                </p>
              </div>
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Data & account actions */}
      <Card>
        <CardHeader>
          <CardTitle>Date și confidențialitate</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-[#0A2540]/60">
              Descarcă toate datele asociate contului tău (mașini, programări, istoric).
            </p>
            <Button variant="outline" className="mt-2">
              Descarcă datele mele
            </Button>
          </div>

          <Separator />

          <div>
            <p className="text-sm text-red-600">
              Ștergerea contului este permanentă. Toate datele tale vor fi eliminate.
            </p>
            <Button
              variant="destructive"
              className="mt-2"
              onClick={() => {
                if (
                  window.confirm(
                    "Ești sigur că dorești să ștergi contul? Această acțiune este ireversibilă."
                  )
                ) {
                  // Mock delete - will connect to API
                }
              }}
            >
              Șterge contul
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
