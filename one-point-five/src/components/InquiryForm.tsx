'use client';
import { useState } from 'react';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    messageType: 'inquiry',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          type: 'inquiry'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          message: '',
          messageType: 'inquiry',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending inquiry:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[800px] bg-stone-50 px-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-center text-slate-800 text-5xl font-normal font-['Kaisei_Tokumin'] mb-12">
          Inquiry
        </h1>
        
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            Your inquiry has been sent successfully! We&apos;ll get back to you soon.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            Failed to send inquiry. Please try again.
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-full h-12 px-4 py-3 bg-gray-600/20 border-b-[3px] border-[#466362] rounded-tl-[5px] rounded-tr-[5px] font-['Kaisei_Tokumin']"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full h-12 px-4 py-3 bg-gray-600/20 border-b-[3px] border-[#466362] rounded-tl-[5px] rounded-tr-[5px] font-['Kaisei_Tokumin']"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Leave a message..."
              rows={6}
              className="w-full px-4 py-3 bg-gray-600/20 border-b-[3px] border-[#466362] rounded-tl-[5px] rounded-tr-[5px] font-['Kaisei_Tokumin']"
              disabled={isSubmitting}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-[#466362] hover:bg-[#3b4c4f] text-white text-lg font-medium tracking-wider rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'SENDING...' : 'SEND'}
          </button>
        </form>
      </div>
    </div>
  );
}