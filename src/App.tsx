/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FilterBar } from './components/FilterBar';
import { ApartmentCard } from './components/ApartmentCard';
import { ApartmentDetailsModal } from './components/ApartmentDetailsModal';
import { BookingModal } from './components/BookingModal';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { AboutDeveloper } from './components/AboutDeveloper';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { APARTMENTS } from './data/apartmentsData';
import { Apartment, FilterState } from './types';
import { Sparkles, Building, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

export default function App() {
  // Global filter state
  const [filter, setFilter] = useState<FilterState>({
    searchQuery: '',
    city: 'All',
    propertyType: 'All',
    bedrooms: 'all',
    minPrice: 0,
    maxPrice: 10000,
    amenities: [],
    sortBy: 'recommended',
  });

  // Favorites state with localStorage persistence
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('havenstone_favorites');
      return stored ? JSON.parse(stored) : ['apt-01', 'apt-03'];
    } catch {
      return ['apt-01', 'apt-03'];
    }
  });

  // Modal and drawer controllers
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingTargetApartment, setBookingTargetApartment] = useState<Apartment | null>(null);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync favorites with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('havenstone_favorites', JSON.stringify(favoriteIds));
    } catch {
      // storage unavailable
    }
  }, [favoriteIds]);

  // Toggle favorite helper
  const handleToggleFavorite = (id: string) => {
    setFavoriteIds((prev) => {
      const exists = prev.includes(id);
      const updated = exists ? prev.filter((item) => item !== id) : [...prev, id];
      const target = APARTMENTS.find((a) => a.id === id);
      const title = target?.title || 'Apartment';
      setToastMessage(exists ? `Removed ${title} from saved` : `Saved ${title} to your list`);
      return updated;
    });
  };

  // Filter & Sort calculation
  const filteredApartments = useMemo(() => {
    return APARTMENTS.filter((apt) => {
      // Search query across title, description, address, neighborhood
      if (filter.searchQuery.trim() !== '') {
        const query = filter.searchQuery.toLowerCase();
        const matchesTitle = apt.title.toLowerCase().includes(query);
        const matchesAddress = apt.location.address.toLowerCase().includes(query);
        const matchesNeighborhood = apt.location.neighborhood.toLowerCase().includes(query);
        const matchesCity = apt.location.city.toLowerCase().includes(query);
        if (!matchesTitle && !matchesAddress && !matchesNeighborhood && !matchesCity) {
          return false;
        }
      }

      // City filter
      if (filter.city !== 'All' && apt.location.city !== filter.city) {
        return false;
      }

      // Property type filter
      if (filter.propertyType !== 'All' && apt.propertyType !== filter.propertyType) {
        return false;
      }

      // Bedrooms filter
      if (filter.bedrooms !== 'all') {
        if (filter.bedrooms === '0' && apt.bedrooms !== 0) return false;
        if (filter.bedrooms === '1' && apt.bedrooms !== 1) return false;
        if (filter.bedrooms === '2' && apt.bedrooms !== 2) return false;
        if (filter.bedrooms === '3' && apt.bedrooms < 3) return false;
        if (filter.bedrooms === '4+' && apt.bedrooms < 4) return false;
      }

      // Price range
      if (apt.price > filter.maxPrice) {
        return false;
      }

      // Amenities (every selected amenity must be present)
      if (filter.amenities.length > 0) {
        const hasAllAmenities = filter.amenities.every((req) =>
          apt.amenities.some((a) => a.toLowerCase().includes(req.toLowerCase()))
        );
        if (!hasAllAmenities) return false;
      }

      return true;
    }).sort((a, b) => {
      switch (filter.sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'size-desc':
          return b.sizeSqm - a.sizeSqm;
        case 'newest':
          return b.yearBuilt - a.yearBuilt;
        case 'recommended':
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });
  }, [filter]);

  // Favorite apartment items
  const favoriteApartments = useMemo(() => {
    return APARTMENTS.filter((apt) => favoriteIds.includes(apt.id));
  }, [favoriteIds]);

  // Handler for Hero Search submission
  const handleHeroSearch = (criteria: {
    city: string;
    propertyType: string;
    bedrooms: string;
    maxPrice: number;
  }) => {
    setFilter((prev) => ({
      ...prev,
      city: criteria.city,
      propertyType: criteria.propertyType,
      bedrooms: criteria.bedrooms,
      maxPrice: criteria.maxPrice,
    }));
  };

  // Handler for Trending Tags click in Hero
  const handleSelectQuickTag = (tag: string) => {
    if (tag === 'Penthouse') {
      setFilter((prev) => ({ ...prev, propertyType: 'Penthouse' }));
    } else if (tag === 'Terrace') {
      setFilter((prev) => ({ ...prev, amenities: ['Private Balcony & Loggia'] }));
    } else if (tag === 'Pet') {
      setFilter((prev) => ({ ...prev, amenities: ['Pet Friendly'] }));
    } else if (tag === 'budget5k') {
      setFilter((prev) => ({ ...prev, maxPrice: 5000 }));
    } else if (tag === 'Immediate') {
      setFilter((prev) => ({ ...prev, searchQuery: 'Immediate' }));
    }
    const target = document.getElementById('apartments');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Reset all filters
  const handleResetFilters = () => {
    setFilter({
      searchQuery: '',
      city: 'All',
      propertyType: 'All',
      bedrooms: 'all',
      minPrice: 0,
      maxPrice: 10000,
      amenities: [],
      sortBy: 'recommended',
    });
    setToastMessage('Filters reset to show all residences');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#111111] flex flex-col font-sans selection:bg-[#8B5E3C] selection:text-white">
      {/* 1. Navbar */}
      <Navbar
        favoritesCount={favoriteIds.length}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        onOpenBooking={() => {
          setBookingTargetApartment(null);
          setIsBookingOpen(true);
        }}
        onNavigateHome={() => handleResetFilters()}
      />

      <main className="flex-1">
        {/* 2. Hero Section with Search Console */}
        <Hero
          onSearch={handleHeroSearch}
          onSelectQuickTag={handleSelectQuickTag}
        />

        {/* 3 & 4. Featured Apartments & Live Filter/Sort Section */}
        <section id="apartments" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase text-[#8B5E3C] mb-2">
                Prime Curated Collection
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111]">
                Featured Residences.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#5C3D2E] font-light max-w-2xl">
                Explore architectural homes audited for natural light, acoustic isolation, and premium finishing.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#5C3D2E]">
              <span className="w-2 h-2 rounded-full bg-[#8B5E3C]" />
              <span>
                Showing <strong className="text-[#111111] font-bold tabular-nums">{filteredApartments.length}</strong> of{' '}
                <span className="tabular-nums">{APARTMENTS.length}</span> residences
              </span>
            </div>
          </div>

          {/* Interactive Filter & Sort Bar */}
          <FilterBar
            filter={filter}
            onFilterChange={setFilter}
            onReset={handleResetFilters}
            totalResults={filteredApartments.length}
          />

          {/* Apartment Cards Grid */}
          {filteredApartments.length === 0 ? (
            <div className="py-20 bg-white rounded-3xl border border-[#E8E0D5] text-center p-8 shadow-sm">
              <Building className="w-12 h-12 text-[#8B5E3C] mx-auto mb-3 opacity-70" />
              <h3 className="font-serif text-xl font-bold text-[#111111]">
                No Residences Match Your Exact Filter
              </h3>
              <p className="text-xs sm:text-sm text-[#5C3D2E] max-w-md mx-auto mt-2">
                Try widening your price range, clearing specific amenity requirements, or selecting "All Cities".
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="mt-5 px-5 py-2.5 bg-[#8B5E3C] hover:bg-[#5C3D2E] text-white text-xs font-semibold rounded-xl shadow-sm transition-all cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredApartments.map((apartment) => (
                <ApartmentCard
                  key={apartment.id}
                  apartment={apartment}
                  isFavorite={favoriteIds.includes(apartment.id)}
                  onToggleFavorite={handleToggleFavorite}
                  onSelect={(apt) => setSelectedApartment(apt)}
                  onQuickBook={(apt) => {
                    setBookingTargetApartment(apt);
                    setIsBookingOpen(true);
                  }}
                />
              ))}
            </div>
          )}
        </section>

        {/* 6. Comprehensive Services Section */}
        <Services />

        {/* 7. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 8. Animated Stats Counters */}
        <Stats />

        {/* 9. Verified Tenant Testimonials Carousel */}
        <Testimonials />

        {/* 10. About Developer George & Software Architecture */}
        <AboutDeveloper />

        {/* 11. Contact & Inquiry Section */}
        <ContactSection onShowToast={(msg) => setToastMessage(msg)} />
      </main>

      {/* 12. Footer */}
      <Footer onShowToast={(msg) => setToastMessage(msg)} />

      {/* 5. Apartment Details Modal */}
      <ApartmentDetailsModal
        apartment={selectedApartment}
        onClose={() => setSelectedApartment(null)}
        onBookTour={(apt) => {
          setBookingTargetApartment(apt);
          setIsBookingOpen(true);
        }}
        onShowToast={(msg) => setToastMessage(msg)}
      />

      {/* Instant VIP Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preSelectedApartment={bookingTargetApartment}
        onBookingConfirmed={(msg) => setToastMessage(msg)}
      />

      {/* Saved Favorites Slide-Over Drawer */}
      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favoriteApartments}
        onRemoveFavorite={handleToggleFavorite}
        onSelectApartment={(apt) => setSelectedApartment(apt)}
        onBookViewing={(apt) => {
          setBookingTargetApartment(apt);
          setIsBookingOpen(true);
        }}
      />

      {/* Global Interactive Notification Toast */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
