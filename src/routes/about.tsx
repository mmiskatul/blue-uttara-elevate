import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

const TITLE = "About — Mainland Chinese Blue, Uttara";
const DESC =
  "The story of Bangladesh's first and only revolving restaurant: an Italian revolving mechanism, imported spices and a kitchen built on hygiene and craft.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const STATS = [
  { value: "14th", label: "Floor, Siaam Tower" },
  { value: "1", label: "Revolving restaurant in Bangladesh" },
  { value: "120+", label: "Seating capacity" },
  { value: "200k+", label: "Dishes served" },
];

const TEAM = [
  { name: "Chef Liang Wei", role: "Head Chef — Cantonese & Hubei", image: "https://images.unsplash.com/photo-1583394293214-28a5b42f7f0a?auto=format&fit=crop&w=800&q=80" },
  { name: "Chef Rahman Ali", role: "Sous Chef — Continental Grill", image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80" },
  { name: "Sadia Karim", role: "Guest Relations Manager", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" },
];

function About() {
  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="About Mainland Chinese Blue"
        image="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Since day one"
            title="A dining room built to turn"
          />
          <div className="mt-8 space-y-5 text-muted-foreground">
            <p>
              Mainland Chinese Blue opened as the only revolving restaurant in Bangladesh — a full
              dining floor set on an imported Italian revolving mechanism, rotating so gently that
              guests notice it first in the view, not the movement.
            </p>
            <p>
              Fourteen floors above Uttara, a glass capsule lift brings you from the street to a
              room of candlelight, dark wood and gold. Over the course of a meal, the city moves
              slowly past your table.
            </p>
            <p>
              We cook five kitchens under one roof: Cantonese, Szechuan, Hubei, Hunan and
              Continental — each with its own chef, its own wok discipline and its own spice box.
            </p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80"
            alt="The revolving dining room at Mainland Chinese Blue"
            className="w-full border border-border/70 object-cover shadow-[var(--shadow-lux)]"
          />
        </Reveal>
      </section>

      <section className="border-y border-border/70 bg-card/40 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-5xl text-gradient-gold">{s.value}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1400&q=80"
            alt="Chef preparing a dish in the kitchen"
            className="w-full border border-border/70 object-cover shadow-[var(--shadow-lux)]"
          />
        </Reveal>
        <Reveal delay={150}>
          <SectionHeading
            align="left"
            eyebrow="Kitchen standards"
            title="The chef's philosophy"
          />
          <ul className="mt-8 space-y-5 text-muted-foreground">
            <li>
              <span className="text-foreground">Extra virgin olive oil.</span> Our continental grill
              and many wok dishes are finished in cold-pressed extra virgin olive oil.
            </li>
            <li>
              <span className="text-foreground">Imported spices.</span> Szechuan peppercorn, star
              anise and chilli sourced directly rather than substituted locally.
            </li>
            <li>
              <span className="text-foreground">Hygiene first.</span> Daily deep-clean cycles,
              separated prep lines for veg and non-veg, and cold-chain discipline on every delivery.
            </li>
            <li>
              <span className="text-foreground">Cooked to order.</span> Nothing sits. Every wok
              dish leaves the pass within seconds of the flame.
            </li>
          </ul>
        </Reveal>
      </section>

      <section className="border-t border-border/70 bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionHeading eyebrow="The people" title="Behind the pass" />
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <div className="border border-border/70 bg-background">
                  <img src={t.image} alt={t.name} loading="lazy" className="h-72 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-normal">{t.name}</h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-primary">{t.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}