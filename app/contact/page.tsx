import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: {
    absolute: "Contact MagicalDigi | Digital Marketing Agency in India",
  },
  description:
    "Connect with MagicalDigi, the premier digital marketing agency in India. Contact our team today for a free website SEO, paid ads, and social media audit.",
  alternates: {
    canonical: "https://magicaldigi.com/contact",
  },
  openGraph: {
    title: "Contact MagicalDigi | Digital Marketing Agency in India",
    description:
      "Connect with MagicalDigi, the premier digital marketing agency in India. Contact our team today for a free website SEO, paid ads, and social media audit.",
    url: "https://magicaldigi.com/contact",
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
    title: "Contact MagicalDigi | Digital Marketing Agency in India",
    description:
      "Connect with MagicalDigi, the premier digital marketing agency in India. Contact our team today for a free website SEO, paid ads, and social media audit.",
    images: ["/og-image.jpg"],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
