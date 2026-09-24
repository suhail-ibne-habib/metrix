import type { Metadata } from "next";
import { CtaBand } from "@/components/home/CtaBand";
import { SuccessFeatures } from "@/components/home/SuccessFeatures";
import { WhyUs } from "@/components/home/WhyUs";

export const metadata: Metadata = {
  title: "About | Matrix Point",
};

export default function AboutPage() {
  return (
    <main>
      <WhyUs />
      <SuccessFeatures />
      <CtaBand />
    </main>
  );
}
