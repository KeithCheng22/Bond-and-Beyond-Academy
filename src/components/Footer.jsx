import Image from "next/image";
import bbacad from "../../public/bbacad.png";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

import Link from "next/link";
import { navbarHeaders } from "@/data";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-white py-10 px-4">
      <div className="md:flex justify-around items-center">
        <div className="text-center text-gray-800">
          <Image
            src={bbacad}
            width={100}
            className="rounded-full mx-auto mb-1"
            alt="Bond and Beyond Academy Logo"
          />
          <h3>Bond and Beyond Academy</h3>
          <p>UEN: 53489720K</p>
          <div className="flex gap-2 justify-center items-center">
            <div className="w-[10px] h-[10px] bg-green-600 rounded-full"></div>
            <p className="text-sm">Operating Hours: 24 hours</p>
          </div>
        </div>
        <div>
          <p className="max-md:hidden text-center text-gray-800">
            Check out our socials
          </p>
          <div className="w-fit mx-auto flex gap-2 justify-center items-center mt-2">
            <Link
              href="https://www.facebook.com/profile.php?id=61561596419202&mibextid=LQQJ4d"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook
                size={30}
                className="hover:text-blue-900 duration-150"
              />
            </Link>
            <Link
              href="https://www.instagram.com/bondbeyond_academy/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram
                size={30}
                className="hover:text-red-900 duration-150"
              />
            </Link>
            <Link
              href="https://www.tiktok.com/@bond.and.beyondsg?_t=8ooMgq4ECji&_r=1"
              target="_blank"
            >
              <FaTiktok
                size={28}
                className="hover:text-purple-900 duration-150"
                aria-label="Tiktok"
              />
            </Link>
          </div>
          <ul className="flex gap-6 mt-8 text-gray-800 items-end text-sm flex-wrap justify-center md:text-lg">
            {navbarHeaders.map((header, index) => (
              <li key={index}>
                <Link href={header.href} className="hover:text-[#1F3E65]">
                  {header.header}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-fit mx-auto mt-10 text-center">
        Copyright &copy; {date} Bond and Beyond Academy
      </div>
    </footer>
  );
};

export default Footer;
