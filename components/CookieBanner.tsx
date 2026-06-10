"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900 border-t border-white/10 px-6 py-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-sm text-white/70 leading-relaxed">
          We use essential cookies to make the shop work. No tracking or advertising cookies.{" "}
          <Link href="/policies#cookies" className="underline hover:text-white">
            Learn more
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-sm text-white/50 hover:text-white transition-colors px-4 py-2"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="text-sm bg-white text-dark font-medium px-5 py-2 rounded-full hover:bg-warm transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
