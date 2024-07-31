// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-4">
      <div className="container mx-auto px-4 mt-16">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/assets/icons/Logo.png" alt="Green Growth Cycle Logo" className="h-20" />
            <span className="text-gray-500">© 2024 Green Growth Cycle</span>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61561837272386" target='_blank' className="text-gray-500 hover:text-green-700">
              <img src="/assets/icons/Facebook.png" alt="Facebook" className="h-10" />
            </a>
            <a href="#" target='_blank' className="text-gray-500 hover:text-gray-700">
              <img src="/assets/icons/Instagram.png" alt="Instagram" className="h-10" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
