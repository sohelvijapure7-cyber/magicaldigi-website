import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/LeadPopup";
import { Analytics } from "@vercel/analytics/next";

const inter = Outfit({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  // metadataBase is REQUIRED for absolute Open Graph / Twitter image URLs
  metadataBase: new URL("https://magicaldigi.com"),

  title: {
    default: "MagicalDigi | Digital Marketing Agency in India",
    template: "%s | MagicalDigi",
  },
  description:
    "MagicalDigi provides web design, SEO, branding and digital marketing services. We help startups, brands, and local shops scale faster with Performance Marketing, SEO, and Social Media Branding.",

  keywords: [
    "digital marketing agency india",
    "performance marketing agency",
    "SEO agency mumbai",
    "social media branding",
    "google ads agency",
    "meta ads agency",
    "website development mumbai",
    "digital marketing ghatkopar",
    "lead generation india",
  ],

  // Canonical tag — Next.js uses metadataBase + alternates to build canonical URLs
  alternates: {
    canonical: "/",
  },

  // Robots directive
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph
  openGraph: {
    title: "MagicalDigi | Digital Marketing Agency in India",
    description:
      "MagicalDigi provides web design, SEO, branding and digital marketing services for startups, brands, and local businesses.",
    url: "https://magicaldigi.com",
    siteName: "MagicalDigi",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MagicalDigi – Digital Marketing Agency India",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "MagicalDigi | Digital Marketing Agency in India",
    description:
      "Performance Marketing, SEO & Social Media Branding for brands that want real growth.",
    images: ["/og-image.png"],
    site: "@magicaldigi",
    creator: "@magicaldigi",
  },

  // App / PWA info
  applicationName: "MagicalDigi",
  authors: [{ name: "MagicalDigi", url: "https://magicaldigi.com" }],
  creator: "MagicalDigi",
  publisher: "MagicalDigi",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <LeadPopup />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
