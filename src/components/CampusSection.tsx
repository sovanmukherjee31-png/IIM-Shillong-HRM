import React from 'react';
import { CAMPUS_FACILITIES } from '../data/programmeData';

interface CampusSectionProps {
  onOpenResidencySchedule: () => void;
}

export const CampusSection: React.FC<CampusSectionProps> = ({ onOpenResidencySchedule }) => {
  return (
    <section className="py-16 md:py-20 bg-[#F8FAFC] border-b border-card-border" id="campus">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#005A5B]">
              Campus Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F2C59] tracking-tight mt-1">
              On-Campus Immersion in the Clouds of Shillong
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-2 max-w-2xl">
              Immerse yourself in world-class academic infrastructure at Umsawli Campus. Network face-to-face with
              distinguished professors, CHRO mentors, and peer executives.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm self-start md:self-auto">
            <span className="material-symbols-outlined text-[#005A5B] text-base">pin_drop</span>
            Umsawli, Shillong, Meghalaya
          </div>
        </div>

        {/* 3-Photo Visual Collage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CAMPUS_FACILITIES.map((fac) => (
            <div
              key={fac.id}
              className="bg-white rounded-xl overflow-hidden border border-card-border shadow-sm group hover:shadow-md transition-shadow"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={fac.imageUrl}
                />
                <div className="absolute top-3 left-3 bg-[#0F2C59]/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {fac.category}
                </div>
              </div>
              <div className="p-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700">{fac.category}</span>
                <h3 className="text-base font-bold text-[#0F2C59] mt-1">{fac.title}</h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{fac.description}</p>
                <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {fac.features.map((f, i) => (
                    <span key={i} className="text-[10px] bg-slate-50 border border-slate-200 text-slate-700 px-2 py-0.5 rounded">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 1-Day Immersion Detail Banner */}
        <div className="mt-6 bg-[#0F2C59] text-white p-5 sm:p-6 rounded-xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-lime-400 flex-shrink-0">
              <span className="material-symbols-outlined text-2xl">event_upcoming</span>
            </div>
            <div>
              <h4 className="text-base font-bold text-white">1-Day Executive Immersion &amp; Capstone Defense</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Conclude your journey with an intensive in-person strategy capstone, faculty interaction dinner, and
                formal certificate ceremony on campus.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResidencySchedule}
              className="text-xs text-teal-300 hover:text-white underline font-semibold cursor-pointer"
            >
              View Residency Itinerary
            </button>
            <span className="px-4 py-2 rounded-lg bg-[#84CC16] text-slate-950 font-black text-xs uppercase tracking-wider whitespace-nowrap shadow">
              Campus Residency Included
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
