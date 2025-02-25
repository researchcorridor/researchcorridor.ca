'use client';

import { Button, Form, Input, Textarea } from '@heroui/react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { IoIosSend } from 'react-icons/io';

import { supabase } from '@/utils/supabase/client';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());

    try {
      const { error } = await supabase.from('contact').insert(values);

      if (error) {
        throw error;
      }

      toast.success('Thank you for contacting us');
      setLoading(false);
      setIsSubmit(true);
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return (
    <Form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-lg flex-col gap-5"
      validationBehavior="native"
    >
      {isSubmit ? (
        <div className="text-success w-full text-center">
          Thank you for contacting us
        </div>
      ) : (
        <>
          <div className="flex w-full gap-5">
            <Input
              label="Name"
              name="name"
              isRequired
              isDisabled={loading}
              variant="bordered"
              color="primary"
            />
            <Input
              label="Email"
              name="email"
              type="email"
              isRequired
              isDisabled={loading}
              variant="bordered"
              color="primary"
            />
          </div>
          <Input
            label="Subject"
            name="subject"
            isRequired
            isDisabled={loading}
            variant="bordered"
            color="primary"
          />
          <Textarea
            variant="bordered"
            color="primary"
            name="message"
            label="Message"
            isRequired
            isDisabled={loading}
          ></Textarea>
          <div className="flex w-full justify-end">
            <Button
              isLoading={loading}
              type="submit"
              color="primary"
              variant="solid"
            >
              Submit
              <IoIosSend />
            </Button>
          </div>
        </>
      )}
    </Form>
  );
}
