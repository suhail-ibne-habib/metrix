import { programs } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CourseCard } from "./CourseCard";

type CourseGridProps = {
  headingAs?: "h1" | "h2";
};

export function CourseGrid({ headingAs = "h2" }: CourseGridProps) {
  return (
    <Section id="courses" className="bg-sage">
      <SectionHeading
        as={headingAs}
        title="Our Programs"
        subtitle="প্রোগ্রাম বেছে নিন, তারপর বিষয় দেখুন"
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => (
          <CourseCard
            key={program.id}
            badge={program.badge}
            title={program.title}
            subtitle={program.points.join(" · ")}
            cover={program.cover}
            href={`/courses/${program.id}`}
            cta="View courses"
          />
        ))}
      </div>
    </Section>
  );
}
