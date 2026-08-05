import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-nav py-2" : "py-5",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5">
        <Link to="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-display text-xl tracking-[0.18em] text-gradient-gold sm:text-2xl">
            MAINLAND
          </span>
          <span className="text-[10px] uppercase tracking-[0.42em] text-muted-foreground">
            Chinese Blue
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="text-xs uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${SITE.phones[0]}`}
            className="flex items-center gap-2 text-xs tracking-widest text-muted-foreground hover:text-primary"
          >
            <Phone className="size-3.5" /> {SITE.phones[0]}
          </a>
          <Button asChild variant="gold" size="sm">
            <Link to="/reservation">Book a Table</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-sm border border-border p-2 text-primary lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-[max-height] duration-500 lg:hidden",
          open ? "max-h-[26rem]" : "max-h-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-5">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="border-b border-border/40 py-3 text-sm uppercase tracking-[0.22em]"
            >
              {l.label}
            </Link>
          ))}
          <Button asChild variant="gold" className="mt-4">
            <Link to="/reservation" onClick={() => setOpen(false)}>
              Book a Table
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}