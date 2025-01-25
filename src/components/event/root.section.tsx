'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaRegHandPointRight } from 'react-icons/fa6';
import { PiHandshake } from 'react-icons/pi';

import useRefContext from '@/context/ref';

import { PulsatingButton } from '../ui/pulsating-button';

export type EventsRootType = {
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
  title: string;
  sectionTitle: string;
  subtitle: string;
  benefits: string[];
  AbstractSubmission: string;
  ConferenceDate: string;
  buttonText: string;
  buttonLink: string;
};

export default function EventsRootSection({
  data: {
    show = false,
    data = {
      Partner1: {
        name: '',
        color: '',
        img: '',
      },
      Partner2: {
        name: '',
        color: '',
        img: '',
      },
      title: '',
      sectionTitle: '',
      subtitle: '',
      benefits: [],
      AbstractSubmission: '',
      ConferenceDate: '',
      buttonText: '',
      buttonLink: '',
    },
  },
}: {
  data: {
    show: boolean;
    data: EventsRootType;
  };
}) {
  const { eventRef } = useRefContext();
  if (!show) return null;
  return (
    <section ref={eventRef} id="events" className="bg-white py-32 max-md:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="px-6 text-center text-3xl max-md:text-2xl">
          {data.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl px-6 text-center text-xl max-md:text-lg max-sm:text-base">
          {data.subtitle}
        </p>
        <div className="w-full p-6 max-lg:mt-20 max-[500px]:p-2">
          <div className="mb-5 flex items-end justify-between gap-5 max-[450px]:grid max-[450px]:grid-cols-2">
            <Image
              src={data.Partner1.img}
              alt={data.Partner1.name}
              width={150}
              height={150}
              className="max-md:size-24"
            />
            <div className="col-span-2 flex flex-col items-center justify-center  max-[450px]:order-last">
              <PiHandshake className="text-5xl max-md:text-3xl" />
              <h2 className="mb-5 text-2xl max-md:text-xl">COLLABORATION</h2>
            </div>
            <Image
              src={data.Partner2.img}
              alt={data.Partner2.name}
              width={150}
              height={150}
              className="max-md:size-24 max-[450px]:ml-auto"
            />
          </div>
          <h2 className="mb-6 flex-col text-center text-3xl drop-shadow-md max-[1000px]:flex max-sm:text-2xl">
            <span style={{ color: data.Partner1.color }}>
              {data.Partner1.name}
            </span>
            {' And '}
            <span style={{ color: data.Partner2.color }}>
              {data.Partner2.name}
            </span>
          </h2>
          <div className=" mt-2 flex justify-between pt-5 max-[850px]:flex-col">
            <div className="">
              <h3 className="text-lg">BENEFITS OF CONFERENCE:</h3>
              <ul className="mt-2 flex flex-col gap-2">
                {data.benefits.map((benefit: string, index: number) => (
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
                <span className="text-primary">{data.ConferenceDate}</span>
              </h3>
              <h3 className="flex flex-wrap gap-2 text-lg">
                Abstract Submission:
                <span className="text-primary">{data.AbstractSubmission}</span>
              </h3>
              <div className="justify-center max-sm:flex max-sm:w-full">
                <PulsatingButton
                  as={Link}
                  href={data.buttonLink}
                  variant="shadow"
                  color="primary"
                  size="lg"
                >
                  {data.buttonText}
                </PulsatingButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
