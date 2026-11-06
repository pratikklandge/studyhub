"use client";

import { useState } from "react";
import { FileText, Eye, Search, Bookmark } from "lucide-react";
import { SAMPLE_SUBJECTS } from "./SubjectsScreen";
import { SubjectInfo } from "./SubjectDetailScreen";
import DocumentViewer from "./DocumentViewer";

interface ResourcesTabProps {
  onSelectSubject: (subject: SubjectInfo) => void;
}

export default function ResourcesTab({ onSelectSubject }: ResourcesTabProps) {
  const [search, setSearch] = useState("");
  const [activeDoc, setActiveDoc] = useState<{
    subjectName: string;
    title: string;
    type: string;
  } | null>(null);

  // Flatten all subject resources
  const allResources = SAMPLE_SUBJECTS.flatMap((sub) =>
    sub.resources.map((res) => ({ ...res, subjectName: sub.name, subjectRef: sub }))
  ).filter(
    (res) =>
      res.title.toLowerCase().includes(search.toLowerCase()) ||
      res.subjectName.toLowerCase().includes(search.toLowerCase()) ||
      res.type.toLowerCase().includes(search.toLowerCase())
  );

  if (activeDoc) {
    return (
      <DocumentViewer
        subjectName={activeDoc.subjectName}
        documentTitle={activeDoc.title}
        documentType={activeDoc.type}
        onBack={() => setActiveDoc(null)}
      />
    );
  }

  return (
    <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-300">
      <div className="space-y-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[11px] font-bold uppercase mb-1">
            <Bookmark className="w-3 h-3" />
            <span>All Study Files</span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">
            Study Resources
          </h2>
          <p className="text-xs text-slate-500">
            Tap to open and read any PDF with instant download in the top corner
          </p>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search notes, physics, math, formulas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 shadow-2xs"
          />
        </div>

        {/* Resources List */}
        <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
          {allResources.map((res, i) => (
            <div
              key={i}
              onClick={() =>
                setActiveDoc({
                  subjectName: res.subjectName,
                  title: res.title,
                  type: res.type,
                })
              }
              className="bg-white p-3.5 rounded-xl border border-slate-200 hover:border-blue-400 shadow-2xs flex items-center justify-between gap-3 cursor-pointer group"
            >
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center justify-center shrink-0 mt-0.5">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition leading-tight">
                    {res.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-500 mt-1">
                    <span className="font-semibold text-blue-600">
                      {res.subjectName}
                    </span>
                    <span>•</span>
                    <span>{res.type}</span>
                    <span>•</span>
                    <span>{res.size}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white rounded-lg border border-blue-200 transition shrink-0 cursor-pointer"
                title="Open Document"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Open</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
