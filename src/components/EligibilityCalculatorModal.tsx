import React, { useState } from 'react';
import { evaluateEligibility, EligibilityResult } from '../utils/calculator';

interface EligibilityCalculatorModalProps {
  onClose: () => void;
  onProceedToApply: () => void;
}

export const EligibilityCalculatorModal: React.FC<EligibilityCalculatorModalProps> = ({
  onClose,
  onProceedToApply,
}) => {
  const [expBand, setExpBand] = useState<'10-15' | '15-20' | '20+' | '<10'>('15-20');
  const [hasDegree, setHasDegree] = useState<boolean>(true);
  const [domain, setDomain] = useState<'hr' | 'talent' | 'ld' | 'business_leader' | 'consultant' | 'other'>('hr');
  const [roleLevel, setRoleLevel] = useState<'mid' | 'senior' | 'director_vp' | 'c_suite'>('director_vp');
  const [evaluated, setEvaluated] = useState<EligibilityResult | null>(null);

  const handleEvaluate = (e: React.FormEvent) => {
    e.preventDefault();
    const result = evaluateEligibility({
      experienceBand: expBand,
      hasDegree,
      domain,
      currentRoleLevel: roleLevel,
    });
    setEvaluated(result);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#0F2C59] text-white p-6 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-lime-400">
              Admissions Screening Tool
            </span>
            <h3 className="text-xl font-black text-white mt-0.5">Cohort 07 Executive Eligibility Evaluator</h3>
            <p className="text-xs text-slate-300 mt-1">
              Check your admission fit, scoring tier, and capstone track alignment in 30 seconds.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {!evaluated ? (
            <form onSubmit={handleEvaluate} className="space-y-5">
              {/* Experience Band */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Total Years of Professional Work Experience <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: '<10', label: 'Under 10 yrs' },
                    { id: '10-15', label: '10–15 years' },
                    { id: '15-20', label: '15–20 years' },
                    { id: '20+', label: '20+ years' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setExpBand(item.id as any)}
                      className={`py-2.5 px-3 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                        expBand === item.id
                          ? 'border-[#005A5B] bg-teal-50 text-[#005A5B] ring-2 ring-teal-600/20'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Educational Credential */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Educational Qualification <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setHasDegree(true)}
                    className={`p-3 rounded-lg border text-left text-xs transition-all cursor-pointer ${
                      hasDegree
                        ? 'border-[#005A5B] bg-teal-50 text-[#005A5B] ring-2 ring-teal-600/20'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="font-bold">Recognized Bachelor’s Degree or Higher</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">B.Tech, B.A., B.Sc., B.Com, MBA, etc.</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setHasDegree(false)}
                    className={`p-3 rounded-lg border text-left text-xs transition-all cursor-pointer ${
                      !hasDegree
                        ? 'border-red-400 bg-red-50 text-red-900 ring-2 ring-red-400/20'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="font-bold">No Formal Bachelor’s Degree</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Undergraduate diploma / high school only</div>
                  </button>
                </div>
              </div>

              {/* Functional Domain */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Current Functional Domain <span className="text-red-500">*</span>
                </label>
                <select
                  value={domain}
                  onChange={(e) => setDomain(e.target.value as any)}
                  className="w-full h-11 px-3.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-[#005A5B] outline-none"
                >
                  <option value="hr">Human Resources Management &amp; People Ops</option>
                  <option value="talent">Talent Acquisition, Headhunting &amp; Sourcing</option>
                  <option value="ld">Learning, Development &amp; Organizational Design (OD)</option>
                  <option value="business_leader">Business Unit Leader / General Management</option>
                  <option value="consultant">Management Consulting / Human Capital Advisory</option>
                  <option value="other">Other Executive Domain</option>
                </select>
              </div>

              {/* Current Role Level */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Current Seniority Level <span className="text-red-500">*</span>
                </label>
                <select
                  value={roleLevel}
                  onChange={(e) => setRoleLevel(e.target.value as any)}
                  className="w-full h-11 px-3.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-[#005A5B] outline-none"
                >
                  <option value="c_suite">C-Suite / CHRO / CXO / Managing Partner</option>
                  <option value="director_vp">VP / AVP / Director / Head of HR</option>
                  <option value="senior">Senior HR Business Partner / Principal Consultant</option>
                  <option value="mid">Mid-Management HR Lead / Specialist</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-lg bg-[#84CC16] hover:bg-[#70B614] text-slate-950 font-black text-sm tracking-wide transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <span>CALCULATE MY ADMISSION SCORE</span>
                <span className="material-symbols-outlined text-lg">insights</span>
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              {/* Score Header */}
              <div
                className={`p-5 rounded-xl border flex items-center justify-between ${
                  evaluated.isEligible
                    ? 'bg-teal-50 border-teal-200 text-teal-950'
                    : 'bg-red-50 border-red-200 text-red-950'
                }`}
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-800 block">
                    Candidate Evaluation
                  </span>
                  <div className="text-2xl font-black mt-0.5">{evaluated.tier}</div>
                  <div className="text-xs mt-1">{evaluated.readinessSummary}</div>
                </div>
                <div className="text-center bg-white px-4 py-2.5 rounded-xl border border-teal-200 shadow-sm">
                  <span className="text-[10px] font-bold uppercase text-slate-500 block">Fit Index</span>
                  <span className="text-3xl font-black text-[#0F2C59] tabular-nums">{evaluated.score} / 100</span>
                </div>
              </div>

              {/* Recommended Track */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Recommended Capstone Specialization
                </span>
                <p className="text-sm font-semibold text-[#0F2C59]">{evaluated.recommendedPathway}</p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setEvaluated(null)}
                  className="flex-1 py-3 rounded-lg border border-slate-300 text-slate-700 font-bold text-xs uppercase tracking-wider hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Recalculate
                </button>
                <button
                  type="button"
                  onClick={onProceedToApply}
                  className="flex-1 py-3 rounded-lg bg-[#84CC16] hover:bg-[#70B614] text-slate-950 font-black text-xs uppercase tracking-wider shadow transition-all cursor-pointer text-center"
                >
                  Fast-Track Application
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
