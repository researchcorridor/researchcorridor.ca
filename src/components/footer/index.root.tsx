'use client';

import Image from 'next/image';
import Link from 'next/link';

import footerText from '@/constant/footer';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="m-auto grid max-w-7xl grid-cols-3 justify-between gap-3 p-10 max-md:grid-cols-2 max-md:gap-10 max-sm:grid-cols-1">
        <div className="flex flex-col items-center gap-4 max-md:col-span-2 max-sm:col-span-1">
          <Image
            src={footerText.logo}
            alt={footerText.title}
            width={150}
            height={100}
            className="h-auto"
          />
          <h2 className="text-center text-2xl text-white">
            {footerText.title}
          </h2>
          <p className="text-center text-base text-white">
            {footerText.description}
          </p>
        </div>
        <div className="mt-5 flex justify-center gap-4">
          {footerText.menus.map((menu, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="text-2xl text-white">{menu.title}</h3>
              <div className="flex flex-col gap-3">
                {menu.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    className="hover:text-primary flex items-center gap-3 text-base text-white  max-sm:justify-center"
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
            <h3 className="text-2xl text-white max-sm:text-center">
              {footerText.contact.title}
            </h3>
            <div className="flex flex-col gap-3">
              {footerText.contact.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="hover:text-primary flex items-center gap-3 text-white  max-sm:justify-center"
                >
                  <link.icon />
                  {link.text}
                </Link>
              ))}
            </div>
            <div className="flex justify-center gap-6 pt-4">
              {footerText.contact.social.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  className="hover:text-primary text-3xl text-white"
                >
                  <social.icon />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto w-full max-w-7xl px-4">
        <div className="h-px w-full bg-gray-700" />
      </div>
      <p className="p-7 text-center text-white max-sm:text-xs">
        {footerText.copyright}
      </p>
    </footer>
  );
};

export default Footer;
