import type { Metadata } from "next";
import { ContactBranches } from "@/components/home/ContactBranches";
import { InquiryForm } from "@/components/home/InquiryForm";

export const metadata: Metadata = {
  title: "Contact | Matrix Point",
};

export default function ContactPage() {
  return (
    <main>
      <InquiryForm />
      <ContactBranches />
    </main>
  );
}
