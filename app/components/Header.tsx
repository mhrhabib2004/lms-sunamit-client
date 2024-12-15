"use client";

import React, { FC, useState, useEffect } from "react";
import NavItems from "./NavItems";

// type Props = {};

const Header: FC = () => {
  // State to manage if the header is active (scrolled)
  const [active, setActive] = useState(false);

  // Effect hook to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Set active state based on scroll position
      if (window.scrollY > 85) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        active
          ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500"
          : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"
      }`}
    >
      <div className=" py-2 h-full">
        <div>
          <NavItems />
        </div>
      </div>
    </div>
  );
};

export default Header;
