"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

const cars = [
  { id: "all", label: "Toate mașinile" },
  { id: "car-1", label: "BMW Seria 3 2019" },
  { id: "car-2", label: "Dacia Duster 2022" },
];

const mockHistory = [
  {
    id: "h-1",
    carId: "car-1",
    car: "BMW Seria 3 2019",
    date: "2026-03-12",
    title: "Schimb ulei + filtre",
    description: "Ulei motor 5W-30, filtru ulei, filtru aer, filtru habitaclu",
    km: 120000,
    cost: 850,
  },
  {
    id: "h-2",
    carId: "car-2",
    car: "Dacia Duster 2022",
    date: "2026-02-20",
    title: "Revizie completă 45.000 km",
    description: "Schimb ulei, filtre, verificare frâne, lichide",
    km: 45000,
    cost: 680,
  },
  {
    id: "h-3",
    carId: "car-1",
    car: "BMW Seria 3 2019",
    date: "2025-11-05",
    title: "Geometrie roți 3D",
    description: "Aliniere geometrie pe ambele punți, reglaj convergență",
    km: 112000,
    cost: 250,
  },
  {
    id: "h-4",
    carId: "car-2",
    car: "Dacia Duster 2022",
    date: "2025-09-14",
    title: "Schimb anvelope iarnă",
    description: "Montare, echilibrare 4 anvelope iarnă 215/65 R16",
    km: 38000,
    cost: 200,
  },
  {
    id: "h-5",
    carId: "car-1",
    car: "BMW Seria 3 2019",
    date: "2025-06-20",
    title: "Înlocuire plăcuțe frână",
    description: "Plăcuțe frână față și spate, verificare discuri",
    km: 105000,
    cost: 620,
  },
];

export default function IstoricPage() {
  const [selectedCar, setSelectedCar] = useState("all");

  const filteredHistory =
    selectedCar === "all"
      ? mockHistory
      : mockHistory.filter((h) => h.carId === selectedCar);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#0A2540]">Istoric reparații</h1>
        <div className="flex items-center gap-2">
          <Label htmlFor="car-filter" className="text-sm text-[#0A2540]/60">
            Filtrează:
          </Label>
          <select
            id="car-filter"
            value={selectedCar}
            onChange={(e) => setSelectedCar(e.target.value)}
            className="flex h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            {cars.map((car) => (
              <option key={car.id} value={car.id}>
                {car.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredHistory.length === 0 ? (
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-[#0A2540]/60">Nicio intervenție găsită pentru mașina selectată.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="relative space-y-6 pl-6 before:absolute before:left-2 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gray-200">
          {filteredHistory.map((entry) => (
            <div key={entry.id} className="relative">
              <span className="absolute -left-6 top-1.5 h-3 w-3 rounded-full border-2 border-[#E63946] bg-white" />
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <p className="font-medium text-[#0A2540]">{entry.title}</p>
                      <p className="text-sm text-[#0A2540]/60">{entry.description}</p>
                      <div className="flex items-center gap-3 text-xs text-[#0A2540]/50">
                        <span>
                          {new Date(entry.date).toLocaleDateString("ro-RO", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        <span>{entry.km.toLocaleString("ro-RO")} km</span>
                        <Badge variant="secondary" className="text-xs">
                          {entry.car}
                        </Badge>
                      </div>
                    </div>
                    <Badge variant="outline" className="shrink-0">
                      {entry.cost} lei
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
