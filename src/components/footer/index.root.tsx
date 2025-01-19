'use client';

import Image from 'next/image';
import Link from 'next/link';

import { footer as TextData } from '@/constant/site-config.text';

const Footer = () => {
  return (
    <footer>
      <div className="m-auto grid max-w-7xl grid-cols-3 justify-between gap-3 p-10 max-md:grid-cols-2 max-md:gap-10 max-sm:grid-cols-1">
        <div className="flex flex-col items-center gap-4 max-md:col-span-2 max-sm:col-span-1">
          <Image
            src={TextData.logo}
            alt={TextData.title}
            width={150}
            height={100}
            className="h-auto"
          />
          <h2 className="text-foreground-800 text-center text-2xl">
            {TextData.title}
          </h2>
          <p className="text-foreground-800 text-center text-base">
            {TextData.description}
          </p>
        </div>
        <div className="mt-5 flex justify-center gap-4">
          {TextData.menus.map((menu, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="text-foreground-800 text-2xl">{menu.title}</h3>
              <div className="flex flex-col gap-3">
                {menu.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    className="hover:text-primary text-foreground-800 flex items-center gap-3 text-base  max-sm:justify-center"
                  >
                    <link.icon />
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-center gap-4">
          <div className="flex flex-col gap-4 max-sm:justify-center">
            <h3 className="text-foreground-800 text-2xl max-sm:text-center">
              {TextData.contact.title}
            </h3>
            <div className="flex flex-col gap-3">
              {TextData.contact.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="hover:text-primary text-foreground-800 flex items-center gap-3  max-sm:justify-center"
                >
                  <link.icon />
                  {link.text}
                </Link>
              ))}
            </div>
            <div className="flex justify-center gap-6 pt-4">
              {TextData.social.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  className="hover:text-primary text-foreground-700 text-3xl"
                >
                  <social.icon />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto w-full max-w-7xl px-4">
        <div className="bg-foreground-300 h-px w-full" />
      </div>
      <p className="text-foreground-800 p-7 text-center max-sm:text-xs">
        {TextData.copyright}
      </p>
    </footer>
  );
};

export default Footer;
