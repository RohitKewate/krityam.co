import Link from "next/link";
import { Logo } from "./Nav";
import { LINKEDIN_URL } from "./site";

// Section links are root-relative so the footer works on the legal pages too.
export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-top">
          <Logo href="/" />
          <nav aria-label="Footer">
            <Link href="/#what-we-do">What We Do</Link>
            <Link href="/#how-it-works">How It Works</Link>
            <Link href="/#faq">FAQ</Link>
            <Link href="/book">Contact</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </div>
        <div className="footer-meta">
          <span>© Krityam. All rights reserved.</span>
          <span className="social">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
