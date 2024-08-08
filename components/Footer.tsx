// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto mt-16 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center shrink-0">
            <img
              src="/assets/icons/Logo.png"
              alt="Green Growth Cycle Logo"
              className="h-12"
            />
          </div>
          <span className="text-gray-500">© 2024 GGC</span>
          {/* socials */}
          <div className="flex space-x-4 shrink-0">
            <a
              href="https://www.facebook.com/profile.php?id=61561837272386"
              target="_blank"
              className="text-gray-500 hover:text-green-700"
            >
              <img
                src="/assets/icons/Facebook.png"
                alt="Facebook"
                className="h-10"
              />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-gray-500 hover:text-gray-700"
            >
              <img
                src="/assets/icons/Instagram.png"
                alt="Instagram"
                className="h-10"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
