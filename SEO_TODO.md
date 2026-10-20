# SEO + AI SEO to-do

## 1. Site code (before launch)

- [x] Set `metadataBase` to `https://krityam.co` and a self-referencing canonical (`alternates.canonical: "/"`)
- [x] New title with the primary keyword, e.g. "Reduce RTO with AI for D2C Brands in India | Krityam" (≤60 chars)
- [x] Tighten the meta description (150–160 chars, mention RTO, COD and India)
- [x] Open Graph + Twitter card metadata
- [x] `opengraph-image` (1200×630) for WhatsApp and LinkedIn link previews
- [x] `apple-icon.png` / `icon.png` alongside `favicon.ico`
- [x] `src/app/robots.ts`: allow search crawlers and AI bots (`OAI-SearchBot`, `ChatGPT-User`, `GPTBot`, `PerplexityBot`, `Perplexity-User`, `Claude-SearchBot`, `Claude-User`, `ClaudeBot`, `Google-Extended`), link the sitemap
- [x] `src/app/sitemap.ts`
- [x] `public/llms.txt`: what Krityam does, who it's for, how the fee works, links to key pages
- [x] JSON-LD: `Organization` (founder, logo, `sameAs` social links)
- [x] JSON-LD: `Service` (service area: India, the three engines as offers)
- [x] JSON-LD: `FAQPage` generated from the `faqs` array so it never drifts from the visible FAQ
- [x] `<html lang="en-IN">`
- [x] Source the RTO stat in the Problem section (state it as COD vs prepaid RTO, link the source)
- [x] Rename "Results" section and nav label to "What you'll see" (it previews the audit)
- [x] Rename FAQ heading to something keyword-bearing, e.g. "RTO automation FAQs"
- [x] Remove unused starter files in `public/` (`next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg`)
- [ ] Check hero H1 fade-in against LCP after launch; start it visible if LCP is slow

## 2. Needs input from Rohit

- [x] Privacy Policy page (DPDP Act: you handle customers' order and phone data) — drafted at `/privacy`, have a lawyer review
- [x] Terms page — drafted at `/terms`, have a lawyer review
- [x] LinkedIn company page in the footer and `sameAs`
- [ ] Rohit's personal LinkedIn URL (for the founder block and `founder.sameAs`)
- [ ] Contact email (and WhatsApp number if public) for the footer, Privacy Policy grievance contact and Terms
- [ ] Short "Who's behind Krityam" block: founder name, photo, one-line background, LinkedIn
- [ ] Facts for new FAQ answers:
  - [ ] How the fee works (setup vs performance-based part)
  - [ ] Supported stores, couriers and aggregators (Shopify, WooCommerce, Shiprocket, etc.)
  - [ ] Typical time before RTO starts dropping
  - [ ] What the brand needs to share and how data is handled
- [ ] One-line positioning to reuse everywhere, e.g. "Done-for-you AI automation that cuts RTO and raises AOV and LTV for Indian D2C brands."

## 3. New FAQ answers (40–60 words each, standalone)

- [ ] How is a done-for-you service different from installing an RTO or COD app?
- [ ] How much does Krityam cost / how does the performance-based fee work?
- [ ] How long until RTO goes down?
- [ ] Which platforms and couriers do you work with?
- [ ] What happens on the discovery call? (already added, review wording)
- [ ] Is my customer data safe?

## 4. Guide pages (after launch)

Each with a named author (Rohit Kewate), a "Last updated" date, sourced stats, `Article` schema, and a link to the booking page.

- [ ] DIY RTO tools vs a done-for-you RTO system: when each makes sense
- [ ] How to reduce RTO for Indian D2C brands: the full playbook (verification, risk scoring, prepaid nudges, NDR recovery)
- [ ] What is NDR and how to recover failed deliveries
- [ ] What is a good RTO rate for Indian ecommerce (benchmarks by category, sourced)
- [ ] How to increase repeat purchases with WhatsApp for D2C brands

## 5. Off-site presence

- [ ] LinkedIn: regular posts from Rohit's profile, first line front-loads the topic ("How to cut RTO on COD orders…")
- [ ] LinkedIn company page with the same positioning line
- [ ] Clutch, GoodFirms and Crunchbase profiles with the same positioning line
- [ ] Google Business Profile (if you have a registered business address)
- [ ] Join D2C founder communities, Shopify Community and relevant newsletters/podcasts; answer real questions, no bulk promotion

## 6. Launch

- [ ] Verify the domain in Google Search Console and submit the sitemap
- [ ] Verify in Bing Webmaster Tools (feeds Copilot and ChatGPT search)
- [ ] Run PageSpeed Insights (LCP < 2.5s, INP < 200ms, CLS < 0.1)
- [ ] Run the Rich Results Test on the homepage
- [ ] Check WhatsApp and LinkedIn link previews
- [ ] Set up GA4 (or similar) with AI referrers segmented (chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com, claude.ai)

## 7. Monthly tracking

Run each prompt 3–5 times in ChatGPT, Perplexity and Google; log mention rate and which sources are cited.

- [ ] how to reduce RTO for COD orders in India
- [ ] done for you RTO reduction service India
- [ ] COD order confirmation voice AI for D2C
- [ ] how to lower RTO without hiring telecallers
- [ ] how to increase repeat purchases for a D2C brand using WhatsApp
- [ ] what is a good RTO rate for Indian ecommerce
- [ ] Krityam reviews / what is Krityam (once the brand has some awareness)
- [ ] Review Search Console queries and pages in positions 8–20 for quick wins
