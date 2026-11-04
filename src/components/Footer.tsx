import React from 'react';
import { Mail, Globe } from 'lucide-react';
import { INSTITUTIONAL_INFO } from '../data/britishBoardData';
import originalLogo from '../assets/images/british_board_logo.jpg';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-slate-800">
          
          {/* Brand Column with Original Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg overflow-hidden border border-red-800 bg-[#9E131A] p-1 shrink-0">
                <img src={originalLogo} alt="British Board Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-cinzel text-base font-bold tracking-wider text-white block">
                  BRITISH BOARD
                </span>
                <span className="text-[11px] uppercase tracking-wider text-red-300 font-medium block">
                  For Training & Consulting
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Independent British accreditation board and educational quality authority dedicated to international standards in training curricula, professional competencies, and institutional accreditation.
            </p>

            <div className="text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span className="font-mono text-slate-300">british-board.uk</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span className="font-mono text-slate-300">{INSTITUTIONAL_INFO.officialEmail}</span>
              </div>
            </div>
          </div>

          {/* Quality Standards & Frameworks */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white font-cinzel">
              Standards & Frameworks
            </h4>
            <ul className="text-xs space-y-2 text-slate-400 font-light">
              <li>
                <button onClick={() => onNavigate('articles')} className="hover:text-white transition-colors text-left">
                  ISAT™ Trainer Accreditation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('articles')} className="hover:text-white transition-colors text-left">
                  ISDTP™ Training Package Design
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('articles')} className="hover:text-white transition-colors text-left">
                  Good Standing Certificate (UK Gov)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors text-left">
                  Institutional Quality Auditing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors text-left">
                  Accreditation Guidelines
                </button>
              </li>
            </ul>
          </div>

          {/* Articles & Publications (More and more) */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white font-cinzel">
              Articles (More & more)
            </h4>
            <ul className="text-xs space-y-2 text-slate-400 font-light">
              <li>
                <button onClick={() => onNavigate('articles')} className="hover:text-white transition-colors text-left">
                  We are in the State of Kuwait
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('articles')} className="hover:text-white transition-colors text-left">
                  Five Great Tips on Personality Development
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('articles')} className="hover:text-white transition-colors text-left">
                  Good Standing Certificate
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('articles')} className="hover:text-white transition-colors text-left">
                  The Right Way to Solve Problems
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('articles')} className="hover:text-white transition-colors text-left">
                  4 Ways You Can Motivate Your Team
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Navigation & Inquiry */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white font-cinzel">
              Institutional Links
            </h4>
            <ul className="text-xs space-y-2 text-slate-400 font-light">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('articles')} className="hover:text-white transition-colors">
                  Articles (More & more)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('news')} className="hover:text-white transition-colors">
                  News & Announcements
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Contact & Inquiries
                </button>
              </li>
            </ul>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="px-3.5 py-2 bg-[#9E131A] hover:bg-[#850E14] text-white text-xs font-semibold rounded transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-light">
          <div>
            © {new Date().getFullYear()} British Board for Training and Consulting · United Kingdom. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Terms of Accreditation</span>
            <span aria-hidden="true">·</span>
            <span>Privacy Policy</span>
            <span aria-hidden="true">·</span>
            <span>british-board.uk</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
