import React from 'react';
import { Code2, Terminal, Cpu, Layers, GitBranch, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import developerPortraitImg from '../assets/images/developer_george_portrait_1792731099503.jpg';

export const AboutDeveloper: React.FC = () => {
  const skills = [
    'Full-Stack TypeScript',
    'React & Reactive State',
    'Distributed Cloud Systems',
    'Tailwind Architecture',
    'Spatial 3D & WebGL',
    'API Security & Escrow Protocols',
    'Human-Centered UX Design',
    'Performance Optimization'
  ];

  const techFeatures = [
    {
      title: 'Real-Time In-Memory Indexing',
      detail: 'Instant multi-facet filtering across price, sqm, and amenities with zero UI latency.'
    },
    {
      title: 'Autonomous Viewing Scheduler',
      detail: 'Conflict-free calendar synchronization matching agents with verified prospective tenants.'
    },
    {
      title: 'Accessible Design System',
      detail: 'Tailored with WCAG AA compliance, semantic markup, and responsive touch math.'
    }
  ];

  return (
    <section id="about-developer" className="py-20 sm:py-28 bg-white border-t border-[#E8E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Outer Decorative Frame */}
              <div className="aspect-square rounded-3xl overflow-hidden border-2 border-[#E8E0D5] shadow-xl bg-[#EFE6DC]">
                <img
                  src={developerPortraitImg}
                  alt="George - Software Developer and Technology Designer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Founder Tag Floating Card */}
              <div className="absolute -bottom-6 -right-4 sm:right-4 bg-[#111111] text-white p-4 rounded-2xl shadow-xl border border-[#333] max-w-[240px]">
                <div className="flex items-center gap-2 text-[#C8A27A] text-xs font-semibold uppercase tracking-wider mb-0.5">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Platform Architect</span>
                </div>
                <div className="font-serif text-base font-bold text-white">George</div>
                <p className="text-[11px] text-white/70 font-light mt-0.5">
                  Software Developer & Technology Designer
                </p>
              </div>
            </div>
          </div>

          {/* Bio & Technology Architecture Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase text-[#8B5E3C] mb-2">
                Engineering The Future of Housing
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111]">
                Designed & Engineered by George.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#5C3D2E] leading-relaxed font-light">
              Hi, I’m <strong>George</strong>. As a software developer who designs new software and technologies, I believe the digital systems we interact with should be as intentional, refined, and durable as the physical architecture we inhabit.
            </p>

            <p className="text-sm sm:text-base text-[#5C3D2E] leading-relaxed font-light">
              Frustrated by clunky legacy rental portals plagued with bait-and-switch listings and opaque fee structures, I engineered <strong>HavenStone</strong> from scratch. The mission: combine high-performance reactive web engineering with white-glove architectural aesthetics to deliver verified housing with instantaneous viewing scheduling and transparent digital leasing.
            </p>

            {/* Note on the Tech Behind the Platform */}
            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8E0D5]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#111111] uppercase tracking-wider mb-3">
                <Terminal className="w-4 h-4 text-[#8B5E3C]" />
                <span>The Technology Behind The Platform</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {techFeatures.map((tf, i) => (
                  <div key={i} className="text-xs">
                    <span className="font-semibold text-[#8B5E3C] block mb-1">
                      {tf.title}
                    </span>
                    <p className="text-[#5C3D2E]/80 text-[11px] font-light leading-normal">
                      {tf.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill Badges */}
            <div>
              <span className="block text-xs font-semibold text-[#5C3D2E] uppercase tracking-wider mb-2.5">
                Core Engineering Capabilities:
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#E8E0D5] text-[#111111] text-xs font-medium hover:border-[#8B5E3C] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
