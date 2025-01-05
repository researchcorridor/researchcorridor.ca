import { GoUnlock } from 'react-icons/go';
import { PiGlobeSimpleLight, PiSealCheckLight } from 'react-icons/pi';
import { TfiBolt } from 'react-icons/tfi';

const home = {
  header: {
    title: 'Research Corridor',
    description:
      'is a global platform fostering research collaboration and innovation across disciplines.',
  },
  about: {
    points: [
      {
        title: 'Our Vision',
        description:
          'To create a global platform for research inspired by Islamic values and interdisciplinary innovation.',
      },
      {
        title: 'Our Mission',
        description:
          'Facilitating high-quality research, fostering collaboration, and driving impactful solutions for global challenges.',
      },
    ],
    buttons: [
      {
        title: 'View Latest Journals',
        link: '#journals',
      },
      {
        title: 'Explore Events',
        link: '#events',
      },
    ],
    image: '/images/about.png',
  },
  events: {
    title: 'Upcoming Events',
  },
  collaboration: {
    title: 'In Collaboration With',
  },
  journals: {
    title: 'Featured Journals',
  },
  whyChoose: {
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
  },
  cta: {
    title: 'Contribute to Our Upcoming Edition',
    description:
      'We invite submissions for our upcoming editions across various disciplines. Share your research findings with our global academic community and contribute to advancing knowledge in your field.',
    nextDate: 'Next Submission Deadline: ',
    buttonText: ' Submit Your Paper',
    buttonLink: '/submit-paper',
  },
  researchers: {
    title: 'What Researchers Say',
    description:
      'Hear from leading researchers and contributors about their experience',
  },
  email: {
    title: 'Stay Updated with Latest Research',
    description:
      'Subscribe to our newsletter and get the latest updates on research publications, events, and opportunities.',
    inputText: 'Enter Your Email',
    buttonText: 'Subscribe',
  },
};

export default home;
