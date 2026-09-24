import { Check } from "lucide-react";
import { whyPoints } from "@/data/home";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function WhyUs() {
  return (
    <Section id="features" className="bg-sage">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            যে কারণে শিক্ষার্থীরা এগোয়
          </h2>
          <p className="mt-3 text-sm text-slate-500 sm:text-base">
            একটা ব্যাচেই ক্লাস, নোটস, টেস্ট ও মেন্টরশিপ
          </p>
          <ul className="mt-6 space-y-3">
            {whyPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint text-forest">
                  <Check className="h-3 w-3 stroke-[3]" />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-7">
            <Button href="/contact">Join Batch</Button>
          </div>
        </div>

        <aside className="rounded-[1.75rem] bg-forest-deep p-8 text-white sm:p-10">
          <p className="text-sm font-semibold text-lime">Student first</p>
          <h3 className="mt-3 text-2xl font-bold">
            12,000+ doctors prepared with Matrix Point
          </h3>
          <p className="mt-3 text-sm leading-7 text-white/70">
            লাইভ সেশন থেকে রেকর্ডেড লেকচার — ডিউটির ফাঁকেও রিভিশন চালিয়ে যাওয়া যায়।
          </p>
        </aside>
      </div>
    </Section>
  );
}
