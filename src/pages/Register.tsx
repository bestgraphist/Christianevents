import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import RegisterForm from '../components/forms/RegisterForm';
import { mockEvents } from '../data/mockEvents';

const Register: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const event = mockEvents.find(e => e.id === id);

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Event not found</h2>
        <p className="text-gray-600 mb-8">The event you are looking for does not exist or has been removed.</p>
        <Link to="/events">
          <button className="btn-primary">Return to Events</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Link to={`/events/${id}`} className="inline-flex items-center text-purple-700 hover:text-purple-800 mb-8">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Event
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-serif font-bold text-purple-900 mb-2">
              {t('register.title')} - {event.title}
            </h1>
            <p className="text-gray-600">
              {t('register.subtitle')}
            </p>
          </motion.div>
          
          <RegisterForm event={event} />
        </div>
      </div>
    </div>
  );
};

export default Register;