import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "../LegalPage";
import { BOOKING_URL, LINKEDIN_URL } from "../site";

export const metadata: Metadata = {
  title: "Privacy Policy | Krityam",
  description: "How Krityam collects, uses and protects personal data for website visitors, prospective clients and the D2C brands we work with.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="24 October 2026">
      <p>
        This policy explains how Krityam (&ldquo;Krityam&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses and
        protects personal data when you visit krityam.co, book a call with us, or work with us as a client. We process
        personal data in line with India&rsquo;s Digital Personal Data Protection Act, 2023 (&ldquo;DPDP Act&rdquo;) and
        other applicable laws.
      </p>

      <h2>1. Who this policy covers</h2>
      <ul>
        <li>
          <b>Website visitors</b> who browse krityam.co.
        </li>
        <li>
          <b>Prospective clients</b> who book a discovery call or contact us.
        </li>
        <li>
          <b>Client brands</b> and their team members we work with.
        </li>
        <li>
          <b>Our clients&rsquo; customers</b>, whose data we process on a client&rsquo;s behalf to run order
          confirmation, delivery follow-up and customer engagement (see section 4).
        </li>
      </ul>

      <h2>2. What we collect</h2>
      <h3>When you visit the website</h3>
      <p>
        Our hosting provider automatically records standard technical data such as IP address, browser type, device
        information, pages visited and the time of the visit. We use this to keep the site secure and working.
      </p>
      <h3>Analytics</h3>
      <p>
        To understand how visitors use the site and improve it, we use two analytics tools. Vercel Web Analytics counts
        page visits without cookies. PostHog records how visitors move through the site, such as pages viewed, buttons
        clicked, how far they scroll and anonymised session replays, and stores an identifier in a cookie and your
        browser&rsquo;s local storage so repeat visits can be recognised. Anything typed into a form is masked and never
        recorded. We don&rsquo;t identify individual visitors, and we don&rsquo;t use advertising cookies. You can block
        these by turning on your browser&rsquo;s tracking protection or clearing site data.
      </p>
      <h3>When you book a call or contact us</h3>
      <p>
        Calls are booked through Cal.com, which collects the details you enter, such as your name, email address and any
        notes about your business. Cal.com&rsquo;s own privacy policy applies to that booking. We also keep the
        information you share with us on calls, by email, on WhatsApp or on LinkedIn.
      </p>
      <h3>When you become a client</h3>
      <p>
        To deliver our services, a client brand shares business data with us. This can include order, cash-on-delivery,
        shipping and delivery data, and its customers&rsquo; names, phone numbers, delivery addresses and purchase
        history. Where the service is enabled, it also includes records of the AI voice calls and WhatsApp messages we
        run for the brand, such as call recordings, transcripts and message logs.
      </p>

      <h2>3. How we use it</h2>
      <ul>
        <li>To respond to enquiries, hold discovery calls and assess whether we are the right fit.</li>
        <li>To set up, run and improve the services a client has engaged us for.</li>
        <li>To report results to clients, including dashboards and reviews.</li>
        <li>To understand how visitors use our website and improve it.</li>
        <li>To keep our website and systems secure and prevent misuse.</li>
        <li>To meet legal, tax and regulatory obligations.</li>
      </ul>
      <p>We do not sell personal data.</p>

      <h2>4. Data we process for client brands</h2>
      <p>
        For our clients&rsquo; customers&rsquo; data, the client brand decides why and how that data is used and is the
        Data Fiduciary under the DPDP Act. Krityam acts as a Data Processor: we process that data only to provide the
        services the brand has engaged us for, under its instructions and our written agreement with it.
      </p>
      <p>
        Client brands are responsible for giving their customers the required notice, obtaining any consent needed to
        contact them by phone or WhatsApp, and following applicable telecom and messaging rules. If you are a customer of
        a brand we work with, please contact that brand first about your data. We will help the brand respond to your
        request.
      </p>

      <h2>5. Who we share it with</h2>
      <p>We share personal data only as needed to run our business and deliver our services, with:</p>
      <ul>
        <li>
          Service providers that support our work, such as hosting, website analytics (Vercel and PostHog), scheduling,
          telephony and voice AI, WhatsApp Business messaging, cloud storage and AI model providers. They may use the data only to provide their service
          to us.
        </li>
        <li>Authorities, where the law requires it.</li>
        <li>A successor business, if Krityam is merged, acquired or restructured, under the same protections.</li>
      </ul>
      <p>
        Some providers may process data outside India. Where they do, we rely on transfers permitted under Indian law.
      </p>

      <h2>6. How long we keep it</h2>
      <p>
        We keep personal data only as long as we need it for the purposes above. Client data is kept for the length of
        the engagement and then deleted or returned within the period agreed with the client, unless the law requires us
        to keep it longer. Enquiry and booking details are deleted when they are no longer needed.
      </p>

      <h2>7. How we protect it</h2>
      <p>
        We use reasonable technical and organisational safeguards, including access controls, encrypted connections and
        restricting access to people who need it. No system is completely secure, but if a personal data breach affects
        you, we will notify you and the relevant authorities as the law requires.
      </p>

      <h2>8. Your rights</h2>
      <p>Under the DPDP Act you can ask us to:</p>
      <ul>
        <li>tell you what personal data we hold about you and how we use it;</li>
        <li>correct, complete or update it;</li>
        <li>erase it, where we no longer need it or you withdraw consent;</li>
        <li>handle a grievance about how we have processed it.</li>
      </ul>
      <p>
        You can also nominate another person to exercise these rights on your behalf. If we don&rsquo;t resolve your
        grievance, you can complain to the Data Protection Board of India.
      </p>

      <h2>9. Children</h2>
      <p>Our website and services are meant for businesses and are not directed at anyone under 18.</p>

      <h2>10. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The &ldquo;last updated&rdquo; date at the top shows when it last
        changed.
      </p>

      <h2>11. Contact and grievances</h2>
      <p>
        For privacy questions, requests or grievances, contact Rohit Kewate, Founder, through our{" "}
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
