import '@/styles/globals.css';

import { cn } from '@nextui-org/react';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { meta } from '@/constant/site-config.text';
import { fonts } from '@/lib/fonts';

import { Providers } from './providers';

export const generateMetadata = (): Metadata => ({
  metadataBase: new URL(meta.url),
  title: {
    default: meta.title,
    template: `%s | ${meta.title}`,
  },
  description: meta.description,
  keywords: meta.keywords,
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
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
  verification: {
    // google: siteConfig.googleSiteVerificationId(),
  },
  openGraph: {
    url: meta.url,
    title: meta.title,
    description: meta.description,
    siteName: meta.title,
    images: '/opengraph-image.png',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
    images: '/opengraph-image.png',
  },
});

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
