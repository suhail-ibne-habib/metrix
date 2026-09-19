import Image from "next/image";
import { Button } from "@/components/ui/Button";

type BookCardProps = {
  title: string;
  author: string;
  price: string;
  cover: string;
};

export function BookCard({ title, author, price, cover }: BookCardProps) {
  return (
    <article className="flex flex-col rounded-3xl border border-slate-100 bg-white p-4">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-50">
        <Image
          src={cover}
          alt={title}
          fill
          sizes="(min-width: 768px) 25vw, 50vw"
          className="object-cover"
        />
      </div>
      <h3 className="mt-4 text-sm font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-xs text-slate-500">{author}</p>
      <p className="mt-3 text-base font-bold text-slate-900">{price}</p>
      <Button href="#inquiry" variant="dark" size="sm" className="mt-4 w-full">
        Buy Now
      </Button>
    </article>
  );
}
