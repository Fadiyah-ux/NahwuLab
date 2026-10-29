import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { SEED_BOOKS } from '../data/seedData';
import { LibraryBookItem, BookChapter } from '../types';
import {
  BookOpen,
  Search,
  BookMarked,
  Layers,
  ChevronRight,
  Copy,
  Check,
  Volume2,
  Sparkles,
  BookA,
  ArrowLeft,
  Bookmark,
} from 'lucide-react';

export const LibraryTab: React.FC = () => {
  const { recordActivity } = useAuth();
  const [books] = useState<LibraryBookItem[]>(SEED_BOOKS);
  const [selectedBook, setSelectedBook] = useState<LibraryBookItem | null>(SEED_BOOKS[0]);
  const [selectedChapter, setSelectedChapter] = useState<BookChapter | null>(SEED_BOOKS[0].chapters[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'nahwu' | 'shorof' | 'kaidah' | 'irab'>('all');
  const [arabicFontSize, setArabicFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [copied, setCopied] = useState(false);
  const [showOnlyArabic, setShowOnlyArabic] = useState(false);

  const filteredBooks = books.filter((b) => {
    const matchesCat = categoryFilter === 'all' || b.category === categoryFilter;
    const matchesSearch =
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.chapters.some(
        (c) =>
          c.titleIndo.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.contentArabic.includes(searchQuery)
      );
    return matchesCat && matchesSearch;
  });

  const handleSelectChapter = (ch: BookChapter) => {
    setSelectedChapter(ch);
    recordActivity('library');
  };

  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const speakArabic = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const getFontSizeClass = () => {
    switch (arabicFontSize) {
      case 'sm':
        return 'text-xl leading-loose';
      case 'lg':
        return 'text-3xl sm:text-4xl leading-loose';
      default:
        return 'text-2xl sm:text-3xl leading-loose';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-emerald-950/20 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 mb-2">
              <BookMarked className="w-3.5 h-3.5" />
              <span>Khazanah Turats & Matan Klasik</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Pustaka Kitab Nahwu & Shorof
            </h1>
            <p className="text-xs sm:text-sm text-emerald-200/80 mt-1 max-w-xl">
              Kajian teks asli berharakat lengkap, terjemah Indonesia, dan syarah kaidah untuk memperkokoh pemahaman gramatika Arab.
            </p>
          </div>

          {/* Quick Stats Banner */}
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 shrink-0">
            <BookOpen className="w-8 h-8 text-emerald-300" />
            <div>
              <span className="text-xs text-emerald-200 block">Koleksi Kitab</span>
              <span className="text-base font-extrabold text-white">4 Kitab Pokok Santri</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Catalog, Right Reader */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Kitab Selection & Chapters */}
        <div className="lg:col-span-4 space-y-6">
          {/* Search & Category Filter */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari bab atau materi kitab..."
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'Semua' },
                { id: 'nahwu', label: 'Nahwu' },
                { id: 'shorof', label: 'Shorof' },
                { id: 'kaidah', label: 'Kaidah I\'lal' },
                { id: 'irab', label: 'Nadhom' },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCategoryFilter(c.id as any)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    categoryFilter === c.id
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Book Cards */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block px-1">
              Daftar Kitab Rujukan
            </span>

            {filteredBooks.map((book) => {
              const isSelected = selectedBook?.id === book.id;
              return (
                <div
                  key={book.id}
                  onClick={() => {
                    setSelectedBook(book);
                    setSelectedChapter(book.chapters[0]);
                  }}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-50/90 border-emerald-300 shadow-sm ring-1 ring-emerald-400'
                      : 'bg-white border-slate-200 hover:border-emerald-200 hover:bg-slate-50/80'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                        {book.category.toUpperCase()}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 mt-1.5">{book.title}</h3>
                      <p className="font-serif text-emerald-800 text-sm mt-0.5 font-semibold">
                        {book.titleArabic}
                      </p>
                    </div>
                    <span className="text-xs text-slate-400 bg-white px-2 py-1 rounded-lg border border-slate-100 font-medium">
                      {book.chapters.length} Bab
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2">{book.description}</p>
                </div>
              );
            })}
          </div>

          {/* Chapters of Selected Book */}
          {selectedBook && (
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Daftar Bab: {selectedBook.title}
              </h4>
              <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
                {selectedBook.chapters.map((ch, idx) => {
                  const isChActive = selectedChapter?.id === ch.id;
                  return (
                    <button
                      key={ch.id}
                      onClick={() => handleSelectChapter(ch)}
                      className={`w-full text-left p-3 rounded-xl text-xs font-semibold flex items-center justify-between transition-all ${
                        isChActive
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0 ${
                          isChActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                        }`}>
                          {idx + 1}
                        </span>
                        <span className="truncate">{ch.titleIndo}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 shrink-0 opacity-70" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Interactive Reader */}
        <div className="lg:col-span-8">
          {selectedChapter ? (
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              {/* Reader Control Bar */}
              <div className="p-4 sm:px-6 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-emerald-700">
                    {selectedBook?.title}
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-slate-900">
                    {selectedChapter.titleIndo}
                  </h2>
                </div>

                {/* Toolbar */}
                <div className="flex items-center gap-2">
                  {/* Font Size Adjusters */}
                  <div className="flex items-center bg-white border border-slate-200 rounded-xl p-1 text-xs">
                    <button
                      onClick={() => setArabicFontSize('sm')}
                      className={`px-2 py-1 rounded-lg font-bold ${
                        arabicFontSize === 'sm' ? 'bg-emerald-100 text-emerald-800' : 'text-slate-500'
                      }`}
                      title="Ukuran Arab Kecil"
                    >
                      A-
                    </button>
                    <button
                      onClick={() => setArabicFontSize('md')}
                      className={`px-2 py-1 rounded-lg font-bold ${
                        arabicFontSize === 'md' ? 'bg-emerald-100 text-emerald-800' : 'text-slate-500'
                      }`}
                      title="Ukuran Arab Sedang"
                    >
                      A
                    </button>
                    <button
                      onClick={() => setArabicFontSize('lg')}
                      className={`px-2 py-1 rounded-lg font-bold ${
                        arabicFontSize === 'lg' ? 'bg-emerald-100 text-emerald-800' : 'text-slate-500'
                      }`}
                      title="Ukuran Arab Besar"
                    >
                      A+
                    </button>
                  </div>

                  {/* Audio Listen */}
                  <button
                    onClick={() => speakArabic(selectedChapter.contentArabic)}
                    className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-emerald-700 hover:border-emerald-200 transition-colors"
                    title="Dengarkan pelafalan Arab"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>

                  {/* Copy Matan */}
                  <button
                    onClick={() => handleCopyText(selectedChapter.contentArabic)}
                    className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-emerald-700 hover:border-emerald-200 transition-colors"
                    title="Salin matan Arab"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Matan Arabic Display */}
              <div className="p-6 sm:p-8 bg-amber-50/20 border-b border-slate-100">
                <div className="text-right mb-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-emerald-900">
                    {selectedChapter.titleArabic}
                  </h3>
                </div>

                <div
                  dir="rtl"
                  className={`font-serif ${getFontSizeClass()} font-bold text-slate-900 text-right selection:bg-emerald-200 tracking-wide`}
                >
                  {selectedChapter.contentArabic}
                </div>
              </div>

              {/* Translation & Syarah Explanation */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Translation Card */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Terjemah Bahasa Indonesia
                  </h4>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm sm:text-base text-slate-800 leading-relaxed">
                    {selectedChapter.translation}
                  </div>
                </div>

                {/* Detailed Explanation */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Uraian & Syarah Kaidah
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedChapter.explanation}
                  </p>
                </div>

                {/* Key Points */}
                {selectedChapter.keyPoints && selectedChapter.keyPoints.length > 0 && (
                  <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80">
                    <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Poin-Poin Penting & Kaidah Penunjang</span>
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-emerald-900">
                      {selectedChapter.keyPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-2"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 text-slate-500">
              <BookOpen className="w-12 h-12 mx-auto text-slate-300 mb-3" />
              <p>Pilih kitab dan bab di sebelah kiri untuk mulai membaca.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
