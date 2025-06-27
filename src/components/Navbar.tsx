import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navigationItems, type NavItem } from "../data/sliderData";

interface NavbarProps {
  logoSrc?: string;
  siteName?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  logoSrc = "/favicon.ico",
  siteName = "Cerita Ketindan",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const scrollToHashElement = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 500);
      }
    };
    scrollToHashElement();
  }, []);

  const handleNavClick = (href: string, isExternal?: boolean) => {
    if (!isExternal && href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const renderNavItem = (item: NavItem) => {
    if (item.isExternal) {
      return (
        <Link
          key={item.id}
          to={item.href}
          className="text-amber-800 hover:text-amber-900 font-medium font-serif transition-colors duration-200 relative group"
          onClick={() => handleNavClick(item.href, item.isExternal)}
        >
          {item.label}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-900 transition-all duration-200 group-hover:w-full"></span>
        </Link>
      );
    }

    return (
      <button
        key={item.id}
        onClick={() => handleNavClick(item.href, item.isExternal)}
        className="text-amber-800 hover:text-amber-900 font-medium font-serif transition-colors duration-200 relative group"
      >
        {item.label}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-900 transition-all duration-200 group-hover:w-full"></span>
      </button>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-stone-100/95 backdrop-blur-md shadow-lg"
          : "bg-stone-100/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link
            to="/home"
            className="flex items-center space-x-3 group"
            onClick={() => handleNavClick("#hero")}
          >
            <img
              src={logoSrc}
              alt={`Logo ${siteName}`}
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <span className="text-xl sm:text-2xl font-bold text-amber-900 font-serif">
              {siteName}
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map(renderNavItem)}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-amber-800 hover:text-amber-900 hover:bg-amber-50 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 pb-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-3 pt-4 border-t border-amber-200">
            {navigationItems.map((item) => (
              <div key={item.id}>
                {item.isExternal ? (
                  <Link
                    to={item.href}
                    className="block px-3 py-2 text-amber-800 hover:text-amber-900 hover:bg-amber-50 rounded-md font-medium font-serif transition-colors duration-200"
                    onClick={() => handleNavClick(item.href, item.isExternal)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.href, item.isExternal)}
                    className="block w-full text-left px-3 py-2 text-amber-800 hover:text-amber-900 hover:bg-amber-50 rounded-md font-medium font-serif transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
