import Link from "next/link";
import { Footer } from "./Footer";
import { Logo } from "./Nav";
import { BOOKING_URL } from "./site";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <>
      <header className="legal-bar">
        <div className="wrap legal-bar-inner">
          <Logo href="/" />
          <Link href={BOOKING_URL} className="btn btn-sm btn-accent" data-ph-capture-attribute-cta-location="legal-header">
            Book a Call
          </Link>
        </div>
      </header>
      <main className="light legal">
        <article className="wrap legal-inner">
          <p className="eyebrow">Last updated {updated}</p>
          <h1 className="display legal-title">{title}</h1>
          <div className="legal-body">{children}</div>
        </article>
      </main>
      <Footer />
    </>
  );
}
