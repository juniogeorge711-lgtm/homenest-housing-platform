import React, { useState } from 'react';
import { Search, MapPin, Building, BedDouble, DollarSign, ArrowRight } from 'lucide-react';
import { CITIES, PROPERTY_TYPES } from '../data/apartmentsData';
import heroBgImg from '../assets/images/hero_modern_residence_1792731099273.jpg';

interface HeroProps {
  onSearch: (filters: {
    city: string;
    propertyType: string;
    bedrooms: string;
    maxPrice: number;
  }) => void;
  onSelectQuickTag: (tag: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onSelectQuickTag }) => {
  const [city, setCity] = useState('All');
  const [propertyType, setPropertyType] = useState('All');
  const [bedrooms, setBedrooms] = useState('all');
  const [maxPrice, setMaxPrice] = useState(10000);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ city, propertyType, bedrooms, maxPrice });
    const target = document.getElementById('apartments');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Photography with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImg}
          alt="HavenStone Luxury Residences Architecture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Measured dark gradient scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/65 to-[#111111]/45" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-20 flex flex-col items-center text-center">
        {/* Editorial Subheading / Kicker (No pill box) */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-widest uppercase text-[#C8A27A] mb-4">
          <span>Architectural Integrity</span>
          <span aria-hidden="true">·</span>
          <span>Verified Leases</span>
          <span aria-hidden="true">·</span>
          <span>Engineered by George</span>
        </div>

        {/* Hero Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight max-w-4xl text-balance leading-[1.15]">
          Curated Living Spaces for Discerning Residents.
        </h1>

        {/* Body Description */}
        <p className="mt-5 text-base sm:text-lg text-white/85 max-w-2xl font-light leading-relaxed">
          Discover verified apartments, sunlit lofts, and heritage townhouses with instant viewing reservations and frictionless digital lease execution.
        </p>

        {/* Floating Search Console */}
        <div className="mt-10 w-full max-w-5xl bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/20 text-left">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 items-end">
            {/* Location / City */}
            <div>
              <label htmlFor="city-select" className="block text-xs font-semibold text-[#5C3D2E] mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#8B5E3C]" />
                <span>Destination City</span>
              </label>
              <select
                id="city-select"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-[#E8E0D5] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#111111] font-medium focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] focus:bg-white transition-all"
              >
                {CITIES.map((c) => (
                  <option key={c} value={c}>
                    {c === 'All' ? 'All Locations' : c}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Type */}
            <div>
              <label htmlFor="property-type-select" className="block text-xs font-semibold text-[#5C3D2E] mb-1.5 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#8B5E3C]" />
                <span>Residence Type</span>
              </label>
              <select
                id="property-type-select"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-[#E8E0D5] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#111111] font-medium focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] focus:bg-white transition-all"
              >
                {PROPERTY_TYPES.map((pt) => (
                  <option key={pt} value={pt}>
                    {pt === 'All' ? 'All Residence Types' : pt}
                  </option>
                ))}
              </select>
            </div>

            {/* Bedrooms */}
            <div>
              <label htmlFor="bedrooms-select" className="block text-xs font-semibold text-[#5C3D2E] mb-1.5 flex items-center gap-1.5">
                <BedDouble className="w-3.5 h-3.5 text-[#8B5E3C]" />
                <span>Bedrooms</span>
              </label>
              <select
                id="bedrooms-select"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-[#E8E0D5] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#111111] font-medium focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] focus:bg-white transition-all"
              >
                <option value="all">Any Bedrooms</option>
                <option value="0">Studio</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4+">4+ Bedrooms</option>
              </select>
            </div>

            {/* Max Monthly Price */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="max-price-input" className="text-xs font-semibold text-[#5C3D2E] flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-[#8B5E3C]" />
                  <span>Max Budget</span>
                </label>
                <span className="text-xs font-bold text-[#8B5E3C] tabular-nums">
                  ${maxPrice.toLocaleString()}/mo
                </span>
              </div>
              <input
                id="max-price-input"
                type="range"
                min="2000"
                max="10000"
                step="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#8B5E3C] h-2 bg-[#FAF7F2] rounded-lg cursor-pointer"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full h-[42px] flex items-center justify-center gap-2 bg-[#8B5E3C] hover:bg-[#5C3D2E] text-white font-medium text-xs sm:text-sm rounded-xl shadow-md transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Search Residences</span>
              </button>
            </div>
          </form>

          {/* Quick Select Filter Affordances */}
          <div className="mt-4 pt-3 border-t border-[#E8E0D5]/60 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-[#5C3D2E] font-medium mr-1">Trending:</span>
            {[
              { label: 'Penthouses', query: 'Penthouse' },
              { label: 'Garden Terraces', query: 'Terrace' },
              { label: 'Pet Friendly', query: 'Pet' },
              { label: 'Under $5,000', query: 'budget5k' },
              { label: 'Immediate Move-in', query: 'Immediate' },
            ].map((tag) => (
              <button
                key={tag.label}
                type="button"
                onClick={() => onSelectQuickTag(tag.query)}
                className="px-2.5 py-1 rounded-md bg-[#FAF7F2] hover:bg-[#EFE6DC] text-[#5C3D2E] text-xs font-medium transition-colors border border-[#E8E0D5]/70"
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>

        {/* Adjacency Trust Anchor Strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-white/80 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A27A]" />
            <span>100% In-Person Verified Homes</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A27A]" />
            <span>Zero Broker Surcharges</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A27A]" />
            <span>Encrypted Lease Booking</span>
          </div>
        </div>
      </div>
    </section>
  );
};
