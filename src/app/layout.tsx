import '@/styles/globals.css';

import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { PropsWithChildren } from 'react';

import siteConfig from '@/constant/siteConfig';
import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';

import tailwindConfig from '../../tailwind.config';
import { Providers } from './providers';

export const generateMetadata = (): Metadata => ({
  metadataBase: new URL(siteConfig.url()),
  title: {
    default: siteConfig.title(),
    template: `%s | ${siteConfig.title()}`,
  },
  description: siteConfig.description(),
  keywords: siteConfig.keywords(),
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
    url: siteConfig.url(),
    title: siteConfig.title(),
    description: siteConfig.description(),
    siteName: siteConfig.title(),
    images: '/opengraph-image.png',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title(),
    description: siteConfig.description(),
    images: '/opengraph-image.png',
  },
});

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={cn('font-jacques-francois min-h-screen', fonts)}>
        <NextTopLoader
          color={tailwindConfig.theme.extend.colors.primary.DEFAULT}
          height={2}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
