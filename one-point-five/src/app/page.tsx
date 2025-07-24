import Link from 'next/link';
import Image from 'next/image';


const carouselItems = [
  { href: '/rooms/201', src: '/images/201.png', alt: 'Room 201', label: 'Room 201' },
  { href: '/rooms/202', src: '/images/202.png', alt: 'Room 202', label: 'Room 202' },
  { href: '/rooms/203', src: '/images/203.png', alt: 'Room 203', label: 'Room 203' },
  { href: '/rooms/204', src: '/images/204.png', alt: 'Room 204', label: 'Room 204' },
];

const services = [
  { src: '/images/bikerental.png', alt: 'Bike Rental', title: 'Bike Rental', description: 'Details here' },
  { src: '/images/matcha.png', alt: 'Matcha and Tea Set', title: 'Matcha and Tea Set', description: 'Details here' },
  { src: '/images/manga.png', alt: 'Manga', title: 'Manga', description: 'Details here' },
  { src: '/images/photos.png', alt: 'Photo Tour', title: 'Photography Tours', description: 'Details here' }
];

export default function HomePage() {
  return (
    <>
      <div className="relative w-full h-screen">
        <Image src="/images/frontpage.jpg" alt="One Point Five Front Entrance" fill className="object-cover"/>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Image src="/images/headerlogo.png" alt="One Point Five Logo" width={800} height={200} className="opacity-90 brightness-0 invert"/>
        </div>
      </div>


      {/* Amenities Section */}
      <section className="py-24 mt-16">
        <div className="container mx-auto px-4 flex flex-col w-full h-[429px]">
          <div className="text-center justify-center text-slate-800 text-5xl font-normal font-['Kaisei_Tokumin'] mb-30">
            Amenities
          </div>

          <div className="flex justify-center items-start space-x-16">

            {/* Wifi */}
            <div className="flex flex-col items-center text-center w-32">
              <div className="relative w-24 h-24 mb-4">
                <Image src="/images/wifi.svg" alt="Wifi" fill className="object-contain"/>
              </div>
              <div className="w-36 text-center justify-center text-slate-800 text-2xl font-normal font-['Kaisei_Tokumin'] leading-10">
                Free Wi-Fi
              </div>
            </div>

            {/* Kitchen */}
            <div className="flex flex-col items-center text-center w-32">
              <div className="relative w-24 h-24 mb-4">
                <Image src="/images/kitchen.svg" alt="Kitchen" fill className="object-contain"/>
              </div>
              <div className="w-36 text-center justify-center text-slate-800 text-2xl font-normal font-['Kaisei_Tokumin'] leading-10">
                 Kitchen Space
              </div>
            </div>

            {/* Laundry */}
            <div className="flex flex-col items-center text-center w-32">
              <div className="relative w-24 h-24 mb-4">
                <Image src="/images/laundry.svg" alt="Laundry" fill className="object-contain"/>
              </div>
              <div className="w-36 text-center justify-center text-slate-800 text-2xl font-normal font-['Kaisei_Tokumin'] leading-10">
                Washing Machine
              </div>
            </div>

            {/* Shower & Bathtub */}
            <div className="flex flex-col items-center text-center w-32">
              <div className="relative w-24 h-24 mb-4">
                <Image src="/images/bathtub.svg" alt="Bathtub" fill className="object-contain"/>
              </div>
              <div className="w-36 text-center justify-center text-slate-800 text-2xl font-normal font-['Kaisei_Tokumin'] leading-10">
                Shower & Bathtub
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Rooms Section */}
      <section>
        <div className="container mx-auto px-4 flex flex-col items-center h-[3326px]">
          <div className="justify-center text-slate-800 text-5xl text-center font-normal font-['Kaisei_Tokumin']">
            Rooms
          </div>

          {/* Room 201 */}
          <div className="relative w-full max-w-[1240px] h-[726.54px] aspect-[1240/726.54] mt-10">
            <Image src="/images/201.png" fill className="object-contain" alt="Room 201"/>
            <div className="absolute w-64 h-44 mt-[32.55px] ml-[34.03px] justify-center text-slate-800 text-8xl font-black font-['Noto_Sans_JP'] [text-shadow:_2px_2px_4px_rgb(252_249_249_/_1.00)] z-10">
              201
            </div>

            <div className="absolute w-[726.54px] h-24 mt-[152.72px] ml-[34.03px] justify-center text-orange-50 text-5xl font-normal font-['Kaisei_Tokumin'] z-10">
              Double Bed Room
            </div>
          
            <div className="absolute w-40 h-9 mt-[276.3px] ml-[34.03px] justify-center text-orange-50 text-xl font-normal font-['Noto_Sans_JP'] underline">
              View Details
            </div>
          </div>

          {/* Room 202 */}
          <div className="relative w-full max-w-[1240px] h-[726.54px] aspect-[1240/726.54] mt-10">
            <Image src="/images/202.png" fill className="object-contain" alt="Room 202"/>
            <div className="absolute w-64 h-44 mt-[32.55px] ml-[34.03px] justify-center text-slate-800 text-8xl font-black font-['Noto_Sans_JP'] [text-shadow:_2px_2px_4px_rgb(252_249_249_/_1.00)] z-10">
              202
            </div>

            <div className="absolute w-[726.54px] h-24 mt-[152.72px] ml-[34.03px] justify-center text-orange-50 text-5xl font-normal font-['Kaisei_Tokumin'] z-10">
              Single Bed Room With Desk
            </div>
          
            <div className="absolute w-40 h-9 mt-[276.3px] ml-[34.03px] justify-center text-orange-50 text-xl font-normal font-['Noto_Sans_JP'] underline">
              View Details
            </div>
          </div>

          {/* Room 203 */}
          <div className="relative w-full max-w-[1240px] h-[726.54px] aspect-[1240/726.54] mt-10">
            <Image src="/images/203.png" fill className="object-contain" alt="Room 203"/>
            <div className="absolute w-64 h-44 mt-[32.55px] ml-[34.03px] justify-center text-slate-800 text-8xl font-black font-['Noto_Sans_JP'] [text-shadow:_2px_2px_4px_rgb(252_249_249_/_1.00)] z-10">
              203
            </div>

            <div className="absolute w-[726.54px] h-24 mt-[152.72px] ml-[34.03px] justify-center text-orange-50 text-5xl font-normal font-['Kaisei_Tokumin'] z-10">
              Single Bed Room With Tatami
            </div>
          
            <div className="absolute w-40 h-9 mt-[276.3px] ml-[34.03px] justify-center text-orange-50 text-xl font-normal font-['Noto_Sans_JP'] underline">
              View Details
            </div>
          </div>

          {/* Room 204 */}
          <div className="relative w-full max-w-[1240px] h-[726.54px] aspect-[1240/726.54] mt-10">
            <Image src="/images/204.png" fill className="object-contain" alt="Room 204"/>
            <div className="absolute w-64 h-44 mt-[32.55px] ml-[34.03px] justify-center text-slate-800 text-8xl font-black font-['Noto_Sans_JP'] [text-shadow:_2px_2px_4px_rgb(252_249_249_/_1.00)] z-10">
              204
            </div>

            <div className="absolute w-[726.54px] h-24 mt-[152.72px] ml-[34.03px] justify-center text-orange-50 text-5xl font-normal font-['Kaisei_Tokumin'] z-10">
              Twin Bed Room
            </div>
          
            <div className="absolute w-40 h-9 mt-[276.3px] ml-[34.03px] justify-center text-orange-50 text-xl font-normal font-['Noto_Sans_JP'] underline">
              View Details
            </div>
          </div>
      </div>
    </section>


    {/* Map Section */}
    <section className="w-full h-[775px] bg-stone-50">
      <div className="justify-start text-center text-slate-800 text-5xl font-normal font-['Kaisei_Tokumin']">
        Map
      </div>

      {/* Placeholder for Map */}
    </section>

    

    {/* Explore Nearby Section */}
    <section className="bg-stone-50 py-16">
      <div className="container w-fill h-[850px] mx-auto px-4">
        <h2 className="text-5xl font-normal font-['Kaisei_Tokumin'] text-center text-slate-800 mb-12">
          Explore Nearby
        </h2>
        
        <div className="flex justify-center items-end max-w-6xl mx-auto">
          <div className="flex -space-x-32 items-end">
            
            {/* EQUIA Image */}
            <div className="relative w-[462.42px] h-[470.64px] transition-all duration-300 ease-in-out z-10 hover:z-50 hover:scale-105 mb-9">
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                <Image src="/images/equia.png" alt="EQUIA" fill className="object-cover" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-2xl font-bold mt-2">EQUIA</h3>
                </div>
              </div>
            </div>

            {/* Ueno Museum Image */}
            <div className="relative w-[532.30px] h-[541.54px] transition-all duration-300 ease-in-out z-20 hover:z-50 hover:scale-105">
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                <Image src="/images/ueno-museum.png" alt="Ueno Museum" fill className="object-cover" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-2xl font-bold">Ueno Museum</h3>
                </div>
              </div>
            </div>

            {/* Toneri Park Image */}
            <div className="relative w-[462.42px] h-[470.64px] transition-all duration-300 ease-in-out z-10 hover:z-50 hover:scale-105 mb-9">
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                <Image src="/images/toneri-park.png" alt="Toneri Park" fill className="object-cover" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-2xl font-bold">Toneri Park</h3>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          <div className="w-3 h-3 rounded-full bg-gray-600"></div>
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
        </div>
      </div>
    </section>

    {/* Services Section */}
    <section className="w-full h-[733px] bg-stone-50">
      <h2 className="text-center text-slate-800 text-5xl font-normal font-['Kaisei_Tokumin']">
        Services
      </h2>

      
        
      <div className="container mx-auto mt-36">
        <div className="flex justify-center gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative w-[279.93px] h-[305.38px] bg-slate-800 rounded-[10px]">
              <div className="absolute -top-[57.12px] left-[29.46px] w-[265.04px] h-[207.22px] z-10">
                <Image className="w-full h-full rounded-[10px] object-cover" src={service.src} fill alt={service.alt} />
              </div>
              <div className="absolute left-[19.28px] top-[162.62px] text-stone-50 text-2xl font-normal font-['Kaisei_Tokumin'] leading-10">{service.title}</div>
              <div className="absolute left-[19.28px] top-[200px] text-stone-50 text-base font-normal font-['Noto_Sans_JP']">{service.description}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <button className=" w-64 h-14 bg-orange-50 rounded-[10px] border-[3px] border-gray-600">
          <span className=" w-28 h-7 text-center justify-center text-slate-800 text-2xl font-medium font-['Noto_Sans_JP'] uppercase tracking-wider">RESERVE</span>
        </button>
      </div>
    </section>
    
    

    </>
  );
}
