'use client';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import NavLink from './NavLink';

const NavLinksChunk = () => {
  const [collapse, setCollapse] = useState(false);
  const [height, setHeight] = useState(0);
  const refList = useRef(null);

  useEffect(() => {
    if (refList.current) setHeight(refList.current.scrollHeight);
  });
  console.log(height);
  return (
    <li>
      <button
        onClick={() => setCollapse(!collapse)}
        className={`nav-link hover:bg-neutral-200/40 transition-all duration-200 ${
          collapse ? 'bg-neutral-200/40' : 'bg-transparent'
        }`}
      >
        <span className="font-bold">حساب کاربری</span>
        <div className="rotate-180">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            className={`transition-all duration-200 ${
              collapse ? '-rotate-90' : 'rotate-0'
            }`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5L15 12L9 19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </button>
      <ul
        ref={refList}
        className={`text-xs w-full overflow-hidden transition-all duration-300 ease-in-out`}
        style={{
          maxHeight: `${collapse ? `${height}` : '0'}px`,
        }}
      >
        <li className="w-full">
          <NavLink title="اطلاعات کاربری" href="/dashboard/info" />
        </li>
        <li className="w-full">
          <NavLink title="درخواست ها" href="/dashboard/requests" />
        </li>
        <li className="w-full">
          <NavLink
            title="سطوح دسترسی"
            href="/dashboard/accessibility"
          />
        </li>
        <li className="w-full">
          <NavLink title="تنظیمات سیستم" href="/dashboard/setting" />
        </li>
      </ul>
    </li>
  );
};

export default NavLinksChunk;
