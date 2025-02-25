'use client';

import { Card, CardBody, CardHeader } from '@heroui/react';
import Image from 'next/image';
import * as React from 'react';

import { ResearcherCardType } from '@/types/researcher.type';

export default function PageCard({
  avatar,
  comment,
  from,
  name,
  position,
  link,
}: ResearcherCardType) {
  return (
    <Card
      as={'a'}
      href={link}
      target="_blank"
      className="border p-5"
      shadow="none"
    >
      <CardBody>
        <p className="text-foreground-500">&quot;{comment}&quot;</p>
      </CardBody>
      <CardHeader className="flex gap-5">
        <div className="">
          {avatar && (
            <Image
              src={avatar}
              alt={name}
              height={60}
              width={60}
              className="rounded-full"
            />
          )}
        </div>
        <div className="flex flex-col">
          <p className="text-md">{name}</p>
          <p className="text-small text-default-500">{position}</p>
          <p className="text-small text-primary">{from}</p>
        </div>
      </CardHeader>
    </Card>
  );
}
