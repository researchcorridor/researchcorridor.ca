'use client';

import { Button, Form, Input } from '@heroui/react';
import { useState } from 'react';
import toast from 'react-hot-toast';

import { supabase } from '@/utils/supabase/client';

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
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());
    const { error } = await supabase.from('email').insert(values);
    if (error) {
      console.error(error);
      return;
    }
    setSubmitted(true);
    toast.success('Thank you for subscribing!');
  };
  if (!show) return null;
  return (
    <section id="email" className="bg-primary py-20 text-white max-sm:py-12">
      <div className="mx-auto max-w-7xl p-6">
        <h2 className="text-5xl max-md:text-4xl max-sm:text-3xl">{title}</h2>
        <p className="mt-4 max-w-3xl text-2xl max-sm:text-xl max-[500px]:text-lg">
          {description}
        </p>
        {submitted ? (
          <p className="mt-10 text-center text-lg">
            Thank you for subscribing!
          </p>
        ) : (
          <Form
            onSubmit={handleSubmit}
            validationBehavior="native"
            className="mt-10 flex flex-row gap-0"
          >
            <Input
              label={inputText}
              isClearable
              type="email"
              className="max-w-xl"
              isRequired
              size="sm"
              name="email"
              classNames={{
                inputWrapper: 'rounded-none rounded-l-md bg-white',
                label: 'text-primary',
              }}
            />
            <Button
              variant="bordered"
              size="lg"
              type="submit"
              className="rounded-none rounded-r-md border-white text-white"
            >
              {buttonText}
            </Button>
          </Form>
        )}
      </div>
    </section>
  );
}
