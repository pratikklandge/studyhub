"use client";

import { useState } from "react";
import { FileText, Download, Eye, Star, Search, Sparkles, Filter } from "lucide-react";

interface PopularMaterialsProps {
  onOpenPreview: (material: MaterialItem) => void;
}

export interface MaterialItem {
  id: string;
  title: string;
  subject: string;
  semester: "Semester 1" | "Semester 2";
  category: "Notes" | "Question Paper" | "Formula Sheet" | "Lab Manual";
  fileSize: string;
  pages: number;
  downloads: string;
  rating: number;
  isPopular?: boolean;
}

const SAMPLE_MATERIALS: MaterialItem[] = [
  {
    id: "mat-1",
    title: "Unit 1 Comprehensive Theory Notes & Solved Examples",
    subject: "Engineering Subject 1 (Placeholder)",
    semester: "Semester 1",
    category: "Notes",
    fileSize: "3.4 MB",
    pages: 28,
    downloads: "2.4k",
    rating: 4.9,
    isPopular: true,
  },
  {
    id: "mat-2",
    title: "Semester 1 Model Question Paper with Scheme Solutions",
    subject: "Engineering Subject 2 (Placeholder)",
    semester: "Semester 1",
    category: "Question Paper",
    fileSize: "1.8 MB",
    pages: 14,
    downloads: "3.1k",
    rating: 4.8,
    isPopular: true,
  },
  {
    id: "mat-3",
    title: "Quick Revision Formula Booklet & Standard Constants",
    subject: "Basic Science Subject (Placeholder)",
    semester: "Semester 1",
    category: "Formula Sheet",
    fileSize: "1.2 MB",
    pages: 10,
    downloads: "1.9k",
    rating: 4.9,
  },
  {
    id: "mat-4",
    title: "Communication Skills Unit Test Question Bank",
    subject: "Communication Skills (Placeholder)",
    semester: "Semester 1",
    category: "Notes",
    fileSize: "2.1 MB",
    pages: 18,
    downloads: "1.5k",
    rating: 4.7,
  },
  {
    id: "mat-5",
    title: "Applied Subject 1 Important Theorems & Step Solutions",
    subject: "Applied Subject 1 (Placeholder)",
    semester: "Semester 2",
    category: "Notes",
    fileSize: "4.2 MB",
    pages: 36,
    downloads: "2.8k",
    rating: 4.9,
    isPopular: true,
  },
  {
    id: "mat-6",
    title: "Lab Practical Manual & Sample Viva Q&A Guide",
    subject: "Programming Fundamentals (Placeholder)",
    semester: "Semester 2",
    category: "Lab Manual",
    fileSize: "2.7 MB",
    pages: 22,
    downloads: "1.7k",
    rating: 4.8,
  },
];

export default function PopularMaterials({ onOpenPreview }: PopularMaterialsProps) {
  const [selectedSemester, setSelectedSemester] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredMaterials = SAMPLE_MATERIALS.filter((item) => {
    const matchesSemester =
      selectedSemester === "All" || item.semester === selectedSemester;
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSemester && matchesCategory && matchesSearch;
  });

  return (
    <section id="materials" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated PDF Resources</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Popular Study Materials
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Download high-demand diploma study notes, question banks, and formulas created for first-year MSBTE students.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search notes or subjects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder:text-slate-400 shadow-2xs"
            />
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-slate-200 mb-8">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </div>

          {/* Semester Filter */}
          {["All", "Semester 1", "Semester 2"].map((sem) => (
            <button
              key={sem}
              type="button"
              onClick={() => setSelectedSemester(sem)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedSemester === sem
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {sem === "All" ? "All Semesters" : sem}
            </button>
          ))}

          <span className="text-slate-300 hidden sm:inline">|</span>

          {/* Category Filter */}
          {["All", "Notes", "Question Paper", "Formula Sheet", "Lab Manual"].map(
            (cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  selectedCategory === cat
                    ? "bg-blue-100 text-blue-700 font-semibold border border-blue-300"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>

        {/* Materials Grid */}
        {filteredMaterials.length === 0 ? (
          <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center">
            <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-700">No study materials matched</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try adjusting your search query or switching to another filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedSemester("All");
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 hover:border-blue-300 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between p-5 group"
              >
                <div className="space-y-3">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                      {item.semester}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                  </div>

                  {/* Title & Subject */}
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 mt-1">
                      {item.subject}
                    </p>
                  </div>

                  {/* Meta Specs */}
                  <div className="flex items-center gap-3 text-xs text-slate-500 pt-1">
                    <span className="flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-blue-600" />
                      PDF • {item.pages} Pages
                    </span>
                    <span>•</span>
                    <span>{item.fileSize}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-amber-600">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      {item.rating}
                    </span>
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">{item.downloads}</span> downloads
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onOpenPreview(item)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition"
                      title="Preview details"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenPreview(item)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-2xs transition"
                      title="Download PDF"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
