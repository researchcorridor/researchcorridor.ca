'use client';

import { Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { PiBookOpenTextThin } from 'react-icons/pi';

import homeText from '@/constant/homePage';
import JournalsCardType from '@/types/journals-card.type';

const JournalsCard = ({ data }: { data: JournalsCardType }) => {
  const { Category, description, link, thumbnail, title } = data;
  return (
    <Card shadow="sm" className="group">
      <CardHeader className="relative flex aspect-video w-full gap-5 overflow-hidden bg-black object-cover p-0">
        <Image
          src={thumbnail}
          alt={title}
          width={500}
          height={280}
          className="transition-transform group-hover:scale-110"
        />
        <Button
          variant="light"
          radius="full"
          size="sm"
          className="absolute left-2 top-2 z-10 text-white"
        >
          {Category}
        </Button>
      </CardHeader>
      <CardBody className="flex flex-col justify-between gap-3">
        <h3 className="text-foreground line-clamp-2  text-lg">{title}</h3>
        <p className="text-foreground-500 line-clamp-2">{description}</p>
        <Button
          variant="light"
          className="gap-2"
          color="primary"
          as={Link}
          href={link}
        >
          <PiBookOpenTextThin />
          {homeText.journals.cardButtonText}
        </Button>
      </CardBody>
    </Card>
  );
};

export default JournalsCard;
