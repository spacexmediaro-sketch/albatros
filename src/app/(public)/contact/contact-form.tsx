'use client';

import { useActionState } from 'react';
import { contactAction } from '@/lib/actions/contact';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const initialState = { success: false, message: '', error: '' };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(contactAction, initialState);

  return (
    <Card className="bg-[#0F1017] border border-white/[0.08] rounded-2xl shadow-none">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">Trimite un mesaj</h2>

        {state?.success && (
          <div className="mb-4 rounded-md bg-green-500/10 border border-green-500/20 p-4 text-sm text-green-400">
            {state.message}
          </div>
        )}

        {state?.error && (
          <div className="mb-4 rounded-md bg-red-500/10 border border-red-500/20 p-4 text-sm text-red-400">
            {state.error}
          </div>
        )}

        <form action={formAction} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#E2E4E9]">Nume</Label>
              <Input id="name" name="name" placeholder="Numele tau" required className="border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/30" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[#E2E4E9]">Telefon</Label>
              <Input id="phone" name="phone" type="tel" placeholder="07xx xxx xxx" required className="border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/30" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#E2E4E9]">Email</Label>
            <Input id="email" name="email" type="email" placeholder="email@exemplu.ro" className="border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/30" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-[#E2E4E9]">Mesaj</Label>
            <Textarea id="message" name="message" placeholder="Descrie problema sau intrebarea ta..." rows={5} required className="border-white/10 bg-[#080808] text-white placeholder:text-[#4A4B55] focus-visible:border-[#FF2D2D]/50 focus-visible:ring-[#FF2D2D]/30" />
          </div>
          <Button type="submit" className="w-full bg-[#FF2D2D] text-[#050505] font-semibold shadow-[0_0_20px_rgba(255,45,45,0.3)] hover:bg-[#FF5555]" disabled={pending}>
            {pending ? 'Se trimite...' : 'Trimite mesajul'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
