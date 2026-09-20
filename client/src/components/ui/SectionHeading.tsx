type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold text-lime-dark">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-[1.75rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm text-slate-500 sm:text-base">{subtitle}</p>
      ) : null}
    </div>
  );
}
