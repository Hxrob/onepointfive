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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[900px] bg-stone-50 px-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-center text-slate-800 text-5xl font-normal font-['Kaisei_Tokumin'] mb-12">
          Booking
        </h1>
        
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
            >
              <option value="" disabled>Room</option>
              {rooms.map((room) => (
                <option key={room.value} value={room.value}>
                  {room.label}
                </option>
              ))}
            </select>
            {/* Custom dropdown arrow */}
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
              />
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
                    className="w-6 h-6 rounded-full bg-[#466362] text-white flex items-center justify-center text-sm hover:bg-[#3b4c4f]"
                  >
                    −
                  </button>
                  <span className="w-6 text-center">{formData.adults}</span>
                  <button
                    type="button"
                    onClick={() => handleCounterChange('adults', true)}
                    className="w-6 h-6 rounded-full bg-[#466362] text-white flex items-center justify-center text-sm hover:bg-[#3b4c4f]"
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
                    className="w-6 h-6 rounded-full bg-[#466362] text-white flex items-center justify-center text-sm hover:bg-[#3b4c4f]"
                  >
                    −
                  </button>
                  <span className="w-6 text-center">{formData.children}</span>
                  <button
                    type="button"
                    onClick={() => handleCounterChange('children', true)}
                    className="w-6 h-6 rounded-full bg-[#466362] text-white flex items-center justify-center text-sm hover:bg-[#3b4c4f]"
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
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-[#466362] hover:bg-[#3b4c4f] text-white text-lg font-medium tracking-wider rounded-md transition-colors duration-200"
          >
            RESERVE
          </button>
        </form>
      </div>
    </div>
  );
}