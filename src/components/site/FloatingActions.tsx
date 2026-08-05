import { MessageCircle, Phone } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site-data";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <a
        href={`tel:${SITE.phones[0]}`}
        aria-label="Call now"
        className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-lux)] transition-transform hover:scale-105 sm:hidden"
      >
        <Phone className="size-5" />
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group flex items-center gap-2 rounded-full border border-primary/40 bg-card px-4 py-3 text-sm text-primary shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
      >
        <MessageCircle className="size-5" />
        <span className="hidden sm:inline">Chat with us</span>
      </a>
    </div>
  );
}