import { Star } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  name: string;
  batch: string;
};

export function TestimonialCard({ quote, name, batch }: TestimonialCardProps) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-100">
      <div className="flex gap-1 text-amber-400">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600">“{quote}”</p>
      <div className="mt-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-mint text-xs font-bold text-forest">
          {name
            .split(" ")
            .slice(1, 3)
            .map((part) => part[0])
            .join("")}
        </span>
        <div>
          <p className="text-sm font-semibold text-slate-900">{name}</p>
          <p className="text-xs text-slate-500">{batch}</p>
        </div>
      </div>
    </article>
  );
}
