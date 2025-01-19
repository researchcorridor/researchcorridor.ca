import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import { meta } from '@/constant/site-config.text';

export const metadata: Metadata = {
  metadataBase: new URL(meta.url),
  title: {
    default: meta.title,
    template: `%s | ${meta.title}`,
  },
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
