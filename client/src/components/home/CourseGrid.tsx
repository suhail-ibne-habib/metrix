import { courses } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CourseCard } from "./CourseCard";

export function CourseGrid() {
  return (
    <Section id="courses" className="bg-slate-50/70">
      <SectionHeading
        eyebrow="Choose your program"
        title="আপনার কাঙ্ক্ষিত কোর্স খুঁজে নিন"
        subtitle="যে লক্ষ্যে এগোচ্ছেন, সেই প্রোগ্রামটি বেছে নিন"
      />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {courses.map(({ id, ...course }) => (
          <CourseCard key={id} {...course} />
        ))}
      </div>
    </Section>
  );
}
