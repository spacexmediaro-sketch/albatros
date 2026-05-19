'use client';

import { useActionState } from 'react';
import { programareAction } from '@/lib/actions/programare';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const services = [
  'Diagnoza computerizata',
  'Schimb ulei si filtre',
  'Reparatii motor diesel',
  'Tinichigerie auto',
  'Vopsitorie auto',
  'Geometrie roti 3D',
  'Electrica auto',
  'Revizie periodica',
  'Pregatire ITP',
  'Altele',
];

const initialState = { success: false, message: '', error: '' };

const inputClasses =
  "w-full rounded-lg border border-white/10 bg-[#080808] px-3 py-2.5 text-sm text-white placeholder:text-[#4A4B55] focus-visible:outline-none focus-visible:border-[#FF2D2D]/50 focus-visible:ring-2 focus-visible:ring-[#FF2D2D]/30 transition-colors";

const selectClasses =
  "w-full rounded-lg border border-white/10 bg-[#080808] px-3 py-2.5 text-sm text-white focus-visible:outline-none focus-visible:border-[#FF2D2D]/50 focus-visible:ring-2 focus-visible:ring-[#FF2D2D]/30 transition-colors appearance-none";

const labelClasses = "text-sm font-medium text-[#E2E4E9]";

export function ProgramareForm() {
  const [state, formAction, pending] = useActionState(programareAction, initialState);

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0F1017] p-6 sm:p-8">
      {state?.success && (
        <div className="mb-6 rounded-lg bg-green-500/10 border border-green-500/20 p-4 text-sm text-green-400">
          {state.message}
        </div>
      )}

      {state?.error && (
        <div className="mb-6 rounded-lg bg-red-500/10 border border-red-500/20 p-4 text-sm text-red-400">
          {state.error}
        </div>
      )}

      <form action={formAction} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className={labelClasses}>Nume complet *</label>
            <input id="name" name="name" placeholder="Ion Popescu" required className={inputClasses} />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className={labelClasses}>Telefon *</label>
            <input id="phone" name="phone" type="tel" placeholder="07xx xxx xxx" required className={inputClasses} />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="car" className={labelClasses}>Masina (marca + model) *</label>
            <input id="car" name="car" placeholder="ex: VW Golf 7 2.0 TDI" required className={inputClasses} />
          </div>
          <div className="space-y-2">
            <label htmlFor="year" className={labelClasses}>An fabricatie</label>
            <input id="year" name="year" type="number" placeholder="2019" className={inputClasses} />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className={labelClasses}>Serviciu dorit *</label>
          <select id="service" name="service" className={selectClasses} required>
            <option value="" className="bg-[#080808] text-[#4A4B55]">Alege serviciul</option>
            {services.map((s) => (
              <option key={s} value={s} className="bg-[#080808] text-white">{s}</option>
            ))}
          </select>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="date" className={labelClasses}>Data preferata</label>
            <input id="date" name="date" type="date" className={inputClasses} />
          </div>
          <div className="space-y-2">
            <label htmlFor="time" className={labelClasses}>Ora preferata</label>
            <select id="time" name="time" className={selectClasses}>
              <option value="" className="bg-[#080808] text-[#4A4B55]">Orice ora</option>
              <option value="08:00" className="bg-[#080808] text-white">08:00</option>
              <option value="09:00" className="bg-[#080808] text-white">09:00</option>
              <option value="10:00" className="bg-[#080808] text-white">10:00</option>
              <option value="11:00" className="bg-[#080808] text-white">11:00</option>
              <option value="12:00" className="bg-[#080808] text-white">12:00</option>
              <option value="13:00" className="bg-[#080808] text-white">13:00</option>
              <option value="14:00" className="bg-[#080808] text-white">14:00</option>
              <option value="15:00" className="bg-[#080808] text-white">15:00</option>
              <option value="16:00" className="bg-[#080808] text-white">16:00</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="notes" className={labelClasses}>Detalii suplimentare</label>
          <Textarea
            id="notes"
            name="notes"
            placeholder="Descrie problema sau ce doresti..."
            rows={4}
            className="border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/30"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-[#FF2D2D] text-[#050505] font-semibold shadow-[0_0_20px_rgba(255,45,45,0.3)] hover:bg-[#FF5555] transition-all duration-200"
          size="lg"
          disabled={pending}
        >
          {pending ? 'Se trimite...' : 'Trimite programarea'}
        </Button>
        <p className="text-xs text-center text-[#8B8D97]">
          Te vom contacta telefonic pentru confirmare in maxim 2 ore lucratoare.
        </p>
      </form>
    </div>
  );
}
