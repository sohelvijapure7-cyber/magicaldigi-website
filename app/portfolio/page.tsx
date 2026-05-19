import type { Metadata } from "next";
import PortfolioContent from "@/components/portfolio/PortfolioContent";

export const metadata: Metadata = {
  title: {
    absolute: "Digital Marketing Portfolio | MagicalDigi",
  },
  description:
    "Explore MagicalDigi's digital marketing portfolio featuring highly successful branding, SEO campaigns, paid ads, and website development work across India.",
  alternates: {
    canonical: "https://magicaldigi.com/portfolio",
  },
  openGraph: {
    title: "Digital Marketing Portfolio | MagicalDigi",
    description:
      "Explore MagicalDigi's digital marketing portfolio featuring highly successful branding, SEO campaigns, paid ads, and website development work across India.",
    url: "https://magicaldigi.com/portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digital marketing agency in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Portfolio | MagicalDigi",
    description:
      "Explore MagicalDigi's digital marketing portfolio featuring highly successful branding, SEO campaigns, paid ads, and website development work across India.",
    images: ["/og-image.jpg"],
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
