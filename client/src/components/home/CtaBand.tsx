import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function CtaBand() {
  return (
    <Section className="bg-forest-deep">
      <div className="px-2 text-center text-white sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">Join The Batch</h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-white/70 sm:text-base">
          লাইভ ক্লাস, কি-নোটস ও Q-Bank একসাথে — আপনার পোস্ট-গ্র্যাড যাত্রা এখান থেকে শুরু।
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button href="#inquiry" variant="gold">
            Apply now
          </Button>
          <Button href="#courses" variant="light">
            View courses
          </Button>
        </div>
      </div>
    </Section>
  );
}
