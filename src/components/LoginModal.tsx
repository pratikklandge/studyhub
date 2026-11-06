"use client";

import { X, Lock, Mail, ArrowRight, Info } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative space-y-6"
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
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Student Login</h3>
          <p className="text-xs text-slate-500">
            Sign in to bookmark notes, save downloads, and track your syllabus progress.
          </p>
        </div>

        {/* Info notice about frontend-only mode */}
        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-800">
          <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold">Frontend Preview Mode:</span>
            <p className="mt-0.5 text-blue-700">
              Authentication and database integration are disabled for this stage. All study materials are freely accessible without signing in!
            </p>
          </div>
        </div>

        {/* Demo Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Frontend Preview: Authentication will be connected in the backend phase. You can currently access all notes freely!");
            onClose();
          }}
          className="space-y-4"
        >
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Student Email / Enrollment No</label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="student@polytechnic.edu"
                className="w-full pl-9 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-9 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition"
          >
            <span>Continue</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-center text-xs text-slate-500">
          Don&apos;t have an account yet?{" "}
          <span className="text-blue-600 font-semibold cursor-pointer" onClick={() => alert("Registration will be enabled alongside backend database setup.")}>
            Register Here
          </span>
        </p>
      </div>
    </div>
  );
}
