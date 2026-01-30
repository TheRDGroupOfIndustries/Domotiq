import ledPanel1 from '@/assets/products/led-panel-1.jpg';
import downlight1 from '@/assets/products/downlight-1.jpg';
import spotlight1 from '@/assets/products/spotlight-1.jpg';
import streetlight1 from '@/assets/products/streetlight-1.jpg';
import outdoor1 from '@/assets/products/outdoor-1.jpg';
import bulb1 from '@/assets/products/bulb-1.jpg';
import tube1 from '@/assets/products/tube-1.jpg';
import flat1 from '@/assets/products/flat-1.jpg';
import surface1 from '@/assets/products/surface-1.jpg';
import smartSwitch2m from '@/assets/products/smart-switch-2m.png';
import smartSwitch4m from '@/assets/products/smart-switch-4m.png';
import smartSwitch6m from '@/assets/products/smart-switch-6m.png';
import smartSwitch8m from '@/assets/products/smart-switch-8m.png';
import pearlSeries from '@/assets/products/pearl-series.png';
import smartCurtains from '@/assets/products/smart-curtains.png';
import smartLockR1 from '@/assets/products/smart-lock-r1.png';
import smartLockR3 from '@/assets/products/smart-lock-r3.png';
import smartLockR5 from '@/assets/products/smart-lock-r5.png';

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
  { id: 'surface', name: 'Surface', description: 'Ceiling mounted fixtures', image: surface1 },
  { id: 'spots', name: 'Spots', description: 'Directional lighting', image: spotlight1 },
  { id: 'tube', name: 'Tube', description: 'Linear lighting solutions', image: tube1 },
  { id: 'flat', name: 'Flat Panel', description: 'Ultra-thin panels', image: flat1 },
  { id: 'bulb', name: 'Bulb', description: 'Smart LED bulbs', image: bulb1 },
  { id: 'outdoor', name: 'Outdoor', description: 'Weather-resistant lights', image: outdoor1 },
  { id: 'streetlight', name: 'Street Light', description: 'Urban lighting', image: streetlight1 },
  { id: 'smart-switches', name: 'Smart Switches', description: 'Touch capacitive switches', image: smartSwitch4m },
  { id: 'pearl-series', name: 'Pearl Series', description: 'Retrofit switches', image: pearlSeries },
  { id: 'smart-curtains', name: 'Smart Curtains', description: 'Automated tracks & motors', image: smartCurtains },
  { id: 'smart-locks', name: 'Smart Locks', description: 'Advanced security locks', image: smartLockR1 },
];

export const products: Product[] = [
  {
    id: 'led-panel-pro-600',
    name: 'LED Panel Pro 600',
    category: 'flat',
    shortSpec: '40W | 4000lm | 4000K',
    description: 'Premium LED panel with edge-lit technology for uniform light distribution. Perfect for offices, commercial spaces, and modern interiors.',
    wattage: '40W',
    lumens: '4000lm',
    colorTemp: '4000K',
    lifespan: '50,000 hours',
    image: ledPanel1,
    features: ['Flicker-free driver', 'UGR<19', 'Dimmable 0-10V', 'Easy installation']
  },
  {
    id: 'downlight-elite-15',
    name: 'Downlight Elite 15',
    category: 'surface',
    shortSpec: '15W | 1500lm | 3000K',
    description: 'Recessed LED downlight with precision optics and excellent color rendering. Ideal for residential and hospitality applications.',
    wattage: '15W',
    lumens: '1500lm',
    colorTemp: '3000K',
    lifespan: '40,000 hours',
    image: downlight1,
    features: ['CRI>90', 'IP44 rated', 'Adjustable beam', 'Thermal management']
  },
  {
    id: 'track-spot-25',
    name: 'Track Spot 25',
    category: 'spots',
    shortSpec: '25W | 2200lm | 3000K',
    description: 'Professional track-mounted spotlight with 350° rotation. Designed for retail displays, galleries, and accent lighting.',
    wattage: '25W',
    lumens: '2200lm',
    colorTemp: '3000K',
    lifespan: '35,000 hours',
    image: spotlight1,
    features: ['350° rotation', 'Honeycomb lens', 'Tool-free adjustment', 'Premium aluminum body']
  },
  {
    id: 'urban-street-150',
    name: 'Urban Street 150',
    category: 'streetlight',
    shortSpec: '150W | 18000lm | 5000K',
    description: 'High-efficiency street light with smart control compatibility. Built for roads, parking lots, and urban infrastructure.',
    wattage: '150W',
    lumens: '18000lm',
    colorTemp: '5000K',
    lifespan: '60,000 hours',
    image: streetlight1,
    features: ['IP66 rated', 'Surge protection', 'Smart ready', 'Die-cast aluminum']
  },
  {
    id: 'garden-wall-pro',
    name: 'Garden Wall Pro',
    category: 'outdoor',
    shortSpec: '12W | 1100lm | 3000K',
    description: 'Contemporary outdoor wall light with IP65 protection. Perfect for facades, pathways, and landscape lighting.',
    wattage: '12W',
    lumens: '1100lm',
    colorTemp: '3000K',
    lifespan: '45,000 hours',
    image: outdoor1,
    features: ['IP65 rated', 'Powder coated', 'UV resistant', 'Easy wall mount']
  },
  {
    id: 'smart-bulb-e27',
    name: 'Smart Bulb E27',
    category: 'bulb',
    shortSpec: '9W | 800lm | 2700-6500K',
    description: 'WiFi-enabled smart LED bulb with tunable white and dimming. Compatible with voice assistants and smart home systems.',
    wattage: '9W',
    lumens: '800lm',
    colorTemp: '2700-6500K',
    lifespan: '25,000 hours',
    image: bulb1,
    features: ['WiFi enabled', 'Voice control', 'Tunable white', 'App scheduling']
  },
  {
    id: 'linear-tube-1200',
    name: 'Linear Tube 1200',
    category: 'tube',
    shortSpec: '18W | 2000lm | 4000K',
    description: 'Slim profile LED tube for suspended or surface mounting. Ideal for offices, corridors, and commercial spaces.',
    wattage: '18W',
    lumens: '2000lm',
    colorTemp: '4000K',
    lifespan: '50,000 hours',
    image: tube1,
    features: ['Linkable design', 'DALI compatible', 'Emergency option', 'Slim 40mm profile']
  },
  {
    id: 'flat-panel-ultra',
    name: 'Flat Panel Ultra',
    category: 'flat',
    shortSpec: '36W | 3600lm | 4000K',
    description: 'Ultra-thin edge-lit panel with premium light quality. Designed for suspended ceilings and modern interiors.',
    wattage: '36W',
    lumens: '3600lm',
    colorTemp: '4000K',
    lifespan: '50,000 hours',
    image: flat1,
    features: ['9mm profile', 'Micro-prismatic', 'Backlit option', 'Suspended mount']
  },
  {
    id: 'surface-round-24',
    name: 'Surface Round 24',
    category: 'surface',
    shortSpec: '24W | 2200lm | 3000K',
    description: 'Sleek surface-mounted ceiling light with uniform diffusion. Perfect for residential spaces and corridors.',
    wattage: '24W',
    lumens: '2200lm',
    colorTemp: '3000K',
    lifespan: '40,000 hours',
    image: surface1,
    features: ['Opal diffuser', 'IP44 bathroom', 'Quick mount', 'Motion sensor option']
  },
  {
    id: 'smart-switch-2m',
    name: 'Smart Switch 2M',
    category: 'smart-switches',
    shortSpec: '2 Module | Touch Control | WiFi',
    description: 'Elegant 2-module smart touch switch with glass finish. Supports WiFi connectivity for remote control via app and voice assistants.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 operations',
    image: smartSwitch2m,
    features: ['Tempered Glass', 'App Control', 'Voice Control', 'schedule & Timer']
  },
  {
    id: 'smart-switch-4m',
    name: 'Smart Switch 4M',
    category: 'smart-switches',
    shortSpec: '4 Module | Touch Control | WiFi',
    description: 'Premium 4-module touch switch panel. Customizable icons and backlighting. Perfect for controlling multiple circuits in living and bedrooms.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 operations',
    image: smartSwitch4m,
    features: ['Custom Icons', 'Backlit Touch', 'Scene Control', 'Easy Retrofit']
  },
  {
    id: 'smart-switch-6m',
    name: 'Smart Switch 6M',
    category: 'smart-switches',
    shortSpec: '6 Module | Touch Control | Fan Control',
    description: 'Comprehensive 6-module panel including fan regulation. Combine lighting and fan control in a single sleek glass interface.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 operations',
    image: smartSwitch6m,
    features: ['Fan Regulator', 'Master Switch', 'Surge Protection', 'Cloud Sync']
  },
  {
    id: 'smart-switch-8m',
    name: 'Smart Switch 8M',
    category: 'smart-switches',
    shortSpec: '8 Module | Touch Control | Master',
    description: 'The ultimate control hub. 8-module smart panel for extensive lighting configurations. Features master control and scene automation.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 operations',
    image: smartSwitch8m,
    features: ['8 Gang Control', 'Master All Off', 'Group Control', 'Premium Build']
  },
  // Pearl Series
  {
    id: 'pearl-4-switch',
    name: 'Pearl 4-Switch',
    category: 'pearl-series',
    shortSpec: '4 Switches | Retrofit Design',
    description: 'Domotiq Pearl Series 4-Switch panel. Retrofit design compatible with existing switchboards. Elegant glass finish.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 operations',
    image: pearlSeries,
    features: ['Retrofit', 'Touch Control', 'Glass Panel', 'WiFi Optional']
  },
  {
    id: 'pearl-fan-regulator',
    name: 'Pearl Fan Regulator',
    category: 'pearl-series',
    shortSpec: 'Fan Control | Touch Interface',
    description: 'Touch-controlled fan regulator from the Pearl Series. Smooth speed adjustment and premium aesthetic.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: '100,000 operations',
    image: pearlSeries, // Using same image as it's a series showcase
    features: ['5-Step Speed', 'No Humming', 'Touch Control', 'Memory Function']
  },

  // Smart Curtains
  {
    id: 'curtain-track-10f',
    name: 'Curtain Track 10F',
    category: 'smart-curtains',
    shortSpec: 'Telescopic Track | 51mm',
    description: 'Expandable center opening curtain track. Telescopic patterned technology, smooth operation, and easy transport.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: 'Heavy Duty',
    image: smartCurtains,
    features: ['Telescopic', 'Smooth Gliding', 'Anti-oxidation', 'Adjustable Size']
  },
  {
    id: 'curtain-motor-60k',
    name: 'Curtain Motor 60K',
    category: 'smart-curtains',
    shortSpec: 'Silent Motor | App Control',
    description: 'Silent operating motorized curtain track kit. Supports remote, mobile app, and voice control via Alexa/Google Home.',
    wattage: 'N/A',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: 'Premium Motor',
    image: smartCurtains,
    features: ['Silent Operation', 'Voice Control', 'App Control', 'Touch Start']
  },

  // Smart Locks
  {
    id: 'lock-r1-pro',
    name: 'Domotiq R1 PRO',
    category: 'smart-locks',
    shortSpec: 'Fingerprint | RFID | Key',
    description: 'Advanced smart lock with multiple unlock methods including fingerprint, RFID card, passcode, and mechanical key.',
    wattage: 'Battery',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: 'High Security',
    image: smartLockR1,
    features: ['Fingerprint', 'RFID Card', 'Passcode', 'Remote Support']
  },
  {
    id: 'lock-r3-pro',
    name: 'Domotiq R3 PRO',
    category: 'smart-locks',
    shortSpec: 'Face Rec | Camera | Video Call',
    description: 'Premium smart lock with 3D Face Recognition and built-in HD camera for video calls. The ultimate in home security.',
    wattage: 'Rechargeable Li-ion',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: 'High Security',
    image: smartLockR3,
    features: ['3D Face Rec', 'Video Call', 'Inside Display', 'Auto Lock']
  },
  {
    id: 'lock-r5',
    name: 'Domotiq R5',
    category: 'smart-locks',
    shortSpec: 'Face ID | Palm Vein | 3.5" Display',
    description: 'Flagship smart lock featuring Palm Vein recognition and a large 3.5-inch indoor display monitor for visitor verification.',
    wattage: 'Rechargeable Li-ion',
    lumens: 'N/A',
    colorTemp: 'N/A',
    lifespan: 'High Security',
    image: smartLockR5,
    features: ['Palm Vein Rec', '3.5" Screen', 'Hijack Alarm', '200 Fingerprints']
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
