import React, { useState } from 'react';
import { 
  ArrowRight, 
  X,
  ExternalLink
} from 'lucide-react';
import { NEWS_ARTICLES, NewsArticle } from '../data/britishBoardData';
import originalLogo from '../assets/images/british_board_logo.jpg';

export const NewsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeArticleModal, setActiveArticleModal] = useState<NewsArticle | null>(null);

  const filters = [
    { id: 'all', label: 'All News & Dispatches' },
    { id: 'governance', label: 'Governance (Companies House)' },
    { id: 'cpd', label: 'CPD Provider' },
    { id: 'standards', label: 'ISAT™ & ISDTP™ Standards' },
    { id: 'expansion', label: 'Global Branches' },
  ];

  const filteredArticles = selectedFilter === 'all'
    ? NEWS_ARTICLES
    : NEWS_ARTICLES.filter(a => a.category === selectedFilter);

  return (
    <section id="news" className="py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9E131A] font-semibold mb-2">
            <span>Official News & Updates</span>
            <span aria-hidden="true">·</span>
            <span>https://british-board.uk/news</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            British Board News & Official Announcements
          </h2>

          <p className="mt-3 text-base text-slate-600 font-light leading-relaxed">
            Latest press releases, institutional achievements, Good Standing confirmations, and international quality standards from the British Board for Training and Consulting.
          </p>
        </div>

        {/* Filter Bar (Segmented Button Control) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-lg overflow-x-auto max-w-full mb-10 scrollbar-none">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-3.5 py-2 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-all ${
                selectedFilter === filter.id
                  ? 'bg-white text-slate-950 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="flex flex-col justify-between bg-slate-50/70 rounded-xl border border-slate-200 p-6 hover:bg-white hover:border-slate-300 transition-all shadow-xs group"
            >
              <div className="space-y-3.5">
                
                {/* Unboxed Metadata without pills */}
                <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                  <span className="font-semibold text-[#9E131A]">{article.reference}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.date}</span>
                </div>

                {/* Article Title */}
                <h3 
                  onClick={() => setActiveArticleModal(article)}
                  className="font-cinzel text-lg font-bold text-slate-900 group-hover:text-[#9E131A] transition-colors leading-snug cursor-pointer"
                >
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  {article.summary}
                </p>

              </div>

              {/* Action trigger */}
              <div className="pt-5 mt-5 border-t border-slate-200/70">
                <button
                  onClick={() => setActiveArticleModal(article)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-900 hover:text-[#9E131A] group-hover:underline transition-colors"
                >
                  <span>Read full announcement</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Article Detail Reader Modal */}
      {activeArticleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-xl border border-slate-200 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-start justify-between gap-4 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg overflow-hidden border border-red-800 bg-[#9E131A] p-0.5 shrink-0">
                  <img src={originalLogo} alt="" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#9E131A] font-semibold">
                    {activeArticleModal.reference} · {activeArticleModal.categoryLabel}
                  </div>
                  <div className="text-xs text-slate-500">
                    {activeArticleModal.date} · Official Announcement
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveArticleModal(null)}
                className="p-1.5 text-slate-400 hover:text-slate-900 rounded-md hover:bg-slate-100 transition-colors"
                aria-label="Close announcement modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-5">
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-slate-950 leading-snug">
                {activeArticleModal.title}
              </h3>

              <div className="w-16 h-0.5 bg-[#9E131A]" />

              <div className="space-y-4 text-sm text-slate-700 leading-relaxed font-light">
                {activeArticleModal.content.map((paragraph, i) => (
                  <p key={i}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Institutional Sign-off */}
              <div className="pt-6 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                <div className="font-bold text-slate-900">
                  British Board for Training and Consulting
                </div>
                <div>United Kingdom · Official Registry</div>
                <div className="text-[11px] font-mono text-slate-400">Source: https://british-board.uk/news</div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 border-t border-slate-200 p-4 flex justify-end">
              <button
                onClick={() => setActiveArticleModal(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-white border border-slate-200 rounded-md"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
