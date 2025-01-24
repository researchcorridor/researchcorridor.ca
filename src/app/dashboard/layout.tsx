import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import DashboardNavbar from '@/components/navbar/dashboard';
import Sidebar from '@/components/sidebar';
import { meta } from '@/constant/site-config.text';

import { DashboardProviders } from './providers';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: meta.description,
  keywords: [meta.title, 'dashboard', 'admin', 'panel', 'control', 'cms'],
};

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
