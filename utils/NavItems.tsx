import Image from 'next/image';
import React, { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { HiOutlineUserCircle } from 'react-icons/hi';

// Navigation data (instead of static links)
const navData = [
  { name: "home", label: "Home", link: "/" },
  { name: "courses", label: "Courses", link: "/courses" },
  { name: "About", label: "About", link: "/about" },
  { name: "Policy", label: "Policy", link: "/policy" },
  { name: "FAQ", label: "FAQ", link: "/faq" }
];

function NavItems() {
  // State to toggle the menu and track active link
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // Track active link

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to set the active link
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    // Optionally, close the menu when a link is clicked (for mobile)
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        {/* Logo and Brand Name */}
        <a href="#" className="flex items-center">
          <Image
            src="https://www.svgrepo.com/show/499962/music.svg"
            alt="Landwind Logo"
            width={40}  // Set a fixed width
            height={40} // Set a fixed height
            className="mr-3"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">SUNAM IT</span>
        </a>

        {/* Menu and Button */}
        <div className="flex items-center lg:order-2">
          {/* <a
            href="https://themesberg.com/product/tailwind-css/landing-page"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
          >
            Download
          </a> */}
          <ThemeSwitcher />
          <HiOutlineUserCircle 
          size={25}
          className='cursor-pointer text-black dark:text-white'
          />

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            {!isMenuOpen ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu-2">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {/* Dynamically render navigation links from navData */}
            {navData.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className={`block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white ${
                    activeLink === item.name ? "bg-purple-700 text-white" : "text-gray-700"
                  }`}
                  onClick={() => handleLinkClick(item.name)}
                  aria-current={activeLink === item.name ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavItems;
