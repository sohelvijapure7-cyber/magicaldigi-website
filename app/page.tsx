import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import AuditCTA from "@/components/home/AuditCTA";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/home/Pricing";
import Achievements from "@/components/home/Achievements";
import Clients from "@/components/home/Clients";
import CTABanner from "@/components/home/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MagicalDigi – Full-Service Digital Marketing Agency in India",
  description:
    "MagicalDigi is a leading full-service digital marketing agency in India. We help startups and brands grow with professional SEO, social media marketing, and paid ads.",
  alternates: {
    canonical: "https://magicaldigi.com",
  },
  openGraph: {
    title: "MagicalDigi – Full-Service Digital Marketing Agency in India",
    description:
      "MagicalDigi is a leading full-service digital marketing agency in India. We help startups and brands grow with professional SEO, social media marketing, and paid ads.",
    url: "https://magicaldigi.com",
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
    title: "MagicalDigi – Full-Service Digital Marketing Agency in India",
    description:
      "MagicalDigi is a leading full-service digital marketing agency in India. We help startups and brands grow with professional SEO, social media marketing, and paid ads.",
    images: ["/og-image.jpg"],
  },
};

// JSON-LD Structured Data — LocalBusiness / Agency Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: "MagicalDigi",
  url: "https://magicaldigi.com",
  logo: "https://magicaldigi.com/logo.png",
  description:
    "MagicalDigi is a results-driven digital marketing agency in Mumbai offering Performance Marketing, SEO, Social Media Branding, and Website Development.",
  telephone: "+919834097170",
  email: "magicaldigi@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ghatkopar East",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400077",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "19.0869",
    longitude: "72.9087",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/profile.php?id=61584564725067",
    "https://www.instagram.com/magicaldigiofficial",
    "https://www.linkedin.com/company/110229309",
    "https://youtube.com/@magicaldigi",
  ],
  priceRange: "₹₹",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Performance Marketing",
          description: "Google Ads, Meta Ads & YouTube campaign management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Search Engine Optimization",
          description: "On-page, Off-page & Technical SEO services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Social Media Branding",
          description: "Instagram, Facebook & LinkedIn brand management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Development",
          description: "Custom responsive website design & development",
        },
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ServicesPreview />
      <AuditCTA />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <Pricing />
      <Achievements />
      <Clients />
      <CTABanner />
    </>
  );
}

