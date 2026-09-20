import { programs } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CourseCard } from "./CourseCard";

export function CourseGrid() {
  return (
    <Section id="courses" className="bg-sage">
      <SectionHeading
        title="We provide batches for"
        subtitle="বিষয় বেছে নিন, ব্যাচে জয়েন করুন"
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => (
          <CourseCard key={program.id} {...program} />
        ))}
      </div>
    </Section>
  );
}
