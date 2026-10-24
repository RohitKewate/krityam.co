import { compare, CONTENT_UPDATED, faqs, fit, problems, steps } from "../content";
import { BOOKING_URL, LINKEDIN_URL, SITE_URL } from "../site";

// The whole site as plain Markdown for AI assistants (llmstxt.org convention), built from the same copy as the page.
export function GET() {
  const body = `# Krityam

> Krityam is a done-for-you AI automation service for Indian D2C and e-commerce brands. It builds and runs voice AI and WhatsApp systems that cut RTO (Return to Origin) on cash-on-delivery orders, raise average order value and bring customers back.

Website: ${SITE_URL}
Book a free 30-minute discovery call: ${SITE_URL}${BOOKING_URL}
LinkedIn: ${LINKEDIN_URL}
Founder: Rohit Kewate
Market: India
Last updated: ${CONTENT_UPDATED}

## The problem

Cash-on-delivery orders in India see roughly 25–30% RTO, against 2–3% for prepaid orders (source: Razorpay, https://razorpay.com/blog/cash-on-delivery-and-the-challenges/). For D2C brands this means:

${problems.map((p) => `- ${p}`).join("\n")}

## How Krityam works

${steps.map((s) => `### Step ${s.n}: ${s.verb} — ${s.name}\n\n${s.points.map((p) => `- ${p}`).join("\n")}`).join("\n\n")}

Done for you means one onboarding session, a dedicated account manager, a weekly 30-minute optimisation call and a monthly leadership review. Krityam handles the build, the integration and the upkeep. The larger part of the fee is due only after the brand sees its RTO drop.

## Krityam compared with the alternatives

| | ${compare.cols.join(" | ")} |
|---|${compare.cols.map(() => "---").join("|")}|
${compare.rows.map((r) => `| ${r.join(" | ")} |`).join("\n")}

## Who it's for

${fit.map((f) => `- ${f}`).join("\n")}

Not a fit for brands with very low order volume, or brands not ready to share order and delivery data.

## Frequently asked questions

${faqs.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}
`;

  return new Response(body, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
