import React from 'react';
import { Dumbbell, Phone, MapPin, Clock, ArrowUp, Instagram, MessageCircle, Navigation } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080a] border-t border-[#1e2230] text-stone-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#ccff00] flex items-center justify-center text-black font-black">
                <Dumbbell className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-heading font-black text-xl tracking-wider text-white">TIMELESS</span>
                <span className="font-heading font-black text-xl tracking-wider text-[#ccff00]">FITNESS</span>
              </div>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Jaipur’s premier 4.7★ rated fitness arena on Jagatpura Road, Malviya Nagar. Famous for our open-air rooftop CrossFit deck, aesthetic cardio floor, certified trainers, and zero-intimidation community.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={GYM_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 hover:border-[#25D366] text-stone-300 hover:text-[#25D366] flex items-center justify-center transition-colors"
                title="WhatsApp Us"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${GYM_INFO.phoneClean}`}
                className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 hover:border-[#ccff00] text-stone-300 hover:text-[#ccff00] flex items-center justify-center transition-colors"
                title="Call Gym"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={GYM_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 hover:border-[#ccff00] text-stone-300 hover:text-[#ccff00] flex items-center justify-center transition-colors"
                title="Google Maps Location"
              >
                <Navigation className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <div className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Gym Navigation
            </div>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#facilities" className="hover:text-[#ccff00] transition-colors">Rooftop CrossFit Deck</a></li>
              <li><a href="#facilities" className="hover:text-[#ccff00] transition-colors">Aesthetic Cardio Floor</a></li>
              <li><a href="#facilities" className="hover:text-[#ccff00] transition-colors">Strength Free Weights</a></li>
              <li><a href="#programs" className="hover:text-[#ccff00] transition-colors">Zumba & Dance Fitness</a></li>
              <li><a href="#programs" className="hover:text-[#ccff00] transition-colors">Power Yoga Studio</a></li>
              <li><a href="#schedule" className="hover:text-[#ccff00] transition-colors">Batch Timings</a></li>
            </ul>
          </div>

          {/* Membership & Info */}
          <div className="space-y-3">
            <div className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Memberships
            </div>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#plans" className="hover:text-[#ccff00] transition-colors">Monthly Explorer Plan</a></li>
              <li><a href="#plans" className="hover:text-[#ccff00] transition-colors">Quarterly Transformation</a></li>
              <li><a href="#plans" className="hover:text-[#ccff00] transition-colors">Annual Champion VIP</a></li>
              <li><a href="#trial" className="hover:text-[#ccff00] transition-colors">1-Day Free Trial Pass</a></li>
              <li><a href="#why-us" className="hover:text-[#ccff00] transition-colors">Hygiene & Safety Protocols</a></li>
              <li><a href="#reviews" className="hover:text-[#ccff00] transition-colors">Member Reviews (4.7★)</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <div className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Jaipur Location
            </div>
            <div className="space-y-2 text-xs leading-relaxed text-stone-400">
              <p className="text-stone-300">
                {GYM_INFO.fullAddress}
              </p>
              <div className="pt-1">
                <span className="text-stone-500 block">Contact Desk:</span>
                <a href={`tel:${GYM_INFO.phoneClean}`} className="text-[#ccff00] font-mono font-bold hover:underline">
                  {GYM_INFO.phone}
                </a>
              </div>
              <div className="pt-1">
                <span className="text-stone-500 block">Hours:</span>
                <span>Mon–Sat: 5:30 AM – 10:30 PM</span>
                <br />
                <span>Sun: 7:00 AM – 1:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} Timeless Fitness. All rights reserved. RRVH+WF4, Jagatpura Rd, Malviya Nagar, Jaipur, Rajasthan 302017.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-stone-400">Rated 4.7 ⭐ on Google Maps</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
