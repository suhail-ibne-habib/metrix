import Image from "next/image";
import { Check } from "lucide-react";
import { hero } from "@/data/home";

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md pb-16 lg:max-w-lg">
      <div className="rounded-[1.75rem] bg-cream p-4 shadow-[0_24px_60px_-24px_rgba(16,52,40,0.35)] sm:p-5">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/hero-doctor.jpg"
            alt="Matrix Point faculty"
            width={900}
            height={1100}
            className="aspect-[4/3] w-full object-cover object-[center_20%]"
            priority
          />
        </div>
        <div className="mt-4 rounded-2xl bg-white p-4">
          <p className="text-[11px] font-semibold tracking-wide text-lime-dark uppercase">
            {hero.highlight.eyebrow}
          </p>
          <p className="mt-1 text-sm font-bold text-slate-900">
            {hero.highlight.title}
          </p>
          <p className="mt-1 text-xs text-slate-500">{hero.highlight.date}</p>
        </div>
      </div>

      <div className="absolute right-0 -bottom-2 w-[85%] rounded-2xl bg-forest-deep p-5 text-white shadow-[0_20px_50px_-16px_rgba(14,42,34,0.55)] sm:right-[-1.25rem] sm:w-64">
        <p className="text-sm font-semibold">What’s included</p>
        <ul className="mt-3 space-y-2.5">
          {hero.highlight.points.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-white/85">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-lime text-forest">
                <Check className="h-3 w-3 stroke-[3]" />
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
