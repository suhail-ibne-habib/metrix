import { ContactBranches } from "@/components/home/ContactBranches";
import { CourseGrid } from "@/components/home/CourseGrid";
import { Hero } from "@/components/home/Hero";
import { InquiryForm } from "@/components/home/InquiryForm";
import { PromoBanners } from "@/components/home/PromoBanners";
import { SuccessFeatures } from "@/components/home/SuccessFeatures";

export default function Home() {
  return (
    <main>
      <Hero />
      <CourseGrid />
      <PromoBanners />
      <SuccessFeatures />
      <InquiryForm />
      <ContactBranches />
    </main>
  );
}
