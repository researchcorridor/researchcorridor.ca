import { PropsWithChildren } from 'react';

import Footer from '@/components/main/footer';
import Navbar from '@/components/main/navbar';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
