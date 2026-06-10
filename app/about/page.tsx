import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Bow Design UK and how The Arc came to be.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/workshop.JPG"
            alt="Chris working in his Newcastle workshop"
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-white">Our story</h1>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="prose prose-invert prose-lg max-w-none text-white/70 leading-relaxed space-y-6">
          <p>
            Chris is based in the North East of England and grew up in New Zealand,
            surrounded by the outdoors. He has spent the last few years working with wood
            and designing custom yurts, which led him to discover the potential of curved
            timber.
          </p>
          <p>
            From there came the idea to design a light using this natural, sculptural
            form — something clean, modern, and adaptable.
          </p>
          <p>
            Working from a small studio in Newcastle, Chris handmakes each light to order
            using locally sourced oak or ash. The Arc Portable is designed to work in
            different ways around the home — whether lighting a table or creating a feature
            when placed against a wall.
          </p>
          <p>
            Every piece is unique. Grain pattern, tone, and character vary naturally between
            each length of timber. No two lights are the same.
          </p>
        </div>
      </section>

      {/* Workshop images */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-6">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image src="/images/workshop-2.JPG" alt="The workshop" fill className="object-cover" />
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image src="/images/arc-detail-2.JPG" alt="Arc detail" fill className="object-cover" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 py-20 text-center">
        <h2 className="font-serif text-4xl text-white">See the work</h2>
        <p className="mt-4 text-white/50 max-w-sm mx-auto">
          Each light is made to order. Browse the shop or follow along on Instagram.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link
            href="/shop"
            className="bg-white text-dark text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-warm transition-colors font-medium"
          >
            Shop
          </Link>
          <a
            href="https://instagram.com/bowdesignuk"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 text-white text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:border-white transition-colors"
          >
            Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
