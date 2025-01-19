'use client';

import Image from 'next/image';

import { homeText } from '@/constant/home.text';

export default function BrandHeader() {
  return (
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
    </div>
  );
}
