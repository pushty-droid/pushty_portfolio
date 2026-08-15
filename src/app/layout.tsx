import type { Metadata } from "next";
import { Agdasima, JetBrains_Mono, Open_Sans, Source_Serif_4 } from "next/font/google";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteSidebar } from "@/components/SiteSidebar";
import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/site";
import "@/styles/globals.css";

/** Condensed display face — headings only, never below 1.125rem. */
const agdasima = Agdasima({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-agdasima",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

/**
 * Kept for the result stats and physics notation only. Not preloaded — with
 * four families on the page, only the two that set actual running text earn a
 * blocking preload; these two swap in a moment later and nothing shifts.
 */
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-source-serif",
});

/** BibTeX and arXiv IDs only. Same reasoning as above. */
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.title} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.title}`,
  },
  description: siteConfig.description,
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    siteName: siteConfig.title,
    title: `${siteConfig.title} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [{ url: "/og.png", width: 1600, height: 840, alt: profile.oneLiner }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.title} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

/**
 * Resolve the theme before first paint so nobody sees a flash of the wrong
 * palette. Dark is the design's home state and it loads for everyone —
 * `prefers-color-scheme` is deliberately not consulted, because a visitor in
 * OS light mode would otherwise never see the site as it's meant to look.
 * The toggle's stored choice is the one thing that overrides it.
 */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    document.documentElement.dataset.theme = stored === 'light' ? 'light' : 'dark';
  } catch (e) {
    document.documentElement.dataset.theme = 'dark';
  }
})();
`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Physicist",
  description: profile.oneLiner,
  email: `mailto:${profile.email}`,
  url: siteConfig.url,
  knowsAbout: profile.researchInterests,
  affiliation: [
    { "@type": "CollegeOrUniversity", name: "Vellore Institute of Technology" },
    { "@type": "ResearchOrganization", name: "Indian Institute of Astrophysics" },
  ],
  sameAs: profile.links.map((link) => link.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${agdasima.variable} ${openSans.variable} ${sourceSerif.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only font-sans focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-bg"
        >
          Skip to content
        </a>
        <SiteSidebar />
        {/* The sidebar is fixed at ≥1280px, so the document is inset to clear
            it. Below that it collapses to a top bar and the inset goes away. */}
        <div className="xl:pl-[17rem]">
          <main id="main">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
