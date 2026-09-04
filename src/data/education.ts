import type { Education } from "./types";

export const education: Education[] = [
  {
    degree: "M.Sc. Physics",
    institution: "Vellore Institute of Technology (VIT)",
    affiliation: "Vellore, India",
    years: "2024 – 2026",
    // Confirmed by Pushty: current CGPA is 8.94 / 10 (the content sheet's
    // figure; the CV's 9.01 was an earlier-semester snapshot).
    grade: "CGPA 8.94 / 10",
    rank: null,
    notes: [
      "Master's thesis carried out at the Indian Institute of Astrophysics, Bengaluru, as a Project Intern under the Visiting Student Programme 2026. Submitted May 2026.",
    ],
    coursework: [
      "General Relativity",
      "Astrophysics",
      "Statistical Mechanics",
      "Quantum Mechanics",
      "Electrodynamics",
      "Classical Mechanics",
      "Mathematical Physics",
      "Atomic and Molecular Physics",
      "Solid State Physics",
      "Plasma Physics",
      "Semiconductor Devices",
      "Nanophysics",
      "Electronics",
      "General Physics Lab",
    ],
  },
  {
    degree: "B.Sc. Physics",
    institution: "H. and H. B. Kotak Institute of Science",
    affiliation: "Saurashtra University, Rajkot, India",
    years: "2019 – 2022",
    grade: "CGPA 9 / 10",
    rank: "Ranked 9th in the university",
    notes: [
      "Final-year project: Solar Differential Rotation — analysed solar photospheric rotation using sunspot tracking. Supervisor: Prof. Hari Om Vats.",
    ],
    coursework: null,
  },
];
