import { Star } from "lucide-react";
import { testimonials } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <Section id="reviews" className="bg-mint">
      <SectionHeading
        title="What our students say about us"
        subtitle="ব্যাচ শেষ করে যাঁরা পরীক্ষায় এগিয়েছেন"
      />
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-100"
          >
            <div className="flex gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">“{item.quote}”</p>
            <div className="mt-5 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-mint text-xs font-bold text-forest">
                {item.name
                  .split(" ")
                  .slice(1, 3)
                  .map((part) => part[0])
                  .join("")}
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                <p className="text-xs text-slate-500">{item.batch}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
