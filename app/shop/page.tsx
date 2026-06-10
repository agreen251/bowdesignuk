import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { products, formatPrice } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop",
  description: "Hand crafted curved timber lights. Oak and Ash. Made to order.",
};

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-dark py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="font-serif text-5xl text-white">Shop</h1>
          <p className="mt-4 text-white/50 max-w-lg">
            Each piece is made to order. Please allow 4 weeks from order to delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/shop/${product.slug}`}
              className="group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-zinc-900">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-4">
                <p className="text-xs text-white/40 tracking-widest uppercase">{product.sku}</p>
                <h2 className="font-serif text-xl text-white mt-1">{product.name}</h2>
                <p className="text-white/50 text-sm mt-1">{product.tagline}</p>
                <p className="text-white font-medium mt-2">{formatPrice(product.price)}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 border-t border-white/10 pt-10 text-sm text-white/40 max-w-xl">
          <p>
            <strong className="text-white/60">Made to order.</strong> Each light is handmade by
            Chris in Newcastle using locally sourced oak or ash. Lead time is approximately 4
            weeks. We'll be in touch by email once your order is confirmed.
          </p>
          <p className="mt-3">
            Questions?{" "}
            <Link href="/contact" className="underline hover:text-white">
              Contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
