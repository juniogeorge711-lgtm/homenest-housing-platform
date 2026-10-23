import React, { useState } from 'react';
import { Filter, SlidersHorizontal, RotateCcw, Search, Check } from 'lucide-react';
import { FilterState } from '../types';
import { CITIES, PROPERTY_TYPES, ALL_AMENITIES } from '../data/apartmentsData';

interface FilterBarProps {
  filter: FilterState;
  onFilterChange: (newFilter: FilterState) => void;
  onReset: () => void;
  totalResults: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filter,
  onFilterChange,
  onReset,
  totalResults,
}) => {
  const [showAdvancedAmenities, setShowAdvancedAmenities] = useState(false);

  const handleBedroomsClick = (bed: string) => {
    onFilterChange({ ...filter, bedrooms: bed });
  };

  const handleAmenityToggle = (amenity: string) => {
    const exists = filter.amenities.includes(amenity);
    const updated = exists
      ? filter.amenities.filter((a) => a !== amenity)
      : [...filter.amenities, amenity];
    onFilterChange({ ...filter, amenities: updated });
  };

  const hasActiveFilters =
    filter.searchQuery.trim() !== '' ||
    filter.city !== 'All' ||
    filter.propertyType !== 'All' ||
    filter.bedrooms !== 'all' ||
    filter.maxPrice < 10000 ||
    filter.amenities.length > 0 ||
    filter.sortBy !== 'recommended';

  return (
    <div className="bg-white rounded-2xl border border-[#E8E0D5] p-5 sm:p-6 shadow-sm mb-10">
      {/* Primary Row: Keyword Search + Bedrooms Segmented Control + Sort */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Search Input */}
        <div className="md:col-span-5 relative">
          <label htmlFor="search-input" className="sr-only">Search by neighborhood, street, or title</label>
          <Search className="w-4 h-4 text-[#8B5E3C] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="search-input"
            type="text"
            placeholder="Search by neighborhood, street, or title..."
            value={filter.searchQuery}
            onChange={(e) => onFilterChange({ ...filter, searchQuery: e.target.value })}
            className="w-full bg-[#FAF7F2] border border-[#E8E0D5] rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#111111] placeholder:text-[#111111]/45 focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] focus:bg-white transition-all"
          />
        </div>

        {/* Bedroom Segmented Control (Interactive Filter Buttons) */}
        <div className="md:col-span-4 flex items-center">
          <div className="w-full flex items-center p-1 bg-[#FAF7F2] rounded-xl border border-[#E8E0D5] text-xs font-medium">
            <span className="hidden sm:inline-block text-[#5C3D2E] font-semibold px-2">Beds:</span>
            {[
              { id: 'all', label: 'All' },
              { id: '0', label: 'Studio' },
              { id: '1', label: '1' },
              { id: '2', label: '2' },
              { id: '3', label: '3+' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleBedroomsClick(tab.id)}
                className={`flex-1 py-1.5 rounded-lg text-center transition-colors cursor-pointer ${
                  filter.bedrooms === tab.id
                    ? 'bg-[#8B5E3C] text-white shadow-sm font-semibold'
                    : 'text-[#5C3D2E] hover:text-[#111111] hover:bg-white/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Control */}
        <div className="md:col-span-3 flex items-center justify-end gap-2">
          <label htmlFor="sort-select" className="text-xs text-[#5C3D2E] font-medium whitespace-nowrap">Sort:</label>
          <select
            id="sort-select"
            value={filter.sortBy}
            onChange={(e) => onFilterChange({ ...filter, sortBy: e.target.value as FilterState['sortBy'] })}
            className="w-full bg-[#FAF7F2] border border-[#E8E0D5] rounded-xl px-3 py-2 text-xs sm:text-sm text-[#111111] font-medium focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] transition-all"
          >
            <option value="recommended">Curated / Recommended</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="size-desc">Largest Space (sqm)</option>
            <option value="newest">Recently Listed</option>
          </select>
        </div>
      </div>

      {/* Secondary Controls Bar: City, Property Type, Max Budget, Amenities Toggle */}
      <div className="mt-4 pt-4 border-t border-[#E8E0D5]/70 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 items-center">
        {/* City Filter */}
        <div>
          <label htmlFor="city-filter-select" className="block text-[11px] font-semibold text-[#5C3D2E] uppercase tracking-wider mb-1">
            City
          </label>
          <select
            id="city-filter-select"
            value={filter.city}
            onChange={(e) => onFilterChange({ ...filter, city: e.target.value })}
            className="w-full bg-[#FAF7F2] border border-[#E8E0D5] rounded-xl px-3 py-2 text-xs text-[#111111] font-medium focus:ring-2 focus:ring-[#8B5E3C] focus:outline-none"
          >
            {CITIES.map((c) => (
              <option key={c} value={c}>
                {c === 'All' ? 'All Cities' : c}
              </option>
            ))}
          </select>
        </div>

        {/* Property Type */}
        <div>
          <label htmlFor="property-type-filter-select" className="block text-[11px] font-semibold text-[#5C3D2E] uppercase tracking-wider mb-1">
            Residence Type
          </label>
          <select
            id="property-type-filter-select"
            value={filter.propertyType}
            onChange={(e) => onFilterChange({ ...filter, propertyType: e.target.value })}
            className="w-full bg-[#FAF7F2] border border-[#E8E0D5] rounded-xl px-3 py-2 text-xs text-[#111111] font-medium focus:ring-2 focus:ring-[#8B5E3C] focus:outline-none"
          >
            {PROPERTY_TYPES.map((pt) => (
              <option key={pt} value={pt}>
                {pt === 'All' ? 'All Residences' : pt}
              </option>
            ))}
          </select>
        </div>

        {/* Max Budget Slider */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="max-budget-slider" className="text-[11px] font-semibold text-[#5C3D2E] uppercase tracking-wider">
              Max Monthly Rent
            </label>
            <span className="text-xs font-bold text-[#8B5E3C] tabular-nums">
              ${filter.maxPrice.toLocaleString()}
            </span>
          </div>
          <input
            id="max-budget-slider"
            type="range"
            min="2000"
            max="10000"
            step="250"
            value={filter.maxPrice}
            onChange={(e) => onFilterChange({ ...filter, maxPrice: Number(e.target.value) })}
            className="w-full accent-[#8B5E3C] h-1.5 bg-[#FAF7F2] rounded-lg cursor-pointer"
          />
        </div>

        {/* Amenities Accordion Trigger & Reset */}
        <div className="flex items-center gap-2 pt-3 sm:pt-0">
          <button
            type="button"
            onClick={() => setShowAdvancedAmenities(!showAdvancedAmenities)}
            className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border transition-colors cursor-pointer ${
              filter.amenities.length > 0 || showAdvancedAmenities
                ? 'bg-[#EFE6DC] border-[#C8A27A] text-[#5C3D2E]'
                : 'bg-[#FAF7F2] border-[#E8E0D5] text-[#111111] hover:bg-[#EFE6DC]'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#8B5E3C]" />
            <span>Amenities {filter.amenities.length > 0 ? `(${filter.amenities.length})` : ''}</span>
          </button>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={onReset}
              title="Reset all filters"
              className="px-3 py-2 rounded-xl border border-[#E8E0D5] bg-[#FAF7F2] hover:bg-rose-50 hover:text-rose-700 hover:border-rose-200 text-[#5C3D2E] text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Expanded Amenities Selection Tray */}
      {showAdvancedAmenities && (
        <div className="mt-4 pt-4 border-t border-[#E8E0D5]/70">
          <p className="text-xs font-semibold text-[#5C3D2E] mb-2.5">
            Filter by Essential Amenities & Features:
          </p>
          <div className="flex flex-wrap gap-2">
            {ALL_AMENITIES.map((amenity) => {
              const active = filter.amenities.includes(amenity);
              return (
                <button
                  key={amenity}
                  type="button"
                  onClick={() => handleAmenityToggle(amenity)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#8B5E3C] text-white shadow-sm'
                      : 'bg-[#FAF7F2] text-[#5C3D2E] hover:bg-[#EFE6DC] border border-[#E8E0D5]'
                  }`}
                >
                  {active && <Check className="w-3.5 h-3.5" />}
                  <span>{amenity}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Live Result Count Bar */}
      <div className="mt-4 pt-3 border-t border-[#E8E0D5]/40 flex items-center justify-between text-xs text-[#5C3D2E]">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#111111] tabular-nums">{totalResults}</span>
          <span>residences match your criteria</span>
        </div>
        {hasActiveFilters && (
          <span className="text-[#8B5E3C] font-medium">Filtered results live-updated</span>
        )}
      </div>
    </div>
  );
};
