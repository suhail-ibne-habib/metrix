import Link from "next/link";
import { Check } from "lucide-react";
import { courseInstructors, type Course, type CourseCategory } from "@/data/courseDetails";
import { testimonials } from "@/data/home";
import { TestimonialCard } from "@/components/home/TestimonialCard";
import { Container } from "@/components/ui/Container";
import { CourseCurriculum } from "./CourseCurriculum";
import { CourseSidebar } from "./CourseSidebar";
import { CourseTabs } from "./CourseTabs";

type CourseDetailViewProps = {
  category: CourseCategory;
  course: Course;
};

const panelClass =
  "rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-100";

export function CourseDetailView({ category, course }: CourseDetailViewProps) {
  const { detail } = course;
  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <div className="space-y-6">
          <article className={panelClass}>
            <h2 className="text-lg font-semibold text-slate-900">Description</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{detail.overview}</p>
            <h3 className="mt-6 text-sm font-semibold text-slate-900">যা যা থাকছে এই ব্যাচে</h3>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {detail.outcomes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sage text-forest">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className={panelClass}>
            <h2 className="text-lg font-semibold text-slate-900">কোর্সের পরিপূর্ণ কারিকুলাম</h2>
            <CourseCurriculum modules={detail.curriculum} />
          </article>
        </div>
      ),
    },
    {
      id: "instructor",
      label: "Instructor",
      content: (
        <div className="grid gap-4 sm:grid-cols-2">
          {courseInstructors.map((instructor) => (
            <article key={instructor.name} className={`${panelClass} flex items-center gap-4`}>
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-mint text-base font-bold text-forest">
                {instructor.name
                  .split(" ")
                  .slice(1, 3)
                  .map((part) => part[0])
                  .join("")}
              </span>
              <div>
                <p className="font-semibold text-slate-900">{instructor.name}</p>
                <p className="mt-0.5 text-sm text-slate-500">{instructor.role}</p>
              </div>
            </article>
          ))}
        </div>
      ),
    },
    {
      id: "routine",
      label: "Routine",
      content: (
        <div className={`${panelClass} overflow-x-auto p-0`}>
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead className="bg-surface text-xs font-semibold text-slate-500 uppercase">
              <tr>
                {["SL", "Topic", "Date", "Day", "Time"].map((heading) => (
                  <th key={heading} className="px-4 py-3">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-slate-500">
                  রুটিন ব্যাচ শুরুর আগে প্রকাশ করা হবে। বিস্তারিত জানতে কল করুন।
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      id: "review",
      label: "Review",
      content: (
        <div className="grid gap-5 sm:grid-cols-2">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        </div>
      ),
    },
  ];

  return (
    <main className="bg-mint">
      <Container className="py-16 sm:py-20">
        <Link
          href={`/courses/${category.id}`}
          className="text-sm font-medium text-forest hover:text-lime-dark"
        >
          ← {category.title} Courses
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:grid-rows-[auto_1fr] lg:gap-x-10">
          <header className="lg:col-start-1">
            <p className="text-sm font-semibold text-lime-dark">{category.badge}</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {course.title}
            </h1>
            <p className="mt-3 text-sm text-slate-500 sm:text-base">{course.subtitle}</p>
          </header>

          <aside className="lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start">
            <CourseSidebar title={course.title} cover={category.cover} detail={detail} />
          </aside>

          <div className="min-w-0 lg:col-start-1">
            <CourseTabs tabs={tabs} />
          </div>
        </div>
      </Container>
    </main>
  );
}
