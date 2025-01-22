'use server';

import { createClient } from '@/utils/supabase/server';

export const userLogin = async (
  email: string,
  password: string,
): Promise<string | void> => {
  try {
    const supabase = await createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return '/dashboard';
  } catch (error) {
    console.log('error', error);
    throw 'Invalid email or password';
  }
};
