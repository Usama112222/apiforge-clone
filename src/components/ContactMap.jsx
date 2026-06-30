import React from 'react';

const ContactMap = () => {
  return (
    <section className="border-t border-gray-200 dark:border-gray-800">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55234.45392857408!2d-97.74306055!3d30.2671530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sDowntown%20Austin%2C%20Austin%2C%20TX!5e0!3m2!1sen!2sus!4v1" 
        className="h-80 w-full border-0" 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade" 
        title="Our office location in Austin"
      />
    </section>
  );
};

export default ContactMap; // ← Make sure this line exists