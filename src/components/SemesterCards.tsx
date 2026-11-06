import { BookOpen, Layers, FileDown, ArrowRight, CheckCircle } from "lucide-react";

interface SemesterCardsProps {
  onSelectSubject?: (subjectName: string, semester: string) => void;
}

export default function SemesterCards({ onSelectSubject }: SemesterCardsProps) {
  const semesters = [
    {
      id: "sem-1",
      title: "Semester 1",
      subtitle: "First Year • Term 1",
      scheme: "K-Scheme Curriculum",
      description:
        "Access foundational module resources, unit-wise notes, and MSBTE model questions for Semester 1.",
      accent: "blue",
      badge: "Term 1",
      placeholderSubjects: [
        { code: "SUB-101", name: "Engineering Subject 1 (Placeholder)", resources: "14 PDFs" },
        { code: "SUB-102", name: "Engineering Subject 2 (Placeholder)", resources: "18 PDFs" },
        { code: "SUB-103", name: "Basic Science Subject (Placeholder)", resources: "12 PDFs" },
        { code: "SUB-104", name: "Communication Skills (Placeholder)", resources: "10 PDFs" },
      ],
      highlights: ["Core foundational units", "Model question solutions", "Lab manuals & assignments"],
    },
    {
      id: "sem-2",
      title: "Semester 2",
      subtitle: "First Year • Term 2",
      scheme: "K-Scheme Curriculum",
      description:
        "Prepare for second-term diploma examinations with comprehensive revision notes and previous question sets.",
      accent: "blue",
      badge: "Term 2",
      placeholderSubjects: [
        { code: "SUB-201", name: "Applied Subject 1 (Placeholder)", resources: "16 PDFs" },
        { code: "SUB-202", name: "Applied Subject 2 (Placeholder)", resources: "15 PDFs" },
        { code: "SUB-203", name: "Technical Subject (Placeholder)", resources: "11 PDFs" },
        { code: "SUB-204", name: "Programming Fundamentals (Placeholder)", resources: "20 PDFs" },
      ],
      highlights: ["Applied problem solutions", "Previous exam question banks", "Formula sheets & cheat-sheets"],
    },
  ];

  return (
    <section id="semesters" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Curriculum Navigation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Choose Your Semester
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Select between Semester 1 and Semester 2 to browse organized notes, PDF question banks, and reference materials. Specific branch subjects will be finalized soon.
          </p>
        </div>

        {/* Semester Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {semesters.map((sem) => (
            <div
              key={sem.id}
              className="group relative bg-white rounded-2xl border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent bar */}
              <div className="h-2 w-full bg-blue-600" />

              <div className="p-6 sm:p-8 space-y-6 flex-1">
                {/* Header Tag & Title */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-2">
                      {sem.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                      {sem.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-500">
                      {sem.subtitle} • {sem.scheme}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <BookOpen className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {sem.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <p className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                    What&apos;s Included:
                  </p>
                  <div className="grid grid-cols-1 gap-1.5">
                    {sem.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Placeholder Subjects List */}
                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                      Subjects (K-Scheme Placeholders):
                    </p>
                    <span className="text-[11px] text-slate-400">Subject codes TBD</span>
                  </div>
                  <div className="space-y-2">
                    {sem.placeholderSubjects.map((sub, idx) => (
                      <div
                        key={idx}
                        onClick={() => onSelectSubject && onSelectSubject(sub.name, sem.title)}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50/70 border border-slate-100 hover:border-blue-200 transition cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono font-semibold text-slate-500 bg-slate-200/60 px-1.5 py-0.5 rounded">
                            {sub.code}
                          </span>
                          <span className="text-xs sm:text-sm font-medium text-slate-800">
                            {sub.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-semibold text-blue-600 bg-white px-2 py-0.5 rounded border border-blue-100">
                          {sub.resources}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer CTA */}
              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <a
                  href="#materials"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition group-hover:bg-blue-700"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Browse {sem.title} Resources</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
