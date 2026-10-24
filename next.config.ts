import type { NextConfig } from "next";

// PostHog is proxied through /ingest on our own domain so ad blockers don't drop analytics.
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_REGION === "eu" ? "eu" : "us";

const nextConfig: NextConfig = {
  cacheComponents: true,
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      { source: "/ingest/static/:path*", destination: `https://${posthogHost}-assets.i.posthog.com/static/:path*` },
      { source: "/ingest/array/:path*", destination: `https://${posthogHost}-assets.i.posthog.com/array/:path*` },
      { source: "/ingest/:path*", destination: `https://${posthogHost}.i.posthog.com/:path*` },
    ];
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
