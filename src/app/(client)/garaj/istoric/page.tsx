"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

const cars = [
  { id: "all", label: "Toate masinile" },
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
    title: "Revizie completa 45.000 km",
    description: "Schimb ulei, filtre, verificare frane, lichide",
    km: 45000,
    cost: 680,
  },
  {
    id: "h-3",
    carId: "car-1",
    car: "BMW Seria 3 2019",
    date: "2025-11-05",
    title: "Geometrie roti 3D",
    description: "Aliniere geometrie pe ambele punti, reglaj convergenta",
    km: 112000,
    cost: 250,
  },
  {
    id: "h-4",
    carId: "car-2",
    car: "Dacia Duster 2022",
    date: "2025-09-14",
    title: "Schimb anvelope iarna",
    description: "Montare, echilibrare 4 anvelope iarna 215/65 R16",
    km: 38000,
    cost: 200,
  },
  {
    id: "h-5",
    carId: "car-1",
    car: "BMW Seria 3 2019",
    date: "2025-06-20",
    title: "Inlocuire placute frana",
    description: "Placute frana fata si spate, verificare discuri",
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
        <h1 className="text-2xl font-bold text-white">Istoric reparatii</h1>
        <div className="flex items-center gap-2">
          <Label htmlFor="car-filter" className="text-sm text-[#8B8D97]">
            Filtreaza:
          </Label>
          <select
            id="car-filter"
            value={selectedCar}
            onChange={(e) => setSelectedCar(e.target.value)}
            className="flex h-9 rounded-md border border-white/10 bg-[#080808] px-3 py-1 text-sm text-white shadow-sm transition-colors focus-visible:outline-none focus-visible:border-[#FF2D2D]/50 focus-visible:ring-1 focus-visible:ring-[#FF2D2D]/50"
          >
            {cars.map((car) => (
              <option key={car.id} value={car.id} className="bg-[#080808]">
                {car.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredHistory.length === 0 ? (
        <Card className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
          <CardContent className="p-6 text-center">
            <p className="text-[#8B8D97]">Nicio interventie gasita pentru masina selectata.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="relative space-y-6 pl-6 before:absolute before:left-2 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-white/[0.08]">
          {filteredHistory.map((entry) => (
            <div key={entry.id} className="relative">
              <span className="absolute -left-6 top-1.5 h-3 w-3 rounded-full border-2 border-[#FF2D2D] bg-[#0F1017]" />
              <Card className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <p className="font-medium text-white">{entry.title}</p>
                      <p className="text-sm text-[#8B8D97]">{entry.description}</p>
                      <div className="flex items-center gap-3 text-xs text-[#4A4B55]">
                        <span>
                          {new Date(entry.date).toLocaleDateString("ro-RO", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        <span>{entry.km.toLocaleString("ro-RO")} km</span>
                        <Badge className="bg-white/5 text-[#E2E4E9] border border-white/[0.08] text-xs">
                          {entry.car}
                        </Badge>
                      </div>
                    </div>
                    <Badge className="shrink-0 bg-white/5 text-[#E2E4E9] border border-white/[0.08]">
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
