'use client';

import { Button, Input } from '@nextui-org/react';

import { homeText } from '@/constant/subscriber';

export default function SubscriberCard({
  data: { show = false },
}: {
  data: {
    show: boolean;
  };
}) {
  if (!show) return null;
  return (
    <section id="email" className="bg-primary py-20 text-white max-sm:py-12">
      <div className="mx-auto max-w-7xl p-6">
        <h2 className="text-5xl max-md:text-4xl max-sm:text-3xl">
          {homeText.title}
        </h2>
        <p className="mt-4 max-w-3xl text-2xl max-sm:text-xl max-[500px]:text-lg">
          {homeText.description}
        </p>
        <div className="mt-10 flex">
          <Input
            label={homeText.inputText}
            isClearable
            type="email"
            className="max-w-xl"
            size="sm"
            classNames={{
              inputWrapper: 'rounded-none rounded-l-md bg-white',
              label: 'text-primary',
            }}
          />
          <Button
            variant="bordered"
            size="lg"
            className="rounded-none rounded-r-md border-white text-white"
          >
            {homeText.buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
