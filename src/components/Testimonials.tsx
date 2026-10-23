import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/apartmentsData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#E8E0D5]"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#8B5E3C] mb-2">
            Resident Experiences
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111]">
            Trusted by Modern Urbanites.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#5C3D2E] font-light">
            Real stories from residents who secured their architectural homes through HavenStone.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="mt-12 bg-white rounded-3xl border border-[#E8E0D5] p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute top-6 right-8 text-[#FAF7F2] pointer-events-none">
            <Quote className="w-24 h-24 text-[#EFE6DC]" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C8A27A] text-[#C8A27A]" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="font-serif text-lg sm:text-2xl text-[#111111] italic font-normal leading-relaxed">
              "{current.quote}"
            </blockquote>

            {/* Author Info */}
            <div className="mt-8 flex flex-col items-center">
              <img
                src={current.avatar}
                alt={current.name}
                referrerPolicy="no-referrer"
                className="w-14 h-14 rounded-full object-cover border-2 border-[#8B5E3C] shadow-sm mb-3"
              />
              <h4 className="font-serif text-base font-bold text-[#111111]">
                {current.name}
              </h4>
              <p className="text-xs text-[#5C3D2E]">
                {current.role} · <span className="font-semibold">{current.city}</span>
              </p>
              <span className="text-[11px] text-[#8B5E3C] mt-1 font-medium">
                Resident of {current.apartmentName}
              </span>
            </div>
          </div>

          {/* Controls: Prev & Next */}
          <div className="mt-8 flex items-center justify-between pt-6 border-t border-[#E8E0D5]/70">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[#8B5E3C]' : 'w-2 bg-[#E8E0D5] hover:bg-[#C8A27A]'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setCurrentIndex((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1))
                }
                aria-label="Previous testimonial"
                className="w-9 h-9 rounded-full bg-[#FAF7F2] hover:bg-[#EFE6DC] text-[#111111] flex items-center justify-center transition-colors border border-[#E8E0D5] cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setCurrentIndex((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0))
                }
                aria-label="Next testimonial"
                className="w-9 h-9 rounded-full bg-[#FAF7F2] hover:bg-[#EFE6DC] text-[#111111] flex items-center justify-center transition-colors border border-[#E8E0D5] cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
