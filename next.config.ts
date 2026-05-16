import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Trailing slash: ensure canonical URLs are consistent (no trailing slash)
  trailingSlash: false,

  // 301 redirects for old or alternate URLs
  async redirects() {
    return [
      // Example: redirect www to non-www (handled at DNS/server level usually, but here as fallback)
      // Add old URL 301 redirects below when needed:
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true, // 301 redirect
      // },
    ];
  },

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
};

export default nextConfig;
