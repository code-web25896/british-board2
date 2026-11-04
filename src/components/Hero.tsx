import React from 'react';
import { BookOpen, CheckCircle2, ArrowRight, Mail } from 'lucide-react';
import originalLogo from '../assets/images/british_board_logo.jpg';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden border-b border-slate-800">
      {/* Subtle clean institutional pattern backdrop */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#9e131a_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 lg:pt-20 lg:pb-24">
        
        {/* Unboxed Metadata Header (§1.A Zero-Pill) */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-red-300 font-semibold mb-4">
          <span>United Kingdom</span>
          <span aria-hidden="true" className="text-slate-500">·</span>
          <span>Training & Consulting Accreditation</span>
          <span aria-hidden="true" className="text-slate-500">·</span>
          <span>ISAT™ & ISDTP™ Standards</span>
        </div>

        {/* 2-Column Split: Editorial & Official Logo Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Headline & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight lg:leading-[1.15] text-balance">
              British Board for Training & Consulting
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed font-light max-w-2xl">
              Setting international standards of excellence in professional training, institutional curriculum accreditation, and lifelong executive development.
            </p>

            <div className="space-y-3 pt-2 text-xs text-slate-300 font-light">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>International Standards for Adoption of Trainers (ISAT™)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>International Standards of Design the Training Packages (ISDTP™)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Certificate of Good Standing from UK Government Companies House</span>
              </div>
            </div>

            {/* Action Buttons: Clean and without Certifications button */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('articles')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#9E131A] hover:bg-[#850E14] text-white font-semibold text-xs uppercase tracking-wider rounded-md transition-all shadow-md active:scale-95"
              >
                <BookOpen className="w-4 h-4 text-white" />
                <span>Read Articles (More and more)</span>
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 hover:bg-slate-100 font-semibold text-xs uppercase tracking-wider rounded-md transition-all shadow-sm"
              >
                <span>About the Board</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#9E131A]" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-medium text-xs uppercase tracking-wider rounded-md transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>Contact Us</span>
              </button>
            </div>

          </div>

          {/* Right Column: Authentic Logo Showcase Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm rounded-xl p-6 bg-slate-800/90 border border-slate-700/80 shadow-2xl backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                
                {/* User's Original Logo */}
                <div className="relative w-44 h-44 rounded-xl overflow-hidden shadow-md mb-4 bg-[#9E131A] p-2 border border-red-800">
                  <img
                    src={originalLogo}
                    alt="British Board for Training and Consulting Official Logo"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <span className="font-cinzel text-lg font-bold text-white tracking-wider">
                  BRITISH BOARD
                </span>
                <span className="text-xs text-red-300 mt-1 uppercase tracking-widest font-semibold">
                  For Training & Consulting
                </span>

                <div className="w-16 h-px bg-slate-700 my-4" />

                <div className="text-left space-y-2.5 text-xs text-slate-300 w-full">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Curriculum accreditation for training institutions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Certified Professional Trainer Standards (CPT & APT)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Full compliance with UK statutory requirements</span>
                  </div>
                </div>

                <div className="mt-5 w-full pt-4 border-t border-slate-700 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>UNITED KINGDOM</span>
                  <span className="text-emerald-400">OFFICIAL PORTAL</span>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
