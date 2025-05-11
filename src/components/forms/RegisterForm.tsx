import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import Button from '../common/Button';
import { motion } from 'framer-motion';
import { Event } from '../../types/event';

interface RegisterFormProps {
  event: Event;
}

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  church: string;
  needAccommodation: boolean;
  accommodationType: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  specialRequests: string;
  agreeTerms: boolean;
};

const RegisterForm: React.FC<RegisterFormProps> = ({ event }) => {
  const { t } = useTranslation();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);
  
  const needAccommodation = watch('needAccommodation');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', data);
      setSubmitResult({
        success: true,
        message: t('register.success')
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      {submitResult ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 mb-6 rounded-md ${submitResult.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
        >
          <p className="font-medium">{submitResult.message}</p>
          {submitResult.success && (
            <p className="mt-2 text-sm">You will receive a confirmation email shortly with all the details.</p>
          )}
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('register.personalInfo')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="label">{t('register.firstName')}</label>
                <input
                  id="firstName"
                  type="text"
                  className={`input-field ${errors.firstName ? 'ring-red-500' : ''}`}
                  {...register('firstName', { required: true })}
                />
                {errors.firstName && <p className="mt-1 text-sm text-red-600">This field is required</p>}
              </div>
              
              <div>
                <label htmlFor="lastName" className="label">{t('register.lastName')}</label>
                <input
                  id="lastName"
                  type="text"
                  className={`input-field ${errors.lastName ? 'ring-red-500' : ''}`}
                  {...register('lastName', { required: true })}
                />
                {errors.lastName && <p className="mt-1 text-sm text-red-600">This field is required</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="label">{t('register.email')}</label>
                <input
                  id="email"
                  type="email"
                  className={`input-field ${errors.email ? 'ring-red-500' : ''}`}
                  {...register('email', { 
                    required: true,
                    pattern: /^\S+@\S+\.\S+$/
                  })}
                />
                {errors.email?.type === 'required' && (
                  <p className="mt-1 text-sm text-red-600">This field is required</p>
                )}
                {errors.email?.type === 'pattern' && (
                  <p className="mt-1 text-sm text-red-600">Please enter a valid email address</p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="label">{t('register.phone')}</label>
                <input
                  id="phone"
                  type="tel"
                  className="input-field"
                  {...register('phone')}
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="church" className="label">{t('register.church')}</label>
                <input
                  id="church"
                  type="text"
                  className="input-field"
                  {...register('church')}
                />
              </div>
            </div>
          </div>
          
          {/* Accommodation */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('register.accommodationTitle')}</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="needAccommodation"
                    type="checkbox"
                    className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    {...register('needAccommodation')}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="needAccommodation" className="font-medium text-gray-700">
                    {t('register.needAccommodation')}
                  </label>
                </div>
              </div>
              
              {needAccommodation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 pt-2"
                >
                  <div>
                    <label htmlFor="accommodationType" className="label">{t('register.accommodationType')}</label>
                    <select
                      id="accommodationType"
                      className="input-field"
                      {...register('accommodationType')}
                    >
                      <option value="">{t('register.accommodation.none')}</option>
                      <option value="hotel">{t('register.accommodation.hotel')}</option>
                      <option value="hostel">{t('register.accommodation.hostel')}</option>
                      <option value="dorm">{t('register.accommodation.dorm')}</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="checkIn" className="label">{t('register.checkIn')}</label>
                      <input
                        id="checkIn"
                        type="date"
                        className="input-field"
                        {...register('checkIn')}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="checkOut" className="label">{t('register.checkOut')}</label>
                      <input
                        id="checkOut"
                        type="date"
                        className="input-field"
                        {...register('checkOut')}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="roomType" className="label">{t('register.roomType')}</label>
                    <select
                      id="roomType"
                      className="input-field"
                      {...register('roomType')}
                    >
                      <option value="single">{t('register.room.single')}</option>
                      <option value="double">{t('register.room.double')}</option>
                      <option value="shared">{t('register.room.shared')}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="specialRequests" className="label">{t('register.specialRequests')}</label>
                    <textarea
                      id="specialRequests"
                      rows={3}
                      className="input-field"
                      {...register('specialRequests')}
                    ></textarea>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
          
          {/* Terms and Conditions */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="agreeTerms"
                type="checkbox"
                className={`w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 ${errors.agreeTerms ? 'ring-2 ring-red-500' : ''}`}
                {...register('agreeTerms', { required: true })}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="agreeTerms" className="font-medium text-gray-700">
                {t('register.agreeTerms')}
              </label>
              {errors.agreeTerms && (
                <p className="mt-1 text-sm text-red-600">You must agree to the terms and conditions</p>
              )}
            </div>
          </div>
          
          {/* Submit Button */}
          <div>
            <Button 
              type="submit" 
              variant="primary" 
              size="lg" 
              fullWidth 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </div>
              ) : (
                t('register.submit')
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default RegisterForm;