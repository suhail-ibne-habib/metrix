import type { Metadata } from "next";
import { CourseGrid } from "@/components/home/CourseGrid";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata: Metadata = {
  title: "Course | Matrix Point",
};

export default function CoursesPage() {
  return (
    <main>
      <CourseGrid headingAs="h1" />
      <CtaBand />
    </main>
  );
}
