import React from 'react';
import { ShieldCheck, Wind, Sparkles, HeartHandshake, Award, CheckCircle2 } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: HeartHandshake,
      title: 'Non-Intimidating, Welcoming Environment',
      desc: 'No locker-room machismo or judgment. Our atmosphere is intentionally structured to make beginners, women, and seasoned lifters feel equally respected and energized from day one.'
    },
    {
      icon: Wind,
      title: 'Rooftop Fresh Air vs Basement Stench',
      desc: 'Tired of damp basement gym odors? Our signature rooftop CrossFit deck gives you open-air circulation, fresh Jaipur breeze, and glorious sunset lighting while you train.'
    },
    {
      icon: Award,
      title: '100% Certified, Form-First Trainers',
      desc: 'Our staff are certified in exercise science, biomechanics, and CPR. They correct your technique and cheer your progress instead of endlessly pitching aggressive supplement schemes.'
    },
    {
      icon: Sparkles,
      title: 'Obsessive Hygiene & Equipment Care',
      desc: 'Sanitization sweeps occur throughout every shift. Barbells are brushed, upholstery is wiped, and machines undergo weekly preventative maintenance for zero squeaks and max safety.'
    },
    {
      icon: ShieldCheck,
      title: 'Dedicated Speciality Studios',
      desc: 'Separate zones ensure you never get crowded out. CrossFit happens on the rooftop turf, Zumba in the acoustic timber studio, and heavy deadlifts in the vibration-dampened iron pit.'
    },
    {
      icon: CheckCircle2,
      title: 'Verified 4.7★ Reputation in Jaipur',
      desc: 'Trusted by over 320+ reviewers across Malviya Nagar, Jagatpura, and Model Town. We build long-term lifestyle habits, not just empty memberships.'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#0d0e14] border-t border-[#222636] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column / Heading & Narrative */}
          <div className="lg:col-span-5">
            <div className="text-xs font-bold uppercase tracking-widest text-[#ccff00] mb-2">
              The Timeless Difference
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-6">
              A Gym Built Around <br />
              <span className="text-[#ccff00]">You, Not The Ego.</span>
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
              Most gyms in Jaipur are either overcrowded basements with outdated pulleys or overpriced luxury lounges with zero coaching.
              <strong className="text-white block mt-2">
                Timeless Fitness bridges the gap: World-class athletic equipment, open rooftop skies, and a genuinely supportive community.
              </strong>
            </p>

            <div className="p-5 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-3">
              <div className="flex items-center justify-between text-xs text-stone-400">
                <span>Google Verified Score</span>
                <span className="text-[#ccff00] font-bold font-mono">4.7 / 5.0 ⭐</span>
              </div>
              <div className="w-full bg-stone-800 h-2 rounded-full overflow-hidden">
                <div className="bg-[#ccff00] h-full w-[94%]" />
              </div>
              <div className="text-xs text-stone-400">
                Consistently ranked highest for cleanliness, rooftop atmosphere, and helpful trainer staff in Malviya Nagar.
              </div>
            </div>
          </div>

          {/* Right Column / Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((pt, index) => {
              const Icon = pt.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-[#12141c] border border-stone-800/80 hover:border-stone-600 transition-all flex flex-col justify-start"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#ccff00]/10 border border-[#ccff00]/20 flex items-center justify-center text-[#ccff00] mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-1.5">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
