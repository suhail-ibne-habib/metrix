import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCourse } from "@/data/courseDetails";
import { programs } from "@/data/home";
import { CourseDetailView } from "@/components/course/CourseDetailView";

type CoursePageProps = {
  params: Promise<{ courseId: string }>;
};

export function generateStaticParams() {
  return programs.map((program) => ({ courseId: program.id }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { courseId } = await params;
  const course = getCourse(courseId);

  return {
    title: course ? `${course.program.title} Batch | Matrix Point` : "Course | Matrix Point",
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { courseId } = await params;
  const course = getCourse(courseId);

  if (!course) {
    notFound();
  }

  return <CourseDetailView program={course.program} detail={course.detail} />;
}
