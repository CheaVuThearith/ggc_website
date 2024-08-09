// components/Footer.tsx
import GGC from "@/public/assets/icons/Ggc";
import Image from "next/image";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto mt-16 px-4">
        <div className="flex items-center justify-between">
          {/* ggc */}
          <div className="flex shrink-0 items-center">
            <GGC className="aspect-auto h-12" fill="#000" />
          </div>
          <span className="text-gray-500">© 2024 GGC</span>
          {/* socials */}
          <div className="flex shrink-0 items-center space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61561837272386"
              target="_blank"
              className="text-gray-500 hover:text-green-700"
            >
              <FaFacebookSquare className="size-10 fill-black hover:fill-black" />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-gray-500 hover:text-gray-700"
            >
              <RiInstagramFill className="size-[2.8em] fill-black hover:fill-black" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
