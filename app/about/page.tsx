import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: {
    absolute: "About MagicalDigi | Startup-Focused Digital Marketing Agency",
  },
  description:
    "Discover how MagicalDigi helps startups and growing brands scale faster. We are a results-driven digital marketing agency in India delivering trust and real ROI.",
  alternates: {
    canonical: "https://magicaldigi.com/about",
  },
  openGraph: {
    title: "About MagicalDigi | Startup-Focused Digital Marketing Agency",
    description:
      "Discover how MagicalDigi helps startups and growing brands scale faster. We are a results-driven digital marketing agency in India delivering trust and real ROI.",
    url: "https://magicaldigi.com/about",
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
    title: "About MagicalDigi | Startup-Focused Digital Marketing Agency",
    description:
      "Discover how MagicalDigi helps startups and growing brands scale faster. We are a results-driven digital marketing agency in India delivering trust and real ROI.",
    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
