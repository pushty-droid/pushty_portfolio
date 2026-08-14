# Pushty Shrimankar — portfolio site

Personal academic site for PhD applications: early-universe cosmology and
gravitational-wave physics. Next.js (App Router) + Tailwind, exported as a
static site.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
```

`npm run build` writes a fully static site to `out/`, deployable to Vercel,
GitHub Pages, Netlify or any static host with no server.

## Where the content lives

**Edit `src/data/*.ts`, not the pages.** Every page reads from there, so a fact
appears in one file and renders everywhere it's relevant.

| File | Contents |
| --- | --- |
| `src/data/profile.ts` | Name, one-liners, research statement, contact, links, interests |
| `src/data/education.ts` | Degrees, grades, coursework |
| `src/data/research.ts` | The four research positions |
| `src/data/publications.ts` | arXiv paper, thesis, key numbers, BibTeX |
| `src/data/projects.ts` | Featured-project cards and headline results |
| `src/data/skills.ts` | Technical skills |
| `src/data/talks.ts` | Talks, awards, schools, outreach |
| `src/data/news.ts` | Homepage news feed |

The long-form project narratives are MDX, since they carry equations:
`src/app/projects/*/page.mdx`.

`content/` holds the structured markdown extracted from the source PDFs. It's
the reference the data files were written from — not rendered by the site.

## Things worth knowing

**Missing data hides itself.** Optional fields are typed `T | null` and every
component renders nothing when its data is null. There is no photo, no GitHub
link and no thesis PDF right now, and the site reads as finished anyway. Fill
one in and it appears — no layout work. See `TODO.md`.

**Physics notation.** Data strings support `_{sub}` and `^{sup}`, rendered as
real markup by `src/components/SciNotation.tsx`:

```ts
"Ω_{GW} ≈ 4.4 × 10^{−19}"   // → Ω<sub>GW</sub> ≈ 4.4 × 10<sup>−19</sup>
```

Use this rather than Unicode superscripts (10⁻¹⁹), which render at inconsistent
sizes and read poorly to screen readers. Inside MDX prose, use LaTeX in `$…$`
or `$$…$$` — KaTeX renders it at build time.

**Theming.** Colours are CSS custom properties in `src/styles/globals.css`,
defined once on `:root` and again under `[data-theme="dark"]`, then exposed to
Tailwind as semantic utilities (`text-ink`, `border-rule`, `bg-accent-bg`).
Changing a colour means editing one token.

**`/cv` is the canonical CV**, not a hosted PDF — it carries a print stylesheet,
so Cmd-P produces a clean document. See `TODO.md` §7 for why the PDF in the
repo isn't published.

## Open items

`TODO.md` lists everything still waiting on an answer — source conflicts,
missing figures, sections deliberately left out — with the file to edit for
each.
