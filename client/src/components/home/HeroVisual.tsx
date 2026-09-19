import Image from "next/image";
import { Play } from "lucide-react";
import { hero } from "@/data/home";

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
      <div className="overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl shadow-slate-200/80">
        <Image
          src="/hero-doctor.jpg"
          alt="Matrix Point faculty"
          width={900}
          height={1100}
          className="aspect-[4/5] w-full object-cover object-[center_20%]"
          priority
        />
      </div>

      <div className="absolute right-3 bottom-6 left-3 flex items-center justify-between gap-3 rounded-2xl bg-white p-4 shadow-lg sm:right-auto sm:bottom-8 sm:-left-6 sm:w-64">
        <div>
          <p className="text-[11px] font-semibold tracking-wide text-brand uppercase">
            {hero.highlight.eyebrow}
          </p>
          <p className="mt-1 text-sm font-bold text-slate-900">
            {hero.highlight.title}
          </p>
          <p className="mt-1 text-xs text-slate-500">{hero.highlight.date}</p>
        </div>
        <a
          href="#inquiry"
          aria-label="Watch batch intro"
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand text-white shadow-md shadow-brand/30"
        >
          <Play className="ml-0.5 h-5 w-5 fill-current" />
        </a>
      </div>
    </div>
  );
}
