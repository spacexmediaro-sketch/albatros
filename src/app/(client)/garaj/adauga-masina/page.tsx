"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const brands = [
  "BMW",
  "Dacia",
  "Volkswagen",
  "Audi",
  "Mercedes-Benz",
  "Opel",
  "Ford",
  "Renault",
  "Škoda",
  "Toyota",
  "Hyundai",
  "Kia",
  "Peugeot",
  "Citroën",
  "Volvo",
];

const fuelOptions = [
  { value: "DIESEL", label: "Diesel" },
  { value: "BENZINA", label: "Benzină" },
  { value: "HIBRID", label: "Hibrid" },
  { value: "ELECTRIC", label: "Electric" },
];

export default function AdaugaMasinaPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Mock submit - will connect to API later
    setTimeout(() => {
      router.push("/garaj");
    }, 1000);
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#0A2540]">Adaugă mașină</h1>

      <Card>
        <CardHeader>
          <CardTitle>Detalii vehicul</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Marca */}
            <div className="space-y-2">
              <Label htmlFor="make">Marca</Label>
              <select
                id="make"
                name="make"
                required
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <option value="">Selectează marca</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Model */}
            <div className="space-y-2">
              <Label htmlFor="model">Model</Label>
              <Input id="model" name="model" placeholder="ex: Seria 3, Duster" required />
            </div>

            {/* An + Combustibil */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="year">An fabricație</Label>
                <Input
                  id="year"
                  name="year"
                  type="number"
                  min={1990}
                  max={2026}
                  placeholder="2022"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fuel">Combustibil</Label>
                <select
                  id="fuel"
                  name="fuel"
                  required
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="">Selectează</option>
                  {fuelOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Km + Nr. înmatriculare */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="km">Kilometraj</Label>
                <Input
                  id="km"
                  name="km"
                  type="number"
                  min={0}
                  placeholder="125000"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="plate">Nr. înmatriculare</Label>
                <Input
                  id="plate"
                  name="plateNumber"
                  placeholder="PH-01-ABC"
                  required
                />
              </div>
            </div>

            {/* VIN */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="vin">VIN (opțional)</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  disabled
                  title="Disponibil curând"
                  className="text-xs"
                >
                  Scanează VIN
                </Button>
              </div>
              <Input
                id="vin"
                name="vin"
                placeholder="WBAPH5C55BA123456"
                maxLength={17}
              />
            </div>

            {/* ITP + RCA expiry */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="itpExpires">Data expirare ITP</Label>
                <Input id="itpExpires" name="itpExpires" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rcaExpires">Data expirare RCA</Label>
                <Input id="rcaExpires" name="rcaExpires" type="date" />
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-[#E63946] text-white hover:bg-[#E63946]/90"
              disabled={submitting}
            >
              {submitting ? "Se adaugă..." : "Adaugă mașina"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
