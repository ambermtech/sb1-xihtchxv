import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-white">let's connect</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            have an exciting project where you need some help?
            drop me a line, and let's chat about it!
          </p>
        </div>
        
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;