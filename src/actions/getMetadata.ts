'use server';

import { Metadata } from 'next';

import { metadata } from '@/constant/home.text';
import { supabase } from '@/utils/supabase/client';

const EmptyMetadata: Metadata = metadata;

export async function getMetadata(page: string): Promise<Metadata> {
  try {
    const { data, error } = await supabase
      .from('metadata')
      .select('*')
      .eq('page', page)
      .single();

    if (error) {
      console.error('Error fetching metadata:', error);
      return EmptyMetadata;
    }
    return {
      title: data?.title ?? metadata.title,
      description: data?.description ?? metadata.description,
      keywords: data?.keywords ?? metadata.keywords,
      openGraph: {
        url: data?.url ?? metadata.url,
        title: data?.title ?? metadata.title,
        description: data?.description ?? metadata.description,
        siteName: data?.title ?? metadata.title,
        images: data?.image ?? metadata.image,
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: data?.title ?? metadata.title,
        description: data?.description ?? metadata.description,
        images: data?.image ?? metadata.image,
      },
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return {
      title: metadata.title,
      description: metadata.description,
      keywords: metadata.keywords,
      openGraph: {
        url: metadata.url,
        title: metadata.title,
        description: metadata.description,
        siteName: metadata.title,
        images: metadata.image,
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: metadata.title,
        description: metadata.description,
        images: metadata.image,
      },
    };
  }
}
