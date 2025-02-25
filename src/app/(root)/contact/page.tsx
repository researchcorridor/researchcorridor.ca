import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { getMetadata } from '@/actions/getMetadata';
import ContactForm from '@/components/contact/form';
import Section from '@/components/ui/Section';
import { supabase } from '@/utils/supabase/client';

export async function generateMetadata(): Promise<Metadata> {
  const data: Metadata = await getMetadata('contact');
  return {
    ...data,
  };
}

export default async function ContactPage() {
  const { data: metadata, error } = await supabase
    .from('metadata')
    .select('*')
    .eq('page', 'contact')
    .single();

  if (error) {
    console.log(error);
    redirect('/');
  }
  return (
    <Section
      title={metadata.title}
      description={metadata?.detail}
      sectionClassName="bg-white py-32 max-md:py-20"
      innerClassName="mx-auto max-w-7xl"
    >
      <div className="">
        <ContactForm />
      </div>
    </Section>
  );
}
