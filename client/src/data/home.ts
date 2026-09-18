export const navLinks = [
  { href: "/", label: "Home" },
  { href: "#courses", label: "Courses" },
  { href: "#features", label: "About" },
  { href: "#inquiry", label: "Blog" },
  { href: "#contact", label: "Contact" },
] as const;

export const hero = {
  title: "ম্যাট্রিক্স পয়েন্ট পরিবারে আপনাকে স্বাগতম!",
  subtitle:
    "লাইভ ক্লাস, রেকর্ডেড লেকচার ও পরীক্ষামুখী গাইডলাইনের মাধ্যমে আপনার পোস্ট-গ্র্যাজুয়েশন যাত্রাকে করে তুলুন আরও নিশ্চিত।",
  cta: "Login / Register",
  stats: [
    { value: "50,000+", label: "শিক্ষার্থী" },
    { value: "200+", label: "শিক্ষক" },
    { value: "20+", label: "বছর" },
  ],
} as const;

export const courses: Array<{
  id: string;
  title: string;
  subtitle: string;
  cover: string;
  featured?: boolean;
}> = [
  {
    id: "davidson",
    title: "Davidson Zero Hour",
    subtitle: "Question Bank · 5 Volumes",
    cover: "/courses/davidson.jpeg",
    featured: true,
  },
  {
    id: "bailey-loves",
    title: "Bailey & Love's",
    subtitle: "FCPS Part-I Surgery",
    cover: "/courses/bailey-loves.jpeg",
  },
  {
    id: "gynae-obs",
    title: "Gynae & Obs",
    subtitle: "Dutta · FCPS Part-I",
    cover: "/courses/gynae-obs.jpeg",
  },
  {
    id: "digest-key-notes",
    title: "Digest, Key Note & Q.Bank",
    subtitle: "FCPS Part-I · Residency",
    cover: "/courses/digest-key-notes.jpeg",
  },
  {
    id: "radiology",
    title: "Radiology & Imaging",
    subtitle: "Question Bank · Vol 1–2",
    cover: "/courses/radiology.jpeg",
  },
  {
    id: "ophthalmology",
    title: "Ophthalmology",
    subtitle: "Question Bank · Vol 1–2",
    cover: "/courses/ophthalmology.jpeg",
  },
  {
    id: "pathology",
    title: "Pathology",
    subtitle: "Histopathology · FCPS Part-I",
    cover: "/courses/pathology.jpeg",
  },
  {
    id: "microbiology",
    title: "Microbiology",
    subtitle: "Question Bank · Vol 1–2",
    cover: "/courses/microbiology.jpeg",
  },
  {
    id: "dermatology",
    title: "Dermatology",
    subtitle: "Zero Hour Digest · FCPS Part-I",
    cover: "/courses/dermatology.jpeg",
  },
  {
    id: "anesthesiology",
    title: "Clinical Anesthesiology",
    subtitle: "FCPS Part-I · Vol 1–2",
    cover: "/courses/anesthesiology.jpeg",
  },
  {
    id: "sba",
    title: "SBA Question Bank",
    subtitle: "Residency · Non-Residency · FCPS P-I",
    cover: "/courses/sba.jpeg",
  },
];

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

export const features = [
  { id: "live", title: "Live Classes", description: "প্রতিদিনের গাইডেড সেশন", tone: "red" },
  { id: "recorded", title: "Recorded", description: "যেকোনো সময় রিভিশন", tone: "lime" },
  { id: "notes", title: "Lecture Notes", description: "পরীক্ষামুখী নোটস", tone: "purple" },
  { id: "exams", title: "Model Tests", description: "নিয়মিত মূল্যায়ন", tone: "orange" },
  { id: "mentor", title: "Mentor Support", description: "সরাসরি পরামর্শ", tone: "violet" },
  { id: "community", title: "Community", description: "সহপাঠীদের সাথে এগোন", tone: "pink" },
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
    { href: "#contact", label: "Contact" },
  ],
  phone: "+880 1404-432536",
  email: "info@matrixpoint.edu",
} as const;
