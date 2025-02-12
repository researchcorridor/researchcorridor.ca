'use client';

import { Card, CardBody, CardHeader } from '@heroui/react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import * as React from 'react';

import { CollaborationCardType } from '@/types/collaboration.type';

import {
  Carousel,
  CarouselButton,
  CarouselContent,
  CarouselItem,
} from '../ui/carousel';

const CollaborationCarousel = ({ data }: { data: CollaborationCardType[] }) => {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {data.map(({ description, link, thumbnail, title }, index) => (
          <CarouselItem
            key={index}
            className="basis-1/3 max-lg:basis-1/2 max-[550px]:basis-full"
          >
            <Card
              shadow="none"
              as={'a'}
              href={link}
              target="_blank"
              className="group"
            >
              <CardBody className="flex flex-col items-center gap-3 p-0">
                <CardHeader className="aspect-square w-28 overflow-hidden rounded-full object-center p-0">
                  <Image
                    src={thumbnail}
                    alt={title}
                    width={200}
                    height={200}
                    className="transition-transform group-hover:scale-110"
                  />
                </CardHeader>
                <h3 className="text-center text-xl">{title}</h3>
                {description && (
                  <p className="text-default-500 text-center">{description}</p>
                )}
              </CardBody>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselButton type="next" />
      <CarouselButton type="Previous" />
    </Carousel>
  );
};

export default CollaborationCarousel;
