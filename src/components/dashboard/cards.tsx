'use client';

import { Card, CardBody, CardHeader, Skeleton } from '@heroui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoNewspaperOutline } from 'react-icons/io5';
import { IconType } from 'react-icons/lib';
import { MdAlternateEmail } from 'react-icons/md';
import {
  PiAddressBook,
  PiHandshake,
  PiListMagnifyingGlass,
} from 'react-icons/pi';

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
  {
    title: 'Emails',
    icon: MdAlternateEmail,
    url: 'emails',
  },
  {
    title: 'Contact',
    icon: PiAddressBook,
    url: 'contact',
  },
];

export default function Cards() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    Collaborations: 0,
    Researchers: 0,
    Submissions: 0,
    Emails: 0,
    Contact: 0,
  });

  const getData = async () => {
    try {
      setIsLoading(true);
      setData({
        Collaborations: await getCount('collaboration'),
        Researchers: await getCount('researcher'),
        Submissions: await getCount('submissions'),
        Emails: await getCount('email'),
        Contact: await getCount('contact'),
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
    <div className="grid grid-cols-4 gap-5 p-4 pt-5 max-xl:grid-cols-3">
      {cards.map((c, i) => (
        <Card
          as={Link}
          href={`/dashboard/${c.url}`}
          key={i}
          className="hover:bg-primary-50 hover:border-primary border py-4"
          shadow="none"
        >
          <CardHeader className="flex justify-between px-4 pb-0 pt-2">
            <span>
              <c.icon className="text-primary text-5xl" />
            </span>
            <h3 className="text-default-700 text-3xl">
              {isLoading ? (
                <Skeleton className="h-6 w-10 opacity-20" />
              ) : (
                data[c.title as keyof typeof data] || 0
              )}
            </h3>
          </CardHeader>
          <CardBody className="overflow-visible">
            <h4 className="text-large text-foreground-700">{c.title}</h4>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
