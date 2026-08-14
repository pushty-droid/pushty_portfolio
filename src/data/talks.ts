import type { Award, Outreach, School, Talk } from "./types";

export const talks: Talk[] = [
  {
    title: "Gravitational-wave signatures of inflationary magnetogenesis",
    event: 'ICTS programme — "Magnetic fields in the primordial universe"',
    location: "International Centre for Theoretical Sciences, Bengaluru",
    dates: "30 November – 4 December 2026",
    role: "Selected participant, contributed talk",
    upcoming: true,
    description: null,
  },
  {
    title:
      "Computational Exploration of Gravitational Wave Imprints from Magnetogenesis During Inflation",
    event: "Poster presentation, VIT Vellore",
    location: null,
    dates: "2026",
    role: "Poster",
    upcoming: false,
    description: null,
  },
];

export const awards: Award[] = [
  {
    title: "Ranked 9th in B.Sc. Physics",
    detail: "Saurashtra University",
    year: "2022",
  },
  {
    title: "Selected, Visiting Student Programme",
    detail: "Indian Institute of Astrophysics, Bengaluru",
    year: "2026",
  },
  {
    title: "Selected, ICTS Summer School in Gravitational Waves",
    detail: "International Centre for Theoretical Sciences",
    year: "2025",
  },
  {
    title: "Selected, IUCAA Summer School in Astronomy and Astrophysics",
    detail: "Inter-University Centre for Astronomy and Astrophysics",
    year: "2021",
  },
];

export const schools: School[] = [
  {
    programme: "ICTS Summer School in Gravitational Waves",
    year: "2025",
    content:
      "GW detection pipelines, waveform modelling, and mock-signal analysis in Python",
  },
  {
    programme: "IUCAA Summer School in Astronomy and Astrophysics",
    year: "2021",
    content: "Gravitational lensing, GW fundamentals, and cosmological time dilation",
  },
  {
    programme: "Photonics Lecture Series, IIT Guwahati (online)",
    year: "2021",
    content: null,
  },
];

export const outreach: Outreach[] = [
  {
    role: "Science outreach volunteer",
    organisation: "IIA Open Day",
    detail:
      "Explaining fundamental astrophysics to school students and the general public.",
  },
  {
    role: "Member",
    organisation: "Big Bang Astronomy Club, Rajkot",
    detail: "Annual participant in Messier Marathon observations.",
  },
];
