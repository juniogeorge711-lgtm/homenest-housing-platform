import { Apartment, Testimonial, ServiceItem } from '../types';

import heroBuildingImg from '../assets/images/hero_modern_residence_1792731099273.jpg';
import penthouseLoftImg from '../assets/images/apartment_penthouse_loft_1792731099536.jpg';
import gardenTerraceImg from '../assets/images/apartment_garden_terrace_1792731099764.jpg';

export const APARTMENTS: Apartment[] = [
  {
    id: 'apt-01',
    title: 'The Lumina Grand Penthouse',
    tagline: 'Panoramic skyline views with bespoke walnut millwork and private elevator.',
    location: {
      address: '420 West End Avenue, Floor 18',
      neighborhood: 'Upper West Side',
      city: 'New York',
      country: 'USA',
      transitNote: '2 min walk to 72nd St Subway (1, 2, 3 lines)'
    },
    price: 6800,
    deposit: 6800,
    bedrooms: 3,
    bathrooms: 3,
    sizeSqm: 195,
    propertyType: 'Penthouse',
    images: [
      penthouseLoftImg,
      heroBuildingImg,
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: true,
    description: 'A masterwork of quiet luxury, The Lumina Penthouse pairs expansive Hudson River views with hand-oiled walnut wall paneling, Italian terrazzo bathrooms, and an open chef kitchen with integrated Gaggenau appliances. Floor-to-ceiling soundproof acoustic glazing guarantees absolute serenity in the heart of Manhattan.',
    amenities: [
      'High-Speed Fiber WiFi',
      'Underground Heated Parking',
      '24/7 Concierge & Security',
      'Private Balcony & Loggia',
      'Wellness Gym & Spa Access',
      'In-Unit Miele Washer & Dryer',
      'Smart Keyless Entry',
      'Pet Friendly',
      'Filtered Air & Water Systems'
    ],
    availableDate: 'Immediate',
    floor: '18th (Top Floor)',
    yearBuilt: 2024,
    petPolicy: 'Cats and dogs welcome up to 50 lbs',
    agent: {
      name: 'Elena Vance',
      phone: '+1 (212) 555-0182',
      email: 'elena.vance@havenstoneliving.com',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'apt-02',
    title: 'Solarium Garden Residence',
    tagline: 'Seamless indoor-outdoor living with a private 45sqm landscaped timber terrace.',
    location: {
      address: '88 Kensington Park Road',
      neighborhood: 'Notting Hill',
      city: 'London',
      country: 'United Kingdom',
      transitNote: '4 min walk to Ladbroke Grove Station'
    },
    price: 4950,
    deposit: 4950,
    bedrooms: 2,
    bathrooms: 2,
    sizeSqm: 130,
    propertyType: 'Apartment',
    images: [
      gardenTerraceImg,
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    description: 'Flooded with natural sunlight through oversized sliding glass walls, this residence offers an idyllic Scandinavian aesthetic with light oak floors, micro-cement walls, and an expansive private terrace equipped with automated drip irrigation for olive trees and Mediterranean botanicals.',
    amenities: [
      'High-Speed Fiber WiFi',
      'Private Garden Terrace',
      '24/7 Security System',
      'Underfloor Heating',
      'Wine Cooler',
      'Pet Friendly',
      'Bicycle Storage Suite',
      'Smart Thermostat (Nest)'
    ],
    availableDate: 'Nov 1, 2026',
    floor: 'Ground & Mezzanine',
    yearBuilt: 2023,
    petPolicy: 'Pet friendly with private garden access',
    agent: {
      name: 'Oliver Thorne',
      phone: '+44 20 7946 0912',
      email: 'oliver.t@havenstoneliving.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'apt-03',
    title: 'The Waterfront Haven Tower',
    tagline: 'Modern waterfront architectural residence with wrap-around balconies and infinity pool.',
    location: {
      address: '15 Marina Boulevard',
      neighborhood: 'South Waterfront',
      city: 'San Francisco',
      country: 'USA',
      transitNote: 'Direct link to Muni Waterfront Light Rail'
    },
    price: 5200,
    deposit: 5200,
    bedrooms: 2,
    bathrooms: 2,
    sizeSqm: 145,
    propertyType: 'Apartment',
    images: [
      heroBuildingImg,
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    description: 'Perched along the bay, The Waterfront Haven Tower embodies contemporary architectural prowess. Features exposed structural concrete elements, fluted oak joinery, marble island, automated Lutron shading, and panoramic ocean and marina views.',
    amenities: [
      'High-Speed Fiber WiFi',
      'Underground Heated Parking',
      'Rooftop Infinity Pool',
      '24/7 Concierge & Security',
      'Wellness Gym & Spa Access',
      'EV Charging Stations',
      'Balcony with Bay View',
      'Smart Keyless Entry'
    ],
    availableDate: 'Immediate',
    floor: '9th Floor',
    yearBuilt: 2025,
    petPolicy: 'All pets welcome',
    agent: {
      name: 'Maya Lin',
      phone: '+1 (415) 555-0149',
      email: 'maya.lin@havenstoneliving.com',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'apt-04',
    title: 'The Tribeca Cast-Iron Loft',
    tagline: 'Restored 19th-century industrial architectural loft with 4-meter timber ceilings.',
    location: {
      address: '74 Franklin Street, 4B',
      neighborhood: 'Tribeca',
      city: 'New York',
      country: 'USA',
      transitNote: '1 block to Franklin St Subway Station'
    },
    price: 7500,
    deposit: 7500,
    bedrooms: 3,
    bathrooms: 2.5,
    sizeSqm: 210,
    propertyType: 'Loft',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    description: 'Original exposed brickwork, Corinthian cast-iron columns, and reclaimed Virginia pine floors are harmonized with minimalist brass fixtures and a custom Boffi kitchen. Includes an acoustically treated home office suite.',
    amenities: [
      'High-Speed Fiber WiFi',
      'Direct Keyed Elevator Access',
      'Gas Fireplace',
      'Chef Kitchen with Sub-Zero',
      'In-Unit Miele Washer & Dryer',
      '24/7 Virtual Doorman',
      'Dedicated Wine Cellar'
    ],
    availableDate: 'Nov 15, 2026',
    floor: '4th Floor',
    yearBuilt: 1910,
    petPolicy: 'Dogs & cats permitted upon review',
    agent: {
      name: 'Elena Vance',
      phone: '+1 (212) 555-0182',
      email: 'elena.vance@havenstoneliving.com',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'apt-05',
    title: 'Belgravia Mews Townhouse',
    tagline: 'Elegantly curated 3-story private townhouse with private garage in historic Belgravia.',
    location: {
      address: '14 Wilton Mews',
      neighborhood: 'Belgravia',
      city: 'London',
      country: 'United Kingdom',
      transitNote: '5 min walk to Hyde Park Corner'
    },
    price: 8900,
    deposit: 8900,
    bedrooms: 4,
    bathrooms: 3.5,
    sizeSqm: 260,
    propertyType: 'Townhouse',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    description: 'A discreet haven behind cobblestone streets. Features bespoke bronze hardware, herringbone parquet floors, an integrated steam shower, private rooftop sundeck, and an automated enclosed vehicle garage with wall charger.',
    amenities: [
      'High-Speed Fiber WiFi',
      'Private Enclosed Garage',
      'Rooftop Terrace',
      '24/7 Security Alarm',
      'Private Sauna & Steam Room',
      'Fireplace',
      'Wine Cellar',
      'Pet Friendly'
    ],
    availableDate: 'Immediate',
    floor: 'Whole Townhouse (3 Levels)',
    yearBuilt: 2022,
    petPolicy: 'Pet friendly',
    agent: {
      name: 'Oliver Thorne',
      phone: '+44 20 7946 0912',
      email: 'oliver.t@havenstoneliving.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'apt-06',
    title: 'Seaport Horizon Minimalist Studio',
    tagline: 'High-concept compact living with motorized Murphy system and harbor sunrises.',
    location: {
      address: '210 Northern Avenue',
      neighborhood: 'Seaport District',
      city: 'Boston',
      country: 'USA',
      transitNote: '3 min walk to Silver Line Way'
    },
    price: 2850,
    deposit: 2850,
    bedrooms: 0,
    bathrooms: 1,
    sizeSqm: 58,
    propertyType: 'Studio',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502005229762-ee1b442b0362?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    description: 'Engineered for executive lifestyle efficiency. Features motorized transforming architectural joinery, concealing a queen mattress to reveal an 8-person conference desk. Includes floor-to-ceiling glass looking toward Boston Harbor.',
    amenities: [
      'High-Speed Fiber WiFi',
      'Coworking Lounge Access',
      '24/7 Security Concierge',
      'Wellness Gym & Spa Access',
      'In-Unit Washer & Dryer',
      'Smart Keyless Entry'
    ],
    availableDate: 'Immediate',
    floor: '12th Floor',
    yearBuilt: 2024,
    petPolicy: 'Cats allowed',
    agent: {
      name: 'Maya Lin',
      phone: '+1 (415) 555-0149',
      email: 'maya.lin@havenstoneliving.com',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'apt-07',
    title: 'Lakeview Cedar Duplex',
    tagline: 'Double-height glass living room framed by warm western red cedar and lake vistas.',
    location: {
      address: '610 Lake Shore Drive',
      neighborhood: 'Lincoln Park',
      city: 'Chicago',
      country: 'USA',
      transitNote: 'Near Fullerton Station (Red / Brown / Purple lines)'
    },
    price: 4300,
    deposit: 4300,
    bedrooms: 2,
    bathrooms: 2.5,
    sizeSqm: 165,
    propertyType: 'Duplex',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    description: 'An architectural statement spanning two full levels. A floating cantilever steel staircase connects the living pavilion to the mezzanine master suite with a free-standing volcanic limestone soaking tub overlooking Lake Michigan.',
    amenities: [
      'High-Speed Fiber WiFi',
      'Heated Garage Parking',
      '24/7 Concierge & Security',
      'Private Balcony & Loggia',
      'Wellness Gym & Spa Access',
      'Gas Fireplace',
      'Pet Friendly'
    ],
    availableDate: 'Dec 1, 2026',
    floor: '14th & 15th Floors',
    yearBuilt: 2023,
    petPolicy: 'Dogs & cats welcome',
    agent: {
      name: 'Elena Vance',
      phone: '+1 (212) 555-0182',
      email: 'elena.vance@havenstoneliving.com',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'apt-08',
    title: 'SoMa Modernist Loft',
    tagline: 'Warm timber ceilings, black steel framed partitions, and hyper-fast gigabit fiber.',
    location: {
      address: '380 Brannan Street, Unit 302',
      neighborhood: 'South of Market',
      city: 'San Francisco',
      country: 'USA',
      transitNote: '3 min walk to 4th & King Caltrain'
    },
    price: 4100,
    deposit: 4100,
    bedrooms: 1,
    bathrooms: 1.5,
    sizeSqm: 105,
    propertyType: 'Loft',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    description: 'Designed for the modern tech pioneer and design enthusiast. Offers an open-concept flow, polished aggregate concrete floors, acoustic timber wall battens, motorized shades, and a private balcony overlooking a quiet interior courtyard.',
    amenities: [
      'High-Speed Fiber WiFi',
      'EV Parking Space',
      'Private Balcony',
      'Smart Keyless Entry',
      'In-Unit Washer & Dryer',
      'Pet Friendly'
    ],
    availableDate: 'Immediate',
    floor: '3rd Floor',
    yearBuilt: 2021,
    petPolicy: 'Pets welcome (no pet rent)',
    agent: {
      name: 'Maya Lin',
      phone: '+1 (415) 555-0149',
      email: 'maya.lin@havenstoneliving.com',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'apt-09',
    title: 'The Zurich Bergwald Sanctuary',
    tagline: 'Swiss alpine timber architecture with panoramic Lake Zurich views and geothermal heating.',
    location: {
      address: 'Zürichbergstrasse 142',
      neighborhood: 'Zürichberg',
      city: 'Zurich',
      country: 'Switzerland',
      transitNote: 'Tram 6 to Zoo station 200m'
    },
    price: 6200,
    deposit: 6200,
    bedrooms: 3,
    bathrooms: 2,
    sizeSqm: 175,
    propertyType: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    description: 'Constructed according to Swiss Minergie-P eco standards. Boasts triple-glazed floor-to-ceiling windows, native larch wood details, private Finnish sauna, and tranquil forest surroundings minutes from the financial quarter.',
    amenities: [
      'High-Speed Fiber WiFi',
      'Underground Heated Parking',
      'Private Sauna & Steam Room',
      'Private Balcony & Loggia',
      'Geothermal Floor Heating',
      '24/7 Security Alarm',
      'Filtered Air & Water Systems'
    ],
    availableDate: 'Dec 15, 2026',
    floor: '2nd Floor',
    yearBuilt: 2024,
    petPolicy: 'Pet friendly with deposit',
    agent: {
      name: 'Oliver Thorne',
      phone: '+44 20 7946 0912',
      email: 'oliver.t@havenstoneliving.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'apt-10',
    title: 'Rainier View Horizon Flat',
    tagline: 'Corner residence with uninterrupted vistas of Mount Rainier and Elliott Bay.',
    location: {
      address: '2020 2nd Avenue, Suite 24A',
      neighborhood: 'Belltown',
      city: 'Seattle',
      country: 'USA',
      transitNote: '4 min walk to Westlake Light Rail Center'
    },
    price: 3600,
    deposit: 3600,
    bedrooms: 1,
    bathrooms: 1,
    sizeSqm: 92,
    propertyType: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    description: 'High-floor corner aerie featuring warm cedar accents, natural slate tile, custom walk-in closet with integrated LED lighting, and an expansive chef kitchen island with quartz countertops.',
    amenities: [
      'High-Speed Fiber WiFi',
      'Underground Heated Parking',
      'Rooftop Sky Lounge',
      'Wellness Gym & Spa Access',
      '24/7 Concierge & Security',
      'Pet Friendly'
    ],
    availableDate: 'Immediate',
    floor: '24th Floor',
    yearBuilt: 2023,
    petPolicy: 'Dogs & cats welcome',
    agent: {
      name: 'Elena Vance',
      phone: '+1 (212) 555-0182',
      email: 'elena.vance@havenstoneliving.com',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'apt-11',
    title: 'South Congress Courtyard House',
    tagline: 'Warm limestone architecture, private plunge pool, and heritage live oak canopy.',
    location: {
      address: '1410 South Congress Ave',
      neighborhood: 'SoCo District',
      city: 'Austin',
      country: 'USA',
      transitNote: 'Direct express bus stop on Congress'
    },
    price: 4700,
    deposit: 4700,
    bedrooms: 2,
    bathrooms: 2,
    sizeSqm: 155,
    propertyType: 'Townhouse',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    description: 'Built with local Texas cream limestone and blackened steel, this private townhouse centers around a private courtyard with a heated plunge pool, outdoor kitchen, and floor-to-ceiling iron-frame French doors.',
    amenities: [
      'High-Speed Fiber WiFi',
      'Private Plunge Pool',
      'Enclosed 2-Car Garage',
      'Private Courtyard',
      'Wine Cooler',
      'Pet Friendly',
      'Solar Panel Array with Battery Backup'
    ],
    availableDate: 'Immediate',
    floor: 'Ground & 2nd Level',
    yearBuilt: 2023,
    petPolicy: 'Pet friendly with no breed restrictions',
    agent: {
      name: 'Maya Lin',
      phone: '+1 (415) 555-0149',
      email: 'maya.lin@havenstoneliving.com',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'apt-12',
    title: 'Mayfair Heritage Atelier',
    tagline: 'Regency-era architectural moldings paired with contemporary bronze and fluted glass.',
    location: {
      address: '28 Mount Street',
      neighborhood: 'Mayfair',
      city: 'London',
      country: 'United Kingdom',
      transitNote: '3 min walk to Green Park Station'
    },
    price: 8200,
    deposit: 8200,
    bedrooms: 2,
    bathrooms: 2.5,
    sizeSqm: 180,
    propertyType: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    description: 'Exemplifying Mayfair prestige. Boasts 3.8-meter decorative ceilings, bespoke English walnut wardrobes, Calacatta marble bathrooms with brass fittings, and quiet garden courtyard exposures.',
    amenities: [
      'High-Speed Fiber WiFi',
      '24/7 Uniformed Porter',
      'Underfloor Heating',
      'Wine Storage Cellar',
      'In-Unit Miele Washer & Dryer',
      'Smart Keyless Entry'
    ],
    availableDate: 'Jan 5, 2027',
    floor: '1st Piano Nobile',
    yearBuilt: 2022,
    petPolicy: 'Cats and small dogs permitted',
    agent: {
      name: 'Oliver Thorne',
      phone: '+44 20 7946 0912',
      email: 'oliver.t@havenstoneliving.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Julian Montgomery',
    role: 'Principal Architect & Partner',
    city: 'New York',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'HavenStone fundamentally changed how I view rental leasing. The accuracy of the virtual tour and materials was pristine. I completed the lease and digital key handover in under 24 hours without a single broker hassle.',
    apartmentName: 'The Lumina Grand Penthouse'
  },
  {
    id: 't-2',
    name: 'Dr. Clara Beauchamp',
    role: 'Biotech Research Fellow',
    city: 'London',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'As someone relocating from Switzerland, George’s software made neighborhood transit comparisons and verified acoustics completely transparent. My garden residence in Notting Hill matches every promise made.',
    apartmentName: 'Solarium Garden Residence'
  },
  {
    id: 't-3',
    name: 'Marcus Vance',
    role: 'Founder & Engineering VP',
    city: 'San Francisco',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'The engineering caliber of this platform stands out immediately. No bait-and-switch listings, instant real-time tour booking that syncs with Google Calendar, and escrow security that gave me total peace of mind.',
    apartmentName: 'The Waterfront Haven Tower'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    number: '01',
    title: 'Curated Architectural Rentals',
    description: 'Every residence in our catalog undergoes rigorous 48-point physical verification for acoustic insulation, natural light yield, HVAC filtration, and structural integrity.',
    features: ['Acoustic decibel ratings', 'Air quality & HVAC inspection', 'Verified owner deed documentation'],
    icon: 'Building2'
  },
  {
    id: 'srv-2',
    number: '02',
    title: 'Bespoke Property Management',
    description: 'Full-lifecycle asset stewardship for discerning landlords and institutional residences, utilizing George’s proprietary automated maintenance ledger.',
    features: ['Instant automated maintenance triage', 'Real-time financial yield reports', 'White-glove tenant vetting'],
    icon: 'ShieldCheck'
  },
  {
    id: 'srv-3',
    number: '03',
    title: 'Immersive Spatial 3D Tours',
    description: 'True-to-scale photogrammetric walk-throughs with millimetric room dimension measurements, shadow-angle simulations, and daylight progression playback.',
    features: ['Millimeter-accurate floor plans', 'Solar daylight path simulation', 'High-fidelity acoustic playback'],
    icon: 'Compass'
  },
  {
    id: 'srv-4',
    number: '04',
    title: 'Dedicated White-Glove Concierge',
    description: 'Round-the-clock personal assistance for key handovers, climate pre-cooling, fine art deliveries, and high-speed fiber activation prior to move-in day.',
    features: ['24/7 dedicated human desk', 'Smart keyless mobile provisioning', 'Zero-deposit lease insurance option'],
    icon: 'Headphones'
  }
];

export const STATS = [
  { value: 1480, suffix: '+', label: 'Curated Residences', detail: 'Across 18 premier cities' },
  { value: 98.7, suffix: '%', label: 'Tenant Satisfaction', detail: 'Verified post-move audit' },
  { value: 18, suffix: ' Metros', label: 'Global Presence', detail: 'North America & Western Europe' },
  { value: 24, suffix: ' Hours', label: 'Average Lease Speed', detail: 'From viewing to digital keys' }
];

export const CITIES = ['All', 'New York', 'London', 'San Francisco', 'Chicago', 'Boston', 'Austin', 'Zurich'];

export const PROPERTY_TYPES = ['All', 'Penthouse', 'Apartment', 'Loft', 'Townhouse', 'Duplex', 'Studio'];

export const ALL_AMENITIES = [
  'High-Speed Fiber WiFi',
  'Underground Heated Parking',
  '24/7 Concierge & Security',
  'Private Balcony & Loggia',
  'Wellness Gym & Spa Access',
  'In-Unit Miele Washer & Dryer',
  'Smart Keyless Entry',
  'Pet Friendly',
  'Private Garden Terrace',
  'Private Sauna & Steam Room'
];
