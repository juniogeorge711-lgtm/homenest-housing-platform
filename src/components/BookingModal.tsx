import React, { useState, useEffect } from 'react';
import { X, CalendarCheck, CheckCircle2, Clock, MapPin, Sparkles, Building, Video } from 'lucide-react';
import { Apartment } from '../types';
import { APARTMENTS } from '../data/apartmentsData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedApartment: Apartment | null;
  onBookingConfirmed: (message: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedApartment,
  onBookingConfirmed,
}) => {
  const [selectedApartmentId, setSelectedApartmentId] = useState<string>('');
  const [tourType, setTourType] = useState<'In-Person' | 'Virtual 3D'>('In-Person');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('11:00 AM');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (preSelectedApartment) {
      setSelectedApartmentId(preSelectedApartment.id);
    } else if (APARTMENTS.length > 0) {
      setSelectedApartmentId(APARTMENTS[0].id);
    }

    // Set default date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setSelectedDate(tomorrow.toISOString().split('T')[0]);
    setIsSuccess(false);
  }, [preSelectedApartment, isOpen]);

  if (!isOpen) return null;

  const currentApartment = APARTMENTS.find((a) => a.id === selectedApartmentId) || APARTMENTS[0];

  const timeSlots = [
    '09:30 AM',
    '11:00 AM',
    '01:30 PM',
    '03:00 PM',
    '04:30 PM',
    '06:00 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !selectedDate) {
      return;
    }

    const ref = `HS-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsSuccess(true);
    onBookingConfirmed(`Viewing scheduled for ${currentApartment?.title} on ${selectedDate} at ${selectedTime}!`);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF7F2] rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#E8E0D5] my-6 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#111111] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#C8A27A] uppercase tracking-wider mb-1.5">
            <CalendarCheck className="w-4 h-4" />
            <span>VIP Viewing Reservation</span>
          </div>
          <h3 className="font-serif text-2xl font-bold tracking-tight text-white">
            Schedule a Private Tour
          </h3>
          <p className="text-xs sm:text-sm text-white/75 mt-1 font-light">
            Coordinate with our architectural concierge for an in-person or live guided 3D tour.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7">
          {isSuccess ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-[#8B5E3C] font-semibold">
                  Confirmation #{bookingRef}
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#111111] mt-1">
                  Viewing Confirmed
                </h4>
                <p className="text-xs sm:text-sm text-[#5C3D2E] max-w-md mx-auto mt-2">
                  Thank you, <strong className="text-[#111111]">{name}</strong>. A calendar invite and building gate access pass have been dispatched to <span className="text-[#8B5E3C]">{email}</span>.
                </p>
              </div>

              {/* Booking Summary Ticket */}
              <div className="bg-white rounded-2xl p-4 border border-[#E8E0D5] text-left text-xs space-y-2 mt-4 shadow-sm">
                <div className="flex justify-between border-b border-[#E8E0D5]/60 pb-2">
                  <span className="text-[#5C3D2E]">Residence:</span>
                  <span className="font-semibold text-[#111111]">{currentApartment?.title}</span>
                </div>
                <div className="flex justify-between border-b border-[#E8E0D5]/60 pb-2">
                  <span className="text-[#5C3D2E]">Date & Time:</span>
                  <span className="font-semibold text-[#111111]">
                    {selectedDate} · {selectedTime}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#E8E0D5]/60 pb-2">
                  <span className="text-[#5C3D2E]">Tour Format:</span>
                  <span className="font-semibold text-[#8B5E3C]">{tourType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5C3D2E]">Concierge Host:</span>
                  <span className="font-semibold text-[#111111]">{currentApartment?.agent.name}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full mt-4 py-3 bg-[#8B5E3C] hover:bg-[#5C3D2E] text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Select Apartment */}
              <div>
                <label htmlFor="booking-apartment-select" className="block text-xs font-semibold text-[#5C3D2E] mb-1.5 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[#8B5E3C]" />
                  <span>Selected Residence</span>
                </label>
                <select
                  id="booking-apartment-select"
                  value={selectedApartmentId}
                  onChange={(e) => setSelectedApartmentId(e.target.value)}
                  className="w-full bg-white border border-[#E8E0D5] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#111111] font-medium focus:ring-2 focus:ring-[#8B5E3C] focus:outline-none"
                >
                  {APARTMENTS.map((apt) => (
                    <option key={apt.id} value={apt.id}>
                      {apt.title} — {apt.location.city} (${apt.price.toLocaleString()}/mo)
                    </option>
                  ))}
                </select>
              </div>

              {/* Tour Type Radio / Buttons */}
              <div>
                <span className="block text-xs font-semibold text-[#5C3D2E] mb-1.5">
                  Tour Format
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setTourType('In-Person')}
                    className={`py-2 px-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      tourType === 'In-Person'
                        ? 'bg-[#8B5E3C] text-white border-[#8B5E3C] shadow-sm'
                        : 'bg-white border-[#E8E0D5] text-[#5C3D2E] hover:bg-[#EFE6DC]'
                    }`}
                  >
                    <Building className="w-3.5 h-3.5" />
                    <span>In-Person Walkthrough</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTourType('Virtual 3D')}
                    className={`py-2 px-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      tourType === 'Virtual 3D'
                        ? 'bg-[#8B5E3C] text-white border-[#8B5E3C] shadow-sm'
                        : 'bg-white border-[#E8E0D5] text-[#5C3D2E] hover:bg-[#EFE6DC]'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Live 3D Virtual Tour</span>
                  </button>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="viewing-date-input" className="block text-xs font-semibold text-[#5C3D2E] mb-1.5 flex items-center gap-1.5">
                    <CalendarCheck className="w-3.5 h-3.5 text-[#8B5E3C]" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    id="viewing-date-input"
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-white border border-[#E8E0D5] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#111111] focus:ring-2 focus:ring-[#8B5E3C] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="viewing-time-select" className="block text-xs font-semibold text-[#5C3D2E] mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#8B5E3C]" />
                    <span>Time Slot</span>
                  </label>
                  <select
                    id="viewing-time-select"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full bg-white border border-[#E8E0D5] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#111111] focus:ring-2 focus:ring-[#8B5E3C] focus:outline-none"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 pt-2 border-t border-[#E8E0D5]/70">
                <p className="text-xs font-semibold text-[#5C3D2E]">Your Contact Details</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white border border-[#E8E0D5] rounded-xl px-3.5 py-2 text-xs text-[#111111] focus:ring-2 focus:ring-[#8B5E3C] focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-[#E8E0D5] rounded-xl px-3.5 py-2 text-xs text-[#111111] focus:ring-2 focus:ring-[#8B5E3C] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address for Confirmation *"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-[#E8E0D5] rounded-xl px-3.5 py-2 text-xs text-[#111111] focus:ring-2 focus:ring-[#8B5E3C] focus:outline-none"
                  />
                </div>

                <div>
                  <textarea
                    rows={2}
                    placeholder="Specific questions or move-in timeline (optional)..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-white border border-[#E8E0D5] rounded-xl px-3.5 py-2 text-xs text-[#111111] focus:ring-2 focus:ring-[#8B5E3C] focus:outline-none resize-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#8B5E3C] hover:bg-[#5C3D2E] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-[0.98] cursor-pointer"
                >
                  Confirm Viewing Reservation
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
