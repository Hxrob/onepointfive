// Static data configuration for One Point Five Hotel

export const services = [
  { 
    src: '/images/baggage.jpg', 
    alt: 'Baggage Service', 
    title: 'Baggage Service', 
    link: 'https://www.instagram.com/p/DMerKPkz5_h/'
  },
  { 
    src: '/images/matcha.png', 
    alt: 'Matcha and Tea Set', 
    title: 'Matcha and Tea Set', 
    link: 'https://www.instagram.com/p/C8ylE_ty4XY/?img_index=1'
  },
  { 
    src: '/images/manga.png', 
    alt: 'Manga', 
    title: 'Manga', 
    link: 'https://www.instagram.com/p/DGekQDCSRo6/'
  },
  { 
    src: '/images/photos.png', 
    alt: 'Photo Tour', 
    title: 'Photography Tours', 
    link: 'https://www.instagram.com/p/C88vgbySOW2/'
  }
];

export const amenities = [
  { icon: '/images/wifi.svg', name: 'Free Wi-Fi' },
  { icon: '/images/kitchen.svg', name: 'Kitchen Space' },
  { icon: '/images/bathtub.svg', name: 'Shower and Bath' },
  { icon: '/images/laundry.svg', name: 'Washing Machine' }
];

export const rooms = [
  { number: 201, description: "Double Bed Room" },
  { number: 202, description: "Single Bed Room with Working Desk" },
  { number: 203, description: "Single Bed Room with Tatami" },
  { number: 204, description: "Twin Bed Room" }
];

export const nearbyLocations = [
  { name: "Ueno Park", image: "/images/ueno-museum.png", id: "ueno-museum", description: "The Ueno Park is home to six museums, one being Tokyo National Museum (pictured). Our hotel is close to a popular city for tourists, containing a large variety of things such as zoos to museums and most of them offer a student discount. So if you happen to be a student traveling to Tokyo, make sure to bring it with you!", guideUrl: "https://www.instagram.com/p/C-pESk6y942/?img_index=1", websiteUrl: "https://www.kensetsu.metro.tokyo.lg.jp/jimusho/toubuk/ueno" },
  { name: "Toneri Park", image: "/images/toneri-park.png", id: "toneri-park", description: "A beautiful large park perfect for morning walks, jogging, and family picnics. Toneri Park offers seasonal cherry blossoms in spring and beautiful autumn colors. It's a great place to experience nature without leaving the city.", guideUrl: "https://www.instagram.com/p/C5w_BAcS1am/?img_index=1", websiteUrl: "https://www.tokyo-park.or.jp/park/format/index020.html" },
  { name: "EQUIA", image: "/images/equia.png", id: "equia", description: "A vibrant shopping and entertainment district with modern facilities, restaurants, and cultural experiences. EQUIA offers a perfect blend of traditional Japanese culture and contemporary urban lifestyle.", guideUrl: "https://www.instagram.com/p/DLWcubYTIqm/?img_index=1", websiteUrl: "https://www.equia.jp" },
  { name: "Seiyu", image: "/images/seiyu.jpg", id: "seiyu", description: "A local supermarket chain offering a wide range of groceries, household items, and daily necessities. Seiyu is known for its affordable prices and convenient locations, making it a go-to place for locals.", guideUrl: "https://www.instagram.com/p/DLY-AOATUP6/?img_index=1", websiteUrl: "https://www.seiyu.co.jp" },
  { name: "Uruma Jima", image: "/images/uruma-jima.jpg", id: "uruma-jima", description: "A local Okinawan restaurant known for its delicious and authentic Okinawan cuisine. Uruma Jima offers a cozy atmosphere and a taste of traditional Okinawan dishes, making it a must-visit for food lovers.", guideUrl: "https://www.instagram.com/p/DDgl3WBSP4N/?img_index=1", websiteUrl: "https://www.hotpepper.jp/strJ000860709/" },
  { name: "Koreantown Shin-Okubo", image: "/images/shin-okubo.jpg", id: "shin-okubo",  description: "A vibrant neighborhood known for its Korean culture, food, and entertainment. Koreantown Shin-Okubo offers a unique experience with Korean restaurants, shops, and cultural events, making it a popular destination for both locals and tourists.", guideUrl: "https://www.instagram.com/p/C8BwajhSA5T/?img_index=1", websiteUrl: "https://www.tripadvisor.com/Attraction_Review-g1066457-d1497818-Reviews-Shin_Okubo_Korean_Town-Shinjuku_Tokyo_Tokyo_Prefecture_Kanto.html" }
];

export const heroImages = [
  '/images/frontpage.jpg',
  '/images/frontpage-night.jpg'
];

export const roomsDetailed = [
  {
    number: 201, 
    description: "Double Bed Room", 
    text: `Recommended for those who want a relaxing double bed or sleeping with children.<br/><br/>Price: ${process.env.NEXT_PUBLIC_ROOM_201_PRICE || '16,500'} yen per night<br/>Capacity: 1 person (maximum of 3 people)`, 
    images: [
      '/images/rooms/201-1.jpg', 
      '/images/rooms/201-2.jpg', 
      '/images/rooms/201-3.jpg', 
      '/images/rooms/201-4.jpg', 
      '/images/rooms/201-5.jpg'
    ]
  },
  {
    number: 202, 
    description: "Single Bed Room with Working Desk", 
    text: `Equipped with a desk. Recommended for businessmen and students.<br/><br/>Price: ${process.env.NEXT_PUBLIC_ROOM_202_PRICE || '14,700'} yen per night<br/>Capacity: 1 person (maximum of 2 people)`, 
    images: [
      '/images/rooms/202-1.jpg', 
      '/images/rooms/202-2.jpg', 
      '/images/rooms/202-3.jpg', 
      '/images/rooms/202-4.jpg', 
      '/images/rooms/202-5.jpg'
    ]
  },
  {
    number: 203, 
    description: "Single Bed Room with Tatami", 
    text: `Japanese-style room with tatami mats and folding tables.<br/><br/>Price: ${process.env.NEXT_PUBLIC_ROOM_203_PRICE || '14,700'} yen per night<br/>Capacity: 1 person (maximum of 2 people)`, 
    images: [
      '/images/rooms/203-1.jpg', 
      '/images/rooms/203-2.jpg', 
      '/images/rooms/203-3.jpg', 
      '/images/rooms/203-4.jpg', 
      '/images/rooms/203-5.jpg'
    ]
  },
  {
    number: 204, 
    description: "Twin Bed Room", 
    text: `Twin beds are the same price for up to two people, so it's a great deal for two people.<br/><br/>Price: ${process.env.NEXT_PUBLIC_ROOM_204_PRICE || '21,000'} yen per night<br/>Capacity: 2 people (maximum of 3 people)`, 
    images: [
      '/images/rooms/204-1.jpg', 
      '/images/rooms/204-2.jpg', 
      '/images/rooms/204-3.jpg', 
      '/images/rooms/204-4.jpg', 
      '/images/rooms/204-5.jpg'
    ]
  }
];

export const homeNavItems = [
  { name: 'Amenities', href: '/#amenities' },
  { name: 'Rooms', href: '/#rooms' },
  { name: 'Map', href: '/#map' },
  { name: 'Explore Nearby', href: '/#explore-nearby' },
  { name: 'Services', href: '/#services' },
  { name: 'Socials', href: '/#socials' },
  { name: 'Contact', href: '/#inquiry' }
];

export const socialLinks = [
  {
    name: 'Instagram',
    icon: '/images/icons/instagram.svg',
    url: 'https://www.instagram.com/onepointfivehotel/',
    displayName: 'ONEPOINTFIVEHOTEL'
  },
  {
    name: 'Facebook',
    icon: '/images/icons/line.svg',
    url: 'https://www.facebook.com/onepointfive/',
    displayName: 'ONEPOINTFIVEHOTEL'
  }
];

export const instagramEmbeds = [
  'https://www.instagram.com/p/DMerKPkz5_h/',
  'https://www.instagram.com/p/DL9N7LgTSDV/',
  'https://www.instagram.com/p/DLY-AOATUP6/?img_index=3'
];

export const mapConfig = {
  center: { lat: 35.79638550079517, lng: 139.7871127100252 },
  zoom: 18,
  address: `〒1210823 4-2-27 Iko, Adachi-ku, Tokyo<br/>7 minute walk from Takenotsuka Station on the Tobu Skytree Line<br/>2 minute walk from convenience store<br/>7 minute walk from supermarket<br/>10 minute walk from commercial street<br/><br/>Contact number: 080-6661-9441 (Japanese}<br/>Contact number: 090-6856-0433 (English)<br/>Contact email address: opf@s-kenchiku.jp`
};

export const defaultSelectedImages = {
  201: 0,
  202: 0,
  203: 0,
  204: 0
}; 

export const penaltyFees = [
  {
    title: "Cancellations",
    icon: "/images/icons/cancel1.svg",
    description: "No-shows & same-day cancellations: No refund<br/>Cancel day before: No refund<br/>Seven day advance cancellation:  50% refund"
  },

  {
    title: "Check-in/Check-out Fees",
    icon: "/images/icons/clock1.svg",
    description: "Early check in (Before 15:00): 1500 yen per hour<br/>Late Check out (After 10:00: 1500 yen per 15 minutes"
  },

  {
    title: "Guest Fee",
    icon: "/images/icons/addguest1.svg",
    width: 30,
    description: "Additional Guest: 5500 yen per guest, per night (includes the extra mattress and linen)"
  }
];

