"use client";

import { useState } from "react";
import type { Product, Material } from "@/lib/products";

export default function BuyButton({ product }: { product: Product }) {
  const [material, setMaterial] = useState<Material | "">("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleBuy() {
    if (!material) {
      setError("Please select a material before adding to cart.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: product.slug, material }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong.");

      window.location.href = data.url; // redirect to Stripe Checkout
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <div className="mt-8 space-y-4">
      {/* Material selector */}
      <div>
        <label className="block text-sm text-white/50 mb-2 tracking-wider uppercase text-xs">
          Material
        </label>
        <div className="grid grid-cols-2 gap-3">
          {product.materials.map((mat) => (
            <button
              key={mat}
              onClick={() => { setMaterial(mat); setError(""); }}
              className={`py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                material === mat
                  ? "border-white bg-white text-dark"
                  : "border-white/20 text-white/60 hover:border-white/50"
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
        {material && (
          <p className="mt-2 text-xs text-white/40">
            {material === "Oak"
              ? "English oak — warm golden grain, durable and characterful."
              : "Ash — pale, straight grain with subtle figure. Lighter in tone."}
          </p>
        )}
      </div>

      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}

      <button
        onClick={handleBuy}
        disabled={loading}
        className="w-full bg-white text-dark font-medium text-sm tracking-widest uppercase py-4 rounded-full hover:bg-warm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Redirecting to checkout…" : "Order Now — £600"}
      </button>

      <p className="text-xs text-white/30 text-center">
        Secure checkout via Stripe. No card details stored on this site.
      </p>
    </div>
  );
}
