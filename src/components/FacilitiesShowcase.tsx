import React, { useState } from 'react';
import { FACILITY_ZONES } from '../data/gymData';
import { Check, ArrowRight, Eye, Sparkles } from 'lucide-react';

interface FacilitiesShowcaseProps {
  onOpenTrialModal: () => void;
}

export const FacilitiesShowcase: React.FC<FacilitiesShowcaseProps> = ({ onOpenTrialModal }) => {
  const [activeZoneId, setActiveZoneId] = useState(FACILITY_ZONES[0].id);

  const activeZone = FACILITY_ZONES.find((z) => z.id === activeZoneId) || FACILITY_ZONES[0];

  return (
    <section id="facilities" className="py-24 bg-[#090a0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ccff00] mb-2">
            <span>Signature Training Floors</span>
            <span aria-hidden="true">·</span>
            <span>Jaipur’s Most Complete Gym</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Engineered For Every Dimension Of Fitness
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-3 leading-relaxed">
            From the high-altitude stamina of our open-air rooftop to the focused aesthetic neon cardio sanctuary,
            explore four world-class training zones built under one roof.
          </p>
        </div>

        {/* Interactive Zone Tabs (Functional Filter Buttons - Allowed under skill rules) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {FACILITY_ZONES.map((zone) => {
            const isActive = zone.id === activeZoneId;
            return (
              <button
                key={zone.id}
                onClick={() => setActiveZoneId(zone.id)}
                className={`px-5 py-2.5 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider rounded-lg transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#ccff00] text-black shadow-[0_0_20px_rgba(204,255,0,0.3)]'
                    : 'bg-stone-900/80 text-stone-400 hover:text-white hover:bg-stone-800 border border-stone-800'
                }`}
              >
                {zone.title.split(' ')[0]} {zone.title.split(' ')[1] || ''}
              </button>
            );
          })}
        </div>

        {/* Active Zone Spotlight Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#12141c] border border-[#222636] rounded-2xl p-6 lg:p-10 shadow-2xl relative">
          {/* Visual Showcase (7 cols) */}
          <div className="lg:col-span-7 relative group rounded-xl overflow-hidden border border-stone-800/80">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-950">
              <img
                src={activeZone.image}
                alt={activeZone.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Floating Info on Image */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
              <div className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 font-medium">
                {activeZone.tagline}
              </div>
              <div className="bg-[#ccff00]/90 text-black px-3 py-1.5 rounded-md font-bold uppercase tracking-wider text-[11px]">
                Tour Zone
              </div>
            </div>
          </div>

          {/* Details & Specs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="text-xs font-semibold text-[#ccff00] uppercase tracking-wider mb-1">
                {activeZone.subtitle}
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-wide mb-4">
                {activeZone.title}
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-6">
                {activeZone.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-2.5 mb-8">
                {activeZone.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-200">
                    <div className="w-5 h-5 rounded-full bg-[#ccff00]/15 text-[#ccff00] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Technical Specifications */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-stone-900/60 border border-stone-800/80 mb-6">
                {activeZone.specs.map((spec, i) => (
                  <div key={i}>
                    <div className="text-[11px] font-medium text-stone-400 uppercase tracking-wider">{spec.label}</div>
                    <div className="text-xs font-semibold text-white mt-0.5">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={onOpenTrialModal}
                className="px-6 py-3 bg-[#ccff00] hover:bg-[#b8e600] text-black font-heading font-bold text-xs sm:text-sm tracking-wide rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_16px_rgba(204,255,0,0.2)]"
              >
                <span>Experience {activeZone.title.split(' ')[0]} on Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Mini Thumbnails Quick Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {FACILITY_ZONES.map((zone) => {
            const isCurrent = zone.id === activeZoneId;
            return (
              <div
                key={zone.id}
                onClick={() => setActiveZoneId(zone.id)}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
                  isCurrent
                    ? 'border-[#ccff00] bg-[#1a1d28]'
                    : 'border-stone-800 bg-[#10121a] hover:border-stone-700'
                }`}
              >
                <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                  <img
                    src={zone.image}
                    alt={zone.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden">
                  <div className="font-heading font-bold text-xs text-white truncate">
                    {zone.title}
                  </div>
                  <div className="text-[11px] text-stone-400 truncate mt-0.5">
                    {zone.subtitle.split(' ')[0]} {zone.subtitle.split(' ')[1]}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
