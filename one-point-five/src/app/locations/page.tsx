'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { heroImages } from '@/config/data';
import { nearbyLocations } from '@/config/data';

export default function NearbyPage() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImage(prev => (prev + 1) % heroImages.length);
        }, 6000);
      }, []);

    return (
         <>
            <section className="relative w-full h-screen">
                {heroImages.map((image, index) => (
                <Image key={index} src={image} alt="One Point Five Front Entrance" fill
                    className={`object-cover transition-all duration-1000 ease-in-out ${
                    index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                    priority = {index == 0} />
                ))}            
                <h1 className="absolute inset-0 flex items-center justify-center text-stone-50 text-4xl md:text-9xl font-normal font-['Kaisei_Tokumin'] z-10">Explore Nearby</h1>
            </section>

            {/* Locations Content */}
            <section className="bg-stone-50 py-8 md:py-16">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    {nearbyLocations.map((location, index) => (
                        <div key={index} id={location.id} className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12 md:mb-24 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} scroll-mt-20`}>
                            {/* Image */}
                            <div className="flex-shrink-0 w-full md:w-auto">
                                <div className="relative w-full md:w-[580px] h-[300px] md:h-[520px] rounded-lg overflow-hidden shadow-lg">
                                    <Image 
                                        src={location.image} 
                                        alt={location.name} 
                                        fill 
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-4 md:space-y-8 w-full">
                                <h2 className="text-slate-800 text-3xl md:text-6xl font-normal font-['Kaisei_Tokumin']">
                                    {location.name}
                                </h2>
                                
                                <p className="text-slate-700 text-base md:text-lg font-normal font-['Noto_Sans_JP'] leading-relaxed">
                                    {location.description}
                                </p>

                                {/* Buttons */}
                                <div className="flex flex-col gap-3 md:gap-4 w-full md:max-w-xs">
                                    <Link 
                                        href={location.guideUrl} 
                                        target="_blank"
                                        className="flex items-center justify-center gap-2 md:gap-3 bg-[#466362] hover:bg-[#3b4c4f] text-white py-2 md:py-3 px-4 md:px-6 rounded-md transition-colors duration-200"
                                    >
                                        <Image src="/images/icons/instagram.svg" alt="Instagram" width={18} height={18} className=" md:w-5 md:h-5" />
                                        <span className="text-sm text-[#FDF9EF] md:text-base font-medium font-['Noto_Sans_JP'] uppercase tracking-wider">
                                            VIEW OUR GUIDE
                                        </span>
                                    </Link>

                                    <Link 
                                        href={location.websiteUrl} 
                                        target="_blank"
                                        className="flex items-center justify-center gap-2 md:gap-3 bg-transparent border-2 border-[#466362] text-[#466362] hover:bg-[#466362] hover:text-white py-2 md:py-3 px-4 md:px-6 rounded-md transition-colors duration-200"
                                    >
                                        <span className="text-sm md:text-base font-medium font-['Noto_Sans_JP'] uppercase tracking-wider">
                                            WEBSITE
                                        </span>
                                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}