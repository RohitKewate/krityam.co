import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "../LegalPage";
import { BOOKING_URL, LINKEDIN_URL } from "../site";

export const metadata: Metadata = {
  title: "Terms of Use | Krityam",
  description: "The terms that apply when you use krityam.co or book a discovery call with Krityam.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <LegalPage title="Terms of Use" updated="19 October 2026">
      <p>
        These terms apply when you use krityam.co (the &ldquo;website&rdquo;) or book a discovery call with Krityam
        (&ldquo;Krityam&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By using the website you agree to them. If you
        don&rsquo;t agree, please don&rsquo;t use the website.
      </p>

      <h2>1. Our services</h2>
      <p>
        Krityam provides done-for-you AI automation for D2C and e-commerce brands, including RTO prevention, order
        confirmation, delivery follow-up and customer engagement. Any paid engagement is governed by a separate written
        proposal or agreement, which sets out the scope, fees, timelines and data-processing terms. If that agreement
        conflicts with these terms, the agreement takes precedence.
      </p>

      <h2>2. Discovery calls</h2>
      <p>
        Discovery calls are free and carry no obligation on either side. We use them to understand your business and
        decide together whether we are the right fit. We may decline any engagement.
      </p>

      <h2>3. Information on the website</h2>
      <p>
        The website is for general information. It is not legal, financial or professional advice for your business.
        Industry statistics are drawn from the third-party sources we cite. Dashboards, order queues and figures marked
        as illustrative are examples, not real client data. Results depend on each brand&rsquo;s products, customers,
        data and operations, and we do not guarantee any specific outcome from the website&rsquo;s content alone.
      </p>

      <h2>4. Fees</h2>
      <p>
        Fees, including any part that depends on performance, are agreed in writing before work begins. Nothing on the
        website is an offer to provide services at a particular price.
      </p>

      <h2>5. Client responsibilities</h2>
      <p>Clients who engage us agree, as set out in their agreement, to:</p>
      <ul>
        <li>share only data they are lawfully entitled to share with us;</li>
        <li>
          give their customers the required notices and obtain any consents needed for us to contact them by phone or
          WhatsApp on the client&rsquo;s behalf;
        </li>
        <li>comply with applicable consumer, telecom, messaging and data-protection laws.</li>
      </ul>

      <h2>6. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>use the website for anything unlawful, misleading or harmful;</li>
        <li>try to disrupt, overload or gain unauthorised access to the website or our systems;</li>
        <li>copy or republish the website&rsquo;s content for commercial purposes without our permission.</li>
      </ul>

      <h2>7. Intellectual property</h2>
      <p>
        The website&rsquo;s content, design and branding, including the Krityam name and logo and the names Revenue
        Leak Audit™, RTO Prevention Engine™ and LTV Growth Engine™, belong to Krityam. You may view and share the
        website for personal or internal business use.
      </p>

      <h2>8. Third-party services</h2>
      <p>
        The website links to services we don&rsquo;t control, such as Cal.com for booking calls and LinkedIn. Their own
        terms and privacy policies apply when you use them.
      </p>

      <h2>9. Disclaimer and limitation of liability</h2>
      <p>
        The website is provided &ldquo;as is&rdquo;. To the extent the law allows, we make no warranties about it and
        are not liable for any indirect or consequential loss, or loss of profit, revenue or data, arising from your use
        of the website. Liability for paid services is governed by the client agreement.
      </p>

      <h2>10. Privacy</h2>
      <p>
        Our <Link href="/privacy">Privacy Policy</Link> explains how we handle personal data.
      </p>

      <h2>11. Governing law</h2>
      <p>These terms are governed by the laws of India, and the courts of India have jurisdiction over any dispute.</p>

      <h2>12. Changes</h2>
      <p>
        We may update these terms from time to time. The &ldquo;last updated&rdquo; date at the top shows when they last
        changed.
      </p>

      <h2>13. Contact</h2>
      <p>
        Questions about these terms? Reach us through our{" "}
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          LinkedIn page
        </a>{" "}
        or by{" "}
        <Link href={BOOKING_URL}>booking a call</Link>
        .
      </p>
    </LegalPage>
  );
}
