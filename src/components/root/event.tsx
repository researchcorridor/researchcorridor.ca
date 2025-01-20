'use client';

import Image from 'next/image';
import Link from 'next/link';

import { event } from '@/constant/home.text';

import { PulsatingButton } from '../ui/pulsating-button';

export default function EventHeader() {
  return (
    <div className="flex w-full items-center justify-center gap-5 p-6 max-lg:my-20 max-lg:flex-col-reverse max-[500px]:p-2">
      <div className="flex-col justify-center gap-5 max-lg:flex">
        <h2 className="text-primary text-center text-[35px] drop-shadow-md max-md:text-4xl max-sm:text-2xl lg:ml-5">
          {event.name}
        </h2>
        <h2 className="text-center text-[35px] leading-[3.5rm] max-md:text-4xl max-sm:text-2xl lg:ml-5">
          {event.title}
        </h2>
        <h2 className="mb-3 text-center text-[40px] max-sm:text-3xl">
          {event.subtitle}
        </h2>
        <p className="mx-auto text-center  text-xl max-sm:text-base">
          {event.description}
        </p>
        <div className=" mt-2 flex justify-center pt-5">
          <PulsatingButton
            as={Link}
            href={event.buttonLink}
            variant="shadow"
            color="primary"
            size="lg"
          >
            {event.buttonText}
          </PulsatingButton>
        </div>
      </div>
      <div className="flex size-full items-center justify-center">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image src={event.image} alt={event.title} width={400} height={400} />
        </div>
      </div>
    </div>
  );
}
