// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-red-600 to-red-500 text-white p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <h1 className="text-3xl font-extrabold tracking-wide">Calorie Tracker</h1>
        
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8">
            <li>
              <a
                href="#home"
                className="text-lg font-semibold hover:text-red-200 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-lg font-semibold hover:text-red-200 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg font-semibold hover:text-red-200 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Hamburger (optional) */}
        <div className="lg:hidden flex items-center">
          <button className="text-xl focus:outline-none">
            <i className="fas fa-bars"></i> {/* If using FontAwesome for icons */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
