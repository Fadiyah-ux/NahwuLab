import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { SEED_BOOKS } from '../data/seedData';
import { LibraryBookItem, BookChapter } from '../types';
import {
  BookOpen,
  Search,
  BookMarked,
  ChevronRight,
  Copy,
  Check,
  Volume2,
  Bookmark,
} from 'lucide-react';

export const LibraryTab: React.FC = () => {
  const { recordActivity } = useAuth();
  const [books] = useState<LibraryBookItem[]>(SEED_BOOKS);
  const [selectedBook, setSelectedBook] = useState<LibraryBookItem | null>(SEED_BOOKS[0]);
  const [selectedChapter, setSelectedChapter] = useState<BookChapter | null>(SEED_BOOKS[0].chapters[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'nahwu' | 'shorof'>('all');
  const [arabicFontSize, setArabicFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [copied, setCopied] = useState(false);

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
        return 'text-xl sm:text-2xl leading-loose';
      case 'lg':
        return 'text-3xl sm:text-4xl leading-loose';
      default:
        return 'text-2xl sm:text-3xl leading-loose';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Top Header - Bubble Bash Midnight Navy Hero with Cyan & Sunny Yellow accents */}
      <div className="bg-[#0C122C] border-2 border-[#00D2FF]/30 rounded-[2.5rem] p-6 sm:p-8 text-white shadow-xl shadow-[#0C122C]/20 relative overflow-hidden">
        {/* Playful bubbly background blooms */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#00D2FF]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[#FF2D78]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-[#00D2FF]/20 text-[#00D2FF] border border-[#00D2FF]/40 mb-2.5 shadow-xs">
              <BookMarked className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>Khazanah 2 Kitab Rujukan Pokok</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Pustaka Kitab <span className="text-[#FFD233]">SmartKib</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5 max-w-xl font-medium leading-relaxed">
              Kajian komprehensif 2 kitab rujukan mu&apos;tamad: <strong className="text-[#00D2FF]">Muthammimah al-Jurumiyah</strong> (31 Bab Nahwu) dan <strong className="text-[#FFD233]">Amtsilah Tasrifiyah</strong> (24 Bab Shorof) berharakat lengkap dengan terjemah &amp; syarah kaidah.
            </p>
          </div>

          {/* Quick Stats Banner */}
          <div className="flex items-center gap-3.5 bg-[#161F46] border-2 border-white/10 px-5 py-3 rounded-2xl shrink-0 shadow-sm">
            <div className="w-11 h-11 rounded-2xl bg-[#00D2FF]/20 text-[#00D2FF] border border-[#00D2FF]/40 flex items-center justify-center font-bold shadow-xs">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-400 font-bold block">Koleksi Kitab</span>
              <span className="text-sm font-black text-white">2 Kitab Mu&apos;tamad</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Catalog, Right Reader */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Kitab Selection & Chapters */}
        <div className="lg:col-span-4 space-y-6">
          {/* Search & Category Filter */}
          <div className="bg-white rounded-[2rem] p-5 border-2 border-slate-200/90 shadow-sm space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-[#00D2FF] absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari bab atau materi kitab..."
                className="w-full pl-10 pr-3.5 py-2.5 rounded-2xl bg-[#FFFDF5] border-2 border-slate-200 text-[#0C122C] text-xs focus:bg-white focus:outline-hidden focus:border-[#00D2FF] font-bold transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'Semua (2 Kitab)', activeClass: 'bg-[#0C122C] text-[#FFD233] border-2 border-[#FFD233]' },
                { id: 'nahwu', label: 'Nahwu (Muthammimah)', activeClass: 'bg-[#00D2FF] text-[#0C122C] border-2 border-[#00D2FF]' },
                { id: 'shorof', label: 'Shorof (Amtsilah)', activeClass: 'bg-[#FF2D78] text-white border-2 border-[#FF2D78]' },
              ].map((c) => {
                const isActive = categoryFilter === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setCategoryFilter(c.id as any)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                      isActive
                        ? `${c.activeClass} shadow-xs scale-102`
                        : 'bg-slate-100 text-slate-700 hover:bg-[#FFF9D2] border border-slate-200'
                    }`}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Book Cards */}
          <div className="space-y-3">
            <span className="text-xs font-black text-slate-500 uppercase tracking-wider block px-1">
              Daftar Kitab Rujukan
            </span>

            {filteredBooks.map((book) => {
              const isSelected = selectedBook?.id === book.id;
              const isNahwu = book.category === 'nahwu';

              return (
                <div
                  key={book.id}
                  onClick={() => {
                    setSelectedBook(book);
                    setSelectedChapter(book.chapters[0]);
                  }}
                  className={`p-4 sm:p-5 rounded-[1.75rem] border-2 transition-all cursor-pointer relative overflow-hidden group ${
                    isSelected
                      ? 'bg-[#FFF9D2]/40 border-[#FFD233] shadow-md ring-2 ring-[#FFD233]/20 -translate-y-0.5'
                      : 'bg-white border-slate-200 hover:border-[#00D2FF] hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border shadow-2xs ${
                        isNahwu
                          ? 'bg-[#E0F9FF] text-[#0284C7] border-[#00D2FF]/40'
                          : 'bg-[#FFE5EE] text-[#D81B60] border-[#FF2D78]/30'
                      }`}>
                        <BookMarked className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                            isNahwu
                              ? 'bg-[#E0F9FF] text-[#0284C7] border-[#00D2FF]/40'
                              : 'bg-[#FFE5EE] text-[#D81B60] border-[#FF2D78]/30'
                          }`}>
                            {isNahwu ? 'Ilmu Nahwu' : 'Ilmu Shorof'}
                          </span>
                          <span className="text-[11px] text-slate-400 font-medium">•</span>
                          <span className="text-[11px] text-slate-500 font-bold truncate max-w-[150px]">{book.author}</span>
                        </div>
                        <h3 className="text-sm sm:text-base font-black text-[#0C122C] mt-1">{book.title}</h3>
                        <p className="font-serif text-[#0C122C] text-base sm:text-lg font-bold mt-0.5" dir="rtl">
                          {book.titleArabic}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-black text-[#0C122C] bg-[#FFF9D2] px-2.5 py-1 rounded-xl border border-[#FFD233] shrink-0">
                      {book.chapters.length} Bab
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-2.5 line-clamp-2 font-medium leading-relaxed">{book.description}</p>
                </div>
              );
            })}
          </div>

          {/* Chapters of Selected Book */}
          {selectedBook && (
            <div className="bg-white rounded-[2rem] p-5 border-2 border-slate-200/90 shadow-sm">
              <div className="flex items-center justify-between mb-3.5">
                <h4 className="text-xs font-black text-slate-700 uppercase tracking-wider">
                  Daftar Bab: {selectedBook.title}
                </h4>
                <span className="text-[10px] font-black text-[#0C122C] bg-[#FFF9D2] px-2 py-0.5 rounded-full border border-[#FFD233]">
                  {selectedBook.chapters.length} Bab Mu&apos;tamad
                </span>
              </div>
              <div className="space-y-1.5 max-h-96 overflow-y-auto pr-1">
                {selectedBook.chapters.map((ch, idx) => {
                  const isChActive = selectedChapter?.id === ch.id;
                  return (
                    <button
                      key={ch.id}
                      onClick={() => handleSelectChapter(ch)}
                      className={`w-full text-left p-3 rounded-2xl text-xs font-bold flex items-center justify-between transition-all cursor-pointer ${
                        isChActive
                          ? 'bg-[#0C122C] text-white shadow-md border-2 border-[#00D2FF]'
                          : 'text-slate-700 hover:bg-[#E0F9FF]/50 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0 font-black ${
                          isChActive ? 'bg-[#00D2FF] text-[#0C122C]' : 'bg-slate-100 text-slate-700 border border-slate-200'
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
            <div className="bg-white rounded-[2.25rem] border-2 border-slate-200 shadow-sm overflow-hidden">
              {/* Reader Control Bar */}
              <div className="p-4 sm:px-6 bg-[#FAF7EE] border-b-2 border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-black text-[#0284C7] uppercase tracking-wider block">
                    {selectedBook?.title}
                  </span>
                  <h2 className="text-base sm:text-lg font-black text-[#0C122C]">
                    {selectedChapter.titleIndo}
                  </h2>
                </div>

                {/* Toolbar */}
                <div className="flex items-center gap-2">
                  {/* Font Size Adjusters */}
                  <div className="flex items-center bg-white border-2 border-slate-200 rounded-xl p-0.5 text-xs">
                    <button
                      onClick={() => setArabicFontSize('sm')}
                      className={`px-2.5 py-1 rounded-lg font-black cursor-pointer transition-all ${
                        arabicFontSize === 'sm' ? 'bg-[#FFD233] text-[#0C122C]' : 'text-slate-500 hover:text-slate-900'
                      }`}
                      title="Ukuran Arab Kecil"
                    >
                      A-
                    </button>
                    <button
                      onClick={() => setArabicFontSize('md')}
                      className={`px-2.5 py-1 rounded-lg font-black cursor-pointer transition-all ${
                        arabicFontSize === 'md' ? 'bg-[#FFD233] text-[#0C122C]' : 'text-slate-500 hover:text-slate-900'
                      }`}
                      title="Ukuran Arab Sedang"
                    >
                      A
                    </button>
                    <button
                      onClick={() => setArabicFontSize('lg')}
                      className={`px-2.5 py-1 rounded-lg font-black cursor-pointer transition-all ${
                        arabicFontSize === 'lg' ? 'bg-[#FFD233] text-[#0C122C]' : 'text-slate-500 hover:text-slate-900'
                      }`}
                      title="Ukuran Arab Besar"
                    >
                      A+
                    </button>
                  </div>

                  {/* Audio Listen */}
                  <button
                    onClick={() => speakArabic(selectedChapter.contentArabic)}
                    className="p-2.5 rounded-xl bg-white border-2 border-slate-200 text-[#0C122C] hover:text-[#FF2D78] hover:border-[#FF2D78] transition-colors cursor-pointer shadow-2xs"
                    title="Dengarkan pelafalan Arab"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>

                  {/* Copy Matan */}
                  <button
                    onClick={() => handleCopyText(selectedChapter.contentArabic)}
                    className="p-2.5 rounded-xl bg-white border-2 border-slate-200 text-[#0C122C] hover:text-[#00D2FF] hover:border-[#00D2FF] transition-colors cursor-pointer shadow-2xs"
                    title="Salin matan Arab"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-[#FF2D78]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Matan Arabic Display - Cream parchment canvas */}
              <div className="p-6 sm:p-8 bg-[#FFFDF5] border-b-2 border-amber-200/60">
                <div className="text-right mb-4">
                  <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#0C122C]" dir="rtl">
                    {selectedChapter.titleArabic}
                  </h3>
                </div>

                <div
                  dir="rtl"
                  className={`font-serif ${getFontSizeClass()} font-black text-[#0C122C] text-right selection:bg-[#FFD233] tracking-wide leading-relaxed`}
                >
                  {selectedChapter.contentArabic}
                </div>
              </div>

              {/* Translation & Syarah Explanation */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Translation Card */}
                <div>
                  <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider mb-2">
                    Terjemah Bahasa Indonesia
                  </h4>
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFDF5] border-2 border-slate-200 text-sm sm:text-base text-[#0C122C] leading-relaxed font-medium shadow-2xs">
                    {selectedChapter.translation}
                  </div>
                </div>

                {/* Detailed Explanation */}
                <div>
                  <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider mb-2">
                    Uraian &amp; Syarah Kaidah
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {selectedChapter.explanation}
                  </p>
                </div>

                {/* Key Points */}
                {selectedChapter.keyPoints && selectedChapter.keyPoints.length > 0 && (
                  <div className="p-5 rounded-2xl bg-[#E0F9FF]/70 border-2 border-[#00D2FF]/40 shadow-2xs">
                    <h4 className="text-xs font-black text-[#0C122C] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Bookmark className="w-3.5 h-3.5 text-[#00D2FF]" />
                      <span>Poin-Poin Penting &amp; Kaidah Penunjang</span>
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#0C122C] font-semibold">
                      {selectedChapter.keyPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-[#00D2FF] shrink-0 mt-1.5"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Mark Completed & Earn XP */}
                <div className="pt-4 border-t-2 border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-500 font-medium text-center sm:text-left">
                    <span>Mempelajari dan mentadabburi bab ini menambah</span>{' '}
                    <strong className="text-[#FF2D78] font-black">+15 XP</strong>{' '}
                    <span>ke rekor belajar santri Anda.</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      recordActivity('library');
                      setCopied(false);
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#FF2D78] hover:bg-[#E02468] text-white font-black text-xs shadow-md shadow-[#FF2D78]/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Tandai Telah Mengkaji Bab Ini (+15 XP)</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-[2rem] p-12 text-center border-2 border-dashed border-[#FFD233] text-slate-500">
              <BookOpen className="w-12 h-12 mx-auto text-[#FFD233] mb-3" />
              <p className="font-bold text-[#0C122C]">Pilih kitab dan bab di sebelah kiri untuk mulai membaca.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
