export const siteConfig = {
  /** Update once the real domain is live — used for canonical URLs and JSON-LD. */
  url: "https://pushty-shrimankar-geodesic.vercel.app",
  title: "Pushty Shrimankar",
  tagline: "Early-universe cosmology and gravitational waves",
  description:
    "Pushty Shrimankar — early-universe cosmologist working on gravitational-wave signatures of primordial magnetic fields. M.Sc. Physics, VIT Vellore; Project Intern, Indian Institute of Astrophysics.",
} as const;

export const navigation = [
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/talks", label: "Talks" },
  { href: "/cv", label: "CV" },
] as const;
