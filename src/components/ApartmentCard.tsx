import React, { useState } from 'react';
import { Heart, MapPin, BedDouble, Bath, Maximize2, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Apartment } from '../types';

interface ApartmentCardProps {
  apartment: Apartment;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onSelect: (apartment: Apartment) => void;
  onQuickBook: (apartment: Apartment) => void;
}

export const ApartmentCard: React.FC<ApartmentCardProps> = ({
  apartment,
  isFavorite,
  onToggleFavorite,
  onSelect,
  onQuickBook,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article
      className="group bg-white rounded-2xl border border-[#E8E0D5] overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
    >
      {/* Visual Carrier / Image with hover zoom */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFE6DC]">
        {!imageError ? (
          <img
            src={apartment.images[0]}
            alt={apartment.title}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#EFE6DC] to-[#E8E0D5] text-[#8B5E3C] p-4 text-center">
            <ShieldCheck className="w-8 h-8 mb-2 opacity-60" />
            <span className="font-serif text-sm font-semibold text-[#5C3D2E]">{apartment.title}</span>
            <span className="text-xs text-[#5C3D2E]/80 mt-1">Verified Residence</span>
          </div>
        )}

        {/* Top-Right Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(apartment.id);
          }}
          aria-label={isFavorite ? 'Remove from saved' : 'Save apartment'}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#111111] hover:text-[#8B5E3C] shadow-sm hover:scale-110 active:scale-95 transition-all duration-150 z-10 cursor-pointer"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite ? 'fill-[#8B5E3C] text-[#8B5E3C]' : 'text-[#111111]/70'
            }`}
          />
        </button>

        {/* Top-Left Verified Indicator (Zero-pill text scrim) */}
        <div className="absolute top-3 left-3 bg-[#111111]/85 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C8A27A]" />
          <span>Verified</span>
        </div>

        {/* Subtle Bottom Image Scrim with Price */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 flex items-end justify-between text-white">
          <div>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white tabular-nums">
              ${apartment.price.toLocaleString()}
            </span>
            <span className="text-xs text-white/80 font-light"> / month</span>
          </div>
          <span className="text-xs text-[#C8A27A] font-medium">
            {apartment.availableDate === 'Immediate' ? 'Available Now' : `Avail. ${apartment.availableDate}`}
          </span>
        </div>
      </div>

      {/* Card Content & Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Unboxed Metadata Header (Property Type · City) */}
          <div className="flex items-center gap-2 text-xs text-[#8B5E3C] font-semibold tracking-wide uppercase mb-1.5">
            <span>{apartment.propertyType}</span>
            <span aria-hidden="true">·</span>
            <span>{apartment.location.city}</span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onSelect(apartment)}
            className="font-serif text-lg sm:text-xl font-bold text-[#111111] hover:text-[#8B5E3C] cursor-pointer transition-colors line-clamp-1 leading-snug"
          >
            {apartment.title}
          </h3>

          {/* Location Address */}
          <p className="mt-1 flex items-center gap-1.5 text-xs text-[#5C3D2E]/80 line-clamp-1">
            <MapPin className="w-3.5 h-3.5 text-[#8B5E3C] shrink-0" />
            <span>{apartment.location.neighborhood}, {apartment.location.address}</span>
          </p>

          {/* Specs Bar (Beds, Baths, Sqm) with clean typographic separators */}
          <div className="mt-4 pt-3 border-t border-[#E8E0D5]/60 flex items-center justify-between text-xs text-[#5C3D2E] font-medium">
            <div className="flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5 text-[#8B5E3C]" />
              <span>{apartment.bedrooms === 0 ? 'Studio' : `${apartment.bedrooms} Beds`}</span>
            </div>
            <span className="text-[#E8E0D5]" aria-hidden="true">|</span>
            <div className="flex items-center gap-1.5">
              <Bath className="w-3.5 h-3.5 text-[#8B5E3C]" />
              <span>{apartment.bathrooms} Baths</span>
            </div>
            <span className="text-[#E8E0D5]" aria-hidden="true">|</span>
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-[#8B5E3C]" />
              <span className="tabular-nums">{apartment.sizeSqm} sqm</span>
            </div>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="mt-5 pt-3 border-t border-[#E8E0D5]/50 flex items-center gap-2">
          <button
            onClick={() => onSelect(apartment)}
            className="flex-1 py-2.5 px-3 rounded-xl bg-[#FAF7F2] hover:bg-[#EFE6DC] text-[#5C3D2E] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-[#E8E0D5]"
          >
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onQuickBook(apartment)}
            className="py-2.5 px-3 rounded-xl bg-[#8B5E3C] hover:bg-[#5C3D2E] text-white text-xs font-semibold flex items-center justify-center gap-1 transition-all cursor-pointer shadow-sm active:scale-95"
            title="Book a viewing for this apartment"
          >
            <span>Book Tour</span>
          </button>
        </div>
      </div>
    </article>
  );
};
