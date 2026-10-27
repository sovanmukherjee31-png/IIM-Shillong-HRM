import React from 'react';
import { HOTLINKED_ASSETS } from '../data/programmeData';

export const CredentialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-card-border" id="credentials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Sample Certificate Showcase */}
          <div className="lg:col-span-6">
            <div className="relative bg-slate-100 p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-xl group">
              <img
                alt="IIM Shillong Executive Certificate Sample"
                className="w-full h-auto rounded-xl object-contain shadow-sm border border-slate-200 group-hover:scale-[1.01] transition-transform duration-300"
                src={HOTLINKED_ASSETS.sampleCertificate}
              />
              {/* Verified Dual Badge Overlay */}
              <div className="absolute -bottom-3 -right-2 sm:bottom-6 sm:right-6 bg-[#0F2C59] text-white px-4 py-2 rounded-lg shadow-xl border border-teal-400/40 flex items-center gap-2.5">
                <span className="material-symbols-outlined text-lime-400 text-xl">verified</span>
                <div>
                  <div className="text-xs font-bold leading-tight">Dual-Verified Credential</div>
                  <div className="text-[10px] text-teal-300">IIM Shillong &amp; SHRM India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Privileges & Credential Stacks */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#005A5B]">
                Prestigious Dual Validation
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0F2C59] tracking-tight mt-1">
                Executive Alumni Privileges &amp; Global Recognition
              </h2>
              <p className="text-slate-600 text-sm md:text-base mt-2">
                Graduates join an elite fraternity of business professionals recognized across corporate corridors globally.
              </p>
            </div>

            <div className="space-y-3.5">
              {/* Item 1 */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-teal-200 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-[#005A5B] flex-shrink-0">
                  <span className="material-symbols-outlined text-xl">school</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F2C59]">IIM Shillong Certificate of Completion</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Formal Post Graduate Certificate issued directly by Indian Institute of Management Shillong with
                    official transcript validation.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-teal-200 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-[#005A5B] flex-shrink-0">
                  <span className="material-symbols-outlined text-xl">workspace_premium</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F2C59]">SHRM India Participation &amp; 40 PDCs</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Eligible SHRM-CP and SHRM-SCP credential holders earn 40 Professional Development Credits towards
                    global recertification.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-teal-200 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-[#005A5B] flex-shrink-0">
                  <span className="material-symbols-outlined text-xl">groups</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F2C59]">
                    IIM Shillong Executive Alumni Status (Optional)
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Option to acquire official Executive Alumni Status (₹10,000 + GST) unlocking lifelong library database
                    access, alumni email ID, and global chapter membership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
