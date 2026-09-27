"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type CourseTab = {
  id: string;
  label: string;
  content: ReactNode;
};

export function CourseTabs({ tabs }: { tabs: CourseTab[] }) {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  return (
    <div>
      <div
        role="tablist"
        className="flex gap-1 overflow-x-auto rounded-2xl bg-white p-1.5 shadow-[0_10px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-100"
      >
        {tabs.map((tab) => {
          const selected = tab.id === active.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActiveId(tab.id)}
              className={cn(
                "h-10 flex-1 rounded-xl px-4 text-sm font-medium whitespace-nowrap transition-colors",
                selected
                  ? "bg-forest text-white"
                  : "text-slate-600 hover:bg-mint hover:text-forest",
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div role="tabpanel" className="mt-6">
        {active.content}
      </div>
    </div>
  );
}
