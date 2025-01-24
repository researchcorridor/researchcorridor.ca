'use server';

import { createClient } from '@/utils/supabase/server';

export const userLogin = async (
  email: string,
  password: string,
): Promise<{
  error: string;
  redirect: string;
}> => {
  try {
    const supabase = await createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return { error: '', redirect: '/dashboard' };
  } catch (error) {
    console.log('error', error);
    return { error: 'Invalid email or password', redirect: '' };
  }
};

export const userLogout = async (): Promise<string | void> => {
  const supabase = await createClient();
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch {
    throw 'Failed to logout';
  } finally {
    return '/login';
  }
};
