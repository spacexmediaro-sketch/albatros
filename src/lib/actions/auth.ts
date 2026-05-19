'use server';

import bcrypt from 'bcryptjs';
import { signIn, signOut } from '@/lib/auth';
import { db } from '@/lib/db';
import { registerSchema } from '@/lib/validation/schemas';

export async function registerUser(prevState: any, formData: FormData) {
  const raw = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    password: formData.get('password') as string,
    confirmPassword: formData.get('confirmPassword') as string,
  };

  const parsed = registerSchema.safeParse(raw);
  if (!parsed.success) {
    const firstError = parsed.error.errors[0]?.message || 'Date invalide';
    return { error: firstError };
  }

  const { name, email, phone, password } = parsed.data;

  const existingUser = await db.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return { error: 'Există deja un cont cu acest email' };
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  await db.user.create({
    data: {
      name,
      email,
      phone,
      password: hashedPassword,
    },
  });

  return { success: true };
}

export async function loginWithCredentials(prevState: any, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    return { success: true };
  } catch {
    return { error: 'Email sau parolă greșite' };
  }
}

export async function loginWithGoogle() {
  await signIn('google');
}

export async function logoutAction() {
  await signOut({ redirectTo: '/' });
}
