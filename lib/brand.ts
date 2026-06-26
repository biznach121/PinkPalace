/**
 * Brand & content configuration - the single source of truth for every
 * visible string in this storefront.
 *
 * Stage 4 demo build — reskinned from the Palmshades eyewear base for the
 * scraped TikTok business @_pinkpalace_ (Pink Palace Eyewear & Jewelry, Accra).
 */
import type { SeedName } from "@cimplify/sdk/testing/suite";

export interface BrandSocial {
  label: string;
  href: string;
  icon?: "instagram" | "x" | "tiktok" | "facebook" | "youtube" | "linkedin" | "whatsapp";
}

export interface BrandFaqEntry {
  q: string;
  a: string;
}

export interface BrandFaqSection {
  title: string;
  items: BrandFaqEntry[];
}

export interface BrandPolicySection {
  heading: string;
  body: string | { intro: string; bullets: string[] };
}

export interface BrandSitemapSection {
  title: string;
  links: { label: string; href: string }[];
}

export interface Brand {
  name: string;
  shortName: string;
  microTag: string;
  description: string;
  schemaType:
    | "Store"
    | "Bakery"
    | "Restaurant"
    | "BeautySalon"
    | "GroceryStore"
    | "LocalBusiness"
    | "Organization";
  currency: string;
  locale: string;
  contact: {
    address: string;
    streetAddress: string;
    city: string;
    countryCode: string;
    phone: string;
    phoneTel: string;
    email: string;
    privacyEmail: string;
    supportEmail?: string;
    businessEmail?: string;
    hours: string;
  };
  socials: BrandSocial[];
  header: { nav: { label: string; href: string }[] };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCtaLabel: string;
    secondaryCtaLabel?: string;
    secondaryCtaHref?: string;
  };
  trustItems?: { label: string; value: string; description: string; iconKey: string }[];
  brandStrip?: { headline: string; brands: { name: string; domain: string }[] };
  promo?: { badge: string; title: string; body: string; ctaLabel: string; ctaHref: string };
  tradeIn?: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    steps: { step: string; title: string; body: string }[];
  };
  newsletter: {
    eyebrow: string;
    title: string;
    body: string;
    placeholder: string;
    submitLabel: string;
    successLabel: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    sections: { heading: string; body: string }[];
  };
  journal: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  faq: { eyebrow: string; title: string; sections: BrandFaqSection[]; contactPrompt: string; contactEmail: string };
  terms: { eyebrow: string; title: string; lastUpdated: string; sections: BrandPolicySection[] };
  privacy: { eyebrow: string; title: string; lastUpdated: string; sections: BrandPolicySection[] };
  shipping: { eyebrow: string; title: string; lastUpdated: string; sections: BrandPolicySection[] };
  returns: { eyebrow: string; title: string; lastUpdated: string; sections: BrandPolicySection[] };
  accessibility: { eyebrow: string; title: string; lastUpdated: string; sections: BrandPolicySection[] };
  account: {
    loginEyebrow: string;
    loginTitle: string;
    loginSubtitle: string;
    signupEyebrow: string;
    signupTitle: string;
    signupSubtitle: string;
    accountEyebrow: string;
    accountTitle: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    body: string;
    reasons: string[];
    directLines: { label: string; value: string; href: string }[];
  };
  trackOrder: { eyebrow: string; title: string; body: string };
  footer: { blurb: string; sitemap: BrandSitemapSection[]; poweredBy?: { label: string; href: string } };
  llms: { summary: string };
  mock: { seed: SeedName; businessId: string };
  assets: {
    logo: string;
    footerLogo: string;
    hero: string;
    heroVideo: string;
    campaign: string[];
    hoodedSet: string;
    summer2026: string[];
    denimStory: string;
  };
  fashion: {
    season: string;
    summer2026: {
      eyebrow: string;
      title: string;
      body: string;
      primaryCtaLabel: string;
      primaryCtaHref: string;
      secondaryCtaLabel: string;
      secondaryCtaHref: string;
      signalEyebrow: string;
      signalTitle: string;
      imageKicker: string;
      lookLabel: string;
      yearMark: string;
    };
    campaignTitle: string;
    campaignBody: string;
    categoryHighlight: {
      eyebrow: string;
      title: string;
      items: { slug: string; label: string; blurb: string; href: string; image: string }[];
    };
    seenBy: {
      eyebrow: string;
      title: string;
      people: { role: string; name: string; image: string }[];
    };
    mensTitle: string;
    mensBody: string;
    womensTitle: string;
    womensBody: string;
    denimTitle: string;
    denimBody: string;
    accessoriesTitle: string;
    accessoriesBody: string;
    socialHandle: string;
  };
}

// ── Cloudinary media (Stage 4 upload, folder stage4/pinkpalace) ──
const LOGO =
  "https://res.cloudinary.com/dzykdnbvb/raw/upload/v1782492504/stage4/pinkpalace/logo.svg";
const SHOT_TORT =
  "https://res.cloudinary.com/dzykdnbvb/image/upload/v1782492278/stage4/pinkpalace/img_000.jpg"; // tortoiseshell cat-eye on model
const SHOT_BLACK =
  "https://res.cloudinary.com/dzykdnbvb/image/upload/v1782492281/stage4/pinkpalace/img_001.jpg"; // black cat-eye on model
const SHOT_PRODUCT =
  "https://res.cloudinary.com/dzykdnbvb/image/upload/v1782492283/stage4/pinkpalace/img_002.jpg"; // tortoiseshell product shot w/ logo
const SHOT_STORE =
  "https://res.cloudinary.com/dzykdnbvb/image/upload/v1782492284/stage4/pinkpalace/cover_000.jpg"; // in-store, clip-on fan
const HERO_VIDEO =
  "https://res.cloudinary.com/dzykdnbvb/video/upload/v1782492288/stage4/pinkpalace/hero_video.mp4";

// index 0 doubles as the OG/metadata hero; index 5 surfaces in the editorial panel.
const campaignImages = [SHOT_STORE, SHOT_TORT, SHOT_BLACK, SHOT_PRODUCT, SHOT_TORT, SHOT_BLACK];

export const brand: Brand = {
  name: "Pink Palace",
  shortName: "Pink Palace",
  microTag: "PP",
  description:
    "Pink Palace is an Accra eyewear & jewelry studio — cat-eye optical frames, clip-on glasses, and statement pieces, fitted to your face and styled to your look.",
  schemaType: "Store",
  currency: "GHS",
  locale: "en_GH",

  contact: {
    address: "Ashaley Botwe, Dagadu Avenue, Accra",
    streetAddress: "Dagadu Avenue, Ashaley Botwe",
    city: "Accra",
    countryCode: "GH",
    phone: "+233 505 821 056",
    phoneTel: "+233505821056",
    email: "hello@pinkpalace.gh",
    privacyEmail: "hello@pinkpalace.gh",
    supportEmail: "hello@pinkpalace.gh",
    businessEmail: "hello@pinkpalace.gh",
    hours: "Mon-Sat 9am-7pm",
  },

  socials: [
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@_pinkpalace_",
      icon: "tiktok",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/233505821056",
      icon: "whatsapp",
    },
  ],

  header: {
    nav: [{ label: "New arrivals", href: "/shop" }],
  },

  hero: {
    badge: "EYEWEAR & JEWELRY",
    title: "Frames that\nmake the look.",
    subtitle:
      "Pink Palace is an Accra eyewear & jewelry studio — cat-eye optical frames, clip-on glasses, and statement pieces, fitted to your face.",
    primaryCtaLabel: "Shop the frames",
    secondaryCtaLabel: "Our story",
    secondaryCtaHref: "/journal",
  },

  trustItems: undefined,

  brandStrip: undefined,

  promo: {
    badge: "New in",
    title: "The new frames just landed.",
    body: "Cat-eyes, clip-ons, and clear optical frames in fresh shapes — glazed to your prescription on request.",
    ctaLabel: "Shop the frames",
    ctaHref: "/shop",
  },

  tradeIn: {
    eyebrow: "Frame styling",
    title: "Find the frame that fits your face.",
    body: "Send your face shape and the look you're after on WhatsApp. We'll pull a short edit of frames that suit you and help you pick the pair you'll reach for daily.",
    primaryCtaLabel: "Chat on WhatsApp",
    primaryCtaHref: "https://wa.me/233505821056",
    secondaryCtaLabel: "Read the FAQ",
    secondaryCtaHref: "/faq",
    steps: [
      { step: "01", title: "Send the brief", body: "Face shape, budget, and the look you want." },
      { step: "02", title: "Get the edit", body: "A short pick of frames chosen to suit you." },
      { step: "03", title: "Wear them out", body: "Pickup in Ashaley Botwe or delivery in Accra." },
    ],
  },

  newsletter: {
    eyebrow: "The list",
    title: "First look at every drop.",
    body: "New frame drops, restocks, and styling tips from Pink Palace. Short and sweet, no noise.",
    placeholder: "you@email.com",
    submitLabel: "Join",
    successLabel: "You're on the list",
  },

  about: {
    eyebrow: "About Pink Palace",
    title: "Eyewear & jewelry,\nmade to be seen.",
    paragraphs: [
      "Pink Palace is an eyewear & jewelry studio in Ashaley Botwe, Accra. We curate cat-eye optical frames, clip-on glasses, and statement pieces for a look that turns heads.",
      "Every frame is picked for how it sits and how it lasts — balanced acetate, clean lines, and shapes chosen to suit real faces.",
      "Styled in Accra, made to be worn: frames and pieces built for the way you actually see and the way you want to be seen.",
    ],
    sections: [
      { heading: "Fitted to your face", body: "Frames picked by shape and width so they sit balanced all day." },
      { heading: "Lenses on request", body: "Clear, blue-light, or prescription lenses glazed to your script." },
      { heading: "Visit", body: "Ashaley Botwe, Dagadu Avenue, Accra. Mon-Sat, 9am-7pm." },
    ],
  },

  journal: {
    eyebrow: "Journal",
    title: "Styled in Accra.\nMade to be seen.",
    paragraphs: [
      "Pink Palace started in Accra with a simple idea: eyewear and jewelry that fit your face and your budget, without the guesswork.",
      "Good frames shouldn't be a compromise between how you see and how you look. So we built an edit that does both — optical, clip-on, and statement frames in shapes that suit real faces.",
      "Fitted to you, styled for the moment. Made in Accra, made to be seen.",
    ],
  },

  faq: {
    eyebrow: "Customer care",
    title: "Questions, answered.",
    sections: [
      {
        title: "Ordering",
        items: [
          { q: "How do I order?", a: "Message us on WhatsApp at 0505821056 or order through the store. We confirm stock and arrange pickup or delivery." },
          { q: "Can I pick up in person?", a: "Yes. We're in Ashaley Botwe on Dagadu Avenue, Accra. Message us first to confirm your pair is ready." },
          { q: "Do you deliver?", a: "We deliver across Accra and ship regionally. Rates and timing are confirmed when you order." },
        ],
      },
      {
        title: "Frames and lenses",
        items: [
          { q: "Can I add my prescription?", a: "Yes — most frames can be glazed to your prescription on request. Send us your script and we'll confirm before glazing." },
          { q: "What lens options are there?", a: "Clear, blue-light, and prescription lenses, with anti-glare options on selected frames." },
          { q: "How do I choose the right size?", a: "Tell us your usual frame or send a photo and we'll guide you to the right fit." },
        ],
      },
      {
        title: "Returns and exchanges",
        items: [
          { q: "Can I return a frame?", a: "Unworn frames in original condition can be exchanged within 3 days. Prescription-glazed lenses are made to order." },
          { q: "What if my order arrives damaged?", a: "Send us a photo and your order details within 48 hours and we'll make it right." },
        ],
      },
      {
        title: "Payment",
        items: [
          { q: "What payment methods do you accept?", a: "Mobile Money and cash on pickup. Card on request." },
          { q: "Are clip-ons priced separately?", a: "Yes — clip-on sets are priced per set; optical frames are priced per frame." },
        ],
      },
    ],
    contactPrompt: "Still stuck? Message",
    contactEmail: "hello@pinkpalace.gh",
  },

  terms: {
    eyebrow: "Terms",
    title: "Terms of Service",
    lastUpdated: "1 June 2026",
    sections: [
      { heading: "1. Who we are", body: "Pink Palace is an eyewear & jewelry studio based in Ashaley Botwe, Accra, Ghana. By placing an order, you agree to these terms." },
      { heading: "2. Orders", body: "Orders are accepted once stock and payment are confirmed. We may cancel and refund orders affected by stock errors." },
      { heading: "3. Product details", body: "We aim to show frame colour, finish, and shape accurately, but screens vary. Lens prescriptions are glazed to the details you provide." },
      { heading: "4. Payment", body: "Prices are listed in Ghana Cedis. Prescription lenses are added when you order. Payment is by Mobile Money, cash, or card on request." },
      { heading: "5. Returns", body: "Returns and exchanges follow the policy on the Returns page. Frames must be unworn and in original condition." },
      { heading: "6. Contact", body: "Questions about these terms can be sent to hello@pinkpalace.gh or WhatsApp 0505821056." },
    ],
  },

  privacy: {
    eyebrow: "Privacy",
    title: "Privacy Policy",
    lastUpdated: "1 June 2026",
    sections: [
      { heading: "What we collect", body: "We collect the details needed to process orders and support customers: name, phone, delivery address, prescription details where relevant, and order history." },
      { heading: "How we use it", body: { intro: "We use your information to:", bullets: ["Prepare and deliver orders.", "Glaze lenses to your prescription.", "Send order updates.", "Respond to messages.", "Share new drops only when you opt in."] } },
      { heading: "Who we share it with", body: "We share data only with the delivery and payment partners required to fulfil your order." },
      { heading: "Your choices", body: "You can ask to access, correct, or delete your information by messaging hello@pinkpalace.gh." },
    ],
  },

  shipping: {
    eyebrow: "Shipping",
    title: "Delivery and Pickup",
    lastUpdated: "1 June 2026",
    sections: [
      { heading: "Accra delivery", body: "We deliver across Accra. In-stock frames usually go out within one to two days; rates are confirmed when you order." },
      { heading: "Pickup", body: "Pickup is available at Ashaley Botwe, Dagadu Avenue. Message us first to confirm your pair is ready." },
      { heading: "Outside Accra", body: "Regional delivery is handled by partner couriers, with rates and timing confirmed at order." },
    ],
  },

  returns: {
    eyebrow: "Returns",
    title: "Returns and Exchanges",
    lastUpdated: "1 June 2026",
    sections: [
      { heading: "Exchange window", body: "Unworn frames in original condition can be exchanged within 3 days of delivery or pickup." },
      { heading: "Prescription lenses", body: "Prescription-glazed lenses are made to order and cannot be returned unless faulty or glazed in error." },
      { heading: "Damaged items", body: "Send photos and your order details within 48 hours so we can make it right." },
    ],
  },

  accessibility: {
    eyebrow: "Accessibility",
    title: "Accessibility Statement",
    lastUpdated: "1 June 2026",
    sections: [
      { heading: "Our commitment", body: "We want Pink Palace to be usable by as many people as possible and aim for WCAG 2.1 AA standards." },
      { heading: "What we test", body: { intro: "We focus on:", bullets: ["Readable contrast.", "Keyboard navigation.", "Clear labels for controls and imagery.", "Layouts that work across mobile and desktop."] } },
      { heading: "Reporting issues", body: "Message hello@pinkpalace.gh and we'll respond as soon as we can." },
    ],
  },

  account: {
    loginEyebrow: "Welcome back",
    loginTitle: "Sign in to Pink Palace",
    loginSubtitle: "Track orders, manage addresses, and return to saved checkout details.",
    signupEyebrow: "Join Pink Palace",
    signupTitle: "Create your Pink Palace account",
    signupSubtitle: "Save your details, track orders, and check out faster when new frames drop.",
    accountEyebrow: "Your account",
    accountTitle: "Welcome back",
  },

  contactPage: {
    eyebrow: "Contact",
    title: "Talk to Pink Palace.",
    body: "Frame fit, prescriptions, order support, or collaborations — send a note and we'll reply soon.",
    reasons: ["Frame fit", "Prescription help", "Order issue", "Exchange", "Collaboration"],
    directLines: [
      { label: "WhatsApp", value: "+233 505 821 056", href: "https://wa.me/233505821056" },
      { label: "Phone", value: "+233 505 821 056", href: "tel:+233505821056" },
      { label: "Email", value: "hello@pinkpalace.gh", href: "mailto:hello@pinkpalace.gh" },
    ],
  },

  trackOrder: {
    eyebrow: "Track an order",
    title: "Where are your frames?",
    body: "Enter your order number and phone to see the latest status.",
  },

  footer: {
    blurb: "Eyewear & jewelry from Accra: cat-eye optical frames, clip-on glasses, and statement pieces — fitted to your face and styled to your look.",
    sitemap: [
      {
        title: "Shop",
        links: [
          { label: "All products", href: "/shop" },
          { label: "Optical", href: "/categories/optical" },
          { label: "Clip-ons", href: "/categories/clip-on" },
          { label: "Statement", href: "/categories/statement" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Contact", href: "/contact" },
          { label: "Track an order", href: "/track-order" },
          { label: "Shipping", href: "/shipping" },
          { label: "Returns", href: "/returns" },
          { label: "FAQ", href: "/faq" },
        ],
      },
      {
        title: "Account",
        links: [
          { label: "Sign in", href: "/login" },
          { label: "Create account", href: "/signup" },
          { label: "Your orders", href: "/account/orders" },
          { label: "Settings", href: "/account/settings" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Terms of Service", href: "/terms" },
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Accessibility", href: "/accessibility" },
          { label: "Sitemap", href: "/sitemap-page" },
        ],
      },
    ],
    poweredBy: { label: "Cimplify", href: "https://app.cimplify.io" },
  },

  llms: {
    summary:
      "Pink Palace is an Accra-based eyewear & jewelry studio offering cat-eye optical frames, clip-on glasses, and statement pieces — fitted to your face, with clear, blue-light, and prescription lenses on request, pickup in Ashaley Botwe, delivery across Accra, and Cimplify-powered checkout.",
  },

  mock: {
    seed: "fashion",
    businessId: "bus_pink_palace",
  },

  assets: {
    logo: LOGO,
    footerLogo: LOGO,
    hero: campaignImages[0],
    heroVideo: HERO_VIDEO,
    campaign: campaignImages,
    hoodedSet: SHOT_STORE,
    summer2026: [SHOT_PRODUCT, SHOT_TORT, SHOT_BLACK, SHOT_STORE],
    denimStory: SHOT_PRODUCT,
  },

  fashion: {
    season: "EYEWEAR & JEWELRY",
    summer2026: {
      eyebrow: "New season",
      title: "Cat-eye optical frames.",
      body: "Soft, flattering cat-eye shapes glazed to your prescription on request — the frames everyone's reaching for.",
      primaryCtaLabel: "Shop the collection",
      primaryCtaHref: "/shop",
      secondaryCtaLabel: "View lookbook",
      secondaryCtaHref: "/collections/new-2026",
      signalEyebrow: "New in",
      signalTitle: "Three frames. One clear look.",
      imageKicker: "2026",
      lookLabel: "Frame",
      yearMark: "2026",
    },
    campaignTitle: "See clearly, look sharp.",
    campaignBody:
      "Frames and pieces built for movement and light — shapes that keep their edge from morning to night.",
    categoryHighlight: {
      eyebrow: "Shop by category",
      title: "Find your frame.",
      items: [
        {
          slug: "optical",
          label: "Optical",
          blurb: "Cat-eye and clear frames, glazed to your prescription on request.",
          href: "/categories/optical",
          image: SHOT_TORT,
        },
        {
          slug: "clip-on",
          label: "Clip-ons",
          blurb: "Magnetic clip-on sets — switch your look in a click.",
          href: "/categories/clip-on",
          image: SHOT_STORE,
        },
        {
          slug: "statement",
          label: "Statement",
          blurb: "Bold shapes and sunglasses made to be noticed.",
          href: "/categories/statement",
          image: SHOT_BLACK,
        },
      ],
    },
    seenBy: {
      eyebrow: "Pink Palace",
      title: "Worn by Accra",
      people: [
        {
          role: "Optical",
          name: "Everyday cat-eye",
          image: SHOT_TORT,
        },
        {
          role: "Statement",
          name: "Bold black frame",
          image: SHOT_BLACK,
        },
        {
          role: "Clip-on",
          name: "Switch your look",
          image: SHOT_STORE,
        },
      ],
    },
    mensTitle: "Optical frames",
    mensBody: "Clean cat-eye and rounded shapes, glazed to your prescription on request.",
    womensTitle: "Statement frames",
    womensBody: "Bold colour and sharp silhouettes — frames made to be noticed.",
    denimTitle: "Clip-on sets",
    denimBody: "Magnetic clip-ons that switch your look in a click — clear to shaded in one move.",
    accessoriesTitle: "Complete the look",
    accessoriesBody: "Jewelry, cases, cords, and cloths to keep every frame sharp.",
    socialHandle: "@_pinkpalace_",
  },
};
