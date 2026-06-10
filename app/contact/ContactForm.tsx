"use client";

import { useState } from "react";

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Failed to send.");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-zinc-900 rounded-xl p-8 text-center">
        <div className="text-warm text-3xl mb-4">✓</div>
        <h2 className="font-serif text-2xl text-white">Message sent</h2>
        <p className="mt-3 text-white/50">
          Thanks for reaching out. Chris will reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-900 rounded-xl p-8 space-y-5">
      <div>
        <label htmlFor="name" className="block text-xs text-white/40 uppercase tracking-widest mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-warm transition-colors"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs text-white/40 uppercase tracking-widest mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-warm transition-colors"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs text-white/40 uppercase tracking-widest mb-2">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-warm transition-colors resize-none"
          placeholder="Your message…"
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">Something went wrong. Please email us directly at hello@bowdesignuk.com.</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-white text-dark font-medium text-sm tracking-widest uppercase py-4 rounded-full hover:bg-warm transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
