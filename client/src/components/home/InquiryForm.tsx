"use client";

import { FormEvent, useState } from "react";
import { programs } from "@/data/home";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const fieldClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-shadow placeholder:text-slate-400 focus:border-brand/40 focus:shadow-[0_0_0_4px_rgba(236,19,14,0.08)]";

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section id="inquiry">
      <SectionHeading
        eyebrow="Get in touch"
        title="যোগাযোগ করুন"
        subtitle="ব্যাচ, বই বা কাউন্সেলিং নিয়ে জানতে ফর্মটি পূরণ করুন"
      />

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-3xl rounded-3xl border border-slate-100 bg-white p-6 sm:p-8"
      >
        {submitted ? (
          <p className="rounded-2xl bg-emerald-50 px-4 py-6 text-center text-sm text-emerald-700">
            ধন্যবাদ। আপনার অনুরোধটি গ্রহণ করা হয়েছে। শিগগিরই যোগাযোগ করা হবে।
          </p>
        ) : (
          <>
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                name="name"
                required
                placeholder="পূর্ণ নাম / Full name"
                className={fieldClass}
              />
              <input
                name="email"
                type="email"
                placeholder="ইমেইল / Email"
                className={fieldClass}
              />
              <input
                name="phone"
                required
                type="tel"
                placeholder="মোবাইল নম্বর / Phone"
                className={fieldClass}
              />
              <select name="course" required defaultValue="" className={fieldClass}>
                <option value="" disabled>
                  ব্যাচ / কোর্স বেছে নিন
                </option>
                {programs.map((program) => (
                  <option key={program.id} value={program.id}>
                    {program.title}
                  </option>
                ))}
              </select>
              <input
                name="city"
                placeholder="শহর / City"
                className={fieldClass}
              />
              <input
                name="batch"
                placeholder="বর্তমান স্ট্যাটাস / MBBS, Intern..."
                className={fieldClass}
              />
              <textarea
                name="message"
                rows={4}
                placeholder="আপনার প্রশ্ন লিখুন / Your message"
                className={`${fieldClass} resize-none sm:col-span-2`}
              />
            </div>
            <div className="pt-5">
              <Button type="submit" size="lg">
                Submit now
              </Button>
            </div>
          </>
        )}
      </form>
    </Section>
  );
}
