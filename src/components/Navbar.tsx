import React, { useState, useEffect } from 'react';
import { Phone, Clock, Menu, X, ArrowUpRight, Dumbbell } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface NavbarProps {
  onOpenTrialModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrialModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Facilities & Rooftop', href: '#facilities' },
    { name: 'Programs', href: '#programs' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Plans', href: '#plans' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090a0d]/95 backdrop-blur-md border-b border-[#222636] shadow-xl py-3'
          : 'bg-gradient-to-b from-[#090a0d]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#ccff00] flex items-center justify-center text-black font-black transition-transform group-hover:scale-105 shadow-[0_0_20px_rgba(204,255,0,0.35)]">
              <Dumbbell className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-heading font-black text-xl tracking-wider text-white">TIMELESS</span>
                <span className="font-heading font-black text-xl tracking-wider text-[#ccff00]">FITNESS</span>
              </div>
              <div className="text-[11px] font-medium tracking-widest text-stone-400 uppercase">
                Malviya Nagar · Jaipur
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-stone-300 hover:text-[#ccff00] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#ccff00] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${GYM_INFO.phoneClean}`}
              className="flex items-center gap-2 text-xs font-semibold text-stone-300 hover:text-white transition-colors px-3 py-2 border border-stone-800 rounded-lg hover:border-stone-700 bg-stone-900/60"
              title="Call Timeless Fitness"
            >
              <Phone className="w-3.5 h-3.5 text-[#ccff00]" />
              <span>{GYM_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenTrialModal}
              className="px-5 py-2.5 bg-[#ccff00] hover:bg-[#b8e600] text-black font-heading font-bold text-sm tracking-wide rounded-lg transition-all transform hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(204,255,0,0.25)] flex items-center gap-1.5 cursor-pointer"
            >
              <span>Book Free Trial</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenTrialModal}
              className="px-3 py-1.5 bg-[#ccff00] text-black font-heading font-bold text-xs rounded-md"
            >
              Free Trial
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white rounded-lg border border-stone-800 bg-stone-900/80"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-[#222636] bg-[#0d0e14] rounded-xl p-5 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-stone-300 hover:text-[#ccff00] py-1 border-b border-stone-800/60"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-3 flex flex-col gap-2.5">
                <a
                  href={`tel:${GYM_INFO.phoneClean}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-lg border border-stone-800 bg-stone-900 text-stone-200 text-sm font-semibold"
                >
                  <Phone className="w-4 h-4 text-[#ccff00]" />
                  <span>Call {GYM_INFO.phone}</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTrialModal();
                  }}
                  className="w-full py-3 bg-[#ccff00] text-black font-heading font-bold text-sm tracking-wide rounded-lg flex items-center justify-center gap-2"
                >
                  <span>Claim 1-Day VIP Trial Pass</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-stone-400 pt-1">
                  <Clock className="w-3.5 h-3.5 text-stone-400" />
                  <span>Open today 5:30 AM – 10:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
