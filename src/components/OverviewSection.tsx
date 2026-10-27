import React from 'react';
import { HOTLINKED_ASSETS } from '../data/programmeData';

export const OverviewSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-card-border" id="overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#005A5B]">
            Executive Leadership Transition
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F2C59] tracking-tight mt-1">
            Transform Your HR Expertise into Business Impact
          </h2>
          <p className="text-lg font-medium text-slate-600 mt-2">
            From Operational Management to Strategic C-Suite People Leadership
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Copy & 3 Metric Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8">
            <div className="space-y-4 text-slate-700 leading-relaxed text-base">
              <p>
                In today’s volatile enterprise climate, transactional human resources has ceased to be a differentiator.
                Leading organizations demand People Strategists who can translate human capital analytics into financial
                outcomes, steer through generative &amp; <strong>agentic AI workforce shifts</strong>, and ensure full
                compliance with regulatory frameworks including India’s <strong>DPDP Act 2023</strong>.
              </p>
              <p>
                The <strong>Post Graduate Certificate in Human Resource Management (PGC-HRM)</strong> by{' '}
                <strong>IIM Shillong</strong> and <strong>SHRM India</strong> equips you with boardroom frameworks. You
                master algorithmic talent modeling, dynamic workforce forecasting, C-suite total rewards design, and M&amp;A
                integration blueprints.
              </p>
            </div>

            {/* 3 Core Metric Highlights in Bento Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700">SHRM 2025 Study</span>
                  <div className="text-3xl font-black text-[#0F2C59] mt-2">43%</div>
                </div>
                <div className="mt-2 text-xs font-semibold text-slate-600">
                  AI Adoption in Talent &amp; Workforce Pipelines
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700">
                    World Economic Forum
                  </span>
                  <div className="text-3xl font-black text-[#0F2C59] mt-2">~40%</div>
                </div>
                <div className="mt-2 text-xs font-semibold text-slate-600">
                  Core HR Skill Shift Required by 2030
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700">
                    SHRM Recertification
                  </span>
                  <div className="text-3xl font-black text-[#005A5B] mt-2">40 PDCs</div>
                </div>
                <div className="mt-2 text-xs font-semibold text-slate-600">
                  Direct Credits towards SHRM-CP &amp; SCP
                </div>
              </div>
            </div>

            {/* Capability Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold rounded-md">
                Agentic AI &amp; Talent Analytics
              </span>
              <span className="px-3 py-1 bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold rounded-md">
                Executive Total Rewards
              </span>
              <span className="px-3 py-1 bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold rounded-md">
                DPDP Act 2023 Compliance
              </span>
              <span className="px-3 py-1 bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold rounded-md">
                Strategic HRBP Advisory
              </span>
            </div>
          </div>

          {/* Right Column: Visual Card with Banner Image */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-full flex flex-col justify-between bg-slate-900 group min-h-[380px]">
              <img
                alt="IIM Shillong Executive Programme Banner"
                className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={HOTLINKED_ASSETS.overviewBanner}
              />
              {/* Subtle dark overlay on lower half */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2C59] via-transparent to-transparent opacity-90"></div>

              {/* Top floating badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="bg-[#005A5B]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-teal-400/30 shadow-md">
                  12-Month Executive Journey at IIM Shillong
                </span>
                <span className="bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-2.5 py-1 rounded-lg">
                  Cohort 07
                </span>
              </div>

              {/* Bottom info badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200/80 shadow-lg text-slate-900">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#0F2C59]">Dual Institutional Excellence</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      IIM Shillong Pedagogy + SHRM Global Competency Framework
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-[#005A5B] text-2xl">verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
