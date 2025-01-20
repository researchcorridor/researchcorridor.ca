'use server';

import { LandingPageType } from '@/app/(root)/page';

const getHomePageData: () => Promise<LandingPageType> = async () => {
  return {
    about: {
      point: [
        'To create a global platform for research inspired by Islamic values and interdisciplinary innovation.',
        'Facilitating high-quality research, fostering collaboration, and driving impactful solutions for global challenges.',
      ],
      img: 'https://qhrlhzrjavgrczdonhra.supabase.co/storage/v1/object/public/general/about.png',
    },
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
        title: 'Lincoln University College',
        thumbnail:
          'https://qhrlhzrjavgrczdonhra.supabase.co/storage/v1/object/public/general/collaboration/Lincoln%20University%20College.webp',
        description:
          'Lincoln University College (LUC) is a vibrant and diverse academic center focused on teaching and learning and helps to realize innovative knowledge. LUC brings together world-renowned faculty and students from all over the nation and the world.',
        link: 'https://www.lincoln.edu.my/',
      },
      {
        title: 'University Of Punjab',
        thumbnail:
          'https://qhrlhzrjavgrczdonhra.supabase.co/storage/v1/object/public/general/collaboration/University%20Of%20Punjab.png',
        description:
          'The University of the Punjab is a public research university located in Lahore, Punjab, Pakistan. It is the oldest public university in Pakistan. With multiple campuses in Gujranwala, Jhelum, and Khanspur, the university.',
        link: 'https://www.pu.edu.pk/',
      },
      {
        title: 'Lahore Leads University',
        thumbnail:
          'https://qhrlhzrjavgrczdonhra.supabase.co/storage/v1/object/public/general/collaboration/Lahore%20Leads%20University.png',
        description:
          'Lahore Leads University is a private university located in Lahore, Punjab, Pakistan. It was established in 2011. The university is recognized by the Higher Education Commission of Pakistan.',
        link: 'https://leads.edu.pk/',
      },
      {
        title: 'University of Toronto',
        thumbnail:
          'https://qhrlhzrjavgrczdonhra.supabase.co/storage/v1/object/public/general/collaboration/University%20of%20Toronto.png',
        description:
          'The University of Toronto is a public research university in Toronto, Ontario, Canada, located on the grounds that surround Queen’s Park. It was founded by royal charter in 1827 as King’s College, the first institution of higher learning in the colony of Upper Canada.',
        link: 'https://www.utoronto.ca/',
      },
      {
        title: 'Universiti Utara Malaysia',
        thumbnail:
          'https://qhrlhzrjavgrczdonhra.supabase.co/storage/v1/object/public/general/collaboration/Universiti%20Utara%20Malaysia.png',
        description:
          'Universiti Utara Malaysia is a public university in the town of Sintok, Kedah. It was established on 16 February 1984. UUM was established as a management university. It was known as Kolej Universiti Perniagaan dan Perindustrian Utara Malaysia.',
        link: 'https://www.uum.edu.my/',
      },
      {
        title: 'University of Oxford',
        thumbnail:
          'https://qhrlhzrjavgrczdonhra.supabase.co/storage/v1/object/public/general/collaboration/University%20of%20Oxford.png',
        description:
          'The University of Oxford is a collegiate research university in Oxford, England. There is evidence of teaching as early as 1096, making it the oldest university in the English-speaking world and the world’s second-oldest university in continuous operation.',
        link: 'https://www.ox.ac.uk/',
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
