import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Download, Flame, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { MENU_CATEGORIES, MENU_ITEMS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const TITLE = "Menu — Cantonese, Szechuan, Hubei, Hunan & Continental";
const DESC =
  "Explore the full Mainland Chinese Blue menu: appetizers, soups, Cantonese, Szechuan, Hubei, Hunan, Continental, rice & noodles, desserts and beverages.";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MENU_ITEMS.filter(
      (i) =>
        (category === "All" || i.category === category) &&
        (q === "" || i.name.toLowerCase().includes(q) || i.description.toLowerCase().includes(q)),
    );
  }, [category, query]);

  return (
    <>
      <PageHero
        title="The Menu"
        subtitle="Five kitchens, one dining room"
        image="https://images.unsplash.com/photo-1541544181051-e46607bc22a4?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeading
          eyebrow="À la carte"
          title="Cooked to order, served above the city"
          subtitle="Prices in Bangladeshi Taka. Please tell us about allergies when you order."
        />

        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes…"
              aria-label="Search dishes"
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {["All", ...MENU_CATEGORIES].map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={cn(
                  "border px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition-colors",
                  category === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary/60 hover:text-primary",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.name}
              className="flex h-full flex-col border border-border/70 bg-card/50 p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-normal leading-snug">{item.name}</h3>
                <span className="shrink-0 text-primary">৳{item.price}</span>
              </div>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{item.description}</p>
              <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.2em]">
                <span className="text-muted-foreground">{item.category}</span>
                <span
                  className={cn(
                    "size-3 rounded-[2px] border",
                    item.veg ? "border-green-500" : "border-red-500",
                  )}
                  title={item.veg ? "Vegetarian" : "Non-vegetarian"}
                >
                  <span
                    className={cn(
                      "block size-full scale-50 rounded-full",
                      item.veg ? "bg-green-500" : "bg-red-500",
                    )}
                  />
                </span>
                {item.spice ? (
                  <span className="flex gap-0.5" title={`Spice level ${item.spice}`}>
                    {Array.from({ length: item.spice }).map((_, i) => (
                      <Flame key={i} className="size-3 text-accent" />
                    ))}
                  </span>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        {items.length === 0 ? (
          <p className="mt-16 text-center text-muted-foreground">
            No dishes match that search. Try another word.
          </p>
        ) : null}

        <div className="mt-16 text-center">
          {/* TODO: replace with the real PDF once supplied (place it in /public). */}
          <Button asChild variant="goldOutline" size="xl">
            <a href="/menu.pdf" download>
              <Download className="size-4" /> Download Full Menu PDF
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}