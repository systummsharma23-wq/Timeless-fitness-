import React, { useState } from 'react';
import { SCHEDULE_DATA } from '../data/gymData';
import { Clock, MapPin, User, Calendar, CheckCircle } from 'lucide-react';

interface ClassScheduleProps {
  onOpenTrialModal: () => void;
}

export const ClassSchedule: React.FC<ClassScheduleProps> = ({ onOpenTrialModal }) => {
  const [activeDay, setActiveDay] = useState<'Mon-Wed-Fri' | 'Tue-Thu-Sat' | 'Sunday'>('Mon-Wed-Fri');
  const [selectedZone, setSelectedZone] = useState<string>('All');

  const filteredSlots = SCHEDULE_DATA.filter((slot) => {
    if (slot.day !== activeDay) return false;
    if (selectedZone !== 'All' && slot.zone !== selectedZone) return false;
    return true;
  });

  return (
    <section id="schedule" className="py-24 bg-[#090a0d] border-t border-[#222636]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#ccff00] mb-2">
              Weekly Timetable
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
              Group Sessions & Batches
            </h2>
            <p className="text-stone-400 text-sm mt-2 max-w-xl">
              Morning sunrise sessions, sunset rooftop workouts, and energizing evening dance fitness batches.
            </p>
          </div>

          {/* Day selection tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-stone-900 border border-stone-800 rounded-xl mt-6 md:mt-0">
            {(['Mon-Wed-Fri', 'Tue-Thu-Sat', 'Sunday'] as const).map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-4 py-2 text-xs sm:text-sm font-heading font-bold rounded-lg transition-all cursor-pointer ${
                  activeDay === day
                    ? 'bg-[#ccff00] text-black shadow-md'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Zone quick filter buttons */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 no-scrollbar">
          <span className="text-xs text-stone-500 font-medium mr-2">Filter Arena:</span>
          {['All', 'Rooftop Arena', 'Studio A', 'Iron Floor', 'Cardio Deck'].map((zone) => (
            <button
              key={zone}
              onClick={() => setSelectedZone(zone)}
              className={`px-3 py-1.5 text-xs rounded-md transition-colors cursor-pointer border ${
                selectedZone === zone
                  ? 'border-[#ccff00] bg-[#ccff00]/10 text-[#ccff00]'
                  : 'border-stone-800 bg-stone-900/60 text-stone-400 hover:text-stone-200'
              }`}
            >
              {zone}
            </button>
          ))}
        </div>

        {/* Timetable listing */}
        <div className="bg-[#12141c] border border-[#222636] rounded-2xl overflow-hidden shadow-xl">
          <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-4 bg-stone-900/80 border-b border-stone-800 text-xs font-bold uppercase tracking-wider text-stone-400">
            <div className="col-span-3">Time Window</div>
            <div className="col-span-4">Session & Focus</div>
            <div className="col-span-3">Facility Zone</div>
            <div className="col-span-2 text-right">Lead Coach</div>
          </div>

          <div className="divide-y divide-stone-800/60">
            {filteredSlots.length === 0 ? (
              <div className="p-8 text-center text-stone-400 text-sm">
                No classes scheduled for this filter. Please choose another zone or day.
              </div>
            ) : (
              filteredSlots.map((slot, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:px-6 sm:py-4 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center hover:bg-stone-900/50 transition-colors"
                >
                  <div className="sm:col-span-3 flex items-center gap-2 text-white font-mono text-xs sm:text-sm font-semibold">
                    <Clock className="w-4 h-4 text-[#ccff00] shrink-0" />
                    <span>{slot.time}</span>
                  </div>

                  <div className="sm:col-span-4">
                    <div className="font-heading font-bold text-white text-base sm:text-sm">
                      {slot.activity}
                    </div>
                  </div>

                  <div className="sm:col-span-3 flex items-center gap-1.5 text-xs text-stone-300">
                    <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span className={slot.zone.includes('Rooftop') ? 'text-[#ccff00] font-semibold' : ''}>
                      {slot.zone}
                    </span>
                  </div>

                  <div className="sm:col-span-2 flex items-center justify-between sm:justify-end gap-3 text-xs text-stone-400">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-stone-500" />
                      <span className="text-stone-300 font-medium">{slot.trainer}</span>
                    </span>
                    <button
                      onClick={onOpenTrialModal}
                      className="sm:hidden px-3 py-1 bg-[#ccff00] text-black font-bold text-xs rounded"
                    >
                      Join Batch
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 p-4 rounded-xl bg-stone-900/40 border border-stone-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
            <span>Open Gym floor is accessible anytime between 5:30 AM and 10:30 PM for self-paced training.</span>
          </div>
          <button
            onClick={onOpenTrialModal}
            className="text-[#ccff00] hover:underline font-semibold font-heading uppercase tracking-wide cursor-pointer"
          >
            Reserve Trial Slot for Upcoming Batch →
          </button>
        </div>
      </div>
    </section>
  );
};
