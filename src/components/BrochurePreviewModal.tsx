import React, { useState } from 'react';
import { PROGRAMME_META, HOTLINKED_ASSETS, MODULES } from '../data/programmeData';
import { LeadSubmission } from '../types';

interface BrochurePreviewModalProps {
  leadData: LeadSubmission | null;
  onClose: () => void;
  onConfirmEnrollment: () => void;
}

export const BrochurePreviewModal: React.FC<BrochurePreviewModalProps> = ({
  leadData,
  onClose,
  onConfirmEnrollment,
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const candidateName = leadData?.fullName || 'Executive Candidate';
  const candidateEmail = leadData?.workEmail || 'candidate@enterprise.com';
  const candidateExp = leadData?.workExp ? `${leadData.workExp} years` : '15+ years';
  const candidateDesignation = leadData?.designation || 'Senior Talent Architect / Executive';

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      window.print();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-6">
        {/* Header */}
        <div className="bg-[#0F2C59] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lime-400">
              <span className="material-symbols-outlined text-2xl">verified_user</span>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-lime-400">
                Official Admissions Dossier
              </span>
              <h3 className="text-xl font-black text-white">PGC-HRM Executive Prospectus &amp; Syllabus</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Dossier Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Personalized Greeting */}
          <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase text-teal-800 block">Personalized Prospectus</span>
              <div className="text-base font-black text-[#0F2C59] mt-0.5">Prepared for {candidateName}</div>
              <div className="text-xs text-slate-600">
                {candidateDesignation} • {candidateEmail} • Exp: {candidateExp}
              </div>
            </div>
            <span className="text-xs font-bold text-teal-800 bg-white border border-teal-200 px-3 py-1.5 rounded-lg shrink-0">
              Application ID: #SHR-{Math.floor(100000 + Math.random() * 900000)}
            </span>
          </div>

          {/* Quick Metrics Recap */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
              <span className="text-[10px] font-bold uppercase text-slate-500 block">Batch</span>
              <span className="text-sm font-black text-[#0F2C59] block mt-0.5">Cohort 07</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
              <span className="text-[10px] font-bold uppercase text-slate-500 block">Duration</span>
              <span className="text-sm font-black text-[#0F2C59] block mt-0.5">12 Months (160 Hrs)</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
              <span className="text-[10px] font-bold uppercase text-slate-500 block">SHRM Recert</span>
              <span className="text-sm font-black text-[#005A5B] block mt-0.5">40 PDCs</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
              <span className="text-[10px] font-bold uppercase text-slate-500 block">Deadline</span>
              <span className="text-sm font-black text-lime-700 block mt-0.5">21 Feb 2027</span>
            </div>
          </div>

          {/* Dual Certificate Visual Thumbnail */}
          <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 flex flex-col sm:flex-row items-center gap-4">
            <img
              src={HOTLINKED_ASSETS.sampleCertificate}
              alt="Certificate"
              className="w-44 h-auto rounded-lg shadow-sm border border-slate-200 shrink-0"
            />
            <div className="text-xs text-slate-700 space-y-1.5">
              <span className="font-bold text-[#0F2C59] text-sm block">Dual Institutional Credentials</span>
              <p className="leading-relaxed">
                Upon meeting academic graduation standards, you will receive the official Post Graduate Certificate from
                IIM Shillong with academic transcript and Certificate of Participation from SHRM India.
              </p>
              <div className="text-[11px] text-teal-700 font-semibold flex items-center gap-1.5 pt-1">
                <span className="material-symbols-outlined text-sm">verified</span>
                Recognized globally across Fortune 500 corporate corridors.
              </div>
            </div>
          </div>

          {/* Module Outline Table */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              Compact 8-Module Syllabus Summary
            </h4>
            <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden bg-white text-xs">
              {MODULES.map((m, idx) => (
                <div key={m.id} className="p-3 flex items-center justify-between gap-3 hover:bg-slate-50">
                  <div className="flex items-center gap-2.5">
                    <span className="font-bold text-slate-400 font-mono">0{idx + 1}</span>
                    <span className="font-bold text-[#0F2C59]">{m.title}</span>
                  </div>
                  <span className="text-[11px] text-slate-500 hidden sm:inline">{m.badge}</span>
                  <span className="text-[11px] font-bold text-teal-700 shrink-0">20 Hrs</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fee Schedule Summary */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div>
              <span className="text-slate-500 block">Total Programme Investment:</span>
              <span className="text-lg font-black text-[#0F2C59]">₹1,50,000 + 18% GST</span>
              <span className="text-slate-500 block mt-0.5">0% EMI option: ₹12,500/month (12 installments)</span>
            </div>
            <div className="text-right">
              <span className="text-slate-500 block">Admissions Application Fee:</span>
              <span className="text-base font-bold text-slate-800">₹2,500</span>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            {downloadSuccess
              ? '✓ Dossier prepared for print / download.'
              : 'Official admissions packet ready for download.'}
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">print</span>
              Print / Save Dossier
            </button>
            <button
              onClick={() => {
                onClose();
                onConfirmEnrollment();
              }}
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded-lg bg-[#84CC16] hover:bg-[#70B614] text-slate-950 font-black text-xs uppercase tracking-wider shadow transition-all cursor-pointer text-center"
            >
              Complete Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
