"use client";

import { Wifi, BatteryMedium, Signal } from "lucide-react";

export default function MobileStatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pt-3 pb-2 text-xs font-semibold text-slate-800 select-none">
      <span>9:41</span>
      <div className="w-20 h-4 bg-slate-900 rounded-full mx-auto hidden sm:block opacity-10" />
      <div className="flex items-center gap-1.5 text-slate-700">
        <Signal className="w-3.5 h-3.5" />
        <Wifi className="w-3.5 h-3.5" />
        <BatteryMedium className="w-4 h-4" />
      </div>
    </div>
  );
}
