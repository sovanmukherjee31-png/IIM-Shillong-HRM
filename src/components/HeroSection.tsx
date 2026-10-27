import React, { useState } from 'react';
import { HOTLINKED_ASSETS } from '../data/programmeData';
import { validateLeadForm } from '../utils/calculator';
import { LeadSubmission } from '../types';

interface HeroSectionProps {
  onSuccessLead: (lead: LeadSubmission) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSuccessLead }) => {
  const [formData, setFormData] = useState({
    workExp: '',
    fullName: '',
    workEmail: '',
    mobileNo: '',
    designation: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateLeadForm(formData);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(false);
    onSuccessLead({
      ...formData,
      submissionDate: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    });
  };

  return (
    <section className="relative w-full overflow-hidden text-white min-h-[640px] flex items-center py-12 lg:py-16">
      {/* Background Architecture Photo */}
      <div className="absolute inset-0 z-0">
        <img
          alt="IIM Shillong Campus"
          className="w-full h-full object-cover object-center"
          src={HOTLINKED_ASSETS.heroCampusBg}
        />
        {/* Dark Executive Gradient Overlay: 88% #0F2C59 to 80% #005A5B */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(15, 44, 89, 0.90) 0%, rgba(0, 90, 91, 0.84) 100%)',
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* LEFT HERO CONTENT: Strict Hierarchy */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* 1. Top Tagline (16px-18px font-bold, uppercase tracking-wide, lime-400) */}
            <div className="flex items-center gap-2">
              <span className="text-[16px] md:text-[18px] font-bold uppercase tracking-wider text-lime-400 drop-shadow-sm flex items-center gap-1.5">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-lime-400 animate-pulse"></span>
                People Strategy Meets Business Strategy
              </span>
            </div>

            {/* 2. Programme Name Hierarchy */}
            <div className="flex flex-col gap-1">
              <span className="text-[20px] md:text-[22px] font-medium text-slate-200 tracking-normal">
                Post Graduate Certificate in
              </span>
              <div className="flex flex-wrap items-baseline gap-3">
                <h1 className="text-[36px] sm:text-[42px] lg:text-[44px] font-black tracking-tight text-white leading-tight">
                  HUMAN RESOURCE MANAGEMENT
                </h1>
                <span className="inline-block bg-teal-600/70 text-teal-200 border border-teal-400/50 px-3.5 py-1 rounded-full text-sm font-bold shadow-sm whitespace-nowrap">
                  (Batch 07)
                </span>
              </div>
            </div>

            {/* 3. Institutional Endorsement Line */}
            <p className="text-[16px] font-medium text-blue-200 mt-1">
              Offered by <strong className="text-white font-semibold">IIM Shillong</strong> in association with{' '}
              <strong className="text-white font-semibold">SHRM India</strong>
            </p>
            <p className="text-sm md:text-base text-slate-200/90 leading-relaxed max-w-2xl mt-1">
              Designed for senior HR leaders, partners, and talent architects stepping up to board-level human capital
              governance, agentic AI workforce strategy, and enterprise total rewards.
            </p>

            {/* 4. 5 INFOGRAPHIC FEATURE BOXES (Compact Horizontal Micro-Cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 pt-3">
              {/* Tile 1 */}
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-2.5 rounded-xl flex flex-col justify-center">
                <div className="flex items-center gap-1.5 text-lime-400 mb-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">Duration</span>
                </div>
                <div className="text-sm font-bold text-white leading-snug">12 Months</div>
              </div>

              {/* Tile 2 */}
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-2.5 rounded-xl flex flex-col justify-center">
                <div className="flex items-center gap-1.5 text-lime-400 mb-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">Fees</span>
                </div>
                <div className="text-sm font-bold text-white leading-snug tabular-nums">₹1,50,000 + GST</div>
              </div>

              {/* Tile 3 */}
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-2.5 rounded-xl flex flex-col justify-center">
                <div className="flex items-center gap-1.5 text-lime-400 mb-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">Format</span>
                </div>
                <div className="text-xs font-bold text-white leading-snug">Live Online + Campus</div>
              </div>

              {/* Tile 4 */}
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-2.5 rounded-xl flex flex-col justify-center">
                <div className="flex items-center gap-1.5 text-lime-400 mb-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">Credits</span>
                </div>
                <div className="text-xs font-bold text-white leading-snug">40 SHRM PDCs</div>
              </div>

              {/* Tile 5 */}
              <div className="col-span-2 sm:col-span-1 bg-white/10 backdrop-blur-md border border-white/15 p-2.5 rounded-xl flex flex-col justify-center">
                <div className="flex items-center gap-1.5 text-lime-400 mb-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">Alumni</span>
                </div>
                <div className="text-xs font-bold text-white leading-snug">IIM Shillong Exec</div>
              </div>
            </div>
          </div>

          {/* RIGHT HERO FORM: High-FFR Floating Card */}
          <div className="lg:col-span-5" id="hero-apply-form">
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-2xl border border-slate-200 text-slate-900">
              <div className="border-b border-slate-100 pb-3 mb-4">
                <span className="text-xs uppercase tracking-wider font-extrabold text-[#005A5B]">
                  Fast-Track Enrolment
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#0F2C59] tracking-tight">
                  Request Programme Details &amp; Syllabus
                </h2>
                <p className="text-xs text-slate-500 font-semibold mt-0.5">Batch 07 • Limited Executive Cohort</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5" id="leadCaptureForm">
                {/* Work Experience Dropdown strictly restricted to the 3 bands */}
                <div>
                  <label
                    htmlFor="workExp"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    Total Work Experience <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="workExp"
                    value={formData.workExp}
                    onChange={(e) => setFormData({ ...formData, workExp: e.target.value })}
                    required
                    className="w-full h-11 px-3.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-[#005A5B] focus:border-[#005A5B] outline-none transition-all"
                  >
                    <option value="" disabled>
                      Select your experience band
                    </option>
                    <option value="10-15">10–15 years</option>
                    <option value="15-20">15–20 years</option>
                    <option value="20+">20+ years</option>
                  </select>
                  {formErrors.workExp && (
                    <p className="text-xs text-red-600 mt-1 font-medium">{formErrors.workExp}</p>
                  )}
                </div>

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g., Rajesh Sharma"
                    required
                    className="w-full h-11 px-3.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:ring-2 focus:ring-[#005A5B] focus:border-[#005A5B] outline-none transition-all"
                  />
                  {formErrors.fullName && (
                    <p className="text-xs text-red-600 mt-1 font-medium">{formErrors.fullName}</p>
                  )}
                </div>

                {/* Grid for Work Email & Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="workEmail"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                    >
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="workEmail"
                      type="email"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="name@company.com"
                      required
                      className="w-full h-11 px-3.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:ring-2 focus:ring-[#005A5B] focus:border-[#005A5B] outline-none transition-all"
                    />
                    {formErrors.workEmail && (
                      <p className="text-xs text-red-600 mt-1 font-medium">{formErrors.workEmail}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="mobileNo"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                    >
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="mobileNo"
                      type="tel"
                      value={formData.mobileNo}
                      onChange={(e) => setFormData({ ...formData, mobileNo: e.target.value })}
                      placeholder="+91 98765 43210"
                      required
                      className="w-full h-11 px-3.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:ring-2 focus:ring-[#005A5B] focus:border-[#005A5B] outline-none transition-all"
                    />
                    {formErrors.mobileNo && (
                      <p className="text-xs text-red-600 mt-1 font-medium">{formErrors.mobileNo}</p>
                    )}
                  </div>
                </div>

                {/* Current Designation */}
                <div>
                  <label
                    htmlFor="designation"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    Current Designation &amp; Organization <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="designation"
                    type="text"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    placeholder="e.g., VP - Human Resources, Global Corp"
                    required
                    className="w-full h-11 px-3.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:ring-2 focus:ring-[#005A5B] focus:border-[#005A5B] outline-none transition-all"
                  />
                  {formErrors.designation && (
                    <p className="text-xs text-red-600 mt-1 font-medium">{formErrors.designation}</p>
                  )}
                </div>

                {/* High-Pop Lime Action CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 mt-1 rounded-lg bg-[#84CC16] hover:bg-[#70B614] text-slate-950 font-black text-sm tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="inline-block w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                      <span>Processing Application...</span>
                    </span>
                  ) : (
                    <>
                      <span>DOWNLOAD BROCHURE &amp; APPLY NOW</span>
                      <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span className="flex items-center gap-1 font-medium">
                    <span className="material-symbols-outlined text-xs text-[#005A5B]">verified_user</span>
                    Confidential &amp; Zero Spam
                  </span>
                  <span>Admissions Application Fee: ₹2,500</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
