"use client";

import { FormEvent, useState } from "react";
import { courses } from "@/data/home";
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
    <Section id="inquiry" className="bg-slate-50/70">
      <SectionHeading
        eyebrow="Have a question?"
        title="ম্যাট্রিক্স পয়েন্ট সম্পর্কে জানতে চান"
        subtitle="ফর্মটি পূরণ করুন, আমরা দ্রুত আপনার সাথে যোগাযোগ করব"
      />

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-xl space-y-3 rounded-3xl border border-slate-100 bg-white p-6 sm:p-8"
      >
        {submitted ? (
          <p className="rounded-2xl bg-emerald-50 px-4 py-6 text-center text-sm text-emerald-700">
            ধন্যবাদ। আপনার অনুরোধটি গ্রহণ করা হয়েছে। শিগগিরই যোগাযোগ করা হবে।
          </p>
        ) : (
          <>
            <input
              name="name"
              required
              placeholder="পূর্ণ নাম / Full name"
              className={fieldClass}
            />
            <input
              name="phone"
              required
              type="tel"
              placeholder="মোবাইল নম্বর / Phone"
              className={fieldClass}
            />
            <input
              name="email"
              type="email"
              placeholder="ইমেইল / Email"
              className={fieldClass}
            />
            <select name="course" required defaultValue="" className={fieldClass}>
              <option value="" disabled>
                কোর্স / বিষয় বেছে নিন
              </option>
              {courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.title}
                </option>
              ))}
            </select>
            <textarea
              name="message"
              rows={4}
              placeholder="আপনার প্রশ্ন লিখুন / Your message"
              className={`${fieldClass} resize-none`}
            />
            <div className="pt-2 text-center">
              <Button type="submit" size="lg" className="min-w-40">
                Submit now
              </Button>
            </div>
          </>
        )}
      </form>
    </Section>
  );
}
