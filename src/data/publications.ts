import type { Publication } from "./types";

export const publications: Publication[] = [
  {
    title:
      "Directional Tests of the Cosmic Distance Duality Relation using Pantheon+ and BAO",
    authors: "Pushty Shrimankar, Gopal Kashyap",
    leadAuthor: true,
    venue: "Preprint · astro-ph.CO · prepared for submission to JCAP",
    year: "2026",
    arxivId: "2604.04436",
    url: "https://arxiv.org/abs/2604.04436",
    doi: "https://doi.org/10.48550/arXiv.2604.04436",
    description:
      "A model-independent search for directional anisotropy in the cosmic distance duality relation, yielding a 95% upper bound of A < 0.025 on the dipole amplitude — consistent with isotropy, and stable across supernova calibration choices.",
    keyNumbers: [
      { label: "Dipole amplitude bound", value: "A < 0.025 (95% CL)" },
      { label: "Observed dipole amplitude", value: "A = 0.008" },
      { label: "Spurious dipole, real sky geometry", value: "A ≈ 0.048" },
      { label: "Spurious dipole, isotropic positions", value: "A ≈ 0.017" },
      { label: "Supernovae used", value: "960 Pantheon+ at z > 0.1" },
      { label: "BAO measurements", value: "12, from 6dFGS to DESI DR2" },
      { label: "Cosmic chronometer points", value: "32" },
      { label: "SN calibrations tested", value: "free M_{B}, DB23, SH0ES" },
    ],
    supervisors: null,
    bibtex: `@article{Shrimankar2026CDDR,
  title  = {Directional Tests of the Cosmic Distance Duality Relation
            using Pantheon+ and BAO},
  author = {Shrimankar, Pushty and Kashyap, Gopal},
  year   = {2026},
  eprint = {2604.04436},
  archivePrefix = {arXiv},
  primaryClass  = {astro-ph.CO},
  doi    = {10.48550/arXiv.2604.04436},
  url    = {https://arxiv.org/abs/2604.04436}
}`,
    pdf: null,
    projectSlug: "distance-duality-anisotropy",
  },
  {
    title:
      "Computational Exploration of Gravitational Wave Imprints from Magnetogenesis During Inflation",
    authors: "Pushty Shrimankar",
    leadAuthor: false,
    venue: "M.Sc. thesis · VIT Vellore, carried out at IIA Bengaluru",
    year: "2026",
    arxivId: null,
    url: null,
    doi: null,
    description:
      "Magnetic fields are found everywhere in the universe, from galaxies to the near-empty space between them, and nobody is certain where the first seed fields came from. One possibility is that they were created during inflation, the burst of expansion in the universe's first instant. This thesis works out how strong such primordial fields would be, and whether the gravitational waves they generate could ever be detected. The answer, for the simplest non-helical case, is no — the signal sits about six orders of magnitude below what LISA, DECIGO, or the Einstein Telescope could see, which points toward helical models as the more promising place to look.",
    keyNumbers: [
      { label: "Ω_{GW} (n = 2, non-helical)", value: "≈ 4.4 × 10^{−19}" },
      { label: "Ω_{EM} (n = 2, at k_{max} = 1 Mpc^{−1})", value: "≈ 2.1 × 10^{−5}" },
      { label: "Ω_{GW} (helical models, literature)", value: "~10^{−13}" },
      { label: "Detectors compared", value: "LISA, DECIGO, BBO, ET, aLIGO" },
    ],
    supervisors: [
      "Dr. Debika Chowdhury (IIA, external)",
      "Dr. Gopal Kashyap (VIT, internal)",
    ],
    bibtex: null,
    // Held back until IIA/VIT confirm the full text can be public — see TODO.md.
    pdf: null,
    projectSlug: "gw-from-magnetogenesis",
  },
];
