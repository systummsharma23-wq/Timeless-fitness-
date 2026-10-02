import React from 'react';
import { MapPin, Phone, Clock, Navigation, Check, Shield, Car, Bus } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const LocationHours: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#090a0d] border-t border-[#222636]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#ccff00] mb-2">
            Visit Our Malviya Nagar Facility
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Location, Hours & Contact
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-2">
            Centrally situated on Jagatpura Road near Model Town - B, conveniently connected for residents of Malviya Nagar, Jagatpura, and adjoining South Jaipur sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#12141c] border border-[#222636] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              {/* Address */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ccff00] mb-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>Physical Address</span>
                </div>
                <p className="text-white font-medium text-sm sm:text-base leading-snug">
                  {GYM_INFO.fullAddress}
                </p>
                <div className="text-xs text-stone-400 mt-1 font-mono">
                  Plus Code: RRVH+WF4 Jaipur
                </div>
              </div>

              {/* Operating Hours */}
              <div className="pt-4 border-t border-stone-800">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ccff00] mb-2">
                  <Clock className="w-4 h-4" />
                  <span>Gym Operating Hours</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-1.5 px-3 rounded-lg bg-stone-900/60 border border-stone-800">
                    <span className="text-stone-300 font-medium">Monday – Saturday</span>
                    <span className="font-mono font-bold text-white">5:30 AM – 10:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 px-3 rounded-lg bg-stone-900/60 border border-stone-800">
                    <span className="text-stone-300 font-medium">Sunday</span>
                    <span className="font-mono font-bold text-stone-300">7:00 AM – 1:00 PM</span>
                  </div>
                </div>
                <div className="text-[11px] text-stone-500 mt-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Continuous open floor timing without midday shutdown.</span>
                </div>
              </div>

              {/* Contact Hotline */}
              <div className="pt-4 border-t border-stone-800">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ccff00] mb-1.5">
                  <Phone className="w-4 h-4" />
                  <span>Reception & Inquiries</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${GYM_INFO.phoneClean}`}
                    className="font-heading font-black text-2xl text-white hover:text-[#ccff00] transition-colors"
                  >
                    {GYM_INFO.phone}
                  </a>
                </div>
                <div className="text-xs text-stone-400 mt-0.5">
                  Direct line for membership queries & trial appointments.
                </div>
              </div>

              {/* Amenities info */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-stone-800 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#ccff00]" />
                  <span>Dedicated Parking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#ccff00]" />
                  <span>24/7 CCTV & Security</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-800 flex flex-col sm:flex-row gap-3">
              <a
                href={GYM_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-[#ccff00] hover:bg-[#b8e600] text-black font-heading font-bold text-xs sm:text-sm tracking-wide rounded-lg transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Navigation className="w-4 h-4 stroke-[2.5]" />
                <span>Get Google Maps Directions</span>
              </a>

              <a
                href={`tel:${GYM_INFO.phoneClean}`}
                className="py-3 px-5 bg-stone-900 hover:bg-stone-800 border border-stone-700 text-white font-semibold text-xs sm:text-sm rounded-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#ccff00]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Map View (7 cols) */}
          <div className="lg:col-span-7 bg-[#12141c] border border-[#222636] rounded-2xl overflow-hidden shadow-xl min-h-[380px] flex flex-col">
            <div className="p-4 bg-stone-900/90 border-b border-stone-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-stone-300 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00] animate-pulse" />
                <span>Live Interactive Map · Jaipur, Rajasthan</span>
              </div>
              <a
                href={GYM_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ccff00] hover:underline font-semibold"
              >
                Open in Google Maps App ↗
              </a>
            </div>

            <div className="relative flex-1 w-full bg-stone-950">
              <iframe
                title="Timeless Fitness Jaipur Location"
                src="https://maps.google.com/maps?q=Timeless%20Fitness%205%20Jagatpura%20Rd%20Model%20Town%20Malviya%20Nagar%20Jaipur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[360px] border-0 filter grayscale-[0.35] contrast-[1.1]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
