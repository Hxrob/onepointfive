'use client';
import { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    room: '',
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const rooms = [
    { value: '201', label: 'Room 201 - Double Bed Room' },
    { value: '202', label: 'Room 202 - Single Bed Room with Working Desk' },
    { value: '203', label: 'Room 203 - Single Bed Room with Tatami' },
    { value: '204', label: 'Room 204 - Twin Bed Room' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCounterChange = (field: 'adults' | 'children', increment: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: increment 
        ? prev[field] + 1 
        : Math.max(field === 'adults' ? 1 : 0, prev[field] - 1)
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
          message: `
            Room: ${formData.room}
            Check-in: ${formData.checkIn}
            Check-out: ${formData.checkOut}
            Adults: ${formData.adults}
            Children: ${formData.children}
            Message: ${formData.message}
          `,
          type: 'booking'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          room: '',
          checkIn: '',
          checkOut: '',
          adults: 1,
          children: 0,
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending booking:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[900px] bg-stone-50 px-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-center text-slate-800 text-5xl font-normal font-['Kaisei_Tokumin'] mb-12">
          Booking
        </h1>
        
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            Your booking request has been sent successfully! We'll get back to you soon.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            Failed to send booking request. Please try again.
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-full h-12 px-4 py-3 bg-gray-600/20 border-b-[3px] border-[#466362] rounded-tl-[5px] rounded-tr-[5px] font-['Kaisei_Tokumin'] text-slate-600 placeholder-slate-500"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full h-12 px-4 py-3 bg-gray-600/20 border-b-[3px] border-[#466362] rounded-tl-[5px] rounded-tr-[5px] font-['Kaisei_Tokumin'] text-slate-600 placeholder-slate-500"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Room Selection */}
          <div className="relative">
            <select
              name="room"
              value={formData.room}
              onChange={handleInputChange}
              className="w-full h-12 px-4 py-3 bg-gray-600/20 border-b-[3px] border-[#466362] rounded-tl-[5px] rounded-tr-[5px] font-['Kaisei_Tokumin'] text-slate-600 appearance-none cursor-pointer"
              required
              disabled={isSubmitting}
            >
              <option value="" disabled>Room</option>
              {rooms.map((room) => (
                <option key={room.value} value={room.value}>
                  {room.label}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-[#466362]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Check-in and Check-out */}
          <div className="flex gap-4">
            <div className="relative flex-1">
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleInputChange}
                className="w-full h-12 px-4 py-3 bg-gray-600/20 border-[3px] border-[#466362] rounded-[5px] font-['Kaisei_Tokumin'] text-slate-600"
                required
                disabled={isSubmitting}
              />
              {/* Set check-in background to  */}
              <label className="absolute -top-2 left-3 bg-stone-50 px-1 text-xs text-slate-500 font-['Kaisei_Tokumin']">
                Check-In
              </label>
            </div>
            <div className="relative flex-1">
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleInputChange}
                className="w-full h-12 px-4 py-3 bg-gray-600/20 border-[3px] border-[#466362] rounded-[5px] font-['Kaisei_Tokumin'] text-slate-600"
                required
                disabled={isSubmitting}
              />
              <label className="absolute -top-2 left-3 bg-stone-50 px-1 text-xs text-slate-500 font-['Kaisei_Tokumin']">
                Check-Out
              </label>
            </div>
          </div>

          {/* Adults and Children Counters */}
          <div className="flex gap-4">
            <div className="relative flex-1">
              <div className="w-full h-12 px-4 py-3 bg-gray-600/20 border-[3px] border-[#466362] rounded-[5px] font-['Kaisei_Tokumin'] text-slate-600 flex items-center justify-between">
                <span>Adults</span>
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={() => handleCounterChange('adults', false)}
                    className="w-6 h-6 rounded-full bg-[#466362] text-white flex items-center justify-center text-sm hover:bg-[#3b4c4f] disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    −
                  </button>
                  <span className="w-6 text-center">{formData.adults}</span>
                  <button
                    type="button"
                    onClick={() => handleCounterChange('adults', true)}
                    className="w-6 h-6 rounded-full bg-[#466362] text-white flex items-center justify-center text-sm hover:bg-[#3b4c4f] disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="relative flex-1">
              <div className="w-full h-12 px-4 py-3 bg-gray-600/20 border-[3px] border-[#466362] rounded-[5px] font-['Kaisei_Tokumin'] text-slate-600 flex items-center justify-between">
                <span>Children</span>
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={() => handleCounterChange('children', false)}
                    className="w-6 h-6 rounded-full bg-[#466362] text-white flex items-center justify-center text-sm hover:bg-[#3b4c4f] disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    −
                  </button>
                  <span className="w-6 text-center">{formData.children}</span>
                  <button
                    type="button"
                    onClick={() => handleCounterChange('children', true)}
                    className="w-6 h-6 rounded-full bg-[#466362] text-white flex items-center justify-center text-sm hover:bg-[#3b4c4f] disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Leave a message..."
              rows={6}
              className="w-full px-4 py-3 bg-gray-600/20 border-b-[3px] border-[#466362] rounded-tl-[5px] rounded-tr-[5px] font-['Kaisei_Tokumin'] text-slate-600 placeholder-slate-500 resize-none"
              disabled={isSubmitting}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-[#466362] hover:bg-[#3b4c4f] text-white text-lg font-medium tracking-wider rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'SENDING...' : 'REQUEST BOOKING'}
          </button>
        </form>
      </div>
    </div>
  );
}