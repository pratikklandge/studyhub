"use client";

import { BookOpen, ArrowRight } from "lucide-react";

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

export default function WelcomeScreen({ onGetStarted }: WelcomeScreenProps) {
  return (
    <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-300">
      {/* Top Branding Section */}
      <div className="pt-8 sm:pt-14 text-center space-y-4">
        {/* App Logo Emblem */}
        <div className="mx-auto w-20 h-20 rounded-3xl bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/25 border-4 border-blue-100">
          <BookOpen className="w-10 h-10" />
        </div>

        {/* Brand Name */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            STUDY<span className="text-blue-600">HUB</span>
          </h1>
        </div>
      </div>

      {/* Center Welcome & Powered By Section */}
      <div className="my-auto py-8 text-center space-y-4">
        <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl p-6 sm:p-8 border border-blue-100 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-wide">
            WELCOME
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm font-semibold text-blue-600 tracking-wide">
            Powered by Plain Sight
          </p>

          <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
            Your centralized mobile companion for organized study materials, notes, question banks, and verified resources.
          </p>
        </div>
      </div>

      {/* Bottom Action Section */}
      <div className="pb-4 space-y-3">
        <button
          type="button"
          onClick={onGetStarted}
          className="w-full flex items-center justify-center gap-2 py-4 px-6 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.99] rounded-2xl shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
        >
          <span>Get Started</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        <p className="text-center text-[11px] text-slate-400">
          Simple • Fast • Free for All Students
        </p>
      </div>
    </div>
  );
}
