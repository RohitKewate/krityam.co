import type { Metadata, Viewport } from "next";
import { Geist_Mono, Manrope, Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { DESCRIPTION, SITE_NAME, SITE_URL, TITLE } from "./site";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Display face for headlines, big numerals and the Krityam.co wordmark: geometric, echoing the round forms in the mark.
const sora = Sora({
  variable: "--font-brand",
  subsets: ["latin"],
});

// Body face for copy, buttons and UI.
const manrope = Manrope({
  variable: "--ff-manrope",
  subsets: ["latin"],
});

const fontVars = [geistMono, sora, manrope].map((f) => f.variable).join(" ");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export const viewport: Viewport = {
  themeColor: "#fbfaf8",
};

// Runs before paint: arms the scroll reveals, with a fallback that shows everything if the app never boots.
const bootScript =
  "var d=document.documentElement;d.dataset.reveal='on';setTimeout(function(){if(!window.__reveal)d.dataset.reveal='off'},2500);";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={fontVars} suppressHydrationWarning>
      <head>
        {/* Extensions inject their own <script> tags into <head>, which React can mistake for this one during hydration. */}
        <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
