export const SITE = {
  name: "Mainland Chinese Blue",
  tagline: "The Only Revolving Restaurant in Bangladesh",
  address: "Siaam Tower, 14th Floor, Plot 15, Road 02, Sector 3, Uttara, Dhaka",
  phones: ["+8801707092505", "+8801790099282"],
  email: "mainlandchineseblue@gmail.com",
  hours: "Saturday – Friday, 12:00 PM – 11:00 PM",
  whatsapp: "8801707092505",
  whatsappMessage: "Hello Mainland Chinese Blue! I'd like to know more about booking a table.",
  mapEmbed:
    "https://www.google.com/maps?q=23.86261065204505,90.39947011349396&hl=en&z=17&output=embed",
  socials: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
};

export const whatsappLink = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/menu", label: "Menu" },
  { to: "/reservation", label: "Reservation" },
  { to: "/contact-us", label: "Contact Us" },
] as const;

export type MenuItem = {
  name: string;
  description: string;
  price: number;
  category: string;
  spice?: 0 | 1 | 2 | 3;
  veg?: boolean;
};

export const MENU_CATEGORIES = [
  "Appetizers",
  "Soups",
  "Cantonese",
  "Szechuan",
  "Hubei",
  "Hunan",
  "Continental",
  "Rice & Noodles",
  "Desserts",
  "Beverages",
];

export const MENU_ITEMS: MenuItem[] = [
  { name: "Crispy Golden Prawn Rolls", description: "Hand-rolled prawn in filo, sweet chilli glaze", price: 690, category: "Appetizers", spice: 1 },
  { name: "Chicken Wonton Basket", description: "Steamed wontons, ginger-scallion oil", price: 540, category: "Appetizers" },
  { name: "Salt & Pepper Squid", description: "Wok-tossed with garlic, chilli and spring onion", price: 780, category: "Appetizers", spice: 2 },
  { name: "Sesame Lotus Crisps", description: "Lotus root, black sesame, chilli salt", price: 420, category: "Appetizers", veg: true, spice: 1 },
  { name: "Hot & Sour Soup", description: "Classic Szechuan broth, bamboo shoot, tofu", price: 380, category: "Soups", spice: 2 },
  { name: "Sweet Corn Chicken Soup", description: "Velvet corn, shredded chicken, egg ribbon", price: 360, category: "Soups" },
  { name: "Thai Clear Prawn Soup", description: "Lemongrass, galangal, kaffir lime", price: 460, category: "Soups", spice: 2 },
  { name: "Cantonese Steamed Sea Bass", description: "Whole fish, ginger, soy and scallion", price: 1650, category: "Cantonese" },
  { name: "Honey Roast Chicken", description: "Slow roasted, Cantonese honey lacquer", price: 890, category: "Cantonese" },
  { name: "Beef in Oyster Sauce", description: "Tender beef, mushroom, bok choy", price: 980, category: "Cantonese" },
  { name: "Szechuan Chilli Chicken", description: "Dry-fried with Szechuan peppercorn", price: 850, category: "Szechuan", spice: 3 },
  { name: "Mapo Tofu", description: "Silken tofu, fermented bean, chilli oil", price: 620, category: "Szechuan", spice: 3, veg: true },
  { name: "Kung Pao Prawn", description: "Roasted peanut, dried chilli, black vinegar", price: 1120, category: "Szechuan", spice: 2 },
  { name: "Hubei Steamed Pearl Meatballs", description: "Glutinous rice crusted chicken meatballs", price: 760, category: "Hubei" },
  { name: "Wuhan Style Braised Fish", description: "Slow braise, star anise, aged soy", price: 1280, category: "Hubei", spice: 1 },
  { name: "Hubei Lotus & Rib Broth", description: "Lotus root simmered with tender ribs", price: 940, category: "Hubei" },
  { name: "Hunan Smoked Chicken", description: "Tea-smoked, dried chilli, garlic stem", price: 980, category: "Hunan", spice: 3 },
  { name: "Hunan Beef with Cumin", description: "Cumin, fresh chilli, coriander", price: 1080, category: "Hunan", spice: 3 },
  { name: "Chilli Garlic Vegetables", description: "Seasonal greens, Hunan chilli paste", price: 560, category: "Hunan", spice: 2, veg: true },
  { name: "Grilled Lamb Chops", description: "Rosemary jus, extra virgin olive oil, mash", price: 1750, category: "Continental" },
  { name: "Chicken Steak Diane", description: "Mushroom cream, buttered vegetables", price: 1050, category: "Continental" },
  { name: "Pan-Seared Salmon", description: "Lemon butter, asparagus, herbed potato", price: 1890, category: "Continental" },
  { name: "Mainland Special Fried Rice", description: "Prawn, chicken, egg, spring onion", price: 720, category: "Rice & Noodles" },
  { name: "Burnt Garlic Noodles", description: "Hakka noodles, crisp garlic, vegetables", price: 640, category: "Rice & Noodles", veg: true },
  { name: "Seafood Chow Mein", description: "Prawn, squid, fish in silky wok sauce", price: 980, category: "Rice & Noodles", spice: 1 },
  { name: "Steamed Jasmine Rice", description: "Fragrant long grain", price: 220, category: "Rice & Noodles", veg: true },
  { name: "Date Pancake with Ice Cream", description: "Warm pastry, vanilla bean ice cream", price: 480, category: "Desserts", veg: true },
  { name: "Honey Noodles & Ice Cream", description: "Crisp noodles, wild honey", price: 460, category: "Desserts", veg: true },
  { name: "Chocolate Lava Pot", description: "Molten centre, gold dust", price: 520, category: "Desserts", veg: true },
  { name: "Blue Skyline Mocktail", description: "Blue curaçao soda, citrus, mint", price: 380, category: "Beverages", veg: true },
  { name: "Jasmine Pot Tea", description: "Traditional Chinese green jasmine", price: 240, category: "Beverages", veg: true },
  { name: "Fresh Lime Mint Cooler", description: "Hand-pressed lime, crushed mint", price: 260, category: "Beverages", veg: true },
];

export const FEATURED_DISHES = [
  { name: "Cantonese Steamed Sea Bass", price: 1650, image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80" },
  { name: "Szechuan Chilli Chicken", price: 850, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=80" },
  { name: "Kung Pao Prawn", price: 1120, image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80" },
  { name: "Grilled Lamb Chops", price: 1750, image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80" },
  { name: "Hunan Smoked Chicken", price: 980, image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?auto=format&fit=crop&w=900&q=80" },
  { name: "Seafood Chow Mein", price: 980, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=80" },
  { name: "Pan-Seared Salmon", price: 1890, image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80" },
  { name: "Chocolate Lava Pot", price: 520, image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=900&q=80" },
];

export const GALLERY = [
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", tag: "Interior", alt: "Warm restaurant dining room" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80", tag: "Interior", alt: "Candlelit table setting" },
  { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80", tag: "Interior", alt: "Fine dining seating area" },
  { src: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80", tag: "Food", alt: "Signature plated dish" },
  { src: "https://images.unsplash.com/photo-1541544181051-e46607bc22a4?auto=format&fit=crop&w=1200&q=80", tag: "Food", alt: "Chinese dishes on a table" },
  { src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1200&q=80", tag: "Food", alt: "Grilled main course" },
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80", tag: "Events", alt: "Celebration event hall" },
  { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80", tag: "Events", alt: "Anniversary dinner celebration" },
  { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80", tag: "Events", alt: "Private party gathering" },
  { src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80", tag: "City View", alt: "City skyline at dusk" },
  { src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80", tag: "City View", alt: "Night city view from above" },
  { src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80", tag: "City View", alt: "Skyline panorama through glass" },
];