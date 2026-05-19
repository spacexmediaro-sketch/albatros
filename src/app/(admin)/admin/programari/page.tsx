"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    label: "În așteptare",
    className: "bg-yellow-100 text-yellow-800 border-yellow-200",
  },
  CONFIRMED: {
    label: "Confirmată",
    className: "bg-blue-100 text-blue-800 border-blue-200",
  },
  COMPLETED: {
    label: "Finalizată",
    className: "bg-green-100 text-green-800 border-green-200",
  },
  CANCELLED: {
    label: "Anulată",
    className: "bg-red-100 text-red-800 border-red-200",
  },
};

const mockBookings: MockBooking[] = [
  {
    id: "1",
    client: "Andrei Popescu",
    phone: "0745 123 456",
    service: "Schimb ulei și filtre",
    date: "2026-05-19",
    hour: "09:00",
    status: "CONFIRMED",
  },
  {
    id: "2",
    client: "Maria Ionescu",
    phone: "0722 987 654",
    service: "Diagnoză computerizată",
    date: "2026-05-19",
    hour: "10:30",
    status: "PENDING",
  },
  {
    id: "3",
    client: "Gheorghe Dumitrescu",
    phone: "0733 456 789",
    service: "Geometrie roți",
    date: "2026-05-19",
    hour: "13:00",
    status: "PENDING",
  },
  {
    id: "4",
    client: "Elena Stanciu",
    phone: "0761 234 567",
    service: "Revizie completă",
    date: "2026-05-20",
    hour: "08:30",
    status: "CONFIRMED",
  },
  {
    id: "5",
    client: "Mihai Radu",
    phone: "0754 678 901",
    service: "Vopsitorie parțială",
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
          <h1 className="text-2xl font-bold">Programări</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Gestionează programările clienților
          </p>
        </div>
        <Button>+ Programare nouă</Button>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={filter === "ALL" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("ALL")}
        >
          Toate ({mockBookings.length})
        </Button>
        {(Object.keys(statusConfig) as BookingStatus[]).map((status) => (
          <Button
            key={status}
            variant={filter === status ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(status)}
          >
            {statusConfig[status].label} (
            {mockBookings.filter((b) => b.status === status).length})
          </Button>
        ))}
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-3 font-medium">Client</th>
                  <th className="text-left p-3 font-medium">Telefon</th>
                  <th className="text-left p-3 font-medium">Serviciu</th>
                  <th className="text-left p-3 font-medium">Data</th>
                  <th className="text-left p-3 font-medium">Status</th>
                  <th className="text-left p-3 font-medium">Acțiuni</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((booking) => (
                  <tr key={booking.id} className="border-b last:border-0">
                    <td className="p-3 font-medium">{booking.client}</td>
                    <td className="p-3 text-muted-foreground">
                      {booking.phone}
                    </td>
                    <td className="p-3">{booking.service}</td>
                    <td className="p-3 text-muted-foreground">
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
                        <Button variant="ghost" size="sm">
                          Editează
                        </Button>
                        <Button variant="ghost" size="sm">
                          Anulează
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
