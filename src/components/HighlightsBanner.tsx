import React from 'react';
import { Wind, Sparkles, Dumbbell, Users, CheckCircle2 } from 'lucide-react';

export const HighlightsBanner: React.FC = () => {
  const highlights = [
    {
      icon: Wind,
      title: 'Famous Rooftop CrossFit',
      desc: 'Breathe pure fresh air with panoramic Jaipur skyline views'
    },
    {
      icon: Sparkles,
      title: 'Aesthetic Cardio Deck',
      desc: 'High-end running machines with mood-elevating neon atmosphere'
    },
    {
      icon: Dumbbell,
      title: 'Heavy Strength Iron Zone',
      desc: 'Olympic calibrated plates, multiple power cages & dumbbells'
    },
    {
      icon: Users,
      title: 'Supportive & Welcoming',
      desc: 'Zero-judgment, clean community loved by women & beginners'
    }
  ];

  return (
    <section className="bg-[#0e1017] border-y border-[#222636] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-stone-900/40 border border-stone-800/70 hover:border-stone-700 transition-colors"
              >
                <div className="w-11 h-11 shrink-0 rounded-lg bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center text-[#ccff00]">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-base tracking-wide flex items-center gap-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
