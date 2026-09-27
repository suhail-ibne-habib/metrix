import Image from "next/image";
import { BookOpen, Check, ClipboardCheck, Clock, Phone, Video } from "lucide-react";
import { courseIncludes, type CourseDetail } from "@/data/courseDetails";
import { footer } from "@/data/home";
import { Button } from "@/components/ui/Button";

type CourseSidebarProps = {
  title: string;
  cover: string;
  detail: CourseDetail;
};

export function CourseSidebar({ title, cover, detail }: CourseSidebarProps) {
  const stats = [
    { icon: Clock, label: "Course Duration", value: detail.duration },
    { icon: BookOpen, label: "Total Lecture", value: detail.lectures },
    { icon: ClipboardCheck, label: "Total Exam", value: detail.exams },
    { icon: Video, label: "Live Class", value: detail.liveClasses },
  ];

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)] ring-1 ring-slate-100">
      <div className="relative aspect-square bg-cream">
        <Image
          src={cover}
          alt={title}
          fill
          sizes="(min-width: 1024px) 22rem, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="p-5">
        <dl className="grid grid-cols-2 gap-3">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-xl bg-mint p-3">
              <Icon className="h-4 w-4 text-lime-dark" />
              <dt className="mt-2 text-xs text-slate-500">{label}</dt>
              <dd className="text-base font-bold text-slate-900">{value}</dd>
            </div>
          ))}
        </dl>

        <Button href="/contact" className="mt-5 w-full">
          Enroll now
        </Button>

        <h2 className="mt-6 text-sm font-semibold text-slate-900">This course includes</h2>
        <ul className="mt-3 space-y-2.5">
          {courseIncludes.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-dark" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-xl bg-forest-deep p-4 text-white">
          <p className="text-sm text-white/70">কোর্সটি সম্পর্কে বিস্তারিত জানতে কল করুন</p>
          <a
            href={`tel:${footer.phone.replace(/[\s-]/g, "")}`}
            className="mt-1 flex items-center gap-2 text-lg font-bold hover:text-lime"
          >
            <Phone className="h-4 w-4" />
            {footer.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
