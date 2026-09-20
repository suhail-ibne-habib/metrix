import {
  BookOpen,
  Headphones,
  MonitorPlay,
  Video,
} from "lucide-react";
import { features } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = {
  live: Video,
  recorded: MonitorPlay,
  notes: BookOpen,
  mentor: Headphones,
} as const;

export function SuccessFeatures() {
  return (
    <Section id="methods" className="bg-mint">
      <SectionHeading title="Our teaching methods" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = icons[feature.id];
          return (
            <article
              key={feature.id}
              className="rounded-2xl bg-white p-6 text-center shadow-[0_10px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-100"
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-amber-50 text-gold">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
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
