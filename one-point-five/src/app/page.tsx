'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import InstagramEmbed from '@/components/InstagramEmbed';
import InquiryForm from '@/components/InquiryForm';


export default function HomePage() {
  const services = [
    { src: '/images/bikerental.png', alt: 'Bike Rental', title: 'Bike Rental', description: 'Details here' },
    { src: '/images/matcha.png', alt: 'Matcha and Tea Set', title: 'Matcha and Tea Set', description: 'Details here' },
    { src: '/images/manga.png', alt: 'Manga', title: 'Manga', description: 'Details here' },
    { src: '/images/photos.png', alt: 'Photo Tour', title: 'Photography Tours', description: 'Details here' }
  ];

    const amenities = [
      { icon: '/images/wifi.svg', name: 'Free Wi-Fi' },
      { icon: '/images/kitchen.svg', name: 'Kitchen Space' },
      { icon: '/images/bathtub.svg', name: 'Shower and Bath' },
      { icon: '/images/laundry.svg', name: 'Washing Machine' }
    ];

    const rooms = [
        {number: 201, description: "Double Bed Room", details: "Details here"},
        {number: 202, description: "Single Bed Room with Working Desk", details: "Details here"},
        {number: 203, description: "Single Bed Room with Tatami", details: "Details here"},
        {number: 204, description: "Twin Bed Room", details: "Details here"},
    ]

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

            {amenities.map((amenity, index) => (
              <div key={index} className="flex flex-col items-center text-center w-32">
                <div className="relative w-24 h-24 mb-4">
                  <Image src={amenity.icon} alt={amenity.name} fill className="object-contain"/>
                </div>
                <div className="w-36 text-center justify-center text-slate-800 text-2xl font-normal font-['Kaisei_Tokumin'] leading-10">
                  {amenity.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Rooms Section */}
      <section>
        <div className="container mx-auto px-4 flex flex-col items-center h-[3326px]">
          <div className="justify-center text-slate-800 text-5xl text-center font-normal font-['Kaisei_Tokumin']">
            Rooms
          </div>

          {rooms.map((room, index) => (
            <div key={index} className="relative w-full max-w-[1240px] h-[726.54px] aspect-[1240/726.54] mt-10">
              <Image src={`/images/${room.number}.png`} fill className="object-contain" alt={`Room ${room.number}`}/>
              <div className="absolute w-64 h-44 mt-[32.55px] ml-[34.03px] justify-center text-slate-800 text-8xl font-black font-['Noto_Sans_JP'] [text-shadow:_2px_2px_4px_rgb(252_249_249_/_1.00)] z-10">
                {room.number}
              </div>

            <div className="absolute w-[726.54px] h-24 mt-[152.72px] ml-[34.03px] justify-center text-orange-50 text-5xl font-normal font-['Kaisei_Tokumin'] z-10">
              {room.description}
            </div>
          
            <div className="absolute w-40 h-9 mt-[276.3px] ml-[34.03px] justify-center text-orange-50 text-xl font-normal font-['Noto_Sans_JP'] underline">
              {room.details}
            </div>
          </div>
          ))}
      </div>
    </section>


    {/* Map Section */}
    <section className="w-full h-[775px] bg-stone-50">
      <div className="pt-8 text-center text-slate-800 text-5xl font-normal font-['Kaisei_Tokumin']">
        Map
      </div>

      {/* Placeholder for Map */}
      <div className="flex flex-row justify-center items-start mt-10 px-4">
        <div className="flex flex-row gap-8">
          <APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY!}>
            <div className="w-[756px] h-[505px]">
              <Map
                defaultCenter={{ lat: 35.79638550079517, lng: 139.7871127100252 }}
                defaultZoom={18}
                style={{ height: '100%', width: '100%' }}
              >
                <Marker position={{ lat: 35.79638550079517, lng: 139.7871127100252 }} />
              </Map>
            </div>
          </APIProvider>

          <div className="w-[466px] text-slate-800 text-base font-normal font-['Noto_Sans_JP'] self-start" 
               dangerouslySetInnerHTML={{ __html: `〒1210823 東京都足立区伊興4丁目2-27<br/>東武スカイツリー線 竹の塚駅 徒歩7分<br/>コンビニ徒歩2分<br/>スーパー徒歩7分<br/>商業ストリート徒歩10分<br/><br/>お問合せ先電話番号: 080-6661-9441(日本語JJapanese)<br/>お問合せ先電話番号: 090-6856-0433(英語English)<br/>お問合せ先メールアドレス: opf@s-kenchiku.jp` }} />
        </div>
      </div>
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
              <span className="absolute left-[19.28px] top-[162.62px] text-stone-50 text-2xl font-normal font-['Kaisei_Tokumin'] leading-10">{service.title}</span>
              <span className="absolute left-[19.28px] top-[200px] text-stone-50 text-base font-normal font-['Noto_Sans_JP']">{service.description}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <button className=" w-64 h-14 bg-orange-50 rounded-[10px] border-[3px] border-gray-600">
          <span className=" w-28 h-7 text-slate-800 text-2xl font-medium font-['Noto_Sans_JP'] uppercase tracking-wider">RESERVE</span>
        </button>
      </div>
    </section>


    {/* Socials Section */}
    <section className="w-full h-[925px] bg-stone-50">
      <div className="flex flex-col items-center">
        <h2 className="text-center text-slate-800 text-5xl font-normal font-['Kaisei_Tokumin'] mb-12">
          Socials
        </h2>
        
        <div className="flex flex-row space-x-6">
          <Link href="https://www.instagram.com/onepointfivehotel/" target="_blank" className="flex items-center space-x-4">
            <Image src="/images/icons/instagram.svg" alt="Instagram" width={30} height={30} />
            <span className="text-slate-800 text-2xl font-medium font-['Noto_Sans_JP'] uppercase tracking-wider">ONEPOINTFIVEHOTEL</span>
          </Link>

          <Link href="https://www.facebook.com/onepointfive/" target="_blank" className="flex items-center space-x-4">
            <Image src="/images/icons/line.svg" alt="Facebook" width={30} height={30} />
            <span className="text-slate-800 text-2xl font-medium font-['Noto_Sans_JP'] uppercase tracking-wider">ONEPOINTFIVEHOTEL</span>
          </Link>
        </div>

        <div className="mt-12 gap-4 flex flex-row items-center justify-center">
          <InstagramEmbed url="https://www.instagram.com/p/DMerKPkz5_h/" />
          <InstagramEmbed url="https://www.instagram.com/p/DL9N7LgTSDV/" />
          <InstagramEmbed url="https://www.instagram.com/p/DLY-AOATUP6/?img_index=3" />
        </div>
      </div>
    </section>

    <InquiryForm />
    </>
  );
}



