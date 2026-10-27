import React from 'react';

interface StickyBottomBarProps {
  onApplyClick: () => void;
  onBrochureClick: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  onApplyClick,
  onBrochureClick,
}) => {
  return (
    <aside className="fixed bottom-0 left-0 right-0 z-50 bg-[#0F172A] border-t border-slate-700/60 shadow-[0_-4px_24px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left Side Info */}
        <div className="flex items-center gap-3 sm:gap-6 text-xs text-slate-300 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-lime-400 text-base">calendar_today</span>
            <span>
              APPLICATION DEADLINE: <strong className="text-white font-bold">21st February 2027</strong>
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
            <span>
              BATCH STATUS: <strong className="text-lime-400 font-bold">Enrollments Closing Soon (Batch 07)</strong>
            </span>
          </div>
        </div>

        {/* Right Side Dual Action Buttons */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Ghost Download Brochure */}
          <button
            type="button"
            onClick={onBrochureClick}
            className="flex-1 md:flex-initial h-10 px-4 rounded-lg border border-slate-400 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">download</span>
            Download Brochure
          </button>

          {/* Solid High-Pop Lime Green Apply Now */}
          <button
            type="button"
            onClick={onApplyClick}
            className="flex-1 md:flex-initial h-10 px-6 rounded-lg bg-[#84CC16] hover:bg-[#70B614] text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            Apply Now
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
