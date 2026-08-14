import type { SkillGroup } from "./types";

/**
 * Only confirmed skills are listed. LaTeX, Git, HPC/cluster experience,
 * C/C++/Fortran and CAMB/CLASS/GetDist are all probable but unverified —
 * they stay out until confirmed. See TODO.md.
 */
export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "Mathematica"],
  },
  {
    label: "Scientific stack",
    items: ["NumPy", "SciPy", "Astropy", "scikit-learn", "Matplotlib"],
  },
  {
    label: "Cosmology & GW tools",
    items: [
      "emcee",
      "Cobaya",
      "LALSuite",
      "HEALPix / Mollweide projection",
      "scipy.solve_ivp",
    ],
  },
  {
    label: "Methods",
    items: [
      "Gaussian Process Regression",
      "MCMC and Bayesian inference",
      "Gelman–Rubin convergence diagnostics",
      "Full-covariance likelihood analysis",
      "Null-hypothesis testing with survey-preserving mocks",
      "Cosmological perturbation theory",
      "WKB and Hankel-function mode analysis",
    ],
  },
];
