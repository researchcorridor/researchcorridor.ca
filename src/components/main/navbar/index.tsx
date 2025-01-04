'use client';

import {
  Button,
  Link,
  Navbar as NavbarUI,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from '@nextui-org/react';
import Image from 'next/image';
import { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';

import mainNavbar from '@/constant/mainNavbar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  return (
    <NavbarUI
      shouldHideOnScroll
      isBlurred={scrollPosition > 100}
      onScrollPositionChange={setScrollPosition}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className={`${scrollPosition > 100 ? '' : 'bg-transparent'} fixed`}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="hidden max-[800px]:flex"
        />
        <NavbarBrand as={Link} href="/">
          <Image
            src={mainNavbar.logo.src}
            alt={mainNavbar.logo.alt}
            width={140}
            height={50}
            className="cursor-pointer max-sm:w-28"
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="flex gap-4" justify="center">
        {mainNavbar.navItems.map((item, index) => (
          <NavbarItem key={index} className="flex max-[800px]:hidden">
            <Link
              color="foreground"
              href={item.url}
              className="hover:text-primary px-1"
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <Button
            color="primary"
            variant="light"
            isIconOnly
            className="text-2xl max-sm:text-xl"
          >
            <IoSearchSharp />
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="gap-4 pt-10">
        {mainNavbar.navItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              color="foreground"
              href={item.url}
              className="hover:text-primary px-1"
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarMenu>
    </NavbarUI>
  );
};

export default Navbar;
