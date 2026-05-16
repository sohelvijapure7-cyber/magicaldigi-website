import type { Metadata } from "next";
import PortfolioContent from "@/components/portfolio/PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio | MagicalDigi – Digital Marketing Case Studies",
  description:
    "Explore MagicalDigi's portfolio of successful digital marketing campaigns. Real results in Performance Marketing, SEO, Social Media Branding, and Website Development across India.",
  alternates: {
    canonical: "https://magicaldigi.com/portfolio",
  },
  openGraph: {
    title: "Portfolio | MagicalDigi – Digital Marketing Results",
    description:
      "Real campaigns, real results. Explore how MagicalDigi helped brands across India grow with Performance Marketing, SEO & Social Media Branding.",
    url: "https://magicaldigi.com/portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MagicalDigi Portfolio" }],
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
