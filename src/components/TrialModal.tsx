import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Phone, Calendar, Clock, User, Target, MessageCircle } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [slot, setSlot] = useState('Sunset Rooftop Batch (5:30 PM - 7:30 PM)');
  const [goal, setGoal] = useState('Rooftop CrossFit');
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [submitted, setSubmitted] = useState(false);
  const [passId, setPassId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const id = `TF-JP-${Math.floor(10000 + Math.random() * 90000)}`;
    setPassId(id);
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Timeless Fitness! I generated a Free Trial Pass (${passId}) for ${name} (${phone}) on ${date} for ${slot}. Please confirm my slot!`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#12141c] border border-[#222636] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#ccff00] mb-1">
                Complimentary 1-Day Access
              </div>
              <h3 className="font-heading font-black text-2xl text-white">
                Book Your Free VIP Gym Trial
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                Train under Jaipur's open sky on our Rooftop CrossFit deck or experience the aesthetic cardio floor.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                  Your Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 w-4 h-4 text-stone-500" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full bg-[#090a0d] border border-stone-800 rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#ccff00]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                  WhatsApp Contact *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3 w-4 h-4 text-stone-500" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your mobile number"
                    className="w-full bg-[#090a0d] border border-stone-800 rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#ccff00]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                    Visit Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#090a0d] border border-stone-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#ccff00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                    Batch Slot
                  </label>
                  <select
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                    className="w-full bg-[#090a0d] border border-stone-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#ccff00] cursor-pointer"
                  >
                    <option value="Sunrise Rooftop (6:00 AM - 8:00 AM)">Sunrise (6:00 AM)</option>
                    <option value="Morning Strength (8:30 AM - 11:00 AM)">Morning (8:30 AM)</option>
                    <option value="Sunset Rooftop (5:30 PM - 7:30 PM)">Sunset Rooftop (5:30 PM)</option>
                    <option value="Evening Prime (7:30 PM - 10:00 PM)">Evening (7:30 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                  Fitness Interest
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {['Rooftop CrossFit', 'Aesthetic Cardio', 'Heavy Strength', 'Zumba & Yoga'].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setGoal(item)}
                      className={`p-2 rounded-lg border text-left cursor-pointer transition-colors ${
                        goal === item
                          ? 'border-[#ccff00] bg-[#ccff00]/10 text-white font-semibold'
                          : 'border-stone-800 bg-stone-900/60 text-stone-400'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#ccff00] hover:bg-[#b8e600] text-black font-heading font-black text-sm uppercase tracking-wider rounded-lg transition-all shadow-[0_4px_20px_rgba(204,255,0,0.3)] cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Issue My Free Pass</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ccff00]" />
                <span>Valid at Timeless Fitness Malviya Nagar, Jaipur.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-left space-y-5 animate-in fade-in">
            <div className="p-4 rounded-xl bg-[#090a0d] border border-[#ccff00]/40">
              <div className="text-[10px] font-mono text-[#ccff00] uppercase tracking-widest">
                PASS CONFIRMED · {passId}
              </div>
              <h3 className="font-heading font-bold text-xl text-white mt-1">
                Welcome, {name}!
              </h3>
              <p className="text-xs text-stone-300 mt-1">
                Your 1-Day Trial Pass is ready for <strong className="text-white">{date}</strong> during the{' '}
                <strong className="text-[#ccff00]">{slot}</strong>.
              </p>
            </div>

            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ccff00]" />
                <span>Full access to Rooftop CrossFit Arena & Cardio floor</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ccff00]" />
                <span>Complimentary trainer form & body evaluation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ccff00]" />
                <span>Address: 5, Jagatpura Rd, Model Town - B, Malviya Nagar</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <a
                href={`https://wa.me/917976590461?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-black font-heading font-bold text-xs sm:text-sm tracking-wide rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-black text-[#25D366]" />
                <span>Send Pass Details to WhatsApp Desk</span>
              </a>

              <button
                onClick={resetAndClose}
                className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-300 text-xs font-semibold rounded-lg cursor-pointer"
              >
                Done / Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
