import React from "react";
import { useState } from "react";
import { MdLanguage } from "react-icons/md";
import { HiXMark } from "react-icons/hi2";
import { IoMenu } from "react-icons/io5";
import {Link} from 'react-scroll'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Features", path: "features" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];
  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0">
        <div className="text-lg mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <Link href="/" className="space-x-3">
              <span className="text-3xl font-semibold text-primary">XYZ</span>
            </Link>

            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link activeClass="active" spy={true} smooth={true} offset={-100} key={link} to={path} className="block hover:text-secondary cursor-pointer">
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          <div className="space-x-12 hidden md:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-secondary"
            >
              <MdLanguage className="mr-2" />
              Language
            </a>
            <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded text-white hover:bg-primary">
              Sign up
            </button>
          </div>

          <div className="md:hidden ">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <HiXMark className="w-6 h-6 text-primary" />
              ) : (
                <IoMenu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary ${isMenuOpen? "block fixed top-0 right-0 left-0":"hidden"}`}>
        {
        navItems.map(({ link, path }) => ( 
          <Link activeClass="active" spy={true} smooth={true} offset={-80} key={link} to={path} className="block text-white hover:text-gray-300 hover:cursor-pointer" onClick={toggleMenu}>
          {link}
        </Link>
        ))
        }
      </div>
    </>
  );
};

export default Navbar;
