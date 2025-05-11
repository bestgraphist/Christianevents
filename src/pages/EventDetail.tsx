import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, MapPin, User, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import { mockEvents } from '../data/mockEvents';

const EventDetail: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const event = mockEvents.find(e => e.id === id);

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Event not found</h2>
        <p className="text-gray-600 mb-8">The event you are looking for does not exist or has been removed.</p>
        <Link to="/events">
          <Button variant="primary">Return to Events</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96">
        <div className="absolute inset-0">
          <img 
            src={event.imageUrl} 
            alt={event.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-purple-900/30"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <div className="inline-block bg-purple-700 text-white text-sm font-bold px-3 py-1 rounded mb-4">
            {event.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{event.title}</h1>
          <p className="text-xl text-white/90 max-w-2xl">{event.description}</p>
        </div>
      </div>

      {/* Event Details */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-serif font-bold text-purple-900 mb-6">{t('event.about')}</h2>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  {event.fullDescription}
                </p>
                <p className="mb-4">
                  Join us for this transformative event that will strengthen your faith and connect you with other believers. 
                  Through powerful worship, inspirational speakers, and community fellowship, you'll experience spiritual growth 
                  and renewal.
                </p>
                <p>
                  Don't miss this opportunity to be part of something special. Register today and secure your place at this 
                  life-changing event.
                </p>
              </div>
            </motion.div>

            {/* Speakers Section */}
            {event.speakers && event.speakers.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-12"
              >
                <h2 className="text-2xl font-serif font-bold text-purple-900 mb-6">{t('event.speakers')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-md">
                      <img 
                        src={speaker.image} 
                        alt={speaker.name} 
                        className="w-16 h-16 rounded-full object-cover mr-4" 
                      />
                      <div>
                        <h3 className="font-bold text-lg text-purple-900">{speaker.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{speaker.role}</p>
                        <p className="text-gray-700 text-sm">{speaker.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Schedule Section */}
            {event.schedule && event.schedule.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-12"
              >
                <h2 className="text-2xl font-serif font-bold text-purple-900 mb-6">{t('event.schedule')}</h2>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="divide-y divide-gray-200">
                    {event.schedule.map((item, index) => (
                      <div key={index} className="p-4 hover:bg-purple-50 transition-colors">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                          <div className="mb-2 md:mb-0">
                            <h3 className="font-bold text-purple-900">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.speaker}</p>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <Clock className="w-4 h-4 mr-1" />
                            <span className="text-sm">{item.time}</span>
                          </div>
                        </div>
                        {item.description && (
                          <p className="mt-2 text-sm text-gray-700">{item.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-28">
              <h3 className="text-xl font-serif font-semibold text-purple-900 mb-6">Event Details</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-purple-700 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium text-gray-700">{t('event.date')}</p>
                    <p className="text-gray-600">{event.date}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-purple-700 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium text-gray-700">{t('event.time')}</p>
                    <p className="text-gray-600">{event.time}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-purple-700 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium text-gray-700">{t('event.location')}</p>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DollarSign className="w-5 h-5 text-purple-700 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium text-gray-700">{t('event.price')}</p>
                    <p className="text-gray-600">{event.price}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <User className="w-5 h-5 text-purple-700 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium text-gray-700">{t('event.organizer')}</p>
                    <p className="text-gray-600">{event.organizer}</p>
                  </div>
                </div>
              </div>
              
              <Link to={`/register/${event.id}`}>
                <Button variant="primary" fullWidth>
                  {t('event.register')}
                </Button>
              </Link>
              
              {/* Accommodation Info */}
              {event.accommodations && (
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-purple-900 mb-3">{t('event.accommodation')}</h3>
                  <div className="text-sm text-gray-700">
                    <p className="mb-2">{event.accommodations.description}</p>
                    <ul className="list-disc pl-5 space-y-1">
                      {event.accommodations.options.map((option, index) => (
                        <li key={index}>{option}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;