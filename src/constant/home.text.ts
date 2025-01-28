import { GoUnlock } from 'react-icons/go';
import { PiGlobeSimpleLight, PiSealCheckLight } from 'react-icons/pi';
import { TfiBolt } from 'react-icons/tfi';

export const metadata = {
  title: 'Research Corridor',
  description:
    'Research Corridor is a global platform fostering research collaboration and innovation across disciplines.',
  keywords: 'research, collaboration, innovation, publication, open access',
  image: '/opengraph-image.png',
  url: 'https://researchcorridor.ca',
};

export const header = {
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
