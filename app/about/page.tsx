import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About MagicalDigi | Startup-Focused Digital Marketing Agency in India",
  description:
    "Learn about MagicalDigi, a startup-focused digital marketing agency in India helping brands grow through SEO, social media marketing, creative branding, and performance-driven strategies.",
  alternates: {
    canonical: "https://magicaldigi.com/about",
  },
  openGraph: {
    title: "About MagicalDigi | Startup-Focused Digital Marketing Agency in India",
    description:
      "Learn about MagicalDigi, a startup-focused digital marketing agency in India helping brands grow through SEO, social media marketing, creative branding, and performance-driven strategies.",
    url: "https://magicaldigi.com/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "startup marketing agency india" }],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
