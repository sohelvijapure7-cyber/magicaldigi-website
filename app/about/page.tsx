import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us | MagicalDigi – Digital Marketing Agency",
  description:
    "Learn about MagicalDigi – a results-driven digital marketing agency in Mumbai specializing in Performance Marketing, SEO, and Social Media Branding for startups and growing brands.",
  alternates: {
    canonical: "https://magicaldigi.com/about",
  },
  openGraph: {
    title: "About MagicalDigi | Digital Marketing Agency in India",
    description:
      "Learn about MagicalDigi – a results-driven digital marketing agency in Mumbai specializing in Performance Marketing, SEO, and Social Media Branding.",
    url: "https://magicaldigi.com/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "About MagicalDigi" }],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
