import SubmitPaperForm from '@/components/submit-paper/form';
import Section from '@/components/ui/Section';

export default function SubmitPaperPage() {
  return (
    <Section
      title="Online Paper Submit"
      description="Submit your paper to our conference"
      sectionClassName="bg-white py-32 max-md:py-20"
      innerClassName="mx-auto max-w-7xl"
    >
      <SubmitPaperForm />
    </Section>
  );
}
