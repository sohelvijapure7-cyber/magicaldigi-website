import type { Metadata } from "next";
import ServiceContent from "@/components/service/ServiceContent";

export const metadata: Metadata = {
  title: "Our Services | MagicalDigi – Digital Marketing Agency",
  description:
    "Explore MagicalDigi's digital marketing services: Performance Marketing, SEO, Social Media Branding, and Website Development. Data-driven strategies for real business growth.",
  alternates: {
    canonical: "https://magicaldigi.com/service",
  },
  openGraph: {
    title: "Digital Marketing Services | MagicalDigi India",
    description:
      "Performance Marketing, SEO, Social Media Branding & Website Development services by MagicalDigi – Mumbai's top digital marketing agency.",
    url: "https://magicaldigi.com/service",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MagicalDigi Services" }],
  },
};

export default function ServicePage() {
  return <ServiceContent />;
}
