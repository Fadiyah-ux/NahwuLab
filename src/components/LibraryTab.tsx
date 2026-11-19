import React, { useMemo, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { SEED_BOOKS } from '../data/seedData';
import { LibraryBookItem, BookChapter } from '../types';
import {
  BookOpen,
  Search,
  BookMarked,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  Copy,
  Check,
  Volume2,
  Bookmark,
  PanelLeftClose,
  PanelLeftOpen,
  FileText,
  ExternalLink,
  X,
  Eye,
  Info,
  Link2,
} from 'lucide-react';
import { KitabPdfViewer } from './KitabPdfViewer';

type ViewMode = 'combined' | 'pdf' | 'matan';

export const LibraryTab: React.FC = () => {
  const { recordActivity } = useAuth();
  const [books] = useState<LibraryBookItem[]>(SEED_BOOKS);
  const [selectedBook, setSelectedBook] = useState<LibraryBookItem>(SEED_BOOKS[0]);
  const [selectedChapter, setSelectedChapter] = useState<BookChapter>(SEED_BOOKS[0].chapters[0]);
  const [activePdfPage, setActivePdfPage] = useState<number>(SEED_BOOKS[0].chapters[0].pdfPage);

  // Responsive sidebar states
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState<boolean>(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const [expandedBooks, setExpandedBooks] = useState<Record<string, boolean>>({
    'al-amtsilah-at-tashrifiyyah': true,
    'mutammimah-al-jurumiyyah': true,
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('combined');
  const [showSupplementSheet, setShowSupplementSheet] = useState<boolean>(true);
  const [arabicFontSize, setArabicFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [copied, setCopied] = useState(false);
  const [completedChapters, setCompletedChapters] = useState<Record<string, boolean>>({});
  const [loadedTotalPages, setLoadedTotalPages] = useState<Record<string, number>>({});

  // Google Drive link configuration (persisted in localStorage)
  const [driveLinks, setDriveLinks] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('smartkib_gdrive_links_v1');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [pdfSourceMode, setPdfSourceMode] = useState<Record<string, 'local' | 'gdrive'>>({});
  const [showDriveConfig, setShowDriveConfig] = useState<boolean>(false);
  const [driveInputDraft, setDriveInputDraft] = useState<string>('');

  const activeDriveLink = (driveLinks[selectedBook.id] || selectedBook.driveUrl || '').trim();
  const isUsingDriveSource =
    (pdfSourceMode[selectedBook.id] || (activeDriveLink ? 'gdrive' : 'local')) === 'gdrive' &&
    Boolean(activeDriveLink);
  const effectiveTotalPages = loadedTotalPages[selectedBook.id] || selectedBook.totalPages;
  const activePdfSrc = isUsingDriveSource
    ? `/api/gdrive-pdf?url=${encodeURIComponent(activeDriveLink)}`
    : selectedBook.pdfUrl;

  const handleOpenDriveConfig = () => {
    setDriveInputDraft(activeDriveLink);
    setShowDriveConfig((v) => !v);
  };

  const handleSaveDriveLink = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = driveInputDraft.trim();
    const nextLinks = { ...driveLinks };
    if (cleaned) {
      nextLinks[selectedBook.id] = cleaned;
      setPdfSourceMode((prev) => ({ ...prev, [selectedBook.id]: 'gdrive' }));
    } else {
      delete nextLinks[selectedBook.id];
      setPdfSourceMode((prev) => ({ ...prev, [selectedBook.id]: 'local' }));
    }
    setDriveLinks(nextLinks);
    try {
      localStorage.setItem('smartkib_gdrive_links_v1', JSON.stringify(nextLinks));
    } catch {
      // ignore storage quota errors
    }
    setShowDriveConfig(false);
  };

  // Group chapters per book while preserving original numbering
  const groupedBooks = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return books.map((book) => {
      const groups: Array<{
        groupTitle: string;
        items: Array<{ chapter: BookChapter; index: number }>;
      }> = [];

      const groupMap = new Map<string, Array<{ chapter: BookChapter; index: number }>>();

      book.chapters.forEach((ch, idx) => {
        const matches =
          !q ||
          ch.titleIndo.toLowerCase().includes(q) ||
          ch.titleArabic.includes(searchQuery.trim()) ||
          ch.groupTitle.toLowerCase().includes(q) ||
          ch.contentArabic.includes(searchQuery.trim());

        if (!matches) return;

        if (!groupMap.has(ch.groupTitle)) {
          const list: Array<{ chapter: BookChapter; index: number }> = [];
          groupMap.set(ch.groupTitle, list);
          groups.push({ groupTitle: ch.groupTitle, items: list });
        }
        groupMap.get(ch.groupTitle)!.push({ chapter: ch, index: idx + 1 });
      });

      const matchCount = groups.reduce((acc, g) => acc + g.items.length, 0);
      return { book, groups, matchCount };
    });
  }, [books, searchQuery]);

  const handleSelectBookCategory = (book: LibraryBookItem) => {
    const firstChapter = book.chapters[0];
    setSelectedBook(book);
    setSelectedChapter(firstChapter);
    setActivePdfPage(firstChapter.pdfPage);
    setShowDriveConfig(false);
    setExpandedBooks((prev) => ({ ...prev, [book.id]: true }));
    recordActivity('library');
  };

  const handleSelectChapter = (book: LibraryBookItem, ch: BookChapter) => {
    setSelectedBook(book);
    setSelectedChapter(ch);
    setActivePdfPage(ch.pdfPage);
    setShowDriveConfig(false);
    setShowSupplementSheet(true);
    setIsMobileSidebarOpen(false);
    recordActivity('library');
  };

  const handleJumpPdfPage = (page: number) => {
    const clamped = Math.max(1, Math.min(effectiveTotalPages, page));
    setActivePdfPage(clamped);
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
        return 'text-xl sm:text-2xl leading-[2.45] sm:leading-[2.55]';
      case 'lg':
        return 'text-3xl sm:text-[2.25rem] leading-[2.45] sm:leading-[2.6]';
      default:
        return 'text-2xl sm:text-[1.85rem] leading-[2.45] sm:leading-[2.6]';
    }
  };

  const currentChapterIndex = selectedBook.chapters.findIndex((c) => c.id === selectedChapter.id);
  const prevChapter = currentChapterIndex > 0 ? selectedBook.chapters[currentChapterIndex - 1] : null;
  const nextChapter =
    currentChapterIndex >= 0 && currentChapterIndex < selectedBook.chapters.length - 1
      ? selectedBook.chapters[currentChapterIndex + 1]
      : null;

  const isShorof = selectedBook.category === 'shorof';

  const renderSidebarContent = (isMobileDrawer = false) => (
    <div className="flex flex-col h-full">
      {/* Sidebar Header */}
      <div className="p-4 sm:p-5 border-b border-slate-100 space-y-3.5 shrink-0">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <BookMarked className="w-4 h-4 text-[#FF2D78]" />
            <span className="text-xs font-black uppercase tracking-wider text-[#0C122C]">
              Daftar Isi Per Bab
            </span>
          </div>
          {isMobileDrawer && (
            <button
              type="button"
              onClick={() => setIsMobileSidebarOpen(false)}
              className="p-1.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-[#FFE5EE] hover:text-[#FF2D78] cursor-pointer"
              aria-label="Tutup daftar bab"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#0284C7] absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari bab shorof atau nahwu..."
            className="w-full pl-10 pr-8 py-2.5 rounded-2xl bg-[#FFFDF5] border border-slate-200/90 text-[#0C122C] text-xs focus:bg-white focus:outline-hidden focus:border-[#00D2FF] font-bold transition-all placeholder:text-slate-400"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-2.5 p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
              aria-label="Hapus pencarian"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Scrollable Separated Books & Chapter Groups */}
      <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-4">
        {groupedBooks.map(({ book, groups, matchCount }) => {
          const bookIsShorof = book.category === 'shorof';
          const isBookExpanded = searchQuery.trim().length > 0 ? matchCount > 0 : !!expandedBooks[book.id];
          const isCurrentBook = selectedBook.id === book.id;

          return (
            <div
              key={book.id}
              className={`rounded-2xl transition-colors ${
                isCurrentBook ? 'bg-[#FFFDF5]' : 'bg-slate-50/70'
              }`}
            >
              {/* Collapsible Kitab Header */}
              <button
                type="button"
                onClick={() =>
                  setExpandedBooks((prev) => ({ ...prev, [book.id]: !prev[book.id] }))
                }
                className="w-full p-3.5 flex items-start justify-between gap-2.5 text-left cursor-pointer rounded-2xl hover:bg-[#FFF9D2]/40 transition-colors"
              >
                <div className="min-w-0">
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider block ${
                      bookIsShorof ? 'text-[#D81B60]' : 'text-[#0284C7]'
                    }`}
                  >
                    {bookIsShorof ? 'Kitab Shorof' : 'Kitab Nahwu'} • {book.chapters.length} Bab
                  </span>
                  <h3 className="text-sm font-black text-[#0C122C] mt-0.5 truncate">
                    {book.title}
                  </h3>
                  <p className="font-serif text-sm text-slate-600 font-bold mt-0.5" dir="rtl">
                    {book.titleArabic}
                  </p>
                </div>
                <div className="pt-1 shrink-0 text-slate-500">
                  {isBookExpanded ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </div>
              </button>

              {/* Groups & Chapters */}
              {isBookExpanded && (
                <div className="px-2 pb-3 space-y-3">
                  {groups.length === 0 ? (
                    <p className="text-xs text-slate-400 font-medium px-2.5 py-2">
                      Tidak ada bab yang cocok dengan pencarian.
                    </p>
                  ) : (
                    groups.map((grp) => (
                      <div key={grp.groupTitle} className="space-y-1">
                        <div className="px-2.5 pt-2 pb-1 text-[10px] font-black uppercase tracking-wider text-slate-500">
                          {grp.groupTitle}
                        </div>
                        {grp.items.map(({ chapter, index }) => {
                          const isActive =
                            selectedBook.id === book.id && selectedChapter.id === chapter.id;
                          return (
                            <button
                              key={chapter.id}
                              type="button"
                              onClick={() => handleSelectChapter(book, chapter)}
                              className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all cursor-pointer flex items-start justify-between gap-2 ${
                                isActive
                                  ? 'bg-[#0C122C] text-white shadow-sm'
                                  : 'text-slate-700 hover:bg-white hover:shadow-2xs'
                              }`}
                            >
                              <div className="flex items-start gap-2.5 min-w-0">
                                <span
                                  className={`tabular-nums w-5 h-5 rounded-lg flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5 ${
                                    isActive
                                      ? bookIsShorof
                                        ? 'bg-[#FF2D78] text-white'
                                        : 'bg-[#00D2FF] text-[#0C122C]'
                                      : 'bg-slate-200/80 text-slate-700'
                                  }`}
                                >
                                  {index}
                                </span>
                                <div className="min-w-0">
                                  <span className="font-bold leading-snug block line-clamp-2">
                                    {chapter.titleIndo.replace(/^Bab \d+:\s*/i, '')}
                                  </span>
                                  <span
                                    className={`text-[10px] font-semibold mt-0.5 block ${
                                      isActive ? 'text-slate-300' : 'text-slate-400'
                                    }`}
                                  >
                                    Hal. {chapter.pdfPage}
                                    {chapter.pdfEndPage && chapter.pdfEndPage !== chapter.pdfPage
                                      ? `–${chapter.pdfEndPage}`
                                      : ''}
                                  </span>
                                </div>
                              </div>
                              <ChevronRight
                                className={`w-3.5 h-3.5 shrink-0 mt-1 ${
                                  isActive ? 'text-[#FFD233]' : 'opacity-40'
                                }`}
                              />
                            </button>
                          );
                        })}
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Top Hero Header with Dual Kitab Reference Selector */}
      <div className="bg-[#0C122C] rounded-[2.25rem] p-6 sm:p-8 text-white shadow-xl shadow-[#0C122C]/20 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-[#00D2FF]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-[#FF2D78]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#00D2FF]">
              <BookMarked className="w-4 h-4" />
              <span>Dua Kitab Rujukan Resmi SmartKib</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Pustaka Kitab <span className="text-[#FFD233]">Shorof &amp; Nahwu</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              Pilih bab dari navigasi sidebar untuk langsung membuka halaman kitab PDF asli beserta
              teks Arab berharakat, terjemahan, dan syarah kaidahnya.
            </p>
          </div>

          {/* 2 Kategori Kitab Rujukan Switcher */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 shrink-0">
            {books.map((book) => {
              const bookIsShorof = book.category === 'shorof';
              const isSelected = selectedBook.id === book.id;
              return (
                <button
                  key={book.id}
                  type="button"
                  onClick={() => handleSelectBookCategory(book)}
                  className={`text-left px-4 py-3.5 rounded-2xl transition-all cursor-pointer flex items-center gap-3 ${
                    isSelected
                      ? bookIsShorof
                        ? 'bg-[#FF2D78] text-white shadow-lg shadow-[#FF2D78]/25'
                        : 'bg-[#00D2FF] text-[#0C122C] shadow-lg shadow-[#00D2FF]/25'
                      : 'bg-[#161F46] text-slate-200 hover:bg-[#1E2958]'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected
                        ? bookIsShorof
                          ? 'bg-white/20 text-white'
                          : 'bg-[#0C122C]/15 text-[#0C122C]'
                        : bookIsShorof
                          ? 'bg-[#FF2D78]/20 text-[#FF2D78]'
                          : 'bg-[#00D2FF]/20 text-[#00D2FF]'
                    }`}
                  >
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span
                      className={`text-[10px] font-black uppercase tracking-wider block ${
                        isSelected
                          ? bookIsShorof
                            ? 'text-pink-100'
                            : 'text-[#0C122C]/80'
                          : bookIsShorof
                            ? 'text-[#FF2D78]'
                            : 'text-[#00D2FF]'
                      }`}
                    >
                      {bookIsShorof ? 'Shorof' : 'Nahwu'} • {book.chapters.length} Bab
                    </span>
                    <span className="text-sm font-black block truncate">{book.title}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Drawer */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-[#0C122C]/60 backdrop-blur-xs"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
          <aside className="relative z-10 w-[86%] max-w-sm bg-white h-full shadow-2xl flex flex-col">
            {renderSidebarContent(true)}
          </aside>
        </div>
      )}

      {/* Main Split Workspace: Left Responsive Sidebar + Right Kitab Reader */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Desktop Collapsible Sidebar */}
        {isDesktopSidebarOpen && (
          <aside className="hidden lg:flex lg:flex-col w-84 xl:w-92 shrink-0 bg-white rounded-[2rem] bubble-column-card sticky top-20 max-h-[calc(100vh-6.5rem)] overflow-hidden">
            {renderSidebarContent(false)}
          </aside>
        )}

        {/* Right Main Content Area */}
        <div className="flex-1 min-w-0 w-full space-y-6">
          {/* Reader Control Header Card */}
          <div className="bg-white rounded-[2.25rem] bubble-column-card overflow-hidden">
            <div className="p-5 sm:px-7 bg-[#FAF7EE] border-b border-slate-200/70 flex flex-col gap-4">
              {/* Top Row: Sidebar Toggle + Breadcrumb + Prev/Next Bab */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 flex-wrap">
                  {/* Mobile Drawer Toggle */}
                  <button
                    type="button"
                    onClick={() => setIsMobileSidebarOpen(true)}
                    className="lg:hidden inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0C122C] text-white text-xs font-black cursor-pointer shadow-xs"
                  >
                    <PanelLeftOpen className="w-4 h-4 text-[#FFD233]" />
                    <span>Daftar Bab Kitab</span>
                  </button>

                  {/* Desktop Sidebar Toggle */}
                  <button
                    type="button"
                    onClick={() => setIsDesktopSidebarOpen((v) => !v)}
                    className="hidden lg:inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white text-[#0C122C] hover:bg-[#FFF9D2] text-xs font-black cursor-pointer shadow-2xs transition-colors"
                    title={isDesktopSidebarOpen ? 'Sembunyikan Sidebar Bab' : 'Tampilkan Sidebar Bab'}
                  >
                    {isDesktopSidebarOpen ? (
                      <>
                        <PanelLeftClose className="w-4 h-4 text-[#FF2D78]" />
                        <span>Sembunyikan Sidebar</span>
                      </>
                    ) : (
                      <>
                        <PanelLeftOpen className="w-4 h-4 text-[#0284C7]" />
                        <span>Tampilkan Daftar Bab</span>
                      </>
                    )}
                  </button>

                  <span
                    className={`text-xs font-black uppercase tracking-wider ${
                      isShorof ? 'text-[#D81B60]' : 'text-[#0284C7]'
                    }`}
                  >
                    {isShorof ? 'Shorof' : 'Nahwu'} / {selectedBook.title} / {selectedChapter.groupTitle}
                  </span>
                </div>

                {/* Prev / Next Bab */}
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    disabled={!prevChapter}
                    onClick={() => prevChapter && handleSelectChapter(selectedBook, prevChapter)}
                    className="px-3 py-1.5 rounded-xl bg-white text-xs font-bold text-[#0C122C] hover:bg-[#E0F9FF] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1 shadow-2xs transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Bab Seb.</span>
                  </button>
                  <button
                    type="button"
                    disabled={!nextChapter}
                    onClick={() => nextChapter && handleSelectChapter(selectedBook, nextChapter)}
                    className="px-3 py-1.5 rounded-xl bg-white text-xs font-bold text-[#0C122C] hover:bg-[#E0F9FF] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1 shadow-2xs transition-colors"
                  >
                    <span>Bab Ber.</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Chapter Title & View / Audio Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg sm:text-xl font-black text-[#0C122C] leading-snug">
                    {selectedChapter.titleIndo}
                  </h2>
                  <p className="font-serif text-xl sm:text-2xl font-bold text-[#0C122C]/85 mt-1" dir="rtl">
                    {selectedChapter.titleArabic}
                  </p>
                </div>

                {/* View Mode & Arabic Controls */}
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <div className="flex items-center bg-white rounded-xl p-1 shadow-2xs text-xs font-black">
                    {[
                      { id: 'combined', label: 'PDF + Matan' },
                      { id: 'pdf', label: 'Hanya PDF' },
                      { id: 'matan', label: 'Matan & Syarah' },
                    ].map((mode) => (
                      <button
                        key={mode.id}
                        type="button"
                        onClick={() => setViewMode(mode.id as ViewMode)}
                        className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                          viewMode === mode.id
                            ? 'bg-[#0C122C] text-[#FFD233]'
                            : 'text-slate-600 hover:text-[#0C122C]'
                        }`}
                      >
                        {mode.label}
                      </button>
                    ))}
                  </div>

                  {/* Arabic Font Size Adjusters */}
                  <div className="flex items-center bg-white rounded-xl p-1 shadow-2xs text-xs">
                    {(['sm', 'md', 'lg'] as const).map((sz) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setArabicFontSize(sz)}
                        className={`px-2.5 py-1 rounded-lg font-black cursor-pointer transition-all ${
                          arabicFontSize === sz
                            ? 'bg-[#FFD233] text-[#0C122C]'
                            : 'text-slate-500 hover:text-[#0C122C]'
                        }`}
                        title={
                          sz === 'sm'
                            ? 'Ukuran Arab Kecil'
                            : sz === 'lg'
                              ? 'Ukuran Arab Besar'
                              : 'Ukuran Arab Sedang'
                        }
                      >
                        {sz === 'sm' ? 'A-' : sz === 'lg' ? 'A+' : 'A'}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => speakArabic(selectedChapter.contentArabic)}
                    className="p-2.5 rounded-xl bg-white text-[#0C122C] hover:text-[#FF2D78] transition-colors cursor-pointer shadow-2xs"
                    title="Dengarkan pelafalan Arab"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCopyText(selectedChapter.contentArabic)}
                    className="p-2.5 rounded-xl bg-white text-[#0C122C] hover:text-[#0284C7] transition-colors cursor-pointer shadow-2xs"
                    title="Salin matan Arab"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#FF2D78]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* SECTION 1: DIRECT PDF KITAB VIEWER */}
            {(viewMode === 'combined' || viewMode === 'pdf') && (
              <div className="p-5 sm:p-7 bg-slate-50/70 border-b border-slate-200/70 space-y-4">
                {/* PDF Toolbar */}
                <div className="flex flex-wrap items-center justify-between gap-3 bg-white px-4 py-3 rounded-2xl shadow-2xs">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isShorof ? 'bg-[#FFE5EE] text-[#D81B60]' : 'bg-[#E0F9FF] text-[#0284C7]'
                      }`}
                    >
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-black text-[#0C122C] block">
                        {isUsingDriveSource ? 'Halaman Kitab PDF (Google Drive)' : 'Halaman Kitab PDF Resmi'}
                      </span>
                      <span className="text-[11px] font-bold text-slate-500 tabular-nums">
                        Halaman {activePdfPage} dari {effectiveTotalPages} • Rujukan Bab: Hal.{' '}
                        {selectedChapter.pdfPage}
                        {selectedChapter.pdfEndPage &&
                        selectedChapter.pdfEndPage !== selectedChapter.pdfPage
                          ? `–${selectedChapter.pdfEndPage}`
                          : ''}
                      </span>
                    </div>
                  </div>

                  {/* Page Controls, Drive Link Config & Direct Link */}
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      disabled={activePdfPage <= 1}
                      onClick={() => handleJumpPdfPage(activePdfPage - 1)}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-[#FFF9D2] text-xs font-bold text-[#0C122C] disabled:opacity-40 cursor-pointer flex items-center gap-1"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Hal. Seb.</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleJumpPdfPage(selectedChapter.pdfPage)}
                      className="px-3 py-1.5 rounded-xl bg-[#FFF9D2] hover:bg-[#FFD233] text-xs font-black text-[#0C122C] cursor-pointer transition-colors"
                    >
                      Awal Bab (Hal. {selectedChapter.pdfPage})
                    </button>

                    <button
                      type="button"
                      disabled={activePdfPage >= effectiveTotalPages}
                      onClick={() => handleJumpPdfPage(activePdfPage + 1)}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-[#FFF9D2] text-xs font-bold text-[#0C122C] disabled:opacity-40 cursor-pointer flex items-center gap-1"
                    >
                      <span>Hal. Ber.</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={handleOpenDriveConfig}
                      className={`px-3 py-1.5 rounded-xl text-xs font-black inline-flex items-center gap-1.5 cursor-pointer transition-colors ${
                        isUsingDriveSource
                          ? 'bg-[#E0F9FF] text-[#0369A1]'
                          : 'bg-slate-100 text-slate-700 hover:bg-[#E0F9FF]'
                      }`}
                    >
                      <Link2 className="w-3.5 h-3.5" />
                      <span>{activeDriveLink ? 'Sumber: GDrive / Lokal' : 'Pasang Link GDrive'}</span>
                    </button>

                    <a
                      href={
                        isUsingDriveSource
                          ? activeDriveLink
                          : `${selectedBook.pdfUrl}#page=${activePdfPage}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-xl bg-[#0C122C] hover:bg-[#161F46] text-white text-xs font-black inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Buka Tab Baru</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#00D2FF]" />
                    </a>
                  </div>
                </div>

                {/* Collapsible Google Drive Link Configuration */}
                {showDriveConfig && (
                  <form
                    onSubmit={handleSaveDriveLink}
                    className="bg-white rounded-2xl p-4 shadow-sm space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h4 className="text-xs font-black text-[#0C122C]">
                          Sumber PDF Google Drive — {selectedBook.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                          Tempel link Google Drive kitab (pastikan akses file sudah diatur &ldquo;Siapa saja yang memiliki link&rdquo;) agar setiap bab tetap bisa melompat ke halamannya langsung di dalam kolom ini.
                        </p>
                      </div>
                      {activeDriveLink && (
                        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-[11px] font-black">
                          <button
                            type="button"
                            onClick={() =>
                              setPdfSourceMode((prev) => ({ ...prev, [selectedBook.id]: 'local' }))
                            }
                            className={`px-2.5 py-1 rounded-lg cursor-pointer ${
                              !isUsingDriveSource ? 'bg-[#0C122C] text-[#FFD233]' : 'text-slate-600'
                            }`}
                          >
                            PDF Terlampir
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setPdfSourceMode((prev) => ({ ...prev, [selectedBook.id]: 'gdrive' }))
                            }
                            className={`px-2.5 py-1 rounded-lg cursor-pointer ${
                              isUsingDriveSource ? 'bg-[#00D2FF] text-[#0C122C]' : 'text-slate-600'
                            }`}
                          >
                            Google Drive
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="url"
                        value={driveInputDraft}
                        onChange={(e) => setDriveInputDraft(e.target.value)}
                        placeholder="https://drive.google.com/file/d/.../view?usp=sharing"
                        className="flex-1 px-3.5 py-2 rounded-xl bg-[#FFFDF5] border border-slate-200 text-xs font-bold text-[#0C122C] focus:outline-hidden focus:border-[#00D2FF]"
                      />
                      <div className="flex items-center gap-2">
                        <button
                          type="submit"
                          className="px-4 py-2 rounded-xl bg-[#FF2D78] hover:bg-[#E02468] text-white text-xs font-black cursor-pointer"
                        >
                          Simpan &amp; Muat
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowDriveConfig(false)}
                          className="px-3 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold cursor-pointer"
                        >
                          Tutup
                        </button>
                      </div>
                    </div>
                  </form>
                )}

                {/* Quick Sub-section PDF Jump Links if Chapter Spans Multiple Pages */}
                {selectedChapter.pdfSections && selectedChapter.pdfSections.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-black text-slate-500 uppercase tracking-wider mr-1">
                      Lompat Sub-Materi:
                    </span>
                    {selectedChapter.pdfSections.map((sec) => {
                      const isCurrentSection = activePdfPage === sec.page;
                      return (
                        <button
                          key={`${sec.page}-${sec.label}`}
                          type="button"
                          onClick={() => handleJumpPdfPage(sec.page)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                            isCurrentSection
                              ? 'bg-[#FF2D78] text-white shadow-xs'
                              : 'bg-white text-[#0C122C] hover:bg-[#E0F9FF] shadow-2xs'
                          }`}
                        >
                          {sec.label}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Editorial PDF Note (e.g. skipped Arab pp. 10-11 in Amtsilah PDF or Bina' margins) */}
                {selectedChapter.pdfNote && (
                  <div className="p-4 rounded-2xl bg-[#FFF9D2]/80 text-[#0C122C] text-xs sm:text-sm font-medium leading-relaxed flex items-start gap-3">
                    <Info className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                    <div className="space-y-2 flex-1">
                      <p>{selectedChapter.pdfNote}</p>
                      {selectedChapter.supplementImageUrl && (
                        <button
                          type="button"
                          onClick={() => setShowSupplementSheet((v) => !v)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0C122C] text-[#FFD233] text-xs font-black cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>
                            {showSupplementSheet
                              ? 'Sembunyikan Pindaian Suplemen (Hal. Arab 10–11)'
                              : 'Tampilkan Pindaian Suplemen (Hal. Arab 10–11)'}
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* Supplement Image if PDF missed that physical spread */}
                {selectedChapter.supplementImageUrl && showSupplementSheet && (
                  <div className="bg-white rounded-2xl p-4 shadow-sm space-y-2">
                    <div className="text-xs font-black text-slate-600">
                      Lembar Pindaian Asli Kitab Amtsilah (Halaman Cetak Arab 10–11 — Lanjutan Ruba&apos;i Mujarrad &amp; Mulhaq Bab 1–4)
                    </div>
                    <img
                      src={selectedChapter.supplementImageUrl}
                      alt="Pindaian asli Mulhaq Ruba'i Kitab Amtsilah Tashrifiyyah"
                      className="w-full rounded-xl border border-slate-200 object-contain max-h-[540px] mx-auto bg-[#FFFDF5]"
                    />
                  </div>
                )}

                {/* Canvas-based PDF Page Viewer (always renders inside iframes/mobile & jumps accurately to pageNumber) */}
                <KitabPdfViewer
                  src={activePdfSrc}
                  pageNumber={activePdfPage}
                  title={`${selectedBook.title} — ${selectedChapter.titleIndo}`}
                  isUsingDriveSource={isUsingDriveSource}
                  onTotalPagesLoaded={(total) =>
                    setLoadedTotalPages((prev) =>
                      prev[selectedBook.id] === total ? prev : { ...prev, [selectedBook.id]: total }
                    )
                  }
                  onFallbackToLocal={() =>
                    setPdfSourceMode((prev) => ({ ...prev, [selectedBook.id]: 'local' }))
                  }
                />
              </div>
            )}

            {/* SECTION 2: HARAKAT ARABIC MATAN & GENEROUSLY SPACED TRANSLATION */}
            {(viewMode === 'combined' || viewMode === 'matan') && (
              <>
                {/* Matan Arabic Display - Generous line-height & padding */}
                <div className="p-6 sm:p-10 lg:p-12 bg-[#FFFDF5] border-b border-amber-200/60">
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="text-xs font-black text-slate-500 uppercase tracking-wider">
                      Matan Arab Berharakat
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      {selectedBook.title}
                    </span>
                  </div>

                  <div
                    dir="rtl"
                    className={`font-serif ${getFontSizeClass()} font-bold text-[#0C122C] text-right selection:bg-[#FFD233] whitespace-pre-line`}
                  >
                    {selectedChapter.contentArabic}
                  </div>
                </div>

                {/* Translation, Syarah & Key Points with generous padding and airy spacing */}
                <div className="p-6 sm:p-10 space-y-8">
                  {/* Translation */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider">
                      Terjemah Bahasa Indonesia
                    </h4>
                    <div className="p-6 sm:p-8 rounded-[1.75rem] bg-[#FFFDF5] text-[15px] sm:text-base text-[#0C122C] leading-[1.95] font-medium shadow-2xs whitespace-pre-line">
                      {selectedChapter.translation}
                    </div>
                  </div>

                  {/* Detailed Explanation */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider">
                      Uraian &amp; Syarah Kaidah
                    </h4>
                    <p className="text-sm sm:text-[15px] text-slate-700 leading-[1.9] font-normal px-1">
                      {selectedChapter.explanation}
                    </p>
                  </div>

                  {/* Key Points */}
                  {selectedChapter.keyPoints && selectedChapter.keyPoints.length > 0 && (
                    <div className="p-6 sm:p-8 rounded-[1.75rem] bg-[#E0F9FF]/65 shadow-2xs space-y-4">
                      <h4 className="text-xs font-black text-[#0C122C] uppercase tracking-wider flex items-center gap-2">
                        <Bookmark className="w-4 h-4 text-[#0284C7]" />
                        <span>Poin-Poin Penting &amp; Kaidah Penunjang</span>
                      </h4>
                      <ul className="space-y-3 text-sm text-[#0C122C] font-semibold leading-relaxed">
                        {selectedChapter.keyPoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#00D2FF] shrink-0 mt-2" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Mark Completed & Earn XP */}
                  <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs sm:text-sm text-slate-500 font-medium text-center sm:text-left">
                      <span>Mengkaji bab ini menambah</span>{' '}
                      <strong className="text-[#FF2D78] font-black">+15 XP</strong>{' '}
                      <span>ke rekor belajar santri Anda.</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        recordActivity('library');
                        setCompletedChapters((prev) => ({ ...prev, [selectedChapter.id]: true }));
                      }}
                      className={`w-full sm:w-auto px-6 py-3.5 rounded-2xl font-black text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 ${
                        completedChapters[selectedChapter.id]
                          ? 'bg-[#0C122C] text-[#FFD233] shadow-[#0C122C]/20'
                          : 'bg-[#FF2D78] hover:bg-[#E02468] text-white shadow-[#FF2D78]/25'
                      }`}
                    >
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span>
                        {completedChapters[selectedChapter.id]
                          ? 'Bab Sudah Dicatat (+15 XP)'
                          : 'Tandai Telah Mengkaji Bab Ini (+15 XP)'}
                      </span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
