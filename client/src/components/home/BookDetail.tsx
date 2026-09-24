import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import type { BookSeries, BookVolume } from "@/data/home";
import { Container } from "@/components/ui/Container";

type BookDetailProps = {
  series: BookSeries;
  volume: BookVolume;
};

export function BookDetail({ series, volume }: BookDetailProps) {
  return (
    <main className="bg-mint">
      <Container className="py-16 sm:py-20">
        <Link
          href={`/books/${series.id}`}
          className="text-sm font-medium text-forest hover:text-lime-dark"
        >
          ← {series.title}
        </Link>

        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,18rem)_1fr]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-cream shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
            <Image
              src={volume.cover}
              alt={volume.title}
              fill
              sizes="(min-width: 1024px) 18rem, 80vw"
              className="object-cover"
              priority
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-lime-dark">{volume.exam}</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              {volume.title}
            </h1>
            <p className="mt-2 text-sm text-slate-500 sm:text-base">{volume.subtitle}</p>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              {volume.description}
            </p>

            <h2 className="mt-8 text-lg font-semibold text-slate-900">What’s inside</h2>
            <ul className="mt-4 space-y-3">
              {volume.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sage text-forest">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </main>
  );
}
