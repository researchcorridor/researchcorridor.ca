'use client';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';

import { Button } from '@nextui-org/react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Autoplay, EffectFlip } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import useRefContext, { scrollIntoView } from '@/context/ref';

import BrandHeader from './brand';

export default function RoodHeader() {
  const { aboutRef } = useRefContext();
  const Slides = [BrandHeader, BrandHeader];
  return (
    <header className="relative z-0 overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-[url('/images/bg.png')] bg-fixed bg-center" />
      <div className="bg-primary-100/90 absolute inset-0 -z-10" />
      <Swiper
        effect={'flip'}
        grabCursor={true}
        loop={true}
        modules={[EffectFlip, Autoplay]}
        className="mx-auto max-w-7xl"
        wrapperClass="m-auto"
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
      >
        {Slides.map((Slide, index) => (
          <SwiperSlide
            key={index}
            className="!flex size-full min-h-screen items-center justify-center"
          >
            <Slide />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        variant="light"
        size="lg"
        isIconOnly
        onPress={() => scrollIntoView(aboutRef)}
        className="absolute bottom-5 left-1/2 z-[999] -translate-x-1/2 text-4xl"
      >
        <IoMdArrowDropdown />
      </Button>
    </header>
  );
}
