import React from 'react';
import { MEMBERSHIP_PLANS, GYM_INFO } from '../data/gymData';
import { Check, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

interface MembershipPlansProps {
  onOpenTrialModal: () => void;
}

export const MembershipPlans: React.FC<MembershipPlansProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="plans" className="py-24 bg-[#0d0e14] border-t border-[#222636]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-[#ccff00] mb-2">
            Fair & Transparent
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Membership Packages
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-2">
            No hidden maintenance charges, no locking traps. All plans include full access to the iconic Rooftop CrossFit deck.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#151824] border-2 border-[#ccff00] shadow-[0_0_30px_rgba(204,255,0,0.15)] md:-translate-y-2'
                    : 'bg-[#10121a] border border-[#222636] hover:border-stone-700'
                }`}
              >
                {/* Popular Banner */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ccff00] text-black font-heading font-black text-[11px] uppercase tracking-wider py-1 px-4 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-black" />
                    <span>Most Popular in Jaipur</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading font-black text-xl text-white">
                      {plan.name}
                    </h3>
                    <span className="text-xs font-mono text-stone-400">
                      {plan.badge}
                    </span>
                  </div>

                  <div className="mb-6 pb-6 border-b border-stone-800">
                    <div className="flex items-baseline gap-2">
                      <span className="font-heading font-black text-3xl sm:text-4xl text-white">
                        {plan.price}
                      </span>
                      {plan.originalPrice && (
                        <span className="text-sm line-through text-stone-500 font-mono">
                          {plan.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-stone-400 font-medium block mt-1">
                      Billing interval: {plan.period}
                    </span>
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                        <div className="w-4 h-4 rounded-full bg-[#ccff00]/15 text-[#ccff00] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-stone-800/80">
                  <button
                    onClick={onOpenTrialModal}
                    className={`w-full py-3 font-heading font-bold text-xs sm:text-sm tracking-wide rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-[#ccff00] hover:bg-[#b8e600] text-black shadow-md'
                        : 'bg-stone-900 hover:bg-stone-800 border border-stone-700 text-white'
                    }`}
                  >
                    <span>Get Plan & Start Free Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/917976590461?text=Hi%20Timeless%20Fitness!%20I%20am%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20(${plan.price}).%20Please%20share%20joining%20details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 text-stone-400 hover:text-[#25D366] text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-xs text-stone-400">
          Need a student discount or custom corporate package for Jaipur teams?{' '}
          <a
            href={`tel:${GYM_INFO.phoneClean}`}
            className="text-[#ccff00] hover:underline font-semibold"
          >
            Call us directly at {GYM_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
