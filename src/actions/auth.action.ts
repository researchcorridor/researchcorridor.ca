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
  }
};

export const getProfile = async (): Promise<{
  name: string;
  email: string;
  picture: string;
}> => {
  const supabase = await createClient();
  try {
    const { data: user, error } = await supabase.auth.getUser();
    if (error) throw error;
    const profile = {
      name: '',
      email: user?.user?.email || '',
      picture: '',
    };

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select()
        .eq('user_id', user?.user?.id)
        .single();
      if (error) throw error;
      profile.name = data?.name || '';
    } finally {
      return profile;
    }
  } catch (error) {
    console.log('error', error);
    return { name: '', email: '', picture: '' };
  }
};

export const userChangePassword = async (password: string): Promise<void> => {
  const supabase = await createClient();
  try {
    const { error } = await supabase.auth.updateUser({
      password,
    });
    if (error) throw error;
  } catch {
    throw 'Failed to change password';
  }
};
