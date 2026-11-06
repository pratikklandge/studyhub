"use client";

import { User, GraduationCap, ShieldCheck, LogOut, ArrowRight, BookOpen } from "lucide-react";

interface ProfileTabProps {
  userEmail: string;
  onLogout: () => void;
  onSwitchStandard: () => void;
}

export default function ProfileTab({
  userEmail,
  onLogout,
  onSwitchStandard,
}: ProfileTabProps) {
  return (
    <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-300">
      <div className="space-y-6">
        {/* User Card */}
        <div className="flex items-center gap-4 bg-gradient-to-r from-blue-600 to-blue-700 p-5 rounded-2xl text-white shadow-md shadow-blue-500/20">
          <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white text-xl font-black shrink-0">
            {userEmail ? userEmail.charAt(0).toUpperCase() : "S"}
          </div>
          <div className="space-y-0.5 overflow-hidden">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-200">
              Student Profile
            </span>
            <h3 className="text-base font-bold truncate">
              {userEmail || "Diploma Student"}
            </h3>
            <p className="text-xs text-blue-100 flex items-center gap-1">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>MSBTE Diploma • 1st Year</span>
            </p>
          </div>
        </div>

        {/* Academic Details */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 space-y-3">
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide">
            Curriculum Configuration
          </h4>

          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
              <span className="text-slate-500">Board / University</span>
              <span className="font-semibold text-slate-800">MSBTE (Maharashtra)</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
              <span className="text-slate-500">Current Pattern</span>
              <span className="font-semibold text-blue-600">K-Scheme (New)</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
              <span className="text-slate-500">Selected Level</span>
              <span className="font-semibold text-slate-800">Diploma 1st Year</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onSwitchStandard}
            className="w-full mt-2 py-2.5 text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Change Standard or Year</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Platform Info */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2 text-xs text-slate-600">
          <div className="flex items-center gap-2 font-bold text-slate-800">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>STUDYHUB Mobile Experience</span>
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Powered by Plain Sight. Designed for frictionless offline & mobile exam preparation.
          </p>
        </div>
      </div>

      {/* Logout button */}
      <div className="pt-4 pb-2">
        <button
          type="button"
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 rounded-xl transition cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          <span>Log Out & Return to Welcome</span>
        </button>
      </div>
    </div>
  );
}
