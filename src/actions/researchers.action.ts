'use server';

import ResearchersCardType from '@/types/researchers-card.type';

export const getResearchers: () => Promise<
  ResearchersCardType[]
> = async () => {
  return [
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
  ];
};
