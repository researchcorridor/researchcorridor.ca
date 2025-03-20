'use server';

import { supabase } from '@/utils/supabase/client';

export async function setPageBody(
  slug: string,
  html: string,
  css: string,
): Promise<string | null> {
  const { error } = await supabase
    .from('pages')
    .update({ html, css })
    .eq('slug', slug)
    .single();
  if (error) {
    console.error('Error updating page:', error);
    return error.message;
  }
  return null;
}

export async function getPageBody(slug: string): Promise<{
  html: string;
  css: string;
  error?: string;
}> {
  const { data, error } = await supabase
    .from('pages')
    .select('html, css')
    .eq('slug', slug)
    .single();

  if (!data) {
    const { error: insertError } = await supabase
      .from('pages')
      .insert({ slug, html: '', css: '' });

    if (insertError) {
      console.error('Error creating page:', insertError);
      return { html: '', css: '', error: insertError.message };
    }

    return { html: '', css: '' };
  }

  if (error) {
    console.error('Error fetching page:', error);
    return { html: '', css: '', error: 'Server Error' };
  }

  const { html, css } = data;
  return { html, css };
}
