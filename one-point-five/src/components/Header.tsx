'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);

  const homeNavItems = [
    { name: 'Amenities', href: '/#amenities' },
    { name: 'Rooms', href: '/#rooms' },
    { name: 'Map', href: '/#map' },
    { name: 'Explore Nearby', href: '/#explore-nearby' },
    { name: 'Services', href: '/#services' },
    { name: 'Socials', href: '/#socials' },
    { name: 'Contact', href: '/#inquiry' }
  ];

  return (
    // Add drop-shadow to header for depth
    <header className="sticky top-0 bg-[#FDF9EF] w-full h-[75px] z-50">
      <div className="max-w-full mx-auto h-full flex items-center justify-between px-4">
        {/* Logo */}
        <div className="h-[75px] ml-8">
          <Link href="/">
            <Image src="/images/headerlogo.png" alt="One Point Five" width={300} height={75} />
          </Link>
        </div>
        
        {/* Navigation */}
        <nav className="flex items-center space-x-20">
          {/* Home Dropdown, add smooth scrolling */}
          <div 
            className="relative"
            onMouseEnter={() => setIsHomeDropdownOpen(true)}
            onMouseLeave={() => setIsHomeDropdownOpen(false)}
          >
            <Link 
              href="/" 
              className={`flex items-center text-[#1C2541] text-[20px] ${pathname === '/' ? 'font-bold' : 'font-medium'}`}
            >
              Home <span className="ml-1">▾</span>
            </Link>
            
            {/* Dropdown Menu */}
            {isHomeDropdownOpen && (
              <div className="absolute top-full left-0 w-48 bg-[#FDF9EF] border border-gray-200 rounded-md shadow-lg z-50">
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

          <Link href="/rooms" className={`text-[#1C2541] text-[20px] ${pathname === '/rooms' ? 'font-bold' : 'font-medium'}`}>
            Rooms
          </Link>
          
          <Link href="/locations" className={`text-[#1C2541] text-[20px] ${pathname === '/locations' ? 'font-bold' : 'font-medium'}`}>
            Nearby
          </Link>
          {/* Move elements further left to match distance with header's left side */}
          <Link href="/rooms#booking" className={`text-[#1C2541] text-[20px] ${pathname == '/rooms#booking' ? 'font-bold' : 'font-medium'}`}>
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
