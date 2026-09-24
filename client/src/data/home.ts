export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Course" },
  { href: "/books", label: "Books" },
  { href: "/contact", label: "Contact" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/demo", label: "Demo" },
] as const;

export const hero = {
  badge: "New Batch Open",
  titleBefore: "আপনার কাঙ্ক্ষিত ",
  titleAccent: "পোস্ট-গ্র্যাজুয়েট",
  titleAfter: " মেডিকেল ক্যারিয়ার নিশ্চিত করুন",
  subtitle:
    "FCPS, Residency ও ডিপ্লোমা প্রস্তুতিকে গুছিয়ে নিন লাইভ ক্লাস, কি-নোটস ও এক্সাম-ফোকাসড Q-Bank দিয়ে।",
  cta: "Join The Batch",
  ctaSecondary: "Browse Books",
  stats: [
    { value: "12,000+", label: "Successful Students" },
    { value: "91%", label: "Exam Success" },
    { value: "40", label: "Expert Faculty" },
  ],
  highlight: {
    eyebrow: "FCPS Part I",
    title: "Medicine Batch",
    date: "Starts 12 Oct",
    points: ["Live + recorded classes", "Weekly model tests", "Mentor support"],
  },
} as const;

export type ProgramTone = "red" | "navy" | "purple" | "pink" | "teal" | "lime";

export const programs: Array<{
  id: string;
  badge: string;
  title: string;
  points: string[];
  cover: string;
  tone: ProgramTone;
}> = [
  {
    id: "medicine",
    badge: "FCPS Part I",
    title: "Medicine",
    points: ["Live + recorded classes", "Weekly model tests", "Key notes & SBA drill"],
    cover: "/courses/davidson.jpeg",
    tone: "red",
  },
  {
    id: "surgery",
    badge: "FCPS Part I",
    title: "Surgery",
    points: ["Bailey-focused lectures", "Long & short case prep", "OSPE revision"],
    cover: "/courses/bailey-loves.jpeg",
    tone: "navy",
  },
  {
    id: "radiology",
    badge: "FCPS / MD",
    title: "Radiology",
    points: ["Imaging Q-bank", "Spot diagnosis drills", "Written + viva track"],
    cover: "/courses/radiology.jpeg",
    tone: "purple",
  },
  {
    id: "gynae",
    badge: "FCPS Part I",
    title: "Gynae & Obs",
    points: ["Dutta-based notes", "SBA & recall classes", "Residency guidance"],
    cover: "/courses/gynae-obs.jpeg",
    tone: "pink",
  },
  {
    id: "paediatrics",
    badge: "FCPS Part I",
    title: "Paediatrics",
    points: ["High-yield topics", "Case discussion", "Exam-oriented notes"],
    cover: "/courses/digest-key-notes.jpeg",
    tone: "teal",
  },
  {
    id: "anaesthesia",
    badge: "FCPS Part I",
    title: "Anaesthesia",
    points: ["Clinical question bank", "Viva station practice", "Mentor support"],
    cover: "/courses/anesthesiology.jpeg",
    tone: "lime",
  },
];

export const courses = programs;

export type BookVolume = {
  id: string;
  title: string;
  subtitle: string;
  cover: string;
  exam: string;
  description: string;
  highlights: string[];
};

export type BookSeries = {
  id: string;
  title: string;
  subtitle: string;
  cover: string;
  volumes: BookVolume[];
};

function volumeSet(
  seriesId: string,
  cover: string,
  count: number,
  name: string,
  exam: string,
  focuses: string[],
): BookVolume[] {
  return Array.from({ length: count }, (_, index) => ({
    id: `${seriesId}-vol-${index + 1}`,
    title: `${name} · Vol ${index + 1}`,
    subtitle: `Question Bank · Volume ${index + 1}`,
    cover,
    exam,
    description: `${name} Volume ${index + 1} covers ${focuses[index] ?? "high-yield exam topics"} for ${exam}. Use it for daily drill, recall revision, and last-month practice.`,
    highlights: [
      `${focuses[index] ?? "High-yield topics"}`,
      "SBA and recall-style questions",
      "Exam-oriented explanations",
      "Suitable for live batch and self-study",
    ],
  }));
}

export const bookSeries: BookSeries[] = [
  {
    id: "davidson",
    title: "Davidson Zero Hour",
    subtitle: "Question Bank · 5 Volumes",
    cover: "/courses/davidson.jpeg",
    volumes: volumeSet(
      "davidson",
      "/courses/davidson.jpeg",
      5,
      "Davidson Zero Hour",
      "FCPS Part-I Medicine · Residency · M.Phil",
      [
        "core medicine fundamentals and first-line recalls",
        "cardiology, respiratory and gastroenterology SBAs",
        "neurology, endocrine and renal question sets",
        "infectious disease, haematology and emergency medicine",
        "full-length revision papers and last-hour drill",
      ],
    ),
  },
  {
    id: "bailey-loves",
    title: "Bailey & Love's",
    subtitle: "FCPS Part-I Surgery · 3 Volumes",
    cover: "/courses/bailey-loves.jpeg",
    volumes: volumeSet(
      "bailey-loves",
      "/courses/bailey-loves.jpeg",
      3,
      "Bailey & Love's",
      "FCPS Part-I Surgery",
      [
        "surgical principles, wound healing and trauma basics",
        "system-wise surgery SBAs and OSPE points",
        "long and short case recall with viva-style notes",
      ],
    ),
  },
  {
    id: "gynae-obs",
    title: "Gynae & Obs",
    subtitle: "Dutta · FCPS Part-I · 2 Volumes",
    cover: "/courses/gynae-obs.jpeg",
    volumes: volumeSet(
      "gynae-obs",
      "/courses/gynae-obs.jpeg",
      2,
      "Gynae & Obs",
      "FCPS Part-I Gynae & Obs · MRCOG track",
      [
        "gynaecology key concepts from Dutta with SBA drill",
        "obstetrics recalls, labour ward problems and viva points",
      ],
    ),
  },
  {
    id: "digest-key-notes",
    title: "Digest, Key Note & Q.Bank",
    subtitle: "FCPS Part-I · Residency · 3 books",
    cover: "/courses/digest-key-notes.jpeg",
    volumes: [
      {
        id: "digest",
        title: "Digest",
        subtitle: "FCPS Part-I · Residency",
        cover: "/courses/digest-key-notes.jpeg",
        exam: "FCPS Part-I · Residency",
        description:
          "Digest gathers the fundamental part of FCPS Part-I and residency prep — pathology, microbiology, pharmacology and anatomy — in one compact volume.",
        highlights: [
          "Fundamental / basic part in one book",
          "High-yield tables for quick revision",
          "Built for both residency and FCPS Part-I",
          "Pairs with live batch notes",
        ],
      },
      {
        id: "key-notes",
        title: "Key Notes",
        subtitle: "FCPS Part-I · Residency",
        cover: "/courses/digest-key-notes.jpeg",
        exam: "FCPS Part-I · Residency",
        description:
          "Key Notes is the clinical companion — system-wise points, must-remember facts and last-month revision lines for medicine and allied subjects.",
        highlights: [
          "Clinical part, system by system",
          "Exam-line facts without extra padding",
          "Useful on duty between live classes",
          "Works with weekly model tests",
        ],
      },
      {
        id: "q-bank",
        title: "Q.Bank",
        subtitle: "FCPS Part-I · Residency",
        cover: "/courses/digest-key-notes.jpeg",
        exam: "FCPS Part-I · Residency",
        description:
          "Q.Bank is the SBA and MCQ practice set for FCPS Part-I and residency. Use it after class to lock in recalls and find weak topics.",
        highlights: [
          "SBA and MCQ practice papers",
          "Covers basic and clinical parts",
          "Answer keys for self-check",
          "Exam-style timing practice",
        ],
      },
    ],
  },
  {
    id: "radiology",
    title: "Radiology & Imaging",
    subtitle: "Question Bank · 2 Volumes",
    cover: "/courses/radiology.jpeg",
    volumes: volumeSet(
      "radiology",
      "/courses/radiology.jpeg",
      2,
      "Radiology & Imaging",
      "FCPS / MD Radiology",
      [
        "plain film, ultrasound and CT spot diagnosis",
        "MRI, contrast studies and written-plus-viva track",
      ],
    ),
  },
  {
    id: "ophthalmology",
    title: "Ophthalmology",
    subtitle: "Question Bank · 2 Volumes",
    cover: "/courses/ophthalmology.jpeg",
    volumes: volumeSet(
      "ophthalmology",
      "/courses/ophthalmology.jpeg",
      2,
      "Ophthalmology",
      "FCPS Part-I Ophthalmology",
      [
        "anatomy, optics and basic science questions",
        "clinical ophthalmology SBAs and viva stations",
      ],
    ),
  },
  {
    id: "pathology",
    title: "Pathology",
    subtitle: "Histopathology · FCPS Part-I · 2 Volumes",
    cover: "/courses/pathology.jpeg",
    volumes: volumeSet(
      "pathology",
      "/courses/pathology.jpeg",
      2,
      "Pathology",
      "FCPS Part-I Histopathology",
      [
        "general pathology and cell-injury question sets",
        "systemic histopathology slides and written recalls",
      ],
    ),
  },
  {
    id: "microbiology",
    title: "Microbiology",
    subtitle: "Question Bank · 2 Volumes",
    cover: "/courses/microbiology.jpeg",
    volumes: volumeSet(
      "microbiology",
      "/courses/microbiology.jpeg",
      2,
      "Microbiology",
      "FCPS Part-I Microbiology",
      [
        "bacteriology, staining and culture-based SBAs",
        "virology, mycology, parasitology and immunology",
      ],
    ),
  },
];

export function getBookSeries(id: string) {
  return bookSeries.find((series) => series.id === id);
}

export function getBookVolume(seriesId: string, volumeId: string) {
  const series = getBookSeries(seriesId);
  const volume = series?.volumes.find((item) => item.id === volumeId);

  if (!series || !volume) {
    return null;
  }

  return { series, volume };
}

export const features = [
  {
    id: "live",
    title: "Live Interactive Classes",
    description: "প্রতিদিনের গাইডেড সেশনে প্রশ্ন করুন এবং সাথে সাথে ক্লিয়ার করুন।",
    tone: "red",
  },
  {
    id: "recorded",
    title: "HD Recorded Lectures",
    description: "মিস হলেও যেকোনো সময় রিভিশন করুন, যতবার দরকার।",
    tone: "lime",
  },
  {
    id: "notes",
    title: "Exam-Focused Notes",
    description: "কি-টপিক, রিকল ও হাই-ইল্ড নোটস এক জায়গায়।",
    tone: "purple",
  },
  {
    id: "mentor",
    title: "Mentor Support",
    description: "ব্যাচ, বিষয় ও ক্যারিয়ার গাইডলাইনে সরাসরি পরামর্শ।",
    tone: "teal",
  },
] as const;

export const whyPoints = [
  "Live + recorded classes in one batch",
  "Exam-focused notes and weekly tests",
  "Mentor support for FCPS and residency",
  "High-yield books and Q-banks on campus",
] as const;

export const testimonials = [
  {
    id: "nabila",
    quote:
      "মেডিসিন ব্যাচের স্ট্রাকচার আর সাপ্তাহিক টেস্ট আমাকে FCPS Part-I তে কনফিডেন্ট রেখেছে।",
    name: "Dr. Nabila Hossain",
    batch: "Medicine Batch '25",
  },
  {
    id: "imran",
    quote:
      "Bailey ক্লাস আর Q-Bank একসাথে পাওয়ায় সার্জারি প্রস্তুতি অনেক ফোকাসড হয়ে গেছে।",
    name: "Dr. Imran Kabir",
    batch: "Surgery Batch '25",
  },
  {
    id: "farzana",
    quote:
      "মেন্টর সাপোর্ট আর রেকর্ডেড লেকচার ডিউটির ফাঁকেও রিভিশন চালিয়ে যেতে সাহায্য করেছে।",
    name: "Dr. Farzana Akter",
    batch: "Gynae Batch '24",
  },
] as const;

export const promoBanners = [
  {
    id: "davidson",
    eyebrow: "Best Seller",
    title: "Davidson Zero Hour",
    description: "৩,০০০+ প্রশ্ন, ৫ ভলিউম — FCPS P-I, Residency ও M.Phil",
    cta: "Start Course",
    tone: "lime",
  },
  {
    id: "bailey",
    eyebrow: "Surgery Pack",
    title: "Bailey & Love's",
    description: "FCPS Part-I সার্জারি কি-টপিক ও মডেল টেস্ট একসাথে",
    cta: "Start Course",
    tone: "red",
  },
  {
    id: "digest",
    eyebrow: "Complete Set",
    title: "Digest, Key Note & Q.Bank",
    description: "ফান্ডামেন্টাল, ক্লিনিক্যাল ও SBA — Residency প্রস্তুতি",
    cta: "Start Course",
    tone: "purple",
  },
  {
    id: "sba",
    eyebrow: "Practice Pack",
    title: "SBA Question Bank",
    description: "Residency, Non-Residency ও FCPS P-I প্র্যাকটিস সেট",
    cta: "Start Course",
    tone: "peach",
  },
] as const;

export const branches = [
  {
    id: "katabon",
    name: "Dhaka — Katabon",
    address: "234/C Sonargaon Road, Khairunnessa Mansion, Katabon Mor, Dhaka-1205",
    phone: "+880 1404-432536",
  },
  {
    id: "dhanmondi",
    name: "Dhaka — Dhanmondi",
    address: "House 32, Road 7, Dhanmondi, Dhaka-1209",
    phone: "+880 1404-432537",
  },
  {
    id: "chattogram",
    name: "Chattogram",
    address: "2nd Floor, GEC Circle, Chattogram-4000",
    phone: "+880 1404-432538",
  },
  {
    id: "rajshahi",
    name: "Rajshahi",
    address: "Shaheb Bazar Road, Rajshahi-6000",
    phone: "+880 1404-432539",
  },
  {
    id: "sylhet",
    name: "Sylhet",
    address: "Zindabazar, Sylhet-3100",
    phone: "+880 1404-432540",
  },
  {
    id: "khulna",
    name: "Khulna",
    address: "KDA Avenue, Khulna-9100",
    phone: "+880 1404-432541",
  },
  {
    id: "barishal",
    name: "Barishal",
    address: "Band Road, Barishal-8200",
    phone: "+880 1404-432542",
  },
  {
    id: "rangpur",
    name: "Rangpur",
    address: "Station Road, Rangpur-5400",
    phone: "+880 1404-432543",
  },
] as const;

export const footer = {
  tagline: "Confidence, Creativity & Credibility.",
  company: [
    { href: "/about", label: "About" },
    { href: "/courses", label: "Course" },
    { href: "/books", label: "Books" },
    { href: "/contact", label: "Contact" },
    { href: "/success-stories", label: "Success Stories" },
    { href: "/demo", label: "Demo" },
  ],
  phone: "+880 1404-432536",
  email: "info@matrixpoint.edu",
} as const;
