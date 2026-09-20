import {
  Baby,
  HeartPulse,
  Scan,
  Scissors,
  Stethoscope,
  Syringe,
} from "lucide-react";
import type { ProgramTone } from "@/data/home";
import { cn } from "@/lib/cn";

const tones: Record<ProgramTone, string> = {
  red: "bg-red-50 text-brand",
  navy: "bg-sky-50 text-sky-700",
  purple: "bg-purple-50 text-purple",
  pink: "bg-rose-50 text-rose-600",
  teal: "bg-teal-50 text-teal-700",
  lime: "bg-lime-50 text-lime-dark",
};

const icons = {
  medicine: Stethoscope,
  surgery: Scissors,
  radiology: Scan,
  gynae: HeartPulse,
  paediatrics: Baby,
  anaesthesia: Syringe,
};

type CourseCardProps = {
  id: string;
  badge: string;
  title: string;
  points: string[];
  tone: ProgramTone;
};

export function CourseCard({ id, badge, title, points, tone }: CourseCardProps) {
  const Icon = icons[id as keyof typeof icons] ?? Stethoscope;

  return (
    <a
      href="#inquiry"
      className="group rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-100 transition-transform hover:-translate-y-1"
    >
      <span
        className={cn(
          "grid h-11 w-11 place-items-center rounded-xl",
          tones[tone],
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <p className="mt-4 text-xs font-semibold tracking-wide text-slate-400 uppercase">
        {badge}
      </p>
      <h3 className="mt-1 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{points[0]}</p>
      <span className="mt-4 inline-flex text-sm font-semibold text-forest group-hover:text-lime-dark">
        Join Batch →
      </span>
    </a>
  );
}
