import posthog from "posthog-js";

// Runs before the app is interactive. Without a key (local dev, previews) PostHog stays off and nothing is sent.
const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

if (key) {
  posthog.init(key, {
    // Sent through our own domain (see rewrites in next.config.ts) so ad blockers don't drop events.
    api_host: "/ingest",
    // The project lives in PostHog's EU cloud unless NEXT_PUBLIC_POSTHOG_REGION says "us".
    ui_host: process.env.NEXT_PUBLIC_POSTHOG_REGION === "us" ? "https://us.posthog.com" : "https://eu.posthog.com",
    // Pageviews on client navigation, page-leave with scroll depth, heatmaps and dead clicks.
    defaults: "2026-08-30",
    // Anonymous visitors don't create person profiles; we never identify anyone.
    person_profiles: "identified_only",
    session_recording: { maskAllInputs: true },
  });
}
