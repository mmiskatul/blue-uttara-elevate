# Blue Horizon Builder

# Website Generation Prompt — Mainland Chinese Blue Uttara

Copy everything below into Lovable (or v0 / Bolt) as your starting prompt.

---

## PROMPT START

Build a modern, production-ready restaurant website for **"Mainland Chinese Blue"** — Bangladesh's only revolving fine-dining restaurant, located on the 14th floor of Siaam Tower in Uttara, Dhaka.

### Brand & Design Direction
- Premium, fine-dining aesthetic — think dark elegant tones (deep navy/charcoal or black) paired with warm gold/amber accents, NOT a generic bright "fast food" look
- Typography: an elegant serif for headings (e.g. Playfair Display or Cormorant), clean sans-serif for body text (e.g. Inter or Poppins)
- Subtle motion: fade-ins on scroll, smooth page transitions, a soft parallax on hero images
- Fully responsive — mobile-first, since most guests will book from their phone
- Sticky/glass-effect navigation bar that turns solid on scroll
- Use a warm, upscale color palette — imagine candlelight, mahogany wood, gold cutlery — avoid generic red/yellow "Chinese restaurant" clichés

### Tech Requirements
- React + React Router (each nav item below is its own routed page, not an anchor/section)
- Component-based structure: reusable Navbar, Footer, Button, Card, SectionHeading components
- Use placeholder images from Unsplash (food photography, restaurant interiors, skyline views) until real photos are supplied
- Add proper `<title>` and meta description per page for SEO
- Include a floating WhatsApp "Chat with us" button (bottom-right) linking to wa.me with a pre-filled message
- Include a floating "Call Now" button on mobile

### Site Structure — Each Nav Item = Its Own Page

**1. Home (`/`)**
- Full-screen hero slider (2–3 slides) with the tagline "The Only Revolving Restaurant in Bangladesh"
- CTA buttons: "Book a Table" and "View Menu"
- "Why Mainland Chinese Blue" section — 4 icon cards: Revolving Dining Experience, Extra Virgin Olive Oil & Imported Spices, Candlelight Dinners Every Night, Capsule Lift to 14th Floor
- Cuisine highlight strip: Cantonese, Szechuan, Hubei, Hunan & Continental
- Featured dishes carousel (6–8 signature dishes with images, names, prices)
- Services section: Birthday Parties, Weddings, Anniversaries, Conferences, Outside Catering, Home Delivery
- Testimonials carousel
- Reservation CTA banner
- Instagram/Facebook feed strip (optional)

**2. About (`/about`)**
- Restaurant story: opened as the only revolving restaurant in the country, built on Italian mechanism
- Chef's philosophy / kitchen standards (hygiene, imported spices, extra virgin olive oil)
- Timeline or stats bar (years in business, dishes served, floor level, seating capacity)
- Team/chef spotlight section (placeholder photos + roles)

**3. Gallery (`/gallery`)**
- Masonry or grid photo gallery with filter tabs: Interior, Food, Events, City View
- Lightbox on click (enlarge image, swipe through)
- Optional embedded video section (Facebook/Instagram reel embed)

**4. Menu (`/menu`)**
- Do NOT use scanned JPG menu pages — rebuild as structured, searchable content
- Category tabs: Appetizers, Soups, Cantonese, Szechuan, Hubei, Hunan, Continental, Rice & Noodles, Desserts, Beverages
- Each item as a card: name, short description, price in ৳ (Taka), optional spice-level icon, optional veg/non-veg indicator
- Search/filter bar at top
- "Download Full Menu PDF" button as a fallback

**5. Reservation (`/reservation`)**
- Real booking form (not a Facebook redirect): Name, Phone, Email, Date, Time, Number of Guests, Occasion (dropdown: Birthday, Anniversary, Business, Casual), Special Requests textarea
- Form validation, success confirmation screen/toast
- Sidebar with opening hours, direct call button, and a note about the capsule lift/parking
- (Wire the submit action to a placeholder function — note in a comment where to connect real backend/email service later)

**6. Contact Us (`/contact-us`)**
- Address, phone numbers, email, embedded Google Map (use the coordinates 23.86261065204505, 90.39947011349396)
- Contact form: Name, Email, Subject, Message
- Opening hours table (Saturday–Friday, 12:00 PM – 11:00 PM)
- Social links (Facebook, Instagram, WhatsApp)

### Shared Components
- **Navbar**: Logo left, nav links center (Home, About, Gallery, Menu, Reservation, Contact Us), phone number + "Book a Table" button right. Collapses to a hamburger + slide-in drawer on mobile.
- **Footer**: Logo, short about blurb, quick links, opening hours, contact info, social icons, embedded mini-map, copyright line

### Content to Use
- Name: Mainland Chinese Blue
- Location: Siaam Tower, 14th Floor, Plot 15, Road 02, Sector 3, Uttara, Dhaka, Bangladesh
- Phone: +880 1707 092505 / +880 1790 099282
- Email: mainlandchineseblue@gmail.com
- Hours: Saturday–Friday, 12:00 PM – 11:00 PM (open all week)
- Cuisine: Cantonese, Szechuan, Hubei, Hunan & Continental
- Unique selling points: Only revolving restaurant in Bangladesh (Italian mechanism), extra virgin olive oil + imported spices, candlelight dinner nightly, capsule lift service from ground floor to 14th floor, ample parking, home delivery, event hosting

### Do NOT
- Do not use stock "Chinese takeout" red/gold clip-art style graphics
- Do not cram all pages into a single scrolling page — each nav item must be its own route/page
- Do not use low-res scanned menu images — build the menu as real components

## PROMPT END



http://mainlandchineseblueuttara.com/

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d84980e3-7abf-4efc-9f8c-4ab01653ae22).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
