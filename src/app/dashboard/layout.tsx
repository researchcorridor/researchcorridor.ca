import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import DashboardNavbar from '@/components/navbar/dashboard';
import Sidebar from '@/components/sidebar';

import { DashboardProviders } from './providers';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Dashboard',
    keywords: ['dashboard', 'admin', 'panel', 'controls'].join(`, `),
    robots: { index: false, follow: false },
  };
}

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <DashboardProviders>
      <div id="dashboard" className="text-foreground-900 select-none bg-white">
        <DashboardNavbar />
        <div className="border-foreground-300 flex border-t">
          <Sidebar />
          <main className="border-foreground-300 relative h-[calc(100vh-85px)] flex-1 overflow-auto border-l">
            {children}
          </main>
        </div>
      </div>
    </DashboardProviders>
  );
}
