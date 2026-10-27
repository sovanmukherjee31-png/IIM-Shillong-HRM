import React from 'react';
import { FACULTY } from '../data/programmeData';

export const FacultySection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-card-border" id="faculty">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#005A5B]">
            Thought Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F2C59] tracking-tight mt-1">
            Distinguished IIM Shillong Faculty
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-2">
            Acclaimed academicians and senior corporate advisors shaping global people strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACULTY.map((member) => (
            <div
              key={member.id}
              className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="w-full aspect-[4/5] rounded-lg overflow-hidden bg-slate-200 mb-4 shadow-inner">
                  <img
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    src={member.imageUrl}
                  />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700">
                  {member.credentials}
                </span>
                <h3 className="text-base font-black text-[#0F2C59] mt-0.5">{member.name}</h3>
                <p className="text-xs font-semibold text-slate-700">{member.role}</p>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{member.shortBio}</p>

                {/* Collapsible Biography Drawer */}
                <details className="group mt-3 pt-2 border-t border-slate-200 text-xs">
                  <summary className="font-bold text-[#005A5B] cursor-pointer hover:underline list-none flex items-center justify-between">
                    <span>See Full Biography</span>
                    <span className="material-symbols-outlined text-sm group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <div className="mt-2 text-slate-600 leading-relaxed bg-white p-2.5 rounded-lg border border-slate-200 space-y-2">
                    <p>{member.fullBio}</p>
                    <div className="pt-1.5 border-t border-slate-100 flex flex-wrap gap-1">
                      {member.focusAreas.map((f, i) => (
                        <span key={i} className="text-[10px] bg-teal-50 text-teal-800 font-medium px-1.5 py-0.5 rounded">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </details>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
