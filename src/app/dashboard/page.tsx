import { Metadata } from 'next';

import ComingSoon from '@/components/ui/coming-soon';

export async function generateMetadata(): Promise<Metadata> {
  return {
    robots: { index: true, follow: false },
  };
}

export default function DashboardPage() {
  return (
    <>
      <ComingSoon page="dashboard" home={false} />
    </>
  );
}
