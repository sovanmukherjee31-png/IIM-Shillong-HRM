import React, { useState } from 'react';
import { MODULES } from '../data/programmeData';

interface CurriculumSectionProps {
  onOpenSyllabusDeepDive: () => void;
  onDownloadSyllabus: () => void;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({
  onOpenSyllabusDeepDive,
  onDownloadSyllabus,
}) => {
  const [activeModuleId, setActiveModuleId] = useState<string>('mod1');

  const activeModule = MODULES.find((m) => m.id === activeModuleId) || MODULES[0];

  return (
    <section className="py-16 md:py-20 bg-[#F8FAFC] border-b border-card-border" id="curriculum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#005A5B]">
              Academic Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F2C59] tracking-tight mt-1">
              Compact 8-Module Executive Curriculum
            </h2>
            <p className="text-slate-600 font-medium text-sm md:text-base mt-2 max-w-2xl">
              160 live interactive hours designed for working professionals. Balanced blend of theoretical rigor,
              Harvard business case debates, and modern tool kits.
            </p>
          </div>

          <div className="flex items-center gap-2.5 self-start md:self-auto flex-wrap">
            <button
              onClick={onOpenSyllabusDeepDive}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#005A5B] hover:bg-[#004141] px-4 py-2.5 rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">visibility</span>
              Deep-Dive Syllabus View
            </button>
            <button
              onClick={onDownloadSyllabus}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#005A5B] hover:text-[#0F2C59] bg-white border border-slate-300 px-4 py-2.5 rounded-lg shadow-sm hover:bg-slate-50 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              Download Full Syllabus PDF
            </button>
          </div>
        </div>

        {/* Horizontal Tab Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none" id="curriculumTabList">
          {MODULES.map((mod, index) => {
            const isActive = mod.id === activeModuleId;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveModuleId(mod.id)}
                className={`module-tab-btn px-4 py-2.5 rounded-lg text-xs md:text-sm whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'font-bold bg-[#0F2C59] text-white shadow-sm'
                    : 'font-semibold bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                Module {index + 1}: {mod.title.split('&')[0].trim()}
              </button>
            );
          })}
        </div>

        {/* Tab Content Pane */}
        <div className="bg-white rounded-2xl border border-card-border p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left overview */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-200 pb-6 lg:pb-0 lg:pr-6">
              <span className="px-2.5 py-1 bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold rounded">
                {activeModule.badge}
              </span>
              <h3 className="text-xl font-black text-[#0F2C59] mt-3">{activeModule.title}</h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">{activeModule.description}</p>

              <div className="mt-4 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Key Capstone Deliverable
                </span>
                <p className="text-xs font-bold text-slate-800 mt-1">{activeModule.capstoneDeliverable}</p>
              </div>

              {activeModule.harvardCases && (
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800 block mb-1.5">
                    Harvard / Global Case Studies
                  </span>
                  <ul className="space-y-1">
                    {activeModule.harvardCases.map((cs, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-start gap-1.5">
                        <span className="text-teal-600 font-bold">•</span>
                        <span>{cs}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right competencies grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeModule.competencies.map((comp, idx) => (
                <div key={idx} className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl">
                  <h4 className="text-sm font-bold text-[#0F2C59]">{comp.title}</h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{comp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
