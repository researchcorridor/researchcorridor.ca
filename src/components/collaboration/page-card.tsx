'use client';

import { Card, CardBody, CardHeader } from '@heroui/react';
import Image from 'next/image';

export default function PageCard({
  link,
  thumbnail,
  title,
  description,
}: {
  link: string;
  thumbnail: string;
  title: string;
  description?: string;
}) {
  return (
    <Card shadow="none" as={'a'} href={link} target="_blank" className="group">
      <CardBody className="flex flex-row items-center gap-3 p-0  max-sm:flex-col">
        <CardHeader className="aspect-square w-28 overflow-hidden rounded-full object-center p-0">
          <Image
            src={thumbnail}
            alt={title}
            width={200}
            height={200}
            className="transition-transform group-hover:scale-110"
          />
        </CardHeader>
        <div className="max-sm:text-center">
          <h3 className="text-xl">{title}</h3>
          {description && <p className="text-default-500">{description}</p>}
        </div>
      </CardBody>
    </Card>
  );
}
