type SectionHeadingProps = {
  as?: "h1" | "h2";
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({
  as = "h2",
  eyebrow,
  title,
  subtitle,
}: SectionHeadingProps) {
  const Heading = as;

  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold text-lime-dark">{eyebrow}</p>
      ) : null}
      <Heading className="text-2xl font-bold tracking-tight text-slate-900 sm:text-[1.75rem]">
        {title}
      </Heading>
      {subtitle ? (
        <p className="mt-3 text-sm text-slate-500 sm:text-base">{subtitle}</p>
      ) : null}
    </div>
  );
}
