import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-gray-400 text-sm">
            name
          </label>
          <input
            required
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-[#111111] border border-white/10 rounded-xl
                     text-white focus:border-[#0ff]/50 focus:ring-1 focus:ring-[#0ff]/50
                     transition-colors duration-300"
            placeholder="your name"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-gray-400 text-sm">
            email
          </label>
          <input
            required
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-[#111111] border border-white/10 rounded-xl
                     text-white focus:border-[#0ff]/50 focus:ring-1 focus:ring-[#0ff]/50
                     transition-colors duration-300"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="block text-gray-400 text-sm">
          subject
        </label>
        <input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-4 py-3 bg-[#111111] border border-white/10 rounded-xl
                   text-white focus:border-[#0ff]/50 focus:ring-1 focus:ring-[#0ff]/50
                   transition-colors duration-300"
          placeholder="what's this about?"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-gray-400 text-sm">
          message
        </label>
        <textarea
          required
          id="message"
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-[#111111] border border-white/10 rounded-xl
                   text-white focus:border-[#0ff]/50 focus:ring-1 focus:ring-[#0ff]/50
                   transition-colors duration-300 resize-none"
          placeholder="tell me about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto px-8 py-4 bg-[#111111] text-[#0ff] border border-[#0ff]/30
                 rounded-full hover:bg-[#0ff]/10 transition-all duration-300
                 shadow-[0_0_15px_rgba(0,255,255,0.3)] disabled:opacity-50
                 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <span className="animate-pulse">sending...</span>
        ) : (
          <>
            send message
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;