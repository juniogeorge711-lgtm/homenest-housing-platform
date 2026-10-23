import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, CalendarCheck, Home } from 'lucide-react';

interface NavbarProps {
  favoritesCount: number;
  onOpenFavorites: () => void;
  onOpenBooking: () => void;
  onNavigateHome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  favoritesCount,
  onOpenFavorites,
  onOpenBooking,
  onNavigateHome,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Apartments', href: '#apartments' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about-developer' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8E0D5] py-3.5'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex items-center gap-2.5 whitespace-nowrap shrink-0 group transition-colors ${
              isScrolled ? 'text-[#111111]' : 'text-white'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                isScrolled
                  ? 'bg-[#8B5E3C] text-white'
                  : 'bg-white/20 backdrop-blur-sm text-white group-hover:bg-[#8B5E3C]'
              }`}
            >
              <Home className="w-4 h-4" />
            </div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight">
              HavenStone
            </span>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`whitespace-nowrap shrink-0 transition-colors relative py-1 hover:text-[#C8A27A] ${
                  isScrolled ? 'text-[#111111]/80 hover:text-[#8B5E3C]' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions - Favorites + Primary "Book a Viewing" */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Favorites Icon Button */}
            <button
              onClick={onOpenFavorites}
              aria-label="View saved apartments"
              className={`relative p-2 rounded-full transition-colors ${
                isScrolled
                  ? 'text-[#111111] hover:bg-[#EFE6DC]'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <Heart className={`w-5 h-5 ${favoritesCount > 0 ? 'fill-[#8B5E3C] text-[#8B5E3C]' : ''}`} />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#8B5E3C] text-white text-[11px] font-semibold rounded-full flex items-center justify-center shadow-sm">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenBooking}
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 shadow-sm ${
                isScrolled
                  ? 'bg-[#8B5E3C] text-white hover:bg-[#5C3D2E] active:scale-[0.98]'
                  : 'bg-white text-[#111111] hover:bg-[#FAF7F2] active:scale-[0.98]'
              }`}
            >
              <CalendarCheck className="w-4 h-4 text-[#C8A27A]" />
              <span>Book a Viewing</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-[#111111] hover:bg-[#EFE6DC]' : 'text-white hover:bg-white/20'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E8E0D5] px-6 py-6 shadow-xl transition-all">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#111111] hover:text-[#8B5E3C] font-medium text-base py-1 transition-colors border-b border-[#E8E0D5]/50 pb-2"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="mt-2 w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#8B5E3C] hover:bg-[#5C3D2E] rounded-lg shadow-sm transition-all"
            >
              <CalendarCheck className="w-4 h-4 text-[#C8A27A]" />
              <span>Book a Viewing</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
