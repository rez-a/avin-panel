'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ title, href }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Link
      href={href}
      className={`relative block  w-full hover:bg-neutral-50 hover:text-primary hover:before:bg-primary pr-8 before:absolute before:w-2 before:h-0.5 before:right-5 before:top-1/2 py-3 transition-all duration-300 before:transition-all before:duration-300 ${
        pathname === href
          ? 'text-primary before:bg-primary'
          : ' before:bg-neutral-100 text-black'
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
