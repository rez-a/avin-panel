import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BtnIcon from '../buttons/BtnIcon';

const Sidebar = () => {
  return (
    <aside>
      <nav className="sidebar fixed top-0 bottom-0 z-50 h-full min-h-screen w-64 shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300">
        <div className="h-full bg-white dark:bg-dark px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/dashboard"
              className="main-logo flex items-center"
            >
              <div className="relative h-10 w-10">
                <Image
                  className="object-cover rounded-full"
                  src="/images/logo.jpg"
                  alt="image"
                  layout="fill"
                />
              </div>
              <span className="hidden align-middle text-2xl text-green-500 font-semibold transition-all duration-300 ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light md:inline">
                AVIN
              </span>
            </Link>
            <BtnIcon>
              <svg
                className="m-auto h-5 w-5 rotate-180"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 19L7 12L13 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  opacity="0.5"
                  d="M16.9998 19L10.9998 12L16.9998 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </BtnIcon>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
