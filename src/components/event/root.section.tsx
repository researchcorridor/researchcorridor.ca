'use client';

import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

import { homeText } from '@/constant/events.text';
import { EventCardType } from '@/types/event.type';

import EventCard from './card';

export default function EventsRootSection({ data }: { data: EventCardType[] }) {
  return (
    <section id="events" className="py-32 max-md:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="px-6 text-center text-3xl max-md:text-2xl">
          {homeText.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl px-6 text-center text-xl max-md:text-lg max-sm:text-base">
          {homeText.description}
        </p>
        <div className="my-14 grid grid-cols-4 gap-7 px-5 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:px-2">
          {data.map((item: EventCardType, index: number) => (
            <EventCard key={index} data={item} />
          ))}
        </div>
        <div className="m-5 flex justify-center">
          <Button
            variant="bordered"
            className="gap-2"
            color="primary"
            as={Link}
            href="/events"
          >
            {homeText.buttonText}
            <FaArrowRightLong />
          </Button>
        </div>
      </div>
    </section>
  );
}
