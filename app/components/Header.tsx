"use client";

import React, { FC, useState } from "react";
import NavItems  from "../../utils/NavItems"

type Props = {
 
};

const Header: FC<Props> = () => {
  // const [active, setActive] = useState(false);


  // if (typeof window !== "undefined") {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 85) {
  //       setActive(true);
  //     } else {
  //       setActive(false);
  //     }
  //   });
  // }
  return (
    // <div className="w-full relative">
    //   <div
    //     className={`${
    //       active
    //         ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500"
    //         : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"
    //     }`}
    //   >
    //     <div className="m-auto py-2 h-full">
    //     <div>
    //       <NavItems />
    //     </div>
    //     </div>
    //   </div>
    // </div>
    <div> <NavItems /></div>
  );
};

export default Header; 