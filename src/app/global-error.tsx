"use client";

import posthog from "posthog-js";
import { useEffect } from "react";

// Replaces the root layout when it crashes, so it renders its own <html> and <body>.
export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    // No-op when PostHog isn't configured (local dev, previews).
    if (posthog.__loaded) posthog.captureException(error, { digest: error.digest });
  }, [error]);

  return (
    <html lang="en-IN">
      <body style={{ fontFamily: "system-ui, sans-serif", padding: "4rem 1.5rem", textAlign: "center" }}>
        <h1>Something went wrong.</h1>
        <button type="button" onClick={() => retry()} style={{ marginTop: "1rem" }}>
          Try again
        </button>
      </body>
    </html>
  );
}
