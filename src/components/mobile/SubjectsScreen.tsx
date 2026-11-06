"use client";

import {
  ArrowLeft,
  ChevronRight,
  Sparkles,
  Zap,
  FlaskConical,
  Calculator,
  MessageSquare,
  FileText,
  BookOpen,
} from "lucide-react";
import { SubjectInfo } from "./SubjectDetailScreen";

interface SubjectsScreenProps {
  onBack: () => void;
  onSelectSubject: (subject: SubjectInfo) => void;
}

export const SAMPLE_SUBJECTS: SubjectInfo[] = [
  {
    name: "Mathematics",
    subtitle: "Basic Mathematics (BMS) • Coming Soon",
    scheme: "K-Scheme • 311302",
    color: "blue",
    resources: [
      {
        title: "Official MSBTE Syllabus & Marking Scheme (Course Code: 311302) • Coming Soon",
        type: "Syllabus",
        size: "Coming Soon",
        pages: 0,
        downloads: "-",
      },
      {
        title: "Logarithms, Matrices & Determinants Chapter Notes • Coming Soon",
        type: "Notes",
        size: "Coming Soon",
        pages: 0,
        downloads: "-",
      },
      {
        title: "Trigonometric & Differential Calculus Formula Handbook • Coming Soon",
        type: "Formula Sheet",
        size: "Coming Soon",
        pages: 0,
        downloads: "-",
      },
      {
        title: "MSBTE Board Examination Model Question Paper • Coming Soon",
        type: "Question Paper",
        size: "Coming Soon",
        pages: 0,
        downloads: "-",
      },
    ],
  },
  {
    name: "Physics",
    subtitle: "Units 1, 2 & 3 • StudyHub Notes MSBTE K-Scheme (311305)",
    scheme: "K-Scheme • 311305",
    color: "blue",
    resources: [
      {
        title: "StudyHub Notes • Complete K-Scheme Handwritten Notes (Units 1-3)",
        type: "Notes",
        size: "3.4 MB",
        pages: 34,
        downloads: "6.8k",
      },
      {
        title: "StudyHub Notes • MSBTE Unit-Wise Question Bank & MCQs (300+ Qs)",
        type: "Question Paper",
        size: "2.5 MB",
        pages: 26,
        downloads: "5.7k",
      },
      {
        title: "Official MSBTE Basic Physics (311305) Syllabus & Practical Manual",
        type: "Syllabus",
        size: "1.2 MB",
        pages: 8,
        downloads: "5.4k",
      },
      {
        title: "StudyHub Notes • Master Formula Sheet & Physical Constants",
        type: "Formula Sheet",
        size: "1.1 MB",
        pages: 8,
        downloads: "4.3k",
      },
    ],
  },
  {
    name: "Chemistry",
    subtitle: "Basic Science (Chemistry) • Coming Soon",
    scheme: "K-Scheme • 311305",
    color: "blue",
    resources: [
      {
        title: "Official MSBTE Applied Chemistry Syllabus • Coming Soon",
        type: "Syllabus",
        size: "Coming Soon",
        pages: 0,
        downloads: "-",
      },
      {
        title: "Chemical Bonding, Water Treatment & Corrosion Control Notes • Coming Soon",
        type: "Notes",
        size: "Coming Soon",
        pages: 0,
        downloads: "-",
      },
      {
        title: "Paints, Polymers & Lubrication Mechanisms Summary Sheet • Coming Soon",
        type: "Formula Sheet",
        size: "Coming Soon",
        pages: 0,
        downloads: "-",
      },
      {
        title: "Chemistry Unit Test 1 & 2 Solved Question Bank • Coming Soon",
        type: "Question Paper",
        size: "Coming Soon",
        pages: 0,
        downloads: "-",
      },
    ],
  },
  {
    name: "Communication Skills (English)",
    subtitle: "Communication Skills • Coming Soon",
    scheme: "K-Scheme • 311303",
    color: "blue",
    resources: [
      {
        title: "Official MSBTE Communication Skills Curriculum • Coming Soon",
        type: "Syllabus",
        size: "Coming Soon",
        pages: 0,
        downloads: "-",
      },
      {
        title: "Grammar Rules, Collocations & Formal Letter Templates • Coming Soon",
        type: "Notes",
        size: "Coming Soon",
        pages: 0,
        downloads: "-",
      },
      {
        title: "Situational Dialogue Writing & Technical Speech Speaking Tips • Coming Soon",
        type: "Notes",
        size: "Coming Soon",
        pages: 0,
        downloads: "-",
      },
      {
        title: "Communication Skills Examination Question Bank • Coming Soon",
        type: "Question Paper",
        size: "Coming Soon",
        pages: 0,
        downloads: "-",
      },
    ],
  },
];

export default function SubjectsScreen({
  onBack,
  onSelectSubject,
}: SubjectsScreenProps) {
  // Map icons for the 4 subjects
  const getSubjectIcon = (name: string) => {
    switch (name) {
      case "Physics":
        return Zap;
      case "Chemistry":
        return FlaskConical;
      case "Mathematics":
        return Calculator;
      case "Communication Skills (English)":
        return MessageSquare;
      default:
        return BookOpen;
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-300">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-5">
          <button
            type="button"
            onClick={onBack}
            className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition cursor-pointer"
            aria-label="Back to year selection"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="text-center">
            <span className="text-[11px] font-bold text-blue-600 tracking-wider uppercase">
              Step 3 of 3
            </span>
          </div>
          <div className="w-10" />
        </div>

        {/* Title */}
        <div className="space-y-1 mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[11px] font-bold uppercase mb-1">
            Diploma 1st Year (MSBTE K-Scheme)
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            1st Year Subjects
          </h2>
          <div className="inline-block mt-0.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
              1st Semester
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Tap any subject to view the official MSBTE syllabus and study notes
          </p>
        </div>

        {/* Exactly 4 Subject Cards */}
        <div className="space-y-3.5">
          {SAMPLE_SUBJECTS.map((subject, index) => {
            const Icon = getSubjectIcon(subject.name);
            const isPhysics = subject.name.toLowerCase() === "physics";

            return (
              <div
                key={index}
                onClick={() => onSelectSubject(subject)}
                className={`group relative bg-white hover:bg-blue-50/50 rounded-2xl p-4 sm:p-5 border-2 transition-all duration-200 cursor-pointer ${
                  isPhysics
                    ? "border-blue-400 shadow-md shadow-blue-500/10 hover:border-blue-600"
                    : "border-slate-200 hover:border-blue-500 shadow-2xs hover:shadow-md"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">
                          {subject.name}
                        </h3>
                        {isPhysics ? (
                          <span className="text-[10px] font-extrabold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md uppercase">
                            StudyHub Notes
                          </span>
                        ) : (
                          <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md uppercase">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {subject.subtitle}
                      </p>
                      <div className="flex items-center gap-2 text-[11px] text-blue-600 font-semibold pt-1">
                        <span className="bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                          {subject.scheme}
                        </span>
                        <span>•</span>
                        <span>{isPhysics ? "Official Syllabus Included" : "Coming Soon"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="self-center">
                    <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center text-slate-400 transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Helpful bottom callout */}
      <div className="pt-6 pb-2 text-center text-xs text-slate-400">
        All subjects and notes follow the official MSBTE K-Scheme curriculum.
      </div>
    </div>
  );
}
