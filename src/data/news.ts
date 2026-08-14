import type { NewsItem } from "./types";

/** Newest first. Shown on the homepage; the section hides itself when empty. */
export const news: NewsItem[] = [
  {
    date: "November 2026",
    datetime: "2026-11-30",
    title:
      'Selected to speak at the ICTS programme "Magnetic fields in the primordial universe", Bengaluru.',
    href: "/talks",
  },
  {
    date: "May 2026",
    datetime: "2026-05-01",
    title:
      "M.Sc. thesis submitted — Computational Exploration of Gravitational Wave Imprints from Magnetogenesis During Inflation.",
    href: "/projects/gw-from-magnetogenesis",
  },
  {
    date: "April 2026",
    datetime: "2026-04-01",
    title: "First-author preprint posted: arXiv:2604.04436.",
    href: "/publications",
  },
];
