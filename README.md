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

**Bands are the layout.** Every section on every page is a `<Band tone="…">`
(`src/components/Band.tsx`) — a full-bleed horizontal stripe, the device
astrokatie.com is built from. A tone *redefines the colour tokens in its own
scope*, so a component dropped inside a band picks up the right ink, rule and
accent without knowing where it landed. Two rules the pages follow: never two
adjacent bands of the same tone, and at most one `light` band per page.

Pages open with a `<BandHero>`. Six of the seven pass `image={null}` and fall
back to a gradient wash; the homepage carries Planck's map of the Galactic
magnetic field. Setting an image is the only change needed to add one — but
**tone it first** with `scripts/tone-hero-image.py`, which multiplies it
through the band gradient. That is what keeps the hero text legible without a
scrim heavy enough to hide the picture, and it is why the map looks like part
of the site rather than a photograph pasted onto it. Record the source,
licence and any alterations in `public/images/CREDITS.md`.

`scripts/make-og.py` regenerates `public/og.png` in the same palette. Both
scripts need Pillow, which is deliberately not a project dependency — they are
one-off bakes, not part of the build.

**Theming.** Colours are CSS custom properties in `src/styles/globals.css`,
defined on `:root` (dark — the default) and overridden under
`[data-theme="light"]`, then exposed to Tailwind as semantic utilities
(`text-ink`, `border-rule`, `bg-accent-bg`). Changing a colour means editing
one token. **Dark loads for everyone**; `prefers-color-scheme` is deliberately
not consulted, so a visitor in OS light mode still sees the site as designed.
The toggle's stored choice is the only override.

Anything that adds a new band tone must also be added to the `@media print`
reset at the bottom of `globals.css` — each tone carries its own token set, and
a tone missing from that list prints as a dark rectangle on the CV.

**Type.** Four families, each with one job: **Agdasima** (condensed, uppercase)
for page titles and section headings only — never below 1.125rem, and it has no
italic; **Open Sans** for everything that is running text or UI; **Source Serif
4** for result stats and physics notation; **JetBrains Mono** for BibTeX and
arXiv IDs. Content titles — paper titles, position titles, talk titles — use
`.type-title`, which is Open Sans: a sentence set in the condensed display face
and uppercased stops being readable and stops being quotable.

**`/cv` is the canonical CV**, not a hosted PDF — it carries a print stylesheet,
so Cmd-P produces a clean document. See `TODO.md` §7 for why the PDF in the
repo isn't published.

## Open items

`TODO.md` lists everything still waiting on an answer — source conflicts,
missing figures, sections deliberately left out — with the file to edit for
each.
