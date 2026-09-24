import type { YoutubeVideo } from "@/data/videos";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { YoutubeVideoCard } from "./YoutubeVideoCard";

type VideoGridProps = {
  title: string;
  subtitle: string;
  videos: readonly YoutubeVideo[];
  className?: string;
};

export function VideoGrid({ title, subtitle, videos, className }: VideoGridProps) {
  return (
    <Section className={className}>
      <SectionHeading as="h1" title={title} subtitle={subtitle} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {videos.map((video) => (
          <YoutubeVideoCard key={video.id} {...video} />
        ))}
      </div>
    </Section>
  );
}
