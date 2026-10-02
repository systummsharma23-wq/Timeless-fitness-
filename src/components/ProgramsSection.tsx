import React, { useState } from 'react';
import { PROGRAMS } from '../data/gymData';
import { Flame, Clock, Target, UserCheck, ArrowRight } from 'lucide-react';

interface ProgramsSectionProps {
  onOpenTrialModal: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenTrialModal }) => {
  const [filter, setFilter] = useState<'All' | 'CrossFit' | 'Dance' | 'Strength' | 'Yoga'>('All');

  const filteredPrograms = PROGRAMS.filter((prog) => {
    if (filter === 'All') return true;
    if (filter === 'CrossFit') return prog.category.includes('Functional') || prog.category.includes('Metabolic');
    if (filter === 'Dance') return prog.category.includes('Dance');
    if (filter === 'Strength') return prog.category.includes('Strength') || prog.category.includes('Customized');
    if (filter === 'Yoga') return prog.category.includes('Mind');
    return true;
  });

  return (
    <section id="programs" className="py-24 bg-[#0d0e14] border-t border-[#222636] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#ccff00] mb-2">
              Structured For Real Results
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
              Classes & Coaching Programs
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-2">
              Whether your goal is explosive stamina on the rooftop, lean muscle hypertrophy, or rhythmic fat-burning,
              we have coached sessions for every ambition.
            </p>
          </div>

          {/* Interactive filter control (allowed) */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-900 border border-stone-800 rounded-lg mt-6 md:mt-0 shrink-0 overflow-x-auto no-scrollbar">
            {(['All', 'CrossFit', 'Strength', 'Dance', 'Yoga'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  filter === tab
                    ? 'bg-[#ccff00] text-black shadow-sm'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-[#12141d] border border-[#222636] rounded-xl p-6 hover:border-stone-600 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* Quiet unboxed category label */}
                <div className="flex items-center justify-between text-xs text-stone-400 mb-3">
                  <span className="font-medium text-[#ccff00] uppercase tracking-wider">{program.category}</span>
                  <span className="text-stone-500 font-mono text-[11px]">{program.intensity} Intensity</span>
                </div>

                <h3 className="font-heading font-black text-xl text-white group-hover:text-[#ccff00] transition-colors mb-2">
                  {program.title}
                </h3>

                <p className="text-stone-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {program.description}
                </p>

                {/* Metrics with typographic separators */}
                <div className="space-y-2 py-3 border-y border-stone-800/80 text-xs text-stone-300">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-stone-400">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      Session Length
                    </span>
                    <span className="font-semibold text-white">{program.duration}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-stone-400">
                      <Flame className="w-3.5 h-3.5 text-[#ff5722]" />
                      Estimated Burn
                    </span>
                    <span className="font-semibold text-white">{program.caloriesBurn}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-stone-400">
                      <UserCheck className="w-3.5 h-3.5 text-[#ccff00]" />
                      Lead Coach
                    </span>
                    <span className="font-semibold text-stone-200">{program.trainer}</span>
                  </div>
                </div>

                {/* Target outcome */}
                <div className="mt-4 text-xs text-stone-400 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-[#ccff00] shrink-0" />
                  <span className="truncate">Focus: {program.targetAudience}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800/60">
                <button
                  onClick={onOpenTrialModal}
                  className="w-full py-2.5 px-4 bg-stone-900 hover:bg-[#ccff00] text-stone-300 hover:text-black font-semibold text-xs rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer border border-stone-800 group-hover:border-[#ccff00]"
                >
                  <span>Book Free Class Trial</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
