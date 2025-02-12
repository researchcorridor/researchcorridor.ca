'use client';

import {
  cn,
  Link,
  Navbar as NavbarUI,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from '@heroui/react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { navbar as textData } from '@/constant/site-config.text';

import SearchBox from './search';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      setScrollPosition(document.documentElement.scrollTop);
      firstRender.current = false;
      return;
    }
  }, []);

  return (
    <NavbarUI
      shouldHideOnScroll
      isBlurred={scrollPosition > 100 || pathname !== '/'}
      onScrollPositionChange={setScrollPosition}
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      className={cn(
        'fixed',
        scrollPosition > 70 || isMenuOpen ? '' : 'bg-transparent',
      )}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="hidden max-[940px]:flex"
        />
        <NavbarBrand as={Link} href="/">
          <Image
            src={textData.logo.src}
            alt={textData.logo.alt}
            width={140}
            height={50}
            className="cursor-pointer max-sm:w-28"
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="flex gap-2" justify="center">
        {textData.navItems.map((item, index) => (
          <NavbarItem key={index} className="flex max-[940px]:hidden">
            <Link
              color="foreground"
              href={item.url}
              className={cn(
                'hover:text-primary items-center gap-1 px-1',
                pathname === item.url ? 'text-primary' : '',
              )}
            >
              <item.icon className="text-xl" />
              {item.title}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <SearchBox />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="gap-4 pt-10">
        {textData.navItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              color="foreground"
              href={item.url}
              className={cn(
                'hover:text-primary items-center gap-2 px-1',
                pathname === item.url ? 'text-primary' : '',
              )}
            >
              <item.icon className="text-xl" />
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarMenu>
    </NavbarUI>
  );
};

export default Navbar;
