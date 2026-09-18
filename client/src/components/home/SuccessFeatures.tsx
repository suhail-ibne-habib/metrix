import {
  BookOpen,
  Headphones,
  MonitorPlay,
  NotebookPen,
  Users,
  Video,
} from "lucide-react";
import { features } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

const icons = {
  live: Video,
  recorded: MonitorPlay,
  notes: BookOpen,
  exams: NotebookPen,
  mentor: Headphones,
  community: Users,
} as const;

const tones = {
  red: "bg-[#fdeceb] text-brand",
  lime: "bg-[#f4f9e8] text-lime-dark",
  purple: "bg-[#f6eef9] text-purple",
  orange: "bg-orange-50 text-orange-600",
  violet: "bg-violet-50 text-violet-600",
  pink: "bg-pink-50 text-pink-600",
} as const;

export function SuccessFeatures() {
  return (
    <Section id="features" className="pt-0">
      <SectionHeading
        eyebrow="Why Matrix Point works"
        title="ম্যাট্রিক্স পয়েন্ট সফলতার কারণ সমূহ"
        subtitle="Your success is our commitment"
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {features.map((feature) => {
          const Icon = icons[feature.id];
          return (
            <article
              key={feature.id}
              className="rounded-2xl border border-slate-100 bg-white px-4 py-5 text-center"
            >
              <span
                className={cn(
                  "mx-auto grid h-12 w-12 place-items-center rounded-2xl",
                  tones[feature.tone],
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 text-sm font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-1 text-xs text-slate-500">{feature.description}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
