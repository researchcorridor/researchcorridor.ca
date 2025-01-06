import { GoUnlock } from 'react-icons/go';
import {
  PiCompassDuotone,
  PiGlobeSimpleLight,
  PiSealCheckLight,
} from 'react-icons/pi';
import { RiFocus2Line } from 'react-icons/ri';
import { TfiBolt } from 'react-icons/tfi';

const home = {
  header: {
    logo: '/images/logo.png',
    title: 'Research Corridor',
    description:
      'is a global platform fostering research collaboration and innovation across disciplines.',
  },
  about: {
    point: [
      {
        title: 'Our Vision',
        icon: RiFocus2Line,
      },
      {
        title: 'Our Mission',
        icon: PiCompassDuotone,
      },
    ],
    button: [
      {
        title: 'Explore Events',
        link: '/#events',
      },
      {
        title: 'View Latest Journals',
        link: '/#journals',
      },
    ],
  },
  events: {
    title: 'Upcoming Events',
    description:
      'Join our community at these upcoming research events and conferences',
    buttonText: 'Explore All Events',
    cardButtonText: 'Learn more',
  },
  collaboration: {
    title: 'Collaboration With',
    description:
      'Working together with leading institutions to advance research and innovation',
    buttonText: 'View All Partners',
  },
  journals: {
    title: 'Featured Journals',
    description:
      'Discover our collection of peer-reviewed journals covering various disciplines',
    buttonText: 'View All Journals',
    cardButtonText: 'View Current Issue',
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
