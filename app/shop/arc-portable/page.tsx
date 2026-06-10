import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductBySlug, formatPrice } from "@/lib/products";
import BuyButton from "./BuyButton";

export const metadata: Metadata = {
  title: "The Arc Portable",
  description:
    "Handmade curved timber light. Oak or Ash. 109 cm. Made to order in Newcastle.",
};

export default function ArcPortablePage() {
  const product = getProductBySlug("arc-portable");
  if (!product) notFound();

  return (
    <div className="min-h-screen bg-dark py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-zinc-900">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.slice(1).map((src, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden bg-zinc-900">
                  <Image src={src} alt={`${product.name} detail ${i + 2}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="md:sticky md:top-24">
            <p className="text-warm text-xs tracking-widest uppercase">{product.sku}</p>
            <h1 className="font-serif text-4xl text-white mt-2">{product.name}</h1>
            <p className="font-serif text-3xl text-white mt-4">{formatPrice(product.price)}</p>

            <div className="mt-6 space-y-4 text-white/60 text-sm leading-relaxed">
              {product.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Dimensions */}
            <div className="mt-8 border border-white/10 rounded-lg p-5 grid grid-cols-3 gap-4 text-center text-sm">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider">Height</p>
                <p className="text-white mt-1">{product.dimensions.height}</p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider">Width</p>
                <p className="text-white mt-1">{product.dimensions.width}</p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider">Depth</p>
                <p className="text-white mt-1">{product.dimensions.depth}</p>
              </div>
            </div>

            {/* Buy section */}
            <BuyButton product={product} />

            {/* Lead time notice */}
            <div className="mt-6 bg-zinc-900 rounded-lg p-4 text-sm text-white/50">
              <p>
                <strong className="text-white/70">Made to order.</strong> Please allow{" "}
                {product.leadTime} from your order date. We'll confirm your order by email
                and keep you updated on progress.
              </p>
            </div>

            {/* Care */}
            <details className="mt-6 border-t border-white/10 pt-4">
              <summary className="text-sm text-white/50 cursor-pointer hover:text-white transition-colors">
                Care instructions
              </summary>
              <p className="mt-3 text-sm text-white/40 leading-relaxed">{product.careNotes}</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
