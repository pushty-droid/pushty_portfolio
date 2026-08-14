import type { Project } from "./types";

/**
 * The two featured projects. The exploratory plasma/GW similarity work stays a
 * one-line entry under Research rather than a thin third card — a reviewer who
 * clicks into a sparse project page discounts the other two.
 */
export const projects: Project[] = [
  {
    slug: "distance-duality-anisotropy",
    title: "Is the distance duality relation the same in every direction?",
    shortTitle: "Directional tests of the cosmic distance duality relation",
    dates: "2025 – 2026",
    linkedWork: "arXiv:2604.04436",
    linkedWorkHref: "https://arxiv.org/abs/2604.04436",
    stat: {
      value: "A < 0.025",
      caption: "95% bound on the dipole amplitude — consistent with isotropy",
    },
    summary:
      "Nearly every test of the Etherington reciprocity relation assumes the universe looks the same in all directions. I dropped that assumption, combining 960 Pantheon+ supernovae with twelve BAO measurements and Gaussian-process reconstruction to look for a dipole.",
    tools: ["Python", "emcee", "scikit-learn", "Astropy", "HEALPix"],
  },
  {
    slug: "gw-from-magnetogenesis",
    title: "Can gravitational waves from primordial magnetic fields ever be detected?",
    shortTitle: "GW imprints from inflationary magnetogenesis",
    dates: "2026",
    linkedWork: "M.Sc. thesis, IIA Bengaluru",
    linkedWorkHref: null,
    stat: {
      value: "Ω_{GW} ≈ 4.4 × 10^{−19}",
      caption: "six orders of magnitude below every current and planned detector",
    },
    summary:
      "Amplified gauge fields from inflationary magnetogenesis carry anisotropic stress, which sources gravitational waves. I solved the mode equation across three cosmological eras to find out whether the resulting background is strong enough for LISA, DECIGO or the Einstein Telescope to see.",
    tools: ["Python", "SciPy", "Mathematica", "Hankel mode analysis"],
  },
];

export function getProject(slug: string): Project {
  const project = projects.find((p) => p.slug === slug);
  if (!project) throw new Error(`Unknown project slug: ${slug}`);
  return project;
}
