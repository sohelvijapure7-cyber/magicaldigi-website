import type { Metadata } from "next";
import ServiceContent from "@/components/service/ServiceContent";

export const metadata: Metadata = {
  title: "Digital Marketing Services in India | SEO, Ads & Social Media – MagicalDigi",
  description:
    "Explore MagicalDigi's digital marketing services including SEO, performance marketing, social media branding, and website development designed to help startups and businesses grow online.",
  alternates: {
    canonical: "https://magicaldigi.com/service",
  },
  openGraph: {
    title: "Digital Marketing Services in India | SEO, Ads & Social Media – MagicalDigi",
    description:
      "Explore MagicalDigi's digital marketing services including SEO, performance marketing, social media branding, and website development designed to help startups and businesses grow online.",
    url: "https://magicaldigi.com/service",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "digital marketing services in india" }],
  },
};

export default function ServicePage() {
  return <ServiceContent />;
}
