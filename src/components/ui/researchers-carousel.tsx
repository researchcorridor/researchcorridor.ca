'use client';

import { Card, CardBody, CardHeader } from '@nextui-org/react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import * as React from 'react';

import ResearchersCardType from '@/types/researchers-card.type';

import {
  Carousel,
  CarouselButton,
  CarouselContent,
  CarouselItem,
} from './carousel';

const ResearchersCarousel = ({ data }: { data: ResearchersCardType[] }) => {
  return (
    <Carousel
      className="mt-20"
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
        {data.map(({ researcher, comment }, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 max-[980px]:basis-full"
          >
            <Card className="p-5" shadow="sm">
              <CardBody>
                <p className="text-foreground-500">&quot;{comment}&quot;</p>
              </CardBody>
              <CardHeader className="flex gap-5">
                <Image
                  src={researcher.avatar}
                  alt={researcher.name}
                  height={60}
                  width={60}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <p className="text-md">{researcher.name}</p>
                  <p className="text-small text-default-500">
                    {researcher.position}
                  </p>
                  <p className="text-small text-primary">{researcher.from}</p>
                </div>
              </CardHeader>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselButton type="next" />
      <CarouselButton type="Previous" />
    </Carousel>
  );
};

export default ResearchersCarousel;
