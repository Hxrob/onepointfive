'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import BookingForm from '@/components/BookingForm';


export default function RoomsPage() {
    const [selectedImages, setSelectedImages] = useState<Record<number, number>>({
        201: 0,
        202: 0,
        203: 0,
        204: 0
    });

    const handleImageSelect = (roomNumber: number, imageIndex: number) => {
        setSelectedImages(prev => ({
            ...prev,
            [roomNumber]: imageIndex
        }));
    };

    const rooms = [
        {number: 201, description: "Double Bed Room", text: "ダブルベッド<br/>ゆったり寝たい方や<br/>お子様との添い寝におおすすめ<br/><br/>基本料金&nbsp;&nbsp;&nbsp;&nbsp;1泊16,500円<br/>定員&nbsp;&nbsp;&nbsp;1名(最大3名)", images: ['/images/rooms/201-1.jpg', '/images/rooms/201-2.jpg', '/images/rooms/201-3.jpg', '/images/rooms/201-4.jpg', '/images/rooms/201-5.jpg']},
        {number: 202, description: "Single Bed Room with Working Desk", text: "デスクあり<br/>ビジネスマンや学生におすすめ<br/><br/>基本料金&nbsp;&nbsp;&nbsp;&nbsp;1泊14,700円<br/>定員&nbsp;&nbsp;&nbsp;1名(最大2名)", images: ['/images/rooms/202-1.jpg', '/images/rooms/202-2.jpg', '/images/rooms/202-3.jpg', '/images/rooms/202-4.jpg', '/images/rooms/202-5.jpg']},
        {number: 203, description: "Single Bed Room with Tatami", text: "畳と折り畳みテーブル付き<br/><br/>畳で寝転ぶこともできて和風な部屋です。<br/><br/>基本料金&nbsp;&nbsp;&nbsp;&nbsp;1泊14,700円<br/>定員 &nbsp;&nbsp;&nbsp;1名(最大2名)", images: ['/images/rooms/203-1.jpg', '/images/rooms/203-2.jpg', '/images/rooms/203-3.jpg', '/images/rooms/203-4.jpg', '/images/rooms/203-5.jpg']},
        {number: 204, description: "Twin Bed Room", text: "ツインベッド<br/>2名まで同額料金なので、2名ですとお得です。<br/><br/>基本料金&nbsp;&nbsp;&nbsp;&nbsp;1泊21,000円<br/>定員&nbsp;&nbsp;&nbsp;&nbsp;2名(最大3名)", images: ['/images/rooms/204-1.jpg', '/images/rooms/204-2.jpg', '/images/rooms/204-3.jpg', '/images/rooms/204-4.jpg', '/images/rooms/204-5.jpg']},
    ]

    const amenities = [
        { icon: '/images/wifi.svg', name: 'Free Wi-Fi' },
        { icon: '/images/kitchen.svg', name: 'Kitchen Space' },
        { icon: '/images/bathtub.svg', name: 'Shower and Bath' },
        { icon: '/images/laundry.svg', name: 'Washing Machine' }
    ];



    return (
        <>
        <section className="relative w-full h-screen">
            <Image src="/images/frontpage.jpg" alt="One Point Five Front Entrance" fill className="object-cover"/>
            <h1 className="absolute inset-0 flex items-center justify-center text-stone-50 text-9xl font-normal font-['Kaisei_Tokumin'] z-10">Rooms</h1>
        </section>


        {rooms.map((room, roomIndex) => (
            <section key={room.number} className="w-full h-[1000px] bg-stone-50 flex items-center justify-center">
                <div className="container mx-auto px-4 flex flex-col w-[989px] h-[710px]">
                    <span className="text-slate-800 text-5xl font-normal font-['Kaisei_Tokumin']">Room {room.number}</span>
                    <span className="justify-start text-stone-700 text-3xl font-normal font-['Noto_Sans_JP'] leading-[60px] mb-4 whitespace-pre">{room.description}</span>


                    <div className="flex gap-6 w-full mb-4">
                        <span className="w-1/2 justify-start text-slate-800 text-base font-normal font-['Noto_Sans_JP']" dangerouslySetInnerHTML={{ __html: room.text }} />

                        <div className="w-1/2 bg-stone-50 mb-4">
                            {/* Amenities icons */}
                            <div className="flex flex-col">
                                {amenities.map((amenity, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <Image src={amenity.icon} alt={amenity.name} width={24} height={24} />
                                        <span className="text-slate-800 text-lg font-normal font-['Noto_Sans_JP']">{amenity.name}</span>
                                    </div>
                                    
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Image Gallery Section */}
                    <div className="flex gap-6 w-full mb-8">
                        {/* Large Image Display */}
                        <div className="relative w-[850px] h-[545px] bg-gray-100 rounded-lg overflow-hidden"> 
                            <Image 
                                src={room.images[selectedImages[room.number]]} 
                                alt={`Room ${room.number} - Image ${selectedImages[room.number] + 1}`}
                                fill 
                                className="object-cover transition-opacity duration-300"
                            />
                        </div>

                        <div className="flex flex-col gap-3">
                            {room.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleImageSelect(room.number, index)}
                                    className={`relative w-[100px] h-[100px] overflow-hidden transition-all duration-200 ${
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
        <BookingForm />
        </>
    );
}

