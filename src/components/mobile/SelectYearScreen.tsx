"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Calendar,
  Layers,
  ChevronRight,
  Sparkles,
  Award,
  CheckCircle2,
} from "lucide-react";

interface SelectYearScreenProps {
  onBack: () => void;
  onSelectYear: (year: "1st Year" | "2nd Year" | "3rd Year") => void;
}

export default function SelectYearScreen({
  onBack,
  onSelectYear,
}: SelectYearScreenProps) {
  const [message, setMessage] = useState<string | null>(null);

  const diplomaYears = [
    {
      id: "1st Year",
      title: "1st Year",
      semesters: "Semester 1 & 2",
      description: "Foundational sciences, engineering mathematics, and communication skills (K-Scheme).",
      icon: Layers,
      badge: "Syllabus Active",
      isAvailable: true,
      stats: "4 Core Subjects",
    },
    {
      id: "2nd Year",
      title: "2nd Year",
      semesters: "Semester 3 & 4",
      description: "Department branch specific subjects & advanced technical modules.",
      icon: Calendar,
      badge: "Coming Soon",
      isAvailable: false,
      stats: "Branches TBD",
    },
    {
      id: "3rd Year",
      title: "3rd Year",
      semesters: "Semester 5 & 6",
      description: "Capstone projects, industrial training, and final year board prep.",
      icon: Award,
      badge: "Coming Soon",
      isAvailable: false,
      stats: "Final Year",
    },
  ];

  const handleYearClick = (year: "1st Year" | "2nd Year" | "3rd Year", isAvailable: boolean) => {
    if (isAvailable) {
      onSelectYear(year);
    } else {
      setMessage(
        `${year} resources are currently in development. Please tap "1st Year" to view active subjects!`
      );
      setTimeout(() => setMessage(null), 3500);
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-300">
      <div>
        {/* Top Navigation */}
        <div className="flex items-center justify-between mb-5">
          <button
            type="button"
            onClick={onBack}
            className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition cursor-pointer"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="text-center">
            <span className="text-[11px] font-bold text-blue-600 tracking-wider uppercase">
              Step 2 of 3
            </span>
          </div>
          <div className="w-10" />
        </div>

        {/* Title */}
        <div className="space-y-1 mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[11px] font-bold uppercase mb-1">
            Diploma Engineering
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Diploma Year
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Select your academic diploma year to browse subjects
          </p>
        </div>

        {/* Temporary Alert Toast */}
        {message && (
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 text-blue-800 rounded-xl text-xs flex items-start gap-2 animate-in fade-in">
            <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <span>{message}</span>
          </div>
        )}

        {/* Three Year Selection Cards */}
        <div className="space-y-4">
          {diplomaYears.map((item) => {
            const Icon = item.icon;
            const is1st = item.id === "1st Year";

            return (
              <div
                key={item.id}
                onClick={() =>
                  handleYearClick(
                    item.id as "1st Year" | "2nd Year" | "3rd Year",
                    item.isAvailable
                  )
                }
                className={`group relative rounded-2xl p-5 border-2 transition-all duration-200 cursor-pointer ${
                  is1st
                    ? "bg-gradient-to-br from-blue-50/80 to-white border-blue-500 shadow-md shadow-blue-500/10 hover:border-blue-600"
                    : "bg-white border-slate-200 hover:border-blue-300 shadow-2xs hover:shadow-sm"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        is1st
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">
                          {item.title}
                        </h3>
                        <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                          {item.stats}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-slate-700">
                        {item.semesters}
                      </p>
                      <p className="text-xs text-slate-500 leading-relaxed pr-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between shrink-0 h-full">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                        is1st
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {item.badge}
                    </span>
                    <div className="mt-6 w-8 h-8 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center text-slate-400 transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="pt-6 pb-2 text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
        <span>Tap <strong>1st Year</strong> to view MSBTE K-Scheme Subjects</span>
      </div>
    </div>
  );
}
