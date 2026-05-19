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
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">Trimite un mesaj</h2>

        {state?.success && (
          <div className="mb-4 rounded-md bg-green-50 border border-green-200 p-4 text-sm text-green-800">
            {state.message}
          </div>
        )}

        {state?.error && (
          <div className="mb-4 rounded-md bg-red-50 border border-red-200 p-4 text-sm text-red-800">
            {state.error}
          </div>
        )}

        <form action={formAction} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nume</Label>
              <Input id="name" name="name" placeholder="Numele tau" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefon</Label>
              <Input id="phone" name="phone" type="tel" placeholder="07xx xxx xxx" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="email@exemplu.ro" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Mesaj</Label>
            <Textarea id="message" name="message" placeholder="Descrie problema sau intrebarea ta..." rows={5} required />
          </div>
          <Button type="submit" className="w-full" disabled={pending}>
            {pending ? 'Se trimite...' : 'Trimite mesajul'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
