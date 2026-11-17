import React, { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import { ZoomIn, ZoomOut, RotateCcw, AlertCircle, Loader2 } from 'lucide-react';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

// Cache loaded PDF documents by URL so jumping between chapters is instantaneous
const pdfDocCache = new Map<string, Promise<pdfjsLib.PDFDocumentProxy>>();

async function getCachedPdfDocument(url: string): Promise<pdfjsLib.PDFDocumentProxy> {
  const existing = pdfDocCache.get(url);
  if (existing) return existing;

  const loadPromise = (async () => {
    const response = await fetch(url);
    if (!response.ok) {
      let msg = `Gagal memuat PDF (HTTP ${response.status}).`;
      try {
        const errJson = await response.json();
        if (errJson?.error) msg = errJson.error;
      } catch {
        // ignore non-json error
      }
      throw new Error(msg);
    }
    const contentType = response.headers.get('content-type') || '';
    const arrayBuffer = await response.arrayBuffer();
    const header = new Uint8Array(arrayBuffer.slice(0, 5));
    const asciiHeader = String.fromCharCode(...header);
    if (!contentType.includes('pdf') && asciiHeader !== '%PDF-') {
      throw new Error('Dokumen yang diterima bukan berkas PDF yang valid.');
    }

    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
    return loadingTask.promise;
  })();

  pdfDocCache.set(url, loadPromise);
  loadPromise.catch(() => {
    pdfDocCache.delete(url);
  });
  return loadPromise;
}

interface KitabPdfViewerProps {
  src: string;
  pageNumber: number;
  title: string;
  onTotalPagesLoaded?: (totalPages: number) => void;
  onFallbackToLocal?: () => void;
  isUsingDriveSource?: boolean;
}

export const KitabPdfViewer: React.FC<KitabPdfViewerProps> = ({
  src,
  pageNumber,
  title,
  onTotalPagesLoaded,
  onFallbackToLocal,
  isUsingDriveSource = false,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(760);
  const [zoom, setZoom] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [renderedPageInfo, setRenderedPageInfo] = useState<{ page: number; total: number } | null>(null);

  // Track responsive container width
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateWidth = () => {
      const next = Math.max(280, el.clientWidth - 24);
      setContainerWidth(next);
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Render exact PDF page onto canvas whenever src, pageNumber, zoom, or width changes
  useEffect(() => {
    let cancelled = false;
    let activeRenderTask: pdfjsLib.RenderTask | null = null;

    async function renderPage() {
      setLoading(true);
      setErrorMsg(null);

      try {
        const pdfDoc = await getCachedPdfDocument(src);
        if (cancelled) return;

        onTotalPagesLoaded?.(pdfDoc.numPages);
        const safePage = Math.max(1, Math.min(pdfDoc.numPages, pageNumber));
        const page = await pdfDoc.getPage(safePage);
        if (cancelled) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const baseViewport = page.getViewport({ scale: 1 });
        const fitScale = containerWidth / baseViewport.width;
        const effectiveScale = Math.max(0.4, fitScale * zoom);
        const outputScale = Math.min(window.devicePixelRatio || 1, 2.5);

        const viewport = page.getViewport({ scale: effectiveScale });
        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;

        const renderContext = {
          canvasContext: ctx,
          viewport,
          transform: outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : undefined,
        };

        activeRenderTask = page.render(renderContext as any);
        await activeRenderTask.promise;

        if (!cancelled) {
          setRenderedPageInfo({ page: safePage, total: pdfDoc.numPages });
          setLoading(false);
        }
      } catch (err: any) {
        if (cancelled || err?.name === 'RenderingCancelledException') return;
        setErrorMsg(err?.message || 'Tidak dapat memuat halaman PDF.');
        setLoading(false);
      }
    }

    renderPage();

    return () => {
      cancelled = true;
      if (activeRenderTask) {
        try {
          activeRenderTask.cancel();
        } catch {
          // ignore cancel errors
        }
      }
    };
  }, [src, pageNumber, zoom, containerWidth, onTotalPagesLoaded]);

  return (
    <div className="rounded-2xl overflow-hidden bg-slate-200/70 shadow-inner">
      {/* Zoom & Render Status Sub-bar */}
      <div className="px-4 py-2 bg-[#0C122C] text-white flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 font-bold">
          <span className="text-[#FFD233] truncate max-w-[240px] sm:max-w-md">{title}</span>
          {renderedPageInfo && (
            <span className="text-slate-300 tabular-nums">
              (Hal. {renderedPageInfo.page} / {renderedPageInfo.total})
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(0.7, Number((z - 0.15).toFixed(2))))}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors"
            title="Perkecil tampilan PDF"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <span className="tabular-nums font-black px-1.5 text-[11px] text-[#00D2FF]">
            {Math.round(zoom * 100)}%
          </span>
          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(2.2, Number((z + 0.15).toFixed(2))))}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors"
            title="Perbesar tampilan PDF"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          {zoom !== 1 && (
            <button
              type="button"
              onClick={() => setZoom(1)}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#FFD233] cursor-pointer transition-colors"
              title="Reset ukuran pas lebar"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Canvas Container */}
      <div
        ref={containerRef}
        className="relative w-full min-h-[420px] max-h-[78vh] overflow-auto p-3 flex flex-col items-center justify-start bg-slate-200/80"
      >
        {loading && (
          <div className="absolute inset-0 z-10 bg-white/75 backdrop-blur-xs flex flex-col items-center justify-center gap-2.5 text-[#0C122C]">
            <Loader2 className="w-7 h-7 animate-spin text-[#FF2D78]" />
            <span className="text-xs font-black">
              Memuat halaman {pageNumber}...
            </span>
          </div>
        )}

        {errorMsg ? (
          <div className="my-auto max-w-md w-full bg-white rounded-2xl p-6 text-center shadow-md space-y-3">
            <AlertCircle className="w-9 h-9 text-[#FF2D78] mx-auto" />
            <h4 className="text-sm font-black text-[#0C122C]">
              Gagal Menampilkan Halaman PDF
            </h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              {errorMsg}
            </p>
            {isUsingDriveSource && onFallbackToLocal && (
              <button
                type="button"
                onClick={onFallbackToLocal}
                className="px-4 py-2 rounded-xl bg-[#0C122C] text-[#FFD233] text-xs font-black cursor-pointer hover:bg-[#161F46]"
              >
                Gunakan PDF Resmi Terlampir
              </button>
            )}
          </div>
        ) : (
          <canvas
            ref={canvasRef}
            className="rounded-lg shadow-lg bg-white block"
          />
        )}
      </div>
    </div>
  );
};
