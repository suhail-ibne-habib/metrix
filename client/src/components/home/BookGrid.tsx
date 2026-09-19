import { books } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookCard } from "./BookCard";

export function BookGrid() {
  return (
    <Section id="books">
      <SectionHeading
        eyebrow="Study pack"
        title="High-Yield Medical Books & Q-Banks"
        subtitle="Zero Hour series, lecture sheets and exam-focused question banks"
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {books.map(({ id, ...book }) => (
          <BookCard key={id} {...book} />
        ))}
      </div>
    </Section>
  );
}
