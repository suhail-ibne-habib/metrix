import {
  BookMarked,
  CalendarDays,
  MessagesSquare,
  UserRoundPlus,
} from "lucide-react";
import { promoBanners } from "@/data/home";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

const tones = {
  lime: "bg-[#f4f9e8]",
  red: "bg-[#fdeceb]",
  purple: "bg-[#f6eef9]",
  peach: "bg-orange-50",
} as const;

const icons = {
  davidson: CalendarDays,
  bailey: UserRoundPlus,
  digest: MessagesSquare,
  sba: BookMarked,
} as const;

export function PromoBanners() {
  return (
    <Section>
      <div className="grid gap-4 md:grid-cols-2">
        {promoBanners.map((banner) => {
          const Icon = icons[banner.id];
          return (
            <article
              key={banner.id}
              className={cn(
                "flex items-center justify-between gap-4 overflow-hidden rounded-3xl p-6 sm:p-7",
                tones[banner.tone],
              )}
            >
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  {banner.eyebrow}
                </p>
                <h3 className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">
                  {banner.title}
                </h3>
                <p className="mt-1.5 max-w-sm text-sm text-slate-500">
                  {banner.description}
                </p>
                <Button href="#inquiry" size="sm" className="mt-5">
                  {banner.cta}
                </Button>
              </div>
              <span className="hidden h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white/70 text-purple sm:grid">
                <Icon className="h-7 w-7" />
              </span>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
