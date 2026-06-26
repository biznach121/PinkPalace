/**
 * Demo eyewear catalogue.
 *
 * The SDK mock ships a generic `fashion` seed (Studio FRX hoodies/tees). For the
 * demo we replace that catalogue in-place with this brand's eyewear line-up:
 * frames across the three storefront categories (optical, clip-on, and
 * statement), each with a frame-fit axis and the same campaign imagery used by
 * the home page's "Shop by category" section — so a preview demo stays visually
 * consistent end to end.
 *
 * Why overwrite a live registry instead of authoring a seed? `createMockApp`
 * only accepts a built-in seed *name*, so we seed `fashion` (which also wires the
 * business, sessions and demo orders) and then swap the catalogue stores here.
 *
 * NOTE — demo only. In a real tenant the storefront reads the live catalogue and
 * its variants straight from the Cimplify dashboard; this file is never loaded
 * (see `DEMO_MODE`). Flip to a live key and the same pages render real glasses.
 */

// Frozen timestamp so build-time prerender stays deterministic.
const ISO = "2026-01-01T00:00:00.000Z";

// Frame fit run for every product. Glasses ship in a few face widths rather than
// clothing sizes; the PDP renders these as a labelled "Fit" option list.
// Demo data — a real tenant defines fits/options per product on the dashboard.
const FITS = ["Narrow", "Regular", "Wide"] as const;

type ColorVariantSpec = {
  /** Swatch label — drives the PDP colour selector ("Black" / "Tortoise"). */
  color: string;
  /** Gallery for this colourway (one or more shots). */
  images: string[];
};

type ProductSpec = {
  slug: string;
  name: string;
  price: string;
  category: string;
  description: string;
  tags?: string[];
  isSignature?: boolean;
  isNew?: boolean;
  /** Single-colourway products: the frame's gallery. Omit when `variants` is set. */
  images?: string[];
  /** Multi-colourway products: each colour carries its own gallery. */
  variants?: ColorVariantSpec[];
};

// Real product photography from the business's TikTok (Stage 4 → Cloudinary,
// folder stage4/pinkpalace). Only a few real shots exist, so products pair their
// own shot with a sibling shot for a two-thumbnail PDP gallery (demo only — a
// real tenant uploads front/angle/detail shots per product on the dashboard).
const TORT_CATEYE =
  "https://res.cloudinary.com/dzykdnbvb/image/upload/v1782492278/stage4/pinkpalace/img_000.jpg"; // tortoiseshell cat-eye on model
const NOIR_CATEYE =
  "https://res.cloudinary.com/dzykdnbvb/image/upload/v1782492281/stage4/pinkpalace/img_001.jpg"; // black cat-eye on model
const TORT_PRODUCT =
  "https://res.cloudinary.com/dzykdnbvb/image/upload/v1782492283/stage4/pinkpalace/img_002.jpg"; // tortoiseshell product shot w/ logo
const CLIPON_FAN =
  "https://res.cloudinary.com/dzykdnbvb/image/upload/v1782492284/stage4/pinkpalace/cover_000.jpg"; // in-store, clip-on fan

const CATEGORIES: { slug: string; name: string; description: string }[] = [
  {
    slug: "optical",
    name: "Optical",
    description: "Cat-eye and clear optical frames, glazed to your prescription on request.",
  },
  {
    slug: "clip-on",
    name: "Clip-ons",
    description: "Magnetic clip-on glasses — switch from clear to shaded in a click.",
  },
  {
    slug: "statement",
    name: "Statement",
    description: "Bold shapes and sunglasses made to be noticed.",
  },
];

// Order matters: the homepage treats the first four as "featured" and the rest
// as "new arrivals", so lead with the hero pieces.
const PRODUCTS: ProductSpec[] = [
  {
    slug: "tortoise-cat-eye",
    name: "Tortoise Cat-Eye",
    price: "220.00",
    category: "optical",
    description:
      "A warm tortoiseshell cat-eye with a confident lift — a flattering optical frame, glazed to your prescription on request.",
    tags: ["optical", "cat-eye", "signature", "new"],
    isSignature: true,
    isNew: true,
    images: [TORT_CATEYE, TORT_PRODUCT],
  },
  {
    slug: "noir-cat-eye",
    name: "Noir Cat-Eye",
    price: "220.00",
    category: "optical",
    description:
      "A glossy black cat-eye with a sharp upsweep — a bold everyday frame that goes with everything.",
    tags: ["optical", "cat-eye", "signature"],
    isSignature: true,
    images: [NOIR_CATEYE, TORT_CATEYE],
  },
  {
    slug: "clip-on-set",
    name: "Clip-On Glasses Set",
    price: "300.00",
    category: "clip-on",
    description:
      "A magnetic clip-on set that switches your frames from clear to shaded in a click — one frame, every mood.",
    tags: ["clip-on", "set", "signature", "new"],
    isSignature: true,
    isNew: true,
    images: [CLIPON_FAN, NOIR_CATEYE],
  },
  {
    slug: "clear-optical",
    name: "Clear Optical Frame",
    price: "200.00",
    category: "optical",
    description:
      "A clean, translucent optical frame that filters blue-light glare for long screen days — light and balanced all day.",
    tags: ["optical", "clear", "new"],
    isNew: true,
    images: [TORT_PRODUCT, NOIR_CATEYE],
  },
  {
    slug: "bold-statement",
    name: "Bold Statement Frame",
    price: "240.00",
    category: "statement",
    description:
      "A bold, oversized silhouette made to be noticed — the frame that finishes the look.",
    tags: ["statement", "bold", "new"],
    isNew: true,
    images: [NOIR_CATEYE, CLIPON_FAN],
  },
  {
    slug: "clip-on-duo",
    name: "Clip-On Duo",
    price: "300.00",
    category: "clip-on",
    description:
      "Two clip-on shades for one optical frame — switch your tint to match the day.",
    tags: ["clip-on", "duo"],
    images: [CLIPON_FAN, TORT_CATEYE],
  },
];

// Home-page strips (max three render; empty ones are filtered out). Slugs are
// kept stable so existing `/collections/<slug>` links stay valid.
const COLLECTIONS: { slug: string; name: string; description: string; productSlugs: string[] }[] = [
  {
    slug: "new-2026",
    name: "New In 2026",
    description: "The latest line-up — optical, clip-on, and statement frames.",
    productSlugs: ["tortoise-cat-eye", "clip-on-set", "clear-optical", "bold-statement"],
  },
  {
    slug: "best-sellers",
    name: "Best Sellers",
    description: "The frames everyone's reaching for.",
    productSlugs: ["noir-cat-eye", "tortoise-cat-eye", "clip-on-duo", "clear-optical"],
  },
];

// Catalogue stores we own entirely. Wiped before re-seeding so no `fashion`
// artifact (Drop 04, size variants, FRX tags…) lingers and references dead ids.
const CATALOGUE_STORES = [
  "products",
  "categories",
  "collections",
  "variants",
  "variantAxes",
  "tags",
  "addOns",
  "productAddOns",
  "bundles",
  "composites",
  "knowledgeArticles",
  "taxonomies",
  "attributeDefs",
] as const;

type Store = {
  get: (id: string) => unknown;
  put: (id: string, value: unknown) => unknown;
  reset: () => void;
};
type Registry = Record<string, Store>;

/**
 * Replace the seeded catalogue with the demo eyewear line-up. Safe to call once
 * per mock-app instance, after `createMockApp({ seed: "fashion" })`.
 */
export function applyDemoCatalogue(registry: Registry, businessId: string) {
  for (const name of CATALOGUE_STORES) registry[name]?.reset();

  const catIdBySlug = new Map<string, string>();
  for (const c of CATEGORIES) {
    const id = `cat_${c.slug}`;
    catIdBySlug.set(c.slug, id);
    registry.categories.put(id, {
      id,
      business_id: businessId,
      name: c.name,
      slug: c.slug,
      description: c.description,
      product_ids: [] as string[],
      display_order: 0,
      is_active: true,
      created_at: ISO,
      updated_at: ISO,
    });
  }

  for (const p of PRODUCTS) {
    const id = `prod_${p.slug}`;
    const catId = catIdBySlug.get(p.category);
    const hasColor = Boolean(p.variants?.length);

    // Colourways drive which front/angle gallery a variant shows. No colour axis →
    // one implicit colourway using the product's own [front, angle].
    const colourways = hasColor
      ? p.variants!.map((v) => ({ name: v.color, images: v.images }))
      : [{ name: null as string | null, images: p.images as string[] }];

    // Default gallery leads with the first colourway.
    const gallery: string[] = colourways[0].images;

    // ── Axes: optional Colour (display_order 0) + Fit ──
    const colorAxisId = `axis_${p.slug}_color`;
    const fitAxisId = `axis_${p.slug}_fit`;
    const colorValueId = (name: string) => `axv_${p.slug}_color_${name.toLowerCase()}`;
    const fitValueId = (fit: string) => `axv_${p.slug}_fit_${fit.toLowerCase()}`;

    if (hasColor) {
      registry.variantAxes.put(colorAxisId, {
        id: colorAxisId,
        business_id: businessId,
        product_id: id,
        name: "Colour",
        display_order: 0,
        affects_recipe: false,
        values: colourways.map((c, i) => ({
          id: colorValueId(c.name as string),
          business_id: businessId,
          axis_id: colorAxisId,
          name: c.name,
          display_order: i,
          created_at: ISO,
          updated_at: ISO,
        })),
        created_at: ISO,
        updated_at: ISO,
      });
    }

    registry.variantAxes.put(fitAxisId, {
      id: fitAxisId,
      business_id: businessId,
      product_id: id,
      name: "Fit",
      display_order: hasColor ? 1 : 0,
      affects_recipe: false,
      values: FITS.map((fit, i) => ({
        id: fitValueId(fit),
        business_id: businessId,
        axis_id: fitAxisId,
        name: fit,
        display_order: i,
        created_at: ISO,
        updated_at: ISO,
      })),
      created_at: ISO,
      updated_at: ISO,
    });

    // ── Variants: cartesian product of colourway × fit ──
    const variantIds: string[] = [];
    let first = true;
    for (const c of colourways) {
      for (const fit of FITS) {
        const colorPart = c.name ? `${c.name.toLowerCase()}-` : "";
        const variantId = `var_${p.slug}_${colorPart}${fit.toLowerCase()}`;
        const axisValueIds = c.name
          ? [colorValueId(c.name), fitValueId(fit)]
          : [fitValueId(fit)];
        registry.variants.put(variantId, {
          id: variantId,
          product_id: id,
          business_id: businessId,
          name: c.name ? `${c.name} · ${fit}` : fit,
          sku: `${p.slug.toUpperCase()}-${c.name ? `${c.name.toUpperCase()}-` : ""}${fit.toUpperCase()}`,
          price_adjustment: "0.00",
          component_multiplier: "1.00",
          is_default: first,
          is_active: true,
          axis_value_ids: axisValueIds,
          // Per-variant gallery — the PDP swaps these when a colourway is picked.
          images: c.images,
          created_at: ISO,
          updated_at: ISO,
        });
        variantIds.push(variantId);
        first = false;
      }
    }

    registry.products.put(id, {
      id,
      business_id: businessId,
      name: p.name,
      slug: p.slug,
      description: p.description,
      product_type: "product",
      base_price: p.price,
      currency: "GHS",
      image: gallery[0],
      images: gallery,
      is_available: true,
      category_ids: catId ? [catId] : [],
      collection_ids: [] as string[],
      add_on_ids: [] as string[],
      variant_ids: variantIds,
      tags: p.tags ?? [],
      is_signature: p.isSignature ?? false,
      is_new: p.isNew ?? false,
      render_hint: "physical",
      created_at: ISO,
      updated_at: ISO,
    });

    if (catId) {
      const cat = registry.categories.get(catId) as { product_ids: string[] };
      cat.product_ids.push(id);
      registry.categories.put(catId, cat);
    }
  }

  for (const col of COLLECTIONS) {
    const id = `col_${col.slug}`;
    const productIds = col.productSlugs.map((s) => `prod_${s}`);
    registry.collections.put(id, {
      id,
      business_id: businessId,
      name: col.name,
      slug: col.slug,
      description: col.description,
      product_ids: productIds,
      is_active: true,
      created_at: ISO,
      updated_at: ISO,
    });
    for (const pid of productIds) {
      const product = registry.products.get(pid) as { collection_ids: string[] } | undefined;
      if (product) {
        product.collection_ids.push(id);
        registry.products.put(pid, product);
      }
    }
  }
}
