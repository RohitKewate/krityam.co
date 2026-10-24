"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#what-we-do", label: "What We Do" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#preview", label: "What You'll See" },
  { href: "#faq", label: "FAQ" },
];

export function Logo({ href = "#top" }: { href?: string }) {
  return (
    <a href={href} className="logo" aria-label="Krityam.co home">
      <Image src="/images/krityam-mark.png" alt="" width={196} height={160} priority className="logo-mark" />
      <span className="logo-word">
        Krityam<span>.co</span>
      </span>
    </a>
  );
}

export function Nav({ cta }: { cta: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Mobile CTA bar: visible once the hero's CTAs are gone, hidden again at the final CTA.
    const hero = document.querySelector(".hero");
    const final = document.querySelector("#contact");
    const seen = new Map<Element, boolean>();
    const barIo = new IntersectionObserver((entries) => {
      entries.forEach((e) => seen.set(e.target, e.isIntersecting));
      setPastHero(!seen.get(hero!) && !seen.get(final!));
    });
    if (hero) barIo.observe(hero);
    if (final) barIo.observe(final);

    // Scroll-spy: highlight the nav link for the section in the middle of the viewport.
    const spyIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
          else setActive((cur) => (cur === `#${e.target.id}` ? "" : cur));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    LINKS.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) spyIo.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      barIo.disconnect();
      spyIo.disconnect();
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 900 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
        <div className="nav-bar">
          <Logo />
          <nav className="nav-links" aria-label="Primary">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className={active === l.href ? "is-active" : ""} aria-current={active === l.href ? "true" : undefined}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nav-end">
            <Link href={cta} className="btn btn-sm btn-accent nav-cta" data-ph-capture-attribute-cta-location="nav">
              Book a Call
            </Link>
            <button
              type="button"
              className="menu-btn"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              <i />
              <i />
            </button>
          </div>
        </div>

        <div id="mobile-menu" className="sheet" hidden={!open}>
          <nav aria-label="Mobile">
            {LINKS.map((l, i) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ "--i": i } as React.CSSProperties}>
                {l.label}
                <span aria-hidden>→</span>
              </a>
            ))}
          </nav>
          <Link href={cta} className="btn btn-lg btn-accent sheet-cta" onClick={() => setOpen(false)} data-ph-capture-attribute-cta-location="mobile-menu">
            Book a Free Discovery Call
          </Link>
        </div>
      </header>
      {open && <div className="scrim" onClick={() => setOpen(false)} aria-hidden />}

      <div className={`mobile-bar ${pastHero && !open ? "is-on" : ""}`} aria-hidden={!pastHero}>
        <Link href={cta} className="btn btn-lg btn-accent" tabIndex={pastHero ? 0 : -1} data-ph-capture-attribute-cta-location="mobile-bar">
          Book a Free Discovery Call
        </Link>
      </div>
    </>
  );
}
