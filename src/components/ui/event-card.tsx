'use client';

import { Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import { PiCalendarDotsDuotone, PiMapPinLineDuotone } from 'react-icons/pi';

import homeText from '@/constant/homePage';
import { EventCardType } from '@/types/event.type';

const EventCard = ({ data }: { data: EventCardType }) => {
  const { category, description, link, thumbnail, title, date, location } =
    data;
  return (
    <Card shadow="sm" className="group">
      <CardHeader className="relative aspect-video w-full overflow-hidden object-cover p-0">
        <Image
          src={thumbnail}
          alt={title}
          width={500}
          height={280}
          className="min-h-full min-w-full transition-transform group-hover:scale-110"
        />
        <Button
          variant="flat"
          radius="full"
          size="sm"
          color="primary"
          className="absolute left-2 top-2 z-10"
        >
          {category}
        </Button>
      </CardHeader>
      <CardBody className="flex flex-col justify-between gap-3">
        <h3 className="text-foreground line-clamp-2  text-lg">{title}</h3>
        <p className="text-foreground-500 flex items-center gap-3">
          <span className="text-xl">
            <PiCalendarDotsDuotone />
          </span>
          {date}
        </p>
        <p className="text-foreground-500 flex items-center gap-3">
          <span className="text-xl">
            <PiMapPinLineDuotone />
          </span>
          {location}
        </p>
        <p className="text-foreground-500 line-clamp-2">{description}</p>
        <Button
          variant="light"
          className="gap-2"
          color="primary"
          as={Link}
          href={link}
        >
          {homeText.events.cardButtonText}
          <FaArrowRightLong />
        </Button>
      </CardBody>
    </Card>
  );
};

export default EventCard;
