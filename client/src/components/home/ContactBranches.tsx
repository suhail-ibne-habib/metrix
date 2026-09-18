import { MapPin, Phone } from "lucide-react";
import { branches } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactBranches() {
  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Find a centre"
        title="Contact Us"
        subtitle="আপনার কাছের ম্যাট্রিক্স পয়েন্ট সেন্টারে চলে আসুন"
      />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {branches.map((branch) => (
          <article
            key={branch.id}
            className="rounded-2xl border border-slate-100 bg-white p-5"
          >
            <h3 className="text-sm font-semibold text-slate-900">{branch.name}</h3>
            <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-slate-500">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
              {branch.address}
            </p>
            <p className="mt-3 flex items-center gap-2 text-xs text-slate-600">
              <Phone className="h-3.5 w-3.5 text-brand" />
              {branch.phone}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
