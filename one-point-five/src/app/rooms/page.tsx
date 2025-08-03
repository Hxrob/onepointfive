'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import BookingForm from '@/components/BookingForm';
import { roomsDetailed, amenities, heroImages, defaultSelectedImages, penaltyFees } from '@/config/data';


export default function RoomsPage() {
    const [currentImage, setCurrentImage] = useState(0);
    const [selectedImages, setSelectedImages] = useState<Record<number, number>>(defaultSelectedImages);

    const handleImageSelect = (roomNumber: number, imageIndex: number) => {
        setSelectedImages(prev => ({
            ...prev,
            [roomNumber]: imageIndex
        }));
    };

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
            <h1 className="absolute inset-0 flex items-center justify-center text-stone-50 text-4xl md:text-9xl font-normal font-['Kaisei_Tokumin'] z-10">Rooms</h1>
        </section>

        <section className="mb-32">
        {roomsDetailed.map((room, roomIndex) => (
            <section id={`room-${room.number}`} key={room.number} className="w-full min-h-[800px] md:h-[1000px] bg-stone-50 flex items-center justify-center py-8 md:py-0">
                <div className="container mx-auto px-4 flex flex-col w-full max-w-[989px] min-h-[600px] md:h-[710px]">
                    <span className="text-slate-800 text-3xl md:text-5xl font-normal font-['Kaisei_Tokumin'] mb-4">Room {room.number}</span>
                    <span className="justify-start text-stone-700 text-xl md:text-3xl font-normal font-['Noto_Sans_JP'] leading-8 md:leading-[60px] mb-6 md:mb-4 whitespace-pre">{room.description}</span>

                    <div className="flex flex-col md:flex-row gap-6 w-full mb-6 md:mb-4">
                        <span className="w-full md:w-1/2 justify-start text-slate-800 text-sm md:text-base font-normal font-['Noto_Sans_JP']" dangerouslySetInnerHTML={{ __html: room.text }} />

                        <div className="w-full md:w-1/2 bg-stone-50 mb-4">
                            {/* Amenities icons */}
                            <div className="flex flex-col space-y-2 md:space-y-0">
                                {amenities.map((amenity, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <Image src={amenity.icon} alt={amenity.name} width={20} height={20} className="md:w-6 md:h-6" />
                                        <span className="text-slate-800 text-base md:text-lg font-normal font-['Noto_Sans_JP']">{amenity.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Image Gallery Section */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full mb-8">
                        {/* Large Image Display */}
                        <div className="relative w-full md:w-[850px] h-[300px] md:h-[545px] bg-gray-100 rounded-lg overflow-hidden"> 
                            {room.images.map((image, index) => (
                                <Image 
                                    key={index}
                                    src={image} 
                                    alt={`Room ${room.number} - Image ${index + 1}`}
                                    fill 
                                    className={`object-cover transition-all duration-500 ease-in-out ${
                                        selectedImages[room.number] === index 
                                            ? 'opacity-100 z-10' 
                                            : 'opacity-0 z-0'
                                    }`}
                                />
                            ))}
                        </div>

                        <div className="flex flex-row md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-x-visible">
                            {room.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleImageSelect(room.number, index)}
                                    className={`relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] overflow-hidden transition-all duration-200 flex-shrink-0 ${
                                        selectedImages[room.number] === index
                                            ? 'ring-2 ring-blue-500 opacity-100'
                                            : 'opacity-70 hover:opacity-100'
                                    }`}
                                >
                                <Image src={image} alt={`Room ${room.number} Image`} fill className="object-cover"/>
                                </button>
                            ))}
                        </div>
                    </div> 
                </div>
            </section>
        ))}
        </section>

        {/* Additional Fees Section */}
        <section className="w-full bg-[#3E3633] pt-32 pb-24">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-white text-4xl md:text-5xl font-normal font-['Kaisei_Tokumin'] mb-[30px] underline decoration-1">
                        Additional Fees
                    </h2>
                    <div className="flex flex-col gap-4 md:pl-8">
                        <div className="flex flex-col gap-8">
                            {penaltyFees.map((fee, index) => (
                                <div key={index} className="flex flex-col gap-4">
                                    <div className="flex gap-2 justify-center md:justify-start">
                                        <Image src={fee.icon} alt={fee.title} width={35} height={35} />
                                        <p className="text-stone-50 text-2xl font-medium font-['Noto_Sans_JP'] uppercase tracking-wider">
                                            {fee.title}
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-stone-50 text-base font-normal font-['Noto_Sans_JP'] text-center md:text-left md:pl-[50px]" dangerouslySetInnerHTML={{ __html: fee.description }} />
                                    </div>
                                </div>
                            ))}
                        </div>

                </div>
                </div>

                <div className="mb-16">
                </div>
            </div>
        </section>

        <section id="booking">
            <BookingForm />
        </section>
        </>
    );
}

