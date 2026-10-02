import React from 'react';
import { Star, ArrowRight, ShieldCheck, Flame, Compass, MessageCircle } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface HeroProps {
  onOpenTrialModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrialModal }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with layered gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_gym_1790950955259.jpg"
          alt="Timeless Fitness modern athletic gym floor in Jaipur"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.15] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0d] via-[#090a0d]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090a0d] via-[#090a0d]/40 to-transparent" />
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Unboxed Metadata Header (Zero-Pill Compliance) */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-stone-300 mb-4 tracking-wide">
            <span className="flex items-center gap-1.5 text-[#ccff00]">
              <Star className="w-4 h-4 fill-[#ccff00] text-[#ccff00]" />
              <span className="font-bold text-white">{GYM_INFO.rating} ⭐ Rating</span>
            </span>
            <span aria-hidden="true" className="text-stone-500">·</span>
            <span>320+ Real Member Reviews</span>
            <span aria-hidden="true" className="text-stone-500">·</span>
            <span className="text-stone-400">Malviya Nagar, Jaipur</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[1.05] mb-6">
            Transform Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-stone-200 to-[#ccff00]">
              Body & Mind
            </span> <br />
            <span className="text-[#ccff00] drop-shadow-[0_0_25px_rgba(204,255,0,0.3)]">
              Under Open Skies.
            </span>
          </h1>

          {/* Descriptive Subtitle */}
          <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed mb-8">
            Experience Jaipur’s premier fitness destination on Jagatpura Road. Featuring our signature{' '}
            <strong className="text-white font-semibold">Rooftop CrossFit Arena</strong>, aesthetic neon cardio floor,
            heavy iron zone, and certified coaches who elevate you in a welcoming, non-intimidating space.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
            <button
              onClick={onOpenTrialModal}
              className="px-7 py-3.5 bg-[#ccff00] hover:bg-[#b8e600] text-black font-heading font-extrabold text-base tracking-wide rounded-lg transition-all transform hover:-translate-y-0.5 shadow-[0_8px_24px_rgba(204,255,0,0.25)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Your Free Trial Pass</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>

            <a
              href="#facilities"
              className="px-6 py-3.5 bg-stone-900/80 hover:bg-stone-800 border border-stone-700 hover:border-stone-500 text-white font-medium text-sm rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-[#ccff00]" />
              <span>Explore Facilities & Rooftop</span>
            </a>

            <a
              href={GYM_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] hover:text-white font-medium text-sm rounded-lg transition-all flex items-center justify-center gap-2"
              title="Chat with us on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>

          {/* Proof Strip with Typographic Dividers */}
          <div className="pt-6 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div>
              <div className="text-2xl lg:text-3xl font-heading font-black text-white">4.7 / 5</div>
              <div className="text-xs text-stone-400 mt-0.5">Top-Rated on Google</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-heading font-black text-[#ccff00]">ROOFTOP</div>
              <div className="text-xs text-stone-400 mt-0.5">Open-Air CrossFit Deck</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-heading font-black text-white">100%</div>
              <div className="text-xs text-stone-400 mt-0.5">Certified Expert Coaches</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-heading font-black text-[#ff5722]">ZERO</div>
              <div className="text-xs text-stone-400 mt-0.5">Intimidation Atmosphere</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient corner glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ccff00]/10 rounded-full blur-[140px] pointer-events-none" />
    </section>
  );
};
