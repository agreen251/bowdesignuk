import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getProductBySlug } from "@/lib/products";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export async function POST(req: Request) {
  try {
    const { slug, material } = await req.json();

    if (!slug || !material) {
      return NextResponse.json({ error: "Missing product or material." }, { status: 400 });
    }

    const product = getProductBySlug(slug);
    if (!product) {
      return NextResponse.json({ error: "Product not found." }, { status: 404 });
    }

    if (!product.materials.includes(material)) {
      return NextResponse.json({ error: "Invalid material." }, { status: 400 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: `${product.name} — ${material}`,
              description: `Handmade to order. ${product.dimensions.height} tall. Allow ${product.leadTime}.`,
              metadata: { sku: product.sku, material },
            },
            unit_amount: product.price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      shipping_address_collection: {
        allowed_countries: ["GB"],
      },
      success_url: `${baseUrl}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/shop/${slug}`,
      metadata: {
        product_slug: slug,
        material,
        sku: product.sku,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session." },
      { status: 500 }
    );
  }
}
