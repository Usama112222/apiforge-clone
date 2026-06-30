import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleDarkMode } = useDarkMode();

  const navLinks = [
    { path: '/services', label: 'Products' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all dark:border-gray-800 dark:bg-gray-950/80 shadow-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:h-20 lg:px-8">
        {/* Logo - Changes based on dark mode state */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={isDark ? "/logo-light.svg" : "/logo.svg"} 
            alt="APIForge" 
            className="h-8 w-auto lg:h-10"
            onError={(e) => e.target.style.display = 'none'}
          />
        </Link>

        {/* Desktop Navigation - No active link styling */}
        <nav className="hidden lg:flex lg:items-center lg:gap-8 cursor-default" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="text-sm font-medium transition-colors cursor-default text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            type="button"
            onClick={toggleDarkMode}
            className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Get API Key Button */}
          <Link
            to="/pricing"
            className="hidden rounded-lg bg-orange-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-700 sm:inline-flex cursor-pointer"
          >
            Get API Key
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 lg:hidden dark:text-gray-400 dark:hover:bg-gray-800 cursor-pointer"
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <nav className="border-t border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-gray-950">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-base font-medium cursor-default text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
            >
              {link.label}
            </NavLink>
          ))}
          <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-800">
            <Link
              to="/pricing"
              onClick={() => setIsOpen(false)}
              className="block w-full rounded-lg bg-orange-600 px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-orange-700 cursor-pointer"
            >
              Get API Key
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;