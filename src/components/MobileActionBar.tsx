import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface MobileActionBarProps {
  onOpenTrialModal: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenTrialModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0a0b10]/95 backdrop-blur-md border-t border-[#222636] p-2.5 px-3 flex items-center justify-between gap-2 shadow-2xl">
      {/* Quick Direct Call */}
      <a
        href={`tel:${GYM_INFO.phoneClean}`}
        className="flex-1 py-2.5 px-2 bg-stone-900 border border-stone-800 rounded-lg flex items-center justify-center gap-1.5 text-xs font-semibold text-stone-200 active:bg-stone-800"
      >
        <Phone className="w-3.5 h-3.5 text-[#ccff00]" />
        <span>Call</span>
      </a>

      {/* WhatsApp Chat */}
      <a
        href={GYM_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-2 bg-[#25D366]/15 border border-[#25D366]/30 rounded-lg flex items-center justify-center gap-1.5 text-xs font-semibold text-[#25D366] active:bg-[#25D366]/25"
      >
        <MessageCircle className="w-3.5 h-3.5 fill-[#25D366] text-[#0a0b10]" />
        <span>Chat</span>
      </a>

      {/* Primary CTA - Free Trial Pass */}
      <button
        onClick={onOpenTrialModal}
        className="flex-[1.6] py-2.5 px-3 bg-[#ccff00] active:bg-[#b8e600] text-black font-heading font-black text-xs uppercase tracking-wide rounded-lg flex items-center justify-center gap-1.5 shadow-[0_2px_12px_rgba(204,255,0,0.3)] cursor-pointer"
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>Free Trial</span>
      </button>
    </div>
  );
};
