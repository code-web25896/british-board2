import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight, 
  X, 
  Search, 
  Tag,
  Share2,
  Check
} from 'lucide-react';
import { OFFICIAL_ARTICLES, BlogArticle } from '../data/britishBoardData';
import originalLogo from '../assets/images/british_board_logo.jpg';

export const ArticlesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<BlogArticle | null>(null);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'Standards', label: 'Standards (ISAT™ & ISDTP™)' },
    { id: 'Governance', label: 'Corporate Governance' },
    { id: 'Development', label: 'Personal & Professional Growth' },
    { id: 'Leadership', label: 'Leadership & Management' },
  ];

  const filteredArticles = OFFICIAL_ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'Standards' && (article.category.includes('Standards') || article.category.includes('Trainer'))) ||
      (selectedCategory === 'Governance' && (article.category.includes('Governance') || article.category.includes('International'))) ||
      (selectedCategory === 'Development' && article.category.includes('Development')) ||
      (selectedCategory === 'Leadership' && article.category.includes('Leadership'));

    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const handleCopyArticleLink = (slug: string) => {
    const url = `${window.location.origin}#articles?article=${slug}`;
    navigator.clipboard.writeText(url);
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  return (
    <section id="articles" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with "More and more" kicker */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9E131A] font-semibold mb-2">
            <span>More and more</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Official Publications</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>British Board UK</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            Articles
          </h2>

          <p className="mt-3 text-base text-slate-600 font-light leading-relaxed">
            Explore insights, pedagogical guidelines, corporate governance updates, and international training standards from the British Board for Training and Consulting.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-lg overflow-x-auto max-w-full scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-white text-slate-950 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#9E131A]"
            />
          </div>

        </div>

        {/* Articles Grid (All 9 official articles) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="flex flex-col justify-between bg-slate-50/60 rounded-xl border border-slate-200 p-6 sm:p-7 hover:bg-white hover:border-slate-300 transition-all shadow-xs group"
            >
              <div className="space-y-4">
                
                {/* Unboxed Metadata without pills (§1.A Zero-Pill) */}
                <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                  <span className="font-semibold text-[#9E131A]">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Article Title */}
                <h3 
                  onClick={() => setActiveArticle(article)}
                  className="font-cinzel text-lg font-bold text-slate-900 group-hover:text-[#9E131A] transition-colors leading-snug cursor-pointer line-clamp-2"
                >
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-slate-600 font-light leading-relaxed line-clamp-3">
                  {article.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 text-[11px] text-slate-400">
                  {article.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="text-slate-500 hover:text-slate-800 transition-colors">
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action trigger */}
              <div className="pt-5 mt-5 border-t border-slate-200/80 flex items-center justify-between">
                <button
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-900 hover:text-[#9E131A] group-hover:underline transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => handleCopyArticleLink(article.slug)}
                  title="Share / Copy Link"
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded transition-colors"
                >
                  {copiedSlug === article.slug ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Share2 className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="py-16 text-center text-slate-500 text-sm">
            No articles found matching &quot;{searchQuery}&quot;.
          </div>
        )}

      </div>

      {/* Article Detail Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-xl border border-slate-200 max-w-3xl w-full max-h-[88vh] overflow-y-auto shadow-2xl">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-start justify-between gap-4 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg overflow-hidden border border-red-800 bg-[#9E131A] p-0.5 shrink-0">
                  <img src={originalLogo} alt="" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#9E131A] font-semibold">
                    {activeArticle.category} · British Board Publication
                  </div>
                  <div className="text-xs text-slate-500">
                    {activeArticle.date} · {activeArticle.readTime}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveArticle(null)}
                className="p-1.5 text-slate-400 hover:text-slate-900 rounded-md hover:bg-slate-100 transition-colors"
                aria-label="Close article modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              
              <div className="space-y-3">
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-slate-950 leading-tight">
                  {activeArticle.title}
                </h3>
                
                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-500">
                  <span>Published: {activeArticle.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>Category: {activeArticle.category}</span>
                </div>
              </div>

              <div className="w-16 h-0.5 bg-[#9E131A]" />

              {/* Summary lead paragraph */}
              <div className="p-4 bg-slate-50 border-l-2 border-[#9E131A] rounded-r text-sm text-slate-700 italic">
                {activeArticle.summary}
              </div>

              {/* Full Article Body */}
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed font-light">
                {activeArticle.content.map((paragraph, i) => (
                  <p key={i}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-700">Tags:</span>
                {activeArticle.tags.map((t, idx) => (
                  <span key={idx} className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    #{t}
                  </span>
                ))}
              </div>

              {/* Institutional Sign-off */}
              <div className="pt-6 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                <div className="font-bold text-slate-900">
                  British Board for Training and Consulting
                </div>
                <div>United Kingdom · Official Portal: british-board.uk</div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 border-t border-slate-200 p-4 flex items-center justify-between">
              <button
                onClick={() => handleCopyArticleLink(activeArticle.slug)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-white border border-slate-200 rounded transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedSlug === activeArticle.slug ? 'Link Copied!' : 'Share Article'}</span>
              </button>

              <button
                onClick={() => setActiveArticle(null)}
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
