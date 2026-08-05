export function PageHero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative flex h-[52vh] min-h-[340px] items-end overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.13_0.016_265/0.75),oklch(0.13_0.016_265/0.95))]" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14">
        <p className="text-xs uppercase tracking-[0.35em] text-primary">{subtitle}</p>
        <h1 className="mt-4 text-4xl font-light sm:text-5xl md:text-6xl">{title}</h1>
        <div className="gold-rule mt-6" />
      </div>
    </section>
  );
}