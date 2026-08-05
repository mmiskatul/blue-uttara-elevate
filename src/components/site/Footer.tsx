import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { NAV_LINKS, SITE, whatsappLink } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl tracking-[0.18em] text-gradient-gold">MAINLAND</p>
          <p className="text-[10px] uppercase tracking-[0.42em] text-muted-foreground">
            Chinese Blue
          </p>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Bangladesh&apos;s only revolving fine-dining restaurant, turning gently above Uttara on
            the 14th floor of Siaam Tower — candlelight, city lights and slow-cooked craft.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={SITE.socials.facebook} aria-label="Facebook" className="rounded-sm border border-border p-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              <Facebook className="size-4" />
            </a>
            <a href={SITE.socials.instagram} aria-label="Instagram" className="rounded-sm border border-border p-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              <Instagram className="size-4" />
            </a>
            <a href={whatsappLink} aria-label="WhatsApp" className="rounded-sm border border-border p-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.3em] text-primary">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.3em] text-primary">Visit Us</h3>
          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              {SITE.address}
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                {SITE.phones.map((p) => (
                  <a key={p} href={`tel:${p}`} className="block hover:text-primary">
                    {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={`mailto:${SITE.email}`} className="hover:text-primary">
                {SITE.email}
              </a>
            </li>
            <li className="text-muted-foreground">{SITE.hours}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.3em] text-primary">Find Us</h3>
          <div className="mt-5 overflow-hidden rounded-sm border border-border">
            <iframe
              title="Mainland Chinese Blue location map"
              src={SITE.mapEmbed}
              loading="lazy"
              className="h-44 w-full grayscale-[0.4]"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 px-5 py-6 text-center text-xs tracking-wider text-muted-foreground">
        © {new Date().getFullYear()} Mainland Chinese Blue, Uttara. All rights reserved.
      </div>
    </footer>
  );
}