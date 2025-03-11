'use client';

import { Button, cn, Tooltip } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconType } from 'react-icons/lib';

import { dashboardSidebar as textData } from '@/constant/site-config.text';
import useDashboardState from '@/context/dashboard-state';

const Sidebar = () => {
  const pathname = usePathname();
  const { SidebarOpen } = useDashboardState();
  const isActive = (url: string) => {
    if (url === '/') return pathname === '/dashboard';
    return pathname.includes(url);
  };
  return (
    <aside className=" h-body flex flex-col justify-between overflow-y-auto p-4">
      <nav className="flex flex-col gap-2">
        {textData?.menu?.map(
          (
            item: { title: string; url: string; icon: IconType },
            index: number,
          ) => (
            <Tooltip
              key={index}
              content={item.title}
              radius="sm"
              placement="right"
              hidden={SidebarOpen}
              showArrow
              shouldFlip
            >
              <Button
                as={Link}
                href={`/dashboard${item.url}`}
                key={index}
                variant={isActive(item.url) ? 'flat' : 'light'}
                size="lg"
                radius="sm"
                className={cn(SidebarOpen ? 'justify-start' : '')}
                isIconOnly={!SidebarOpen}
              >
                <item.icon className="text-primary text-xl" />
                {SidebarOpen && item.title}
              </Button>
            </Tooltip>
          ),
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
