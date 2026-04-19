'use client';
import { useMemo, useState } from 'react';
import { bookingAffiliate } from '@/config/data';

function todayISO(offsetDays = 0): string {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().slice(0, 10);
}

/**
 * Builds a Booking.com deep link for the property page with the affiliate ID
 * and the user's chosen dates / guests pre-filled. Booking.com renders live
 * availability and pricing on landing.
 */
export function buildBookingUrl(params: {
  checkin: string;
  checkout: string;
  adults: number;
  children: number;
  rooms: number;
}): string {
  const url = new URL(bookingAffiliate.hotelUrl);
  url.searchParams.set('aid', bookingAffiliate.aid);
  url.searchParams.set('checkin', params.checkin);
  url.searchParams.set('checkout', params.checkout);
  url.searchParams.set('group_adults', String(params.adults));
  url.searchParams.set('group_children', String(params.children));
  url.searchParams.set('no_rooms', String(params.rooms));
  url.searchParams.set('selected_currency', bookingAffiliate.currency);
  return url.toString();
}

export default function BookingAvailability() {
  const defaultCheckIn = useMemo(() => todayISO(1), []);
  const defaultCheckOut = useMemo(() => todayISO(2), []);

  const [checkIn, setCheckIn] = useState(defaultCheckIn);
  const [checkOut, setCheckOut] = useState(defaultCheckOut);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const datesValid = checkIn && checkOut && checkIn < checkOut;

  const handleCounter = (
    setter: (n: number) => void,
    value: number,
    increment: boolean,
    min: number
  ) => {
    setter(increment ? value + 1 : Math.max(min, value - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!datesValid) return;
    const href = buildBookingUrl({
      checkin: checkIn,
      checkout: checkOut,
      adults,
      children,
      rooms
    });
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col items-center justify-center bg-stone-50 px-4 py-12 md:py-16">
      <div className="w-full max-w-2xl">
        <h2 className="text-center text-slate-800 text-3xl md:text-5xl font-normal font-['Kaisei_Tokumin'] mb-4">
          Check Live Availability
        </h2>
        <p className="text-center text-slate-600 text-sm md:text-base font-['Noto_Sans_JP'] mb-8 md:mb-10">
          See real-time rooms and prices on Booking.com.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <div className="relative w-full md:flex-1">
              <input
                type="date"
                value={checkIn}
                min={todayISO(0)}
                onChange={(e) => {
                  const v = e.target.value;
                  setCheckIn(v);
                  if (v >= checkOut) {
                    const next = new Date(v);
                    next.setDate(next.getDate() + 1);
                    setCheckOut(next.toISOString().slice(0, 10));
                  }
                }}
                className="w-full h-10 md:h-12 px-3 md:px-4 py-2 md:py-3 bg-gray-600/20 border-[3px] border-[#466362] rounded-[5px] font-['Kaisei_Tokumin'] text-slate-600 text-sm md:text-base"
                required
              />
              <label className="absolute -top-2 left-3 bg-stone-50 px-1 text-xs text-slate-500 rounded-sm font-['Kaisei_Tokumin']">
                Check-In
              </label>
            </div>
            <div className="relative w-full md:flex-1">
              <input
                type="date"
                value={checkOut}
                min={checkIn || todayISO(1)}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full h-10 md:h-12 px-3 md:px-4 py-2 md:py-3 bg-gray-600/20 border-[3px] border-[#466362] rounded-[5px] font-['Kaisei_Tokumin'] text-slate-600 text-sm md:text-base"
                required
              />
              <label className="absolute -top-2 left-3 bg-stone-50 px-1 text-xs text-slate-500 rounded-sm font-['Kaisei_Tokumin']">
                Check-Out
              </label>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <CounterField
              label="Adults"
              value={adults}
              min={1}
              onChange={(inc) => handleCounter(setAdults, adults, inc, 1)}
            />
            <CounterField
              label="Children"
              value={children}
              min={0}
              onChange={(inc) => handleCounter(setChildren, children, inc, 0)}
            />
            <CounterField
              label="Rooms"
              value={rooms}
              min={1}
              onChange={(inc) => handleCounter(setRooms, rooms, inc, 1)}
            />
          </div>

          <button
            type="submit"
            disabled={!datesValid}
            className="w-full py-3 md:py-4 bg-[#466362] hover:bg-[#3b4c4f] text-white text-base md:text-lg font-medium tracking-wider rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            CHECK AVAILABILITY ON BOOKING.COM
          </button>

          <p className="text-center text-xs text-slate-500 font-['Noto_Sans_JP']">
            Opens Booking.com in a new tab. Booking is completed there.
          </p>
        </form>
      </div>
    </div>
  );
}

function CounterField({
  label,
  value,
  min,
  onChange
}: {
  label: string;
  value: number;
  min: number;
  onChange: (increment: boolean) => void;
}) {
  return (
    <div className="relative w-full md:flex-1">
      <div className="w-full h-10 md:h-12 px-3 md:px-4 py-2 md:py-3 bg-gray-600/20 border-[3px] border-[#466362] rounded-[5px] font-['Kaisei_Tokumin'] text-slate-600 flex items-center justify-between text-sm md:text-base">
        <span>{label}</span>
        <div className="flex items-center space-x-2 md:space-x-3">
          <button
            type="button"
            onClick={() => onChange(false)}
            disabled={value <= min}
            className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#466362] text-white flex items-center justify-center text-sm hover:bg-[#3b4c4f] disabled:opacity-50"
            aria-label={`Decrease ${label.toLowerCase()}`}
          >
            −
          </button>
          <span className="w-5 md:w-6 text-center text-sm md:text-base">{value}</span>
          <button
            type="button"
            onClick={() => onChange(true)}
            className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#466362] text-white flex items-center justify-center text-sm hover:bg-[#3b4c4f]"
            aria-label={`Increase ${label.toLowerCase()}`}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
