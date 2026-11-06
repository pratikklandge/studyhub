"use client";

import { useState } from "react";
import {
  ArrowLeft,
  GraduationCap,
  BookOpen,
  School,
  ChevronRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface SelectStandardScreenProps {
  onBack: () => void;
  onSelectStandard: (standard: "11th" | "12th" | "Diploma") => void;
}

export default function SelectStandardScreen({
  onBack,
  onSelectStandard,
}: SelectStandardScreenProps) {
  const [selected, setSelected] = useState<string>("Diploma");
  const [message, setMessage] = useState<string | null>(null);

  const standards = [
    {
      id: "11th",
      title: "11th Standard",
      subtitle: "Junior College (HSC)",
      description: "Foundation science, mathematics, and basic sciences.",
      icon: School,
      badge: "Coming Soon",
      isPrimary: false,
    },
    {
      id: "12th",
      title: "12th Standard",
      subtitle: "Senior Secondary (HSC)",
      description: "Board exam preparation, question sets & notes.",
      icon: BookOpen,
      badge: "Coming Soon",
      isPrimary: false,
    },
    {
      id: "Diploma",
      title: "Diploma",
      subtitle: "Polytechnic Engineering (MSBTE)",
      description: "MSBTE K-Scheme curriculum, unit notes & model question papers.",
      icon: GraduationCap,
      badge: "Active & Available",
      isPrimary: true,
    },
  ];

  const handleCardClick = (id: "11th" | "12th" | "Diploma") => {
    setSelected(id);
    if (id === "Diploma") {
      onSelectStandard("Diploma");
    } else {
      setMessage(
        `${id} Standard materials are currently being prepared. Please select Diploma to explore active 1st Year resources!`
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
              Step 1 of 3
            </span>
          </div>
          <div className="w-10" />
        </div>

        {/* Title */}
        <div className="space-y-1 mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Select Standard
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Choose your academic category to find your curriculum
          </p>
        </div>

        {/* Temporary Alert Toast */}
        {message && (
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 text-blue-800 rounded-xl text-xs flex items-start gap-2 animate-in fade-in">
            <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <span>{message}</span>
          </div>
        )}

        {/* 3 Large Selection Cards */}
        <div className="space-y-4">
          {standards.map((item) => {
            const Icon = item.icon;
            const isDiploma = item.id === "Diploma";

            return (
              <div
                key={item.id}
                onClick={() => handleCardClick(item.id as "11th" | "12th" | "Diploma")}
                className={`group relative rounded-2xl p-5 border-2 transition-all duration-200 cursor-pointer ${
                  isDiploma
                    ? "bg-gradient-to-br from-blue-50/80 to-white border-blue-500 shadow-md shadow-blue-500/10 hover:border-blue-600"
                    : "bg-white border-slate-200 hover:border-blue-300 shadow-2xs hover:shadow-sm"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        isDiploma
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
                      </div>
                      <p className="text-xs font-semibold text-blue-600">
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-slate-500 leading-relaxed pr-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between shrink-0 h-full">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                        isDiploma
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
        <span>Tap <strong>Diploma</strong> to proceed to Year Selection</span>
      </div>
    </div>
  );
}
