import React, { useState } from 'react';
import { calculateFeeBreakdown } from '../utils/calculator';

interface FeesSectionProps {
  onCheckEligibility: () => void;
}

export const FeesSection: React.FC<FeesSectionProps> = ({ onCheckEligibility }) => {
  const [selectedPaymentMode, setSelectedPaymentMode] = useState<'milestones' | 'emi'>('milestones');
  const [selectedEmiTenure, setSelectedEmiTenure] = useState<number>(12);

  const feeData = calculateFeeBreakdown();
  const currentEmi = feeData.emiOptions.find((e) => e.months === selectedEmiTenure) || feeData.emiOptions[2];

  return (
    <section className="py-16 md:py-20 bg-[#F8FAFC] border-b border-card-border" id="fees">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#005A5B]">
            Financial Investment
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F2C59] tracking-tight mt-1">
            Programme Investment &amp; Schedule
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-2">
            Structured for senior working executives with flexible payment milestones and zero-cost EMI assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Fee Structure & 4-Stage Installments */}
          <div className="lg:col-span-7 bg-[#0F2C59] text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-white/15 pb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-lime-400">Total Programme Fee</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-4xl sm:text-5xl font-black text-white tabular-nums">₹1,50,000</span>
                    <span className="text-slate-300 text-sm font-semibold">+ 18% GST (₹27,000)</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-teal-500/20 border border-teal-400/30 px-3.5 py-1.5 rounded-lg text-teal-200 text-xs font-bold">
                    Corporate Sponsorship Eligible
                  </div>
                </div>
              </div>

              {/* Toggle Payment Plan View */}
              <div className="pt-4 flex items-center justify-between">
                <span className="text-xs text-slate-300 font-semibold uppercase tracking-wider">Payment Mode:</span>
                <div className="inline-flex rounded-lg bg-white/10 p-0.5 border border-white/10 text-xs">
                  <button
                    onClick={() => setSelectedPaymentMode('milestones')}
                    className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                      selectedPaymentMode === 'milestones'
                        ? 'bg-[#84CC16] text-slate-950 font-bold'
                        : 'text-white hover:text-lime-300'
                    }`}
                  >
                    4-Stage Milestone
                  </button>
                  <button
                    onClick={() => setSelectedPaymentMode('emi')}
                    className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                      selectedPaymentMode === 'emi'
                        ? 'bg-[#84CC16] text-slate-950 font-bold'
                        : 'text-white hover:text-lime-300'
                    }`}
                  >
                    0% EMI Calculator
                  </button>
                </div>
              </div>

              {/* 4-Stage Installment Breakdown */}
              {selectedPaymentMode === 'milestones' ? (
                <div className="py-5">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4">
                    4-Stage Flexible Instalment Schedule
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {feeData.installments.map((inst) => (
                      <div key={inst.stage} className="bg-white/10 rounded-xl p-3.5 border border-white/10">
                        <span className="text-[11px] font-semibold text-slate-300 block">{inst.title}</span>
                        <span className="text-lg font-black text-white block mt-0.5 tabular-nums">
                          ₹{inst.baseAmount.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[11px] text-teal-300 mt-1 block leading-tight">{inst.dueTime}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="py-5">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-3">
                    Zero-Cost Executive EMI Breakdown
                  </h4>
                  <div className="flex gap-2 mb-4">
                    {[6, 9, 12].map((tenure) => (
                      <button
                        key={tenure}
                        onClick={() => setSelectedEmiTenure(tenure)}
                        className={`flex-1 py-1.5 px-3 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                          selectedEmiTenure === tenure
                            ? 'bg-teal-500/30 border-teal-300 text-lime-400'
                            : 'border-white/15 bg-white/5 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        {tenure} Months Plan
                      </button>
                    ))}
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-300 block">Monthly Instalment</span>
                      <span className="text-2xl font-black text-white tabular-nums">
                        ₹{currentEmi.monthlyBase.toLocaleString('en-IN')}
                        <span className="text-xs text-slate-300 font-normal"> / month (+ GST)</span>
                      </span>
                    </div>
                    <span className="text-xs font-bold text-lime-400 bg-lime-400/10 border border-lime-400/30 px-2.5 py-1 rounded">
                      Zero Cost • No Hidden Fees
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-white/15 pt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-lime-400 text-sm">credit_score</span>
                0% EMI plans starting at ₹12,500/month available
              </span>
              <span className="text-teal-300 font-semibold">Initial Registration Fee: ₹2,500</span>
            </div>
          </div>

          {/* Right: Executive Weekend Learning Schedule & Eligibility */}
          <div className="lg:col-span-5 bg-white border border-card-border rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              {/* Weekend Schedule Box */}
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#005A5B]">
                  Convenient Schedule
                </span>
                <h3 className="text-xl font-black text-[#0F2C59] mt-0.5">Live Weekend Sessions</h3>
                <div className="mt-3 space-y-2.5">
                  <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <span className="material-symbols-outlined text-[#005A5B]">calendar_today</span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Fridays: 7:00 PM – 8:30 PM IST</div>
                      <div className="text-[11px] text-slate-500">Live Interactive Lecture</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <span className="material-symbols-outlined text-[#005A5B]">event</span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Sundays: 10:00 AM – 11:30 AM IST</div>
                      <div className="text-[11px] text-slate-500">Masterclass &amp; Case Study Seminar</div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2">Zero interruption to weekday executive responsibilities.</p>
              </div>

              {/* Eligibility Criteria */}
              <div className="border-t border-slate-200 pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#005A5B]">
                    Admissions Eligibility
                  </span>
                  <button
                    onClick={onCheckEligibility}
                    className="text-xs font-bold text-[#005A5B] hover:underline cursor-pointer"
                  >
                    Check My Score →
                  </button>
                </div>
                <ul className="mt-2.5 space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-teal-600 text-sm mt-0.5">check_circle</span>
                    <span>Bachelor’s Degree or equivalent from a recognized University.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-teal-600 text-sm mt-0.5">check_circle</span>
                    <span>Minimum professional work experience in HR, Talent, L&amp;D or allied functions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-teal-600 text-sm mt-0.5">check_circle</span>
                    <span>Selection based on application profile and screening evaluation.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-4 mt-6 flex items-center justify-between text-xs">
              <span className="font-bold text-slate-800">Application Deadline: 21st Feb 2027</span>
              <span className="text-[#005A5B] font-bold">Limited Cohort Size</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
