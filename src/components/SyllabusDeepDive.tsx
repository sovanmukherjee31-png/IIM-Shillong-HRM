import React, { useState } from 'react';
import { MODULES } from '../data/programmeData';

interface SyllabusDeepDiveProps {
  onBack: () => void;
  onApply: () => void;
}

export const SyllabusDeepDive: React.FC<SyllabusDeepDiveProps> = ({ onBack, onApply }) => {
  const [filterModule, setFilterModule] = useState<string>('all');
  const [expandedModuleId, setExpandedModuleId] = useState<string>('mod1');

  const filteredModules = filterModule === 'all' ? MODULES : MODULES.filter((m) => m.id === filterModule);

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#005A5B] hover:text-[#0F2C59] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Back to Executive Overview
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-teal-50 border border-teal-200 text-teal-800 font-bold px-3 py-1 rounded-md">
              160 Learning Hours • 8 Modules
            </span>
            <button
              onClick={onApply}
              className="bg-[#84CC16] hover:bg-[#70B614] text-slate-950 font-black text-xs px-4 py-2 rounded-lg transition-all cursor-pointer shadow"
            >
              Apply for Batch 07
            </button>
          </div>
        </div>

        {/* Page Title */}
        <div className="mb-8">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#005A5B]">
            Comprehensive Academic Syllabus
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0F2C59] mt-1 tracking-tight">
            Curriculum Architecture &amp; Boardroom Case Studies
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            Co-developed by IIM Shillong faculty and the SHRM India Executive Board. Designed with synchronous weekend
            masterclasses, Harvard business cases, real-time AI tools, and an intensive capstone simulation.
          </p>
        </div>

        {/* Module Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
          <button
            onClick={() => setFilterModule('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
              filterModule === 'all'
                ? 'bg-[#0F2C59] text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            All 8 Modules (160 Hours)
          </button>
          {MODULES.map((m, i) => (
            <button
              key={m.id}
              onClick={() => setFilterModule(m.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                filterModule === m.id
                  ? 'bg-[#005A5B] text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              M{i + 1}: {m.title.split('&')[0].trim()}
            </button>
          ))}
        </div>

        {/* Module Cards List */}
        <div className="space-y-6">
          {filteredModules.map((mod, index) => {
            const isExpanded = expandedModuleId === mod.id;
            return (
              <div
                key={mod.id}
                className="bg-white rounded-2xl border border-card-border overflow-hidden shadow-sm transition-all"
              >
                {/* Header Strip */}
                <div
                  onClick={() => setExpandedModuleId(isExpanded ? '' : mod.id)}
                  className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-xl bg-[#0F2C59] text-white font-black flex items-center justify-center shrink-0 text-sm">
                      0{index + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                          {mod.badge}
                        </span>
                        <span className="text-xs text-slate-500 font-semibold">• 20 Learning Hours</span>
                      </div>
                      <h3 className="text-lg font-black text-[#0F2C59] mt-1">{mod.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
                        {mod.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                    <span className="text-xs font-bold text-[#005A5B]">
                      {isExpanded ? 'Collapse Details' : 'Expand Syllabus'}
                    </span>
                    <span
                      className={`material-symbols-outlined text-slate-500 transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-6">
                    {/* 4 Core Competencies */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                        Curriculum Competencies &amp; Architectural Focus
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        {mod.competencies.map((comp, ci) => (
                          <div key={ci} className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                            <div className="text-xs font-bold text-[#0F2C59]">{comp.title}</div>
                            <div className="text-xs text-slate-600 mt-1 leading-relaxed">{comp.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Meta Bento: Capstone + Harvard Cases + Tools */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                      {/* Capstone */}
                      <div className="p-4 bg-teal-900/5 border border-teal-200 rounded-xl">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-xs">assignment_turned_in</span>
                          Evaluated Capstone
                        </span>
                        <div className="text-xs font-black text-slate-900 mt-1.5">{mod.capstoneDeliverable}</div>
                      </div>

                      {/* Cases */}
                      <div className="p-4 bg-slate-100 border border-slate-200 rounded-xl">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-xs">menu_book</span>
                          Harvard &amp; Global Cases
                        </span>
                        <ul className="mt-1.5 space-y-1">
                          {mod.harvardCases?.map((c, idx) => (
                            <li key={idx} className="text-xs font-medium text-slate-700">
                              • {c}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tools */}
                      <div className="p-4 bg-slate-100 border border-slate-200 rounded-xl">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-xs">build</span>
                          Tooling &amp; AI Stacks
                        </span>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {mod.toolsCovered?.map((t, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] bg-white border border-slate-300 text-slate-800 font-bold px-2 py-0.5 rounded"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Action Footer */}
        <div className="mt-10 p-6 bg-[#0F2C59] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div>
            <h3 className="text-lg font-bold text-white">Need Customized Enterprise Corporate Sponsorship?</h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Corporate cohorts of 3+ senior leaders are eligible for institutional fee concessions and tailored capstone themes.
            </p>
          </div>
          <button
            onClick={onApply}
            className="bg-[#84CC16] hover:bg-[#70B614] text-slate-950 font-black text-xs uppercase tracking-wider px-6 py-3 rounded-lg whitespace-nowrap shadow cursor-pointer"
          >
            Request Corporate Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
