'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaRegHandPointRight } from 'react-icons/fa6';
import { PiHandshake } from 'react-icons/pi';

import useRefContext from '@/context/ref';

import { PulsatingButton } from '../ui/pulsating-button';
import Section from '../ui/Section';

export type EventsRootType = {
  show: boolean;
  title: string;
  description: string;
  Partner1: {
    name: string;
    color: string;
    img: string;
  };
  Partner2: {
    name: string;
    color: string;
    img: string;
  };
  benefits: string[];
  AbstractSubmission: string;
  ConferenceDate: string;
  buttonText: string;
  buttonLink: string;
};

export default function EventsRootSection({
  show = false,
  title = '',
  description = '',
  Partner1 = {
    name: '',
    color: '',
    img: '',
  },
  Partner2 = {
    name: '',
    color: '',
    img: '',
  },
  benefits = [],
  AbstractSubmission = '',
  ConferenceDate = '',
  buttonText = '',
  buttonLink = '',
}: EventsRootType) {
  const { eventRef } = useRefContext();
  return (
    <Section
      show={show}
      title={title}
      description={description}
      innerClassName="mx-auto max-w-7xl"
      sectionClassName="bg-white py-32 max-md:py-20"
      ref={eventRef}
    >
      <div className="w-full p-6 max-lg:mt-20 max-[500px]:p-2">
        <div className="mb-5 flex items-end justify-between gap-5 max-[450px]:grid max-[450px]:grid-cols-2">
          <Image
            src={Partner1.img}
            alt={Partner1.name}
            width={150}
            height={150}
            className="max-md:size-24"
          />
          <div className="col-span-2 flex flex-col items-center justify-center  max-[450px]:order-last">
            <PiHandshake className="text-5xl max-md:text-3xl" />
            <h2 className="mb-5 text-2xl max-md:text-xl">COLLABORATION</h2>
          </div>
          <Image
            src={Partner2.img}
            alt={Partner2.name}
            width={150}
            height={150}
            className="max-md:size-24 max-[450px]:ml-auto"
          />
        </div>
        <h2 className="mb-6 flex-col text-center text-3xl drop-shadow-md max-[1000px]:flex max-sm:text-2xl">
          <span style={{ color: Partner1.color }}>{Partner1.name}</span>
          {' And '}
          <span style={{ color: Partner2.color }}>{Partner2.name}</span>
        </h2>
        <div className=" mt-2 flex justify-between pt-5 max-[850px]:flex-col">
          <div className="">
            <h3 className="text-lg">BENEFITS OF CONFERENCE:</h3>
            <ul className="mt-2 flex flex-col gap-2">
              {benefits.map((benefit: string, index: number) => (
                <li
                  key={index}
                  className="flex items-start justify-start gap-2"
                >
                  <FaRegHandPointRight className="text-primary mt-1 w-5" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start justify-center gap-5 max-[850px]:mt-5">
            <h3 className="flex flex-wrap gap-2 text-lg">
              Conference Date:
              <span className="text-primary">{ConferenceDate}</span>
            </h3>
            <h3 className="flex flex-wrap gap-2 text-lg">
              Abstract Submission:
              <span className="text-primary">{AbstractSubmission}</span>
            </h3>
            <div className="justify-center max-sm:flex max-sm:w-full">
              <PulsatingButton
                as={Link}
                href={buttonLink}
                variant="shadow"
                color="primary"
                size="lg"
              >
                {buttonText}
              </PulsatingButton>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
