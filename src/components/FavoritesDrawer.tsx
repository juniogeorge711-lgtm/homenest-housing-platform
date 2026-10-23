import React from 'react';
import { X, Heart, Trash2, ArrowRight, BedDouble, Bath, Maximize2 } from 'lucide-react';
import { Apartment } from '../types';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Apartment[];
  onRemoveFavorite: (id: string) => void;
  onSelectApartment: (apartment: Apartment) => void;
  onBookViewing: (apartment: Apartment) => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favorites,
  onRemoveFavorite,
  onSelectApartment,
  onBookViewing,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#FAF7F2] h-full shadow-2xl flex flex-col justify-between border-l border-[#E8E0D5] animate-slide-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 bg-white border-b border-[#E8E0D5] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#EFE6DC] flex items-center justify-center text-[#8B5E3C]">
              <Heart className="w-4 h-4 fill-[#8B5E3C]" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#111111]">Saved Residences</h3>
              <span className="text-xs text-[#5C3D2E] block">
                {favorites.length} {favorites.length === 1 ? 'property' : 'properties'} shortlisted
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close saved drawer"
            className="p-2 rounded-full hover:bg-[#FAF7F2] text-[#111111] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {favorites.length === 0 ? (
            <div className="py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-[#EFE6DC] text-[#8B5E3C] flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h4 className="font-serif text-base font-semibold text-[#111111]">
                No Shortlisted Residences
              </h4>
              <p className="text-xs text-[#5C3D2E] max-w-xs mx-auto mt-1">
                Click the heart icon on any apartment card to save residences for comparison.
              </p>
            </div>
          ) : (
            favorites.map((apt) => (
              <div
                key={apt.id}
                className="bg-white rounded-2xl border border-[#E8E0D5] p-3.5 shadow-sm hover:border-[#C8A27A] transition-all flex gap-3.5 group"
              >
                <img
                  src={apt.images[0]}
                  alt={apt.title}
                  referrerPolicy="no-referrer"
                  className="w-24 h-24 rounded-xl object-cover shrink-0 cursor-pointer"
                  onClick={() => {
                    onClose();
                    onSelectApartment(apt);
                  }}
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <span className="text-[10px] uppercase font-bold text-[#8B5E3C] tracking-wider">
                        {apt.location.city}
                      </span>
                      <button
                        onClick={() => onRemoveFavorite(apt.id)}
                        title="Remove from favorites"
                        className="text-[#111111]/40 hover:text-rose-600 transition-colors p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h4
                      onClick={() => {
                        onClose();
                        onSelectApartment(apt);
                      }}
                      className="font-serif text-sm font-bold text-[#111111] hover:text-[#8B5E3C] cursor-pointer line-clamp-1 mt-0.5"
                    >
                      {apt.title}
                    </h4>

                    <div className="flex items-center gap-2 text-[11px] text-[#5C3D2E] mt-1">
                      <span>{apt.bedrooms === 0 ? 'Studio' : `${apt.bedrooms}b`}</span>
                      <span>·</span>
                      <span>{apt.bathrooms}ba</span>
                      <span>·</span>
                      <span>{apt.sizeSqm}m²</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#E8E0D5]/60">
                    <span className="text-xs font-bold text-[#111111] tabular-nums">
                      ${apt.price.toLocaleString()}/mo
                    </span>
                    <button
                      onClick={() => {
                        onClose();
                        onBookViewing(apt);
                      }}
                      className="text-[11px] font-semibold text-[#8B5E3C] hover:text-[#5C3D2E] flex items-center gap-0.5"
                    >
                      <span>Book Tour</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {favorites.length > 0 && (
          <div className="p-6 bg-white border-t border-[#E8E0D5] space-y-3">
            <button
              onClick={() => {
                onClose();
                const target = document.getElementById('apartments');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-3 bg-[#8B5E3C] hover:bg-[#5C3D2E] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-sm cursor-pointer"
            >
              Compare All Saved Residences
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
