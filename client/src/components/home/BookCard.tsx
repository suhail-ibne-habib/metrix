import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type BookCardProps = {
  title: string;
  subtitle: string;
  cover: string;
  href: string;
  cta: string;
  price?: string;
};

const cardClass =
  "flex flex-col rounded-2xl bg-white p-4 shadow-[0_10px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-100";

export function BookCard({
  title,
  subtitle,
  cover,
  href,
  cta,
  price,
}: BookCardProps) {
  const body = (
    <>
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-surface">
        <Image
          src={cover}
          alt={title}
          fill
          sizes="(min-width: 768px) 25vw, 50vw"
          className="object-cover"
        />
      </div>
      <h3 className="mt-4 text-sm font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
      {price ? (
        <p className="mt-3 text-base font-bold text-forest">{price}</p>
      ) : null}
    </>
  );

  if (!price) {
    return (
      <Link href={href} className={cn(cardClass, "transition-transform hover:-translate-y-1")}>
        {body}
        <span className="mt-4 inline-flex h-9 w-full items-center justify-center rounded-full bg-forest text-sm font-medium text-white">
          {cta}
        </span>
      </Link>
    );
  }

  return (
    <article className={cardClass}>
      {body}
      <Button href={href} size="sm" className="mt-4 w-full">
        {cta}
      </Button>
    </article>
  );
}
