import { Star } from "lucide-react";
import { testimonials } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <Section id="reviews" className="bg-[#f7f8fb]">
      <SectionHeading
        eyebrow="Student stories"
        title="যাঁরা পথটা আগে হেঁটেছেন"
        subtitle="ব্যাচ শেষ করে যাঁরা পরীক্ষায় এগিয়েছেন"
      />
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.id}
            className="rounded-3xl border border-slate-100 bg-white p-6"
          >
            <div className="flex gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">“{item.quote}”</p>
            <p className="mt-5 text-sm font-semibold text-slate-900">{item.name}</p>
            <p className="mt-1 text-xs text-slate-500">{item.batch}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
