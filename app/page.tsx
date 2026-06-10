import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[560px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-dark">
          {/* Replace src with your hero image path once added to /public/images/ */}
          <Image
            src="/images/arc-hero.jpg"
            alt="The Arc Portable light resting against a dark surface"
            fill
            priority
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-16 w-full">
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight">
            Light, redefined.
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-md">
            Handmade curved timber lights. Oak and Ash. Made to order in Newcastle.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-block bg-white text-dark text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-warm transition-colors font-medium"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured product */}
      <section className="bg-dark py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-warm text-xs tracking-widest uppercase mb-4">Featured</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-snug">
              The Arc Portable
            </h2>
            <p className="mt-6 text-white/60 leading-relaxed">
              A freestanding light built around the natural arc of timber. Each piece is
              handmade to order using locally sourced oak or ash. Portable, sculptural,
              and designed to work in any room.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/50">
              <li>Height: 109 cm &nbsp;·&nbsp; Width: 6.1 cm &nbsp;·&nbsp; Depth: 4.5 cm</li>
              <li>Available in Oak or Ash</li>
              <li>Made to order — 4 week lead time</li>
            </ul>
            <div className="mt-8 flex items-center gap-6">
              <span className="font-serif text-3xl text-white">£600</span>
              <Link
                href="/shop/arc-portable"
                className="bg-white text-dark text-sm tracking-widest uppercase px-6 py-3 rounded-full hover:bg-warm transition-colors font-medium"
              >
                View &amp; Order
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 relative aspect-[3/4] rounded-lg overflow-hidden">
            <Image
              src="/images/arc-detail-1.jpg"
              alt="The Arc Portable light close up, showing the timber grain and LED strip"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="bg-zinc-900 py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/images/workshop.jpg"
              alt="Chris working in his workshop in Newcastle"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-warm text-xs tracking-widest uppercase mb-4">The maker</p>
            <h2 className="font-serif text-4xl text-white leading-snug">
              Uncover our story
            </h2>
            <p className="mt-6 text-white/60 leading-relaxed">
              Chris grew up in New Zealand, surrounded by the outdoors. After years working
              with wood and designing custom yurts, he discovered the potential of curved
              timber — and The Arc was born.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              Working from a small studio in Newcastle, Chris handmakes each light to order.
              Clean, modern, and built to last.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block border border-white/30 text-white text-sm tracking-widest uppercase px-6 py-3 rounded-full hover:border-white transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram strip */}
      <section className="bg-stone-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-dark mb-10">Follow us on social</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded">
                <Image
                  src={`/images/social-${i}.jpg`}
                  alt={`bowdesignuk Instagram post ${i}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <a
            href="https://instagram.com/bowdesignuk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block bg-dark text-white text-sm tracking-widest uppercase px-10 py-4 rounded-full hover:bg-zinc-800 transition-colors"
          >
            @bowdesignuk
          </a>
        </div>
      </section>
    </>
  );
}
