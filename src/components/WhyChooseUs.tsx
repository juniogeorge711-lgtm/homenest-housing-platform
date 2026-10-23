import React from 'react';
import { CheckCircle2, Lock, Clock, Cpu, ArrowUpRight } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: <CheckCircle2 className="w-6 h-6 text-[#8B5E3C]" />,
      title: '100% Verified Physical Listings',
      description: 'Zero phantom ads. Every floorplan, photo, and decibel level is physically audited by licensed inspectors before listing.'
    },
    {
      icon: <Lock className="w-6 h-6 text-[#8B5E3C]" />,
      title: 'Escrow-Grade Secure Payments',
      description: 'Holding deposits and monthly leases are encrypted and routed through regulated escrow vaults, releasing funds solely upon verified occupancy.'
    },
    {
      icon: <Clock className="w-6 h-6 text-[#8B5E3C]" />,
      title: '24/7 Human Concierge Desk',
      description: 'Instant response times via phone or WhatsApp. From late-night lockouts to emergency maintenance dispatch, we are on-call 24 hours.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#8B5E3C]" />,
      title: 'Smart Living Architecture',
      description: 'Engineered by George: real-time lease status, digital cryptographic key provisioning, and automated utilities transfer with zero paperwork.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-[#E8E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-5 space-y-5">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#8B5E3C]">
              The HavenStone Standard
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] text-balance">
              Why Discerning Residents Choose HavenStone.
            </h2>
            <p className="text-sm sm:text-base text-[#5C3D2E] font-light leading-relaxed">
              Traditional rental leasing is broken by opaque brokers, fake photographs, and sluggish bureaucracy. We re-engineered the rental experience from first principles.
            </p>

            <div className="pt-2">
              <a
                href="#apartments"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#8B5E3C] hover:bg-[#5C3D2E] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
              >
                <span>Browse Verified Residences</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 4 Core Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#E8E0D5] hover:border-[#C8A27A] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E8E0D5] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#111111]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#5C3D2E]/90 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
