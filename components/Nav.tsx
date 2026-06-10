"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-sm border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl tracking-wide text-white hover:text-warm transition-colors">
          bowdesignuk
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 text-sm tracking-widest uppercase text-white/70">
          <li><Link href="/shop" className="hover:text-white transition-colors">Shop</Link></li>
          <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
          <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round"/>
            ) : (
              <>
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dark border-t border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm tracking-widest uppercase text-white/70">
            <li><Link href="/shop" onClick={() => setOpen(false)} className="hover:text-white transition-colors">Shop</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)} className="hover:text-white transition-colors">About</Link></li>
            <li><Link href="/contact" onClick={() => setOpen(false)} className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
