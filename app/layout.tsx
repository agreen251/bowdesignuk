import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: {
    default: "Bow Design UK — Handmade Timber Lights",
    template: "%s | Bow Design UK",
  },
  description:
    "Handcrafted curved timber lights made to order in Newcastle. Oak and Ash. Each piece unique.",
  openGraph: {
    siteName: "Bow Design UK",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body className="bg-dark text-white antialiased">
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
