'use client';

import { Button } from '@heroui/react';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

import Section from '../ui/Section';

export type CTAJournalSubmitType = {
  show: boolean;
  title: string;
  description: string;
  nextDate: string;
  buttonText: string;
  buttonLink: string;
};

export default function CTAJournalSubmit({
  show = false,
  buttonLink,
  buttonText,
  title,
  description,
  nextDate,
}: CTAJournalSubmitType) {
  return (
    <Section show={show} sectionClassName="z-0 py-10 max-sm:py-12 text-white">
      <div className="absolute inset-0 -z-20 bg-[url('/images/bg.png')] bg-fixed bg-center" />
      <div className="bg-primary/90 absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl p-6 max-[500px]:p-2">
        <h2 className="text-4xl max-md:text-3xl max-sm:text-2xl max-[500px]:text-center">
          {title}
        </h2>
        <p className="mt-6 max-w-xl text-lg max-sm:text-base max-[500px]:text-center">
          {description}
        </p>
        <div className="mt-10 flex items-center justify-between gap-5 max-sm:flex-col max-sm:items-center">
          <p className="max-w-xl text-lg max-sm:text-base">{nextDate}</p>
          {buttonText && (
            <Button
              as={Link}
              href={buttonLink}
              variant="flat"
              className="text-primary border-white bg-white"
            >
              {buttonText}
              <FaArrowRightLong />
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
