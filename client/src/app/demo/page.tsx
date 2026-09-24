import type { Metadata } from "next";
import { VideoGrid } from "@/components/home/VideoGrid";
import { demoVideos } from "@/data/videos";

export const metadata: Metadata = {
  title: "Demo | Matrix Point",
};

export default function DemoPage() {
  return (
    <main>
      <VideoGrid
        className="bg-cream"
        title="Demo Classes"
        subtitle="ক্লাস ও ওরিয়েন্টেশন ডেমো — ৪টি করে ২ লাইনে"
        videos={demoVideos}
      />
    </main>
  );
}
