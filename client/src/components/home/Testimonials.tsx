import { testimonials } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "./TestimonialCard";

export function Testimonials() {
  return (
    <Section id="reviews" className="bg-mint">
      <SectionHeading
        title="What our students say about us"
        subtitle="ব্যাচ শেষ করে যাঁরা পরীক্ষায় এগিয়েছেন"
      />
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <TestimonialCard key={item.id} {...item} />
        ))}
      </div>
    </Section>
  );
}
