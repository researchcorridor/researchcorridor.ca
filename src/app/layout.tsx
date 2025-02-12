import '@/styles/globals.css';

import { cn } from '@heroui/react';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { getMetadata } from '@/actions/getMetadata';
import { fonts } from '@/lib/fonts';

import { Providers } from './providers';

export async function generateMetadata(): Promise<Metadata> {
  const data: Metadata = await getMetadata('home');
  return {
    ...data,
    title: {
      default: data?.title as string,
      template: `%s | ${data.title}`,
    },
    robots: { index: true, follow: true },
    icons: {
      icon: [
        { url: '/favicon/favicon.ico', sizes: 'any', type: 'image/x-icon' },
        {
          url: '/favicon/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          url: '/favicon/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          url: '/favicon/favicon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          url: '/favicon/favicon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      shortcut: '/favicon/favicon-16x16.png',
      apple: '/favicon/apple-touch-icon.png',
    },
  };
}

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={cn('font-jacques-francois min-h-screen', fonts)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
