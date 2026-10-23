export interface Apartment {
  id: string;
  title: string;
  tagline: string;
  location: {
    address: string;
    neighborhood: string;
    city: string;
    country: string;
    transitNote: string;
  };
  price: number; // USD per month
  deposit: number;
  bedrooms: number; // 0 for studio
  bathrooms: number;
  sizeSqm: number;
  propertyType: 'Penthouse' | 'Apartment' | 'Loft' | 'Studio' | 'Townhouse' | 'Duplex';
  images: string[];
  featured: boolean;
  description: string;
  amenities: string[];
  availableDate: string;
  floor: string;
  yearBuilt: number;
  petPolicy: string;
  agent: {
    name: string;
    phone: string;
    email: string;
    avatar: string;
  };
}

export interface FilterState {
  searchQuery: string;
  city: string;
  propertyType: string;
  bedrooms: string; // 'all' | '0' | '1' | '2' | '3' | '4+'
  minPrice: number;
  maxPrice: number;
  amenities: string[];
  sortBy: 'recommended' | 'price-asc' | 'price-desc' | 'size-desc' | 'newest';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  avatar: string;
  rating: number;
  quote: string;
  apartmentName: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface ViewingBooking {
  apartmentId: string;
  apartmentTitle: string;
  date: string;
  timeSlot: string;
  fullName: string;
  email: string;
  phone: string;
  tourType: 'In-Person' | 'Guided Virtual 3D';
  notes?: string;
}
