import { LogIn } from "lucide-react";
import { hero } from "@/data/home";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { VideoCard } from "./VideoCard";

export function Hero() {
  return (
    <section className="overflow-hidden bg-white">
      <Container className="grid items-center gap-10 py-10 md:grid-cols-2 md:py-14 lg:gap-16 lg:py-20">
        <div>
          <h1 className="max-w-xl text-4xl leading-tight font-extrabold tracking-tight text-brand sm:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-500">
            {hero.subtitle}
          </p>
          <div className="mt-8">
            <Button href="#inquiry" size="lg">
              <LogIn className="h-4 w-4" />
              {hero.cta}
            </Button>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xl font-bold text-slate-900 sm:text-2xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-slate-500 sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <VideoCard />
      </Container>
    </section>
  );
}
