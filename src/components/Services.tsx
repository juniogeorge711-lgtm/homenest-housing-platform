import React from 'react';
import { Building2, ShieldCheck, Compass, Headphones, ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data/apartmentsData';

export const Services: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#8B5E3C]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#8B5E3C]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#8B5E3C]" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-[#8B5E3C]" />;
      default:
        return <Building2 className="w-6 h-6 text-[#8B5E3C]" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#E8E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#8B5E3C] mb-2">
            Architectural Solutions
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111]">
            Comprehensive Rental & Property Services.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C3D2E] font-light leading-relaxed">
            Bridging refined residential curation with George’s modern software infrastructure to create an effortless leasing lifecycle.
          </p>
        </div>

        {/* 4 Core Services Bento Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl border border-[#E8E0D5] p-7 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E8E0D5] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(srv.icon)}
                  </div>
                  <span className="font-serif text-2xl font-bold text-[#E8E0D5] group-hover:text-[#C8A27A] transition-colors tabular-nums">
                    {srv.number}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] group-hover:text-[#8B5E3C] transition-colors">
                  {srv.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#5C3D2E]/90 leading-relaxed font-light">
                  {srv.description}
                </p>

                {/* Features List */}
                <div className="mt-6 pt-5 border-t border-[#E8E0D5]/60 space-y-2.5">
                  {srv.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-xs text-[#111111]">
                      <span className="w-4 h-4 rounded-full bg-[#EFE6DC] flex items-center justify-center text-[#8B5E3C] shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#8B5E3C] group-hover:text-[#5C3D2E] transition-colors"
                >
                  <span>Inquire about this service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
