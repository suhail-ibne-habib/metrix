import { faculty } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const rings = [
  "bg-[#fdeceb] text-brand",
  "bg-[#eef3fb] text-slate-800",
  "bg-[#f6eef9] text-purple",
  "bg-[#f4f9e8] text-lime-dark",
  "bg-[#ecfeff] text-teal-700",
];

export function Faculty() {
  return (
    <Section id="faculty">
      <SectionHeading
        eyebrow="Mentors"
        title="Experienced Medical Faculty"
        subtitle="বিষয়ভিত্তিক গাইডলাইন যারা নিয়মিত ক্লাস ও ভিভা নিচ্ছেন"
      />
      <div className="flex flex-wrap justify-center gap-8 sm:gap-10">
        {faculty.map((person, index) => (
          <article key={person.id} className="w-28 text-center sm:w-32">
            <span
              className={`mx-auto grid h-24 w-24 place-items-center rounded-full text-lg font-bold sm:h-28 sm:w-28 ${rings[index]}`}
            >
              {person.initial}
            </span>
            <h3 className="mt-3 text-sm font-semibold text-slate-900">
              {person.name}
            </h3>
            <p className="mt-1 text-xs text-slate-500">{person.role}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
