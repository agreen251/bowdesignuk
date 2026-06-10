import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-white/50">

        {/* Brand */}
        <div>
          <p className="font-serif text-white text-lg mb-3">bowdesignuk</p>
          <p className="leading-relaxed">
            Handmade curved timber lights, made to order in Newcastle upon Tyne.
          </p>
          <p className="mt-4">
            <a
              href="https://instagram.com/bowdesignuk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              @bowdesignuk on Instagram →
            </a>
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="text-white/70 uppercase tracking-widest text-xs mb-3">Navigate</p>
          <ul className="space-y-2">
            <li><Link href="/shop" className="hover:text-white transition-colors">Shop</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="/policies" className="hover:text-white transition-colors">Delivery, Returns & Policies</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <p className="text-white/70 uppercase tracking-widest text-xs mb-3">Legal</p>
          <address className="not-italic leading-relaxed">
            Chris [Surname], trading as <strong className="text-white/70">Bow Design UK</strong><br />
            Newcastle upon Tyne, England<br />
            <a href="mailto:hello@bowdesignuk.com" className="hover:text-white transition-colors">
              hello@bowdesignuk.com
            </a>
          </address>
          <p className="mt-3 text-xs text-white/30">
            Sole trader. Not VAT registered.<br />
            All prices include any applicable taxes.
          </p>
          <div className="mt-3 flex gap-4 text-xs">
            <Link href="/policies#privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/policies#returns" className="hover:text-white transition-colors">Returns</Link>
            <Link href="/policies#cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 text-center py-4 text-xs text-white/20">
        © {new Date().getFullYear()} Bow Design UK. All rights reserved.
      </div>
    </footer>
  );
}
