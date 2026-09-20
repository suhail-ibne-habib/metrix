import { Award, GraduationCap, Users } from "lucide-react";
import { hero, programs } from "@/data/home";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroVisual } from "./HeroVisual";

const statIcons = [Users, Award, GraduationCap];

export function Hero() {
  return (
    <section className="relative overflow-x-clip bg-mint py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_85%_8%,rgba(147,192,41,0.28),transparent_52%),radial-gradient(700px_circle_at_8%_90%,rgba(240,162,2,0.14),transparent_48%)]" />
      <Container className="relative grid items-center gap-12 md:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-semibold text-lime-dark">{hero.badge}</p>
          <h1 className="mt-3 max-w-xl text-4xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            {hero.titleBefore}
            <span className="text-lime-dark">{hero.titleAccent}</span>
            {hero.titleAfter}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-500">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#inquiry">{hero.cta}</Button>
            <Button href="/#books" variant="gold">
              {hero.ctaSecondary}
            </Button>
          </div>

          <form
            action="#inquiry"
            className="mt-8 grid gap-3 rounded-2xl bg-white p-3 shadow-[0_12px_40px_rgba(15,23,42,0.08)] ring-1 ring-slate-100 sm:grid-cols-[1fr_1fr_auto]"
          >
            <select
              name="course"
              defaultValue=""
              className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none"
            >
              <option value="" disabled>
                Select batch
              </option>
              {programs.map((program) => (
                <option key={program.id} value={program.id}>
                  {program.title}
                </option>
              ))}
            </select>
            <input
              name="phone"
              type="tel"
              placeholder="Mobile number"
              className="h-11 rounded-xl border border-slate-200 px-3 text-sm outline-none placeholder:text-slate-400"
            />
            <Button type="submit" className="h-11 px-5">
              Apply
            </Button>
          </form>
        </div>

        <HeroVisual />
      </Container>

      <Container className="relative mt-16">
        <dl className="grid gap-4 sm:grid-cols-3">
          {hero.stats.map((stat, index) => {
            const Icon = statIcons[index];
            return (
              <div
                key={stat.label}
                className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.07)] ring-1 ring-slate-100"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-mint text-forest">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <dt className="text-2xl font-bold text-slate-900">{stat.value}</dt>
                  <dd className="mt-0.5 text-sm text-slate-500">{stat.label}</dd>
                </div>
              </div>
            );
          })}
        </dl>
      </Container>
    </section>
  );
}
