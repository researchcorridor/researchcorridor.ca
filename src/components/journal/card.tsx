'use client';

import { Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { PiBookOpenTextThin } from 'react-icons/pi';

import { homeText } from '@/constant/journals.text';
import { JournalCardType } from '@/types/journal.type';

export default function JournalsCard({ data }: { data: JournalCardType }) {
  const { Category, description, link, thumbnail, title } = data;
  return (
    <Card shadow="sm" className="group">
      <CardHeader className="relative aspect-video w-full overflow-hidden p-0">
        <Image
          src={thumbnail}
          alt={title}
          width={500}
          height={280}
          className="min-h-full min-w-full object-cover transition-transform group-hover:scale-110"
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
          href={`/journals/${link}`}
        >
          <PiBookOpenTextThin />
          {homeText.cardButtonText}
        </Button>
      </CardBody>
    </Card>
  );
}
