import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { GALLERY } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const TITLE = "Gallery — Mainland Chinese Blue, Uttara";
const DESC =
  "Interiors, signature plates, celebrations and skyline views from Bangladesh's only revolving restaurant in Uttara, Dhaka.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const FILTERS = ["All", "Interior", "Food", "Events", "City View"];

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState<number | null>(null);

  const items = GALLERY.filter((g) => filter === "All" || g.tag === filter);
  const active = index === null ? null : items[index];

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Rooms, plates & city lights"
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeading eyebrow="Look inside" title="A view worth staying for" />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                setIndex(null);
              }}
              className={cn(
                "border px-5 py-2 text-xs uppercase tracking-[0.2em] transition-colors",
                filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/60 hover:text-primary",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {items.map((g, i) => (
            <button
              key={g.src}
              onClick={() => setIndex(i)}
              className="block w-full overflow-hidden border border-border/70"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className={cn(
                  "w-full object-cover transition-transform duration-700 hover:scale-105",
                  i % 3 === 0 ? "h-80" : i % 3 === 1 ? "h-60" : "h-96",
                )}
              />
            </button>
          ))}
        </div>
      </section>

      {active ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[oklch(0.1_0.01_265/0.95)] p-5">
          <button
            aria-label="Close"
            onClick={() => setIndex(null)}
            className="absolute right-6 top-6 text-primary"
          >
            <X className="size-7" />
          </button>
          <button
            aria-label="Previous image"
            onClick={() => setIndex(((index! - 1) + items.length) % items.length)}
            className="absolute left-4 text-primary"
          >
            <ChevronLeft className="size-9" />
          </button>
          <figure className="max-h-[85vh] max-w-5xl">
            <img src={active.src} alt={active.alt} className="max-h-[78vh] w-auto object-contain" />
            <figcaption className="mt-4 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {active.tag}
            </figcaption>
          </figure>
          <button
            aria-label="Next image"
            onClick={() => setIndex((index! + 1) % items.length)}
            className="absolute right-4 text-primary"
          >
            <ChevronRight className="size-9" />
          </button>
        </div>
      ) : null}
    </>
  );
}