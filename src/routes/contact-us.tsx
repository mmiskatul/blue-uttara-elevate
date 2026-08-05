import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/site/PageHero";
import { SITE, whatsappLink } from "@/lib/site-data";

const TITLE = "Contact Us — Mainland Chinese Blue, Uttara";
const DESC =
  "Call, email or visit Mainland Chinese Blue at Siaam Tower, 14th Floor, Sector 3, Uttara, Dhaka. Open every day 12:00 PM – 11:00 PM.";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/contact-us" },
    ],
    links: [{ rel: "canonical", href: "/contact-us" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(160),
  subject: z.string().trim().min(2, "Please add a subject").max(120),
  message: z.string().trim().min(5, "Please write a message").max(1000),
});

const DAYS = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const parsed = schema.safeParse(Object.fromEntries(new FormData(formEl)));
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }
    setErrors({});
    // TODO: connect a real backend/email service here.
    toast.success("Message sent — we'll reply as soon as we can.");
    formEl.reset();
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Uttara, Dhaka"
        image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-light">Come up to the 14th floor</h2>
            <div className="gold-rule mt-5" />
          </div>
          <ul className="space-y-5 text-sm text-muted-foreground">
            <li className="flex gap-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
              {SITE.address}
            </li>
            <li className="flex gap-4">
              <Phone className="mt-0.5 size-5 shrink-0 text-primary" />
              <span>
                {SITE.phones.map((p) => (
                  <a key={p} href={`tel:${p}`} className="block hover:text-primary">
                    {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
              <a href={`mailto:${SITE.email}`} className="hover:text-primary">
                {SITE.email}
              </a>
            </li>
          </ul>

          <div className="flex gap-3">
            <a href={SITE.socials.facebook} aria-label="Facebook" className="border border-border p-3 text-primary hover:bg-primary hover:text-primary-foreground">
              <Facebook className="size-4" />
            </a>
            <a href={SITE.socials.instagram} aria-label="Instagram" className="border border-border p-3 text-primary hover:bg-primary hover:text-primary-foreground">
              <Instagram className="size-4" />
            </a>
            <a href={whatsappLink} aria-label="WhatsApp" className="border border-border p-3 text-primary hover:bg-primary hover:text-primary-foreground">
              <MessageCircle className="size-4" />
            </a>
          </div>

          <div className="border border-border/70">
            <table className="w-full text-sm">
              <caption className="border-b border-border/70 px-6 py-4 text-left text-xs uppercase tracking-[0.3em] text-primary">
                Opening Hours
              </caption>
              <tbody>
                {DAYS.map((d) => (
                  <tr key={d} className="border-b border-border/40 last:border-0">
                    <td className="px-6 py-3">{d}</td>
                    <td className="px-6 py-3 text-right text-muted-foreground">
                      12:00 PM – 11:00 PM
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="overflow-hidden border border-border/70">
            <iframe
              title="Google map to Mainland Chinese Blue"
              src={SITE.mapEmbed}
              loading="lazy"
              className="h-80 w-full"
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="h-fit space-y-6 border border-border/70 bg-card/50 p-8 sm:p-10"
        >
          <h2 className="text-2xl font-light">Send us a message</h2>
          <div className="space-y-2">
            <Label htmlFor="name" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Name</Label>
            <Input id="name" name="name" maxLength={80} placeholder="Your name" />
            {errors["name"] ? <p className="text-xs text-destructive">{errors["name"]}</p> : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</Label>
            <Input id="email" name="email" type="email" maxLength={160} placeholder="you@email.com" />
            {errors["email"] ? <p className="text-xs text-destructive">{errors["email"]}</p> : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Subject</Label>
            <Input id="subject" name="subject" maxLength={120} placeholder="Event enquiry" />
            {errors["subject"] ? <p className="text-xs text-destructive">{errors["subject"]}</p> : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Message</Label>
            <Textarea id="message" name="message" rows={6} maxLength={1000} placeholder="How can we help?" />
            {errors["message"] ? <p className="text-xs text-destructive">{errors["message"]}</p> : null}
          </div>
          <Button type="submit" variant="gold" size="xl">
            Send Message
          </Button>
        </form>
      </section>
    </>
  );
}