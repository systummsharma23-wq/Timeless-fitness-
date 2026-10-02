import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, Phone, User, Target, CheckCircle2, MessageCircle, QrCode, Download, Share2 } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const FreeTrialForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [slot, setSlot] = useState('Sunset Rooftop Batch (5:30 PM - 7:30 PM)');
  const [goal, setGoal] = useState('Rooftop CrossFit & Stamina');
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [submitted, setSubmitted] = useState(false);
  const [passId, setPassId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const generatedId = `TF-JP-${Math.floor(10000 + Math.random() * 90000)}`;
    setPassId(generatedId);
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Timeless Fitness Team! 🏋️‍♂️\nI have generated my Free VIP Trial Pass on your website.\n\n` +
    `• Pass ID: ${passId}\n` +
    `• Name: ${name}\n` +
    `• Phone: ${phone}\n` +
    `• Preferred Slot: ${slot}\n` +
    `• Target Goal: ${goal}\n` +
    `• Visit Date: ${date}\n\n` +
    `Looking forward to visiting your gym at Jagatpura Rd / Malviya Nagar!`
  );

  return (
    <section id="trial" className="py-24 bg-[#0d0e14] border-t border-[#222636] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#ccff00] mb-2">
            Experience It With Zero Risk
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Claim Your 1-Day Free VIP Pass
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-2">
            Get complete complimentary access to all facilities including the signature Rooftop CrossFit deck,
            cardio floor, and a 1-on-1 trainer assessment.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="bg-[#12141c] border border-[#222636] rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5"
            >
              <div>
                <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-500" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full bg-[#090a0d] border border-stone-800 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#ccff00] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                  WhatsApp Contact Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-500" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your mobile number"
                    className="w-full bg-[#090a0d] border border-stone-800 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#ccff00] transition-colors"
                  />
                </div>
                <p className="text-[11px] text-stone-500 mt-1">We will send pass confirmation & location pin via WhatsApp.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                    Preferred Visit Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-500" />
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#090a0d] border border-stone-800 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#ccff00] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-500 pointer-events-none" />
                    <select
                      value={slot}
                      onChange={(e) => setSlot(e.target.value)}
                      className="w-full bg-[#090a0d] border border-stone-800 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#ccff00] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Sunrise Rooftop Batch (6:00 AM - 8:00 AM)">Sunrise Rooftop (6:00 AM - 8:00 AM)</option>
                      <option value="Mid-Morning Strength (8:30 AM - 11:00 AM)">Mid-Morning (8:30 AM - 11:00 AM)</option>
                      <option value="Afternoon Lean Hours (12:00 PM - 4:00 PM)">Afternoon Lean (12:00 PM - 4:00 PM)</option>
                      <option value="Sunset Rooftop Batch (5:30 PM - 7:30 PM)">Sunset Rooftop (5:30 PM - 7:30 PM)</option>
                      <option value="Late Evening Energy (7:30 PM - 10:00 PM)">Late Evening (7:30 PM - 10:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                  Primary Fitness Focus
                </label>
                <div className="relative">
                  <Target className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-500 pointer-events-none" />
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full bg-[#090a0d] border border-stone-800 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#ccff00] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="Rooftop CrossFit & Stamina">Rooftop CrossFit & Stamina</option>
                    <option value="Weight Loss & Fat Reduction">Weight Loss & Fat Reduction</option>
                    <option value="Muscle Hypertrophy & Strength">Muscle Hypertrophy & Strength</option>
                    <option value="Zumba & Dance Cardio">Zumba & Dance Cardio</option>
                    <option value="Yoga & Posture Rehab">Yoga & Posture Rehab</option>
                    <option value="General Health & Energy">General Health & Energy</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#ccff00] hover:bg-[#b8e600] text-black font-heading font-black text-sm uppercase tracking-wider rounded-lg transition-all shadow-[0_4px_20px_rgba(204,255,0,0.3)] cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Free VIP Pass Instantly</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ccff00]" />
                <span>100% Free · No credit card required · Zero commitment</span>
              </div>
            </form>
          ) : (
            /* Digital VIP Pass Generated */
            <div className="bg-[#12141c] border-2 border-[#ccff00] rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(204,255,0,0.2)] text-left animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <div>
                  <div className="text-[10px] font-mono text-[#ccff00] uppercase tracking-widest">
                    OFFICIAL GUEST INVITATION
                  </div>
                  <h3 className="font-heading font-black text-2xl text-white">
                    Timeless Fitness VIP Pass
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-stone-500 uppercase font-mono">Pass Code</div>
                  <div className="text-sm font-mono font-bold text-[#ccff00]">{passId}</div>
                </div>
              </div>

              <div className="py-6 space-y-3.5 border-b border-stone-800 text-xs sm:text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-stone-400">Pass Holder:</span>
                  <span className="font-bold text-white text-base">{name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400">Scheduled Date:</span>
                  <span className="font-semibold text-stone-200">{date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400">Time Slot:</span>
                  <span className="font-semibold text-[#ccff00]">{slot}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400">Specialty Track:</span>
                  <span className="font-semibold text-stone-200">{goal}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400">Location:</span>
                  <span className="font-semibold text-stone-300 text-right max-w-[220px] truncate">
                    Jagatpura Rd, Malviya Nagar
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 space-y-3">
                <a
                  href={`https://wa.me/917976590461?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-black font-heading font-bold text-sm tracking-wide rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 fill-black text-[#25D366]" />
                  <span>Send Pass To Gym on WhatsApp</span>
                </a>

                <div className="flex gap-2">
                  <button
                    onClick={() => window.print()}
                    className="flex-1 py-2.5 bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-300 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Save / Print Pass</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="py-2.5 px-4 bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-400 hover:text-white text-xs font-medium rounded-lg cursor-pointer"
                  >
                    Edit Details
                  </button>
                </div>

                <p className="text-[11px] text-stone-400 text-center pt-2">
                  Present this digital pass at the front reception desk upon arrival. Gym shoes and workout attire required.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
