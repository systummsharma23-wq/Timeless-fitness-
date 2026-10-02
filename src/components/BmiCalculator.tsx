import React, { useState } from 'react';
import { Calculator, ArrowRight, Zap, Target, Activity } from 'lucide-react';

interface BmiCalculatorProps {
  onOpenTrialModal: () => void;
}

export const BmiCalculator: React.FC<BmiCalculatorProps> = ({ onOpenTrialModal }) => {
  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(172);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [fitnessGoal, setFitnessGoal] = useState<'fat_loss' | 'muscle_gain' | 'crossfit_stamina' | 'mobility'>('fat_loss');

  // BMI Calculation
  const heightInMeters = height / 100;
  const bmi = Number((weight / (heightInMeters * heightInMeters)).toFixed(1));

  let category = 'Normal Weight';
  let categoryColor = 'text-[#ccff00]';
  if (bmi < 18.5) {
    category = 'Underweight';
    categoryColor = 'text-amber-400';
  } else if (bmi >= 18.5 && bmi < 25) {
    category = 'Optimal & Healthy';
    categoryColor = 'text-[#ccff00]';
  } else if (bmi >= 25 && bmi < 30) {
    category = 'Overweight';
    categoryColor = 'text-[#ff5722]';
  } else {
    category = 'High BMI';
    categoryColor = 'text-red-400';
  }

  // Recommended zone based on goal and BMI
  let recommendation = {
    zone: 'Rooftop CrossFit & HIIT',
    desc: 'Metabolic conditioning under open air to maximize fat oxidation while preserving functional lean muscle.',
    dailyCalories: Math.round(weight * 24 * (gender === 'male' ? 1.0 : 0.9) * 1.3 - 350)
  };

  if (fitnessGoal === 'muscle_gain') {
    recommendation = {
      zone: 'Strength & Free Weights Iron Floor',
      desc: 'Progressive overload on Olympic power cages with certified coach spotting for hypertrophy.',
      dailyCalories: Math.round(weight * 24 * (gender === 'male' ? 1.0 : 0.9) * 1.4 + 300)
    };
  } else if (fitnessGoal === 'mobility') {
    recommendation = {
      zone: 'Studio A: Power Yoga & Mobility',
      desc: 'Deep spine decompression, postural realignment, and core stabilization routines.',
      dailyCalories: Math.round(weight * 24 * (gender === 'male' ? 1.0 : 0.9) * 1.2)
    };
  } else if (fitnessGoal === 'crossfit_stamina') {
    recommendation = {
      zone: 'Rooftop CrossFit Arena',
      desc: 'High-octane battle ropes, sled pushes, and pull-up rig intervals in the breezy Jaipur air.',
      dailyCalories: Math.round(weight * 24 * (gender === 'male' ? 1.0 : 0.9) * 1.5)
    };
  }

  return (
    <section className="py-20 bg-[#090a0d] border-t border-[#222636]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12141c] border border-[#222636] rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Inputs */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ccff00] mb-1">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Free Fitness Assessment Tool</span>
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                  Calculate Your Body Index & Training Protocol
                </h3>
                <p className="text-stone-400 text-xs sm:text-sm mt-1">
                  Adjust your metrics to see your personalized recommendation at Timeless Fitness Jaipur.
                </p>
              </div>

              {/* Sliders */}
              <div className="space-y-4">
                {/* Weight slider */}
                <div>
                  <div className="flex justify-between text-xs font-semibold text-stone-300 mb-1.5">
                    <span>Current Weight</span>
                    <span className="text-[#ccff00] font-mono text-sm">{weight} kg</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="150"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-[#ccff00]"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500 mt-1 font-mono">
                    <span>40 kg</span>
                    <span>95 kg</span>
                    <span>150 kg</span>
                  </div>
                </div>

                {/* Height slider */}
                <div>
                  <div className="flex justify-between text-xs font-semibold text-stone-300 mb-1.5">
                    <span>Height</span>
                    <span className="text-[#ccff00] font-mono text-sm">{height} cm ({Math.floor(height / 30.48)}' {Math.round((height % 30.48) / 2.54)}")</span>
                  </div>
                  <input
                    type="range"
                    min="130"
                    max="220"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-[#ccff00]"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500 mt-1 font-mono">
                    <span>130 cm</span>
                    <span>175 cm</span>
                    <span>220 cm</span>
                  </div>
                </div>

                {/* Goal Selector */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-2">Primary Goal</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'fat_loss', label: 'Fat Shred & Toning' },
                      { id: 'muscle_gain', label: 'Muscle Building' },
                      { id: 'crossfit_stamina', label: 'Rooftop CrossFit' },
                      { id: 'mobility', label: 'Yoga & Flexibility' },
                    ].map((g) => (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => setFitnessGoal(g.id as any)}
                        className={`p-2.5 text-xs font-medium rounded-lg text-left transition-colors cursor-pointer border ${
                          fitnessGoal === g.id
                            ? 'border-[#ccff00] bg-[#ccff00]/10 text-white font-semibold'
                            : 'border-stone-800 bg-stone-900/60 text-stone-400 hover:text-stone-200'
                        }`}
                      >
                        {g.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Output Card */}
            <div className="lg:col-span-6 bg-[#090a0d] border border-stone-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-stone-800/80">
                  <div>
                    <div className="text-[11px] font-medium text-stone-400 uppercase tracking-wider">Your Body Mass Index</div>
                    <div className="text-3xl font-heading font-black text-white mt-0.5">{bmi}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] font-medium text-stone-400 uppercase tracking-wider">Classification</div>
                    <div className={`text-base font-bold ${categoryColor} mt-0.5`}>{category}</div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="mt-5 space-y-4">
                  <div className="p-3.5 rounded-lg bg-stone-900/80 border border-stone-800">
                    <div className="flex items-center gap-1.5 text-xs text-[#ccff00] font-semibold mb-1">
                      <Target className="w-3.5 h-3.5" />
                      Recommended Training Zone:
                    </div>
                    <div className="text-sm font-heading font-bold text-white">
                      {recommendation.zone}
                    </div>
                    <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                      {recommendation.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-lg bg-stone-900/40 border border-stone-800/60 text-xs">
                    <span className="text-stone-400">Target Daily Intake:</span>
                    <span className="font-mono font-bold text-white">~{recommendation.dailyCalories} kcal / day</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800">
                <button
                  onClick={onOpenTrialModal}
                  className="w-full py-3 bg-[#ccff00] hover:bg-[#b8e600] text-black font-heading font-bold text-xs sm:text-sm tracking-wide rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Book Free Consultation With Coach</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
