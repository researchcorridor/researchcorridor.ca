'use server';

import { HomePageType } from '@/app/(root)/page';

export const getHomePageData: () => Promise<HomePageType> = async () => {
  return {
    eventsSection: {
      show: true,
      data: {
        description:
          'Join our community at these upcoming research events and conferences',
        sectionTitle: 'Upcoming Events',
        Partner1: {
          name: 'Research Corridor Canada',
          color: '#ff9595',
          img: 'https://kdrrahdzikcrsfsjmuwv.supabase.co/storage/v1/object/public/images/logo.png',
        },
        Partner2: {
          name: 'Lahore LEADS University Pakistan',
          color: '#374573',
          img: 'https://kdrrahdzikcrsfsjmuwv.supabase.co/storage/v1/object/public/images/collaboration/Lahore%20Leads%20University.png',
        },
        title: `International Conference`,
        subtitle: `Innovating a Sustainable Future "Global Challenges and Solutions"`,
        benefits: [
          'Certificate to Presenters on behalf of research corridor Canada.',
          'Selected Paper will be Published in HEC-Y Category Journals.',
          'All Abstract will be Publish in Conference Book.',
          'Minimum fee will be charged to attend the International Conference.',
        ],
        AbstractSubmission: '20th February',
        ConferenceDate: '27th, 28th February 2025',
        buttonText: 'Call for Papers',
        buttonLink: '/',
      },
    },
    aboutSection: {
      show: true,
      data: {
        point: [
          'To create a global platform for research inspired by Islamic values and interdisciplinary innovation.',
          'Facilitating high-quality research, fostering collaboration, and driving impactful solutions for global challenges.',
        ],
        img: 'https://kdrrahdzikcrsfsjmuwv.supabase.co/storage/v1/object/public/images/cape.png',
      },
    },
    collaborationSection: {
      show: true,
      data: [
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
    },
    wyChooseSection: {
      show: true,
    },
    ctaJournalSubmitSection: {
      show: true,
      deadline: 'June 30, 2025',
    },
    journalsSection: {
      show: true,
      data: [
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
          title:
            'Journal of Islamic Studies is a multi-disciplinary publication dedicated',
          description:
            'The Journal of Islamic Studies is a multi-disciplinary publication dedicated to the scholarly study of all aspects of Islam and of the Islamic world.',
          thumbnail: 'https://streamgo.events/assets/articles/7.png',
          Category: 'Islamic Studies',
          link: 'journal-of-islamic-studies-is-a-multi-disciplinary-publication-dedicated',
        },
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
          title:
            'Journal of Islamic Studies is a multi-disciplinary publication dedicated',
          description:
            'The Journal of Islamic Studies is a multi-disciplinary publication dedicated to the scholarly study of all aspects of Islam and of the Islamic world.',
          thumbnail: 'https://streamgo.events/assets/articles/7.png',
          Category: 'Islamic Studies',
          link: 'journal-of-islamic-studies-is-a-multi-disciplinary-publication-dedicated',
        },
      ],
    },
    researchersSection: {
      show: true,
      data: [
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
    },
    subscriberSection: {
      show: true,
    },
  };
};
