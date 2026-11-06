"use client";

import { useState } from "react";
import {
  ArrowLeft,
  FileText,
  Eye,
  CheckCircle2,
  Share2,
  Sparkles,
  BookOpen,
  Zap,
  Download,
} from "lucide-react";
import PdfViewer from "./PdfViewer";
import DocumentViewer from "./DocumentViewer";
import { MSBTE_K_SCHEME_SYLLABUS } from "@/data/msbteSyllabus";

export interface SubjectInfo {
  name: "Physics" | "Chemistry" | "Mathematics" | "Communication Skills (English)";
  subtitle: string;
  scheme: string;
  color: string;
  resources: {
    title: string;
    type: "Syllabus" | "Notes" | "Question Paper" | "Formula Sheet" | "Lab Manual";
    size: string;
    pages: number;
    downloads: string;
  }[];
}

interface SubjectDetailScreenProps {
  subject: SubjectInfo;
  onBack: () => void;
}

// Physics unit PDFs served from /public/notes/physics/
const PHYSICS_UNIT_PDFS = [
  {
    unit: 1,
    title: "Unit 1 – Unit and Measurements",
    subtitle: "Physical Quantities, SI Units, Dimensions, Errors & Significant Figures, Ancient Astronomical Instruments",
    pdfUrl: "/notes/physics/unit_1.pdf",
    marks: "9 Marks",
    hours: "7 Hours",
    pages: "6 pages",
  },
  {
    unit: 2,
    title: "Unit 2 – Electricity, Magnetism & Semiconductors",
    subtitle: "Electric Charge, Coulomb's Law, Ohm's Law, Resistors & Galvanometers, Energy Bands, P-N Junction Diodes",
    pdfUrl: "/notes/physics/unit_2.pdf",
    marks: "14 Marks",
    hours: "13 Hours",
    pages: "7 pages",
  },
  {
    unit: 3,
    title: "Unit 3 – Thermometry & Fiber Optics",
    subtitle: "Heat & Temperature Scales, Heat Transfer, Gas Laws, Specific Heat Capacity, TIR & Optical Fibers",
    pdfUrl: "/notes/physics/unit_3.pdf",
    marks: "12 Marks",
    hours: "10 Hours",
    pages: "6 pages",
  },
];

export default function SubjectDetailScreen({
  subject,
  onBack,
}: SubjectDetailScreenProps) {
  // State: which PDF is open (null = none open)
  const [activePdf, setActivePdf] = useState<{ title: string; pdfUrl: string } | null>(null);

  // State: open the notes/syllabus text viewer (for non-Physics or Syllabus tab)
  const [activeDocument, setActiveDocument] = useState<{
    title: string;
    type: string;
  } | null>(null);

  const [shareNotice, setShareNotice] = useState<string | null>(null);

  const syllabus = MSBTE_K_SCHEME_SYLLABUS[subject.name];
  const isPhysics = subject.name.toLowerCase() === "physics";

  // --- If a REAL PDF is open, show it ---
  if (activePdf) {
    return (
      <PdfViewer
        title={activePdf.title}
        pdfUrl={activePdf.pdfUrl}
        onBack={() => setActivePdf(null)}
      />
    );
  }

  // --- If the text/syllabus viewer is open, show it ---
  if (activeDocument) {
    return (
      <DocumentViewer
        subjectName={subject.name}
        documentTitle={activeDocument.title}
        documentType={activeDocument.type}
        onBack={() => setActiveDocument(null)}
      />
    );
  }

  return (
    <div className="flex-1 flex flex-col p-5 sm:p-6 animate-in fade-in duration-300 gap-4">

      {/* ── Top Header ── */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition cursor-pointer"
          aria-label="Back to subjects"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
          {syllabus?.courseCode || subject.scheme}
        </span>
        <button
          type="button"
          onClick={() => {
            navigator.clipboard?.writeText(window.location.href);
            setShareNotice("Link copied!");
            setTimeout(() => setShareNotice(null), 2500);
          }}
          className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition cursor-pointer"
          title="Share"
        >
          <Share2 className="w-4 h-4" />
        </button>
      </div>

      {/* ── Share notice ── */}
      {shareNotice && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{shareNotice}</span>
        </div>
      )}

      {/* ── Physics Notes Banner ── */}
      {isPhysics && (
        <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-amber-300" />
            </div>
            <div className="flex-1">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-200 block">
                MSBTE K-Scheme • Course Code 311305
              </span>
              <h2 className="text-xl font-black tracking-wide leading-tight">
                StudyHub Notes
              </h2>
              <span className="text-xs text-blue-200">Basic Science – Physics</span>
            </div>
            <span className="text-[10px] font-bold bg-white text-blue-700 px-2.5 py-1 rounded-full uppercase shrink-0">
              1st Year
            </span>
          </div>
        </div>
      )}

      {/* ── Subject Card Header ── */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-5 text-white shadow-lg shadow-blue-500/20">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-semibold bg-white/20 px-2.5 py-1 rounded-full text-blue-100">
            MSBTE K-Scheme • Diploma 1st Year
          </span>
          <span className="text-[11px] font-mono bg-blue-900/60 text-blue-200 px-2 py-0.5 rounded">
            Code: {syllabus?.courseCode || "311305"}
          </span>
        </div>
        <h2 className="text-2xl font-extrabold tracking-tight">
          {subject.name}
        </h2>
        <p className="text-xs text-blue-100 mt-1">
          {isPhysics ? "StudyHub Physics Notes" : syllabus?.courseTitle} • {subject.subtitle}
        </p>
        <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs text-blue-100">
          <span>{syllabus?.units.length || 3} Units • {syllabus?.credits || 2} Credits</span>
          <span className="flex items-center gap-1 font-semibold text-white">
            <Sparkles className="w-3.5 h-3.5" /> 100% Free
          </span>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          PHYSICS: Real Unit-wise PDF Notes Cards
      ══════════════════════════════════════════ */}
      {isPhysics && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              📄 StudyHub Unit Notes (Color-Coded PDF)
            </h3>
            <span className="text-[11px] text-slate-500">Tap to open</span>
          </div>

          {PHYSICS_UNIT_PDFS.map((unit) => (
            <div
              key={unit.unit}
              onClick={() => setActivePdf({ title: unit.title, pdfUrl: unit.pdfUrl })}
              className="bg-white rounded-2xl border-2 border-blue-200 hover:border-blue-500 shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="p-4 flex items-center gap-3">
                {/* Unit number circle */}
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex flex-col items-center justify-center shrink-0 shadow-sm shadow-blue-500/30 group-hover:bg-blue-700 transition">
                  <span className="text-[9px] font-bold text-blue-200 uppercase">Unit</span>
                  <span className="text-lg font-black leading-none">{unit.unit}</span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition leading-snug">
                    {unit.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-2 leading-snug">
                    {unit.subtitle}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                      {unit.marks}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {unit.hours}
                    </span>
                    <span className="text-[10px] text-slate-400">{unit.pages}</span>
                  </div>
                </div>

                {/* Open button */}
                <button
                  type="button"
                  className="inline-flex items-center gap-1 px-3 py-2 text-xs font-bold text-white bg-blue-600 group-hover:bg-blue-700 rounded-xl shadow-xs transition shrink-0 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  Open
                </button>
              </div>
            </div>
          ))}

          {/* 3 Unit MCQs Card (instead of All 3 Units Combined PDF) */}
          <div
            onClick={() =>
              setActiveDocument({
                title: "3 Unit MCQs & Question Bank – Physics",
                type: "Question Paper",
              })
            }
            className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl border-2 border-indigo-300 hover:border-indigo-500 shadow-sm hover:shadow-md transition-all cursor-pointer group p-4 flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-indigo-500/30 group-hover:bg-indigo-700 transition">
              <Sparkles className="w-6 h-6 text-amber-300" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold text-indigo-700 uppercase tracking-wide mb-0.5">
                Practice & Test
              </div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-700 transition">
                3 Unit MCQs
              </h4>
              <p className="text-[11px] text-slate-500">
                Interactive MCQs for Units 1, 2 & 3 with instant answers & explanations
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-1 px-3 py-2 text-xs font-bold text-white bg-indigo-600 group-hover:bg-indigo-700 rounded-xl shadow-xs transition shrink-0 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              Practice
            </button>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════
          ALL SUBJECTS: Text Notes / Syllabus / Formulas
      ══════════════════════════════════════════ */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
            {isPhysics ? "📚 Syllabus & Study Guides" : "📚 Study Resources"}
          </h3>
          <span className="text-[11px] text-slate-500">Tap to open</span>
        </div>

        {/* Official MSBTE Syllabus card */}
        <div
          onClick={() =>
            setActiveDocument({
              title: isPhysics
                ? `Official MSBTE Syllabus – ${subject.name}`
                : `Official MSBTE Syllabus – ${subject.name} (Coming Soon)`,
              type: "Syllabus",
            })
          }
          className="bg-white rounded-xl border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-sm transition-all cursor-pointer group p-4 flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition">
                Official MSBTE Syllabus
              </h4>
              {!isPhysics && (
                <span className="text-[9px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.2 rounded uppercase">
                  Coming Soon
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-500">
              {isPhysics
                ? `${syllabus?.units.length || 3} units • Course outcomes • Practicals`
                : "Curriculum & teaching scheme • Coming Soon"}
            </p>
          </div>
          <button type="button" className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-600 rounded-xl border border-blue-200 hover:border-blue-600 transition shrink-0 cursor-pointer">
            <Eye className="w-3.5 h-3.5" /> Open
          </button>
        </div>

        {/* Formula sheet card */}
        <div
          onClick={() =>
            setActiveDocument({
              title: isPhysics
                ? `Formula Sheet – ${subject.name}`
                : `Formula Sheet – ${subject.name} (Coming Soon)`,
              type: "Formula Sheet",
            })
          }
          className="bg-white rounded-xl border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-sm transition-all cursor-pointer group p-4 flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition">
                Formula Sheet & Key Points
              </h4>
              {!isPhysics && (
                <span className="text-[9px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.2 rounded uppercase">
                  Coming Soon
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-500">
              {isPhysics
                ? "All formulas + quick revision • Exam hall ready"
                : "Master formula sheet & key points • Coming Soon"}
            </p>
          </div>
          <button type="button" className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-600 rounded-xl border border-blue-200 hover:border-blue-600 transition shrink-0 cursor-pointer">
            <Eye className="w-3.5 h-3.5" /> Open
          </button>
        </div>

        {/* Practice MCQ card */}
        <div
          onClick={() =>
            setActiveDocument({
              title: isPhysics
                ? `MCQ Question Bank – ${subject.name}`
                : `MCQ Question Bank – ${subject.name} (Coming Soon)`,
              type: "Question Paper",
            })
          }
          className="bg-white rounded-xl border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-sm transition-all cursor-pointer group p-4 flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition">
                Practice MCQs & Question Bank
              </h4>
              {!isPhysics && (
                <span className="text-[9px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.2 rounded uppercase">
                  Coming Soon
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-500">
              {isPhysics
                ? "Unit-wise interactive MCQs with answers & explanation"
                : "Unit-wise question bank & practice quiz • Coming Soon"}
            </p>
          </div>
          <button type="button" className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-600 rounded-xl border border-blue-200 hover:border-blue-600 transition shrink-0 cursor-pointer">
            <Eye className="w-3.5 h-3.5" /> Open
          </button>
        </div>
      </div>

      {/* Back button */}
      <div className="pt-2 pb-3">
        <button
          type="button"
          onClick={onBack}
          className="w-full py-3 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition cursor-pointer"
        >
          ← Choose Another Subject
        </button>
      </div>
    </div>
  );
}
