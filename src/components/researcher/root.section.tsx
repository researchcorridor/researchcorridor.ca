'use client';

import { Button } from '@heroui/react';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

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
      <div className="mx-2 flex justify-end">
        <Button
          variant="light"
          className="gap-2"
          color="primary"
          as={Link}
          href="/researchers"
        >
          View All Researchers
          <FaArrowRightLong />
        </Button>
      </div>
      <ResearchersCarousel data={data} />
    </Section>
  );
}
