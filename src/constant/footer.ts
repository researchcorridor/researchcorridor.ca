import { IoCallOutline } from 'react-icons/io5';
import { LuFacebook, LuInstagram, LuLinkedin } from 'react-icons/lu';
import { MdOutlineEmail } from 'react-icons/md';
import {
  PiAddressBookDuotone,
  PiCalendarCheckDuotone,
  PiHandshakeDuotone,
  PiHouseLineDuotone,
  PiInfoDuotone,
  PiListMagnifyingGlassDuotone,
  PiMapPinAreaLight,
  PiNewspaperDuotone,
} from 'react-icons/pi';
import { RiTwitterXFill } from 'react-icons/ri';

const footer = {
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
          icon: PiHouseLineDuotone,
          url: '/',
        },
        {
          title: 'About',
          icon: PiInfoDuotone,
          url: '/about',
        },
        {
          title: 'Events',
          icon: PiCalendarCheckDuotone,
          url: '/events',
        },
        {
          title: 'Collaboration',
          icon: PiHandshakeDuotone,
          url: '/collaboration',
        },
        {
          title: 'Journals',
          icon: PiNewspaperDuotone,
          url: '/journals',
        },
        {
          title: 'Researchers',
          icon: PiListMagnifyingGlassDuotone,
          url: '/researchers',
        },
        {
          title: 'Contact',
          icon: PiAddressBookDuotone,
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
  },
};

export default footer;
