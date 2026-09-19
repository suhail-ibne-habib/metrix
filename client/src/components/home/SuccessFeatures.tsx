import {
  BookOpen,
  Headphones,
  MonitorPlay,
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
  mentor: Headphones,
} as const;

const tones = {
  red: "bg-[#fdeceb] text-brand",
  lime: "bg-[#f4f9e8] text-lime-dark",
  purple: "bg-[#f6eef9] text-purple",
  teal: "bg-[#ecfeff] text-teal-700",
} as const;

export function SuccessFeatures() {
  return (
    <Section id="features" className="bg-[#f7f8fb]">
      <SectionHeading
        eyebrow="Why it works"
        title="যে কারণে শিক্ষার্থীরা এগোয়"
        subtitle="একটা ব্যাচেই ক্লাস, নোটস, টেস্ট ও মেন্টরশিপ"
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = icons[feature.id];
          return (
            <article
              key={feature.id}
              className="rounded-3xl border border-slate-100 bg-white p-6"
            >
              <span
                className={cn(
                  "grid h-12 w-12 place-items-center rounded-2xl",
                  tones[feature.tone],
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {feature.description}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
