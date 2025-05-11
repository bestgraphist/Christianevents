import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: 'Pastor Samuel Johnson',
      role: 'Director',
      image: 'https://images.pexels.com/photos/5794825/pexels-photo-5794825.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'With over 20 years of ministry experience, Pastor Samuel leads our organization with wisdom and vision.'
    },
    {
      name: 'Grace Williams',
      role: 'Event Coordinator',
      image: 'https://images.pexels.com/photos/7290698/pexels-photo-7290698.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Grace ensures every event runs smoothly, providing exceptional experiences for all participants.'
    },
    {
      name: 'Michael Carter',
      role: 'Worship Leader',
      image: 'https://images.pexels.com/photos/10015846/pexels-photo-10015846.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Michael creates powerful worship experiences that bring people closer to God.'
    },
    {
      name: 'Rebecca Martinez',
      role: 'Community Outreach',
      image: 'https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Rebecca builds bridges between our ministry and local communities to expand our impact.'
    }
  ];

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
            {t('about.title')}
          </motion.h1>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Connecting Christians through inspiring events and meaningful gatherings since 2010
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-purple-50 p-8 rounded-lg"
            >
              <h2 className="font-serif text-2xl font-bold text-purple-900 mb-4">{t('about.mission')}</h2>
              <p className="text-gray-700">
                Our mission is to strengthen the Christian community by creating meaningful events that foster spiritual growth, 
                fellowship, and service. We believe in the power of gathering together to worship, learn, and grow in faith.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-purple-50 p-8 rounded-lg"
            >
              <h2 className="font-serif text-2xl font-bold text-purple-900 mb-4">{t('about.vision')}</h2>
              <p className="text-gray-700">
                We envision a world where Christians of all denominations come together in unity, supporting each other and 
                sharing God's love with their communities. Through our events, we aim to inspire believers to live out their 
                faith with purpose and passion.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-purple-900 mb-6 text-center">Our Story</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Founded in 2010, our ministry began with a simple vision to bring Christians together through meaningful events. 
                What started as small gatherings in local churches has grown into a vibrant organization that hosts conferences, 
                retreats, and worship events across the country.
              </p>
              <p className="mb-4">
                Over the years, we've had the privilege of seeing thousands of lives transformed through our events. From 
                powerful worship experiences to inspirational teaching, we strive to create environments where people can 
                encounter God and connect with fellow believers.
              </p>
              <p>
                As we look to the future, we remain committed to our core values of excellence, authenticity, and service. 
                We believe that by bringing Christians together in unity, we can make a significant impact for God's kingdom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white" id="team">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-purple-900 mb-10 text-center">{t('about.team')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-purple-900">{member.name}</h3>
                  <p className="text-purple-700 mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-purple-50" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-purple-900 mb-10 text-center">{t('about.contact')}</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="font-serif text-xl font-bold text-purple-900 mb-6">Get in Touch</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-purple-700 mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium text-gray-700">Email</p>
                      <p className="text-gray-600">info@christevents.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-purple-700 mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium text-gray-700">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-purple-700 mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium text-gray-700">Address</p>
                      <p className="text-gray-600">123 Faith Street, Blessing City, BC 12345</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  We'd love to hear from you! Whether you have questions about upcoming events, want to partner with us, 
                  or need assistance with registration, our team is here to help.
                </p>
                <p className="text-gray-700">
                  Office Hours: Monday-Friday, 9am-5pm
                </p>
              </div>
            </div>
            
            <div>
              <form className="bg-white rounded-lg shadow-md p-8">
                <h3 className="font-serif text-xl font-bold text-purple-900 mb-6">Send us a Message</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="label">Name</label>
                    <input id="name" type="text" className="input-field" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="label">Email</label>
                    <input id="email" type="email" className="input-field" />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="label">Subject</label>
                    <input id="subject" type="text" className="input-field" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="label">Message</label>
                    <textarea id="message" rows={4} className="input-field"></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;