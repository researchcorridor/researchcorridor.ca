import { Inter, Jacques_Francois } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  fallback: ['system-ui', 'arial'],
});

const jacquesFrancois = Jacques_Francois({
  subsets: ['latin'],
  variable: '--font-jacques-francois',
  fallback: ['serif'],
  weight: '400',
});

export const fonts = [inter.variable, jacquesFrancois.variable];
