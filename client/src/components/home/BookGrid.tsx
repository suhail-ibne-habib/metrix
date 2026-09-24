import { bookSeries } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookCard } from "./BookCard";

type BookGridProps = {
  headingAs?: "h1" | "h2";
};

export function BookGrid({ headingAs = "h2" }: BookGridProps) {
  return (
    <Section id="books" className="bg-cream">
      <SectionHeading
        as={headingAs}
        title="High-yield books & Q-banks"
        subtitle="Each title is a series — open it to see every volume"
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {bookSeries.map((series) => (
          <BookCard
            key={series.id}
            title={series.title}
            subtitle={series.subtitle}
            cover={series.cover}
            href={`/books/${series.id}`}
            cta="View series"
          />
        ))}
      </div>
    </Section>
  );
}
