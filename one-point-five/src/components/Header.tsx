'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { homeNavItems } from '@/config/data';

export default function Header() {
  const pathname = usePathname();
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  return (
    <header className="sticky top-0 bg-[#FDF9EF] w-full h-[60px] md:h-[75px] z-50 drop-shadow-lg">
      <div className="max-w-full mx-auto h-full flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="h-[40px] md:h-[75px]">
          <Link href="/">
            <Image 
              src="/images/headerlogo.png" 
              alt="One Point Five" 
              width={300} 
              height={75} 
              className="h-[40px] md:h-[75px] w-auto object-contain"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-16 mr-4">
          {/* Home Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsHomeDropdownOpen(true)}
            onMouseLeave={() => setIsHomeDropdownOpen(false)}
          >
            <Link 
              href="/" 
              className={`flex items-center text-[#1C2541] text-[18px] lg:text-[20px] ${pathname === '/' ? 'font-bold' : 'font-medium'}`}
            >
              Home <span className="ml-1">▾</span>
            </Link>
            
            {/* Dropdown Menu */}
            {isHomeDropdownOpen && (
              <div className="absolute top-full left-0 w-48 bg-[#FDF9EF] border border-gray-200 rounded-md shadow-xl z-50 drop-shadow-lg">
                <div className="py-2">
                  {homeNavItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block px-4 py-2 text-[16px] text-[#1C2541] hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/rooms" className={`text-[#1C2541] text-[18px] lg:text-[20px] ${pathname === '/rooms' ? 'font-bold' : 'font-medium'}`}>
            Rooms
          </Link>
          
          <Link href="/locations" className={`text-[#1C2541] text-[18px] lg:text-[20px] ${pathname === '/locations' ? 'font-bold' : 'font-medium'}`}>
            Nearby
          </Link>
          
          <Link href="/rooms#booking" className={`text-[#1C2541] text-[18px] lg:text-[20px] ${pathname == '/rooms#booking' ? 'font-bold' : 'font-medium'}`}>
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col space-y-1 p-2"
        >
          <span className={`block w-6 h-0.5 bg-[#1C2541] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#1C2541] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#1C2541] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#FDF9EF] border-t border-gray-200 shadow-lg z-50">
          <div className="px-4 py-4 space-y-4">
            {/* Home Section */}
            <div>
              <div className="text-[#1C2541] text-[18px] font-medium mb-2">Home</div>
              <div className="space-y-2 ml-4">
                {homeNavItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block text-[16px] text-[#1C2541] hover:text-gray-600 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Other Navigation Items */}
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <Link 
                href="/rooms" 
                className={`block text-[18px] ${pathname === '/rooms' ? 'font-bold' : 'font-medium'} text-[#1C2541]`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Rooms
              </Link>
              <Link 
                href="/locations" 
                className={`block text-[18px] ${pathname === '/locations' ? 'font-bold' : 'font-medium'} text-[#1C2541]`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nearby
              </Link>
              <Link 
                href="/rooms#booking" 
                className={`block text-[18px] ${pathname == '/rooms#booking' ? 'font-bold' : 'font-medium'} text-[#1C2541]`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
