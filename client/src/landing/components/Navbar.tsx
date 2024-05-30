"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSun, FaMoon } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from 'next-themes';
import { Button } from "@/components/ui";
import { NavItemProps } from "@/types.d";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  
  // Add event listener to handle theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-black fixed top-0 left-0 w-full z-50">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between ">
            <div className="">
              <Link className="text-lg font-semibold font-[verdana] text-black dark:text-white" to="/">
                Click Matrics
              </Link>
            </div>
            <div className="hidden md:block mx-auto ml-10">
              <div className="flex space-x-4 items-center justify-center">
                <NavItem href="/">Home</NavItem>
                <NavItem href="/">About</NavItem>
                <NavItem href="/">Search</NavItem>
                <NavItem href="/feedback">Product</NavItem>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaSun
                className={`cursor-pointer ${theme === 'light' ? 'text-yellow-500' : 'text-gray-500'}`}
                onClick={() => setTheme('light')}
              />
              <FaMoon
                className={`cursor-pointer ${theme === 'dark' ? 'text-yellow-500' : 'text-gray-500'}`}
                onClick={() => setTheme('dark')}
              />
            </div>
            <div className="w-[200px] flex items-center justify-evenly">
              <Button variant="secondary" className="">Sign up</Button>
              <Button variant="secondary">Log In</Button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              aria-expanded="false"
            >
              {isOpen ? (
                <IoClose className="text-black dark:text-white" />
              ) : (
                <GiHamburgerMenu className="text-black dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="md:hidden flex flex-col items-center justify-center w-full bg-gray-200 dark:bg-black"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 mx-auto text-center">
              <MobileNavItem href="/">Home</MobileNavItem>
              <MobileNavItem href="/">Search</MobileNavItem>
              <MobileNavItem href="/">Products</MobileNavItem>
              <MobileNavItem href="/feedback">About</MobileNavItem>
            </div>
            <div className="flex flex-col mx-auto">
              <Button variant="default" className="mb-2">Sign up</Button>
              <Button variant="default">Log In</Button>
            </div>
            <div className="mt-4 flex justify-center space-x-2 mb-4">
              <FaSun
                className={`cursor-pointer ${theme === 'light' ? 'text-yellow-500' : 'text-gray-500'}`}
                onClick={() => setTheme('light')}
              />
              <FaMoon
                className={`cursor-pointer ${theme === 'dark' ? 'text-yellow-500' : 'text-gray-500'}`}
                onClick={() => setTheme('dark')}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  return (
    <Link to={href} className="px-3 py-2 rounded-md text-sm font-medium text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
      {children}
    </Link>
  );
};

const MobileNavItem: React.FC<NavItemProps> = ({ href, children }) => {
  return (
    <Link to={href} className="block px-3 py-2 rounded-md text-base font-medium text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
      {children}
    </Link>
  );
};

export default Navbar;
