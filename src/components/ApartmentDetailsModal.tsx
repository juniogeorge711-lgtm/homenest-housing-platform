import React, { useState, useEffect } from 'react';
import {
  X,
  MapPin,
  BedDouble,
  Bath,
  Maximize2,
  Calendar,
  ShieldCheck,
  Wifi,
  Car,
  Shield,
  Droplets,
  Dumbbell,
  Trees,
  CheckCircle2,
  Mail,
  Phone,
  Send,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Apartment } from '../types';

interface ApartmentDetailsModalProps {
  apartment: Apartment | null;
  onClose: () => void;
  onBookTour: (apartment: Apartment) => void;
  onShowToast: (message: string) => void;
}

export const ApartmentDetailsModal: React.FC<ApartmentDetailsModalProps> = ({
  apartment,
  onClose,
  onBookTour,
  onShowToast,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
    setSubmitted(false);
  }, [apartment]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!apartment) return null;

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryEmail.trim()) {
      return;
    }
    setSubmitted(true);
    onShowToast(`Inquiry sent to ${apartment.agent.name}. Expect a response within 2 hours.`);
  };

  const getAmenityIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('wifi') || lower.includes('fiber')) return <Wifi className="w-4 h-4 text-[#8B5E3C]" />;
    if (lower.includes('park') || lower.includes('garage')) return <Car className="w-4 h-4 text-[#8B5E3C]" />;
    if (lower.includes('security') || lower.includes('porter') || lower.includes('concierge')) return <Shield className="w-4 h-4 text-[#8B5E3C]" />;
    if (lower.includes('water') || lower.includes('pool') || lower.includes('spa')) return <Droplets className="w-4 h-4 text-[#8B5E3C]" />;
    if (lower.includes('gym') || lower.includes('fitness')) return <Dumbbell className="w-4 h-4 text-[#8B5E3C]" />;
    if (lower.includes('balcony') || lower.includes('terrace') || lower.includes('garden')) return <Trees className="w-4 h-4 text-[#8B5E3C]" />;
    return <CheckCircle2 className="w-4 h-4 text-[#8B5E3C]" />;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-apartment-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF7F2] rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl border border-[#E8E0D5] my-6 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#111111] hover:bg-white hover:scale-105 shadow-md transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery Section */}
        <div className="relative w-full bg-[#111111]">
          {/* Main Hero Viewer */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full max-h-[460px] overflow-hidden">
            <img
              src={apartment.images[activeImageIndex] || apartment.images[0]}
              alt={`${apartment.title} view ${activeImageIndex + 1}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

            {/* Navigation arrows for images */}
            {apartment.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : apartment.images.length - 1))
                  }
                  aria-label="Previous photo"
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#111111] flex items-center justify-center transition-all shadow-md"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveImageIndex((prev) => (prev < apartment.images.length - 1 ? prev + 1 : 0))
                  }
                  aria-label="Next photo"
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#111111] flex items-center justify-center transition-all shadow-md"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Title Overlay in Banner */}
            <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-end justify-between text-white gap-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C8A27A] mb-1">
                  <span>{apartment.propertyType}</span>
                  <span>·</span>
                  <span>{apartment.location.city}</span>
                </div>
                <h2 id="modal-apartment-title" className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  {apartment.title}
                </h2>
                <p className="text-xs sm:text-sm text-white/80 flex items-center gap-1.5 mt-1">
                  <MapPin className="w-4 h-4 text-[#C8A27A]" />
                  <span>{apartment.location.address}, {apartment.location.neighborhood}</span>
                </p>
              </div>

              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  ${apartment.price.toLocaleString()}
                  <span className="text-xs font-normal text-white/75"> / mo</span>
                </div>
                <span className="text-xs text-[#C8A27A]">
                  Deposit: ${apartment.deposit.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Thumbnail Strip */}
          {apartment.images.length > 1 && (
            <div className="p-3 bg-[#1A1A1A] flex items-center gap-2 overflow-x-auto">
              {apartment.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 transition-all ${
                    activeImageIndex === idx
                      ? 'ring-2 ring-[#C8A27A] opacity-100 scale-105'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Modal Body: Two-column content layout */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 8 Columns: Specifications, Description, Amenities, Map Placeholder */}
            <div className="lg:col-span-8 space-y-8">
              {/* Key Specs Pill Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white p-3.5 rounded-xl border border-[#E8E0D5]">
                  <span className="block text-[11px] text-[#5C3D2E] font-medium uppercase tracking-wider">Bedrooms</span>
                  <div className="flex items-center gap-2 mt-1">
                    <BedDouble className="w-4 h-4 text-[#8B5E3C]" />
                    <span className="font-semibold text-sm text-[#111111]">
                      {apartment.bedrooms === 0 ? 'Studio' : `${apartment.bedrooms} Bedrooms`}
                    </span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-[#E8E0D5]">
                  <span className="block text-[11px] text-[#5C3D2E] font-medium uppercase tracking-wider">Bathrooms</span>
                  <div className="flex items-center gap-2 mt-1">
                    <Bath className="w-4 h-4 text-[#8B5E3C]" />
                    <span className="font-semibold text-sm text-[#111111]">{apartment.bathrooms} Baths</span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-[#E8E0D5]">
                  <span className="block text-[11px] text-[#5C3D2E] font-medium uppercase tracking-wider">Interior Space</span>
                  <div className="flex items-center gap-2 mt-1">
                    <Maximize2 className="w-4 h-4 text-[#8B5E3C]" />
                    <span className="font-semibold text-sm text-[#111111] tabular-nums">{apartment.sizeSqm} sqm</span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-[#E8E0D5]">
                  <span className="block text-[11px] text-[#5C3D2E] font-medium uppercase tracking-wider">Availability</span>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="w-4 h-4 text-[#8B5E3C]" />
                    <span className="font-semibold text-sm text-[#111111]">{apartment.availableDate}</span>
                  </div>
                </div>
              </div>

              {/* Editorial Description */}
              <div>
                <h3 className="font-serif text-xl font-bold text-[#111111] mb-2.5">
                  About This Residence
                </h3>
                <p className="text-sm sm:text-base text-[#111111]/80 leading-relaxed font-light">
                  {apartment.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-[#5C3D2E]">
                  <div>
                    <span className="font-semibold text-[#111111]">Floor Level:</span> {apartment.floor}
                  </div>
                  <div>
                    <span className="font-semibold text-[#111111]">Year Completed:</span> {apartment.yearBuilt}
                  </div>
                  <div>
                    <span className="font-semibold text-[#111111]">Pet Policy:</span> {apartment.petPolicy}
                  </div>
                </div>
              </div>

              {/* Amenities Grid with Icons */}
              <div>
                <h3 className="font-serif text-xl font-bold text-[#111111] mb-3">
                  Verified Amenities & Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {apartment.amenities.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E8E0D5]"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] flex items-center justify-center shrink-0 border border-[#E8E0D5]/70">
                        {getAmenityIcon(item)}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-[#111111]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map & Neighborhood Placeholder */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-xl font-bold text-[#111111]">
                    Location & Transit
                  </h3>
                  <span className="text-xs text-[#8B5E3C] font-semibold">
                    {apartment.location.neighborhood}
                  </span>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-[#E8E0D5] bg-[#EFE6DC] h-52 flex flex-col justify-between p-4">
                  {/* Styled Architectural Map Pattern */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#8B5E3C_1px,transparent_1px)] [background-size:16px_16px]" />

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-semibold text-[#111111] flex items-center gap-1.5 shadow-sm">
                      <MapPin className="w-3.5 h-3.5 text-[#8B5E3C]" />
                      <span>{apartment.location.address}</span>
                    </div>
                    <span className="bg-[#8B5E3C] text-white text-[11px] px-2 py-1 rounded font-medium">
                      WalkScore: 97
                    </span>
                  </div>

                  <div className="relative z-10 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-[#E8E0D5] text-xs text-[#5C3D2E] shadow-sm">
                    <span className="font-semibold text-[#111111] block mb-0.5">Transit Connectivity:</span>
                    {apartment.location.transitNote}
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4 Columns: Contact Agent Card & Instant Tour Action */}
            <div className="lg:col-span-4 space-y-6">
              {/* Instant Tour CTA Card */}
              <div className="bg-[#111111] text-white p-5 rounded-2xl shadow-lg border border-[#333]">
                <h4 className="font-serif text-lg font-bold text-white mb-1">
                  Schedule Private Viewing
                </h4>
                <p className="text-xs text-white/70 mb-4">
                  In-person or high-resolution 3D virtual walkthrough with our certified concierge.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onBookTour(apartment);
                  }}
                  className="w-full py-3 px-4 bg-[#8B5E3C] hover:bg-[#C8A27A] text-white font-semibold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Book a Viewing</span>
                </button>
              </div>

              {/* Agent Contact Card & Form */}
              <div className="bg-white rounded-2xl border border-[#E8E0D5] p-5 shadow-sm">
                <div className="flex items-center gap-3 pb-4 border-b border-[#E8E0D5]">
                  <img
                    src={apartment.agent.avatar}
                    alt={apartment.agent.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border border-[#C8A27A]"
                  />
                  <div>
                    <h5 className="font-semibold text-sm text-[#111111]">{apartment.agent.name}</h5>
                    <span className="text-xs text-[#8B5E3C] block font-medium">HavenStone Property Concierge</span>
                    <div className="flex items-center gap-3 mt-1 text-[11px] text-[#5C3D2E]">
                      <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3 text-[#8B5E3C]" />
                        {apartment.agent.phone}
                      </span>
                    </div>
                  </div>
                </div>

                {submitted ? (
                  <div className="py-6 text-center">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                    <h5 className="font-serif text-base font-bold text-[#111111]">Inquiry Received</h5>
                    <p className="text-xs text-[#5C3D2E] mt-1">
                      {apartment.agent.name} will reach out to you directly today.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="mt-4 space-y-3">
                    <p className="text-xs font-semibold text-[#5C3D2E]">Direct Agent Inquiry</p>

                    <div>
                      <input
                        type="text"
                        placeholder="Your Full Name *"
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        className="w-full bg-[#FAF7F2] border border-[#E8E0D5] rounded-xl px-3 py-2 text-xs text-[#111111] focus:ring-2 focus:ring-[#8B5E3C] focus:outline-none"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Your Email Address *"
                        required
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        className="w-full bg-[#FAF7F2] border border-[#E8E0D5] rounded-xl px-3 py-2 text-xs text-[#111111] focus:ring-2 focus:ring-[#8B5E3C] focus:outline-none"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number (optional)"
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        className="w-full bg-[#FAF7F2] border border-[#E8E0D5] rounded-xl px-3 py-2 text-xs text-[#111111] focus:ring-2 focus:ring-[#8B5E3C] focus:outline-none"
                      />
                    </div>

                    <div>
                      <textarea
                        rows={3}
                        placeholder={`Hello ${apartment.agent.name}, I am interested in leasing ${apartment.title}...`}
                        value={inquiryMessage}
                        onChange={(e) => setInquiryMessage(e.target.value)}
                        className="w-full bg-[#FAF7F2] border border-[#E8E0D5] rounded-xl px-3 py-2 text-xs text-[#111111] focus:ring-2 focus:ring-[#8B5E3C] focus:outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 bg-[#5C3D2E] hover:bg-[#8B5E3C] text-white font-medium text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Direct Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
