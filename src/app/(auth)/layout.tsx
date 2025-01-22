'use client';

import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { PiHouseLineDuotone } from 'react-icons/pi';

import { login as textData } from '@/constant/auth.text';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <header className="relative z-0 overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-[url('/images/bg.png')] bg-fixed bg-center" />
      <div className="bg-primary-50/90 absolute inset-0 -z-10" />
      <div className="mx-auto flex min-h-screen max-w-7xl items-center max-md:flex-col-reverse max-md:gap-5 max-md:py-10">
        <div className="flex shrink-0 basis-1/2 flex-col gap-5 p-6 max-md:items-center max-[500px]:p-2">
          <h1 className="text-4xl max-md:text-center max-md:text-3xl max-sm:text-2xl">
            {textData.title}
          </h1>
          <p className="max-w-lg text-xl max-md:text-center max-md:text-lg max-sm:text-base">
            {textData.description}
          </p>
          <div className="md:hidden">{children}</div>
          <div className="mt-10 max-md:hidden">
            <Button
              color="primary"
              variant="solid"
              size="lg"
              as={Link}
              href="/"
            >
              <PiHouseLineDuotone className="text-xl" />
              {textData.button}
            </Button>
          </div>
        </div>
        <div className="relative flex basis-1/2 items-center justify-center">
          {children}
        </div>
      </div>
    </header>
  );
}
