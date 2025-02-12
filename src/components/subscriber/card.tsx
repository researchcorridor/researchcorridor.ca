'use client';

import { Button, Input } from '@heroui/react';

export type SubscriberCardType = {
  show: boolean;
  title: string;
  description: string;
  inputText: string;
  buttonText: string;
};

export default function SubscriberCard({
  show = false,
  title,
  description,
  inputText,
  buttonText,
}: SubscriberCardType) {
  if (!show) return null;
  return (
    <section id="email" className="bg-primary py-20 text-white max-sm:py-12">
      <div className="mx-auto max-w-7xl p-6">
        <h2 className="text-5xl max-md:text-4xl max-sm:text-3xl">{title}</h2>
        <p className="mt-4 max-w-3xl text-2xl max-sm:text-xl max-[500px]:text-lg">
          {description}
        </p>
        <div className="mt-10 flex">
          <Input
            label={inputText}
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
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
