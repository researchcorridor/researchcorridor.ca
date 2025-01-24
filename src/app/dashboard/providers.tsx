'use client';

import { DashboardStateProvider } from '@/context/dashboard-state';

export function DashboardProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardStateProvider>
      <>{children}</>
    </DashboardStateProvider>
  );
}
