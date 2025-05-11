import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import EventCard from '../components/events/EventCard';
import { mockEvents } from '../data/mockEvents';

type Category = '' | 'conference' | 'worship' | 'retreat' | 'mission';

const Events: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<Category>('');

  const filteredEvents = activeCategory 
    ? mockEvents.filter(event => event.categoryKey === activeCategory)
    : mockEvents;

  return (
    <div>
      {/* Header Section */}
      <section className="bg-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            {t('events.title')}
          </motion.h1>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            {t('events.subtitle')}
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white py-6 shadow-md sticky top-16 z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveCategory('')}
              className={`px-4 py-2 rounded-full text-sm ${
                activeCategory === '' 
                  ? 'bg-purple-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t('events.filter.all')}
            </button>
            <button
              onClick={() => setActiveCategory('conference')}
              className={`px-4 py-2 rounded-full text-sm ${
                activeCategory === 'conference' 
                  ? 'bg-purple-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t('events.filter.conferences')}
            </button>
            <button
              onClick={() => setActiveCategory('worship')}
              className={`px-4 py-2 rounded-full text-sm ${
                activeCategory === 'worship' 
                  ? 'bg-purple-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t('events.filter.worship')}
            </button>
            <button
              onClick={() => setActiveCategory('retreat')}
              className={`px-4 py-2 rounded-full text-sm ${
                activeCategory === 'retreat' 
                  ? 'bg-purple-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t('events.filter.retreats')}
            </button>
            <button
              onClick={() => setActiveCategory('mission')}
              className={`px-4 py-2 rounded-full text-sm ${
                activeCategory === 'mission' 
                  ? 'bg-purple-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t('events.filter.missions')}
            </button>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <EventCard event={event} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">{t('events.noEvents')}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;