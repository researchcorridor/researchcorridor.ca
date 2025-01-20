import { GoUnlock } from 'react-icons/go';
import { PiGlobeSimpleLight, PiSealCheckLight } from 'react-icons/pi';
import { TfiBolt } from 'react-icons/tfi';

export const homeText = {
  logo: '/images/logo.png',
  title: 'Research Corridor',
  description:
    'is a global platform fostering research collaboration and innovation across disciplines.',
};

export const whyChoose = {
  title: 'Why Choose Research Corridor?',
  cards: [
    {
      title: 'Global Visibility',
      icon: PiGlobeSimpleLight,
      description:
        'Your research reaches a worldwide audience of scholars and practitioners',
    },
    {
      title: 'Rigorous Peer Review',
      icon: PiSealCheckLight,
      description: 'Expert evaluation ensuring high-quality publications',
    },
    {
      title: 'Open Access',
      icon: GoUnlock,
      description:
        'Maximize impact through unrestricted access to your research',
    },
    {
      title: 'Rapid Publication',
      icon: TfiBolt,
      description: 'Efficient review and publication process',
    },
  ],
};

export const event = {
  name: `UPCOMING EVENT`,
  title: `Innovating a Sustainable Future`,
  subtitle: `"Global Challenges and Solutions"`,
  description: `The purpose of this MOU is to formalize the collaboration between Lahore Leads University and The Research Corridor for organizing an international conference on the theme "Innovating a Sustainable Future Global Challenges and Solutions "`,
  buttonText: 'Join us',
  buttonLink: '/events/1',
  image:
    'https://qhrlhzrjavgrczdonhra.supabase.co/storage/v1/object/public/general/collaboration.jpg',
};
