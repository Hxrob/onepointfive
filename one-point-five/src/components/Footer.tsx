import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-screen min-h-screen md:h-screen bg-stone-50 py-8 md:py-16 px-4 md:px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 h-full">
          <div className="space-y-6 md:space-y-8 flex flex-col justify-center">
            {/* Logo */}
            <Image src="/images/headerlogo.png" alt="One Point Five Hotel Logo" width={493} height={128} className="h-auto w-full max-w-[400px] md:max-w-none" />

            {/* Contact Information */}
            <div className="space-y-3 md:space-y-4">
              <p className="text-slate-700 text-base md:text-lg font-normal font-['Kaisei_Tokumin']">
                〒1210823 4-2-27 Iko, Adachi-ku, Tokyo
              </p>
              
              <div className="space-y-1 md:space-y-2">
                <p className="text-slate-700 text-base md:text-lg font-normal font-['Kaisei_Tokumin']">
                  Japanese Phone: 080-6661-9441
                </p>
                <p className="text-slate-700 text-base md:text-lg font-normal font-['Kaisei_Tokumin']">
                  English Phone: 090-6856-0433
                </p>
                <p className="text-slate-700 text-base md:text-lg font-normal font-['Kaisei_Tokumin']">
                  Email: opf@s-kenchiku.jp
                </p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3 md:space-x-4">
              <Link href="https://www.instagram.com/onepointfivehotel/" target="_blank" className="hover:opacity-70 transition-opacity">
                <Image src="/images/icons/instagram.svg" alt="Instagram" width={32} height={32} className="md:w-10 md:h-10" />
              </Link>
              <Link href="https://line.me/en/" target="_blank" className="hover:opacity-70 transition-opacity">
                <Image src="/images/icons/line.svg" alt="LINE" width={32} height={32} className="md:w-10 md:h-10" />
              </Link>
            </div>
          </div>

          {/* Right Side - Navigation */}
          <div className="lg:border-l lg:border-slate-400 lg:pl-16 flex flex-col justify-center mt-8 lg:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6">
              {/* Home Section */}
              <div>
                <h2 className='mb-3 md:mb-4'>
                    <Link href="/" className="text-slate-800 text-2xl md:text-3xl font-normal font-['Kaisei_Tokumin']">Home</Link>
                </h2>

                <nav className="ml-3 md:ml-5 space-y-2 md:space-y-3">
                  <Link href="/#amenities" className="block text-slate-600 text-base md:text-lg font-normal font-['Kaisei_Tokumin'] hover:text-slate-800 transition-colors">
                    Amenities
                  </Link>
                  <Link href="/#rooms" className="block text-slate-600 text-base md:text-lg font-normal font-['Kaisei_Tokumin'] hover:text-slate-800 transition-colors">
                    Rooms
                  </Link>
                  <Link href="/#map" className="block text-slate-600 text-base md:text-lg font-normal font-['Kaisei_Tokumin'] hover:text-slate-800 transition-colors">
                    Map
                  </Link>
                  <Link href="/#explore-nearby" className="block text-slate-600 text-base md:text-lg font-normal font-['Kaisei_Tokumin'] hover:text-slate-800 transition-colors">
                    Nearby
                  </Link>
                  <Link href="/#services" className="block text-slate-600 text-base md:text-lg font-normal font-['Kaisei_Tokumin'] hover:text-slate-800 transition-colors">
                    Services
                  </Link>
                  <Link href="/#socials" className="block text-slate-600 text-base md:text-lg font-normal font-['Kaisei_Tokumin'] hover:text-slate-800 transition-colors">
                    Socials
                  </Link>
                  <Link href="/#inquiry" className="block text-slate-600 text-base md:text-lg font-normal font-['Kaisei_Tokumin'] hover:text-slate-800 transition-colors">
                    Contact
                  </Link>
                </nav>
              </div>

              {/* Rooms Section */}
              <div>
                <h2 className='mb-3 md:mb-4'>
                    <Link href="/rooms" className="text-slate-800 text-2xl md:text-3xl font-normal font-['Kaisei_Tokumin']">
                    Rooms
                    </Link>
                </h2>
                <nav className="ml-3 md:ml-5 space-y-2 md:space-y-3">
                  <Link href="/rooms#booking" className="block text-slate-600 text-base md:text-lg font-normal font-['Kaisei_Tokumin'] hover:text-slate-800 transition-colors">
                    Book Now
                  </Link>
                </nav>
              </div>

              {/* Nearby Section */}
              <div>
                <h2 className='mb-3 md:mb-4'>
                    <Link href="/locations" className="text-slate-800 text-2xl md:text-3xl font-normal font-['Kaisei_Tokumin']">
                    Nearby
                    </Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}