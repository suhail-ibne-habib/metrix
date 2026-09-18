import { Play } from "lucide-react";

export function VideoCard() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="overflow-hidden rounded-3xl bg-purple-dark p-4 shadow-2xl shadow-purple/30">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-brand" />
            <span className="h-2.5 w-2.5 rounded-full bg-lime" />
            <span className="h-2.5 w-2.5 rounded-full bg-purple" />
          </div>
          <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-white/80">
            WATCH OUR STORY
          </span>
        </div>

        <div className="relative isolate aspect-video overflow-hidden rounded-2xl bg-[#2a1238]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="pointer-events-none absolute -top-16 right-6 h-40 w-40 rounded-full bg-lime/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 left-10 h-32 w-32 rounded-full bg-brand/20 blur-3xl" />

          <div className="absolute inset-0 grid place-items-center">
            <button
              type="button"
              aria-label="Play story video"
              className="grid h-16 w-16 place-items-center rounded-full bg-brand text-white shadow-lg shadow-brand/40 transition-transform hover:scale-105"
            >
              <Play className="ml-0.5 h-7 w-7 fill-current" />
            </button>
          </div>

          <div className="absolute inset-x-4 bottom-4">
            <div className="h-1.5 overflow-hidden rounded-full bg-white/15">
              <div className="h-full w-1/3 rounded-full bg-lime" />
            </div>
            <p className="mt-3 text-center text-xs text-white/70">
              ম্যাট্রিক্স পয়েন্টের পথচলা — লাইভ ক্লাস থেকে সফলতার গল্প
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
