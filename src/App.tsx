/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ArticlesSection } from './components/ArticlesSection';
import { AboutSection } from './components/AboutSection';
import { NewsSection } from './components/NewsSection';
import { AccreditationContact } from './components/AccreditationContact';
import { Footer } from './components/Footer';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-red-100 selection:text-red-900">
      
      {/* Top Advisory Ribbon */}
      <div className="bg-slate-950 text-slate-300 text-[11px] py-1.5 px-4 border-b border-slate-800 text-center font-medium tracking-wide">
        <span className="text-red-400 font-semibold uppercase tracking-wider">British Board for Training and Consulting</span>
        <span className="mx-2 text-slate-600">·</span>
        <span>United Kingdom Official Portal</span>
        <span className="mx-2 text-slate-600">·</span>
        <span className="text-slate-400">british-board.uk</span>
      </div>

      {/* Main Top Bar */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections: Hero -> Articles (More and more) -> About Us -> News -> Contact */}
      <main className="flex-1">
        <Hero onNavigate={handleNavigate} />

        {/* Official Articles Section for SEO: "Articles" / "More and more" */}
        <ArticlesSection />

        {/* About Section */}
        <AboutSection />

        {/* News Section */}
        <NewsSection />

        {/* Center Accreditation & Contact */}
        <AccreditationContact />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 p-3 bg-slate-900 hover:bg-[#9E131A] text-white rounded-full shadow-lg border border-slate-700 transition-all hover:scale-105 active:scale-95"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4 text-white" />
        </button>
      )}

    </div>
  );
}
