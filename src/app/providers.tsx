'use client';

import { HeroUIProvider } from '@heroui/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import NextTopLoader from 'nextjs-toploader';
import { useRouter } from 'nextjs-toploader/app';
import { Suspense } from 'react';

import { RrfProvider } from '@/context/ref';

import tailwindConfig from '../../tailwind.config';

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider defaultTheme="light">
        <NextTopLoader
          color={tailwindConfig.theme.extend.colors.primary.DEFAULT}
          height={2}
        />
        <Suspense>
          <RrfProvider>
            <>{children}</>
          </RrfProvider>
        </Suspense>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
