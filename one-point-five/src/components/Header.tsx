import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 bg-yellow-50 w-full h-[60px] border-b">
      <div className="max-w-full mx-auto h-full flex items-center justify-between px-4">
        {/* Logo */}
        <div className="h-[50px]">
          <Image src="/images/headerlogo.png" alt="One Point Five" width={200} height={50} />
        </div>
        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          <Link href="/" className="flex items-center font-medium font-jp text-gray-800 text-[20px]">
              Home <span className="ml-1">▾</span>
          </Link>
          <Link href="/rooms" className="font-medium text-gray-800 text-[20px]">
            Rooms
          </Link>
          <Link href="/locations" className="font-medium text-gray-800 text-[20px]">
            Nearby
          </Link>
          <Link href="/contact" className="font-medium text-gray-800 text-[20px]">
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
