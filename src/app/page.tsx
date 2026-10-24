import Link from "next/link";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { HeroStage } from "./HeroStage";
import { Reveal } from "./Reveal";
import { compare, CONTENT_UPDATED, faqs, fit, problems, steps } from "./content";
import { BOOKING_URL as BOOKING, DESCRIPTION, LINKEDIN_URL, SITE_NAME, SITE_URL } from "./site";
const BOOKING_LABEL = "Book a Free Discovery Call";

// Organization, service and FAQ for search engines and AI assistants. The FAQ is built from `faqs` so it can't drift from the page.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/images/krityam-mark.png`,
      description: DESCRIPTION,
      slogan: "AI automation that turns D2C orders into delivered revenue.",
      founder: { "@id": `${SITE_URL}/#founder` },
      areaServed: { "@type": "Country", name: "India" },
      knowsAbout: [
        "RTO (Return to Origin) reduction",
        "Cash-on-delivery (COD) order confirmation",
        "NDR (non-delivery report) management",
        "Voice AI for e-commerce",
        "WhatsApp automation for D2C brands",
        "Order risk scoring",
        "Customer lifetime value (LTV) growth",
      ],
      contactPoint: { "@type": "ContactPoint", contactType: "sales", url: `${SITE_URL}${BOOKING}`, areaServed: "IN", availableLanguage: "English" },
      sameAs: [LINKEDIN_URL],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#founder`,
      name: "Rohit Kewate",
      jobTitle: "Founder",
      worksFor: { "@id": `${SITE_URL}/#org` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#org` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "Krityam: AI automation for D2C orders",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#service` },
      inLanguage: "en-IN",
      dateModified: CONTENT_UPDATED,
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      name: "Done-for-you AI automation for D2C brands",
      serviceType: "RTO reduction and e-commerce order automation",
      provider: { "@id": `${SITE_URL}/#org` },
      areaServed: { "@type": "Country", name: "India" },
      description: faqs[0].a,
      audience: { "@type": "BusinessAudience", name: "D2C and e-commerce brands in India doing roughly ₹40L–₹1Cr a month" },
      offers: {
        "@type": "Offer",
        name: "Free 30-minute discovery call",
        price: "0",
        priceCurrency: "INR",
        url: `${SITE_URL}${BOOKING}`,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Krityam system",
        itemListElement: steps.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.name, description: s.points.join(" ") },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 16 16" aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// `location` lands on PostHog autocapture clicks as the `cta-location` property.
function BookButton({ size = "lg", location }: { size?: "lg" | "xl"; location: string }) {
  return (
    <Link href={BOOKING} className={`btn btn-${size} btn-accent`} data-ph-capture-attribute-cta-location={location}>
      {BOOKING_LABEL}
      <Arrow />
    </Link>
  );
}

/* ---------- Bento visuals (illustrative, no data) ---------- */

function RtoVisual() {
  return (
    <div className="viz viz-rto" aria-hidden>
      <div className="viz-label mono">Returns, week on week</div>
      <div className="bars">
        {[92, 84, 72, 58, 46, 36, 28, 22].map((h, i) => (
          <span key={i} style={{ "--h": `${h}%`, "--i": i } as React.CSSProperties} className={i > 3 ? "on" : ""} />
        ))}
      </div>
    </div>
  );
}

function AovVisual() {
  return (
    <div className="viz viz-aov" aria-hidden>
      <div className="pill pill-solid">
        <span className="pill-dot" /> Order confirmed
      </div>
      <div className="pill pill-add" style={{ "--i": 1 } as React.CSSProperties}>
        + Add-on
      </div>
      <div className="pill pill-add" style={{ "--i": 2 } as React.CSSProperties}>
        + Bundle
      </div>
    </div>
  );
}

function LtvVisual() {
  return (
    <div className="viz viz-ltv" aria-hidden>
      <svg viewBox="0 0 300 90" preserveAspectRatio="none">
        <path d="M20 70 C 80 70, 80 22, 150 22 S 220 70, 280 22" pathLength={1} />
      </svg>
      <ol className="ltv-steps">
        <li>Purchase</li>
        <li>Reorder</li>
        <li>Win-back</li>
      </ol>
    </div>
  );
}

function DataVisual() {
  return (
    <div className="viz viz-data" aria-hidden>
      {[
        ["Pincode", 78],
        ["Product", 54],
        ["Segment", 66],
        ["Order pattern", 40],
      ].map(([k, w], i) => (
        <div className="leak-row" key={k}>
          <span>{k}</span>
          <div className="leak-track">
            <i style={{ "--w": `${w}%`, "--i": i } as React.CSSProperties} />
          </div>
        </div>
      ))}
    </div>
  );
}

const levers = [
  {
    n: "01",
    name: "Lower RTO",
    result: "Fewer returns, less logistics waste.",
    cls: "b-rto",
    Viz: RtoVisual,
  },
  {
    n: "02",
    name: "Higher AOV",
    result: "More revenue from every order, with no extra ad spend.",
    cls: "b-aov",
    Viz: AovVisual,
  },
  {
    n: "03",
    name: "Higher LTV",
    result: "More repeat purchases from customers you already paid to acquire.",
    cls: "b-ltv",
    Viz: LtvVisual,
  },
  {
    n: "04",
    name: "Clear Data",
    result: "A live dashboard of where revenue leaks, so decisions run on numbers, not guesses.",
    cls: "b-data",
    Viz: DataVisual,
  },
];

/* ---------- Audit previews (illustrative: the real values come from the brand's own data) ---------- */

function LossVisual() {
  return (
    <div className="viz viz-loss" aria-hidden>
      <span className="viz-label mono">Revenue lost to RTO</span>
      <span className="loss-figure">
        ₹<span className="redact">00,00,000</span>
      </span>
      <span className="loss-note mono">Calculated from your data</span>
    </div>
  );
}

function RiskVisual() {
  return (
    <div className="viz viz-risk" aria-hidden>
      {[
        ["Pincode", "High"],
        ["Product", "Medium"],
        ["Segment", "High"],
      ].map(([k, level]) => (
        <div className="risk-row" key={k}>
          <span>{k}</span>
          <span className={`risk-chip risk-${level.toLowerCase()}`}>{level} risk</span>
        </div>
      ))}
    </div>
  );
}

function RoadmapVisual() {
  return (
    <div className="viz viz-road" aria-hidden>
      <ol className="road">
        {["Audit", "Prevention", "Growth"].map((s, i) => (
          <li key={s} style={{ "--i": i } as React.CSSProperties}>
            <span className="road-node">{i + 1}</span>
            {s}
          </li>
        ))}
      </ol>
    </div>
  );
}

const audit = [
  { title: "Estimated revenue lost to RTO", Viz: LossVisual },
  { title: "Your highest-risk pincodes, products and segments", Viz: RiskVisual },
  { title: "A roadmap from audit to prevention to growth", Viz: RoadmapVisual },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Nav cta={BOOKING} />

      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="hero-bg" aria-hidden />
          <div className="wrap hero-inner">
            <div className="hero-copy">
              <div className="hero-message">
                <p className="tag">
                  <span className="tag-dot" /> Done-for-you AI for D2C brands
                </p>
                <h1 className="display hero-title">
                  AI Automation That Turns Your D2C Orders Into{" "}
                  <span className="accent-text keep">Delivered Revenue.</span>
                </h1>
                <p className="lede">
                  We build and run AI systems that cut RTO, raise order value and bring customers back. All done for you,
                  so your team stops chasing and starts growing.
                </p>
              </div>
              <div className="hero-actions">
                <div className="cta-row">
                  <BookButton location="hero" />
                  <a href="#how-it-works" className="btn btn-lg btn-ghost">
                    See How It Works <span aria-hidden>↓</span>
                  </a>
                </div>
                <p className="assure">
                  <svg viewBox="0 0 16 16" aria-hidden>
                    <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Free 30-minute call. The larger part of our fee is due only after you see your RTO drop.
                </p>
              </div>
            </div>
            <div className="hero-visual">
              <HeroStage />
            </div>
            <ul className="trust" aria-label="What powers Krityam">
              {[
                ["Voice AI", "M12 3a3 3 0 00-3 3v6a3 3 0 006 0V6a3 3 0 00-3-3zM5 11a7 7 0 0014 0M12 18v3"],
                ["WhatsApp Automation", "M4 20l1.4-4.2A8 8 0 1112 20a8 8 0 01-3.8-1L4 20z"],
                ["Order Risk Scoring", "M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6l8-3zM9 12l2 2 4-4"],
                ["Revenue Analytics", "M4 20V10M10 20V4M16 20v-7M22 20H2"],
              ].map(([t, d]) => (
                <li key={t}>
                  <svg viewBox="0 0 24 24" aria-hidden>
                    <path d={d} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Problem */}
        <section className="dark problem" id="problem">
          <div className="problem-glow" aria-hidden />
          <div className="wrap">
            <Reveal as="h2" className="display h2 narrow">
              Growth shouldn&rsquo;t cost you more with every order.
            </Reveal>
            <div className="problem-grid">
              <Reveal className="stat-card">
                <span className="stat">25–30%</span>
                <div className="stat-body">
                  <p>of cash-on-delivery orders in India come back as RTO. Prepaid: 2–3%.</p>
                  <a className="stat-source" href="https://razorpay.com/blog/cash-on-delivery-and-the-challenges/" target="_blank" rel="noopener noreferrer">
                    Source: Razorpay
                  </a>
                </div>
              </Reveal>
              <ul className="problem-list">
                {problems.map((p, i) => (
                  <Reveal as="li" key={p} delay={i * 60}>
                    {p}
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Four levers */}
        <section className="light levers" id="what-we-do">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">What we fix</p>
              <h2 className="display h2">
                One system. Four levers on your bottom line.
              </h2>
            </Reveal>
            <div className="bento">
              {levers.map(({ n, name, result, cls, Viz }, i) => (
                <Reveal key={n} className={`bento-card ${cls}`} delay={(i % 2) * 90}>
                  <Viz />
                  <div className="bento-body">
                    <div className="bento-title">
                      <span className="mono card-n">{n}</span>
                      <h3>{name}</h3>
                    </div>
                    <p>{result}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="viz-note">Visuals are illustrative, not client data.</p>
          </div>
        </section>

        {/* How it works */}
        <section className="paper steps" id="how-it-works">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">How it works</p>
              <h2 className="display h2">
                We build it. We run it. <span className="dim">You see the numbers.</span>
              </h2>
            </Reveal>
            <div className="stack">
              {steps.map((s, i) => (
                <article key={s.n} className="step" style={{ "--i": i } as React.CSSProperties}>
                  <div className="step-left">
                    <span className="step-verb">{s.verb}</span>
                    <h3>{s.name}</h3>
                  </div>
                  <div className="step-right">
                    <ul>
                      {s.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            <Reveal className="dfy">
              <div>
                <p className="eyebrow">Done-for-you means</p>
                <p className="dfy-text">
                  One onboarding session, a dedicated account manager, a weekly 30-minute optimization call and a monthly
                  leadership review. <span className="dim">We handle the build, the integration and the upkeep.</span>
                </p>
              </div>
              <Link href={BOOKING} className="btn btn-lg btn-dark" data-ph-capture-attribute-cta-location="how-it-works">
                {BOOKING_LABEL} <Arrow />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Comparison */}
        <section className="dark compare">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">The alternatives</p>
              <h2 className="display h2 narrow">Why not just hire telecallers or an agency?</h2>
            </Reveal>
            <Reveal className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>
                      <span className="sr-only">Criteria</span>
                    </th>
                    {compare.cols.map((c) => (
                      <th key={c} scope="col" className={c === "Krityam" ? "us" : ""}>
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compare.rows.map((r) => (
                    <tr key={r[0]}>
                      <th scope="row">{r[0]}</th>
                      <td data-label="Telecalling team">{r[1]}</td>
                      <td data-label="Marketing agency">{r[2]}</td>
                      <td data-label="Krityam" className="us">
                        {r[3]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
        </section>

        {/* Who it's for */}
        <section className="paper who">
          <div className="wrap who-grid">
            <Reveal>
              <p className="eyebrow">Who it&rsquo;s for</p>
              <h2 className="display h2">Built for brands with orders to protect.</h2>
            </Reveal>
            <Reveal delay={80}>
              <ul className="fit">
                {fit.map((f) => (
                  <li key={f}>
                    <span className="tick" aria-hidden>
                      <svg viewBox="0 0 16 16">
                        <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="notfit">
                <b>Not a fit if</b> you have very low order volume, or you aren&rsquo;t ready to share order and delivery data.
              </p>
            </Reveal>
          </div>
        </section>

        {/* What you'll see */}
        <section className="light results" id="preview">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">What you&rsquo;ll see</p>
              <h2 className="display h2">
                What your audit shows you.
              </h2>
            </Reveal>
            <div className="results-grid">
              {audit.map(({ title, Viz }, i) => (
                <Reveal key={title} className="result-card" delay={i * 70}>
                  <Viz />
                  <div className="result-body">
                    <span className="mono card-n">0{i + 1}</span>
                    <h3>{title}</h3>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="viz-note">Visuals are illustrative. Your audit is calculated from your own data.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="light faq" id="faq">
          <div className="wrap faq-grid">
            <Reveal className="faq-head">
              <p className="eyebrow">FAQ</p>
              <h2 className="display h2">
                RTO automation, answered.
              </h2>
            </Reveal>
            <Reveal className="faq-list" delay={60}>
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>
                    <span>{f.q}</span>
                    <i aria-hidden />
                  </summary>
                  <div className="faq-a">
                    <p>{f.a}</p>
                  </div>
                </details>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Final CTA */}
        <section className="dark final" id="contact">
          <div className="final-glow" aria-hidden />
          <div className="wrap final-inner">
            <Reveal className="final-content">
              <h2 className="display final-title">
                Find out what RTO is <span className="accent-text">really costing you.</span>
              </h2>
              <p className="lede">
                Book a 30-minute call. We&rsquo;ll talk through where your orders are leaking and whether we&rsquo;re the
                right fit. If we&rsquo;re not, we&rsquo;ll tell you.
              </p>
              <BookButton size="xl" location="final" />
              <p className="assure">
                <svg viewBox="0 0 16 16" aria-hidden>
                  <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                If you work with us, the larger part of our fee is due only after you see your RTO drop.
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
