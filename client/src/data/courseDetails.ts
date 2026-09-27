import { programs } from "./home";

export type CurriculumModule = {
  title: string;
  lessons: string[];
};

export type CourseDetail = {
  duration: string;
  lectures: number;
  exams: number;
  liveClasses: number;
  overview: string;
  outcomes: string[];
  curriculum: CurriculumModule[];
};

export const courseIncludes = [
  "Live classes with recorded replay",
  "Access on mobile, tablet and computer",
  "Weekly model tests with solve class",
  "Lecture sheets and key notes",
  "Mentor support throughout the batch",
];

export const courseInstructors = [
  { name: "Dr. Shahadat Jewel", role: "Lead Mentor, Matrix Point" },
];

export type Course = {
  id: string;
  title: string;
  subtitle: string;
  detail: CourseDetail;
};

export type CourseCategory = {
  id: string;
  badge: string;
  title: string;
  cover: string;
  courses: Course[];
};

const baseDetails: Record<string, CourseDetail> = {
  medicine: {
    duration: "6 Months",
    lectures: 60,
    exams: 48,
    liveClasses: 60,
    overview:
      "FCPS Part-I Medicine ব্যাচে লাইভ ক্লাস, রেকর্ডেড রিভিশন আর সাপ্তাহিক মডেল টেস্ট একসাথে। Davidson-ভিত্তিক সিলেবাস ধরে প্রতিটি সিস্টেম শেষ করে Previous Question Solve Class দিয়ে রিকল পাকা করা হয়।",
    outcomes: [
      "System-wise live classes from Davidson",
      "Previous question solve class every week",
      "SBA and MCQ drill with explanations",
      "Final mock tests in exam pattern",
    ],
    curriculum: [
      {
        title: "Fundamentals of Medicine",
        lessons: ["Immunology, HIV & STI", "Genetics, psychiatry & poisoning", "Clinical biochemistry"],
      },
      {
        title: "Cardio-Respiratory",
        lessons: ["Cardiology", "Respiratory medicine", "Previous question solve"],
      },
      {
        title: "GI, Renal & Endocrine",
        lessons: ["Gastroenterology", "Nephrology", "Endocrine & diabetes"],
      },
      {
        title: "Neuro, Haematology & Infection",
        lessons: ["Neurology", "Haematology & acute medicine", "Infectious disease", "Rheumatology"],
      },
    ],
  },
  surgery: {
    duration: "6 Months",
    lectures: 55,
    exams: 44,
    liveClasses: 55,
    overview:
      "FCPS Part-I Surgery ব্যাচে Bailey & Love's ধরে সার্জিক্যাল প্রিন্সিপল থেকে সিস্টেম-ভিত্তিক টপিক পর্যন্ত পড়ানো হয়। লং ও শর্ট কেস আর OSPE প্রস্তুতি আলাদা সেশনে থাকে।",
    outcomes: [
      "Bailey-focused lectures, topic by topic",
      "Long and short case preparation",
      "OSPE revision sessions",
      "Clinical surgery class test solve",
    ],
    curriculum: [
      {
        title: "Principles of Surgery",
        lessons: ["Wound healing & surgical infection", "Trauma & resuscitation", "Fluid & nutrition"],
      },
      {
        title: "GI & Hepatobiliary",
        lessons: ["Oesophagus & stomach", "Hepatobiliary & pancreas", "Colorectal surgery"],
      },
      {
        title: "Head, Neck & Endocrine",
        lessons: ["Thyroid & parathyroid", "Breast", "Eye, ENT & neurosurgery basics"],
      },
      {
        title: "Clinical & OSPE",
        lessons: ["Long case approach", "Short case & spotting", "OSPE revision"],
      },
    ],
  },
  radiology: {
    duration: "5 Months",
    lectures: 45,
    exams: 36,
    liveClasses: 45,
    overview:
      "FCPS / MD Radiology ব্যাচে ইমেজিং ফিজিক্স থেকে শুরু করে প্রতিটি মোডালিটির স্পট ডায়াগনসিস প্র্যাকটিস করানো হয়। লিখিত ও ভাইভা — দুই ট্র্যাকের প্রস্তুতি একসাথে।",
    outcomes: [
      "Imaging Q-bank practice",
      "Spot diagnosis drills every week",
      "Written plus viva track",
      "Case-based image discussion",
    ],
    curriculum: [
      {
        title: "Physics & Safety",
        lessons: ["Radiation physics", "Radiation protection", "Contrast agents"],
      },
      {
        title: "Plain Film & Ultrasound",
        lessons: ["Chest & abdominal X-ray", "Musculoskeletal films", "Ultrasound basics"],
      },
      {
        title: "CT & MRI",
        lessons: ["CT head & body", "MRI principles", "Neuro imaging"],
      },
      {
        title: "Spot Diagnosis",
        lessons: ["Image quiz sessions", "Viva practice", "Final revision"],
      },
    ],
  },
  gynae: {
    duration: "6 Months",
    lectures: 50,
    exams: 40,
    liveClasses: 50,
    overview:
      "FCPS Part-I Gynae & Obs ব্যাচে DC Dutta-ভিত্তিক নোট, SBA ও রিকল ক্লাস থাকে। গাইনি আর অবস — দুই অংশের কি-কনসেপ্ট সামারি ক্লাস দিয়ে রিভিশন করানো হয়।",
    outcomes: [
      "Dutta-based notes and key concepts",
      "SBA and recall classes",
      "Class summary revision sessions",
      "Residency guidance",
    ],
    curriculum: [
      {
        title: "Gynaecology Key Concepts",
        lessons: ["Anatomy & embryology", "Menstrual disorders", "Infertility & endocrinology"],
      },
      {
        title: "Obstetrics",
        lessons: ["Normal pregnancy & labour", "Antenatal complications", "Postpartum problems"],
      },
      {
        title: "Oncology & Surgery",
        lessons: ["Gynae oncology", "Operative gynaecology", "Endocrine surgery overlap"],
      },
      {
        title: "Revision",
        lessons: ["Class summary sessions", "Recall SBA drill", "Final mock tests"],
      },
    ],
  },
  paediatrics: {
    duration: "5 Months",
    lectures: 45,
    exams: 36,
    liveClasses: 45,
    overview:
      "FCPS Part-I Paediatrics ব্যাচে হাই-ইল্ড টপিক, কেস ডিসকাশন আর এক্সাম-ওরিয়েন্টেড নোট থাকে। প্রতিটি সিস্টেম শেষে মডেল টেস্ট দিয়ে দুর্বল জায়গা ধরা হয়।",
    outcomes: [
      "High-yield topic classes",
      "Case discussion sessions",
      "Exam-oriented notes",
      "Weekly model tests",
    ],
    curriculum: [
      {
        title: "Neonatology",
        lessons: ["Newborn care", "Neonatal jaundice & sepsis", "Prematurity"],
      },
      {
        title: "Growth & Nutrition",
        lessons: ["Growth & development", "Nutrition & malnutrition", "Immunisation"],
      },
      {
        title: "Systemic Paediatrics",
        lessons: ["Respiratory & cardiac", "Renal & neurology", "Haematology"],
      },
      {
        title: "Infection & Revision",
        lessons: ["Paediatric infections", "Case discussion", "Final mock tests"],
      },
    ],
  },
  anaesthesia: {
    duration: "5 Months",
    lectures: 40,
    exams: 32,
    liveClasses: 40,
    overview:
      "FCPS Part-I Anaesthesia ব্যাচে ক্লিনিক্যাল কোয়েশ্চেন ব্যাংক, ফিজিওলজি ও ফার্মাকোলজি এক সাথে পড়ানো হয়। ভাইভা স্টেশনের প্র্যাকটিস আলাদা সেশনে থাকে।",
    outcomes: [
      "Clinical question bank practice",
      "Physiology and pharmacology classes",
      "Viva station practice",
      "Mentor support",
    ],
    curriculum: [
      {
        title: "Applied Physiology",
        lessons: ["Respiratory physiology", "Cardiovascular physiology", "Acid–base & fluids"],
      },
      {
        title: "Pharmacology",
        lessons: ["Induction agents", "Muscle relaxants", "Local anaesthetics"],
      },
      {
        title: "Equipment & Monitoring",
        lessons: ["Anaesthesia machine", "Airway equipment", "Monitoring standards"],
      },
      {
        title: "Clinical Anaesthesia",
        lessons: ["Regional anaesthesia", "Critical care basics", "Viva station practice"],
      },
    ],
  },
};

const courseTypes = [
  {
    id: "live",
    label: "Live Batch",
    subtitle: "Live + recorded classes",
    build: (base: CourseDetail) => base,
  },
  {
    id: "exam",
    label: "Exam Batch",
    subtitle: "Weekly model tests & solve class",
    build: (base: CourseDetail, title: string): CourseDetail => ({
      ...base,
      duration: "3 Months",
      lectures: Math.round(base.lectures / 3),
      liveClasses: Math.round(base.lectures / 3),
      overview: `${title} Exam Batch-এ সাপ্তাহিক মডেল টেস্ট আর প্রতিটি পরীক্ষার পর Solve Class থাকে। যাঁদের পড়া শেষ, শুধু প্র্যাকটিস আর রিভিশন দরকার — তাঁদের জন্য।`,
      outcomes: [
        "Weekly model tests in exam pattern",
        "Solve class after every exam",
        "Merit list and progress tracking",
        "Final mock tests",
      ],
    }),
  },
  {
    id: "recorded",
    label: "Recorded Course",
    subtitle: "Watch and revise anytime",
    build: (base: CourseDetail, title: string): CourseDetail => ({
      ...base,
      liveClasses: 0,
      overview: `${title} Recorded Course-এ পুরো সিলেবাসের HD রেকর্ডেড লেকচার — ডিউটির ফাঁকে যেকোনো সময়, যতবার দরকার দেখা যায়।`,
      outcomes: [
        "Full syllabus in HD recorded lectures",
        "Watch anytime, as many times as needed",
        "Lecture sheets with every class",
        "Model tests to check progress",
      ],
    }),
  },
];

export const courseCategories: CourseCategory[] = programs.map((program) => ({
  id: program.id,
  badge: program.badge,
  title: program.title,
  cover: program.cover,
  courses: courseTypes.map((type) => ({
    id: type.id,
    title: `${program.title} ${type.label}`,
    subtitle: type.subtitle,
    detail: type.build(baseDetails[program.id], program.title),
  })),
}));

export function getCourseCategory(id: string) {
  return courseCategories.find((category) => category.id === id);
}

export function getCourse(categoryId: string, courseId: string) {
  const category = getCourseCategory(categoryId);
  const course = category?.courses.find((item) => item.id === courseId);

  if (!category || !course) {
    return null;
  }

  return { category, course };
}
