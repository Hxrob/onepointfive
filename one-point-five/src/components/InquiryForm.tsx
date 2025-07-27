'use client';
import { useState } from 'react';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    messageType: 'inquiry',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[] bg-stone-50 px-4 mb-30">
      <div className="w-full max-w-2xl">
        <h1 className="justify-center text-slate-800 text-5xl font-normal font-['Kaisei_Tokumin'] mb-12">
          Inquiry
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-96 h-12 px-4 py-3 bg-gray-600/20 border-b-[3px] border-[#466362] rounded-tl-[5px] rounded-tr-[5px] font-['Kaisei_Tokumin']"
              required
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
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-[#466362] hover:bg-[#3b4c4f] text-white text-lg font-medium tracking-wider rounded-md transition-colors duration-200"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}