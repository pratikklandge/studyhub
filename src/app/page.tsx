"use client";

import { useState } from "react";
import MobileStatusBar from "@/components/mobile/MobileStatusBar";
import WelcomeScreen from "@/components/mobile/WelcomeScreen";
import LoginScreen from "@/components/mobile/LoginScreen";
import SelectStandardScreen from "@/components/mobile/SelectStandardScreen";
import SelectYearScreen from "@/components/mobile/SelectYearScreen";
import SubjectsScreen from "@/components/mobile/SubjectsScreen";
import SubjectDetailScreen, { SubjectInfo } from "@/components/mobile/SubjectDetailScreen";
import BottomNav, { NavTab } from "@/components/mobile/BottomNav";
import ResourcesTab from "@/components/mobile/ResourcesTab";
import ProfileTab from "@/components/mobile/ProfileTab";
import { Smartphone, Monitor } from "lucide-react";

export type ScreenState =
  | "welcome"
  | "login"
  | "select-standard"
  | "select-year"
  | "subjects"
  | "subject-detail";

export default function Home() {
  // Screen state management for the user flow
  const [currentScreen, setCurrentScreen] = useState<ScreenState>("welcome");
  const [userEmail, setUserEmail] = useState<string>("student@diploma.edu");
  const [selectedStandard, setSelectedStandard] = useState<string>("Diploma");
  const [selectedYear, setSelectedYear] = useState<string>("1st Year");
  const [selectedSubject, setSelectedSubject] = useState<SubjectInfo | null>(null);

  // Active Bottom Nav Tab (available inside subjects / resources / profile)
  const [currentTab, setCurrentTab] = useState<NavTab>("subjects");

  // Desktop presentation toggle (Mobile Device Frame vs Full Browser)
  const [isFramedView, setIsFramedView] = useState<boolean>(true);

  // Navigation handlers
  const handleGetStarted = () => {
    setCurrentScreen("login");
  };

  const handleLoginSuccess = (email: string) => {
    setUserEmail(email);
    setCurrentScreen("select-standard");
  };

  const handleSelectStandard = (standard: "11th" | "12th" | "Diploma") => {
    setSelectedStandard(standard);
    if (standard === "Diploma") {
      setCurrentScreen("select-year");
    }
  };

  const handleSelectYear = (year: "1st Year" | "2nd Year" | "3rd Year") => {
    setSelectedYear(year);
    if (year === "1st Year") {
      setCurrentScreen("subjects");
      setCurrentTab("subjects");
    }
  };

  const handleSelectSubject = (subject: SubjectInfo) => {
    setSelectedSubject(subject);
    setCurrentScreen("subject-detail");
  };

  const handleTabChange = (tab: NavTab) => {
    setCurrentTab(tab);
    if (tab === "home") {
      setCurrentScreen("select-standard");
    } else if (tab === "subjects") {
      setCurrentScreen("subjects");
    }
  };

  const handleLogout = () => {
    setCurrentScreen("welcome");
    setCurrentTab("subjects");
    setSelectedSubject(null);
  };

  // Determine whether to display the bottom navigation bar
  const showBottomNav =
    currentScreen === "subjects" ||
    (currentScreen === "select-standard" && currentTab === "profile") ||
    (currentScreen === "select-year" && currentTab === "profile");

  return (
    <div className="min-h-screen bg-slate-900 sm:bg-slate-950 flex flex-col items-center justify-center p-0 sm:p-6 transition-colors duration-300">
      {/* Desktop Frame Switcher Toolbar (Helpful for reviewing both mobile frame & widescreen) */}
      <header className="hidden sm:flex items-center justify-between w-full max-w-md mb-3 px-2 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-slate-300">STUDYHUB Mobile App</span>
        </div>
        <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg border border-slate-700">
          <button
            type="button"
            onClick={() => setIsFramedView(true)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition cursor-pointer ${
              isFramedView
                ? "bg-blue-600 text-white shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Smartphone className="w-3 h-3" />
            <span>Mobile App View</span>
          </button>
          <button
            type="button"
            onClick={() => setIsFramedView(false)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition cursor-pointer ${
              !isFramedView
                ? "bg-blue-600 text-white shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Monitor className="w-3 h-3" />
            <span>Expanded</span>
          </button>
        </div>
      </header>

      {/* Mobile Device Container */}
      <div
        className={`w-full bg-slate-50 flex flex-col justify-between overflow-hidden transition-all duration-300 ${
          isFramedView
            ? "sm:max-w-[420px] sm:min-h-[780px] sm:max-h-[880px] sm:rounded-[2.5rem] sm:border-8 sm:border-slate-800 sm:shadow-2xl sm:shadow-blue-500/10 min-h-screen"
            : "max-w-2xl min-h-screen sm:min-h-[820px] sm:rounded-3xl sm:border border-slate-700 shadow-2xl"
        }`}
      >
        {/* Mobile Device Status Bar */}
        <MobileStatusBar />

        {/* Dynamic Screen Container */}
        <main className="flex-1 flex flex-col overflow-y-auto">
          {/* TAB: Resources Tab */}
          {currentTab === "saved" && showBottomNav ? (
            <ResourcesTab onSelectSubject={handleSelectSubject} />
          ) : currentTab === "profile" && showBottomNav ? (
            /* TAB: Profile Tab */
            <ProfileTab
              userEmail={userEmail}
              onLogout={handleLogout}
              onSwitchStandard={() => {
                setCurrentScreen("select-standard");
                setCurrentTab("subjects");
              }}
            />
          ) : (
            /* FLOW SCREENS 1 TO 5 */
            <>
              {/* SCREEN 1: WELCOME */}
              {currentScreen === "welcome" && (
                <WelcomeScreen onGetStarted={handleGetStarted} />
              )}

              {/* SCREEN 2: USER LOGIN */}
              {currentScreen === "login" && (
                <LoginScreen
                  onBack={() => setCurrentScreen("welcome")}
                  onLoginSuccess={handleLoginSuccess}
                />
              )}

              {/* SCREEN 3: SELECT STANDARD */}
              {currentScreen === "select-standard" && (
                <SelectStandardScreen
                  onBack={() => setCurrentScreen("login")}
                  onSelectStandard={handleSelectStandard}
                />
              )}

              {/* SCREEN 4: DIPLOMA YEAR */}
              {currentScreen === "select-year" && (
                <SelectYearScreen
                  onBack={() => setCurrentScreen("select-standard")}
                  onSelectYear={handleSelectYear}
                />
              )}

              {/* SCREEN 5: DIPLOMA 1ST YEAR SUBJECTS */}
              {currentScreen === "subjects" && (
                <SubjectsScreen
                  onBack={() => setCurrentScreen("select-year")}
                  onSelectSubject={handleSelectSubject}
                />
              )}

              {/* SUBJECT DETAIL SCREEN (Interactive detail view for each subject) */}
              {currentScreen === "subject-detail" && selectedSubject && (
                <SubjectDetailScreen
                  subject={selectedSubject}
                  onBack={() => setCurrentScreen("subjects")}
                />
              )}
            </>
          )}
        </main>

        {/* BOTTOM NAVIGATION: Available on appropriate screens */}
        {showBottomNav && (
          <BottomNav currentTab={currentTab} onSelectTab={handleTabChange} />
        )}
      </div>
    </div>
  );
}
