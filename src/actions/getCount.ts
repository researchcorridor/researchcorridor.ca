'use server';

import { supabase } from '@/utils/supabase/client';

export async function getCount(key: string): Promise<number> {
  try {
    const { count, error } = await supabase
      .from(key)
      .select('*', { count: 'exact' });
    if (error) throw error;

    return count || 0;
  } catch (error) {
    console.error('Error fetching books:', error);
    return 0;
  }
}
