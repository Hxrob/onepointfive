import Link from 'next/link';
import Image from 'next/image';

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

      <section>
        <div className="w-full h-[3326px] bg-stone-50">

          <div className="justify-center text-slate-800 text-5xl text-center font-normal font-['Kaisei_Tokumin']">
            Rooms
          </div>


          


        </div>
      </section>
    </> 

  );
}
