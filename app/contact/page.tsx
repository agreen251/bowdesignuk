import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the team at Bow Design UK.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-dark py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">
        <div>
          <h1 className="font-serif text-5xl text-white">Get in touch</h1>
          <p className="mt-6 text-white/60 leading-relaxed max-w-sm">
            Questions about the product, custom orders, or anything else — we'd love to
            hear from you. Chris replies personally, usually within one business day.
          </p>
          <div className="mt-10 space-y-4 text-sm text-white/50">
            <div>
              <p className="text-white/30 uppercase tracking-widest text-xs">Email</p>
              <a href="mailto:hello@bowdesignuk.com" className="text-white hover:text-warm transition-colors">
                hello@bowdesignuk.com
              </a>
            </div>
            <div>
              <p className="text-white/30 uppercase tracking-widest text-xs">Instagram</p>
              <a
                href="https://instagram.com/bowdesignuk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-warm transition-colors"
              >
                @bowdesignuk
              </a>
            </div>
            <div>
              <p className="text-white/30 uppercase tracking-widest text-xs">Based in</p>
              <p className="text-white">Newcastle upon Tyne, England</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
