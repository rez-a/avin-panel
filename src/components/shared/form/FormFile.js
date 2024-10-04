import React from "react";

const FormFile = () => {
  return (
    <label className="absolute bottom-2 left-0">
      <input type="file" className="hidden" />
      <div className="flex flex-none rounded-full bg-neutral-200/40 p-2 hover:bg-neutral-200/70 transition-all duration-200 hover:text-primary  dark:bg-dark/40 dark:text-[#d0d2d6] cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z"></path>
        </svg>
      </div>
    </label>
  );
};

export default FormFile;
