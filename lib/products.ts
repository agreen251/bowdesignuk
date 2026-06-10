export type Material = "Oak" | "Ash";

export interface Product {
  slug: string;
  sku: string;
  name: string;
  tagline: string;
  price: number; // pence
  materials: Material[];
  dimensions: {
    height: string;
    width: string;
    depth: string;
  };
  leadTime: string;
  description: string[];
  careNotes: string;
  images: string[]; // paths under /public/images/
}

export const products: Product[] = [
  {
    slug: "arc-portable",
    sku: "ARC001",
    name: "The Arc Portable",
    tagline: "Handmade curved timber light. Oak or Ash.",
    price: 60000, // £600.00 in pence
    materials: ["Oak", "Ash"],
    dimensions: {
      height: "109 cm",
      width: "6.1 cm",
      depth: "4.5 cm",
    },
    leadTime: "4 weeks",
    description: [
      "The Arc Portable is a freestanding light built around the natural arc of timber. Each piece is handmade to order in Newcastle by Chris, using locally sourced oak or ash.",
      "Portable and self-contained, it works equally as a bedside table light, a reading lamp, or a feature piece against a wall. The warm LED strip follows the full curve of the wood, creating a soft, directional glow.",
      "No two pieces are identical — grain pattern and tone vary naturally between each piece of timber.",
    ],
    careNotes:
      "Wipe clean with a dry or slightly damp cloth. Avoid direct contact with water. Keep away from direct sunlight for extended periods to preserve the timber finish.",
    images: [
      "/images/arc-detail-1.JPG",
      "/images/arc-hero.JPG",
      "/images/arc-detail-2.JPG",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(pence: number): string {
  return `£${(pence / 100).toFixed(2)}`;
}
