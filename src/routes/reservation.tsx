import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/site/PageHero";
import { SITE } from "@/lib/site-data";

const TITLE = "Reserve a Table — Mainland Chinese Blue, Uttara";
const DESC =
  "Book your table at Bangladesh's only revolving restaurant. Open every day 12:00 PM – 11:00 PM, 14th floor Siaam Tower, Uttara, Dhaka.";

export const Route = createFileRoute("/reservation")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/reservation" },
    ],
    links: [{ rel: "canonical", href: "/reservation" }],
  }),
  component: Reservation,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  email: z.string().trim().email("Please enter a valid email").max(160),
  date: z.string().min(1, "Please choose a date"),
  time: z.string().min(1, "Please choose a time"),
  guests: z.coerce.number().int().min(1, "At least 1 guest").max(200),
  occasion: z.string().min(1),
  requests: z.string().trim().max(600).optional(),
});

function Reservation() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState<{ name: string; date: string; time: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(form));

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    setSubmitting(true);
    // TODO: connect a real backend/email service here (e.g. a server function
    // that stores the booking and emails mainlandchineseblue@gmail.com).
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setDone({ name: parsed.data.name, date: parsed.data.date, time: parsed.data.time });
    toast.success("Reservation request received — we'll call to confirm.");
  };

  return (
    <>
      <PageHero
        title="Reserve a Table"
        subtitle="Every day · 12:00 PM – 11:00 PM"
        image="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.6fr_1fr]">
        <div className="border border-border/70 bg-card/50 p-8 sm:p-10">
          {done ? (
            <div className="py-10 text-center">
              <CheckCircle2 className="mx-auto size-12 text-primary" />
              <h2 className="mt-6 text-3xl font-light">Thank you, {done.name}</h2>
              <p className="mt-4 text-muted-foreground">
                Your table request for {done.date} at {done.time} has been received. Our team will
                call you shortly to confirm.
              </p>
              <Button variant="goldOutline" className="mt-8" onClick={() => setDone(null)}>
                Make another booking
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <h2 className="text-2xl font-light">Booking details</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Full Name" name="name" error={errors["name"]}>
                  <Input id="name" name="name" maxLength={80} placeholder="Your name" />
                </Field>
                <Field label="Phone" name="phone" error={errors["phone"]}>
                  <Input id="phone" name="phone" type="tel" maxLength={20} placeholder="+8801XXXXXXXXX" />
                </Field>
                <Field label="Email" name="email" error={errors["email"]}>
                  <Input id="email" name="email" type="email" maxLength={160} placeholder="you@email.com" />
                </Field>
                <Field label="Number of Guests" name="guests" error={errors["guests"]}>
                  <Input id="guests" name="guests" type="number" min={1} max={200} defaultValue={2} />
                </Field>
                <Field label="Date" name="date" error={errors["date"]}>
                  <Input id="date" name="date" type="date" />
                </Field>
                <Field label="Time" name="time" error={errors["time"]}>
                  <Input id="time" name="time" type="time" defaultValue="19:30" />
                </Field>
                <Field label="Occasion" name="occasion" error={errors["occasion"]}>
                  <select
                    id="occasion"
                    name="occasion"
                    defaultValue="Casual"
                    className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
                  >
                    {["Birthday", "Anniversary", "Business", "Casual"].map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
              <Field label="Special Requests" name="requests" error={errors["requests"]}>
                <Textarea
                  id="requests"
                  name="requests"
                  rows={4}
                  maxLength={600}
                  placeholder="Window table, cake, dietary needs…"
                />
              </Field>
              <Button type="submit" variant="gold" size="xl" disabled={submitting}>
                {submitting ? "Sending…" : "Confirm Reservation"}
              </Button>
            </form>
          )}
        </div>

        <aside className="space-y-6">
          <div className="border border-border/70 bg-card/50 p-8">
            <h3 className="text-xs uppercase tracking-[0.3em] text-primary">Opening Hours</h3>
            <p className="mt-4 flex gap-3 text-sm text-muted-foreground">
              <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
              {SITE.hours} — open all week.
            </p>
          </div>
          <div className="border border-border/70 bg-card/50 p-8">
            <h3 className="text-xs uppercase tracking-[0.3em] text-primary">Prefer to call?</h3>
            <div className="mt-4 space-y-2">
              {SITE.phones.map((p) => (
                <a key={p} href={`tel:${p}`} className="flex items-center gap-3 text-sm hover:text-primary">
                  <Phone className="size-4 text-primary" /> {p}
                </a>
              ))}
            </div>
          </div>
          <div className="border border-border/70 bg-card/50 p-8">
            <h3 className="text-xs uppercase tracking-[0.3em] text-primary">Getting here</h3>
            <p className="mt-4 flex gap-3 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              {SITE.address}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              A capsule lift runs from the ground floor to the 14th floor, and ample parking is
              available in the tower.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </Label>
      {children}
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
    </div>
  );
}