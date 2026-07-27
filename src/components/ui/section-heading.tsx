type SectionHeadingProps = {
  align?: "left" | "center";
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  align = "left",
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto items-center text-center" : "items-start";

  return (
    <div className={`flex max-w-2xl flex-col ${alignment}`}>
      <span className="mb-4 inline-flex rounded-full bg-brand-accent-soft px-3 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-brand-accent-strong">
        {eyebrow}
      </span>
      <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-[-0.04em] text-brand-navy sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-7 text-brand-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
