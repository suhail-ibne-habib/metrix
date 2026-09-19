export const navLinks = [
  { href: "/", label: "Home" },
  { href: "#courses", label: "Courses" },
  { href: "#features", label: "About" },
  { href: "#inquiry", label: "Blog" },
    { href: "#inquiry", label: "Contact" },
] as const;

export const hero = {
  badge: "New Batch Open",
  title: "আপনার কাঙ্ক্ষিত পোস্ট-গ্র্যাজুয়েট মেডিকেল ক্যারিয়ার নিশ্চিত করুন",
  subtitle:
    "FCPS, Residency ও ডিপ্লোমা প্রস্তুতিকে গুছিয়ে নিন লাইভ ক্লাস, কি-নোটস ও এক্সাম-ফোকাসড Q-Bank দিয়ে।",
  cta: "Join The Batch",
  stats: [
    { value: "12,000+", label: "Successful Students" },
    { value: "85%", label: "Exam Success" },
    { value: "48", label: "Expert Faculty" },
  ],
  highlight: {
    eyebrow: "FCPS Part I",
    title: "Medicine Batch",
    date: "Starts 12 Oct",
  },
} as const;

export type ProgramTone = "red" | "navy" | "purple" | "pink" | "teal" | "lime";

export const programs: Array<{
  id: string;
  badge: string;
  title: string;
  points: string[];
  tone: ProgramTone;
}> = [
  {
    id: "medicine",
    badge: "FCPS Part I",
    title: "Medicine",
    points: ["Live + recorded classes", "Weekly model tests", "Key notes & SBA drill"],
    tone: "red",
  },
  {
    id: "surgery",
    badge: "FCPS Part I",
    title: "Surgery",
    points: ["Bailey-focused lectures", "Long & short case prep", "OSPE revision"],
    tone: "navy",
  },
  {
    id: "radiology",
    badge: "FCPS / MD",
    title: "Radiology",
    points: ["Imaging Q-bank", "Spot diagnosis drills", "Written + viva track"],
    tone: "purple",
  },
  {
    id: "gynae",
    badge: "FCPS Part I",
    title: "Gynae & Obs",
    points: ["Dutta-based notes", "SBA & recall classes", "Residency guidance"],
    tone: "pink",
  },
  {
    id: "paediatrics",
    badge: "FCPS Part I",
    title: "Paediatrics",
    points: ["High-yield topics", "Case discussion", "Exam-oriented notes"],
    tone: "teal",
  },
  {
    id: "anaesthesia",
    badge: "FCPS Part I",
    title: "Anaesthesia",
    points: ["Clinical question bank", "Viva station practice", "Mentor support"],
    tone: "lime",
  },
];

export const courses = programs;

export const books: Array<{
  id: string;
  title: string;
  author: string;
  price: string;
  cover: string;
}> = [
  {
    id: "davidson",
    title: "Davidson Zero Hour",
    author: "Question Bank · 5 Volumes",
    price: "৳ 2,500",
    cover: "/courses/davidson.jpeg",
  },
  {
    id: "bailey-loves",
    title: "Bailey & Love's",
    author: "FCPS Part-I Surgery",
    price: "৳ 2,500",
    cover: "/courses/bailey-loves.jpeg",
  },
  {
    id: "gynae-obs",
    title: "Gynae & Obs",
    author: "Dutta · FCPS Part-I",
    price: "৳ 1,800",
    cover: "/courses/gynae-obs.jpeg",
  },
  {
    id: "digest-key-notes",
    title: "Digest, Key Note & Q.Bank",
    author: "FCPS Part-I · Residency",
    price: "৳ 1,750",
    cover: "/courses/digest-key-notes.jpeg",
  },
  {
    id: "radiology",
    title: "Radiology & Imaging",
    author: "Question Bank · Vol 1–2",
    price: "৳ 1,100",
    cover: "/courses/radiology.jpeg",
  },
  {
    id: "ophthalmology",
    title: "Ophthalmology",
    author: "Question Bank · Vol 1–2",
    price: "৳ 1,200",
    cover: "/courses/ophthalmology.jpeg",
  },
  {
    id: "pathology",
    title: "Pathology",
    author: "Histopathology · FCPS Part-I",
    price: "৳ 1,100",
    cover: "/courses/pathology.jpeg",
  },
  {
    id: "microbiology",
    title: "Microbiology",
    author: "Question Bank · Vol 1–2",
    price: "৳ 1,000",
    cover: "/courses/microbiology.jpeg",
  },
];

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

export const faculty = [
  { id: "rahman", name: "Dr. A. Rahman", role: "Medicine", initial: "AR" },
  { id: "hasan", name: "Dr. S. Hasan", role: "Surgery", initial: "SH" },
  { id: "akter", name: "Dr. N. Akter", role: "Gynae & Obs", initial: "NA" },
  { id: "chowdhury", name: "Dr. T. Chowdhury", role: "Radiology", initial: "TC" },
  { id: "islam", name: "Dr. F. Islam", role: "Paediatrics", initial: "FI" },
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
    { href: "#features", label: "About" },
    { href: "#courses", label: "Courses" },
    { href: "#inquiry", label: "Admission" },
    { href: "#inquiry", label: "Contact" },
  ],
  phone: "+880 1404-432536",
  email: "info@matrixpoint.edu",
} as const;
