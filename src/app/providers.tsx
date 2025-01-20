'use client';

import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import NextTopLoader from 'nextjs-toploader';
import { Suspense } from 'react';

import { RrfProvider } from '@/context/ref';

import tailwindConfig from '../../tailwind.config';

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider defaultTheme="light">
        <NextTopLoader
          color={tailwindConfig.theme.extend.colors.primary.DEFAULT}
          height={2}
        />
        <RrfProvider>
          <Suspense>{children}</Suspense>
        </RrfProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
