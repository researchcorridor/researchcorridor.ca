'use server';

import { LandingPageType } from '@/app/(main)/page';

const getHomePageData: () => Promise<LandingPageType> = async () => {
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
          from: 'University of Management and Technology',
          position: 'Research Director',
        },
      },
      {
        comment:
          'Research Corridor has transformed how we collaborate on international research projects.',
        researcher: {
          name: 'Dr. Sarah Ahmed',
          avatar: 'https://thispersondoesnotexist.com',
          from: 'University of Management and Technology',
          position: 'Research Director',
        },
      },
      {
        comment:
          'Research Corridor has transformed how we collaborate on international research projects.',
        researcher: {
          name: 'Dr. Sarah Ahmed',
          avatar: 'https://thispersondoesnotexist.com',
          from: 'University of Management and Technology',
          position: 'Research Director',
        },
      },
      {
        comment:
          'Research Corridor has transformed how we collaborate on international research projects.',
        researcher: {
          name: 'Dr. Sarah Ahmed',
          avatar: 'https://thispersondoesnotexist.com',
          from: 'University of Management and Technology',
          position: 'Research Director',
        },
      },
      {
        comment:
          'Research Corridor has transformed how we collaborate on international research projects.',
        researcher: {
          name: 'Dr. Sarah Ahmed',
          avatar: 'https://thispersondoesnotexist.com',
          from: 'University of Management and Technology',
          position: 'Research Director',
        },
      },
    ],
    journals: [
      {
        title:
          'Journal of Islamic Studies is a multi-disciplinary publication dedicated',
        description:
          'The Journal of Islamic Studies is a multi-disciplinary publication dedicated to the scholarly study of all aspects of Islam and of the Islamic world.',
        thumbnail: 'https://streamgo.events/assets/articles/7.png',
        Category: 'Islamic Studies',
        link: 'journal-of-islamic-studies-is-a-multi-disciplinary-publication-dedicated',
      },
      {
        title: 'Journal of Islamic Studies',
        description:
          'The Journal of Islamic Studies is a multi-disciplinary publication dedicated to the scholarly study of all aspects of Islam and of the Islamic world.',
        thumbnail: 'https://streamgo.events/assets/articles/7.png',
        Category: 'Islamic Studies',
        link: 'journal-of-islamic-studies-is-a-multi-disciplinary-publication-dedicated',
      },
      {
        title: 'Journal of Islamic Studies',
        description:
          'The Journal of Islamic Studies is a multi-disciplinary publication dedicated to the scholarly study of all aspects of Islam and of the Islamic world.',
        thumbnail: 'https://streamgo.events/assets/articles/7.png',
        Category: 'Islamic Studies',
        link: 'journal-of-islamic-studies-is-a-multi-disciplinary-publication-dedicated',
      },
      {
        title: 'Journal of Islamic Studies',
        description:
          'The Journal of Islamic Studies is a multi-disciplinary publication dedicated to the scholarly study of all aspects of Islam and of the Islamic world.',
        thumbnail: 'https://streamgo.events/assets/articles/7.png',
        Category: 'Islamic Studies',
        link: 'journal-of-islamic-studies-is-a-multi-disciplinary-publication-dedicated',
      },
    ],
    collaboration: [
      {
        title: 'University of Management and Technology',
        description: 'Leading research in Islamic studies and modern sciences',
        thumbnail:
          'https://www.edarabia.com/wp-content/uploads/2012/05/university-management-technology-lahore-pakistan.jpg',
        link: '#',
      },
      {
        title: 'University of Management and Technology',
        description: 'Leading research in Islamic studies and modern sciences',
        thumbnail:
          'https://www.edarabia.com/wp-content/uploads/2012/05/university-management-technology-lahore-pakistan.jpg',
        link: '#',
      },
      {
        title: 'University of Management and Technology',
        description: 'Leading research in Islamic studies and modern sciences',
        thumbnail:
          'https://www.edarabia.com/wp-content/uploads/2012/05/university-management-technology-lahore-pakistan.jpg',
        link: '#',
      },
      {
        title: 'University of Management and Technology',
        description: 'Leading research in Islamic studies and modern sciences',
        thumbnail:
          'https://www.edarabia.com/wp-content/uploads/2012/05/university-management-technology-lahore-pakistan.jpg',
        link: '#',
      },
      {
        title: 'University of Management and Technology',
        description: 'Leading research in Islamic studies and modern sciences',
        thumbnail:
          'https://www.edarabia.com/wp-content/uploads/2012/05/university-management-technology-lahore-pakistan.jpg',
        link: '#',
      },
    ],
    events: [
      {
        title: 'International Conference on Islamic Studies',
        description:
          'The International Conference on Islamic Studies is a multi-disciplinary conference dedicated to the scholarly study of all aspects of Islam and of the Islamic world.',
        thumbnail: 'https://streamgo.events/assets/articles/7.png',
        date: 'June 30, 2025',
        category: 'Islamic Studies',
        location: 'Lahore, Pakistan',
        link: 'international-conference-on-islamic-studies',
      },
      {
        title: 'International Conference on Islamic Studies',
        description:
          'The International Conference on Islamic Studies is a multi-disciplinary conference dedicated to the scholarly study of all aspects of Islam and of the Islamic world.',
        thumbnail: 'https://streamgo.events/assets/articles/7.png',
        date: 'June 30, 2025',
        category: 'Islamic Studies',
        location: 'Lahore, Pakistan',
        link: 'international-conference-on-islamic-studies',
      },
      {
        title: 'International Conference on Islamic Studies',
        description:
          'The International Conference on Islamic Studies is a multi-disciplinary conference dedicated to the scholarly study of all aspects of Islam and of the Islamic world.',
        thumbnail: 'https://streamgo.events/assets/articles/7.png',
        date: 'June 30, 2025',
        category: 'Islamic Studies',
        location: 'Lahore, Pakistan',
        link: 'international-conference-on-islamic-studies',
      },
      {
        title: 'International Conference on Islamic Studies',
        description:
          'The International Conference on Islamic Studies is a multi-disciplinary conference dedicated to the scholarly study of all aspects of Islam and of the Islamic world.',
        thumbnail: 'https://streamgo.events/assets/articles/7.png',
        date: 'June 30, 2025',
        category: 'Islamic Studies',
        location: 'Lahore, Pakistan',
        link: 'international-conference-on-islamic-studies',
      },
    ],
  };
};

export default getHomePageData;
