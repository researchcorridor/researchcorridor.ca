import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { getMetadata } from '@/actions/getMetadata';
import DashboardNavbar from '@/components/navbar/dashboard';
import Sidebar from '@/components/sidebar';

import { DashboardProviders } from './providers';

export async function generateMetadata(): Promise<Metadata> {
  const data: Metadata = await getMetadata('home');
  return {
    ...data,
    title: 'Dashboard',
    keywords: ['dashboard', 'admin', 'panel', 'controls'].join(`, `),
    robots: { index: false, follow: false },
  };
}

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <DashboardProviders>
      <div id="dashboard" className="select-none">
        <DashboardNavbar />
        <div className="flex">
          <Sidebar />
          <main className="mb-5 mr-5 h-[calc(100vh-85px)] flex-1 overflow-auto rounded-2xl bg-white shadow-lg">
            {children}
          </main>
        </div>
      </div>
    </DashboardProviders>
  );
}
