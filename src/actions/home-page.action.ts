'use server';

import HomePageType from '@/types/home-page.type';

const getHomePageData: () => Promise<HomePageType> = async () => {
  return {
    cta: {
      deadline: 'June 30, 2025',
    },
    researchers: [
      {
        comment:
          'Research Corridor has transformed how we collaborate on international research projects.',
        researcher: {
          name: 'Dr. Sarah Ahmed',
          avatar: 'https://thispersondoesnotexist.com',
          from: 'International Islamic University',
          position: 'Research Director',
        },
      },
      {
        comment:
          'Research Corridor has transformed how we collaborate on international research projects.',
        researcher: {
          name: 'Dr. Sarah Ahmed',
          avatar: 'https://thispersondoesnotexist.com',
          from: 'International Islamic University',
          position: 'Research Director',
        },
      },
      {
        comment:
          'Research Corridor has transformed how we collaborate on international research projects.',
        researcher: {
          name: 'Dr. Sarah Ahmed',
          avatar: 'https://thispersondoesnotexist.com',
          from: 'International Islamic University',
          position: 'Research Director',
        },
      },
      {
        comment:
          'Research Corridor has transformed how we collaborate on international research projects.',
        researcher: {
          name: 'Dr. Sarah Ahmed',
          avatar: 'https://thispersondoesnotexist.com',
          from: 'International Islamic University',
          position: 'Research Director',
        },
      },
      {
        comment:
          'Research Corridor has transformed how we collaborate on international research projects.',
        researcher: {
          name: 'Dr. Sarah Ahmed',
          avatar: 'https://thispersondoesnotexist.com',
          from: 'International Islamic University',
          position: 'Research Director',
        },
      },
    ],
  };
};

export default getHomePageData;
