import { BookGrid } from "@/components/home/BookGrid";
import { CourseGrid } from "@/components/home/CourseGrid";
import { CtaBand } from "@/components/home/CtaBand";
import { Hero } from "@/components/home/Hero";
import { InquiryForm } from "@/components/home/InquiryForm";
import { PromoBanner } from "@/components/home/PromoBanner";
import { SuccessFeatures } from "@/components/home/SuccessFeatures";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyUs } from "@/components/home/WhyUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <PromoBanner />
      <CourseGrid />
      <BookGrid />
      <SuccessFeatures />
      <WhyUs />
      <Testimonials />
      <CtaBand />
      <InquiryForm />
    </main>
  );
}
