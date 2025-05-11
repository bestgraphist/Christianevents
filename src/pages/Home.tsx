import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import EventCard from '../components/events/EventCard';
import { mockEvents } from '../data/mockEvents';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const featuredEvents = mockEvents.slice(0, 3); // Get first 3 events

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-hero-pattern bg-cover bg-center py-32">
        <div className="absolute inset-0 bg-purple-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t('home.hero.title')}
            </h1>
            <p className="text-lg text-white/90 mb-8">
              {t('home.hero.subtitle')}
            </p>
            <Link to="/events">
              <Button size="lg" variant="primary" className="bg-white text-purple-700 hover:bg-gray-100">
                {t('home.hero.cta')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif text-3xl font-bold text-purple-900">
              {t('home.featured.title')}
            </h2>
            <Link to="/events" className="text-purple-700 hover:text-purple-800 flex items-center">
              {t('home.featured.viewAll')}
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl font-bold text-purple-900 mb-4">
                {t('home.about.title')}
              </h2>
              <p className="text-gray-700 mb-6">
                {t('home.about.description')}
              </p>
              <Link to="/about">
                <Button variant="secondary">
                  {t('home.about.moreBtn')}
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.pexels.com/photos/3663686/pexels-photo-3663686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Christian gathering" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-purple-900 mb-4">
              {t('home.newsletter.title')}
            </h2>
            <p className="text-gray-700 mb-8">
              {t('home.newsletter.description')}
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder={t('home.newsletter.placeholder')}
                className="flex-grow input-field"
                required
              />
              <Button type="submit" variant="primary" className="sm:flex-shrink-0">
                <Send className="w-4 h-4 mr-2" />
                {t('home.newsletter.button')}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;