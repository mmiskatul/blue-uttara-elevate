import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Cake,
  ChevronLeft,
  ChevronRight,
  Flame,
  Handshake,
  Heart,
  Leaf,
  Quote,
  RotateCw,
  Truck,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { FEATURED_DISHES } from "@/lib/site-data";

const TITLE = "Mainland Chinese Blue — The Only Revolving Restaurant in Bangladesh";
const DESC =
  "Revolving fine dining on the 14th floor of Siaam Tower, Uttara. Cantonese, Szechuan, Hubei, Hunan & Continental cuisine with nightly candlelight dinners.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const SLIDES = [
  {
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80",
    kicker: "Uttara · 14th Floor · Siaam Tower",
    title: "The Only Revolving Restaurant in Bangladesh",
  },
  {
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80",
    kicker: "Candlelight every night",
    title: "Dine Slowly, Above the City Lights",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=2000&q=80",
    kicker: "Cantonese · Szechuan · Hubei · Hunan · Continental",
    title: "Craft Cooking on an Italian Mechanism",
  },
];

const WHY = [
  { icon: RotateCw, title: "Revolving Dining Experience", text: "A full, gentle turn above Uttara — a new skyline with every course." },
  { icon: Leaf, title: "Extra Virgin Olive Oil & Imported Spices", text: "We cook with imported spices and extra virgin olive oil, never compromise." },
  { icon: Flame, title: "Candlelight Dinners Every Night", text: "Soft light, low music and a table set for the occasion, all week." },
  { icon: UtensilsCrossed, title: "Capsule Lift to the 14th Floor", text: "A glass capsule lift carries you from the ground floor to the sky." },
];

const SERVICES = [
  { icon: Cake, title: "Birthday Parties" },
  { icon: Heart, title: "Weddings" },
  { icon: Users, title: "Anniversaries" },
  { icon: Handshake, title: "Conferences" },
  { icon: UtensilsCrossed, title: "Outside Catering" },
  { icon: Truck, title: "Home Delivery" },
];

const TESTIMONIALS = [
  { name: "Farhana R.", text: "We booked for our anniversary and the whole floor slowly turned as the sun went down. The sea bass was flawless." },
  { name: "Tanvir A.", text: "Best Szechuan in Uttara, and the capsule lift alone is worth the trip. Service felt genuinely fine-dining." },
  { name: "Nusrat J.", text: "Hosted a 40-person conference lunch here. Organised, elegant, and every guest talked about the view." },
];

function Index() {
  const [slide, setSlide] = useState(0);
  const [offset, setOffset] = useState(0);
  const [testimonial, setTestimonial] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.28);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section className="relative h-screen overflow-hidden">
        {SLIDES.map((s, i) => (
          <div
            key={s.title}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === slide ? 1 : 0 }}
          >
            <img
              src={s.image}
              alt={s.title}
              className="size-full scale-110 object-cover"
              style={{ transform: `translateY(${offset}px) scale(1.12)` }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.13_0.016_265/0.7),oklch(0.13_0.016_265/0.92))]" />
          </div>
        ))}

        <div className="relative flex h-full items-center">
          <div className="mx-auto w-full max-w-4xl px-5 text-center">
            <p className="text-[11px] uppercase tracking-[0.4em] text-primary">
              {SLIDES[slide]!.kicker}
            </p>
            <h1 className="mt-6 text-4xl font-light leading-[1.1] sm:text-6xl md:text-7xl">
              {SLIDES[slide]!.title}
            </h1>
            <div className="gold-rule mx-auto mt-8" />
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild variant="gold" size="xl">
                <Link to="/reservation">Book a Table</Link>
              </Button>
              <Button asChild variant="goldOutline" size="xl">
                <Link to="/menu">View Menu</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-8 flex items-center justify-center gap-4">
          <button
            aria-label="Previous slide"
            onClick={() => setSlide((s) => (s - 1 + SLIDES.length) % SLIDES.length)}
            className="text-primary/70 hover:text-primary"
          >
            <ChevronLeft className="size-5" />
          </button>
          {SLIDES.map((s, i) => (
            <button
              key={s.title}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setSlide(i)}
              className={`h-px w-10 transition-colors ${i === slide ? "bg-primary" : "bg-muted-foreground/40"}`}
            />
          ))}
          <button
            aria-label="Next slide"
            onClick={() => setSlide((s) => (s + 1) % SLIDES.length)}
            className="text-primary/70 hover:text-primary"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Why Mainland Chinese Blue"
            title="A dining room that moves with the city"
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 100}>
              <div className="h-full border border-border/70 bg-card/60 p-8 transition-colors hover:border-primary/50">
                <w.icon className="size-7 text-primary" />
                <h3 className="mt-6 text-xl font-normal">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border/70 bg-card/40 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {["Cantonese", "Szechuan", "Hubei", "Hunan", "Continental"].map((c) => (
            <span key={c} className="text-gradient-gold">
              {c}
            </span>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionHeading
              eyebrow="Signature Plates"
              title="Featured dishes from our kitchen"
              subtitle="Prepared with imported spices, extra virgin olive oil and a wok that never rests."
            />
          </Reveal>
        </div>
        <div className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6 [scrollbar-width:none]">
          {FEATURED_DISHES.map((d) => (
            <article
              key={d.name}
              className="w-[280px] shrink-0 snap-start border border-border/70 bg-card/60 sm:w-[320px]"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="flex items-center justify-between gap-4 p-6">
                <h3 className="text-lg font-normal">{d.name}</h3>
                <span className="shrink-0 text-primary">৳{d.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/70 bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionHeading
              eyebrow="Occasions"
              title="We host the evenings you remember"
            />
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="flex items-center gap-4 bg-background px-8 py-10 transition-colors hover:bg-card"
              >
                <s.icon className="size-6 text-primary" />
                <span className="text-lg">{s.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Quote className="mx-auto size-8 text-primary" />
          <p className="mt-8 text-xl font-light leading-relaxed text-foreground/90 sm:text-2xl">
            “{TESTIMONIALS[testimonial]!.text}”
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-primary">
            {TESTIMONIALS[testimonial]!.name}
          </p>
          <div className="mt-8 flex justify-center gap-3">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => setTestimonial(i)}
                className={`size-2 rounded-full transition-colors ${i === testimonial ? "bg-primary" : "bg-muted-foreground/40"}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/70">
        <img
          src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-[oklch(0.13_0.016_265/0.85)]" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center">
          <h2 className="text-3xl font-light sm:text-5xl">Reserve your turn above Uttara</h2>
          <p className="mt-5 text-muted-foreground">
            Open every day, 12:00 PM – 11:00 PM. Ample parking and capsule lift service.
          </p>
          <Button asChild variant="gold" size="xl" className="mt-9">
            <Link to="/reservation">Book a Table</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
