import React, { useState } from 'react';
import { FAQS } from '../data/programmeData';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ faq1: true });

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-16 md:py-20 bg-white border-b border-card-border" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#005A5B]">
            Clarifications &amp; Details
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F2C59] tracking-tight mt-1">
            Frequently Answered Queries
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-2">
            Essential information regarding delivery formats, credentials, alumni status, and fees.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((item) => {
            const isOpen = !!openIds[item.id];
            return (
              <div
                key={item.id}
                className={`rounded-xl p-5 border transition-all ${
                  isOpen
                    ? 'border-[#005A5B] bg-white shadow-sm'
                    : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left text-base font-bold text-[#0F2C59] cursor-pointer flex items-center justify-between gap-4"
                >
                  <span>{item.question}</span>
                  <span
                    className={`material-symbols-outlined text-teal-700 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <p className="text-sm text-slate-600 mt-3 pt-3 border-t border-slate-200/60 leading-relaxed">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
