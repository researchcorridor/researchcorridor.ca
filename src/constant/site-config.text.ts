import { IoCallOutline } from 'react-icons/io5';
import { LuFacebook, LuInstagram, LuLinkedin } from 'react-icons/lu';
import { MdOutlineEmail } from 'react-icons/md';
import {
  PiAddressBook,
  PiCalendarCheck,
  PiHandshake,
  PiHouseLine,
  PiInfo,
  PiListMagnifyingGlass,
  PiMapPinAreaLight,
  PiNewspaper,
} from 'react-icons/pi';
import { RiTwitterXFill } from 'react-icons/ri';

export const metadata = {
  title: 'Research Corridor',
  description:
    'Research Corridor is a global platform fostering research collaboration and innovation across disciplines.',
  keywords: 'research, collaboration, innovation, publication, open access',
  image: '/opengraph-image.png',
  url: 'https://researchcorridor.ca',
  dashboardURL: 'https://researchcorridor.ca/dashboard',
};

export const header = {
  logo: '/images/logo.png',
  title: 'Research Corridor',
  description:
    'is a global platform fostering research collaboration and innovation across disciplines.',
};

export const navbar = {
  logo: {
    alt: 'research corridor',
    src: '/images/vertical-logo.png',
  },
  navItems: [
    {
      title: 'Events',
      icon: PiCalendarCheck,
      url: '/events',
    },
    {
      title: 'Collaborations',
      icon: PiHandshake,
      url: '/collaborations',
    },
    {
      title: 'Journals',
      icon: PiNewspaper,
      url: '/journals',
    },
    {
      title: 'Researchers',
      icon: PiListMagnifyingGlass,
      url: '/researchers',
    },
    {
      title: 'About',
      icon: PiInfo,
      url: '/about',
    },
    {
      title: 'Contact',
      icon: PiAddressBook,
      url: '/contact',
    },
  ],
};

export const dashboardNavbar = {
  logo: '/images/logo.png',
  title: 'Research Corridor',
};

export const dashboardSidebar = {
  menu: [
    {
      title: 'Dashboard',
      icon: PiHouseLine,
      url: '/',
    },
    {
      title: 'Events',
      icon: PiCalendarCheck,
      url: '/events',
    },
    {
      title: 'Collaborations',
      icon: PiHandshake,
      url: '/collaborations',
    },
    {
      title: 'Journals',
      icon: PiNewspaper,
      url: '/journals',
    },
    {
      title: 'Researchers',
      icon: PiListMagnifyingGlass,
      url: '/researchers',
    },
    {
      title: 'Contact',
      icon: PiAddressBook,
      url: '/contact',
    },
  ],
};

export const footer = {
  logo: '/images/logo.png',
  title: 'Research Corridor',
  description:
    'Research Corridor is a global platform fostering research collaboration and innovation across disciplines.',
  copyright: `© ${new Date().getFullYear()} Research Corridor. All rights reserved`,
  menus: [
    {
      title: 'Quick Links',
      links: [
        {
          title: 'Home',
          icon: PiHouseLine,
          url: '/',
        },
        {
          title: 'About',
          icon: PiInfo,
          url: '/about',
        },
        {
          title: 'Events',
          icon: PiCalendarCheck,
          url: '/events',
        },
        {
          title: 'Collaborations',
          icon: PiHandshake,
          url: '/collaborations',
        },
        {
          title: 'Journals',
          icon: PiNewspaper,
          url: '/journals',
        },
        {
          title: 'Researchers',
          icon: PiListMagnifyingGlass,
          url: '/researchers',
        },
        {
          title: 'Contact',
          icon: PiAddressBook,
          url: '/contact',
        },
      ],
    },
  ],
  contact: {
    title: 'Contact Us',
    links: [
      {
        title: 'Email',
        icon: MdOutlineEmail,
        text: 'contact@researchcorridor.com',
        url: 'mailto:contact@researchcorridor.com',
      },
      {
        title: 'Phone',
        icon: IoCallOutline,
        text: '+1 (555) 123-4567',
        url: 'tel:+1234567890',
      },
      {
        title: 'Address',
        icon: PiMapPinAreaLight,
        text: 'Johar town, Lahore, Pakistan',
        url: 'https://goo.gl/maps/1234ResearchCorridor',
      },
    ],
  },
  social: [
    {
      title: 'Facebook',
      icon: LuFacebook,
      url: 'https://www.facebook.com',
    },
    {
      title: 'Twitter',
      icon: RiTwitterXFill,
      url: 'https://www.twitter.com',
    },
    {
      title: 'LinkedIn',
      icon: LuLinkedin,
      url: 'https://www.linkedin.com',
    },
    {
      title: 'Instagram',
      icon: LuInstagram,
      url: 'https://www.instagram.com',
    },
  ],
};
