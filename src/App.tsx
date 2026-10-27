import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { OverviewSection } from './components/OverviewSection';
import { CurriculumSection } from './components/CurriculumSection';
import { CredentialsSection } from './components/CredentialsSection';
import { CampusSection } from './components/CampusSection';
import { FacultySection } from './components/FacultySection';
import { FeesSection } from './components/FeesSection';
import { FaqSection } from './components/FaqSection';
import { StickyBottomBar } from './components/StickyBottomBar';
import { Footer } from './components/Footer';
import { SyllabusDeepDive } from './components/SyllabusDeepDive';
import { EligibilityCalculatorModal } from './components/EligibilityCalculatorModal';
import { CampusResidencyModal } from './components/CampusResidencyModal';
import { BrochurePreviewModal } from './components/BrochurePreviewModal';
import { ActiveScreen, LeadSubmission } from './types';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('home');
  const [showBrochureModal, setShowBrochureModal] = useState<boolean>(false);
  const [showEligibilityModal, setShowEligibilityModal] = useState<boolean>(false);
  const [showResidencyModal, setShowResidencyModal] = useState<boolean>(false);
  const [leadData, setLeadData] = useState<LeadSubmission | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const scrollToApply = () => {
    if (activeScreen !== 'home') {
      setActiveScreen('home');
    }
    setTimeout(() => {
      const formEl = document.getElementById('hero-apply-form');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
        const firstInput = formEl.querySelector('select, input') as HTMLElement;
        if (firstInput) {
          firstInput.focus();
        }
      }
    }, 100);
  };

  const handleLeadSuccess = (submission: LeadSubmission) => {
    setLeadData(submission);
    setShowBrochureModal(true);
    setToastMessage(`Brochure & admissions packet generated for ${submission.fullName}!`);
    setTimeout(() => setToastMessage(null), 5000);
  };

  const handleConfirmEnrollment = () => {
    setToastMessage('Application profile submitted to the IIM Shillong Admissions Committee. We will contact you soon.');
    setTimeout(() => setToastMessage(null), 6000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans selection:bg-[#84CC16] selection:text-slate-950">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-4 z-50 bg-[#005A5B] text-white px-5 py-3 rounded-xl shadow-2xl border border-teal-300/40 flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <span className="material-symbols-outlined text-lime-400 text-xl">check_circle</span>
          <span className="text-xs font-semibold">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-white/70 hover:text-white ml-2 text-xs font-bold"
          >
            ✕
          </button>
        </div>
      )}

      {/* Global Header */}
      <Header
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
        onApplyClick={scrollToApply}
        onBrochureClick={() => setShowBrochureModal(true)}
      />

      {/* Screen Routing */}
      {activeScreen === 'curriculum-deepdive' ? (
        <main className="flex-1">
          <SyllabusDeepDive
            onBack={() => setActiveScreen('home')}
            onApply={() => {
              setActiveScreen('home');
              scrollToApply();
            }}
          />
        </main>
      ) : activeScreen === 'eligibility-calculator' ? (
        <main className="flex-1 py-12 px-4 max-w-4xl mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={() => setActiveScreen('home')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#005A5B] hover:text-[#0F2C59] cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Back to Overview
            </button>
          </div>
          <EligibilityCalculatorModal
            onClose={() => setActiveScreen('home')}
            onProceedToApply={() => {
              setActiveScreen('home');
              scrollToApply();
            }}
          />
        </main>
      ) : activeScreen === 'campus-residency' ? (
        <main className="flex-1 py-12 px-4 max-w-4xl mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={() => setActiveScreen('home')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#005A5B] hover:text-[#0F2C59] cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Back to Overview
            </button>
          </div>
          <CampusResidencyModal
            onClose={() => setActiveScreen('home')}
            onApply={() => {
              setActiveScreen('home');
              scrollToApply();
            }}
          />
        </main>
      ) : (
        /* Primary Executive Portal Landing Screen */
        <main className="flex-1 w-full">
          {/* SECTION 1 & 2: HERO WITH DUAL GRADIENT & LEAD CAPTURE FORM */}
          <HeroSection onSuccessLead={handleLeadSuccess} />

          {/* SECTION 3: PROGRAMME OVERVIEW (2-COLUMN SPLIT) */}
          <OverviewSection />

          {/* SECTION 4: COMPACT 8-MODULE EXECUTIVE CURRICULUM */}
          <CurriculumSection
            onOpenSyllabusDeepDive={() => setActiveScreen('curriculum-deepdive')}
            onDownloadSyllabus={() => setShowBrochureModal(true)}
          />

          {/* SECTION 5: CO-BRANDED CREDENTIALS & ALUMNI BENEFITS */}
          <CredentialsSection />

          {/* SECTION 6: ON-CAMPUS IMMERSION EXPERIENCE */}
          <CampusSection
            onOpenResidencySchedule={() => setShowResidencyModal(true)}
          />

          {/* SECTION 7: DISTINGUISHED FACULTY */}
          <FacultySection />

          {/* SECTION 8: PROGRAMME INVESTMENT & SCHEDULE */}
          <FeesSection
            onCheckEligibility={() => setShowEligibilityModal(true)}
          />

          {/* SECTION 9: ACCURATE EXECUTIVE PROGRAMME FAQs */}
          <FaqSection />
        </main>
      )}

      {/* Persistent Sticky Bottom CTA Bar */}
      <StickyBottomBar
        onApplyClick={scrollToApply}
        onBrochureClick={() => setShowBrochureModal(true)}
      />

      {/* Institutional Footer */}
      <Footer />

      {/* Interactive Modals */}
      {showBrochureModal && (
        <BrochurePreviewModal
          leadData={leadData}
          onClose={() => setShowBrochureModal(false)}
          onConfirmEnrollment={handleConfirmEnrollment}
        />
      )}

      {showEligibilityModal && (
        <EligibilityCalculatorModal
          onClose={() => setShowEligibilityModal(false)}
          onProceedToApply={() => {
            setShowEligibilityModal(false);
            scrollToApply();
          }}
        />
      )}

      {showResidencyModal && (
        <CampusResidencyModal
          onClose={() => setShowResidencyModal(false)}
          onApply={() => {
            setShowResidencyModal(false);
            scrollToApply();
          }}
        />
      )}
    </div>
  );
}
