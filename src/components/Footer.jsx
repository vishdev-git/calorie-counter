// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-6 mt-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Logo or text */}
        <p className="text-lg font-semibold">Calorie Tracker &copy; 2024</p>
        
        {/* Centered Links */}
        <nav>
          <ul className="flex space-x-8">
            <li>
              <a
                href="#privacy"
                className="text-base hover:text-red-200 transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#terms"
                className="text-base hover:text-red-200 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-base hover:text-red-200 transition-colors duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Right side: Social Icons (Optional) */}
        <div className="flex space-x-6">
          <a href="#facebook" className="hover:text-red-200">
            <i className="fab fa-facebook-square text-2xl"></i> {/* Facebook Icon */}
          </a>
          <a href="#twitter" className="hover:text-red-200">
            <i className="fab fa-twitter-square text-2xl"></i> {/* Twitter Icon */}
          </a>
          <a href="#instagram" className="hover:text-red-200">
            <i className="fab fa-instagram text-2xl"></i> {/* Instagram Icon */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
