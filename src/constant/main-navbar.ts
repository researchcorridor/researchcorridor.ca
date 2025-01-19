import {
  PiAddressBookDuotone,
  PiCalendarCheckDuotone,
  PiHandshakeDuotone,
  PiInfoDuotone,
  PiListMagnifyingGlassDuotone,
  PiNewspaperDuotone,
} from 'react-icons/pi';

const mainNavbar = {
  logo: {
    alt: 'research corridor',
    src: '/images/vertical-logo.png',
  },
  navItems: [
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
      title: 'Collaborations',
      icon: PiHandshakeDuotone,
      url: '/collaborations',
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
};

export default mainNavbar;
