import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function PromoBanner() {
  return (
    <Section className="bg-cream">
      <div className="rounded-[1.75rem] bg-linear-to-r from-lime/25 via-mint to-sage px-6 py-10 text-center ring-1 ring-lime/20 sm:px-10">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          New Batch Open?
        </h2>
        <p className="mt-2 text-sm text-slate-500 sm:text-base">
          FCPS Part-I, Residency ও ডিপ্লোমা — এখনই জয়েন করুন
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href="#inquiry">Join Batch</Button>
          <Button href="#inquiry" variant="gold">
            Get Counseling
          </Button>
        </div>
      </div>
    </Section>
  );
}
