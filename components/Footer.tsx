import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaBehance } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" text-white py-10 px-5 md:px-20 container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left text-white">
        {/* Brand Section */}
        <div>
          <h1 className="text-4xl font-bold">
            <Link href="/">Portfolio</Link>
          </h1>
          <p className="mt-4 text-sm leading-relaxed">
            I'm Alvina — a passionate and detail-oriented Graphic Designer and
            Web Developer with a solid foundation in both creative design and
            technical development.
          </p>
          <div className="flex justify-center md:justify-start mt-6 space-x-4">
            <Link
              href="https://github.com/alvina-abdullah"
              target="blank"
              aria-label="GitHub"
              className="text-xl hover:text-purple-600"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/alvina-abdullah"
              target="blank"
              aria-label="LinkedIn"
              className="text-xl hover:text-purple-600"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61555959117909"
              target="blank"
              aria-label="Facebook"
              className="text-xl hover:text-purple-600"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://www.behance.net/alvinagraphic"
              target="blank"
              aria-label="Facebook"
              className="text-xl hover:text-purple-600"
            >
              <FaBehance />
            </Link>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-lg font-semibold text-white cursor-pointer">
            Links
          </h2>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Portfolio</li>
            <li className="cursor-pointer">Education</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Links Section */}
        <div className="space-x-1">
          <h2 className="text-lg font-semibold text-white">Services</h2>
          <ul className="mt-6 space-y-3 text-sm ">
            <li className="cursor-pointer">Clean Code</li>
            <li className="cursor-pointer">Fast Typing</li>
            <li className="cursor-pointer">Responsivity</li>
            <li className="cursor-pointer">Web Design</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-x-1 max-sm:flex max-sm:justify-center max-sm:flex-col max-sm:items-center">
          <h2 className="text-lg font-semibold text-white">Contact</h2>
          <ul className="mt-6 space-y-3 text-sm ">
            <li className="flex items-center space-x-3">
              <HiOutlineMail className="text-white" size={20} />
              <Link
                href="mailto:alvinaabdullah16@gmail.com"
                className="hover:underline "
              >
                alvinaabdullah16@gmail.com
              </Link>
            </li>
            <li className="flex items-center space-x-3">
              <GoLocation className="text-white" size={20} />
              <span>Karachi, Pakistan</span>
            </li>
            <li className="flex items-center space-x-3">
              <FiPhone className="text-white" size={20} />
              <span>03 23547698</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="mt-10 text-center text-sm border-t border-gray-800 pt-4">
        Build With ♡ by Alvina Abdullah
      </div>
    </footer>
  );
};

export default Footer;
