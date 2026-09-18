import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

type CourseCardProps = {
  title: string;
  subtitle: string;
  cover: string;
  featured?: boolean;
};

export function CourseCard({ title, subtitle, cover, featured }: CourseCardProps) {
  return (
    <a
      href="#inquiry"
      className={cn(
        "group overflow-hidden rounded-2xl border bg-white transition-all hover:-translate-y-0.5 hover:shadow-md",
        featured
          ? "border-brand shadow-lg shadow-brand/15"
          : "border-slate-100 hover:border-lime/40",
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <Image
          src={cover}
          alt={title}
          fill
          sizes="(min-width: 768px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        {featured ? (
          <span className="absolute top-3 left-3 rounded-full bg-brand px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white uppercase">
            Popular
          </span>
        ) : null}
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand">
          Start now
          <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  );
}
