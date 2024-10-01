import React from 'react';

const BtnIcon = ({ children , className }) => {
  return (
    <button
      className={`flex flex-none rounded-full bg-neutral-200/40 p-2 hover:bg-neutral-200/70 hover:text-primary  dark:bg-dark/40 dark:text-[#d0d2d6] dark:hover:bg-dark/60 dark:hover:text-primary transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default BtnIcon;
