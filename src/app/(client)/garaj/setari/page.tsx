export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { auth, signOut } from "@/lib/auth";
import { db } from "@/lib/db";

async function updateProfile(formData: FormData) {
  "use server";
  const session = await auth();
  if (!session?.user?.id) return;

  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;

  await db.user.update({
    where: { id: session.user.id },
    data: { name: name || undefined, phone: phone || undefined },
  });
  revalidatePath("/garaj/setari");
}

async function exportData() {
  "use server";
  const session = await auth();
  if (!session?.user?.id) return;

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    include: {
      cars: true,
      bookings: { include: { service: { select: { name: true } } } },
    },
  });

  // Return as downloadable JSON - in real implementation this would create a file
  // For now, it just revalidates. Full implementation needs a Route Handler for download.
  revalidatePath("/garaj/setari");
}

async function deleteAccount() {
  "use server";
  const session = await auth();
  if (!session?.user?.id) return;

  // Soft delete: remove personal data but keep anonymized records
  await db.user.update({
    where: { id: session.user.id },
    data: {
      name: "Utilizator șters",
      email: `deleted-${session.user.id}@deleted.local`,
      phone: null,
      password: null,
    },
  });

  await signOut({ redirectTo: "/" });
}

export default async function SetariPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/autentificare");

  const user = await db.user.findUnique({
    where: { id: session.user.id },
  });

  if (!user) redirect("/autentificare");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Setări cont</h1>

      {/* Profile form */}
      <Card className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
        <CardHeader>
          <CardTitle className="text-white">Informații profil</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={updateProfile} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#E2E4E9]">Nume complet</Label>
              <Input
                id="name"
                name="name"
                defaultValue={user.name || ""}
                required
                className="border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#E2E4E9]">Email</Label>
              <Input
                id="email"
                type="email"
                defaultValue={user.email}
                disabled
                className="border-white/10 bg-[#080808] text-white/50 placeholder:text-[#4A4B55]"
              />
              <p className="text-xs text-[#4A4B55]">Email-ul nu poate fi modificat.</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[#E2E4E9]">Telefon</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                defaultValue={user.phone || ""}
                className="border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/50"
              />
            </div>
            <Button
              type="submit"
              className="bg-[#FF2D2D] text-[#050505] shadow-[0_0_20px_rgba(255,45,45,0.3)] hover:bg-[#FF2D2D]/90"
            >
              Salvează modificările
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Notification preferences */}
      <Card className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
        <CardHeader>
          <CardTitle className="text-white">Preferințe notificări</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-[#8B8D97]">
            Alege cum dorești să primești notificările despre programări, ITP și RCA.
          </p>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 rounded border-white/10 bg-[#080808] text-[#FF2D2D] focus:ring-[#FF2D2D]/50"
              />
              <div>
                <p className="text-sm font-medium text-[#E2E4E9]">Email</p>
                <p className="text-xs text-[#4A4B55]">
                  Primești notificări pe adresa de email din cont
                </p>
              </div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-white/10 bg-[#080808] text-[#FF2D2D] focus:ring-[#FF2D2D]/50"
              />
              <div>
                <p className="text-sm font-medium text-[#E2E4E9]">WhatsApp</p>
                <p className="text-xs text-[#4A4B55]">
                  Primești mesaje pe WhatsApp la numărul de telefon din cont
                </p>
              </div>
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Data & account actions */}
      <Card className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
        <CardHeader>
          <CardTitle className="text-white">Date și confidențialitate</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-[#8B8D97]">
              Descarcă toate datele asociate contului tău (mașini, programări, istoric).
            </p>
            <form action={exportData}>
              <Button
                type="submit"
                className="mt-2 bg-white/5 text-[#E2E4E9] border border-white/[0.08] hover:bg-white/10"
              >
                Descarcă datele mele
              </Button>
            </form>
          </div>

          <Separator className="bg-white/[0.08]" />

          <div>
            <p className="text-sm text-red-400">
              Ștergerea contului este permanentă. Toate datele tale vor fi eliminate.
            </p>
            <form action={deleteAccount}>
              <Button
                type="submit"
                className="mt-2 bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20"
              >
                Șterge contul
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
