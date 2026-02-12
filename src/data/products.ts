import prod1 from '@/assets/products/prod-1.png';
import prod2 from '@/assets/products/prod-2.png';
import prod3 from '@/assets/products/prod-3.png';
import prod4 from '@/assets/products/prod-4.png';
import prod5 from '@/assets/products/prod-5.png';
import prod6 from '@/assets/products/prod-6.png';
import prod7 from '@/assets/products/prod-7.png';
import prod8 from '@/assets/products/prod-8.png';
import prod9 from '@/assets/products/prod-9.png';
import prod10 from '@/assets/products/prod-10.png';
import prod11 from '@/assets/products/prod-11.png';
import prod12 from '@/assets/products/prod-12.png';
import prod13 from '@/assets/products/prod-13.png';
import prod14 from '@/assets/products/prod-14.png';
import prod15 from '@/assets/products/prod-15.png';
import prod16 from '@/assets/products/prod-16.png';
import prod17 from '@/assets/products/prod-17.png';
import prod18 from '@/assets/products/prod-18.png';
import prod19 from '@/assets/products/prod-19.png';
import prod20 from '@/assets/products/prod-20.png';
import prod21 from '@/assets/products/prod-21.png';
import prod22 from '@/assets/products/prod-22.png';
import prod23 from '@/assets/products/prod-23.png';
import prod24 from '@/assets/products/prod-24.png';
import prod25 from '@/assets/products/prod-25.png';
import prod26 from '@/assets/products/prod-26.png';
import prod27 from '@/assets/products/prod-27.png';
import prod28 from '@/assets/products/prod-28.png';
import prod29 from '@/assets/products/prod-29.png';
import prod30 from '@/assets/products/prod-30.png';
import prod31 from '@/assets/products/prod-31.png';
import prod32 from '@/assets/products/prod-32.png';
import prod33 from '@/assets/products/prod-33.png';
import prod34 from '@/assets/products/prod-34.png';
import prod35 from '@/assets/products/prod-35.png';

import image1 from "@/assets/products/image.png"
import image2 from "@/assets/products/image2.png"
import image3 from "@/assets/products/image3.png"
import image4 from "@/assets/products/image4.png"

import RFID from "@/assets/products/RFID.jpeg"
import hotelKeyCard from "@/assets/products/Hotel-key-card.jpeg"

export interface Product {
  id: string;
  name: string;
  category: string;
  shortSpec: string;
  description: string;
  wattage?: string;
  protection?: string;
  durability?: string;
  connectivity?: string;
  lumens?: string;
  colorTemp?: string;
  lifespan?: string;
  image: string;
  features: string[];
}


export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  { id: 'advait', name: 'Advait', description: 'Our ultra-premium series. The pinnacle of luxury and exclusivity, designed for those who settle for nothing but the best.', image: "" },
  { id: 'sparsh', name: 'Sparsh', description: 'Elegance at your fingertips. Our signature touch-interface series that redefines how you interact with your space.', image: prod3 },
  { id: 'uday', name: 'Uday', description: 'Uday makes smart living a reality for everyone. It’s the smart switch for the modern Indian family—reliable, elegant, and incredibly affordable.', image: prod25 },
  { id: 'kavach', name: 'Kavach', description: 'An unbreakable shield of smart security, ensuring your peace of mind 24/7.', image: prod27 },
  { id: 'aavarun', name: 'Aavarun', description: 'Automated transitions for your environment—from motorized curtains to scheduled moods that start your day.', image: image3 },
  { id: 'sahaj', name: 'Sahaj', description: 'Smart living made simple. A range of intuitive products designed to make automation accessible and effortless for everyone.', image: prod32 },
  { id: 'alok', name: 'Alok', description: 'Intelligent lighting solutions. Transform your ambiance with smart dimming, color scenes, and energy-efficient illumination.', image: "" },
  { id: 'atithi', name: 'Atithi', description: 'Our flagship Hotel Automation ecosystem, blending traditional hospitality with futuristic technology.', image: "" },
];

export const products: Product[] = [
  {
    id: 'd-2001',
    name: 'D-2001',
    category: 'sparsh',
    shortSpec: 'Single Button | Mini',
    description: 'Compact single-button scene switch for quick execution of smart home routines.',
    wattage: 'N/A',
    colorTemp: 'N/A',
    lumens: 'N/A',
    lifespan: 'N/A',
    image: prod3,
    features: ['Compact Design', 'Muti-click Support', 'WiFi/Zigbee', 'Easy Mount']
  },
  {
    id: 'd-2002',
    name: 'D-2002',
    category: 'sparsh',
    shortSpec: 'Glass Finish | WiFi',
    description: 'Elegant 4-button touch switch with LED indicator and WiFi for app control.',
    wattage: 'N/A',
    colorTemp: 'N/A',
    lumens: 'N/A',
    lifespan: 'N/A',
    image: prod1,
    features: ['WiFi Enabled', 'Tempered Glass', 'Indicator', 'Scene Support']
  },
  {
    id: 'd-2003',
    name: 'D-2003',
    category: 'sparsh',
    shortSpec: 'Glass Finish | WiFi',
    description: 'Elegant 4-button touch switch with LED indicator and WiFi for app control.',
    wattage: 'N/A',
    colorTemp: 'N/A',
    lumens: 'N/A',
    lifespan: 'N/A',
    image: prod2,
    features: ['WiFi Enabled', 'Tempered Glass', 'Indicator', 'Scene Support']
  },
  {
    id: 'd-4002',
    name: 'D-4002',
    category: 'sparsh',
    shortSpec: '12 Button | Scene Master',
    description: 'The ultimate scene controller with 12 customizable touch points for complex home automation.',
    wattage: 'N/A',
    colorTemp: 'N/A',
    lumens: 'N/A',
    lifespan: 'N/A',
    image: prod8,
    features: ['12 Gang Master', 'Scene Unlimited', 'Voice Compatible', 'Robust Build']
  },
  {
    id: 'd-4003',
    name: 'D-4003',
    category: 'sparsh',
    shortSpec: 'High Capacity | WiFi',
    description: 'Comprehensive 8-button touch panel for complete room control.',
    wattage: 'N/A',
    colorTemp: 'N/A',
    lumens: 'N/A',
    lifespan: 'N/A',
    image: prod4,
    features: ['8 Gang Control', 'Master Off', 'Custom Labels', 'Glass Panel']
  },
  {
    id: 'd-4004',
    name: 'D-4004',
    category: 'sparsh',
    shortSpec: 'Fan Regulation',
    description: 'Combined 8-button panel with dedicated fan speed and dimmer controls.',
    wattage: 'N/A',
    colorTemp: 'N/A',
    lumens: 'N/A',
    lifespan: 'N/A',
    image: prod5,
    features: ['Fan Regulation', 'Step-less Speed', 'Dimming', 'Touch Feedbak']
  },
  {
    id: 'd-4005',
    name: 'D-4005',
    category: 'sparsh',
    shortSpec: 'Glass Finish | WiFi',
    description: 'Elegant 4-button touch switch with LED indicator and WiFi for app control.',
    wattage: 'N/A',
    colorTemp: 'N/A',
    lumens: 'N/A',
    lifespan: 'N/A',
    image: prod6,
    features: ['WiFi Enabled', 'Tempered Glass', 'Indicator', 'Scene Support']
  },
  {
    id: 'd-4012',
    name: 'D-4012',
    category: 'sparsh',
    shortSpec: 'Elite Series | WiFi',
    description: 'Premium 8-gang switch from the Elite series with ultra-responsive touch.',
    wattage: 'N/A',
    colorTemp: 'N/A',
    lumens: 'N/A',
    lifespan: 'N/A',
    image: prod7,
    features: ['Premium Finish', 'Edge Glow', 'Surge Protection', 'App Sync']
  },
  {
    id: 'd-6012',
    name: 'D-6012',
    category: 'sparsh',
    shortSpec: 'Slim Design | WiFi',
    description: 'Sleek vertical-orientated touch switch for narrow spaces and modern aesthetics.',
    wattage: 'N/A',
    colorTemp: 'N/A',
    lumens: 'N/A',
    lifespan: 'N/A',
    image: prod9,
    features: ['Slim Profile', 'Vertical Mount', 'Anti-oxidation', 'WiFi Mesh']
  },
  {
    id: 'd-6014',
    name: 'D-6014',
    category: 'sparsh',
    shortSpec: 'Glass Finish | WiFi',
    description: 'Elegant 4-button touch switch with LED indicator and WiFi for app control.',
    wattage: 'N/A',
    colorTemp: 'N/A',
    lumens: 'N/A',
    lifespan: 'N/A',
    image: prod10,
    features: ['WiFi Enabled', 'Tempered Glass', 'Indicator', 'Scene Support']
  },
  {
    id: 'd-6013',
    name: 'D-6013',
    category: 'sparsh',
    shortSpec: 'Plus Series | WiFi',
    description: 'Enhanced 8-gang touch panel with improved touch sensitivity and feedback.',
    wattage: 'N/A',
    colorTemp: 'N/A',
    lumens: 'N/A',
    lifespan: 'N/A',
    image: prod11,
    features: ['Enhanced Touch', 'Cloud Connected', 'Timer Support', 'Glass Shell']
  },
  {
    id: 'd-6003',
    name: 'D-6003',
    category: 'sparsh',
    shortSpec: 'High Density | WiFi',
    description: 'High-density 1sparsh0-gang touch panel for extensive automation setups.',
    wattage: 'N/A',
    colorTemp: 'N/A',
    lumens: 'N/A',
    lifespan: 'N/A',
    image: prod12,
    features: ['10-Gang Control', 'Overload Protection', 'Status Sync', 'Voice Ready']
  },
  {
    id: 'd-6004',
    name: 'D-6004',
    category: 'sparsh',
    shortSpec: 'Multi-functional | WiFi',
    description: 'Versatile 12-gang panel combining standard switches with special utility icons.',
    wattage: 'N/A',
    colorTemp: 'N/A',
    lumens: 'N/A',
    lifespan: 'N/A',
    image: prod13,
    features: ['Utility Icons', '12 points', 'Fire Retardant', 'WiFi 6 Support']
  },
  {
    id: 'd-6005',
    name: 'D-6005',
    category: 'sparsh',
    shortSpec: 'Full Control | WiFi',
    description: 'Complete 12-button switchboard for full house automation in a single plate.',
    wattage: 'N/A',
    colorTemp: 'N/A',
    lumens: 'N/A',
    lifespan: 'N/A',
    image: prod14,
    features: ['12 Gang Std', 'Remote Monitoring', 'Child Lock', 'Tempered Glass']
  },
  {
    id: 'd-6002',
    name: 'D-6002',
    category: 'sparsh',
    shortSpec: 'Compact | Zigbee',
    description: 'Small footprint scene switch for minimalist interiors.',
    wattage: 'N/A',
    colorTemp: 'N/A',
    lumens: 'N/A',
    lifespan: 'N/A',
    image: prod15,
    features: ['Minimalist', 'Battery/Direct', 'Multi-press', 'App Config']
  },
  {
    id: 'd-8002',
    name: 'D-8002',
    category: 'sparsh',
    shortSpec: 'Glass | 1 Gang',
    description: 'Standard 1-gang glass touch switch for simple device control.',
    wattage: 'N/A',
    colorTemp: 'N/A',
    lumens: 'N/A',
    lifespan: 'N/A',
    image: prod16,
    features: ['Touch Only', 'Retrofit Ready', 'Indicator LED', 'Waterproof']
  },
  {
    id: 'd-8004',
    name: 'D-8004',
    category: 'sparsh',
    shortSpec: 'Glass | 2 Gang',
    description: 'Standard 2-gang glass touch switch for moderate device control.',
    wattage: 'N/A',
    colorTemp: 'N/A',
    lumens: 'N/A',
    lifespan: 'N/A',
    image: prod17,
    features: ['Dual Zone', 'Sleek Look', 'Instant Response', 'Easy Clean']
  },
  {
    id: 'd-8014',
    name: 'D-8014',
    category: 'sparsh',
    shortSpec: 'Glass Finish | WiFi',
    description: 'Elegant 4-button touch switch with LED indicator and WiFi for app control.',
    wattage: 'N/A',
    colorTemp: 'N/A',
    lumens: 'N/A',
    lifespan: 'N/A',
    image: prod20,
    features: ['WiFi Enabled', 'Tempered Glass', 'Indicator', 'Scene Support']
  },
  {
    id: 'd-8015',
    name: 'D-8015',
    category: 'sparsh',
    shortSpec: 'Glass | 3 Gang',
    description: 'Standard 3-gang glass touch switch for living space device control.',
    wattage: 'N/A',
    colorTemp: 'N/A',
    lumens: 'N/A',
    lifespan: 'N/A',
    image: prod18,
    features: ['Triple Zone', 'WiFi Module', 'Cloud Link', 'Scratch Resistant']
  },
  {
    id: 'd-8012',
    name: 'D-8012',
    category: 'sparsh',
    shortSpec: 'Glass | 4 Gang',
    description: 'Standard 4-gang glass touch switch for comprehensive device control.',
    wattage: 'N/A',
    colorTemp: 'N/A',
    lumens: 'N/A',
    lifespan: 'N/A',
    image: prod19,
    features: ['Quad Zone', 'App Control', 'Auto Off Timer', 'Silent Relay']
  },
  {
    id: '4-switches',
    name: '4-Switches',
    category: 'uday',
    shortSpec: 'Premium | WiFi',
    description: 'High-end multi-functional glass panel with luxury icons and finish.',
    wattage: '110V - 415V AC, 50/60Hz',
    protection: 'Up to 2.5 KV',
    durability: "1,00,000+ Touch Operations",
    connectivity: "Wifi/zipbee",
    colorTemp: 'Acrylic -white / Black ',
    image: prod21,
    features: ['Feather Touch', 'Voice Command', 'Mobile App Access', 'Remote Control']
  },
  {
    id: '1-switches',
    name: '1-Switches',
    category: 'uday',
    shortSpec: 'Retrofit | WiFi',
    description: 'Smart switch designed to fit existing electrical boxes without rewiring.',
    wattage: '110V - 415V AC, 50/60Hz',
    protection: 'Up to 2.5 KV',
    durability: "1,00,000+ Touch Operations",
    connectivity: "Wifi/zipbee",
    colorTemp: 'Acrylic -white / Black ',
    image: prod22,
    features: ['Feather Touch', 'Voice Command', 'Mobile App Access', 'Remote Control']
  },
  {
    id: 'fan-regulator',
    name: 'Fan Regulator',
    category: 'uday',
    shortSpec: 'Fan Control | WiFi',
    description: 'Digital fan regulator with smooth touch interface and remote control.',
    wattage: '110V - 415V AC, 50/60Hz',
    protection: 'Up to 2.5 KV',
    durability: "1,00,000+ Touch Operations",
    connectivity: "Wifi/zipbee",
    colorTemp: 'Acrylic -white / Black ',
    image: prod23,
    features: ['Feather Touch', 'Voice Command', 'Mobile App Access', 'Remote Control']
  },
  {
    id: 'wifi-in-wall-heavy-duty-p1',
    name: 'WIFI in wall heavy duty retrofit switch modules 1',
    category: 'uday',
    shortSpec: 'Control Box | Industrial',
    description: 'Heavy-duty relay control module for automated switching of high-power loads.',
    wattage: '110V - 415V AC, 50/60Hz',
    protection: 'Up to 2.5 KV',
    durability: "1,00,000+ Touch Operations",
    connectivity: "Wifi/zipbee",
    colorTemp: 'N/A',
    image: prod24,
    features: ['Voice Command', 'Mobile App Access', 'Remote Control']
  },
  {
    id: 'wifi-in-wall-heavy-duty',
    name: 'WIFI in wall heavy duty retrofit switch modules',
    category: 'uday',
    shortSpec: 'Control Box | Industrial',
    description: 'Heavy-duty relay control module for automated switching of high-power loads.',
    wattage: '110V - 415V AC, 50/60Hz',
    protection: 'Up to 2.5 KV',
    durability: "1,00,000+ Touch Operations",
    colorTemp: 'N/A',
    image: prod25,
    features: ['Voice Command', 'Mobile App Access', 'Remote Control']
  },
  {
    id: 'domotiq-r1-pro',
    name: 'Domotiq R1 Pro',
    category: 'kavach',
    shortSpec: 'Fingerprint | Keypad',
    description: 'Standard smart mortise lock with multiple unlock options for home security.',
    image: prod26,
    features: ['Fingerprint Unlock', 'RFID Card Unlock', 'Passcode Unlock', 'Low Battery Indication', 'Emergency Power', 'Mechanical Key Unlock', 'RX-TX Remote Support']
  },
  {
    id: 'domotiq-r1-pro-g',
    name: 'Domotiq R1 Pro-G',
    category: 'kavach',
    shortSpec: 'Bronze Finish | WiFi',
    description: 'Elegant bronze-finished smart lock with remote unlock support.',
    image: prod27,
    features: ['Fingerprint Unlock', 'RFID Card Unlock', 'Passcode Unlock', 'Low Battery Indication', 'Emergency Power', 'Mechanical Key Unlock', 'RX-TX Remote Support']
  },
  {
    id: 'domotiq-r3-pro',
    name: 'Domotiq R-3 Pro',
    category: 'kavach',
    shortSpec: 'Silver Finish | Camera',
    description: 'Advanced security lock featuring an integrated camera for visitor snapshots.',
    image: prod28,
    features: [
      'One Touch Automatic open and close mortise system',
      'Access by 3D Face Recognition, RFID Card, Fingerprint, Pass code, Key & App with 3.5" larger rear display inside & HD 1.3MP CAMERA for Video call on app',
      'Back-up USB external power supply interface, in case the power is dead',
      'Compatible with 6068 mortise & can be fitted most of the wooden or metal doors',
      'Inbuilt rechargeable 7.4V Lithium batteries',
      'Secure zinc Alloy+ABS, Anti-corrosion and sturdy ',
      'Active Smart Lock Bind Technology',
      'Compatible to Unlock with Domotiq Video Door Bell'
    ]
  },
  {
    id: 'domotiq-r4',
    name: 'Domotiq R-4',
    category: 'kavach',
    shortSpec: 'Video Screen | HD',
    description: 'High-end door lock with a built-in indoor screen for outside viewing.',
    image: prod29,
    features: [
      'One Touch Automatic open and close mortise system',
      'Access by 3D Face Recognition, RFID Card, Pass code, key, & APP with 3.5" larger rear display inside & HD 1.3MP Camera',
      'Back-up USB external power supply interface, in case the power is dead',
      'Compatible with 6068 mortise & can be fitted most of the wooden or metal door',
      'Inbuilt rechargeable 7.4V Lithium batteries',
      'Secure zinc alloy+ABS, Anti-corrosion and sturdy',
      'Active Smart Lock Bind Technology',
      'Compatible to Unlock with Domotiq Video Door Bell',
    ]
  },
  {
    id: 'domotiq-r5',
    name: 'Domotiq R-5',
    category: 'kavach',
    shortSpec: 'Full Series | Comparison',
    description: 'Comparison showcase of the flagship smart lock series featuring all available finishes.',
    image: prod30,
    features: [
      'Face ID, Fingerprint, Passcode, RFID Card, Mechanical keys & Remote App (Phlipton) Unlock',
      'You can add upto 200 Fingerprints, RFID & Passcode',
      '3.5 inch display on the Indoor Unit & 1.3 MP camera on Outdoor Unit',
      'You can see the visitor on the display monitor of the Indoor Unit through camera installed on the Outdoor Unit',
      '5 Heavy Duty Motorized latches',
      'Rechargeable Lithium Ion Battery',
      'External Micro USB Port for Emergency Power',
      'Hijacking Alarm',
      'Door thickness of 38–90 mm',
      'Privacy latch for added convenience',
      'Check past unlocking records through Phlipton App',
      'In-built bell & lock button on the Outdoor Unit with app notification',
      'Compatible to unlock with Domotiq Video Door Bell',
      'Active Smart Lock Bind Technology'
    ]
  },
  {
    id: 'domotiq-r7',
    name: 'Domotiq R-7',
    category: 'kavach',
    shortSpec: 'Slim Design | WiFi',
    description: 'Compact and slim profile smart lock perfect for modern aluminum or thin doors.',
    image: prod31,
    features: [
      '3D Face recognition, Fingerprint, Passcode, Palm Vein, Mechanical key, RFID card & Remote Phlipton App unlock',
      '4.5 inch IPS HD large screen on the indoor unit',
      '5 heavy duty motorized latches',
      'Rechargeable Lithium Ion battery',
      'Door thickness 38 mm – 110 mm',
      'In-built bell & lock button on the outdoor unit',
      'Check past unlocking records in Phlipton App',
      'External Micro USB port for Emergency Power',
      'Special CNC process of manufacturing',
      'Active Smart Lock Bind Technology',
      'Compatible to unlock with Domotiq Video Door Bell'
    ]
  },
  {
    id: 'domotiq-model-rb1-knob-style',
    name: 'Domotiq Model RB1 Knob style',
    category: 'kavach',
    shortSpec: 'Heavy Duty | Fingerprint',
    description: 'Solid mortise lock with semi-conductor fingerprint sensor for high-speed entry.',
    image: prod32,
    features: [
      'Material: Aluminium Alloy Casting',
      'Power Supply: 4 pcs AA Alkaline Batteries',
      'RB1 Colors: Black, Gold, Silver, Brown',
      'Unlock Methods: Card, Fingerprint, Passcode, Mobile App, Key',
      'Indoor knob unlocking design — gently twist the indoor knob for fast and convenient unlocking',
      'Hidden key unlocking hole — key can be used to unlock when the battery is out of power, practical and convenient'
    ]
  },
  {
    id: 'domotiq-model-rb2-dead-bolt-style',
    name: 'Domotiq Model RB2 dead Bolt Style',
    category: 'kavach',
    shortSpec: 'Dead Bolt Style | Pro',
    description: 'Professional grade dead bolt style smart lock with reinforced security points.',
    image: prod33,
    features: [
      'Material: Aluminium Alloy Casting',
      'Power Supply: 4 pcs AA Alkaline Batteries',
      'RB1 Colors: Black, Gold, Silver, Brown',
      'Unlock Methods: Card, Fingerprint, Passcode, Mobile App, Key',
      'Indoor knob unlocking design — gently twist the indoor knob for fast and convenient unlocking',
      'Hidden key unlocking hole — key can be used to unlock when the battery is out of power, practical and convenient'
    ]
  },
  {
    id: 'domotiq-glass-lock',
    name: 'Domotiq Glass Lock',
    category: 'kavach',
    shortSpec: 'Glass Door | No Drill',
    description: 'Specialized smart lock for glass doors with no-drill installation.',
    image: prod34,
    features: [
      'Material: Zinc alloy and acrylic keypad',
      'Power supply: 4 pcs AA alkaline batteries',
      'Unlock method: App, code, card, fingerprint, passcode',
      'Card capacity & fingerprint capacity: 150 pcs',
      'Application: Wooden door / Glass door / Aluminium door',
      'Glass door thickness requirement: 8–14 mm'
    ]
  },
  {
    id: 'domotiq-smart-video-door-bell-with-motion-sensor',
    name: 'Domotiq Smart Video Door Bell with Motion Sensor',
    category: 'sahaj',
    shortSpec: '3D Face ID | Flagship',
    description: 'Flagship smart lock with 3D structured sensor face recognition and video display.',
    image: prod35,
    features: [
      'Active Smart Lock Bind Technology to unlock through doorbell app user interface',
      '1080P Full HD high quality image',
      'IP65 waterproof rating, suitable for various complex weather conditions',
      'Optionally works with 12V DC power supply for stable performance',
      'Built-in camera and night vision system with motion detection',
      'Equipped with an indoor sensor',
      'Night-mode wireless chime with 58 music options and multiple volume levels',
      'Supports max 128GB SD card recording without network',
      '18650 lithium battery (2 pcs) with Type-C fast charging support'
    ]
  },
  {
    id: 'domotiq-finger-cabinet-lock',
    name: 'Domotiq Finger Cabinet Lock',
    category: 'sahaj',
    shortSpec: 'Fingerprint | Secure',
    description: 'Advanced fingerprint cabinet lock for securing drawers, lockers, and cabinets.',
    image: image1,
    features: [
      'Low Battery Warning',
      'Energy Saving Technology With Long Battery Life',
      'Power Supply-AAA Alkaline Battery',
      'Widely Use in Cabinet, Drawer, Lockers At Home Office Or School',
    ]
  },
  {
    id: 'domotiq-nfc-smart-card-cabinet-lock',
    name: 'Domotiq NFC/Smart Card Cabinet Lock',
    category: 'sahaj',
    shortSpec: 'NFC Card | Secure',
    description: 'Smart NFC/RFID card lock suitable for cabinets, drawers, and lockers.',
    image: image2,
    features: [
      'Low Battery Warning',
      'Energy Saving Technology With Long Battery Life',
      'Power Supply-AAA Alkaline Battery',
      'Widely Use in Cabinet, Drawer, Lockers At Home Office Or School',
    ]
  },
  {
    id: 'one-line-telescopic-expandable-center-opening-curtain-track',
    name: 'One line Telescopic Expandable center Opening Curtain Track',
    category: 'aavarun',
    shortSpec: 'Telescopic | Track',
    description: 'Premium expandable curtain track with dust-proof and anti-oxidation finish.',
    image: image3,
    features: [
      'New telescopic patterned technology based curtain track is 51mm and easy to transport',
      'Electrophoresis process, metallic silver powder spraying process, dust-proof, anti-particle and anti-oxidation, smooth after long use.',
      'Use this curtain  track and you will never need to worry about the size of the rail does not match the size of the curtain.',
    ]
  },
  {
    id: 'sliding-curtain-motor-solution',
    name: 'Sliding Curtain Motor Solution',
    category: 'aavarun',
    shortSpec: 'Motorized | Smart',
    description: 'Silent motorized curtain system with app and voice control compatibility.',
    image: image4,
    features: [
      'Easily operate small and large size curtains using remote and mobile app.',
      'Silent Operating Motorized Curtain Track Kit up to 16 feet track.',
      'Voice control using Alexa and Google home through Philpton app.',
      'Contents-Motor, Remote, Track, Jointer, Runner poles, Master carrier, Driving Belt and Ceiling bracket.',
    ]
  },
  {
    id: 'domotiq-rfid-card-encoder',
    name: 'Domotiq RFID Card Encoder',
    category: 'atithi',
    shortSpec: '​The Heart of Your Front Desk Operations',
    description: '​Effortlessly manage guest access with our high-performance RFID Card Encoder. Designed for speed, security, and simplicity.',
    image: RFID,
    features: [
      'High-Speed Encoding: Process and write guest data to IC cards in less than 1 second, significantly reducing check-in wait times.',
      'Plug-and-Play Simplicity: Connects via a standard USB interface and functions immediately without the need for complex driver installations (Driverless HID).',
      'Enhanced Security : Features built-in encryption protocols to ensure guest data remains private and cards are protected against unauthorized cloning.',
      'Universal IC Support : Operates on the 13.56 MHz frequency, supporting a wide range of cards including Mifare S50, S70, and other ISO14443A standards.',
      'Intuitive Feedback: Equipped with a multi-color LED indicator and an internal buzzer to provide instant visual and audio confirmation of successful card writes.',
    ]
  },
  {
    id: 'domotiq-rfid-hotel-key-cards',
    name: 'Domotiq RFID Hotel Key Cards',
    category: 'atithi',
    shortSpec: 'Hotel Key Card | Secure',
    description: 'These cards are designed to work perfectly with your Encoder and Smart Saver Switch for a unified hospitality ecosystem.',
    image: hotelKeyCard,
    features: [
      'Contactless Convenience: Guests can unlock doors with a simple tap, eliminating the wear and tear associated with traditional magnetic stripe "swipe" cards.',
      'Advanced Encryption: Uses secure data sectors to store guest information, making the cards nearly impossible to clone or tamper with compared to legacy systems.',
      'Multi-Service Functionality: One card can manage room access, elevator use, gym entry, and even cashless payments at the hotel restaurant or spa.',
      'Extreme Durability: The high-quality PVC construction is waterproof and resistant to demagnetization from mobile phones, ensuring guests are never locked out accidentally.',
      'Full Brand Customization: Transform your key cards into marketing tools by adding your hotel logo, brand colors, QR codes for menus, or local area maps.',
      'Remote Deactivation: If a card is lost or stolen, it can be instantly deactivated via the front desk software without needing to replace the door lock.',
    ]
  },
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  const normalizedId = categoryId.trim().toLowerCase();
  return products.filter(p => p.category.trim().toLowerCase() === normalizedId);
};

export const getProductById = (id: string): Product | undefined => {
  const normalizedId = id.trim().toLowerCase();
  return products.find(p => p.id.trim().toLowerCase() === normalizedId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 4);
};
