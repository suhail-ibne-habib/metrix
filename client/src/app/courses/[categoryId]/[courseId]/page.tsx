import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { courseCategories, getCourse } from "@/data/courseDetails";
import { CourseDetailView } from "@/components/course/CourseDetailView";

type CoursePageProps = {
  params: Promise<{ categoryId: string; courseId: string }>;
};

export function generateStaticParams() {
  return courseCategories.flatMap((category) =>
    category.courses.map((course) => ({
      categoryId: category.id,
      courseId: course.id,
    })),
  );
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { categoryId, courseId } = await params;
  const result = getCourse(categoryId, courseId);

  return {
    title: result ? `${result.course.title} | Matrix Point` : "Course | Matrix Point",
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { categoryId, courseId } = await params;
  const result = getCourse(categoryId, courseId);

  if (!result) {
    notFound();
  }

  return <CourseDetailView category={result.category} course={result.course} />;
}
