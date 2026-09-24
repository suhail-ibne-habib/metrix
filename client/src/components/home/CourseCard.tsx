import Image from "next/image";
import Link from "next/link";

type CourseCardProps = {
  badge: string;
  title: string;
  points: string[];
  cover: string;
};

export function CourseCard({ badge, title, points, cover }: CourseCardProps) {
  return (
    <Link
      href="/contact"
      className="group flex flex-col rounded-2xl bg-white p-4 shadow-[0_10px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-100 transition-transform hover:-translate-y-1"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-surface">
        <Image
          src={cover}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <p className="mt-4 text-xs font-semibold tracking-wide text-slate-400 uppercase">
        {badge}
      </p>
      <h3 className="mt-1 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{points[0]}</p>
      <span className="mt-4 inline-flex h-9 w-full items-center justify-center rounded-full bg-forest text-sm font-medium text-white group-hover:bg-forest-hover">
        Join Batch
      </span>
    </Link>
  );
}
