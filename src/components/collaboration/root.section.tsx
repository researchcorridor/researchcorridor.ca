'use client';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

import useRefContext from '@/context/ref';
import { CollaborationCardType } from '@/types/collaboration.type';

import Section from '../ui/Section';
import CollaborationCarousel from './carousel';

export type CollaborationRootType = {
  show: boolean;
  title: string;
  description: string;
  data: CollaborationCardType[];
};

export default function CollaborationsRootSection({
  show = false,
  title = '',
  description = '',
  data = [],
}: CollaborationRootType) {
  const { collaborationRef } = useRefContext();
  return (
    <Section
      show={show}
      title={title}
      description={description}
      sectionClassName="bg-white py-32 max-md:py-20"
      innerClassName="mx-auto max-w-7xl"
      ref={collaborationRef}
    >
      <div className="m-5 flex justify-end">
        <Button
          variant="light"
          className="gap-2"
          color="primary"
          as={Link}
          href="/collaboration"
        >
          View All Partners
          <FaArrowRightLong />
        </Button>
      </div>
      <CollaborationCarousel data={data} />
    </Section>
  );
}
