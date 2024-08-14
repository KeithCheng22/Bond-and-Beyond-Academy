"use client";
import { useState } from "react";
import Image from "next/image";
import hero from "../../public/hero.png";
import heroBg from "../../public/heroBg.jpg";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Hero = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <main className="bg-[#777777]/60 content-padding relative">
      <Image
        src={heroBg}
        alt="Hero background"
        className="w-full hero-bg object-cover"
        priority
        layout="fill"
      />
      <div id="hero" className="w-[80%] h-[1px] absolute top-[-9999px]"></div>
      <div className="glass-card1">
        <Image
          src={hero}
          className="md:px-5 py-10"
          alt="Bond and Beyond Academy Logo"
          priority
        />
        <div className="text-center md:py-10 px-1">
          <h1 className="text-xl text-pretty uppercase font-bold mb-3 md:text-2xl tracking-wide ">
            The <u>Premier</u> Choice for GCE O-Level, IB and IP Chemistry
            Tuition
          </h1>

          <p className="mb-5 tracking-wider text-large font-semibold uppercase md:text-xl">
            Unlock Your Potential
          </p>

          <div className="relative w-fit mx-auto overflow-hidden">
            <button
              id="cta-button"
              className="relative border-2 border-white px-8 py-2 text-sm font-bold uppercase bg-transparent text-white peer z-10 hover:text-gray-600 duration-300"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              aria-label="Sign Up Today"
            >
              <a href="#contact">Sign Up Today</a>
            </button>
            <div
              id="cta-bg"
              className={`bg-white absolute inset-0 transition-transform duration-300 ${
                isHover ? "hover-animation" : "leave-animation"
              }`}
            ></div>
          </div>

          <div className="arrow-wrapper">
            <div className="arrow">
              <MdOutlineKeyboardDoubleArrowDown />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
