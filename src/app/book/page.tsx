import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../Footer";
import { Logo } from "../Nav";
import { LINKEDIN_URL } from "../site";
import { CalEmbed } from "./CalEmbed";

export const metadata: Metadata = {
  title: "Book a Discovery Call | Krityam",
  description:
    "Book a free 30-minute call with Krityam's founder. We look at your RTO and COD numbers, find where revenue is leaking and tell you honestly whether we're the right fit.",
  alternates: { canonical: "/book" },
};

const agenda = [
  "We look at your RTO, COD and delivery numbers together.",
  "We point out where revenue is most likely leaking, and what to fix first.",
  "You get an honest yes or no on fit, and the next steps if it's a yes.",
];

const prep = ["Monthly orders and revenue", "Your rough COD share and RTO rate", "Your store platform and courier partners"];

export default function Book() {
  return (
    <>
      <header className="legal-bar">
        <div className="wrap legal-bar-inner">
          <Logo href="/" />
          <Link href="/" className="btn btn-sm btn-ghost">
            <span aria-hidden>←</span> Back to site
          </Link>
        </div>
      </header>

      <main className="light book">
        <div className="book-bg" aria-hidden />
        <div className="wrap book-grid">
          <div className="book-head">
            <p className="tag">
              <span className="tag-dot" /> Free discovery call · 30 minutes
            </p>
            <h1 className="display book-title">Let&rsquo;s find where your orders are leaking.</h1>
            <p className="lede">No pitch deck. Just your numbers, and an honest answer on whether we can help.</p>
            <div className="host">
              <span className="host-mark" aria-hidden>
                RK
              </span>
              <span className="host-text">
                <span className="host-name">You&rsquo;ll speak with Rohit Kewate</span>
                <span className="host-role">
                  Founder, Krityam ·{" "}
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </span>
              </span>
            </div>
          </div>

          <CalEmbed />

          <div className="book-details">
            <section>
              <h2 className="book-h">On the call</h2>
              <ol className="book-agenda">
                {agenda.map((a, i) => (
                  <li key={a}>
                    <span className="mono">0{i + 1}</span>
                    {a}
                  </li>
                ))}
              </ol>
            </section>
            <section>
              <h2 className="book-h">Useful to have handy</h2>
              <ul className="book-prep">
                {prep.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className="book-note">Rough numbers are fine. You don&rsquo;t need to share any data before the call.</p>
            </section>
            <p className="assure book-assure">
              <svg viewBox="0 0 16 16" aria-hidden>
                <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              If you work with us, the larger part of our fee is due only after you see your RTO drop.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
