import Link from "next/link";
import { BookOpen, FileText, CheckCircle2, Search, ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 pt-12 pb-20 sm:pt-20 sm:pb-28">
      {/* Background soft decorative shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-20 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Tailored for MSBTE K-Scheme Diploma</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-tight">
              Organized Study Resources for{" "}
              <span className="text-blue-600 underline decoration-blue-200 decoration-wavy decoration-2">
                First Year Diploma
              </span>{" "}
              Students
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              StudyHub brings all your MSBTE K-Scheme First Year diploma notes, model answer papers, and question banks into one structured, ad-free platform. Stop searching through scattered groups.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                href="#semesters"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-500/25 transition"
              >
                <span>Select Your Semester</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#materials"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-blue-700 bg-white hover:bg-blue-50 border border-blue-200 rounded-xl shadow-xs transition"
              >
                <span>Browse Popular Notes</span>
              </Link>
            </div>

            {/* Value checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-600 border-t border-slate-200/80">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Semester 1 & 2 Covered</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Verified Quality Notes</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>100% Free Downloads</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card Mockup */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="bg-white rounded-2xl border border-blue-100 shadow-xl shadow-blue-900/5 p-6 space-y-5">
                {/* Simulated Header inside card */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                    K-Scheme First Year
                  </span>
                </div>

                {/* Simulated Search preview */}
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <div className="w-full pl-10 pr-4 py-2.5 text-xs text-slate-400 bg-slate-50 border border-slate-200 rounded-lg">
                    Search notes, chapters, or question banks...
                  </div>
                </div>

                {/* Resource highlight pills */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Semester 1 Notes</p>
                        <p className="text-xs text-slate-500">K-Scheme Core Subjects</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-blue-700 bg-white px-2.5 py-1 rounded-md border border-blue-200">
                      Active
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Semester 2 Notes</p>
                        <p className="text-xs text-slate-500">Upcoming term prep</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-slate-600 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                      Available
                    </span>
                  </div>
                </div>

                {/* Quick note badge */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-xl space-y-1">
                  <p className="text-xs font-medium text-blue-100">Study Tip for Diploma Students</p>
                  <p className="text-xs sm:text-sm font-semibold">
                    First-year foundation sets the cumulative aggregate for diploma rankings!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
