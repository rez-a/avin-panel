import Image from "next/image";
import Link from "next/link";
import React from "react";
import BtnIcon from "../buttons/BtnIcon";
import NavLinks from "./NavLinks";

const Sidebar = () => {
  return (
    <aside>
      <nav className="sidebar fixed top-0 bottom-0 z-50 h-full min-h-screen w-64 shadow-[5px_0_25px_0_rgba(94,92,154,0.3)] transition-all duration-300">
        <div className="h-full bg-white dark:bg-dark px-4 py-4">
          <div className="flex items-center justify-between border-b pb-4">
            <Link href="/dashboard" className="main-logo flex items-center">
              <div className="relative h-10 w-10">
                <Image
                  className="object-cover rounded-full"
                  src="/images/logo.jpg"
                  alt="image"
                  layout="fill"
                />
              </div>
              <p className="align-middle  text-green-500 font-semibold transition-all duration-300 ltr:ml-2 rtl:mr-2 dark:text-white-light md:inline">
                <span className="text-base block">AVIN</span>
                <span className="block text-xs">پخش لوازم آرایشی آوین</span>
              </p>
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
          <NavLinks />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
