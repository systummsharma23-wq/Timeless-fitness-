import React, { useState } from 'react';
import { FAQS_DATA } from '../data/gymData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#0d0e14] border-t border-[#222636]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-[#ccff00] mb-2">
            Clear Answers
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-2">
            Everything you need to know before walking into Timeless Fitness Jaipur.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#12141c] border border-stone-800/80 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-900/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-white text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-stone-900 flex items-center justify-center shrink-0 text-stone-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#ccff00]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-stone-800/50 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                    <div className="mt-3 text-[11px] font-mono text-stone-500 uppercase tracking-wider">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-stone-900/60 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#ccff00]/10 text-[#ccff00] flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading font-bold text-white text-sm">Have a question not listed here?</div>
              <div className="text-xs text-stone-400">Our front desk team in Malviya Nagar is available 5:30 AM – 10:30 PM.</div>
            </div>
          </div>
          <a
            href="https://wa.me/917976590461?text=Hi%20Timeless%20Fitness!%20I%20have%20a%20question%20regarding%20your%20gym."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white rounded-lg text-xs font-semibold shrink-0 transition-colors border border-stone-700"
          >
            Chat with Desk on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
