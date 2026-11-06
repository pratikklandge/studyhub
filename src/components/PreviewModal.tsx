"use client";

import { X, FileText, Download, CheckCircle, ShieldCheck } from "lucide-react";
import { MaterialItem } from "./PopularMaterials";

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  material: MaterialItem | null;
}

export default function PreviewModal({
  isOpen,
  onClose,
  material,
}: PreviewModalProps) {
  if (!isOpen || !material) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                {material.semester}
              </span>
              <span className="text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                {material.category}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 leading-snug">
              {material.title}
            </h3>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              {material.subject}
            </p>
          </div>
        </div>

        {/* Document Specifications */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 grid grid-cols-3 gap-3 text-center">
          <div>
            <span className="text-[11px] text-slate-400 block">Format</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-800">
              PDF Document
            </span>
          </div>
          <div className="border-x border-slate-200">
            <span className="text-[11px] text-slate-400 block">Length</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-800">
              {material.pages} Pages
            </span>
          </div>
          <div>
            <span className="text-[11px] text-slate-400 block">File Size</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-800">
              {material.fileSize}
            </span>
          </div>
        </div>

        {/* Info Highlights */}
        <div className="space-y-2 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Includes step-by-step MSBTE marking scheme breakdowns</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Optimized for fast mobile reading & printing</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Verified safe download — no spam, ads, or redirects</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="button"
            onClick={() => {
              alert(
                `Demo Download: "${material.title}" is ready! In this frontend preview, PDFs will be linked to your cloud storage once uploaded.`
              );
              onClose();
            }}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF Now</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-3 text-sm font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
