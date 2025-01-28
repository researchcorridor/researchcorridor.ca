'use client';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

import useRefContext from '@/context/ref';
import { JournalCardType } from '@/types/journal.type';

import JournalsCard from './card';

export type JournalsRootType = {
  show: boolean;
  data: JournalCardType[];
  title: string;
  description: string;
  buttonText: string;
};

export default function JournalsRootSection({
  show = false,
  data = [],
  title,
  description,
  buttonText,
}: JournalsRootType) {
  const { journalsRef } = useRefContext();
  if (!show) return null;
  return (
    <section ref={journalsRef} id="journals" className="py-32 max-md:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="px-6 text-center text-3xl max-md:text-2xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-3xl px-6 text-center text-xl max-md:text-lg max-sm:text-base">
          {description}
        </p>
        <div className="m-5 flex justify-end">
          <Button
            variant="light"
            className="gap-2"
            color="primary"
            as={Link}
            href="/journals"
          >
            {buttonText || 'View All Journals'}
            <FaArrowRightLong />
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-5 px-5 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:px-2">
          {data.map((item: JournalCardType, index: number) => (
            <JournalsCard key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
