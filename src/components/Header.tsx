import React, { useState } from 'react';
import { ActiveScreen } from '../types';

interface HeaderProps {
  activeScreen: ActiveScreen;
  setActiveScreen: (screen: ActiveScreen) => void;
  onApplyClick: () => void;
  onBrochureClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeScreen,
  setActiveScreen,
  onApplyClick,
  onBrochureClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#overview', screen: 'home' as ActiveScreen },
    { label: 'Curriculum', href: '#curriculum', screen: 'home' as ActiveScreen },
    { label: 'Credentials', href: '#credentials', screen: 'home' as ActiveScreen },
    { label: 'Campus Immersion', href: '#campus', screen: 'home' as ActiveScreen },
    { label: 'Faculty', href: '#faculty', screen: 'home' as ActiveScreen },
    { label: 'Fees & Schedule', href: '#fees', screen: 'home' as ActiveScreen },
    { label: 'FAQs', href: '#faqs', screen: 'home' as ActiveScreen },
  ];

  const handleNavClick = (href: string, targetScreen: ActiveScreen) => {
    setActiveScreen(targetScreen);
    setMobileMenuOpen(false);
    if (targetScreen === 'home') {
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-[#0F2C59] border-b border-white/10 shadow-md backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Co-Branded Institutional Identity */}
        <div className="flex items-center gap-3 sm:gap-5">
          <button
            onClick={() => {
              setActiveScreen('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 bg-white/5 hover:bg-white/10 py-1.5 px-3 rounded-lg border border-white/10 transition-colors text-left"
            aria-label="IIM Shillong & SHRM India Home"
          >
            <div className="flex flex-col leading-tight">
              <span className="text-white font-extrabold tracking-tight text-base sm:text-lg">
                IIM SHILLONG
              </span>
              <span className="text-teal-300 text-[10px] uppercase font-semibold tracking-wider">
                Executive Academics
              </span>
            </div>
            <div className="h-7 w-[1px] bg-white/20"></div>
            <div className="flex items-center gap-2">
              {/* SHRM Vector Mark */}
              <div className="flex items-center bg-white/10 px-2 py-0.5 rounded text-white font-black text-xs tracking-wider border border-white/15">
                <span className="text-white font-extrabold tracking-wider">SHRM</span>
              </div>
              <span className="text-slate-300 text-xs font-semibold uppercase tracking-wider hidden sm:inline">
                India
              </span>
            </div>
          </button>
        </div>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-200">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href, link.screen)}
              className="hover:text-lime-400 transition-colors cursor-pointer py-1 text-slate-200"
            >
              {link.label}
            </button>
          ))}
          {/* Interactive Feature Screens Switcher */}
          <div className="h-4 w-[1px] bg-white/20"></div>
          <button
            onClick={() => setActiveScreen('curriculum-deepdive')}
            className={`text-xs px-2.5 py-1 rounded transition-colors font-semibold ${
              activeScreen === 'curriculum-deepdive'
                ? 'bg-teal-600 text-white'
                : 'text-teal-300 hover:text-white bg-white/5'
            }`}
          >
            Syllabus Explorer
          </button>
          <button
            onClick={() => setActiveScreen('eligibility-calculator')}
            className={`text-xs px-2.5 py-1 rounded transition-colors font-semibold ${
              activeScreen === 'eligibility-calculator'
                ? 'bg-teal-600 text-white'
                : 'text-teal-300 hover:text-white bg-white/5'
            }`}
          >
            Eligibility Check
          </button>
        </nav>

        {/* Right: Global Institutional Accreditations */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3 py-1.5 rounded-lg text-white">
            <span className="text-xs font-bold text-lime-400 tracking-wider">AACSB</span>
            <span className="text-white/40 text-xs">•</span>
            <span className="text-xs font-bold text-teal-300 tracking-wider">EQUIS</span>
            <span className="text-[11px] text-slate-300 font-medium hidden sm:inline">Accredited</span>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A1E3F] border-b border-white/15 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href, link.screen)}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-lime-400 hover:bg-white/5 rounded-md"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setActiveScreen('curriculum-deepdive');
                setMobileMenuOpen(false);
              }}
              className="text-xs text-center py-2 bg-white/10 rounded text-teal-200 font-semibold"
            >
              Syllabus Explorer
            </button>
            <button
              onClick={() => {
                setActiveScreen('eligibility-calculator');
                setMobileMenuOpen(false);
              }}
              className="text-xs text-center py-2 bg-white/10 rounded text-teal-200 font-semibold"
            >
              Eligibility Check
            </button>
          </div>
          <div className="pt-2 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                onBrochureClick();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-lg border border-slate-400 text-white font-bold text-xs uppercase"
            >
              Brochure
            </button>
            <button
              onClick={() => {
                onApplyClick();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-lg bg-[#84CC16] text-slate-950 font-black text-xs uppercase"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
