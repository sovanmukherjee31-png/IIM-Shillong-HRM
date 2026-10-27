import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-12 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800 text-xs">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-white font-black text-sm">IIM SHILLONG</span>
              <span className="text-slate-600">|</span>
              <span className="text-teal-400 font-bold text-sm">SHRM India</span>
            </div>
            <p className="leading-relaxed text-slate-400">
              Post Graduate Certificate in Human Resource Management (PGC-HRM Cohort 07). Co-crafted for executive
              leaders navigating boardroom talent strategies.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3 text-[11px]">Accreditations</h4>
            <ul className="space-y-1.5">
              <li>AACSB Member Institute</li>
              <li>EQUIS Standards Alignment</li>
              <li>SHRM Competency Body of Knowledge (SHRM BoCK)</li>
              <li>NIRF Management Ranked</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3 text-[11px]">Executive Office</h4>
            <p className="leading-relaxed">
              Executive Academics Wing,
              <br />
              Indian Institute of Management Shillong,
              <br />
              Umsawli, Shillong, Meghalaya – 793018
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3 text-[11px]">Admissions Support</h4>
            <p className="leading-relaxed">
              Queries: <span className="text-white font-medium">pgchrm-admissions@iimshillong.ac.in</span>
              <br />
              Helpline: +91 364 230 8000
            </p>
            <div className="mt-3 flex items-center gap-2 text-teal-400">
              <span className="material-symbols-outlined text-base">verified</span>
              <span className="font-semibold text-[11px]">Official Admissions Window</span>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>© 2027 Indian Institute of Management Shillong &amp; SHRM India. All rights reserved.</div>
          <div className="flex gap-4">
            <a className="hover:text-slate-300 transition-colors" href="#overview">
              Privacy Policy
            </a>
            <a className="hover:text-slate-300 transition-colors" href="#overview">
              DPDP Compliance
            </a>
            <a className="hover:text-slate-300 transition-colors" href="#overview">
              Terms of Enrolment
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
