"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Download,
  CheckCircle2,
  BookOpen,
  Sparkles,
  Award,
  ChevronDown,
  ChevronUp,
  FileText,
  Lightbulb,
  Calculator,
  ListOrdered,
  Zap,
  HelpCircle,
  Check,
  X,
} from "lucide-react";
import { MSBTE_K_SCHEME_SYLLABUS, SubjectSyllabus } from "@/data/msbteSyllabus";
import { MSBTE_SUBJECT_NOTES, SubjectNotesData } from "@/data/msbteNotes";

interface DocumentViewerProps {
  subjectName: string;
  documentTitle: string;
  documentType: string;
  onBack: () => void;
}

export default function DocumentViewer({
  subjectName,
  documentTitle,
  documentType,
  onBack,
}: DocumentViewerProps) {
  const [downloadNotification, setDownloadNotification] = useState<string | null>(null);
  const [expandedUnit, setExpandedUnit] = useState<number | null>(1);

  const syllabus: SubjectSyllabus | undefined = MSBTE_K_SCHEME_SYLLABUS[subjectName];
  const subjectNotes: SubjectNotesData | undefined = MSBTE_SUBJECT_NOTES[subjectName];

  // Track interactive MCQ selections
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanations, setShowExplanations] = useState<Record<number, boolean>>({});

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
    setShowExplanations((prev) => ({
      ...prev,
      [questionId]: true,
    }));
  };

  // Set default view depending on document type
  const isSyllabusDoc =
    documentType.toLowerCase().includes("syllabus") ||
    documentTitle.toLowerCase().includes("syllabus");
  const isMcqDoc =
    documentType.toLowerCase().includes("question") ||
    documentTitle.toLowerCase().includes("mcq") ||
    documentTitle.toLowerCase().includes("question bank");

  const [currentView, setCurrentView] = useState<"notes" | "syllabus" | "formulas" | "mcqs">(
    isSyllabusDoc ? "syllabus" : isMcqDoc ? "mcqs" : "notes"
  );

  const handleCornerDownload = () => {
    const filename = `${subjectName.replace(/\s+/g, "_")}_${documentTitle.replace(/\s+/g, "_")}.pdf`;
    setDownloadNotification(`Downloaded "${filename}" (PDF ready for offline study)!`);
    setTimeout(() => setDownloadNotification(null), 4000);
  };

  const isPhysics = subjectName.toLowerCase() === "physics";

  return (
    <div className="flex-1 flex flex-col justify-between bg-slate-100 text-slate-900 animate-in fade-in duration-300 min-h-full">
      {/* Top Document App Bar with Corner Download Button */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-3 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onBack}
            className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition cursor-pointer"
            aria-label="Back to Subject"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="overflow-hidden">
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 truncate max-w-[175px] sm:max-w-xs">
              {isPhysics ? "Physics Notes" : documentTitle}
            </h3>
            <p className="text-[10px] text-blue-600 font-semibold truncate">
              {isPhysics ? "Basic Science (Physics) • 311305" : `${subjectName} • ${syllabus?.courseCode || "MSBTE K-Scheme"}`}
            </p>
          </div>
        </div>

        {/* PROMINENT CORNER DOWNLOAD BUTTON */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={handleCornerDownload}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-xl shadow-sm shadow-blue-500/25 transition cursor-pointer"
            title="Download PDF to Device"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </button>
        </div>
      </div>

      {/* Document View Switcher (Notes vs Syllabus vs Formulas vs MCQs) */}
      <div className="bg-white border-b border-slate-200 px-3 py-2 flex items-center justify-around gap-1 sm:gap-2 text-xs overflow-x-auto">
        <button
          type="button"
          onClick={() => setCurrentView("notes")}
          className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg font-bold transition shrink-0 cursor-pointer ${
            currentView === "notes"
              ? "bg-blue-600 text-white shadow-xs"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Study Notes</span>
        </button>
        <button
          type="button"
          onClick={() => setCurrentView("mcqs")}
          className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg font-bold transition shrink-0 cursor-pointer ${
            currentView === "mcqs"
              ? "bg-blue-600 text-white shadow-xs"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Practice MCQs</span>
        </button>
        <button
          type="button"
          onClick={() => setCurrentView("syllabus")}
          className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg font-bold transition shrink-0 cursor-pointer ${
            currentView === "syllabus"
              ? "bg-blue-600 text-white shadow-xs"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>MSBTE Syllabus</span>
        </button>
        <button
          type="button"
          onClick={() => setCurrentView("formulas")}
          className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg font-bold transition shrink-0 cursor-pointer ${
            currentView === "formulas"
              ? "bg-blue-600 text-white shadow-xs"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <Calculator className="w-3.5 h-3.5" />
          <span>Formulas</span>
        </button>
      </div>

      {/* Download Alert Toast */}
      {downloadNotification && (
        <div className="m-3 p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-xl text-xs flex items-center gap-2 shadow-sm animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="font-medium">{downloadNotification}</span>
        </div>
      )}

      {/* Document Reader Container (Paper Style) */}
      <div className="flex-1 p-3 sm:p-5 overflow-y-auto">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-5 sm:p-7 space-y-6 max-w-2xl mx-auto">
          {/* SPECIAL PHYSICS BANNER AS REQUESTED */}
          {isPhysics && (
            <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-md shadow-blue-500/20 animate-in fade-in">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white shrink-0">
                  <Zap className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-200 block">
                    MSBTE K-Scheme • First Year
                  </span>
                  <h2 className="text-base sm:text-lg font-black tracking-wide">
                    Physics Notes
                  </h2>
                </div>
              </div>
              <span className="text-[11px] font-bold bg-white text-blue-700 px-3 py-1 rounded-full uppercase shrink-0 shadow-xs">
                Code: 311305
              </span>
            </div>
          )}

          {/* Header Banner */}
          <div className="border-b border-slate-200 pb-5 text-center space-y-1.5">
            <div className="inline-block px-3 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-[10px] font-extrabold uppercase tracking-widest">
              Maharashtra State Board of Technical Education (MSBTE)
            </div>
            <h1 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-tight">
              {isPhysics
                ? "Physics Notes • Complete K-Scheme Unit Study Material"
                : `${subjectName} • ${currentView === "notes" ? "Comprehensive Chapter Notes" : currentView === "syllabus" ? "Official K-Scheme Syllabus" : "Key Formulas & Derivations"}`}
            </h1>
            <p className="text-xs font-semibold text-slate-600">
              Diploma in Engineering & Technology • Course Code: {syllabus?.courseCode || "311300"}
            </p>

            <div className="pt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-left bg-slate-50 p-3 rounded-xl border border-slate-200 text-[11px]">
              <div>
                <span className="text-slate-400 block">Course Title</span>
                <span className="font-bold text-slate-800">{syllabus?.courseTitle || subjectName}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Course Code</span>
                <span className="font-bold text-blue-600">{syllabus?.courseCode || "311300"}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Scheme</span>
                <span className="font-bold text-slate-800">K-Scheme</span>
              </div>
              <div>
                <span className="text-slate-400 block">Total Units</span>
                <span className="font-bold text-slate-800">{subjectNotes?.units.length || 4} Units</span>
              </div>
            </div>
          </div>

          {/* VIEW 1: COMPREHENSIVE STUDY NOTES */}
          {currentView === "notes" && subjectNotes && (
            <div className="space-y-6 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{isPhysics ? `Physics Notes (All ${subjectNotes.units.length} Units)` : "Chapter-by-Chapter Study Notes"}</span>
                </span>
                <span className="text-[11px] text-slate-400">Tap unit to expand</span>
              </div>

              {subjectNotes.units.map((unit) => {
                const isOpen = expandedUnit === unit.unitNumber;

                return (
                  <div
                    key={unit.unitNumber}
                    className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition-all"
                  >
                    {/* Unit Header Accordion Trigger */}
                    <button
                      type="button"
                      onClick={() => setExpandedUnit(isOpen ? null : unit.unitNumber)}
                      className="w-full flex items-center justify-between p-4 text-left bg-gradient-to-r from-slate-50 to-blue-50/30 hover:to-blue-50 transition cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-blue-600 text-white text-xs font-extrabold flex items-center justify-center shrink-0 shadow-xs">
                          U{unit.unitNumber}
                        </span>
                        <div>
                          <h3 className="text-sm font-bold text-slate-900">
                            Unit {unit.unitNumber}: {unit.unitTitle}
                          </h3>
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {unit.overview}
                          </p>
                        </div>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {/* Unit Content Body */}
                    {isOpen && (
                      <div className="p-5 border-t border-slate-100 space-y-6">
                        {/* Unit Overview */}
                        <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 leading-relaxed">
                          <strong>Unit Concept: </strong>
                          {unit.overview}
                        </div>

                        {/* Detailed Sections */}
                        {unit.sections.map((sec, sidx) => (
                          <div key={sidx} className="space-y-3 pt-2">
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900 border-b border-slate-100 pb-1.5 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-blue-600" />
                              <span>{sec.sectionTitle}</span>
                            </h4>

                            <p className="text-xs text-slate-600 leading-relaxed font-medium">
                              {sec.summary}
                            </p>

                            {/* Key Points */}
                            <div className="space-y-1.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                              <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide block">
                                Key Principles & Rules:
                              </span>
                              <ul className="space-y-1">
                                {sec.keyPoints.map((kp, kpidx) => (
                                  <li key={kpidx} className="flex items-start gap-2 text-xs text-slate-700">
                                    <span className="text-blue-600 font-bold shrink-0">•</span>
                                    <span>{kp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Mathematical Formulas if any */}
                            {sec.formulas && sec.formulas.length > 0 && (
                              <div className="bg-blue-950 text-white p-3.5 rounded-xl font-mono text-xs space-y-1.5 shadow-2xs">
                                <span className="text-[10px] text-blue-300 uppercase tracking-wider block font-sans font-bold">
                                  Standard Formulas:
                                </span>
                                {sec.formulas.map((f, fidx) => (
                                  <div key={fidx} className="text-blue-100">
                                    • {f}
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Solved Example with Steps */}
                            {sec.solvedExample && (
                              <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-4 space-y-2.5">
                                <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-bold uppercase tracking-wide">
                                  <ListOrdered className="w-3.5 h-3.5" />
                                  <span>Solved MSBTE Exam Question</span>
                                </div>
                                <p className="text-xs font-bold text-slate-900">
                                  Q: {sec.solvedExample.question}
                                </p>
                                <div className="space-y-1 text-xs text-slate-700 border-l-2 border-emerald-400 pl-3">
                                  {sec.solvedExample.steps.map((step, stidx) => (
                                    <p key={stidx} className="leading-snug">
                                      {step}
                                    </p>
                                  ))}
                                </div>
                                <div className="p-2 bg-white rounded-lg border border-emerald-200 text-xs font-bold text-emerald-900">
                                  {sec.solvedExample.answer}
                                </div>
                              </div>
                            )}

                            {/* Exam Tip */}
                            {sec.examTip && (
                              <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                                <div>
                                  <span className="font-bold">MSBTE Exam Tip: </span>
                                  <span>{sec.examTip}</span>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}

                        {/* Quick Revision Bullet Points */}
                        {unit.quickRevisionPoints.length > 0 && (
                          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                            <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide block">
                              Unit Quick Revision Takeaways:
                            </span>
                            <ul className="space-y-1 text-xs text-slate-600">
                              {unit.quickRevisionPoints.map((qrp, qrpidx) => (
                                <li key={qrpidx} className="flex items-center gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                  <span>{qrp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* VIEW 2: OFFICIAL MSBTE SYLLABUS */}
          {currentView === "syllabus" && syllabus && (
            <div className="space-y-6 text-xs sm:text-sm text-slate-700">
              {/* Teaching and Examination Scheme */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 text-blue-700">
                  <Award className="w-3.5 h-3.5" />
                  <span>Teaching & Examination Scheme (MSBTE Official)</span>
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-[11px] sm:text-xs">
                    <thead className="bg-slate-100 text-slate-700 uppercase font-bold text-[10px]">
                      <tr>
                        <th className="p-2 border-r border-slate-200">Theory Hrs</th>
                        <th className="p-2 border-r border-slate-200">Practical Hrs</th>
                        <th className="p-2 border-r border-slate-200">Theory ESE</th>
                        <th className="p-2 border-r border-slate-200">Theory PA</th>
                        <th className="p-2">Total Marks</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-2 border-r border-slate-200 font-semibold">{syllabus.teachingScheme.theoryHours} Hrs/Week</td>
                        <td className="p-2 border-r border-slate-200 font-semibold">{syllabus.teachingScheme.practicalHours} Hrs/Week</td>
                        <td className="p-2 border-r border-slate-200 font-bold text-blue-600">{syllabus.examScheme.theoryESE}</td>
                        <td className="p-2 border-r border-slate-200 font-semibold">{syllabus.examScheme.theoryPA}</td>
                        <td className="p-2 font-bold text-slate-900">{syllabus.examScheme.totalMarks}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Rationale */}
              <div className="space-y-1.5">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider text-blue-700">
                  Course Rationale
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {syllabus.rationale}
                </p>
              </div>

              {/* Course Outcomes */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider text-blue-700">
                  Course Outcomes (COs)
                </h3>
                <ul className="space-y-1.5 text-xs">
                  {syllabus.courseOutcomes.map((co, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-blue-50/50 p-2.5 rounded-lg border border-blue-100">
                      <span className="font-bold text-blue-700 font-mono shrink-0">CO{idx + 1}:</span>
                      <span className="text-slate-700 leading-snug">{co}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* All Syllabus Units Breakdown */}
              <div className="space-y-2.5">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider text-blue-700">
                  All Units Breakdown
                </h3>
                {syllabus.units.map((unit) => (
                  <div key={unit.unitNumber} className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-slate-900">
                        Unit {unit.unitNumber}: {unit.unitTitle}
                      </h4>
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        {unit.hours} Hrs • {unit.marks} Marks
                      </span>
                    </div>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {unit.topics.map((t, tidx) => (
                        <li key={tidx} className="flex items-start gap-2">
                          <span className="text-blue-500">•</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Practical experiments */}
              {syllabus.practicals.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider text-blue-700">
                    MSBTE Practical Experiments List
                  </h3>
                  <div className="grid grid-cols-1 gap-1.5 text-xs">
                    {syllabus.practicals.map((p) => (
                      <div key={p.expNumber} className="flex items-start gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="font-mono font-bold text-slate-500 text-[11px] shrink-0">
                          #{p.expNumber}:
                        </span>
                        <span className="text-slate-700">{p.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* VIEW 3: FORMULA QUICK SHEET */}
          {currentView === "formulas" && subjectNotes && (
            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>{isPhysics ? "Physics Notes • Important Formulas" : "Important Formulas & Short Tricks"}</span>
                </span>
                <span className="text-[11px] text-slate-400">Exam Hall Revision</span>
              </div>

              {subjectNotes.units.map((unit) => {
                const allUnitFormulas = unit.sections.flatMap((s) => s.formulas || []);
                if (allUnitFormulas.length === 0) return null;

                return (
                  <div key={unit.unitNumber} className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                    <h4 className="text-xs font-bold text-blue-700">
                      Unit {unit.unitNumber}: {unit.unitTitle}
                    </h4>
                    <div className="bg-slate-900 text-white p-3 rounded-xl font-mono text-xs space-y-1">
                      {allUnitFormulas.map((f, fidx) => (
                        <div key={fidx} className="text-blue-200">
                          • {f}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* VIEW 4: PRACTICE MCQS & QUESTION BANK */}
          {currentView === "mcqs" && subjectNotes && (
            <div className="space-y-6 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>{isPhysics ? "Physics Notes • MSBTE Question Bank & MCQs" : "Practice MCQs & Question Bank"}</span>
                </span>
                <span className="text-[11px] text-slate-400">Interactive Quiz</span>
              </div>

              {subjectNotes.units.map((unit) => {
                if (!unit.mcqs || unit.mcqs.length === 0) return null;

                return (
                  <div key={unit.unitNumber} className="space-y-3 p-4 rounded-2xl border border-slate-200 bg-white shadow-2xs">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <h4 className="text-xs font-bold text-slate-900">
                        Unit {unit.unitNumber}: {unit.unitTitle} ({unit.mcqs.length} Questions)
                      </h4>
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        MSBTE Objective Bank
                      </span>
                    </div>

                    <div className="space-y-4 pt-1">
                      {unit.mcqs.map((mcq, mIdx) => {
                        const hasAnswered = selectedAnswers[mcq.id] !== undefined;
                        const selectedIdx = selectedAnswers[mcq.id];
                        const isCorrect = selectedIdx === mcq.correctAnswer;

                        return (
                          <div key={mcq.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                            <p className="text-xs font-bold text-slate-900 leading-snug">
                              Q{mIdx + 1}. {mcq.question}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {mcq.options.map((opt, optIdx) => {
                                const isThisSelected = selectedIdx === optIdx;
                                const isThisCorrect = mcq.correctAnswer === optIdx;

                                let btnStyle = "bg-white border-slate-200 text-slate-700 hover:border-blue-400 hover:bg-blue-50/50";
                                if (hasAnswered) {
                                  if (isThisCorrect) {
                                    btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-800 font-bold";
                                  } else if (isThisSelected && !isCorrect) {
                                    btnStyle = "bg-rose-50 border-rose-500 text-rose-800 font-bold";
                                  } else {
                                    btnStyle = "bg-white border-slate-200 text-slate-400 opacity-60";
                                  }
                                }

                                return (
                                  <button
                                    key={optIdx}
                                    type="button"
                                    onClick={() => handleSelectOption(mcq.id, optIdx)}
                                    className={`p-2.5 rounded-xl border text-left text-xs transition flex items-center justify-between gap-2 cursor-pointer ${btnStyle}`}
                                  >
                                    <div className="flex items-center gap-2">
                                      <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold shrink-0">
                                        {String.fromCharCode(65 + optIdx)}
                                      </span>
                                      <span className="leading-snug">{opt}</span>
                                    </div>
                                    {hasAnswered && isThisCorrect && (
                                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    )}
                                    {hasAnswered && isThisSelected && !isCorrect && (
                                      <X className="w-4 h-4 text-rose-600 shrink-0" />
                                    )}
                                  </button>
                                );
                              })}
                            </div>

                            {/* Explanation */}
                            {hasAnswered && (
                              <div className={`p-2.5 rounded-lg text-xs leading-relaxed ${
                                isCorrect ? "bg-emerald-50 text-emerald-900 border border-emerald-200" : "bg-blue-50 text-blue-900 border border-blue-200"
                              }`}>
                                <span className="font-bold">Explanation: </span>
                                <span>{mcq.explanation}</span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Bottom Footer Note */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
            <span>{isPhysics ? "StudyHub Physics Notes • MSBTE K-Scheme" : "MSBTE K-Scheme Complete Learning Material"}</span>
            <span>Tap Download in the top right corner to save offline</span>
          </div>
        </div>
      </div>
    </div>
  );
}
