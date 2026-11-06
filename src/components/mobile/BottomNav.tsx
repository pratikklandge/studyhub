"use client";

import { Home, BookOpen, Bookmark, User } from "lucide-react";

export type NavTab = "home" | "subjects" | "saved" | "profile";

interface BottomNavProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

export default function BottomNav({ currentTab, onSelectTab }: BottomNavProps) {
  const tabs = [
    { id: "home" as NavTab, label: "Home", icon: Home },
    { id: "subjects" as NavTab, label: "Subjects", icon: BookOpen },
    { id: "saved" as NavTab, label: "Resources", icon: Bookmark },
    { id: "profile" as NavTab, label: "Profile", icon: User },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-t border-slate-200 px-6 py-2.5 flex items-center justify-around select-none">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = currentTab === tab.id;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelectTab(tab.id)}
            className={`flex flex-col items-center gap-1 transition-all py-1 px-3 rounded-xl cursor-pointer ${
              isActive
                ? "text-blue-600 font-bold scale-105"
                : "text-slate-400 hover:text-slate-600 font-medium"
            }`}
          >
            <div
              className={`p-1 rounded-lg ${
                isActive ? "bg-blue-50 text-blue-600" : ""
              }`}
            >
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-[10px] tracking-tight">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
