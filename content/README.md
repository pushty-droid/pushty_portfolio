# Content — Pushty Shrimankar portfolio site

Structured markdown extracted from the three source PDFs in the repo root. This folder is the **single source of truth for site copy** — build from these files, not from the PDFs.

## Files

| File | Contents | Use for |
| --- | --- | --- |
| `01-profile.md` | Name, one-liners, research statement, contact, links, specialization, theory areas | Hero / header, About page, footer |
| `02-education.md` | M.Sc. and B.Sc., coursework, ranks | Education section / CV page |
| `03-research-experience.md` | Four positions with supervisors, dates, and what she did | Research page, CV page |
| `04-publications.md` | arXiv paper + thesis, key numbers, documents to host | Publications page |
| `05-featured-projects.md` | Long-form first-person write-ups of the two strong projects | Project detail pages — the best prose available |
| `06-skills.md` | Languages, stack, cosmology/GW tools, methods | Skills section |
| `07-talks-awards-outreach.md` | Upcoming ICTS talk, posters, awards, schools, outreach | Talks / CV / news |
| `08-thesis-summary.md` | Chapter-by-chapter thesis summary with corrected equations, all numbers, figure inventory, bibliography, symbol table | Thesis page; authoritative for any physics detail |
| `09-thesis-full-text.md` | Page-by-page verbatim transcription of the thesis | Reference / search only — see caveats in the file header |
| `10-open-questions.md` | Conflicts between sources, missing assets, decisions to confirm | **Read this before building** |

## Source PDFs

| PDF | What it contributed |
| --- | --- |
| `CV_Pushty_Shrimankar_IIA.pdf` | 2-page academic CV |
| `website_content_pushty_shrimankar.pdf` | 14-section content sheet written specifically for this site — richest source, includes the project narratives |
| `GW imprints(Masters thesis) Pushty Shrimankar.pdf` | 50-page M.Sc. thesis |

## Before you build

1. Read `10-open-questions.md`. There are two source conflicts (M.Sc. CGPA, IIA dates), several missing profile links (GitHub, ORCID, Scholar, INSPIRE), and **no photo or figure images** in the repo.
2. Everything marked ⚠️ or **not provided** should render as an optional/hideable component so the site works without it and improves when it's filled in.
3. `08-thesis-summary.md` overrides `09-thesis-full-text.md` for any equation or symbol — the PDF's Greek glyphs extract badly and only the summary has been hand-corrected.

## Suggested site structure

```
/                    Hero (one-liner + photo) · current status · 2–3 highlight cards · latest news
/about               Research statement · specialization · theory areas · education · contact
/research            Four research positions, newest first · research interests
/projects            Two featured projects, each its own page with the question/approach/findings structure
/publications        arXiv paper (with key numbers) · thesis · downloadable documents
/cv                  Full CV, plus PDF download
/talks               Upcoming ICTS talk · posters · schools attended · outreach
```

The audience is PhD admissions committees for the 2026 cycle, so the paper, the thesis result, and the exam/scholarship section (once supplied) should be reachable within one click of the homepage.

## Facts worth getting right

- Name spelling: **Pushty Shrimankar** (not Shrimanker/Shrimanker).
- Supervisor names: **Dr. Debika Chowdhury** (IIA), **Dr. Gopal Kashyap** (VIT), **Dr. Vishwa Bandhu Pathak** (VIT), **Prof. Hari Om Vats** (B.Sc. project).
- arXiv ID: **2604.04436** — appears in all three PDFs.
- Headline thesis result: **Ω_GW ≈ 4.4 × 10⁻¹⁹**, with **Ω_EM ≈ 2.1 × 10⁻⁵**.
- Headline paper result: dipole amplitude **A < 0.025 at 95%**.
