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
  cover: string;
  detail: CourseDetail;
};

export type CourseCategory = {
  id: string;
  badge: string;
  title: string;
  cover: string;
  courses: Course[];
};

function course(
  id: string,
  title: string,
  subtitle: string,
  cover: string,
  detail: CourseDetail,
): Course {
  return { id, title, subtitle, cover, detail };
}

const medicine: CourseDetail = {
    duration: "6 Months",
    lectures: 60,
    exams: 48,
    liveClasses: 60,
    overview:
      "Medicine ব্যাচে লাইভ ক্লাস, রেকর্ডেড রিভিশন আর সাপ্তাহিক মডেল টেস্ট একসাথে। সিস্টেম ধরে ক্লাস শেষ করে Previous Question Solve Class দিয়ে রিকল পাকা করা হয়।",
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
};

const surgery: CourseDetail = {
    duration: "6 Months",
    lectures: 55,
    exams: 44,
    liveClasses: 55,
    overview:
      "Surgery ব্যাচে সার্জিক্যাল প্রিন্সিপল থেকে সিস্টেম-ভিত্তিক টপিক পর্যন্ত পড়ানো হয়। লং ও শর্ট কেস আর OSPE প্রস্তুতি আলাদা সেশনে থাকে।",
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
};

const gynae: CourseDetail = {
    duration: "6 Months",
    lectures: 50,
    exams: 40,
    liveClasses: 50,
    overview:
      "Gynae & Obs ব্যাচে DC Dutta-ভিত্তিক নোট, SBA ও রিকল ক্লাস থাকে। গাইনি আর অবস — দুই অংশের কি-কনসেপ্ট সামারি ক্লাস দিয়ে রিভিশন করানো হয়।",
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
};

const pediatrics: CourseDetail = {
    duration: "5 Months",
    lectures: 45,
    exams: 36,
    liveClasses: 45,
    overview:
      "Pediatrics ব্যাচে হাই-ইল্ড টপিক, কেস ডিসকাশন আর এক্সাম-ওরিয়েন্টেড নোট থাকে। প্রতিটি সিস্টেম শেষে মডেল টেস্ট দিয়ে দুর্বল জায়গা ধরা হয়।",
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
};

const anesthesia: CourseDetail = {
    duration: "5 Months",
    lectures: 40,
    exams: 32,
    liveClasses: 40,
    overview:
      "Anesthesia ব্যাচে ক্লিনিক্যাল কোয়েশ্চেন ব্যাংক, ফিজিওলজি ও ফার্মাকোলজি এক সাথে পড়ানো হয়। ভাইভা স্টেশনের প্র্যাকটিস আলাদা সেশনে থাকে।",
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
};

const basicScience: CourseDetail = {
  duration: "5 Months",
  lectures: 48,
  exams: 36,
  liveClasses: 48,
  overview:
    "Basic Science ব্যাচে Anatomy, Physiology, Biochemistry, Pathology, Microbiology ও Pharmacology একসাথে পড়ানো হয়। রেসিডেন্সি ও ডিপ্লোমার বেসিক পার্টের জন্য।",
  outcomes: [
    "Subject-wise basic science classes",
    "High-yield tables and recall lines",
    "SBA drill after every subject",
    "Weekly model tests",
  ],
  curriculum: [
    {
      title: "Anatomy & Physiology",
      lessons: ["Gross anatomy high-yield", "Systemic physiology", "Neuroanatomy basics"],
    },
    {
      title: "Biochemistry & Pharmacology",
      lessons: ["Clinical biochemistry", "General pharmacology", "Autonomic & antimicrobial drugs"],
    },
    {
      title: "Pathology & Microbiology",
      lessons: ["General pathology", "Systemic pathology", "Bacteriology, virology & immunology"],
    },
    {
      title: "Revision",
      lessons: ["Integrated basic science", "SBA drill", "Final mock tests"],
    },
  ],
};

const ent: CourseDetail = {
  duration: "4 Months",
  lectures: 36,
  exams: 28,
  liveClasses: 36,
  overview:
    "ENT ব্যাচে ear, nose ও throat-এর অ্যানাটমি থেকে ক্লিনিক্যাল কেস পর্যন্ত পড়ানো হয়। লিখিত, SBA ও ভাইভা — তিন ট্র্যাকের প্রস্তুতি একসাথে।",
  outcomes: [
    "Ear, nose and throat topic classes",
    "Clinical case discussion",
    "SBA and viva practice",
    "Final mock tests",
  ],
  curriculum: [
    {
      title: "Ear",
      lessons: ["Anatomy & hearing", "Otitis & discharge", "Hearing loss"],
    },
    {
      title: "Nose & Sinus",
      lessons: ["Epistaxis", "Sinusitis & polyps", "Nasal obstruction"],
    },
    {
      title: "Throat & Neck",
      lessons: ["Tonsil & adenoid", "Larynx & voice", "Neck swellings"],
    },
    {
      title: "Revision",
      lessons: ["Instrument & image spotting", "Viva practice", "Final mock tests"],
    },
  ],
};

const dermatology: CourseDetail = {
  duration: "4 Months",
  lectures: 36,
  exams: 28,
  liveClasses: 36,
  overview:
    "Dermatology ব্যাচে স্কিন, হেয়ার ও STI-এর হাই-ইল্ড টপিক পড়ানো হয়। স্পট ডায়াগনসিস আর SBA ড্রিল আলাদা সেশনে থাকে।",
  outcomes: [
    "Lesion-based clinical classes",
    "Spot diagnosis drills",
    "STI and leprosy revision",
    "SBA and viva practice",
  ],
  curriculum: [
    {
      title: "Basic Dermatology",
      lessons: ["Morphology of lesions", "Eczema & psoriasis", "Infections of skin"],
    },
    {
      title: "Systemic & STI",
      lessons: ["Bullous disorders", "Leprosy", "Sexually transmitted infections"],
    },
    {
      title: "Hair, Nail & Allergy",
      lessons: ["Alopecia", "Nail disorders", "Urticaria & drug rash"],
    },
    {
      title: "Revision",
      lessons: ["Image spotting", "Viva practice", "Final mock tests"],
    },
  ],
};

const textbook = {
  medicine: {
    ...medicine,
    duration: "4 Months",
    overview:
      "Clinical Medicine ক্লাস পুরোপুরি Davidson-ভিত্তিক। চ্যাপ্টার ধরে ক্লিনিক্যাল পয়েন্ট, কেস ডিসকাশন আর রিভিশন একসাথে চলে।",
  },
  surgery: {
    ...surgery,
    duration: "4 Months",
    overview:
      "Clinical Surgery ক্লাস Bailey & Love's ধরে। সার্জিক্যাল প্রিন্সিপল, সিস্টেম-ভিত্তিক চ্যাপ্টার আর লং-শর্ট কেস একসাথে।",
  },
  gynae: {
    ...gynae,
    duration: "4 Months",
    overview:
      "Clinical Gynae & Obs ক্লাস টেক্সটবুক ধরে। গাইনি ও অবস — দুই অংশের ক্লিনিক্যাল পয়েন্ট আর কেস ডিসকাশন থাকে।",
  },
  pediatrics: {
    ...pediatrics,
    duration: "4 Months",
    overview:
      "Clinical Pediatrics ক্লাস টেক্সটবুক ধরে। নিওনেট থেকে সিস্টেমিক পেডিয়াট্রিক্স — কেস ডিসকাশনসহ পড়ানো হয়।",
  },
  anesthesia: {
    ...anesthesia,
    duration: "4 Months",
    overview:
      "Anesthesiology ক্লিনিক্যাল ক্লাসে ফিজিওলজি, ফার্মাকোলজি ও ইকুইপমেন্ট টেক্সটবুক ধরে পড়ানো হয়। ভাইভা স্টেশনের প্র্যাকটিস আলাদা সেশনে থাকে।",
  },
  ent: {
    ...ent,
    duration: "4 Months",
    overview:
      "Clinical ENT ক্লাস টেক্সটবুক ধরে। Ear, nose ও throat-এর ক্লিনিক্যাল কেস, ইন্সট্রুমেন্ট ও রিভিশন একসাথে।",
  },
  dermatology: {
    ...dermatology,
    duration: "4 Months",
    overview:
      "Clinical Dermatology ক্লাস টেক্সটবুক ধরে। লেশন দেখে ডায়াগনসিস, STI রিভিশন আর স্পট প্র্যাকটিস থাকে।",
  },
} satisfies Record<string, CourseDetail>;

function examDetail(name: string, lessons: string[]): CourseDetail {
  return {
    duration: "3 Months",
    lectures: 24,
    exams: 36,
    liveClasses: 24,
    overview: `${name} Exam Batch-এ সাপ্তাহিক মডেল টেস্ট আর প্রতিটি পরীক্ষার পর Solve Class থাকে। যাঁদের পড়া এগিয়ে আছে, শুধু প্র্যাকটিস আর রিভিশন দরকার — তাঁদের জন্য।`,
    outcomes: [
      "Weekly model tests in exam pattern",
      "Solve class after every exam",
      "Merit list and progress tracking",
      "Final mock tests",
    ],
    curriculum: [
      { title: "Pattern & Plan", lessons: [`${name} exam pattern`, "Topic-wise revision plan"] },
      { title: "Model Tests", lessons },
      { title: "Solve Class", lessons: ["Answer discussion", "Weak-topic repair"] },
      { title: "Final Mocks", lessons: ["Full-length mock", "Last-week revision"] },
    ],
  };
}

const coursesByProgram: Record<string, Course[]> = {
  residency: [
    course("medicine", "Medicine", "Residency · Medicine", "/courses/davidson.jpeg", medicine),
    course("surgery", "Surgery", "Residency · Surgery", "/courses/bailey-loves.jpeg", surgery),
    course("pediatrics", "Pediatrics", "Residency · Pediatrics", "/courses/digest-key-notes.jpeg", pediatrics),
    course("basic-science", "Basic Science", "Residency · Basic Science", "/courses/pathology.jpeg", basicScience),
  ],
  "mphil-diploma": [
    course("medicine", "Medicine", "M.Phil/Diploma · Medicine", "/courses/davidson.jpeg", medicine),
    course("surgery", "Surgery", "M.Phil/Diploma · Surgery", "/courses/bailey-loves.jpeg", surgery),
    course("pediatrics", "Pediatrics", "M.Phil/Diploma · Pediatrics", "/courses/digest-key-notes.jpeg", pediatrics),
    course("basic-science", "Basic Science", "M.Phil/Diploma · Basic Science", "/courses/microbiology.jpeg", basicScience),
  ],
  "fcps-p1": [
    course("medicine", "Medicine", "FCPS P-1 · Medicine", "/courses/davidson.jpeg", medicine),
    course("surgery", "Surgery", "FCPS P-1 · Surgery", "/courses/bailey-loves.jpeg", surgery),
    course("gynae-obs", "Gynae & Obs", "FCPS P-1 · Gynae & Obs", "/courses/gynae-obs.jpeg", gynae),
    course("pediatrics", "Pediatrics", "FCPS P-1 · Pediatrics", "/courses/digest-key-notes.jpeg", pediatrics),
    course("ent", "ENT", "FCPS P-1 · ENT", "/courses/ophthalmology.jpeg", ent),
    course("anesthesia", "Anesthesia", "FCPS P-1 · Anesthesia", "/courses/anesthesiology.jpeg", anesthesia),
    course("dermatology", "Dermatology", "FCPS P-1 · Dermatology", "/courses/dermatology.jpeg", dermatology),
  ],
  "clinical-class": [
    course("clinical-medicine", "Clinical Medicine (Davidson)", "Text book based", "/courses/davidson.jpeg", textbook.medicine),
    course("clinical-surgery", "Clinical Surgery (Bailey & Love's)", "Text book based", "/courses/bailey-loves.jpeg", textbook.surgery),
    course("clinical-gynae", "Clinical Gynae & Obs", "Text book based", "/courses/gynae-obs.jpeg", textbook.gynae),
    course("clinical-pediatrics", "Clinical Pediatrics", "Text book based", "/courses/digest-key-notes.jpeg", textbook.pediatrics),
    course("anesthesiology", "Anesthesiology", "Text book based", "/courses/anesthesiology.jpeg", textbook.anesthesia),
    course("clinical-ent", "Clinical ENT", "Text book based", "/courses/ophthalmology.jpeg", textbook.ent),
    course("clinical-dermatology", "Clinical Dermatology", "Text book based", "/courses/dermatology.jpeg", textbook.dermatology),
  ],
  "exam-batch": [
    course("residency", "Residency", "Exam Batch · Residency", "/courses/davidson.jpeg", examDetail("Residency", ["Medicine paper", "Surgery paper", "Basic science paper"])),
    course("mphil-diploma", "M.Phil/Diploma", "Exam Batch · M.Phil/Diploma", "/courses/pathology.jpeg", examDetail("M.Phil/Diploma", ["Subject paper", "Basic science paper"])),
    course("fcps-p1", "FCPS P-1", "Exam Batch · FCPS P-1", "/courses/bailey-loves.jpeg", examDetail("FCPS P-1", ["Paper I", "Paper II", "SBA drill"])),
    course("mph", "MPH", "Exam Batch · MPH", "/courses/microbiology.jpeg", examDetail("MPH", ["Epidemiology", "Biostatistics", "Public health"])),
    course("bcs", "BCS", "Exam Batch · BCS", "/courses/sba.jpeg", examDetail("BCS", ["Medical science", "General knowledge", "Model written"])),
  ],
};

export const courseCategories: CourseCategory[] = programs.map((program) => ({
  id: program.id,
  badge: program.badge,
  title: program.title,
  cover: program.cover,
  courses: coursesByProgram[program.id],
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
