'use client';

import { Button, cn, Tooltip } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { dashboardSidebar as textData } from '@/constant/site-config.text';
import useDashboardState from '@/context/dashboard-state';

const Sidebar = () => {
  const pathname = usePathname();
  const { SidebarOpen } = useDashboardState();
  return (
    <aside className="">
      <nav className="flex flex-col gap-2 p-4">
        {textData?.menu?.map((item, index) => (
          <Tooltip
            key={index}
            color="primary"
            content={item.title}
            placement="right"
            hidden={SidebarOpen}
            delay={0}
            showArrow
            shouldFlip
          >
            <Button
              as={Link}
              href={`/dashboard${item.url}`}
              key={index}
              variant={
                pathname === `/dashboard${item.url}`
                  ? 'solid'
                  : pathname === `/dashboard` && item.url === '/'
                    ? 'solid'
                    : 'light'
              }
              color="primary"
              className={cn(SidebarOpen ? 'justify-start' : '')}
              isIconOnly={!SidebarOpen}
            >
              <item.icon className="text-xl" />
              {SidebarOpen && item.title}
            </Button>
          </Tooltip>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
