import { BookGrid } from "@/components/home/BookGrid";
import { CourseGrid } from "@/components/home/CourseGrid";
import { Faculty } from "@/components/home/Faculty";
import { Hero } from "@/components/home/Hero";
import { InquiryForm } from "@/components/home/InquiryForm";
import { SuccessFeatures } from "@/components/home/SuccessFeatures";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <CourseGrid />
      <BookGrid />
      <SuccessFeatures />
      <Faculty />
      <Testimonials />
      <InquiryForm />
    </main>
  );
}
