import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import siteConfig from '@/constant/siteConfig';

export const metadata: Metadata = {
  title: siteConfig.title(),
  description: siteConfig.description(),
};

const AdminLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      <div className="flex gap-3">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
