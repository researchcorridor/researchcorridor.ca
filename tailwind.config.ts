import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jacques-francois)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#FF9595',
          foreground: '#ffffff',
          50: '#fff2f2',
          100: '#ffe4e4',
          200: '#ffd7d7',
          300: '#ffc9c9',
          400: '#ffbbbb',
          500: '#ffadad',
          600: '#ff9e9e',
          700: '#f99292',
          800: '#ec8a8a',
          900: '#de8282',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#fbfcfc',
          },
        },
      },
    }),
    require('tailwindcss-animate'),
  ],
} satisfies Config;
