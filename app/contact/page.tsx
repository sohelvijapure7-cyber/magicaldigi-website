import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact MagicalDigi | Digital Marketing Agency in India",
  description:
    "Contact MagicalDigi for SEO, social media marketing, performance ads, branding, website development, and digital growth solutions for startups and businesses across India.",
  alternates: {
    canonical: "https://magicaldigi.com/contact",
  },
  openGraph: {
    title: "Contact MagicalDigi | Digital Marketing Agency in India",
    description:
      "Contact MagicalDigi for SEO, social media marketing, performance ads, branding, website development, and digital growth solutions for startups and businesses across India.",
    url: "https://magicaldigi.com/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "contact digital marketing agency india" }],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
