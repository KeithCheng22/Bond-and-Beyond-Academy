"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { navbarHeaders } from "@/data";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

const Header = () => {
  const [isActive, setIsActive] = useState("#hero");
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowScroll, setWindowScroll] = useState(0);

  const mobileRef = useRef("");

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
    };

    const getMousePosition = (e) => {
      if (!mobileRef.current?.offsetWidth) return;
      if (e.offsetX >= mobileRef.current.offsetWidth) {
        setShowMenu(false);
      }
    };

    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    window.addEventListener("resize", handleResize);
    window.addEventListener("click", getMousePosition);

    // Close menu on resize
    if (windowWidth >= 990) {
      setShowMenu(false);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", getMousePosition);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [windowWidth, showMenu, windowScroll]);

  const handleClick = (href) => {
    setIsActive(href);
    setShowMenu(false);
  };

  // To allow animation of the navbar
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <nav
      ref={ref}
      className="navbar flex items-center px-6 py-6 justify-between sticky top-0 bg-gray-50 z-20"
    >
      <Link href="/#hero">
        <Image
          src={logo}
          alt="Bond and Beyond Academy Logo"
          className="cursor-pointer max-md:w-[50px]"
          width={80}
        />
      </Link>
      <ul className="flex gap-8 text-[#1F3E65] max-md:hidden text-xl items-end">
        {navbarHeaders.map((header, index) => (
          <Link
            href={header.href}
            key={index}
            className={`${
              isActive === header.href
                ? "lg:text-3xl text-xl"
                : "lg:text-2xl text-lg"
            } navbar-link`}
            onClick={() => handleClick(`${header.href}`)}
          >
            {header.header}
          </Link>
        ))}
      </ul>

      <div
        className="md:hidden cursor-pointer hamburger"
        onClick={handleShowMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="25"
          viewBox="0 0 50 50"
        >
          <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
        </svg>
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
            <Link
              href={header.href}
              key={index}
              className={`${
                isActive === header.href
                  ? "isActive text-[#1f3e65] font-semibold"
                  : ""
              } navbar-link`}
              onClick={() => handleClick(`${header.href}`)}
            >
              {header.header}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
