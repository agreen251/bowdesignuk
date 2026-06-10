import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Order Confirmed" };

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="text-warm text-5xl mb-6">✓</div>
        <h1 className="font-serif text-4xl text-white">Order confirmed</h1>
        <p className="mt-6 text-white/60 leading-relaxed">
          Thank you for your order. Chris will be in touch within 1–2 business days to
          confirm the details and expected delivery date. Your light will be made to order
          and dispatched within 4 weeks.
        </p>
        <p className="mt-4 text-white/40 text-sm">
          A confirmation email has been sent to you via Stripe.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block border border-white/30 text-white text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:border-white transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
