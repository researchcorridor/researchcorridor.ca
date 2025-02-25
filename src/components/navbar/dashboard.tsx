'use client';

import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { GoSidebarCollapse, GoSidebarExpand } from 'react-icons/go';

import { dashboardNavbar as textData } from '@/constant/site-config.text';
import useDashboardState from '@/context/dashboard-state';

import FullScreen from '../ui/full-screen';
import User from '../ui/user';

export default function DashboardNavbar() {
  const { setSidebarOpen, SidebarOpen } = useDashboardState();
  return (
    <nav className="flex h-16 items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <Button
          onPress={() => setSidebarOpen(!SidebarOpen)}
          variant="light"
          className="text-primary"
          isIconOnly
        >
          {SidebarOpen ? (
            <GoSidebarExpand className="text-2xl" />
          ) : (
            <GoSidebarCollapse className="text-2xl" />
          )}
        </Button>
        <Link
          href="/"
          target="_blank"
          className="text-primary flex items-center gap-2"
          color="primary"
        >
          <Image
            src={textData.logo}
            alt={textData.title}
            width={50}
            height={40}
          />
          <h1 className="text-primary flex items-center gap-5 text-xl">
            {textData.title}
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <FullScreen />
        <User />
      </div>
    </nav>
  );
}
