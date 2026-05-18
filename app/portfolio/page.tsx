import type { Metadata } from "next";
import PortfolioContent from "@/components/portfolio/PortfolioContent";

export const metadata: Metadata = {
  title: "Digital Marketing Portfolio | Social Media & Branding Work – MagicalDigi",
  description:
    "Explore MagicalDigi's portfolio featuring social media management, branding, SEO, creative campaigns, and digital marketing projects for startups and growing brands.",
  alternates: {
    canonical: "https://magicaldigi.com/portfolio",
  },
  openGraph: {
    title: "Digital Marketing Portfolio | Social Media & Branding Work – MagicalDigi",
    description:
      "Explore MagicalDigi's portfolio featuring social media management, branding, SEO, creative campaigns, and digital marketing projects for startups and growing brands.",
    url: "https://magicaldigi.com/portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "digital marketing portfolio project" }],
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
