import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | MagicalDigi – Digital Marketing Agency",
  description:
    "Get in touch with MagicalDigi. Contact our digital marketing experts in Mumbai for SEO, Performance Marketing, Social Media Branding, and Website Development services.",
  alternates: {
    canonical: "https://magicaldigi.com/contact",
  },
  openGraph: {
    title: "Contact MagicalDigi | Digital Marketing Agency India",
    description:
      "Ready to grow your brand? Contact MagicalDigi – Mumbai's top digital marketing agency for SEO, Paid Ads & Social Media Branding.",
    url: "https://magicaldigi.com/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact MagicalDigi" }],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
