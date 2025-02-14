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
import { IoIosSend } from 'react-icons/io';

import countryList from '@/constant/country-list';

export default function SubmitPaperForm() {
  return (
    <Form
      onSubmit={(e) => e.preventDefault()}
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
        />
      </div>
      <Input
        isRequired
        fullWidth
        label="Last Name"
        variant="bordered"
        color="primary"
        name="last_name"
      />
      <Input
        isRequired
        fullWidth
        label="Institution"
        variant="bordered"
        color="primary"
        name="institution"
      />
      <Autocomplete
        isRequired
        variant="bordered"
        color="primary"
        label="Select country"
        name="country"
      >
        {countryList.map((country) => (
          <AutocompleteItem
            key={country.name}
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
        type="email"
      />
      <Input
        isRequired
        fullWidth
        label="Phone"
        variant="bordered"
        color="primary"
        type="tel"
        name="phone Number"
      />
      <Input
        fullWidth
        label="Co-Authors Names"
        variant="bordered"
        color="primary"
        name="phone"
      />
      <Input
        fullWidth
        isRequired
        label="Paper Title"
        variant="bordered"
        color="primary"
        name="phone"
      />
      <RadioGroup
        isRequired
        color="primary"
        label="Type of Presentation"
        orientation="horizontal"
        name="presentation"
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
        maxLength={300}
        minLength={100}
      />
      <Input
        isRequired
        fullWidth
        label="Keywords"
        variant="bordered"
        color="primary"
        name="keywords"
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
        name="file"
      />
      <Checkbox defaultSelected>
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
        <Button type="submit" color="primary" variant="solid">
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
