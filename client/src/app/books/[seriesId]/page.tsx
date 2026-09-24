import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { bookSeries, getBookSeries } from "@/data/home";
import { BookCard } from "@/components/home/BookCard";
import { Container } from "@/components/ui/Container";

type SeriesPageProps = {
  params: Promise<{ seriesId: string }>;
};

export function generateStaticParams() {
  return bookSeries.map((series) => ({ seriesId: series.id }));
}

export async function generateMetadata({
  params,
}: SeriesPageProps): Promise<Metadata> {
  const { seriesId } = await params;
  const series = getBookSeries(seriesId);

  return {
    title: series
      ? `${series.title} | Matrix Point`
      : "Book series | Matrix Point",
  };
}

export default async function BookSeriesPage({ params }: SeriesPageProps) {
  const { seriesId } = await params;
  const series = getBookSeries(seriesId);

  if (!series) {
    notFound();
  }

  return (
    <main className="bg-mint">
      <Container className="py-16 sm:py-20">
        <Link
          href="/books"
          className="text-sm font-medium text-forest hover:text-lime-dark"
        >
          ← All series
        </Link>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
          {series.title}
        </h1>
        <p className="mt-2 text-sm text-slate-500 sm:text-base">{series.subtitle}</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {series.volumes.map((volume) => (
            <BookCard
              key={volume.id}
              title={volume.title}
              subtitle={volume.subtitle}
              cover={volume.cover}
              href={`/books/${series.id}/${volume.id}`}
              cta="View details"
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
