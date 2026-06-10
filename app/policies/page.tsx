import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delivery, Returns & Policies",
};

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-dark py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-5xl text-white mb-16">Policies</h1>

        {/* Delivery */}
        <section id="delivery" className="mb-16 scroll-mt-24">
          <h2 className="font-serif text-2xl text-white mb-4">Delivery</h2>
          <div className="text-white/60 leading-relaxed space-y-3 text-sm">
            <p>
              <strong className="text-white/80">Lead time:</strong> Each light is made to
              order. Please allow approximately 4 weeks from the date of your order before
              dispatch. We will contact you by email once your order is confirmed and keep
              you updated on progress.
            </p>
            <p>
              <strong className="text-white/80">Delivery area:</strong> We currently ship
              to mainland UK only.
            </p>
            <p>
              <strong className="text-white/80">Shipping cost:</strong> Shipping costs, if
              applicable, are shown at checkout before payment is taken.
            </p>
            <p>
              <strong className="text-white/80">Dispatch notification:</strong> You will
              receive an email with tracking information when your order is dispatched.
            </p>
          </div>
        </section>

        {/* Returns */}
        <section id="returns" className="mb-16 scroll-mt-24">
          <h2 className="font-serif text-2xl text-white mb-4">Returns &amp; Cancellations</h2>
          <div className="text-white/60 leading-relaxed space-y-3 text-sm">
            <p>
              <strong className="text-white/80">Your right to cancel:</strong> Under the
              Consumer Contracts (Information, Cancellation and Additional Charges)
              Regulations 2013, you have the right to cancel your order within 14 days of
              receiving your goods, for any reason, without giving an explanation.
            </p>
            <p>
              <strong className="text-white/80">How to cancel:</strong> To exercise your
              right to cancel, please contact us by email at{" "}
              <a href="mailto:hello@bowdesignuk.com" className="underline hover:text-white">
                hello@bowdesignuk.com
              </a>{" "}
              within 14 days of receiving your item. Please include your name, order
              details, and your intention to cancel.
            </p>
            <p>
              <strong className="text-white/80">Returning goods:</strong> You will need to
              return the item to us in its original condition within 14 days of notifying
              us. Return postage costs are your responsibility unless the item is faulty or
              not as described.
            </p>
            <p>
              <strong className="text-white/80">Refunds:</strong> Once we receive the
              returned item and confirm its condition, we will refund the full purchase
              price (including any standard delivery charges paid) within 14 days, using
              the same payment method you used to purchase.
            </p>
            <p>
              <strong className="text-white/80">Faulty items:</strong> If your item arrives
              damaged or faulty, please contact us immediately at{" "}
              <a href="mailto:hello@bowdesignuk.com" className="underline hover:text-white">
                hello@bowdesignuk.com
              </a>{" "}
              with photos. We will arrange a replacement or full refund at no cost to you.
            </p>
            <p>
              <strong className="text-white/80">Bespoke / custom orders:</strong> Where a
              product has been made to a specific custom specification requested by you, the
              standard 14-day cancellation right may not apply once production has begun.
              We will make this clear at the time of order.
            </p>
          </div>
        </section>

        {/* Privacy */}
        <section id="privacy" className="mb-16 scroll-mt-24">
          <h2 className="font-serif text-2xl text-white mb-4">Privacy Policy</h2>
          <div className="text-white/60 leading-relaxed space-y-3 text-sm">
            <p>
              This privacy policy explains how Chris [Surname], trading as Bow Design UK
              ("we", "us", "our") collects, uses, and protects your personal data, in
              accordance with the UK General Data Protection Regulation (UK GDPR) and the
              Data Protection Act 2018.
            </p>
            <p>
              <strong className="text-white/80">What data we collect:</strong> When you
              place an order or contact us, we may collect your name, email address,
              delivery address, and order details. Payment information is processed
              directly by Stripe and is never stored on our systems.
            </p>
            <p>
              <strong className="text-white/80">How we use your data:</strong> We use your
              information solely to fulfil your order, respond to your enquiries, and
              comply with legal obligations. We will never sell your data or use it for
              unsolicited marketing.
            </p>
            <p>
              <strong className="text-white/80">Third parties:</strong> We share your
              data only with Stripe (payment processing) and our courier service
              (delivery). Both are bound by their own GDPR-compliant privacy policies.
            </p>
            <p>
              <strong className="text-white/80">Retention:</strong> We retain order data
              for up to 7 years for accounting purposes. Contact form messages are deleted
              within 12 months.
            </p>
            <p>
              <strong className="text-white/80">Your rights:</strong> Under UK GDPR, you
              have the right to access, correct, or delete personal data we hold about you.
              Contact us at{" "}
              <a href="mailto:hello@bowdesignuk.com" className="underline hover:text-white">
                hello@bowdesignuk.com
              </a>{" "}
              to make a request.
            </p>
          </div>
        </section>

        {/* Cookies */}
        <section id="cookies" className="mb-16 scroll-mt-24">
          <h2 className="font-serif text-2xl text-white mb-4">Cookie Policy</h2>
          <div className="text-white/60 leading-relaxed space-y-3 text-sm">
            <p>
              This site uses only essential cookies necessary for the shop to function
              (for example, maintaining your session during checkout). We do not use
              advertising or tracking cookies.
            </p>
            <p>
              You can accept or decline non-essential cookies via the banner shown when
              you first visit. Declining will not affect your ability to use the site or
              make a purchase.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-white/10 pt-10 text-sm text-white/40">
          <p>
            For any questions about these policies, contact us at{" "}
            <a href="mailto:hello@bowdesignuk.com" className="underline hover:text-white">
              hello@bowdesignuk.com
            </a>
            .
          </p>
          <p className="mt-2">
            Chris [Surname], trading as Bow Design UK. Newcastle upon Tyne, England.
          </p>
          <p className="mt-2 text-white/20">Last updated: June 2025</p>
        </section>
      </div>
    </div>
  );
}
