import Image from "next/image";
import Link from "next/link";
import React from "react";
import BtnIcon from "../buttons/BtnIcon";

const Header = () => {
  return (
    <header className="shadow-md p-2 px-6 flex items-center justify-between bg-white">
      <div className="flex items-center">
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
        <BtnIcon className="ltr:ml-6 rtl:mr-6">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 7L4 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
            <path
              opacity="0.5"
              d="M20 12L4 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
            <path
              d="M20 17L4 17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
          </svg>
        </BtnIcon>
        <BtnIcon className="ltr:ml-6 rtl:mr-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 9C3 6.17157 3 4.75736 3.87868 3.87868C4.75736 3 6.17157 3 9 3H15C17.8284 3 19.2426 3 20.1213 3.87868C21 4.75736 21 6.17157 21 9V14C21 15.8856 21 16.8284 20.4142 17.4142C19.8284 18 18.8856 18 17 18H7C5.11438 18 4.17157 18 3.58579 17.4142C3 16.8284 3 15.8856 3 14V9Z"
              stroke="currentColor"
              strokeWidth="1.5"
            ></path>
            <path
              opacity="0.5"
              d="M22 21H2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
            <path
              opacity="0.5"
              d="M15 15H9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
          </svg>
        </BtnIcon>
        <BtnIcon className="ltr:ml-6 rtl:mr-2">
          <div className="h-5 w-5 relative">
            <Image
              alt="image"
              className=" rounded-full object-cover"
              src="/images/EN.svg"
              layout="fill"
            />
          </div>
        </BtnIcon>
      </div>
      <div className="flex items-center gap-2">
        <BtnIcon className="relative">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z"
              stroke="currentColor"
              strokeWidth="1.5"
            ></path>
            <path
              d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
            <path
              d="M12 6V10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
          </svg>

          <span className="absolute top-0 flex h-3 w-3 ltr:right-0 rtl:left-0">
            <span className="absolute -top-[3px] inline-flex h-full w-full animate-ping rounded-full bg-success/50 opacity-75 ltr:-left-[3px] rtl:-right-[3px]"></span>
            <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-success"></span>
          </span>
        </BtnIcon>
        <BtnIcon>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
            >
              <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
            </svg>
          </span>
        </BtnIcon>
      </div>
    </header>
  );
};

export default Header;
