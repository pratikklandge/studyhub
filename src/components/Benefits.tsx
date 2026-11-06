import {
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Zap,
  FolderSync,
  ShieldCheck,
  Smartphone,
  Award,
} from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: GraduationCap,
      title: "MSBTE K-Scheme Aligned",
      description:
        "Specifically structured around the newest K-Scheme diploma curriculum, unit weightage, and MSBTE marking guidelines.",
    },
    {
      icon: FolderSync,
      title: "Organized by Semester & Subject",
      description:
        "No more digging through unorganized WhatsApp groups. Everything is categorized by term, subject, and unit.",
    },
    {
      icon: Award,
      title: "Model Answers & Question Banks",
      description:
        "Understand exactly how MSBTE marks examination answers with verified step-by-step model solutions.",
    },
    {
      icon: Zap,
      title: "Fast, One-Click Downloads",
      description:
        "Direct access to lightweight, crystal-clear PDF notes without annoying redirects, countdowns, or ads.",
    },
    {
      icon: Smartphone,
      title: "Optimized for Mobile & Tablets",
      description:
        "Revise formulas on the bus or in the classroom. Designed to be lightweight and responsive on every screen.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Student Resources",
      description:
        "Compiled and reviewed by diploma toppers and subject mentors to guarantee clarity and accuracy.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why StudyHub?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built Exclusively for MSBTE Diploma Students
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            StudyHub solves the chaos of lost notes, outdated syllabus materials, and exam stress with one clean, unified learning portal.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Callout Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-2xl p-8 sm:p-10 text-white shadow-xl shadow-blue-600/15">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                100% Free For All Diploma Students
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold">
                Ready to score top marks in your MSBTE examinations?
              </h3>
              <p className="text-sm sm:text-base text-blue-100 max-w-2xl">
                Explore Semester 1 and Semester 2 study materials today. Branch-specific resources are actively being prepared!
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="#semesters"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-blue-700 bg-white hover:bg-blue-50 rounded-xl shadow-sm transition"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Get Started Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
