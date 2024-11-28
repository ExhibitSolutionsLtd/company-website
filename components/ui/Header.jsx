"use client";

import Image from "next/image";
import React, { useState } from "react";

const Header = ({
  about = "#about",
  contact = "#contact",
  home = "/",
  services = "#services",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white shadow-md">
      {/* Logo */}
      <a href="/" className="">
        <Image
          src="/full-logo.png"
          width={200}
          height={50}
          alt="Exhibit IT Solutions logo"
        />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-12">
        <a
          href={home}
          className="text-gray-700 font-semibold text-xl hover:text-primary"
        >
          Home
        </a>
        <a href={about} className="font-semibold text-xl text-primary">
          About
        </a>
        <a href={services} className="font-semibold text-xl text-primary">
          Services
        </a>
        <a href={contact} className="font-semibold text-xl text-primary">
          Contact
        </a>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-primary ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-24 left-0 w-full bg-white shadow-md z-10 md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <a href={home} className="font-semibold text-xl text-primary">
              Home
            </a>
            <a href={about} className="font-semibold text-xl text-primary">
              About
            </a>
            <a href={services} className="font-semibold text-xl text-primary">
              Services
            </a>
            <a href={contact} className="font-semibold text-xl text-primary">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
