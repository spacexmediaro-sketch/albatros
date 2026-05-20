import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";

export default async function ClientiPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const search = q || "";

  const clients = await db.user.findMany({
    where: search
      ? {
          OR: [
            { name: { contains: search, mode: "insensitive" } },
            { email: { contains: search, mode: "insensitive" } },
            { phone: { contains: search } },
          ],
        }
      : undefined,
    include: {
      cars: { select: { make: true, model: true, year: true } },
    },
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Clienți</h1>
          <p className="text-sm text-[#8B8D97] mt-1">
            {clients.length} clienți{search ? ` pentru "${search}"` : ""}
          </p>
        </div>
      </div>

      {/* Search */}
      <form className="max-w-sm">
        <input
          type="text"
          name="q"
          defaultValue={search}
          placeholder="Caută după nume, email sau telefon..."
          className="w-full px-3 py-2 rounded-lg text-sm border border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus:outline-none focus:ring-2 focus:ring-[#FF2D2D]/50 focus:border-[#FF2D2D]/50"
        />
      </form>

      <div className="bg-[#0F1017] border border-white/[0.08] rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.08] bg-[#1A1B25]">
                <th className="text-left p-3 font-medium text-[#8B8D97]">Nume</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Email</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Telefon</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Mașini</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">
                  Data înregistrare
                </th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr
                  key={client.id}
                  className="border-b border-white/[0.08] last:border-0 hover:bg-[#1A1B25] transition-colors"
                >
                  <td className="p-3 font-medium text-white">{client.name || "—"}</td>
                  <td className="p-3 text-[#8B8D97]">{client.email}</td>
                  <td className="p-3 text-[#8B8D97]">{client.phone || "—"}</td>
                  <td className="p-3">
                    <div className="flex flex-wrap gap-1">
                      {client.cars.map((car) => (
                        <span
                          key={`${car.make}-${car.model}-${car.year}`}
                          className="inline-block bg-white/5 border border-white/[0.08] px-2 py-0.5 rounded text-xs text-[#E2E4E9]"
                        >
                          {car.make} {car.model} {car.year}
                        </span>
                      ))}
                      {client.cars.length === 0 && (
                        <span className="text-xs text-[#4A4B55]">Nicio mașină</span>
                      )}
                    </div>
                  </td>
                  <td className="p-3 text-[#8B8D97]">
                    {client.createdAt.toLocaleDateString("ro-RO")}
                  </td>
                </tr>
              ))}
              {clients.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="p-8 text-center text-[#4A4B55]"
                  >
                    {search
                      ? `Niciun client găsit pentru "${search}"`
                      : "Niciun client înregistrat."}
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
