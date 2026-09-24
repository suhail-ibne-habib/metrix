import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { bookSeries, getBookVolume } from "@/data/home";
import { BookDetail } from "@/components/home/BookDetail";

type VolumePageProps = {
  params: Promise<{ seriesId: string; volumeId: string }>;
};

export function generateStaticParams() {
  return bookSeries.flatMap((series) =>
    series.volumes.map((volume) => ({
      seriesId: series.id,
      volumeId: volume.id,
    })),
  );
}

export async function generateMetadata({
  params,
}: VolumePageProps): Promise<Metadata> {
  const { seriesId, volumeId } = await params;
  const result = getBookVolume(seriesId, volumeId);

  return {
    title: result
      ? `${result.volume.title} | Matrix Point`
      : "Book | Matrix Point",
  };
}

export default async function BookVolumePage({ params }: VolumePageProps) {
  const { seriesId, volumeId } = await params;
  const result = getBookVolume(seriesId, volumeId);

  if (!result) {
    notFound();
  }

  return <BookDetail series={result.series} volume={result.volume} />;
}
