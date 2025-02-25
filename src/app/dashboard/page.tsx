import { Metadata } from 'next';

import Cards from '@/components/dashboard/cards';

export async function generateMetadata(): Promise<Metadata> {
  return {
    robots: { index: true, follow: false },
  };
}

export default function DashboardPage() {
  return (
    <div>
      <div className="w-full p-4 py-5">
        <h2 className="text-primary text-center text-4xl">
          Welcome to Research Corridor
        </h2>
      </div>
      <Cards />
    </div>
  );
}
