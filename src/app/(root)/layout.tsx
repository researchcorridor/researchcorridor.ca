import { PropsWithChildren } from 'react';

import Footer from '@/components/footer/index.root';
import Navbar from '@/components/navbar';

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
