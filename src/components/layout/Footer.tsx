import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Twitter, Youtube, Cross, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Cross className="w-8 h-8 text-white" />
              <span className="ml-2 font-serif text-xl font-bold">ChristEvents</span>
            </div>
            <p className="text-purple-200 mb-4">
              Organizing inspiring Christian events to strengthen faith, fellowship, and spiritual growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-purple-200 hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-purple-200 hover:text-white transition-colors">
                  {t('nav.events')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-purple-200 hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/about#contact" className="text-purple-200 hover:text-white transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">{t('footer.contact')}</h3>
            <div className="space-y-2">
              <p className="flex items-center text-purple-200">
                <Mail className="w-4 h-4 mr-2" />
                <span>contact@christevents.com</span>
              </p>
              <p className="flex items-center text-purple-200">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">{t('footer.follow')}</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="pt-8 border-t border-purple-800 text-center">
          <p className="text-purple-300 text-sm">
            &copy; {currentYear} ChristEvents. {t('footer.rights')}
          </p>
          <div className="flex justify-center mt-2 space-x-4">
            <Link to="/terms" className="text-purple-300 hover:text-white text-sm transition-colors">
              {t('footer.terms')}
            </Link>
            <Link to="/privacy" className="text-purple-300 hover:text-white text-sm transition-colors">
              {t('footer.privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;