import type { Metadata } from "next";
import ServiceContent from "@/components/service/ServiceContent";

export const metadata: Metadata = {
  title: {
    absolute: "Digital Marketing Services in India | SEO, Ads & Social Media",
  },
  description:
    "Explore MagicalDigi's premier digital marketing services in India, including high-ROI paid ad campaigns, expert SEO services, and custom website development.",
  alternates: {
    canonical: "https://magicaldigi.com/service",
  },
  openGraph: {
    title: "Digital Marketing Services in India | SEO, Ads & Social Media",
    description:
      "Explore MagicalDigi's premier digital marketing services in India, including high-ROI paid ad campaigns, expert SEO services, and custom website development.",
    url: "https://magicaldigi.com/service",
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
    title: "Digital Marketing Services in India | SEO, Ads & Social Media",
    description:
      "Explore MagicalDigi's premier digital marketing services in India, including high-ROI paid ad campaigns, expert SEO services, and custom website development.",
    images: ["/og-image.jpg"],
  },
};

export default function ServicePage() {
  return <ServiceContent />;
}
