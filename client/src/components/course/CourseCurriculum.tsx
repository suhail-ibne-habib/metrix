import { ChevronDown, PlayCircle } from "lucide-react";
import type { CurriculumModule } from "@/data/courseDetails";

export function CourseCurriculum({ modules }: { modules: CurriculumModule[] }) {
  return (
    <div className="mt-4 divide-y divide-slate-100 overflow-hidden rounded-xl ring-1 ring-slate-100">
      {modules.map((module, index) => (
        <details key={module.title} open={index === 0} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 bg-surface px-4 py-3 text-sm font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
            <span>{module.title}</span>
            <span className="flex shrink-0 items-center gap-2 text-xs font-medium text-slate-500">
              {module.lessons.length} lessons
              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
            </span>
          </summary>
          <ul className="divide-y divide-slate-100 bg-white">
            {module.lessons.map((lesson) => (
              <li key={lesson} className="flex items-center gap-3 px-4 py-3 text-sm text-slate-600">
                <PlayCircle className="h-4 w-4 shrink-0 text-lime-dark" />
                {lesson}
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}
