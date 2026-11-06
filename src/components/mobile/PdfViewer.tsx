"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Download,
  ZoomIn,
  ZoomOut,
  Maximize2,
  FileText,
  Loader2,
} from "lucide-react";

interface PdfViewerProps {
  title: string;
  pdfUrl: string;
  onBack: () => void;
}

export default function PdfViewer({ title, pdfUrl, onBack }: PdfViewerProps) {
  const [loading, setLoading] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = title.replace(/\s+/g, "_") + ".pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`flex flex-col bg-slate-900 animate-in fade-in duration-300 ${
        fullscreen ? "fixed inset-0 z-50" : "flex-1 min-h-full"
      }`}
    >
      {/* Top Bar */}
      <div className="sticky top-0 z-30 bg-slate-800 px-3 py-3 flex items-center justify-between gap-2 shadow-lg">
        {/* Back button */}
        <button
          type="button"
          onClick={onBack}
          className="w-9 h-9 rounded-xl bg-slate-700 hover:bg-slate-600 flex items-center justify-center text-white transition shrink-0 cursor-pointer"
          aria-label="Back"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        {/* Title */}
        <div className="flex-1 overflow-hidden">
          <p className="text-[10px] font-extrabold text-blue-300 uppercase tracking-widest">
            StudyHub Notes
          </p>
          <p className="text-xs font-bold text-white truncate">{title}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setFullscreen((f) => !f)}
            className="w-9 h-9 rounded-xl bg-slate-700 hover:bg-slate-600 flex items-center justify-center text-white transition cursor-pointer"
            title={fullscreen ? "Exit Fullscreen" : "Fullscreen"}
          >
            <Maximize2 className="w-4 h-4" />
          </button>

          {/* DOWNLOAD BUTTON – top right corner */}
          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 active:scale-95 rounded-xl shadow-md shadow-blue-500/30 transition cursor-pointer"
            title="Download this PDF"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </button>
        </div>
      </div>

      {/* PDF Embed Area */}
      <div className="flex-1 relative bg-slate-800 overflow-hidden">
        {/* Loading Spinner */}
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-800 z-10">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <div className="flex items-center gap-2 text-slate-300 text-sm">
              <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
              <span>Loading your notes...</span>
            </div>
          </div>
        )}

        {/* PDF iframe */}
        <iframe
          src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
          className="w-full h-full border-0"
          style={{ minHeight: "calc(100vh - 72px)" }}
          onLoad={() => setLoading(false)}
          title={title}
        />
      </div>

      {/* Bottom hint bar */}
      <div className="bg-slate-800 border-t border-slate-700 px-4 py-2 flex items-center justify-between text-[11px] text-slate-400">
        <span>Pinch to zoom • Swipe to scroll</span>
        <button
          type="button"
          onClick={handleDownload}
          className="text-blue-400 font-bold hover:text-blue-300 transition"
        >
          Save PDF ↓
        </button>
      </div>
    </div>
  );
}
