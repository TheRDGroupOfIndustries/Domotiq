// import ledPanel1 from '@/assets/products/led-panel-1.jpg';
// import downlight1 from '@/assets/products/downlight-1.jpg';
// import spotlight1 from '@/assets/products/spotlight-1.jpg';
// import streetlight1 from '@/assets/products/streetlight-1.jpg';
// import outdoor1 from '@/assets/products/outdoor-1.jpg';
// import bulb1 from '@/assets/products/bulb-1.jpg';
// import tube1 from '@/assets/products/tube-1.jpg';
// import flat1 from '@/assets/products/flat-1.jpg';
// import surface1 from '@/assets/products/surface-1.jpg';

// New Arrivals Imports
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

export interface Product {
  id: string;
  name: string;
  category: string;
  shortSpec: string;
  description: string;
  wattage: string;
  lumens: string;
  colorTemp: string;
  lifespan: string;
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
  // { id: 'surface', name: 'Surface', description: 'Ceiling mounted fixtures', image: surface1 },
  // { id: 'spots', name: 'Spots', description: 'Directional lighting', image: spotlight1 },
  // { id: 'tube', name: 'Tube', description: 'Linear lighting solutions', image: tube1 },
  // { id: 'flat', name: 'Flat Panel', description: 'Ultra-thin panels', image: flat1 },
  // { id: 'bulb', name: 'Bulb', description: 'Smart LED bulbs', image: bulb1 },
  // { id: 'outdoor', name: 'Outdoor', description: 'Weather-resistant lights', image: outdoor1 },
  // { id: 'streetlight', name: 'Street Light', description: 'Urban lighting', image: streetlight1 },
  { id: 'smart-switches', name: 'Smart Switches', description: 'Touch capacitive switches', image: prod23 },
  { id: 'smart-locks', name: 'Smart Locks', description: 'Advanced security locks', image: prod26 },
];

export const products: Product[] = [
  // {
  //   id: 'led-panel-pro-600',
  //   name: 'LED Panel Pro 600',
  //   category: 'flat',
  //   shortSpec: '40W | 4000lm | 4000K',
  //   description: 'Premium LED panel with edge-lit technology for uniform light distribution. Perfect for offices, commercial spaces, and modern interiors.',
  //   wattage: '40W',
  //   lumens: '4000lm',
  //   colorTemp: '4000K',
  //   lifespan: '50,000 hours',
  //   image: ledPanel1,
  //   features: ['Flicker-free driver', 'UGR<19', 'Dimmable 0-10V', 'Easy installation']
  // },
  // {
  //   id: 'downlight-elite-15',
  //   name: 'Downlight Elite 15',
  //   category: 'surface',
  //   shortSpec: '15W | 1500lm | 3000K',
  //   description: 'Recessed LED downlight with precision optics and excellent color rendering. Ideal for residential and hospitality applications.',
  //   wattage: '15W',
  //   lumens: '1500lm',
  //   colorTemp: '3000K',
  //   lifespan: '40,000 hours',
  //   image: downlight1,
  //   features: ['CRI>90', 'IP44 rated', 'Adjustable beam', 'Thermal management']
  // },
  // {
  //   id: 'track-spot-25',
  //   name: 'Track Spot 25',
  //   category: 'spots',
  //   shortSpec: '25W | 2200lm | 3000K',
  //   description: 'Professional track-mounted spotlight with 350° rotation. Designed for retail displays, galleries, and accent lighting.',
  //   wattage: '25W',
  //   lumens: '2200lm',
  //   colorTemp: '3000K',
  //   lifespan: '35,000 hours',
  //   image: spotlight1,
  //   features: ['350° rotation', 'Honeycomb lens', 'Tool-free adjustment', 'Premium aluminum body']
  // },
  // {
  //   id: 'urban-street-150',
  //   name: 'Urban Street 150',
  //   category: 'streetlight',
  //   shortSpec: '150W | 18000lm | 5000K',
  //   description: 'High-efficiency street light with smart control compatibility. Built for roads, parking lots, and urban infrastructure.',
  //   wattage: '150W',
  //   lumens: '18000lm',
  //   colorTemp: '5000K',
  //   lifespan: '60,000 hours',
  //   image: streetlight1,
  //   features: ['IP66 rated', 'Surge protection', 'Smart ready', 'Die-cast aluminum']
  // },
  // {
  //   id: 'garden-wall-pro',
  //   name: 'Garden Wall Pro',
  //   category: 'outdoor',
  //   shortSpec: '12W | 1100lm | 3000K',
  //   description: 'Contemporary outdoor wall light with IP65 protection. Perfect for facades, pathways, and landscape lighting.',
  //   wattage: '12W',
  //   lumens: '1100lm',
  //   colorTemp: '3000K',
  //   lifespan: '45,000 hours',
  //   image: outdoor1,
  //   features: ['IP65 rated', 'Powder coated', 'UV resistant', 'Easy wall mount']
  // },
  // {
  //   id: 'smart-bulb-e27',
  //   name: 'Smart Bulb E27',
  //   category: 'bulb',
  //   shortSpec: '9W | 800lm | 2700-6500K',
  //   description: 'WiFi-enabled smart LED bulb with tunable white and dimming. Compatible with voice assistants and smart home systems.',
  //   wattage: '9W',
  //   lumens: '800lm',
  //   colorTemp: '2700-6500K',
  //   lifespan: '25,000 hours',
  //   image: bulb1,
  //   features: ['WiFi enabled', 'Voice control', 'Tunable white', 'App scheduling']
  // },
  // {
  //   id: 'linear-tube-1200',
  //   name: 'Linear Tube 1200',
  //   category: 'tube',
  //   shortSpec: '18W | 2000lm | 4000K',
  //   description: 'Slim profile LED tube for suspended or surface mounting. Ideal for offices, corridors, and commercial spaces.',
  //   wattage: '18W',
  //   lumens: '2000lm',
  //   colorTemp: '4000K',
  //   lifespan: '50,000 hours',
  //   image: tube1,
  //   features: ['Linkable design', 'DALI compatible', 'Emergency option', 'Slim 40mm profile']
  // },
  // {
  //   id: 'flat-panel-ultra',
  //   name: 'Flat Panel Ultra',
  //   category: 'flat',
  //   shortSpec: '36W | 3600lm | 4000K',
  //   description: 'Ultra-thin edge-lit panel with premium light quality. Designed for suspended ceilings and modern interiors.',
  //   wattage: '36W',
  //   lumens: '3600lm',
  //   colorTemp: '4000K',
  //   lifespan: '50,000 hours',
  //   image: flat1,
  //   features: ['9mm profile', 'Micro-prismatic', 'Backlit option', 'Suspended mount']
  // },
  // {
  //   id: 'surface-round-24',
  //   name: 'Surface Round 24',
  //   category: 'surface',
  //   shortSpec: '24W | 2200lm | 3000K',
  //   description: 'Sleek surface-mounted ceiling light with uniform diffusion. Perfect for residential spaces and corridors.',
  //   wattage: '24W',
  //   lumens: '2200lm',
  //   colorTemp: '3000K',
  //   lifespan: '40,000 hours',
  //   image: surface1,
  //   features: ['Opal diffuser', 'IP44 bathroom', 'Quick mount', 'Motion sensor option']
  // },

  // New Detailed Products
  {
    id: 'd-2001',
    name: 'D-2001',
    category: 'smart-switches',
    shortSpec: 'Single Button | Mini',
    description: 'Compact single-button scene switch for quick execution of smart home routines.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '50,000 ops',
    image: prod3,
    features: ['Compact Design', 'Muti-click Support', 'WiFi/Zigbee', 'Easy Mount']
  },
  {
    id: 'd-2002',
    name: 'D-2002',
    category: 'smart-switches',
    shortSpec: 'Glass Finish | WiFi',
    description: 'Elegant 4-button touch switch with LED backlight and WiFi for app control.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 ops',
    image: prod1,
    features: ['WiFi Enabled', 'Tempered Glass', 'Backlight', 'Scene Support']
  },
  {
    id: 'd-2003',
    name: 'D-2003',
    category: 'smart-switches',
    shortSpec: 'Glass Finish | WiFi',
    description: 'Elegant 4-button touch switch with LED backlight and WiFi for app control.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 ops',
    image: prod2,
    features: ['WiFi Enabled', 'Tempered Glass', 'Backlight', 'Scene Support']
  },
  {
    id: 'd-6014',
    name: 'D-6014',
    category: 'smart-switches',
    shortSpec: 'Glass Finish | WiFi',
    description: 'Elegant 4-button touch switch with LED backlight and WiFi for app control.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 ops',
    image: prod10,
    features: ['WiFi Enabled', 'Tempered Glass', 'Backlight', 'Scene Support']
  },
  {
    id: 'd-4002',
    name: 'D-4002',
    category: 'smart-switches',
    shortSpec: '12 Button | Scene Master',
    description: 'The ultimate scene controller with 12 customizable touch points for complex home automation.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 ops',
    image: prod8,
    features: ['12 Gang Master', 'Scene Unlimited', 'Voice Compatible', 'Robust Build']
  },
  {
    id: 'd-4003',
    name: 'D-4003',
    category: 'smart-switches',
    shortSpec: 'High Capacity | WiFi',
    description: 'Comprehensive 8-button touch panel for complete room control.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 ops',
    image: prod4,
    features: ['8 Gang Control', 'Master Off', 'Custom Labels', 'Glass Panel']
  },
  {
    id: 'd-4004',
    name: 'D-4004',
    category: 'smart-switches',
    shortSpec: '8 Button | Fan Reg',
    description: 'Combined 8-button panel with dedicated fan speed and light intensity controls.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 ops',
    image: prod5,
    features: ['Fan Regulation', 'Step-less Speed', 'Light Dimming', 'Touch Feedbak']
  },
  {
    id: 'd-4005',
    name: 'D-4005',
    category: 'smart-switches',
    shortSpec: 'Glass Finish | WiFi',
    description: 'Elegant 4-button touch switch with LED backlight and WiFi for app control.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 ops',
    image: prod6,
    features: ['WiFi Enabled', 'Tempered Glass', 'Backlight', 'Scene Support']
  },
  {
    id: 'd-4012',
    name: 'D-4012',
    category: 'smart-switches',
    shortSpec: 'Elite Series | WiFi',
    description: 'Premium 8-gang switch from the Elite series with ultra-responsive touch.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 ops',
    image: prod7,
    features: ['Premium Finish', 'Edge Lighting', 'Surge Protection', 'App Sync']
  },
  {
    id: 'd-6012',
    name: 'D-6012',
    category: 'smart-switches',
    shortSpec: 'Slim Design | WiFi',
    description: 'Sleek vertical-orientated touch switch for narrow spaces and modern aesthetics.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 ops',
    image: prod9,
    features: ['Slim Profile', 'Vertical Mount', 'Anti-oxidation', 'WiFi Mesh']
  },
  {
    id: 'd-6013',
    name: 'D-6013',
    category: 'smart-switches',
    shortSpec: 'Plus Series | WiFi',
    description: 'Enhanced 8-gang touch panel with improved touch sensitivity and feedback.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 ops',
    image: prod11,
    features: ['Enhanced Touch', 'Cloud Connected', 'Timer Support', 'Glass Shell']
  },
  {
    id: 'd-6003',
    name: 'D-6003',
    category: 'smart-switches',
    shortSpec: 'High Density | WiFi',
    description: 'High-density 10-gang touch panel for extensive lighting setups.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 ops',
    image: prod12,
    features: ['10-Gang Control', 'Overload Protection', 'Status Sync', 'Voice Ready']
  },
  {
    id: 'd-6004',
    name: 'D-6004',
    category: 'smart-switches',
    shortSpec: 'Multi-functional | WiFi',
    description: 'Versatile 12-gang panel combining standard switches with special utility icons.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 ops',
    image: prod13,
    features: ['Utility Icons', '12 points', 'Fire Retardant', 'WiFi 6 Support']
  },
  {
    id: 'd-6005',
    name: 'D-6005',
    category: 'smart-switches',
    shortSpec: 'Full Control | WiFi',
    description: 'Complete 12-button switchboard for full house automation in a single plate.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 ops',
    image: prod14,
    features: ['12 Gang Std', 'Remote Monitoring', 'Child Lock', 'Tempered Glass']
  },
  {
    id: 'd-6002',
    name: 'D-6002',
    category: 'smart-switches',
    shortSpec: 'Compact | Zigbee',
    description: 'Small footprint scene switch for minimalist interiors.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 ops',
    image: prod15,
    features: ['Minimalist', 'Battery/Direct', 'Multi-press', 'App Config']
  },
  {
    id: 'd-8002',
    name: 'D-8002',
    category: 'smart-switches',
    shortSpec: 'Glass | 1 Gang',
    description: 'Standard 1-gang glass touch switch for simple lighting control.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 ops',
    image: prod16,
    features: ['Touch Only', 'Retrofit Ready', 'Indicator LED', 'Waterproof']
  },
  {
    id: 'd-8004',
    name: 'D-8004',
    category: 'smart-switches',
    shortSpec: 'Glass | 2 Gang',
    description: 'Standard 2-gang glass touch switch for moderate lighting control.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 ops',
    image: prod17,
    features: ['Dual Zone', 'Sleek Look', 'Instant Response', 'Easy Clean']
  },
  {
    id: 'd-8014',
    name: 'D-8014',
    category: 'smart-switches',
    shortSpec: 'Glass Finish | WiFi',
    description: 'Elegant 4-button touch switch with LED backlight and WiFi for app control.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 ops',
    image: prod20,
    features: ['WiFi Enabled', 'Tempered Glass', 'Backlight', 'Scene Support']
  },
  {
    id: 'd-8015',
    name: 'D-8015',
    category: 'smart-switches',
    shortSpec: 'Glass | 3 Gang',
    description: 'Standard 3-gang glass touch switch for living space lighting control.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 ops',
    image: prod18,
    features: ['Triple Zone', 'WiFi Module', 'Cloud Link', 'Scratch Resistant']
  },
  {
    id: 'd-8012',
    name: 'D-8012',
    category: 'smart-switches',
    shortSpec: 'Glass | 4 Gang',
    description: 'Standard 4-gang glass touch switch for comprehensive lighting control.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 ops',
    image: prod19,
    features: ['Quad Zone', 'App Control', 'Auto Off Timer', 'Silent Relay']
  },
  {
    id: '4-switches',
    name: '4-Switches',
    category: 'smart-switches',
    shortSpec: 'Premium | WiFi',
    description: 'High-end multi-functional glass panel with luxury icons and finish.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 ops',
    image: prod21,
    features: ['Luxury Icons', 'Multi-touch', 'Scene Enabled', 'Gold Accents']
  },
  {
    id: '1-switches',
    name: '1-Switches',
    category: 'smart-switches',
    shortSpec: 'Retrofit | WiFi',
    description: 'Smart switch designed to fit existing electrical boxes without rewiring.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 ops',
    image: prod22,
    features: ['No Rewire', 'Universal Fit', 'App Control', 'Voice Link']
  },
  {
    id: 'fan-regulator',
    name: 'Fan Regulator',
    category: 'smart-switches',
    shortSpec: 'Fan Control | WiFi',
    description: 'Digital fan regulator with smooth touch interface and remote control.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 ops',
    image: prod23,
    features: ['Silent Reg', 'Speed Sync', 'Timer', 'Overload Protection']
  },
  {
    id: 'wifi-in-wall-heavy-duty-p1',
    name: 'WIFI in wall heavy duty retrofit switch modules 1',
    category: 'smart-switches',
    shortSpec: 'Control Box | Industrial',
    description: 'Heavy-duty relay control module for automated switching of high-power loads.',
    wattage: 'High Power',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: 'Industrial Grade',
    image: prod24,
    features: [
      'Control From Mobile App',
      'Schedule Events | Retain Manual Control',
      'Hands Free with Amazon alexa & Google Assistant',
      'Easy and Intelligent Installation | Make Normal Tik-Tok switch Automated',
      'Multi Times Support Delay, Loop Countdown | Configurable restore behaviour on Power / Resume'
    ]
  },
  {
    id: 'wifi-in-wall-heavy-duty',
    name: 'WIFI in wall heavy duty retrofit switch modules',
    category: 'smart-switches',
    shortSpec: 'Control Box | Industrial',
    description: 'Heavy-duty relay control module for automated switching of high-power loads.',
    wattage: 'High Power',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: 'Industrial Grade',
    image: prod25,
    features: [
      'Control From Mobile App',
      'Schedule Events | Retain Manual Control',
      'Hands Free with Amazon alexa & Google Assistant',
      'Easy and Intelligent Installation | Make Normal Tik-Tok switch Automated',
      'Multi Times Support Delay, Loop Countdown | Configurable restore behaviour on Power / Resume'
    ]
  },
  {
    id: 'domotiq-r1-pro',
    name: 'Domotiq R1 Pro',
    category: 'smart-locks',
    shortSpec: 'Fingerprint | Keypad',
    description: 'Standard smart mortise lock with multiple unlock options for home security.',
    wattage: 'Battery',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: 'High Security',
    image: prod26,
    features: ['Fingerprint Unlock', 'RFID Card Unlock', 'Passcode Unlock', 'Low Battery Indication', 'Emergency Power', 'Mechanical Key Unlock', 'RX-TX Remote Support']
  },
  {
    id: 'domotiq-r1-pro-g',
    name: 'Domotiq R1 Pro-G',
    category: 'smart-locks',
    shortSpec: 'Bronze Finish | WiFi',
    description: 'Elegant bronze-finished smart lock with remote unlock support.',
    wattage: 'Battery',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: 'High Security',
    image: prod27,
    features: ['Fingerprint Unlock', 'RFID Card Unlock', 'Passcode Unlock', 'Low Battery Indication', 'Emergency Power', 'Mechanical Key Unlock', 'RX-TX Remote Support']
  },
  {
    id: 'domotiq-r3-pro',
    name: 'Domotiq R-3 Pro',
    category: 'smart-locks',
    shortSpec: 'Silver Finish | Camera',
    description: 'Advanced security lock featuring an integrated camera for visitor snapshots.',
    wattage: 'Rechargeable',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: 'High Security',
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
    category: 'smart-locks',
    shortSpec: 'Video Screen | HD',
    description: 'High-end door lock with a built-in indoor screen for outside viewing.',
    wattage: 'Rechargeable',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: 'High Security',
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
    category: 'smart-locks',
    shortSpec: 'Full Series | Comparison',
    description: 'Comparison showcase of the flagship smart lock series featuring all available finishes.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: 'High Security',
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
    category: 'smart-locks',
    shortSpec: 'Slim Design | WiFi',
    description: 'Compact and slim profile smart lock perfect for modern aluminum or thin doors.',
    wattage: 'Battery',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: 'High Security',
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
    category: 'smart-locks',
    shortSpec: 'Heavy Duty | Fingerprint',
    description: 'Solid mortise lock with semi-conductor fingerprint sensor for high-speed entry.',
    wattage: 'Battery',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: 'High Security',
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
    category: 'smart-locks',
    shortSpec: 'Dead Bolt Style | Pro',
    description: 'Professional grade dead bolt style smart lock with reinforced security points.',
    wattage: 'Battery',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: 'High Security',
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
    category: 'smart-locks',
    shortSpec: 'Glass Door | No Drill',
    description: 'Specialized smart lock for glass doors with no-drill installation.',
    wattage: 'Battery',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: 'High Security',
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
    category: 'smart-locks',
    shortSpec: '3D Face ID | Flagship',
    description: 'Flagship smart lock with 3D structured light face recognition and video display.',
    wattage: 'High-cap Li-ion',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: 'High Security',
    image: prod35,
    features: [
      'Active Smart Lock Bind Technology to unlock through doorbell app user interface',
      '1080P Full HD high quality image',
      'IP65 waterproof rating, suitable for various complex weather conditions',
      'Optionally works with 12V DC power supply for stable performance',
      'Built-in camera and night vision system with motion detection',
      'Equipped with an indoor sensor',
      'Night-light wireless chime with 58 music options and multiple volume levels',
      'Supports max 128GB SD card recording without network',
      '18650 lithium battery (2 pcs) with Type-C fast charging support'
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
