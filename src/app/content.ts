// Page copy shared by the home page, its JSON-LD and /llms-full.txt, so every surface says the same thing.

// Bump when the copy changes; it feeds dateModified in JSON-LD and the date in /llms-full.txt.
export const CONTENT_UPDATED = "2026-10-24";

export const problems = [
  "Ad spend goes to orders that are never delivered.",
  "Your team spends the day on confirmation calls and failed-delivery follow-ups.",
  "Customers buy once and disappear.",
  "You see revenue at checkout, not the profit left after returns.",
];

export const steps = [
  {
    n: "01",
    verb: "See",
    name: "Revenue Leak Audit™",
    points: [
      "We analyze your RTO, COD, delivery and customer data.",
      "We find your high-RTO pincodes, products, segments and order patterns.",
      "We build an AI scoring system that ranks every order as safer or riskier to ship.",
    ],
  },
  {
    n: "02",
    verb: "Stop",
    name: "RTO Prevention Engine™",
    points: [
      "Voice AI agents confirm COD orders before dispatch.",
      "WhatsApp automations handle unreachable customers, address issues and NDR follow-ups.",
      "Low-risk orders move through normally. High-risk orders go to AI or human intervention.",
    ],
  },
  {
    n: "03",
    verb: "Grow",
    name: "LTV Growth Engine™",
    points: [
      "Voice AI upsell and cross-sell on confirmed and existing customers.",
      "WhatsApp post-purchase, cross-sell, reorder and win-back campaigns.",
      "Customers segmented by behavior, with offers tuned from real results.",
    ],
  },
];

export const compare = {
  cols: ["Telecalling team", "Marketing agency", "Krityam"],
  rows: [
    ["Who gets contacted", "Everyone", "Everyone", "The orders that need it"],
    ["Works around the clock", "No", "Mostly", "Yes"],
    ["Tied to RTO / AOV / LTV", "Loosely", "Rarely", "Directly"],
    ["Needs your team to manage it", "Yes", "Yes", "No"],
    ["Shows where the leak is", "No", "No", "Yes"],
  ],
};

export const fit = [
  "D2C and e-commerce brands doing roughly ₹40L–₹1Cr a month",
  "Brands with meaningful COD volume and a high RTO rate",
  "Founders, directors and CXOs who want fewer manual operations",
  "Teams that want results without hiring more people",
];

export const faqs = [
  {
    q: "What is Krityam?",
    a: "Krityam is a done-for-you AI automation service for Indian D2C and e-commerce brands. We build and run voice AI and WhatsApp systems that confirm COD orders before dispatch, recover failed deliveries and bring customers back, so brands cut RTO and raise order value without hiring more staff.",
  },
  {
    q: "How is Krityam different from a COD verification app?",
    a: "A COD verification app is a tool your team sets up and manages. Krityam is a done-for-you service: we analyse your order data, build the voice AI and WhatsApp flows, run them and tune them every week. Your team doesn't manage software, and the larger part of our fee is due only after your RTO drops.",
  },
  {
    q: "Who is Krityam for?",
    a: "D2C and e-commerce brands in India doing roughly ₹40L–₹1Cr a month, with meaningful cash-on-delivery volume and a high RTO rate. It's not a fit for brands with very low order volume, or brands not ready to share order and delivery data.",
  },
  {
    q: "What is RTO and why does it matter?",
    a: "Return to Origin: orders that are shipped but come back undelivered. Each one costs you the ad spend, the outbound shipping, the return shipping and the sale.",
  },
  { q: "Do I need to change my store or courier?", a: "No. We work with your current setup and go through the details on our first call." },
  {
    q: "Will AI calls hurt the customer experience?",
    a: "The calls are short and specific to the customer's own order. Sensitive cases go to a human.",
  },
  { q: "How much of my team's time does this need?", a: "One onboarding session and a weekly 30-minute call. We do the rest." },
  {
    q: "What happens on the first call?",
    a: "We spend 30 minutes on the problems you're seeing with RTO, COD and delivery, and whether we're the right fit. If we are, the Revenue Leak Audit™ is the first thing we do after onboarding.",
  },
  {
    q: "When can I reach support?",
    a: "Monday–Friday, 10 AM–6 PM IST on your dedicated WhatsApp line. Critical system issues get priority.",
  },
  {
    q: "How do I get started with Krityam?",
    a: "Book a free 30-minute discovery call at krityam.co/book. We look at your RTO, COD and delivery numbers and tell you honestly whether we're the right fit. If we are, onboarding comes next, followed by your Revenue Leak Audit™.",
  },
];
