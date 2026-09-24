"use client";

import { useState } from "react";
import { Play } from "lucide-react";

type YoutubeVideoCardProps = {
  id: string;
  title: string;
  subtitle: string;
};

export function YoutubeVideoCard({ id, title, subtitle }: YoutubeVideoCardProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-100">
      <div className="relative aspect-video bg-forest-deep">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0"
            aria-label={`Play ${title}`}
          >
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-forest-deep/20 transition-colors group-hover:bg-forest-deep/10" />
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand text-white shadow-lg shadow-brand/40 transition-transform group-hover:scale-105">
                <Play className="ml-0.5 h-5 w-5 fill-current" />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="p-4">
        <h3 className="line-clamp-2 text-sm font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
      </div>
    </article>
  );
}
