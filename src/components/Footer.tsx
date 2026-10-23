import React, { useState } from 'react';
import { Home, ArrowRight, CheckCircle2, Instagram, Linkedin, Twitter, Github } from 'lucide-react';

interface FooterProps {
  onShowToast: (message: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onShowToast }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) {
      return;
    }
    setSubscribed(true);
    onShowToast('Subscribed to the HavenStone Private Architectural Gazette.');
  };

  return (
    <footer className="bg-[#111111] text-white pt-16 pb-12 border-t border-[#2E2824]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#2E2824]">
          {/* Brand & Ethos */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#8B5E3C] text-white flex items-center justify-center">
                <Home className="w-4 h-4" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                HavenStone
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-sm">
              Curated luxury apartments and residential leasing engineered by George. High-performance software meeting physical architectural refinement.
            </p>

            <div className="flex items-center gap-3 pt-2 text-[#C8A27A]">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="HavenStone Twitter"
                className="w-8 h-8 rounded-full bg-[#1A1A1A] hover:bg-[#8B5E3C] hover:text-white flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="HavenStone Instagram"
                className="w-8 h-8 rounded-full bg-[#1A1A1A] hover:bg-[#8B5E3C] hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="HavenStone LinkedIn"
                className="w-8 h-8 rounded-full bg-[#1A1A1A] hover:bg-[#8B5E3C] hover:text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="George GitHub Repository"
                className="w-8 h-8 rounded-full bg-[#1A1A1A] hover:bg-[#8B5E3C] hover:text-white flex items-center justify-center transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C8A27A]">
              Residences
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><a href="#apartments" className="hover:text-white transition-colors">Penthouse Suites</a></li>
              <li><a href="#apartments" className="hover:text-white transition-colors">Garden Terraces</a></li>
              <li><a href="#apartments" className="hover:text-white transition-colors">Industrial Lofts</a></li>
              <li><a href="#apartments" className="hover:text-white transition-colors">Heritage Townhouses</a></li>
              <li><a href="#apartments" className="hover:text-white transition-colors">Executive Studios</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C8A27A]">
              Platform
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><a href="#services" className="hover:text-white transition-colors">Property Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">3D Virtual Walkthroughs</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Escrow Protection</a></li>
              <li><a href="#about-developer" className="hover:text-white transition-colors">About George (Dev)</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Resident Support</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C8A27A]">
              Private Architectural Gazette
            </h4>
            <p className="text-xs text-white/70 font-light leading-relaxed">
              Curated bi-weekly drops of newly released penthouse listings and architectural design notes by George.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#1A1A1A] border border-[#C8A27A]/40 text-xs text-[#C8A27A]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>You are subscribed to the private registry.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center bg-[#1A1A1A] rounded-xl border border-[#2E2824] focus-within:border-[#8B5E3C] overflow-hidden p-1">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-transparent px-3 py-2 text-xs text-white placeholder:text-white/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="p-2 rounded-lg bg-[#8B5E3C] hover:bg-[#5C3D2E] text-white transition-colors shrink-0 cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <span className="block text-[10px] text-white/40">
                  Strictly zero spam. Unsubscribe with one click anytime.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} HavenStone Living Inc. All rights reserved.</p>
          <p className="text-white/70">
            Engineered & Designed by <span className="text-[#C8A27A] font-medium">George</span> · Software Developer
          </p>
          <div className="flex items-center gap-4 text-xs text-white/50">
            <a href="#home" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#home" className="hover:text-white transition-colors">Terms of Service</a>
            <span>·</span>
            <a href="#home" className="hover:text-white transition-colors">Fair Housing</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
