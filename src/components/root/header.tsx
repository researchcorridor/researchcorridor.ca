'use client';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';

import { Button } from '@nextui-org/react';
import Image from 'next/image';

import { homeText } from '@/constant/home.text';
import useRefContext, { scrollIntoView } from '@/context/ref';

import { PulsatingButton } from '../ui/pulsating-button';

export default function RoodHeader() {
  const { aboutRef, eventRef } = useRefContext();
  return (
    <header className="relative z-0 overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-[url('/images/bg.png')] bg-fixed bg-center" />
      <div className="bg-primary-100/90 absolute inset-0 -z-10" />
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center">
        <div className="flex max-w-xl flex-col items-center justify-center gap-5 p-6 max-[500px]:p-2">
          <Image
            src={homeText.logo}
            alt={homeText.title}
            width={300}
            height={300}
            className="w-2/3"
          />
          <h1 className="text-center text-5xl max-md:text-4xl max-sm:text-3xl">
            {homeText.title}
          </h1>
          <p className="mx-auto max-w-lg text-center text-xl  max-md:text-lg max-sm:text-base">
            {homeText.description}
          </p>
          <div className="mt-5 flex items-center gap-4">
            <Button
              variant="ghost"
              size="lg"
              color="primary"
              onPress={() => scrollIntoView(aboutRef)}
            >
              About Us
            </Button>
            <PulsatingButton
              variant="shadow"
              color="primary"
              size="lg"
              onPress={() => scrollIntoView(eventRef)}
            >
              Upcoming Events
            </PulsatingButton>
          </div>
        </div>
      </div>
    </header>
  );
}
