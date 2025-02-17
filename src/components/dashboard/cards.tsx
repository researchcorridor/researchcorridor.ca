'use client';

import { Card, CardBody, CardHeader, Skeleton } from '@heroui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoNewspaperOutline } from 'react-icons/io5';
import { IconType } from 'react-icons/lib';
import { PiHandshake, PiListMagnifyingGlass } from 'react-icons/pi';

import { getCount } from '@/actions/getCount';

interface cardType {
  title: string;
  icon: IconType;
  count?: number;
  url?: string;
}

const cards: cardType[] = [
  {
    title: 'Submissions',
    icon: IoNewspaperOutline,
    url: 'submissions',
  },
  {
    title: 'Collaborations',
    icon: PiHandshake,
    url: 'collaborations',
  },
  {
    title: 'Researchers',
    icon: PiListMagnifyingGlass,
    url: 'researchers',
  },
];

export default function Cards() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    Collaborations: 0,
    Researchers: 0,
    Submissions: 0,
  });

  const getData = async () => {
    try {
      setIsLoading(true);
      setData({
        Collaborations: await getCount('collaboration'),
        Researchers: await getCount('researcher'),
        Submissions: await getCount('submissions'),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-5 p-4 pt-5 max-xl:grid-cols-2">
      {cards.map((c, i) => (
        <Card
          as={Link}
          href={`/dashboard/${c.url}`}
          key={i}
          className="hover:bg-primary-50 hover:border-primary border py-4"
          shadow="none"
        >
          <CardHeader className="flex justify-between px-4 pb-0 pt-2">
            <h4 className="text-large text-foreground-700">{c.title}</h4>
            <span>
              <c.icon className="text-primary text-5xl" />
            </span>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <h3 className="text-default-700 text-3xl">
              {isLoading ? (
                <Skeleton className="h-6 w-10 opacity-20" />
              ) : (
                data[c.title as keyof typeof data] || 0
              )}
            </h3>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
