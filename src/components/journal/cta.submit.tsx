'use client';

import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

import homeText from '@/constant/homePage';

export default function CTAJournalSubmit({
  data,
}: {
  data: { deadline: string };
}) {
  return (
    <section id="cta" className="relative z-0 py-10 text-white max-sm:py-12">
      <div className="absolute inset-0 -z-20 bg-[url('/images/bg.png')] bg-fixed bg-center" />
      <div className="bg-primary/90 absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl p-6 max-[500px]:p-2">
        <h2 className="text-4xl max-md:text-3xl max-sm:text-2xl max-[500px]:text-center">
          {homeText.cta.title}
        </h2>
        <p className="mt-6 max-w-xl text-lg max-sm:text-base max-[500px]:text-center">
          {homeText.cta.description}
        </p>
        <div className="mt-10 flex items-center justify-between gap-5 max-sm:flex-col max-sm:items-center">
          <p className="max-w-xl text-lg max-sm:text-base">
            {homeText.cta.nextDate} {data.deadline}
          </p>
          <Button
            as={Link}
            href={homeText.cta.buttonLink}
            variant="flat"
            className="text-primary border-white bg-white"
          >
            {homeText.cta.buttonText}
            <FaArrowRightLong />
          </Button>
        </div>
      </div>
    </section>
  );
}
