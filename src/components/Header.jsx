"use client";

import { useState, useEffect, useRef } from "react";
import { navbarHeaders } from "@/data";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

const Header = () => {
  const [isActive, setIsActive] = useState("#hero");
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const mobileRef = useRef("");

  useEffect(() => {
    const getMousePosition = (e) => {
      if (!mobileRef.current?.offsetWidth) return;
      if (e.offsetX >= mobileRef.current.offsetWidth) {
        setShowMenu(false);
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("click", getMousePosition);
    window.addEventListener("resize", handleResize);

    // Close menu on resize
    if (windowWidth >= 768) {
      setShowMenu(false);
    }

    return () => {
      window.removeEventListener("click", getMousePosition);
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth, showMenu]);

  const handleClick = (href) => {
    setIsActive(href);
    setShowMenu(false);
  };

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <nav className="navbar flex items-center px-6 py-6 justify-between sticky top-0 bg-gray-50 z-20">
      <Link href="/#hero">
        <Image
          src={logo}
          alt="Bond and Beyond Academy Logo"
          className="cursor-pointer max-md:w-[50px]"
          width={80}
          priority
        />
      </Link>
      <ul className="flex gap-8 text-[#1F3E65] max-md:hidden text-xl items-end">
        {navbarHeaders.map((header, index) => (
          <li
            key={index}
            aria-label={header.header}
            className={`${
              isActive === header.href ? "isActive" : ""
            } navbar-link lg:text-2xl text-lg`}
          >
            <Link
              href={header.href}
              onClick={() => handleClick(`${header.href}`)}
            >
              {header.header}
            </Link>
          </li>
        ))}
      </ul>

      <div
        id="menu-btn"
        className={`md:hidden menu-btn flex flex-col items-center justify-center cursor-pointer w-8 h-8 ${
          showMenu ? "active" : ""
        }`}
        onClick={handleShowMenu}
      >
        <div className="bar1 w-6 h-1 bg-[#1F3E65] mb-1"></div>
        <div className="bar2 w-6 h-1 bg-[#1F3E65] mb-1"></div>
        <div className="bar3 w-6 h-1 bg-[#1F3E65]"></div>
      </div>

      {/* Mobile */}
      <div
        ref={mobileRef}
        className={`fixed inset-0 border-r-2 shadow-2xl bg-white flex flex-col items-center justify-center transition-all duration-500 w-[80%] ${
          showMenu
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-[-20em]"
        } min-[991px]:hidden border-r-4 border-[#1F3E65]`}
      >
        <ul className="flex flex-col items-center space-y-6 text-lg text-[#4f5b69]">
          {navbarHeaders.map((header, index) => (
            <li key={index} aria-label={header.header}>
              <Link
                href={header.href}
                className={`${
                  isActive === header.href
                    ? "isActive text-[#1f3e65] font-semibold"
                    : ""
                } navbar-link`}
                onClick={() => handleClick(`${header.href}`)}
              >
                {header.header}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
