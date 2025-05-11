import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Cross } from 'lucide-react';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Cross className="w-8 h-8 text-purple-700" />
            <span className="ml-2 font-serif text-xl font-bold text-purple-900">ChristEvents</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-purple-700 font-medium' : 'text-gray-700 hover:text-purple-700'
              } transition-colors`}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/events"
              className={`${
                isActive('/events') ? 'text-purple-700 font-medium' : 'text-gray-700 hover:text-purple-700'
              } transition-colors`}
            >
              {t('nav.events')}
            </Link>
            <Link
              to="/about"
              className={`${
                isActive('/about') ? 'text-purple-700 font-medium' : 'text-gray-700 hover:text-purple-700'
              } transition-colors`}
            >
              {t('nav.about')}
            </Link>
            <button
              onClick={toggleLanguage}
              className="flex items-center text-gray-700 hover:text-purple-700 transition-colors"
            >
              <Globe className="w-4 h-4 mr-1" />
              {t('nav.language')}
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-purple-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                to="/"
                className={`${
                  isActive('/') ? 'text-purple-700 font-medium' : 'text-gray-700'
                } py-2`}
                onClick={closeMenu}
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/events"
                className={`${
                  isActive('/events') ? 'text-purple-700 font-medium' : 'text-gray-700'
                } py-2`}
                onClick={closeMenu}
              >
                {t('nav.events')}
              </Link>
              <Link
                to="/about"
                className={`${
                  isActive('/about') ? 'text-purple-700 font-medium' : 'text-gray-700'
                } py-2`}
                onClick={closeMenu}
              >
                {t('nav.about')}
              </Link>
              <button
                onClick={() => {
                  toggleLanguage();
                  closeMenu();
                }}
                className="flex items-center text-gray-700 py-2"
              >
                <Globe className="w-4 h-4 mr-1" />
                {t('nav.language')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;