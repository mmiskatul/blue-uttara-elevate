export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.35em] text-primary">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-light leading-tight sm:text-4xl md:text-5xl">{title}</h2>
      <div className={align === "center" ? "gold-rule mx-auto mt-5" : "gold-rule mt-5"} />
      {subtitle ? <p className="mt-5 text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}