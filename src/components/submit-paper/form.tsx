'use client';

import {
  Autocomplete,
  AutocompleteItem,
  Avatar,
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Textarea,
} from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { IoIosSend } from 'react-icons/io';
import { z } from 'zod';

import countryList from '@/constant/country-list';
import { supabase } from '@/utils/supabase/client';

const formSchema = z.object({
  prefix: z.string().min(1, 'Prefix is required'),
  first_name: z.string().min(2, 'First Name is required'),
  last_name: z.string().min(2, 'Last Name is required'),
  institution: z.string().min(2, 'Institution is required'),
  country: z.string().min(1, 'Country is required'),
  email: z.string().email('Invalid email format'),
  phone: z.string().min(8, 'Phone number is required'),
  co_authors: z.string().optional(),
  paper_title: z.string().min(5, 'Paper Title is required'),
  presentation: z.string().min(1, 'Presentation type is required'),
  abstract: z
    .string()
    .min(100, 'Abstract must be at least 100 characters')
    .max(300, 'Abstract must be max 300 characters'),
  keywords: z.string().min(3, 'Keywords are required'),
  file: z.any(),
});

export default function SubmitPaperForm() {
  const [loading, setLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());

    try {
      const validatedData = formSchema.parse(values);

      const file = formData.get('file') as File;
      const filePath = `${Date.now()}_${file.name}`;
      const { error: fileError } = await supabase.storage
        .from('papers')
        .upload(filePath, file);

      if (fileError) throw fileError;

      const { error } = await supabase.from('submissions').insert({
        ...validatedData,
        file: filePath,
      });

      if (error) throw error;

      toast.success('Submission successful!');
      setIsSubmit(true);
      e.currentTarget.reset();
      setTimeout(() => {
        router.push('/');
      }, 3000);
    } catch (err) {
      if (err instanceof z.ZodError) {
        toast.error(err.errors[0].message);
      }
    } finally {
      setLoading(false);
    }
  };
  return isSubmit ? (
    <div className="text-success text-center">
      Thank you for submitting your paper
    </div>
  ) : (
    <Form
      validationBehavior="native"
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-5xl gap-5 p-5"
    >
      <div className="flex w-full gap-5">
        <Select
          variant="bordered"
          color="primary"
          className="max-w-28"
          label="Prefix"
          name="prefix"
          isRequired
          isDisabled={loading}
        >
          {prefixList.map((animal) => (
            <SelectItem key={animal}>{animal}</SelectItem>
          ))}
        </Select>
        <Input
          isRequired
          name="first_name"
          label="First Name"
          variant="bordered"
          color="primary"
          isDisabled={loading}
        />
      </div>
      <Input
        isRequired
        fullWidth
        label="Last Name"
        variant="bordered"
        color="primary"
        name="last_name"
        isDisabled={loading}
      />
      <Input
        isRequired
        fullWidth
        label="Institution"
        variant="bordered"
        color="primary"
        name="institution"
        isDisabled={loading}
      />
      <Autocomplete
        isRequired
        variant="bordered"
        color="primary"
        label="Select country"
        name="country"
        isDisabled={loading}
      >
        {countryList.map((country) => (
          <AutocompleteItem
            key={country.name}
            isDisabled={loading}
            classNames={{
              wrapper: 'flex items-center gap-2 p-2 h-10',
            }}
            startContent={
              <Avatar
                alt="Argentina"
                size="sm"
                src={`https://flagcdn.com/${country.code}.svg`}
              />
            }
          >
            {country.name}
          </AutocompleteItem>
        ))}
      </Autocomplete>
      <Input
        isRequired
        fullWidth
        label="Email"
        variant="bordered"
        color="primary"
        name="email"
        type="email"
        isDisabled={loading}
      />
      <Input
        isRequired
        fullWidth
        label="Phone"
        variant="bordered"
        color="primary"
        type="tel"
        name="phone"
        isDisabled={loading}
      />
      <Input
        fullWidth
        label="Co-Authors Names"
        variant="bordered"
        color="primary"
        name="co_authors"
        isDisabled={loading}
      />
      <Input
        fullWidth
        isRequired
        label="Paper Title"
        variant="bordered"
        color="primary"
        name="paper_title"
        isDisabled={loading}
      />
      <RadioGroup
        isRequired
        color="primary"
        label="Type of Presentation"
        orientation="horizontal"
        name="presentation"
        isDisabled={loading}
        description="The Scientific Committee reserves the right to decide the final type of presentation"
      >
        <Radio value="Virtual Presentation">Virtual Presentation</Radio>
        <Radio value="Oral/Poster Presentation">Oral/Poster Presentation</Radio>
      </RadioGroup>
      <Textarea
        isRequired
        fullWidth
        label="Abstract"
        variant="bordered"
        color="primary"
        name="abstract"
        isDisabled={loading}
        validate={(value) => {
          const wordCount = value.trim().split(/\s+/).length;
          if (wordCount < 100) return 'Abstract must be at least 100 words';
          if (wordCount > 300) return 'Abstract must be max 300 words';
        }}
        description="Write a paragraph between 100 to 300 words"
      />
      <Input
        isRequired
        fullWidth
        label="Keywords"
        variant="bordered"
        color="primary"
        name="keywords"
        isDisabled={loading}
      />
      <Input
        isRequired
        fullWidth
        label="Attach Your File"
        labelPlacement="outside"
        placeholder="Attach Your File"
        variant="bordered"
        color="primary"
        type="file"
        accept=".pdf,.doc,.docx"
        name="file"
        isDisabled={loading}
      />
      <Checkbox isRequired name="terms" color="primary" isDisabled={loading}>
        I accept the terms of the following Copyright Agreement, and upon
        submitting an abstract for possible publication to Research Corridor
        (https://researchcorridor.ca/), this copyright agreement prevails and is
        binding to the contributing author(s): All authors retain full copyright
        of their articles. The research works published in the Conference
        Proceedings meet the Open Access Publishing requirements and can be
        freely accessed, shared, modified, distributed, and used for
        educational, commercial, and non-commercial purposes under a Creative
        Commons Attribution 4.0 International License (CC BY 4.0). Authors grant
        the Conference a license to publish their article and be identified as
        the original publisher.
      </Checkbox>
      <div className="mt-5 flex w-full justify-end">
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
    </Form>
  );
}

const prefixList = [
  'Mr.',
  'Mrs.',
  'Miss',
  'Ms.',
  'Dr.',
  'Prof.',
  'Rev.',
  'Hon.',
  'Other',
];
