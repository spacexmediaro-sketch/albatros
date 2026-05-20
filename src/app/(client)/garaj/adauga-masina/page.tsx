"use client";

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addCar } from "@/lib/actions/car";

const brands = [
  "Aro", "Audi", "BMW", "Dacia", "Fiat", "Ford", "Hyundai",
  "Mercedes-Benz", "Nissan", "Opel", "Peugeot", "Renault",
  "Skoda", "Toyota", "Volvo", "Volkswagen",
];

const fuelOptions = [
  { value: "DIESEL", label: "Diesel" },
  { value: "BENZINA", label: "Benzină" },
  { value: "HIBRID", label: "Hibrid" },
  { value: "ELECTRIC", label: "Electric" },
];

export default function AdaugaMasinaPage() {
  const [state, formAction, pending] = useActionState(addCar, undefined);
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push("/garaj");
    }
  }, [state?.success, router]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Adaugă mașină</h1>

      {state?.error && (
        <div className="rounded-md bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400">
          {state.error}
        </div>
      )}

      <Card className="bg-[#0F1017] border border-white/[0.08] rounded-2xl">
        <CardHeader>
          <CardTitle className="text-white">Detalii vehicul</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="make" className="text-[#E2E4E9]">Marca</Label>
              <select
                id="make"
                name="make"
                required
                className="flex h-9 w-full rounded-md border border-white/10 bg-[#080808] px-3 py-1 text-sm text-white shadow-sm transition-colors placeholder:text-[#4A4B55] focus-visible:outline-none focus-visible:border-[#FF2D2D]/50 focus-visible:ring-1 focus-visible:ring-[#FF2D2D]/50"
              >
                <option value="" className="bg-[#080808]">Selectează marca</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand} className="bg-[#080808]">
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="model" className="text-[#E2E4E9]">Model</Label>
              <Input
                id="model"
                name="model"
                placeholder="ex: Seria 3, Duster"
                required
                className="border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/50"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="year" className="text-[#E2E4E9]">An fabricație</Label>
                <Input
                  id="year"
                  name="year"
                  type="number"
                  min={1990}
                  max={2026}
                  placeholder="2022"
                  required
                  className="border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fuel" className="text-[#E2E4E9]">Combustibil</Label>
                <select
                  id="fuel"
                  name="fuel"
                  required
                  className="flex h-9 w-full rounded-md border border-white/10 bg-[#080808] px-3 py-1 text-sm text-white shadow-sm transition-colors placeholder:text-[#4A4B55] focus-visible:outline-none focus-visible:border-[#FF2D2D]/50 focus-visible:ring-1 focus-visible:ring-[#FF2D2D]/50"
                >
                  <option value="" className="bg-[#080808]">Selectează</option>
                  {fuelOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-[#080808]">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="km" className="text-[#E2E4E9]">Kilometraj</Label>
                <Input
                  id="km"
                  name="km"
                  type="number"
                  min={0}
                  placeholder="125000"
                  className="border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="plate" className="text-[#E2E4E9]">Nr. înmatriculare</Label>
                <Input
                  id="plate"
                  name="plateNumber"
                  placeholder="PH-01-ABC"
                  className="border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="vin" className="text-[#E2E4E9]">VIN (opțional)</Label>
              <Input
                id="vin"
                name="vin"
                placeholder="WBAPH5C55BA123456"
                maxLength={17}
                className="border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/50"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="itpExpires" className="text-[#E2E4E9]">Data expirare ITP</Label>
                <Input
                  id="itpExpires"
                  name="itpExpires"
                  type="date"
                  className="border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rcaExpires" className="text-[#E2E4E9]">Data expirare RCA</Label>
                <Input
                  id="rcaExpires"
                  name="rcaExpires"
                  type="date"
                  className="border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/50"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#FF2D2D] text-[#050505] shadow-[0_0_20px_rgba(255,45,45,0.3)] hover:bg-[#FF2D2D]/90"
              disabled={pending}
            >
              {pending ? "Se adaugă..." : "Adaugă mașină"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
