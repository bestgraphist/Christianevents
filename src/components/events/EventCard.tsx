import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, MapPin, Clock } from 'lucide-react';
import Button from '../common/Button';
import { motion } from 'framer-motion';
import { Event } from '../../types/event';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const { t } = useTranslation();

  return (
    <motion.div 
      className="card overflow-hidden flex flex-col h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img 
          src={event.imageUrl} 
          alt={event.title} 
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-3 right-3 bg-purple-700 text-white text-xs font-bold px-2 py-1 rounded">
          {event.category}
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="font-serif text-xl mb-2 line-clamp-2">{event.title}</h3>
        
        <div className="mb-4 space-y-2 text-gray-600">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-purple-600" />
            <span className="text-sm">{event.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-purple-600" />
            <span className="text-sm">{event.time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-purple-600" />
            <span className="text-sm">{event.location}</span>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4 line-clamp-3">{event.description}</p>
        
        <div className="mt-auto flex flex-col sm:flex-row gap-2">
          <Link to={`/events/${event.id}`} className="flex-1">
            <Button variant="secondary" fullWidth>
              {t('events.learnMore')}
            </Button>
          </Link>
          <Link to={`/register/${event.id}`} className="flex-1">
            <Button variant="primary" fullWidth>
              {t('events.registerButton')}
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;