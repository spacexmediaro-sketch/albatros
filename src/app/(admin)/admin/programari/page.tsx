"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type BookingStatus = "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED";

interface MockBooking {
  id: string;
  client: string;
  phone: string;
  service: string;
  date: string;
  hour: string;
  status: BookingStatus;
}

const statusConfig: Record<
  BookingStatus,
  { label: string; className: string }
> = {
  PENDING: {
    label: "\u00cen a\u0219teptare",
    className: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  },
  CONFIRMED: {
    label: "Confirmat\u0103",
    className: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  },
  COMPLETED: {
    label: "Finalizat\u0103",
    className: "bg-green-500/10 text-green-400 border-green-500/30",
  },
  CANCELLED: {
    label: "Anulat\u0103",
    className: "bg-red-500/10 text-red-400 border-red-500/30",
  },
};

const mockBookings: MockBooking[] = [
  {
    id: "1",
    client: "Andrei Popescu",
    phone: "0745 123 456",
    service: "Schimb ulei \u0219i filtre",
    date: "2026-05-19",
    hour: "09:00",
    status: "CONFIRMED",
  },
  {
    id: "2",
    client: "Maria Ionescu",
    phone: "0722 987 654",
    service: "Diagnoz\u0103 computerizat\u0103",
    date: "2026-05-19",
    hour: "10:30",
    status: "PENDING",
  },
  {
    id: "3",
    client: "Gheorghe Dumitrescu",
    phone: "0733 456 789",
    service: "Geometrie ro\u021Bi",
    date: "2026-05-19",
    hour: "13:00",
    status: "PENDING",
  },
  {
    id: "4",
    client: "Elena Stanciu",
    phone: "0761 234 567",
    service: "Revizie complet\u0103",
    date: "2026-05-20",
    hour: "08:30",
    status: "CONFIRMED",
  },
  {
    id: "5",
    client: "Mihai Radu",
    phone: "0754 678 901",
    service: "Vopsitorie par\u021Bial\u0103",
    date: "2026-05-18",
    hour: "11:00",
    status: "COMPLETED",
  },
];

export default function ProgramariPage() {
  const [filter, setFilter] = useState<BookingStatus | "ALL">("ALL");

  const filtered =
    filter === "ALL"
      ? mockBookings
      : mockBookings.filter((b) => b.status === filter);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Program\u0103ri</h1>
          <p className="text-sm text-[#8B8D97] mt-1">
            Gestioneaz\u0103 program\u0103rile clien\u021Bilor
          </p>
        </div>
        <Button className="bg-[#FF2D2D] text-[#050505] hover:bg-[#FF2D2D]/90">
          + Programare nou\u0103
        </Button>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={filter === "ALL" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("ALL")}
          className={
            filter === "ALL"
              ? "bg-[#FF2D2D] text-[#050505] hover:bg-[#FF2D2D]/90"
              : "bg-white/5 text-[#E2E4E9] border-white/[0.08] hover:bg-white/10"
          }
        >
          Toate ({mockBookings.length})
        </Button>
        {(Object.keys(statusConfig) as BookingStatus[]).map((status) => (
          <Button
            key={status}
            variant={filter === status ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(status)}
            className={
              filter === status
                ? "bg-[#FF2D2D] text-[#050505] hover:bg-[#FF2D2D]/90"
                : "bg-white/5 text-[#E2E4E9] border-white/[0.08] hover:bg-white/10"
            }
          >
            {statusConfig[status].label} (
            {mockBookings.filter((b) => b.status === status).length})
          </Button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-[#0F1017] border border-white/[0.08] rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.08] bg-[#1A1B25]">
                <th className="text-left p-3 font-medium text-[#8B8D97]">Client</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Telefon</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Serviciu</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Data</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Status</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Ac\u021Biuni</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-b border-white/[0.08] last:border-0 hover:bg-[#1A1B25] transition-colors"
                >
                  <td className="p-3 font-medium text-white">{booking.client}</td>
                  <td className="p-3 text-[#8B8D97]">{booking.phone}</td>
                  <td className="p-3 text-[#E2E4E9]">{booking.service}</td>
                  <td className="p-3 text-[#8B8D97]">
                    {booking.date} {booking.hour}
                  </td>
                  <td className="p-3">
                    <Badge
                      variant="outline"
                      className={statusConfig[booking.status].className}
                    >
                      {statusConfig[booking.status].label}
                    </Badge>
                  </td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#E2E4E9] hover:bg-white/10"
                      >
                        Editeaz\u0103
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#8B8D97] hover:bg-white/10"
                      >
                        Anuleaz\u0103
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
