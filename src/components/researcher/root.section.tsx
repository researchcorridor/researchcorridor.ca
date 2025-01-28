'use client';

import useRefContext from '@/context/ref';
import { ResearcherCardType } from '@/types/researcher.type';

import Section from '../ui/Section';
import ResearchersCarousel from './carousel';

export type ResearchersRootType = {
  show: boolean;
  data: ResearcherCardType[];
  title: string;
  description: string;
};

export default function ResearchersRootSection({
  show = false,
  data = [],
  description,
  title,
}: ResearchersRootType) {
  const { researchersRef } = useRefContext();
  if (!show) return null;
  return (
    <Section
      ref={researchersRef}
      bgWhite
      show={show}
      title={title}
      description={description}
    >
      <ResearchersCarousel data={data} />
    </Section>
  );
}
