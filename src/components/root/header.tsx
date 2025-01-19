'use client';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdArrowDropdown } from 'react-icons/io';

import { homeText } from '@/constant/home.text';

export default function RoodHeader() {
  return (
    <header className="relative z-0 overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-[url('/images/bg.png')] bg-fixed bg-center" />
      <div className="bg-primary-100/90 absolute inset-0 -z-10" />
      <div className="mx-auto flex min-h-screen max-w-7xl justify-center">
        <div className="flex flex-col items-center justify-center gap-5 p-6 max-[500px]:p-2">
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
          <Button
            variant="light"
            size="lg"
            isIconOnly
            as={Link}
            href="#about"
            className="text-4xl"
          >
            <IoMdArrowDropdown />
          </Button>
        </div>
      </div>
    </header>
  );
}
