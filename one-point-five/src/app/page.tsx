'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import InstagramEmbed from '@/components/InstagramEmbed';
import InquiryForm from '@/components/InquiryForm';
import { services, amenities, rooms, nearbyLocations, heroImages, socialLinks, instagramEmbeds, mapConfig } from '@/config/data';




export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState<number>(0); // Default to Ueno Museum (index 0)
  const [currentImage, setCurrentImage] = useState(0);

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
            className={`object-cover transition-all duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            priority = {index == 0} />
        ))}
        <div className="absolute inset-0 flex items-center justify-center z-10 pt-16 md:pt-0">
          <Image src="/images/headerlogo.png" alt="One Point Five Logo" width={800} height={200} className="opacity-90 brightness-0 invert drop-shadow-2xl w-[85%] md:w-[90%] max-w-[600px] md:max-w-[800px] h-auto"/>
        </div>
      </div>


      {/* Amenities Section */}
      <section id="amenities" className="py-16 md:py-24 scroll-mt-16 md:scroll-mt-20">
        <div className="container mx-auto px-4 flex flex-col w-full min-h-[300px] md:h-[429px]">
          <div className="text-center justify-center text-slate-800 text-4xl underline decoration-1 md:text-5xl font-normal font-['Kaisei_Tokumin'] mb-8 md:mb-30 drop-shadow-lg">
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


      {/* Rooms Section */}
      {/* fix padding size for each header */}
      <section id="rooms" className="py-16 md:py-24 scroll-mt-16 md:scroll-mt-20">
        <div className="container mx-auto px-4 flex flex-col items-center h-min-content md:h-[3326px]">
          <div className="justify-center text-slate-800 text-4xl underline decoration-1 md:text-5xl text-center font-normal font-['Kaisei_Tokumin'] drop-shadow-lg mb-8">
            Rooms
          </div>

          {rooms.map((room, index) => (
            <div key={index} className="relative w-full max-w-[1240px] h-[200px] md:h-[726.54px] aspect-[1240/726.54] mt-6 md:mt-10 drop-shadow-xl rounded-lg overflow-hidden">
              <Image src={`/images/${room.number}.png`} fill className="object-cover rounded-lg" alt={`Room ${room.number}`}/>
              <div className="absolute w-32 h-20 md:w-64 md:h-44 mt-4 md:mt-[32.55px] ml-4 md:ml-[34.03px] justify-center text-slate-800 text-4xl md:text-8xl font-black font-['Noto_Sans_JP'] [text-shadow:_2px_2px_4px_rgb(252_249_249_/_1.00)] z-10">
                {room.number}
              </div>

                         <div className="absolute w-[300px] md:w-[726.54px] h-auto mt-16 md:mt-[152.72px] ml-4 md:ml-[34.03px] justify-center text-orange-50 text-2xl md:text-5xl font-normal font-['Kaisei_Tokumin'] z-10 drop-shadow-lg">
               <div className="mb-2 md:mb-4">
                 {room.description}
               </div>
               <Link href={`/rooms#room-${room.number}`} className="block text-orange-50 text-base md:text-xl font-normal font-['Noto_Sans_JP'] underline drop-shadow-md hover:text-orange-200 transition-colors duration-200">
                 Details Here
               </Link>
             </div>
          </div>
          ))}
      </div>
    </section>


    {/* Map Section */} 
    <section id="map" className="w-full min-h-[600px] md:h-[775px] bg-stone-50 scroll-mt-16 md:scroll-mt-20">
      <div className="pt-8 text-center text-slate-800 text-4xl underline decoration-1 md:text-5xl font-normal font-['Kaisei_Tokumin'] drop-shadow-lg">
        Map
      </div>

      {/* Placeholder for Map */}
      <div className="flex flex-col md:flex-row justify-center items-start mt-6 md:mt-10 px-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full max-w-[1300px] mx-auto">
          <APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY!}>
            <div className="w-full md:w-[756px] h-[300px] md:h-[505px] drop-shadow-xl">
              <Map
                defaultCenter={mapConfig.center}
                defaultZoom={mapConfig.zoom}
                style={{ height: '100%', width: '100%' }}
              >
                <Marker position={mapConfig.center} />
              </Map>
            </div>
          </APIProvider>
          {/* fix text wrap */}
          <div className="w-full md:w-[466px] text-slate-800 text-sm md:text-base text-wrap-pretty font-normal font-['Noto_Sans_JP'] self-start drop-shadow-sm mt-4 md:mt-0" 
               dangerouslySetInnerHTML={{ __html: mapConfig.address }} />
        </div>
      </div>
    </section>

    

    {/* Explore Nearby Section */}
    <section id="explore-nearby" className="bg-stone-50 py-16 md:py-24 scroll-mt-16 md:scroll-mt-20">
      <div className="container w-full mx-auto px-4">
        <h2 className="text-4xl underline decoration-1 md:text-5xl font-normal font-['Kaisei_Tokumin'] text-center text-slate-800 mb-8 md:mb-12 drop-shadow-lg">
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
    <section id="services" className="w-full min-h-[600px] md:h-[733px] bg-stone-50 py-16 md:py-24 scroll-mt-16 md:scroll-mt-20">
      <h2 className="text-center text-slate-800 text-4xl underline decoration-1 md:text-5xl font-normal font-['Kaisei_Tokumin'] drop-shadow-lg">
        Services
      </h2>
      
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
    <section id="socials" className="w-full min-h-[700px] md:h-[925px] bg-stone-50 py-16 md:py-24 scroll-mt-16 md:scroll-mt-20">
      <div className="flex flex-col items-center">
        <h2 className="text-center text-slate-800 text-4xl underline decoration-1 md:text-5xl font-normal font-['Kaisei_Tokumin'] mb-8 md:mb-12 drop-shadow-lg">
          Socials
        </h2>
        
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          {socialLinks.map((social, index) => (
            <Link key={index} href={social.url} target="_blank" className="flex items-center justify-center space-x-4 drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300">
              <Image src={social.icon} alt={social.name} width={30} height={30} />
              <span className="text-slate-800 text-lg md:text-2xl font-medium font-['Noto_Sans_JP'] uppercase tracking-wider">{social.displayName}</span>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:mt-12 gap-4 flex flex-col md:flex-row items-center justify-center">
          {instagramEmbeds.map((url, index) => (
            <InstagramEmbed key={index} url={url} />
          ))}
        </div>
      </div>
    </section>

    <div id="inquiry" className="scroll-mt-16 md:scroll-mt-20">
      <InquiryForm />
    </div>
    </>
  );
}



