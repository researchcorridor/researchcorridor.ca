import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { getMetadata } from '@/actions/getMetadata';
import PageCard from '@/components/collaboration/page-card';
import Section from '@/components/ui/Section';
import { supabase } from '@/utils/supabase/client';

export async function generateMetadata(): Promise<Metadata> {
  const data: Metadata = await getMetadata('Collaborations');
  return {
    ...data,
  };
}

export default async function CollaborationPage() {
  const { data: metadata, error } = await supabase
    .from('metadata')
    .select('*')
    .eq('page', 'Collaborations')
    .single();

  const { data, error: error2 } = await supabase
    .from('collaboration')
    .select('*');

  if (error || error2) {
    console.log(error);
    console.log(error2);
    redirect('/');
  }
  return (
    <Section
      title={metadata.title}
      description={metadata?.detail}
      sectionClassName="bg-white py-32 max-md:py-20"
      innerClassName="mx-auto max-w-7xl"
    >
      <div className="m-2 grid grid-cols-2 gap-7 gap-y-10 max-[900px]:grid-cols-1">
        {data.map((d, i) => (
          <PageCard key={i} {...d} />
        ))}
      </div>
    </Section>
  );
}
