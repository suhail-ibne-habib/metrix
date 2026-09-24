import type { Metadata } from "next";
import { VideoGrid } from "@/components/home/VideoGrid";
import { successStoryVideos } from "@/data/videos";

export const metadata: Metadata = {
  title: "Success Stories | Matrix Point",
};

export default function SuccessStoriesPage() {
  return (
    <main>
      <VideoGrid
        className="bg-mint"
        title="Success Stories"
        subtitle="ক্যারিয়ার গল্প ও সফলতার পথ — Matrix Point YouTube"
        videos={successStoryVideos}
      />
    </main>
  );
}
