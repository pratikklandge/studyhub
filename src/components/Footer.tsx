import Link from "next/link";
import { BookOpen, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Study<span className="text-blue-400">Hub</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              The modern open education platform for MSBTE K-Scheme First Year Diploma students. Simple, organized, and focused on student academic success.
            </p>
            <div className="pt-2 text-xs text-slate-500">
              <span>Target: MSBTE K-Scheme Diploma First Year (Semesters 1 & 2)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="#home" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#semesters" className="hover:text-blue-400 transition">
                  Semester 1
                </Link>
              </li>
              <li>
                <Link href="#semesters" className="hover:text-blue-400 transition">
                  Semester 2
                </Link>
              </li>
              <li>
                <Link href="#materials" className="hover:text-blue-400 transition">
                  Popular Resources
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-blue-400 transition">
                  Platform Benefits
                </Link>
              </li>
            </ul>
          </div>

          {/* Curriculums */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Study Materials
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <span className="text-slate-400">Chapter-wise PDF Notes</span>
              </li>
              <li>
                <span className="text-slate-400">Model Question Papers</span>
              </li>
              <li>
                <span className="text-slate-400">Quick Formula Booklets</span>
              </li>
              <li>
                <span className="text-slate-400">Lab Practical Manuals</span>
              </li>
              <li>
                <span className="text-slate-400">Sample Viva Guides</span>
              </li>
            </ul>
          </div>

          {/* Educational Disclaimer */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Disclaimer
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              StudyHub is an independent open-access student learning initiative. MSBTE (Maharashtra State Board of Technical Education) is a registered trademark of its respective authority.
            </p>
            <div className="pt-2">
              <span className="inline-block text-[11px] font-medium text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-900">
                Frontend Preview v1.0
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} StudyHub. Built for Diploma Engineering Students.</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for MSBTE students</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
