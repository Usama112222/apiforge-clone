import React from 'react';
import ContactHero from '../components/ContactHero';
import ContactForm from '../components/ContactForm';
import ContactMap from '../components/ContactMap';

const Contact = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <ContactHero />
      <ContactForm />
      <ContactMap />
    </div>
  );
};

export default Contact;