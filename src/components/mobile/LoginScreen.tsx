"use client";

import { useState } from "react";
import {
  Mail,
  Lock,
  ArrowRight,
  ArrowLeft,
  Eye,
  EyeOff,
  BookOpen,
  Info,
  CheckCircle2,
} from "lucide-react";

interface LoginScreenProps {
  onBack: () => void;
  onLoginSuccess: (email: string) => void;
}

export default function LoginScreen({ onBack, onLoginSuccess }: LoginScreenProps) {
  const [email, setEmail] = useState("student@diploma.edu");
  const [password, setPassword] = useState("••••••••");
  const [showPassword, setShowPassword] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [name, setName] = useState("");
  const [notification, setNotification] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setNotification("Please enter your email to continue.");
      return;
    }
    // Functional frontend transition without DB
    onLoginSuccess(email);
  };

  const handleForgotPassword = () => {
    setNotification(
      "Password reset link sent! (Demo mode: You can log in directly with any password)."
    );
    setTimeout(() => setNotification(null), 4000);
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-300">
      {/* Top Bar with Back Arrow */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <button
            type="button"
            onClick={onBack}
            className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition cursor-pointer"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">
            STUDYHUB
          </span>
          <div className="w-10" />
        </div>

        {/* Heading */}
        <div className="space-y-1 mt-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {isRegisterMode ? "Create Account" : "User Login"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            {isRegisterMode
              ? "Sign up to track and access all your diploma notes"
              : "Enter your credentials to access your study materials"}
          </p>
        </div>

        {/* Notice Badge */}
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-2.5 text-xs text-blue-800">
          <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <p>
            <span className="font-semibold">Frontend Preview:</span> No database required. You can use prefilled info or click Login to proceed.
          </p>
        </div>

        {/* Notification Toast */}
        {notification && (
          <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{notification}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {isRegisterMode && (
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-2xs"
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                placeholder="student@diploma.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 text-sm bg-white border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-2xs"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700">Password</label>
              {!isRegisterMode && (
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
                >
                  Forgot Password?
                </button>
              )}
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-10 py-3 text-sm bg-white border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-2xs"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit Login Button */}
          <button
            type="submit"
            className="w-full mt-2 flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.99] rounded-xl shadow-md shadow-blue-500/25 transition-all cursor-pointer"
          >
            <span>{isRegisterMode ? "Create Account & Continue" : "Login"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Bottom Switch between Login & Register */}
      <div className="pt-6 pb-2 text-center border-t border-slate-100">
        <button
          type="button"
          onClick={() => {
            setIsRegisterMode(!isRegisterMode);
            setNotification(null);
          }}
          className="text-xs font-medium text-slate-600 hover:text-blue-600 transition cursor-pointer"
        >
          {isRegisterMode ? (
            <span>
              Already have an account? <strong className="text-blue-600 underline">Login</strong>
            </span>
          ) : (
            <span>
              Don&apos;t have an account?{" "}
              <strong className="text-blue-600 underline">Create Account</strong>
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
