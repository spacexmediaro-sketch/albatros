"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Servicii - Admin",
  description: "Gestionare servicii Albatros A Service",
  path: "/admin/servicii",
  noIndex: true,
});

async function togglePublishedAction(formData: FormData) {
  "use server";
  const id = formData.get("id") as string;
  const current = formData.get("published") === "true";
  try {
    await db.service.update({ where: { id }, data: { published: !current } });
  } catch (e) {
    console.error("[servicii] togglePublished error:", e);
  }
  revalidatePath("/admin/servicii");
}

async function deleteServiceAction(formData: FormData) {
  "use server";
  const id = formData.get("id") as string;
  try {
    await db.service.delete({ where: { id } });
  } catch (e) {
    console.error("[servicii] deleteService error:", e);
  }
  revalidatePath("/admin/servicii");
}

async function createServiceAction(formData: FormData) {
  "use server";
  const name = (formData.get("name") as string)?.trim();
  const category = (formData.get("category") as string)?.trim();
  const priceFrom = parseInt(formData.get("priceFrom") as string) || null;
  const durationMin = parseInt(formData.get("durationMin") as string) || 60;
  const shortDesc = (formData.get("shortDesc") as string)?.trim() || "";

  if (!name || !category) return;

  const slug = name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .slice(0, 80);
  const uniqueSlug = `${slug}-${Date.now()}`;

  try {
    await db.service.create({
      data: {
        slug: uniqueSlug,
        name,
        shortDesc,
        fullContent: shortDesc,
        category,
        priceFrom,
        durationMin,
        published: true,
      },
    });
  } catch (e) {
    console.error("[servicii] createService error:", e);
  }
  revalidatePath("/admin/servicii");
}

function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}min` : `${h}h`;
}

export default async function ServiciiPage() {
  const services = await db.service.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Servicii</h1>
          <p className="text-sm text-[#8B8D97] mt-1">
            {services.length} servicii configurate
          </p>
        </div>
      </div>

      {/* Formular adăugare serviciu */}
      <div className="bg-[#0F1017] border border-white/[0.08] rounded-2xl p-6">
        <h2 className="text-base font-semibold text-white mb-4">+ Adaugă serviciu nou</h2>
        <form action={createServiceAction} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <input
            name="name"
            required
            placeholder="Denumire serviciu *"
            className="px-3 py-2 rounded-lg text-sm border border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus:outline-none focus:ring-2 focus:ring-[#FF2D2D]/50"
          />
          <input
            name="category"
            required
            placeholder="Categorie *"
            className="px-3 py-2 rounded-lg text-sm border border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus:outline-none focus:ring-2 focus:ring-[#FF2D2D]/50"
          />
          <input
            name="shortDesc"
            placeholder="Descriere scurtă"
            className="px-3 py-2 rounded-lg text-sm border border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus:outline-none focus:ring-2 focus:ring-[#FF2D2D]/50"
          />
          <input
            name="priceFrom"
            type="number"
            min={0}
            placeholder="Preț de la (RON)"
            className="px-3 py-2 rounded-lg text-sm border border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus:outline-none focus:ring-2 focus:ring-[#FF2D2D]/50"
          />
          <input
            name="durationMin"
            type="number"
            min={1}
            defaultValue={60}
            placeholder="Durată (minute)"
            className="px-3 py-2 rounded-lg text-sm border border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus:outline-none focus:ring-2 focus:ring-[#FF2D2D]/50"
          />
          <Button
            type="submit"
            className="bg-[#FF2D2D] text-[#050505] hover:bg-[#FF2D2D]/90"
          >
            Adaugă serviciu
          </Button>
        </form>
      </div>

      <div className="bg-[#0F1017] border border-white/[0.08] rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.08] bg-[#1A1B25]">
                <th className="text-left p-3 font-medium text-[#8B8D97]">Nume</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Categorie</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Preț de la</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Durată</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Status</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Acțiuni</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr
                  key={service.id}
                  className="border-b border-white/[0.08] last:border-0 hover:bg-[#1A1B25] transition-colors"
                >
                  <td className="p-3 font-medium text-white">{service.name}</td>
                  <td className="p-3 text-[#8B8D97]">{service.category}</td>
                  <td className="p-3 text-[#E2E4E9]">
                    {service.priceFrom != null ? `${service.priceFrom} RON` : "—"}
                  </td>
                  <td className="p-3 text-[#8B8D97]">
                    {formatDuration(service.durationMin)}
                  </td>
                  <td className="p-3">
                    <Badge
                      variant="outline"
                      className={
                        service.published
                          ? "bg-green-500/10 text-green-400 border-green-500/30"
                          : "bg-white/5 text-[#4A4B55] border-white/[0.08]"
                      }
                    >
                      {service.published ? "Activ" : "Inactiv"}
                    </Badge>
                  </td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <form action={togglePublishedAction}>
                        <input type="hidden" name="id" value={service.id} />
                        <input type="hidden" name="published" value={String(service.published)} />
                        <Button
                          type="submit"
                          variant="ghost"
                          size="sm"
                          className="text-[#E2E4E9] hover:bg-white/10"
                        >
                          {service.published ? "Dezactivează" : "Activează"}
                        </Button>
                      </form>
                      <form
                        action={deleteServiceAction}
                        onSubmit={(e) => {
                          if (!confirm(`Ștergi serviciul "${service.name}"?`)) e.preventDefault();
                        }}
                      >
                        <input type="hidden" name="id" value={service.id} />
                        <Button
                          type="submit"
                          variant="ghost"
                          size="sm"
                          className="text-[#FF2D2D] hover:bg-[#FF2D2D]/10"
                        >
                          Șterge
                        </Button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
              {services.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-[#4A4B55]">
                    Niciun serviciu configurat încă.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
