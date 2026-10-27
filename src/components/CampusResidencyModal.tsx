import React from 'react';
import { HOTLINKED_ASSETS } from '../data/programmeData';

interface CampusResidencyModalProps {
  onClose: () => void;
  onApply: () => void;
}

export const CampusResidencyModal: React.FC<CampusResidencyModalProps> = ({ onClose, onApply }) => {
  const scheduleSlots = [
    {
      time: '08:30 AM – 09:30 AM',
      title: 'Executive Welcome & High-Altitude Breakfast',
      venue: 'Pine View Dining Pavilion',
      desc: 'Arrival at Umsawli Campus, cohort registration, and networking with IIM Shillong Director and Faculty.',
    },
    {
      time: '09:30 AM – 12:30 PM',
      title: 'Boardroom Capstone Defense Presentations',
      venue: 'Harvard Amphitheatre Lecture Hall',
      desc: 'Syndicate group presentations defending enterprise workforce transformations before an external CHRO jury.',
    },
    {
      time: '12:30 PM – 02:00 PM',
      title: 'Institutional Networking Luncheon',
      venue: 'Faculty Club & Executive Verandah',
      desc: 'Informal discussions with guest industry speakers, SHRM India delegates, and peer HR leaders.',
    },
    {
      time: '02:00 PM – 04:30 PM',
      title: 'AI in People Strategy Masterclass & Simulation',
      venue: 'Executive Learning Suite 2',
      desc: 'Live interactive crisis management simulation tackling agentic AI talent disruptions and regulatory inquiries.',
    },
    {
      time: '04:30 PM – 06:00 PM',
      title: 'Formal Convocation & Certificate Ceremony',
      venue: 'Auditorium Complex',
      desc: 'Conferment of Post Graduate Certificate in Human Resource Management and group photo session.',
    },
    {
      time: '07:00 PM – 09:30 PM',
      title: 'Gala Faculty Dinner & Alumni Induction',
      venue: 'Heritage Shillong Club',
      desc: 'Formal welcoming into the IIM Shillong Executive Alumni network with keynote address by CHRO mentor.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-8">
        {/* Header */}
        <div className="relative bg-[#0F2C59] text-white p-6 sm:p-8 overflow-hidden">
          <div className="relative z-10">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-lime-400">
              Campus Experience Guide
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
              1-Day On-Campus Immersion &amp; Capstone Defense
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-2xl">
              Indian Institute of Management Shillong, Umsawli Campus, Meghalaya. An unforgettable milestone connecting
              academic rigor with lifelong camaraderie.
            </p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-[10px] font-bold uppercase text-teal-700 block">Location</span>
              <span className="text-xs font-bold text-slate-900 mt-0.5 block">Umsawli, New Shillong</span>
              <span className="text-[11px] text-slate-500">120-acre green campus</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-[10px] font-bold uppercase text-teal-700 block">Timing</span>
              <span className="text-xs font-bold text-slate-900 mt-0.5 block">Month 12 Residency</span>
              <span className="text-[11px] text-slate-500">Full day intensive</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-[10px] font-bold uppercase text-teal-700 block">Accommodation</span>
              <span className="text-xs font-bold text-slate-900 mt-0.5 block">Executive MDP Guest House</span>
              <span className="text-[11px] text-slate-500">Pre-booked on campus</span>
            </div>
          </div>

          {/* Schedule Timeline */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              Residency Itinerary &amp; Milestone Schedule
            </h4>
            <div className="space-y-3">
              {scheduleSlots.map((slot, i) => (
                <div key={i} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-[#005A5B] font-bold text-xs shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-slate-900">{slot.title}</span>
                      <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-mono">
                        {slot.time}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{slot.desc}</p>
                    <span className="text-[10px] text-teal-700 font-semibold mt-1 inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">location_on</span>
                      {slot.venue}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Campus Facilities Photo Strip */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="h-36 rounded-xl overflow-hidden border border-slate-200 relative">
              <img
                src={HOTLINKED_ASSETS.campusAmphitheatre}
                alt="Amphitheatre"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-2 left-2 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs">
                Harvard Amphitheatre
              </span>
            </div>
            <div className="h-36 rounded-xl overflow-hidden border border-slate-200 relative">
              <img
                src={HOTLINKED_ASSETS.campusLearningSuite}
                alt="Executive Suite"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-2 left-2 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs">
                Executive Learning Suites
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-600">Travel assistance from Guwahati Airport (GAU) is coordinated.</span>
          <button
            onClick={() => {
              onClose();
              onApply();
            }}
            className="px-5 py-2.5 rounded-lg bg-[#84CC16] hover:bg-[#70B614] text-slate-950 font-black text-xs uppercase tracking-wider shadow cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};
