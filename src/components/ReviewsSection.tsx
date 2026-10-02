import React from 'react';
import { Star, ShieldCheck, ThumbsUp, Quote, ExternalLink } from 'lucide-react';
import { REVIEWS_DATA, GYM_INFO } from '../data/gymData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#090a0d] border-t border-[#222636]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Rating Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#ccff00] mb-2">
              Google Verified Feedback
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
              Loved By Jaipur’s Fitness Community
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-2 max-w-xl">
              Real stories from members in Malviya Nagar, Jagatpura, and Model Town who transformed their routine at Timeless Fitness.
            </p>
          </div>

          {/* Rating aggregate scoreboard */}
          <div className="flex items-center gap-6 p-4 rounded-xl bg-stone-900/60 border border-stone-800 shrink-0">
            <div className="text-center pr-6 border-r border-stone-800">
              <div className="text-3xl sm:text-4xl font-heading font-black text-white">
                {GYM_INFO.rating}
              </div>
              <div className="flex items-center gap-0.5 justify-center my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#ccff00] text-[#ccff00]" />
                ))}
              </div>
              <div className="text-[11px] text-stone-400 font-mono">
                {GYM_INFO.reviewsCount}+ Reviews
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-stone-300">
              <div className="flex items-center justify-between gap-4">
                <span className="text-stone-400">Rooftop Experience</span>
                <span className="font-bold text-white">5.0 / 5</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-stone-400">Hygiene & Cleanliness</span>
                <span className="font-bold text-white">4.9 / 5</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-stone-400">Trainer Knowledge</span>
                <span className="font-bold text-white">4.8 / 5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="bg-[#12141c] border border-stone-800/80 rounded-xl p-6 hover:border-stone-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#ccff00] text-[#ccff00]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-stone-500">{review.date}</span>
                </div>

                {/* Subtle highlight tag - clean text, no pill box */}
                <div className="text-xs font-semibold text-[#ccff00] uppercase tracking-wider mb-2">
                  Highlight: {review.highlightTag}
                </div>

                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <div>
                  <div className="font-heading font-bold text-white text-sm">
                    {review.author}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {review.role}
                  </div>
                </div>

                <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center" title="Verified Google Review">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={GYM_INFO.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-stone-400 hover:text-[#ccff00] transition-colors"
          >
            <span>Read all 320+ authentic reviews on Google Maps listing</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
