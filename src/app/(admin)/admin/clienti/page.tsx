"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface MockClient {
  id: string;
  name: string;
  email: string;
  phone: string;
  cars: string[];
  createdAt: string;
}

const mockClients: MockClient[] = [
  {
    id: "1",
    name: "Andrei Popescu",
    email: "andrei.popescu@gmail.com",
    phone: "0745 123 456",
    cars: ["BMW X3 2020", "Dacia Logan 2017"],
    createdAt: "2025-03-15",
  },
  {
    id: "2",
    name: "Maria Ionescu",
    email: "maria.ionescu@yahoo.com",
    phone: "0722 987 654",
    cars: ["VW Polo 2019"],
    createdAt: "2025-06-22",
  },
  {
    id: "3",
    name: "Elena Stanciu",
    email: "elena.stanciu@gmail.com",
    phone: "0761 234 567",
    cars: ["VW Golf 7 2018"],
    createdAt: "2025-09-10",
  },
  {
    id: "4",
    name: "Gheorghe Dumitrescu",
    email: "g.dumitrescu@outlook.com",
    phone: "0733 456 789",
    cars: ["Dacia Duster 2021", "Ford Focus 2016", "Renault Megane 2020"],
    createdAt: "2024-11-05",
  },
  {
    id: "5",
    name: "Mihai Radu",
    email: "mihai.radu@gmail.com",
    phone: "0754 678 901",
    cars: ["Skoda Octavia 2019"],
    createdAt: "2026-01-18",
  },
];

export default function ClientiPage() {
  const [search, setSearch] = useState("");

  const filtered = mockClients.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search)
  );

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Clien\u021Bi</h1>
          <p className="text-sm text-[#8B8D97] mt-1">
            {mockClients.length} clien\u021Bi \u00eenregistra\u021Bi
          </p>
        </div>
        <Button className="bg-[#FF2D2D] text-[#050505] hover:bg-[#FF2D2D]/90">
          + Client nou
        </Button>
      </div>

      {/* Search */}
      <div className="max-w-sm">
        <input
          type="text"
          placeholder="Caut\u0103 dup\u0103 nume, email sau telefon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 rounded-lg text-sm border border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus:outline-none focus:ring-2 focus:ring-[#FF2D2D]/50 focus:border-[#FF2D2D]/50"
        />
      </div>

      <div className="bg-[#0F1017] border border-white/[0.08] rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.08] bg-[#1A1B25]">
                <th className="text-left p-3 font-medium text-[#8B8D97]">Nume</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Email</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Telefon</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Ma\u0219ini</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">
                  Data \u00eenregistrare
                </th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Ac\u021Biuni</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((client) => (
                <tr
                  key={client.id}
                  className="border-b border-white/[0.08] last:border-0 hover:bg-[#1A1B25] transition-colors"
                >
                  <td className="p-3 font-medium text-white">{client.name}</td>
                  <td className="p-3 text-[#8B8D97]">{client.email}</td>
                  <td className="p-3 text-[#8B8D97]">{client.phone}</td>
                  <td className="p-3">
                    <div className="flex flex-wrap gap-1">
                      {client.cars.map((car) => (
                        <span
                          key={car}
                          className="inline-block bg-white/5 border border-white/[0.08] px-2 py-0.5 rounded text-xs text-[#E2E4E9]"
                        >
                          {car}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-3 text-[#8B8D97]">{client.createdAt}</td>
                  <td className="p-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#E2E4E9] hover:bg-white/10"
                    >
                      Detalii
                    </Button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="p-8 text-center text-[#4A4B55]"
                  >
                    Niciun client g\u0103sit pentru &quot;{search}&quot;
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
