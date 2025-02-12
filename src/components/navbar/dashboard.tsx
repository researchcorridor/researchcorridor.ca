'use client';

import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'nextjs-toploader/app';
import { GoSidebarCollapse, GoSidebarExpand } from 'react-icons/go';
import { LuUserRound } from 'react-icons/lu';

import { userLogout } from '@/actions/auth.action';
import { dashboardNavbar as textData } from '@/constant/site-config.text';
import useDashboardState from '@/context/dashboard-state';

export default function DashboardNavbar() {
  const { setSidebarOpen, SidebarOpen } = useDashboardState();
  const router = useRouter();
  return (
    <nav className="flex h-16 items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <Button
          onPress={() => setSidebarOpen(!SidebarOpen)}
          variant="light"
          color="primary"
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
            height={50}
          />
          <h1 className="text-2xl leading-none">{textData.title}</h1>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Dropdown>
          <DropdownTrigger>
            <Avatar
              showFallback
              classNames={{
                base: 'bg-primary-400',
              }}
              className="cursor-pointer"
              fallback={<LuUserRound className="text-2xl text-white" />}
            />
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem
              as={Link}
              href="/admin/change-password"
              key="change-password"
            >
              Change Password
            </DropdownItem>
            <DropdownItem
              key="logout"
              onPress={async () => {
                await userLogout();
                router.push('/login');
              }}
              className="text-danger"
              color="danger"
            >
              logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </nav>
  );
}
