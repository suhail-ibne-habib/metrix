import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { courseCategories, getCourseCategory } from "@/data/courseDetails";
import { CourseCard } from "@/components/home/CourseCard";
import { Container } from "@/components/ui/Container";

type CategoryPageProps = {
  params: Promise<{ categoryId: string }>;
};

export function generateStaticParams() {
  return courseCategories.map((category) => ({ categoryId: category.id }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { categoryId } = await params;
  const category = getCourseCategory(categoryId);

  return {
    title: category ? `${category.title} Courses | Matrix Point` : "Courses | Matrix Point",
  };
}

export default async function CourseCategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = await params;
  const category = getCourseCategory(categoryId);

  if (!category) {
    notFound();
  }

  return (
    <main className="bg-mint">
      <Container className="py-16 sm:py-20">
        <Link href="/courses" className="text-sm font-medium text-forest hover:text-lime-dark">
          ← All courses
        </Link>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
          {category.title} Courses
        </h1>
        <p className="mt-2 text-sm text-slate-500 sm:text-base">
          {category.badge} · {category.courses.length} courses
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {category.courses.map((course) => (
            <CourseCard
              key={course.id}
              badge={category.badge}
              title={course.title}
              subtitle={course.subtitle}
              cover={category.cover}
              href={`/courses/${category.id}/${course.id}`}
              cta="View course"
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
