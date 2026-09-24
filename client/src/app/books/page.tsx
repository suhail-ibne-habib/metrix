import type { Metadata } from "next";
import { BookGrid } from "@/components/home/BookGrid";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata: Metadata = {
  title: "Books | Matrix Point",
};

export default function BooksPage() {
  return (
    <main>
      <BookGrid headingAs="h1" />
      <CtaBand />
    </main>
  );
}
