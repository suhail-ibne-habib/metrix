import { ArrowRight } from "lucide-react";
import type { ProgramTone } from "@/data/home";
import { cn } from "@/lib/cn";

const tones: Record<ProgramTone, { card: string; badge: string; link: string }> = {
  red: {
    card: "bg-[#fdeceb]",
    badge: "bg-brand text-white",
    link: "text-brand",
  },
  navy: {
    card: "bg-[#eef3fb]",
    badge: "bg-slate-800 text-white",
    link: "text-slate-800",
  },
  purple: {
    card: "bg-[#f6eef9]",
    badge: "bg-purple text-white",
    link: "text-purple",
  },
  pink: {
    card: "bg-[#fdf2f8]",
    badge: "bg-pink-600 text-white",
    link: "text-pink-600",
  },
  teal: {
    card: "bg-[#ecfeff]",
    badge: "bg-teal-600 text-white",
    link: "text-teal-700",
  },
  lime: {
    card: "bg-[#f4f9e8]",
    badge: "bg-lime-dark text-white",
    link: "text-lime-dark",
  },
};

type CourseCardProps = {
  badge: string;
  title: string;
  points: string[];
  tone: ProgramTone;
};

export function CourseCard({ badge, title, points, tone }: CourseCardProps) {
  const colors = tones[tone];

  return (
    <a
      href="#inquiry"
      className={cn(
        "group flex min-h-[240px] flex-col rounded-3xl p-6 transition-transform hover:-translate-y-0.5",
        colors.card,
      )}
    >
      <span
        className={cn(
          "w-fit rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase",
          colors.badge,
        )}
      >
        {badge}
      </span>
      <h3 className="mt-4 text-xl font-bold text-slate-900">{title}</h3>
      <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <span
        className={cn(
          "mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold",
          colors.link,
        )}
      >
        Join Batch
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </a>
  );
}
