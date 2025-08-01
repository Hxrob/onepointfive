'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import InstagramEmbed from '@/components/InstagramEmbed';
import InquiryForm from '@/components/InquiryForm';


// Either round all image corners or none

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState<number>(0); // Default to Ueno Museum (index 0)
  const [currentImage, setCurrentImage] = useState(0);

  const services = [
    { src: '/images/bikerental.png', alt: 'Bike Rental', title: 'Bike Rental', link: 'https://www.instagram.com/p/DMerKPkz5_h/'},
    { src: '/images/matcha.png', alt: 'Matcha and Tea Set', title: 'Matcha and Tea Set', link: 'https://www.instagram.com/p/C8ylE_ty4XY/?img_index=1'},
    { src: '/images/manga.png', alt: 'Manga', title: 'Manga', link: 'https://www.instagram.com/p/DGekQDCSRo6/'},
    { src: '/images/photos.png', alt: 'Photo Tour', title: 'Photography Tours', link: 'https://www.instagram.com/p/C88vgbySOW2/'}
  ];

  const amenities = [
    { icon: '/images/wifi.svg', name: 'Free Wi-Fi' },
    { icon: '/images/kitchen.svg', name: 'Kitchen Space' },
    { icon: '/images/bathtub.svg', name: 'Shower and Bath' },
    { icon: '/images/laundry.svg', name: 'Washing Machine' }
  ];

  const rooms = [
    {number: 201, description: "Double Bed Room"},
    {number: 202, description: "Single Bed Room with Working Desk"},
    {number: 203, description: "Single Bed Room with Tatami"},
    {number: 204, description: "Twin Bed Room"},
  ];

  // Nearby locations data matching the /locations page
  const nearbyLocations = [
    { name: "Ueno Museum", image: "/images/ueno-museum.png", id: "ueno-museum" },
    { name: "Toneri Park", image: "/images/toneri-park.png", id: "toneri-park" },
    { name: "EQUIA", image: "/images/equia.png", id: "equia" },
    { name: "Seiyu", image: "/images/seiyu.jpg", id: "seiyu" },
    { name: "Uruma Jima", image: "/images/uruma-jima.jpg", id: "uruma-jima" },
    { name: "Koreantown Shin-Okubo", image: "/images/shin-okubo.jpg", id: "shin-okubo" }
  ];

  const heroImages = [
    '/images/frontpage.jpg',
    '/images/frontpage-night.png'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % heroImages.length);
    }, 6000);
  }, []);

  return (
    <>
      <div className="relative w-full h-screen">
        {heroImages.map((image, index) => (
          <Image key={index} src={image} alt="One Point Five Front Entrance" fill
            className={`object-cover transition-opacity duration-1000 fade-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            priority = {index == 0} />
        ))}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Image src="/images/headerlogo.png" alt="One Point Five Logo" width={800} height={200} className="opacity-90 brightness-0 invert drop-shadow-2xl w-[90%] max-w-[800px] h-auto"/>
        </div>
      </div>


      {/* Amenities Section */}
      <section id="amenities" className="py-12 md:py-24 mt-8 md:mt-16 scroll-mt-20">
        <div className="container mx-auto px-4 flex flex-col w-full min-h-[300px] md:h-[429px]">
          <div className="text-center justify-center text-slate-800 text-3xl md:text-5xl font-normal font-['Kaisei_Tokumin'] mb-8 md:mb-30 drop-shadow-lg">
            Amenities
          </div>

          <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-16">

            {amenities.map((amenity, index) => (
              <div key={index} className="flex flex-col items-center text-center w-full md:w-32">
                <div className="relative w-16 h-16 md:w-24 md:h-24 mb-4 drop-shadow-lg">
                  <Image src={amenity.icon} alt={amenity.name} fill className="object-contain"/>
                </div>
                <div className="w-full md:w-36 text-center justify-center text-slate-800 text-lg md:text-2xl font-normal font-['Kaisei_Tokumin'] leading-8 md:leading-10 drop-shadow-sm">
                  {amenity.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Rooms Section (add padding for link to go straight to header) */}
      <section id="rooms" className="scroll-mt-20">
        <div className="container mx-auto px-4 flex flex-col items-center min-h-[2000px] md:h-[3326px]">
          <div className="justify-center text-slate-800 text-3xl md:text-5xl text-center font-normal font-['Kaisei_Tokumin'] drop-shadow-lg mb-8">
            Rooms
          </div>

          {rooms.map((room, index) => (
            <div key={index} className="relative w-full max-w-[1240px] h-[400px] md:h-[726.54px] aspect-[1240/726.54] mt-6 md:mt-10 drop-shadow-xl">
              <Image src={`/images/${room.number}.png`} fill className="object-contain" alt={`Room ${room.number}`}/>
              <div className="absolute w-32 h-20 md:w-64 md:h-44 mt-4 md:mt-[32.55px] ml-4 md:ml-[34.03px] justify-center text-slate-800 text-4xl md:text-8xl font-black font-['Noto_Sans_JP'] [text-shadow:_2px_2px_4px_rgb(252_249_249_/_1.00)] z-10">
                {room.number}
              </div>

            <div className="absolute w-[300px] md:w-[726.54px] h-16 md:h-24 mt-16 md:mt-[152.72px] ml-4 md:ml-[34.03px] justify-center text-orange-50 text-2xl md:text-5xl font-normal font-['Kaisei_Tokumin'] z-10 drop-shadow-lg">
              {room.description}
            </div>

            <Link href={`/rooms#room-${room.number}`} className="absolute w-32 md:w-40 h-8 md:h-9 mt-32 md:mt-[276.3px] ml-4 md:ml-[34.03px] justify-center text-orange-50 text-base md:text-xl font-normal font-['Noto_Sans_JP'] underline drop-shadow-md">
              Details Here
            </Link>
          </div>
          ))}
      </div>
    </section>


    {/* Map Section, switch map info to English Text  */} 
    <section id="map" className="w-full min-h-[600px] md:h-[775px] bg-stone-50 scroll-mt-20">
      <div className="pt-8 text-center text-slate-800 text-3xl md:text-5xl font-normal font-['Kaisei_Tokumin'] drop-shadow-lg">
        Map
      </div>

      {/* Placeholder for Map */}
      <div className="flex flex-col md:flex-row justify-center items-start mt-6 md:mt-10 px-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full">
          <APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY!}>
            <div className="w-full md:w-[756px] h-[300px] md:h-[505px] drop-shadow-xl">
              <Map
                defaultCenter={{ lat: 35.79638550079517, lng: 139.7871127100252 }}
                defaultZoom={18}
                style={{ height: '100%', width: '100%' }}
              >
                <Marker position={{ lat: 35.79638550079517, lng: 139.7871127100252 }} />
              </Map>
            </div>
          </APIProvider>

          <div className="w-full md:w-[466px] text-slate-800 text-sm md:text-base font-normal font-['Noto_Sans_JP'] self-start drop-shadow-sm mt-4 md:mt-0" 
               dangerouslySetInnerHTML={{ __html: `〒1210823 東京都足立区伊興4丁目2-27<br/>東武スカイツリー線 竹の塚駅 徒歩7分<br/>コンビニ徒歩2分<br/>スーパー徒歩7分<br/>商業ストリート徒歩10分<br/><br/>お問合せ先電話番号: 080-6661-9441(日本語JJapanese)<br/>お問合せ先電話番号: 090-6856-0433(英語English)<br/>お問合せ先メールアドレス: opf@s-kenchiku.jp` }} />
               {/* "〒1210823 4-2-27 Iko, Adachi-ku, Tokyo
                  7 minutes walk from Takenotsuka Station on the Tobu Skytree Line
                  2 minutes walk from convenience store
                  7 minutes walk from supermarket
                  10 minutes walk from commercial street" */}
        </div>
      </div>
    </section>

    

    {/* Explore Nearby Section - Bookshelf style expanding spines */}
    <section id="explore-nearby" className="bg-stone-50 py-8 md:py-16 scroll-mt-20">
      <div className="container w-full mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-normal font-['Kaisei_Tokumin'] text-center text-slate-800 mb-8 md:mb-12 drop-shadow-lg">
          Explore Nearby
        </h2>
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-row items-end h-[250px] md:h-[400px] gap-1 md:gap-2 overflow-x-auto">
            {nearbyLocations.map((location, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                className={`relative transition-all duration-500 ease-in-out cursor-pointer flex-shrink-0
                  ${hoveredCard === index ? "w-[250px] md:w-[400px] z-20" : "w-12 md:w-16 z-10"}
                  h-[250px] md:h-[400px] rounded-xl overflow-hidden group
                  shadow-lg hover:shadow-2xl
                  flex flex-col justify-end
                  bg-[#1C2541]
                `}
                style={{
                  transitionProperty: "width, box-shadow, z-index",
                }}
              >
                {hoveredCard === index ? (
                  // Expanded card
                  <>
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6">
                      <h3 className="text-white text-2xl md:text-4xl font-bold font-['Kaisei_Tokumin'] drop-shadow-lg">
                        {location.name}
                      </h3>
                      <p className="text-white/90 text-sm md:text-base font-['Noto_Sans_JP'] mt-1 md:mt-2 drop-shadow-md">
                        Click to learn more
                      </p>
                    </div>
                  </>
                ) : (
                  // Book spine
                  <div className="flex flex-col items-center justify-center h-full w-full">
                    <span className="rotate-180 writing-vertical-lr text-white text-sm md:text-lg font-bold font-['Kaisei_Tokumin'] tracking-wider"
                      style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {location.name}
                    </span>
                  </div>
                )}
                {/* Optional: Add a subtle border or shadow for the active card */}
                {hoveredCard === index && (
                  <div className="absolute inset-0 ring-4 ring-white/40 pointer-events-none rounded-xl" />
                )}
              </div>
            ))}
          </div>
        </div>
        {/* View All Button */}
        <div className="flex justify-center mt-6 md:mt-8">
          <Link
            href="/locations"
            className="px-6 md:px-8 py-2 md:py-3 bg-[#466362] hover:bg-[#3b4c4f] text-white rounded-md transition-all duration-300 font-['Noto_Sans_JP'] text-base md:text-lg font-medium drop-shadow-lg hover:drop-shadow-xl hover:scale-105 transform"
          >
            VIEW ALL LOCATIONS
          </Link>
        </div>
      </div>
    </section>

    {/* Services Section */}
    <section id="services" className="w-full min-h-[600px] md:h-[733px] bg-stone-50 scroll-mt-20">
      <h2 className="text-center text-slate-800 text-3xl md:text-5xl font-normal font-['Kaisei_Tokumin'] drop-shadow-lg pt-8">
        Services
      </h2>
      
      {/* Add subtle drop shadow to bottom left of cards */}
      <div className="container mx-auto mt-16 md:mt-36">
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative w-full max-w-[280px] h-[250px] md:h-[305.38px] bg-slate-800 rounded-[10px] drop-shadow-2xl hover:drop-shadow-3xl transition-shadow duration-300 mx-auto mb-8 md:mb-0">
              <div className="absolute -top-[40px] md:-top-[57.12px] left-[20px] md:left-[29.46px] w-[240px] md:w-[265.04px] h-[160px] md:h-[207.22px] z-10 drop-shadow-lg">
                <Image className="w-full h-full rounded-[10px] object-cover" src={service.src} fill alt={service.alt} />
              </div>
              <span className="absolute left-[15px] md:left-[19.28px] top-[140px] md:top-[162.62px] text-stone-50 text-lg md:text-2xl font-normal font-['Kaisei_Tokumin'] leading-8 md:leading-10 drop-shadow-md">{service.title}</span>
              <Link href={service.link} className="absolute left-[15px] md:left-[19.28px] top-[170px] md:top-[200px] text-stone-50 text-sm md:text-base font-normal font-['Noto_Sans_JP'] underline drop-shadow-sm">Details Here</Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-12 md:mt-16">
        <button className="w-48 md:w-64 h-12 md:h-14 bg-orange-50 rounded-[10px] border-[3px] border-gray-600 cursor-pointer drop-shadow-lg hover:drop-shadow-xl transition-shadow duration-300" onClick={() => window.location.href = '#inquiry'}>
          <span className="text-slate-800 text-lg md:text-2xl font-medium font-['Noto_Sans_JP'] uppercase tracking-wider drop-shadow-sm">RESERVE</span>
        </button>
      </div>
    </section>


    {/* Socials Section */}
    <section id="socials" className="w-full min-h-[700px] md:h-[925px] bg-stone-50 scroll-mt-20">
      <div className="flex flex-col items-center py-8 md:py-0">
        <h2 className="text-center text-slate-800 text-3xl md:text-5xl font-normal font-['Kaisei_Tokumin'] mb-8 md:mb-12 drop-shadow-lg">
          Socials
        </h2>
        
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <Link href="https://www.instagram.com/onepointfivehotel/" target="_blank" className="flex items-center justify-center space-x-4 drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300">
            <Image src="/images/icons/instagram.svg" alt="Instagram" width={30} height={30} />
            <span className="text-slate-800 text-lg md:text-2xl font-medium font-['Noto_Sans_JP'] uppercase tracking-wider">ONEPOINTFIVEHOTEL</span>
          </Link>

          <Link href="https://www.facebook.com/onepointfive/" target="_blank" className="flex items-center justify-center space-x-4 drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300">
            <Image src="/images/icons/line.svg" alt="Facebook" width={30} height={30} />
            <span className="text-slate-800 text-lg md:text-2xl font-medium font-['Noto_Sans_JP'] uppercase tracking-wider">ONEPOINTFIVEHOTEL</span>
          </Link>
        </div>

        <div className="mt-8 md:mt-12 gap-4 flex flex-col md:flex-row items-center justify-center">
          <InstagramEmbed url="https://www.instagram.com/p/DMerKPkz5_h/" />
          <InstagramEmbed url="https://www.instagram.com/p/DL9N7LgTSDV/" />
          <InstagramEmbed url="https://www.instagram.com/p/DLY-AOATUP6/?img_index=3" />
        </div>
      </div>
    </section>

    <div id="inquiry" className="scroll-mt-20">
      <InquiryForm />
    </div>
    </>
  );
}



