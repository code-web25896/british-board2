import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  GraduationCap, 
  FileCheck2, 
  Globe 
} from 'lucide-react';
import { INSTITUTIONAL_INFO } from '../data/britishBoardData';
import originalLogo from '../assets/images/british_board_logo.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9E131A] font-semibold mb-2">
            <span>About Us</span>
            <span aria-hidden="true">·</span>
            <span>Accreditation & Standards</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            About the British Board for Training and Consulting
          </h2>

          <p className="mt-3 text-base text-slate-600 font-light leading-relaxed">
            An independent United Kingdom-based body committed to educational quality frameworks, institutional accreditation, and international qualification standards.
          </p>
        </div>

        {/* 2-Column Clean Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          
          <div className="lg:col-span-7 space-y-5 text-sm text-slate-700 leading-relaxed font-light">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-slate-900">
              Our Purpose & Mission
            </h3>

            <p>
              The <strong className="text-slate-900 font-medium">British Board for Training and Consulting</strong> works with educational academies, corporate learning departments, and professional training centers to establish rigorous quality frameworks. We review curricula, audit instructional standards, and certify learning outcomes.
            </p>

            <p>
              Through standardized qualification rubrics, our accredited partners deliver recognized training tracks in essential domains including Trainer Competence (Training of Trainers), Leadership & Strategic Management, Quality Assurance, and Technology Governance.
            </p>

            <div className="pt-2 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9E131A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-medium">Accreditation of Training Providers</strong>
                  <span className="text-xs text-slate-500">
                    Comprehensive evaluation of instructional materials, instructor qualifications, and learning facilities.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9E131A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-medium">Standardized Competency Assessment</strong>
                  <span className="text-xs text-slate-500">
                    Ensuring all certified trainees achieve measurable learning outcomes aligned with industry needs.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9E131A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-medium">Centralized Verification Register</strong>
                  <span className="text-xs text-slate-500">
                    Transparent validation system enabling employers and recruiters to verify credentials online.
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Institutional Seal Box */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center max-w-sm w-full space-y-4">
              <div className="w-28 h-28 mx-auto rounded-xl overflow-hidden shadow-sm bg-[#9E131A] p-1.5 border border-red-800">
                <img
                  src={originalLogo}
                  alt="British Board for Training and Consulting Seal"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <h4 className="font-cinzel text-lg font-bold text-slate-900">
                  British Board
                </h4>
                <div className="text-xs text-[#9E131A] font-semibold uppercase tracking-wider mt-0.5">
                  Training & Consulting · UK
                </div>
              </div>

              <div className="w-12 h-0.5 bg-slate-200 mx-auto" />

              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Committed to educational integrity, transparent evaluation, and supporting educators and professionals worldwide.
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-center gap-1.5 text-xs text-slate-400 font-mono">
                <Globe className="w-3.5 h-3.5 text-slate-400" />
                <span>british-board.uk</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="pt-8 border-t border-slate-200">
          <div className="max-w-2xl mb-8">
            <h3 className="font-cinzel text-xl font-bold text-slate-900">
              Core Pillars of the Board
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Guiding principles for program accreditation and professional recognition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSTITUTIONAL_INFO.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:border-slate-300 transition-all shadow-xs space-y-3"
              >
                <div className="text-xs font-mono text-[#9E131A] font-bold">
                  0{idx + 1}. PILLAR
                </div>
                <h4 className="font-bold text-slate-900 text-sm">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
