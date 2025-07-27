import Link from 'next/link';
import Image from 'next/image';

export default function NearbyPage() {
    const locations = [
        {name: "Ueno Museum", image: "/images/ueno-museum.png", description: "Our hotel is close to a popular city for tourists, containing a large variety of things such as zoos to museums. There are multiple museums in Ueno and most of them offer a student discount. So if you happen to be a student traveling to Tokyo, make sure to bring it with you!", guideUrl: "https://www.instagram.com/onepointfivehotel/", websiteUrl: "https://www.ueno-museum.jp"},
        {name: "Toneri Park", image: "/images/toneri-park.png", description: "A beautiful large park perfect for morning walks, jogging, and family picnics. Toneri Park offers seasonal cherry blossoms in spring and beautiful autumn colors. It's a great place to experience nature without leaving the city.", guideUrl: "https://www.instagram.com/onepointfivehotel/", websiteUrl: "https://www.tokyo-park.or.jp/park/format/index020.html"},
        {name: "EQUIA", image: "/images/equia.png", description: "A vibrant shopping and entertainment district with modern facilities, restaurants, and cultural experiences. EQUIA offers a perfect blend of traditional Japanese culture and contemporary urban lifestyle.", guideUrl: "https://www.instagram.com/onepointfivehotel/", websiteUrl: "https://www.equia.jp"}
    ];

    return (
         <>
            <section className="relative w-full h-screen">
                <Image src="/images/frontpage.jpg" alt="One Point Five Front Entrance" fill className="object-cover"/>
                <h1 className="absolute inset-0 flex items-center justify-center text-stone-50 text-9xl font-normal font-['Kaisei_Tokumin'] z-10">Explore Nearby</h1>
            </section>

            {/* Locations Content */}
            <section className="bg-stone-50 py-16">
                <div className="container mx-auto px-8 max-w-7xl">
                    {locations.map((location, index) => (
                        <div key={index} className={`flex items-center gap-12 mb-24 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                            {/* Image */}
                            <div className="flex-shrink-0">
                                <div className="relative w-[580px] h-[520px] rounded-lg overflow-hidden shadow-lg">
                                    <Image 
                                        src={location.image} 
                                        alt={location.name} 
                                        fill 
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-8">
                                <h2 className="text-slate-800 text-6xl font-normal font-['Kaisei_Tokumin']">
                                    {location.name}
                                </h2>
                                
                                <p className="text-slate-700 text-lg font-normal font-['Noto_Sans_JP'] leading-relaxed">
                                    {location.description}
                                </p>

                                {/* Buttons */}
                                <div className="flex flex-col gap-4 max-w-xs">
                                    <Link 
                                        href={location.guideUrl} 
                                        target="_blank"
                                        className="flex items-center justify-center gap-3 bg-[#466362] hover:bg-[#3b4c4f] text-white py-3 px-6 rounded-md transition-colors duration-200"
                                    >
                                        <Image src="/images/icons/instagram.svg" alt="Instagram" width={20} height={20} className="invert"/>
                                        <span className="text-base font-medium font-['Noto_Sans_JP'] uppercase tracking-wider">
                                            VIEW OUR GUIDE
                                        </span>
                                    </Link>

                                    <Link 
                                        href={location.websiteUrl} 
                                        target="_blank"
                                        className="flex items-center justify-center gap-3 bg-transparent border-2 border-[#466362] text-[#466362] hover:bg-[#466362] hover:text-white py-3 px-6 rounded-md transition-colors duration-200"
                                    >
                                        <span className="text-base font-medium font-['Noto_Sans_JP'] uppercase tracking-wider">
                                            WEBSITE
                                        </span>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
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