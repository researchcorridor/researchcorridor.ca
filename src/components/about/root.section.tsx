'use client';

import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import { PiCompassDuotone } from 'react-icons/pi';
import { RiFocus2Line } from 'react-icons/ri';

import useRefContext, { scrollIntoView } from '@/context/ref';

import Section from '../ui/Section';

export type AboutRootType = {
  show: boolean;
  title?: string;
  description?: string;
  img: string;
  point: string[];
};

export default function AboutRootSection({
  show = false,
  title,
  description,
  img,
  point = ['', ''],
}: AboutRootType) {
  const { aboutRef, researchersRef, journalsRef } = useRefContext();
  const homeText = {
    point: [
      {
        title: 'Our Vision',
        icon: RiFocus2Line,
      },
      {
        title: 'Our Mission',
        icon: PiCompassDuotone,
      },
    ],
    button: [
      {
        title: 'Our Researchers',
        scrollFun: () => scrollIntoView(researchersRef),
      },
      {
        title: 'View Latest Journals',
        scrollFun: () => scrollIntoView(journalsRef),
      },
    ],
  };
  return (
    <Section title={title} description={description} show={show} ref={aboutRef}>
      <div className="absolute inset-0 -z-20 bg-[url('/images/about-bg.png')] bg-cover bg-no-repeat opacity-10" />
      <div
        className="m-auto grid max-w-7xl grid-cols-[70%,30%]  items-center justify-center gap-5
    px-6 max-lg:flex max-[820px]:flex-col-reverse max-[820px]:gap-10 max-md:p-2"
      >
        <div className="flex flex-col gap-10">
          {homeText.point.map((item, index) => (
            <div key={index}>
              <h3 className="text-foreground-800 mb-3 flex items-center gap-3 text-2xl max-[500px]:text-xl">
                <span className="text-primary text-4xl max-[500px]:text-3xl">
                  <item.icon />
                </span>
                {item.title}
              </h3>
              <p className="text-foreground-600 text-lg max-[500px]:text-base">
                {point[index]}
              </p>
            </div>
          ))}
          <div className="flex gap-5 max-[820px]:justify-center max-[400px]:flex-col">
            {homeText.button.map((btn, i) => (
              <Button
                key={i}
                color="primary"
                variant={i === 0 ? 'solid' : 'ghost'}
                onPress={btn.scrollFun}
              >
                {btn.title}
                <FaArrowRightLong />
              </Button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex aspect-square w-96 items-center justify-center max-[300px]:w-full">
            <Image
              src={img}
              alt="about"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
