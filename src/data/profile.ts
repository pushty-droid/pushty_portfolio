import type { Profile } from "./types";

export const profile: Profile = {
  name: "Pushty Shrimankar",

  oneLiner:
    "Early-universe cosmologist working on gravitational-wave signatures of primordial magnetic fields.",

  oneLinerLong:
    "Theoretical cosmologist — inflationary magnetogenesis, stochastic gravitational-wave backgrounds, and observational tests of cosmic isotropy.",

  researchStatement:
    "I am a theoretical physicist driven by the goal of uncovering the physics of the early universe through gravitational waves. My research bridges the gap between complex inflationary modeling, specifically magnetogenesis, and observational cosmology. As the lead author of arXiv:2604.04436, I combine analytical theory with computational tools like MCMC and GPR to probe cosmic anisotropies. I am eager to apply my background in sourced stochastic backgrounds to the next generation of GW observatories.",

  status: "Applying for PhD positions in theoretical cosmology and gravitational-wave physics, 2026 cycle.",

  currently: [
    "M.Sc. Physics (2024–2026), VIT Vellore; thesis submitted May 2026",
    "Former Project Intern, Indian Institute of Astrophysics",
    "Applying for PhD positions, 2026 cycle",
  ],

  // The VIT address stops working at graduation in 2026; this site should
  // outlive the degree, so the personal address is the only one published.
  email: "pushtysd@gmail.com",

  location: "Bengaluru, India",

  photo: null,

  links: [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/pushty-shrimankar-652198280",
      handle: "pushty-shrimankar",
    },
    {
      label: "JCAP",
      href: "https://doi.org/10.1088/1475-7516/2026/10/028",
      handle: "10 (2026) 028",
    },
    {
      label: "arXiv",
      href: "https://arxiv.org/abs/2604.04436",
      handle: "2604.04436",
    },
    {
      label: "GitHub",
      href: "https://github.com/pushty-droid",
      handle: "pushty-droid",
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0009-0007-1501-2337",
      handle: "0009-0007-1501-2337",
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?hl=en&user=drIAl_4AAAAJ",
    },
    // INSPIRE-HEP is not yet set up.
    // Add them here and they appear everywhere links are rendered.
  ],

  researchInterests: [
    "DESI and large-scale structure",
    "Cosmic distance duality & tests of isotropy",
    "Early-universe cosmology",
    "Gravitational waves",
    "Theoretical astrophysics",
    "Fast radio bursts & the CMB",
    "Modified gravity",
    "Plasma astrophysics",
  ],

  specialization: {
    primary:
      "Observational cosmology — DESI and large-scale structure, with model-independent, data-driven tests of the cosmological principle using Type Ia supernovae and BAO.",
    secondary:
      "Early-universe cosmology — inflationary magnetogenesis and the stochastic gravitational-wave background it sources.",
    peripheral: "Modified gravity; fast radio bursts and the CMB; plasma astrophysics.",
  },

  theoryAreas: [
    "General relativity and FLRW cosmology",
    "Inflationary cosmology, slow-roll formalism, and reheating",
    "Inflationary magnetogenesis, conformal-invariance breaking, and gauge-field dynamics in curved spacetime",
    "Stochastic gravitational-wave backgrounds and detector sensitivity curves",
    "Gravitational waves, supernovae and other transients",
    "Black hole mergers, kilonovae, Love numbers",
    "Cosmological distance measures, the Etherington relation, and the cosmological principle",
    "Bayesian statistics, MCMC, and Gaussian-process reconstruction in a cosmological context",
  ],
};
