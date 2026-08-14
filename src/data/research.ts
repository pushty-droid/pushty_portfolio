import type { ResearchPosition } from "./types";

/** Newest first. */
export const research: ResearchPosition[] = [
  {
    slug: "iia-thesis",
    title: "Research Intern — Master's Thesis",
    institution: "Indian Institute of Astrophysics (IIA)",
    location: "Bengaluru, India",
    // The CV says "2025–Present"; these dates come from the content sheet and
    // match the Visiting Student Programme 2026. See TODO.md.
    dates: "January – July 2026",
    programme: "Visiting Student Programme 2026",
    supervisors: [
      {
        role: "External supervisor",
        name: "Dr. Debika Chowdhury",
        affiliation: "DST INSPIRE Faculty Fellow, IIA",
      },
      {
        role: "Internal supervisor",
        name: "Dr. Gopal Kashyap",
        affiliation: "School of Advanced Sciences, VIT Vellore",
      },
    ],
    highlights: [
      "Modelled the stochastic gravitational-wave background sourced by primordial magnetic fields in non-helical configurations.",
      "Derived analytic gauge-field solutions across three cosmological eras: the pre-inflationary Bunch–Davies vacuum, inflation, and reheating.",
      "Computed the spectral energy density Ω_{GW}(f) and compared it against LISA, ET, DECIGO, BBO and aLIGO sensitivity curves.",
      "Carried out a backreaction consistency analysis, developing analytical and numerical solutions for magnetogenesis beyond the slow-roll regime.",
      "Identified the parameter space in which sourced signals would be detectable by future observatories.",
    ],
    summary: null,
    result:
      "Ω_{GW} ≈ 4.4 × 10^{−19} for n = 2, with the backreaction constraint Ω_{EM} ≈ 2.1 × 10^{−5} ≪ 1 satisfied.",
    projectSlug: "gw-from-magnetogenesis",
  },
  {
    slug: "cddr-bao",
    title: "Cosmic Distance Duality Relation and BAO Analysis",
    institution: "Vellore Institute of Technology (VIT)",
    location: "Vellore, India",
    dates: "2025 – 2026",
    programme: null,
    supervisors: [
      {
        role: "Supervisor",
        name: "Dr. Gopal Kashyap",
        affiliation: "School of Advanced Sciences, VIT Vellore",
      },
    ],
    highlights: [
      "Engineered model-independent tests of the cosmic distance duality relation to probe directional anisotropies.",
      "Built a Python analysis pipeline (NumPy, Astropy, scikit-learn) reconstructing the duality ratio η(z) from Pantheon+ and SH0ES data.",
      "Applied Gaussian Process Regression and MCMC sampling with emcee for uncertainty propagation and dipole statistical inference.",
      "Cross-validated against DESI DR2 BAO angular diameter distances for joint expansion constraints and tests of departures from ΛCDM.",
      "Demonstrated consistency with the Etherington reciprocity theorem within observational limits, while identifying potential signals of cosmic anisotropy in SN Ia positional distributions.",
    ],
    summary: null,
    result: "Lead author, arXiv:2604.04436. Datasets: Pantheon+, BAO from 6dFGS through DESI DR2, and cosmic chronometers.",
    projectSlug: "distance-duality-anisotropy",
  },
  {
    slug: "plasma-gw-similarity",
    title: "Similarity Parameters in Plasma and Gravitational Waves",
    institution: "Vellore Institute of Technology (VIT)",
    location: "Vellore, India",
    dates: "2025",
    programme: null,
    supervisors: [
      {
        role: "Supervisor",
        name: "Dr. Vishwa Bandhu Pathak",
        affiliation: "VIT Vellore",
      },
    ],
    highlights: [],
    summary:
      "Explored analogies between plasma wave propagation and gravitational-wave signatures via self-similar scaling laws.",
    result: null,
    projectSlug: null,
  },
  {
    slug: "neogen-observatory",
    title: "Stellar and Solar Observations",
    institution: "Neogen Solar and Stellar Observatory",
    location: "Rajkot, India",
    dates: "2024 – present",
    programme: null,
    supervisors: [],
    highlights: [
      "Operated 8–12 inch reflector telescopes for Messier object tracking.",
      "Carried out solar spectrographic observations.",
    ],
    summary: null,
    result: null,
    projectSlug: null,
  },
];

export const observationalExperience: string[] = [
  "8–12 inch reflector telescopes — operation, alignment, and Messier object tracking (Neogen Observatory, Rajkot)",
  "Solar spectrographic observations",
  "Sunspot tracking and photospheric rotation measurement (B.Sc. project)",
  "Annual participant, Messier Marathon — Big Bang Astronomy Club, Rajkot",
];
