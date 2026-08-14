# Featured Projects

> Source: `website_content_pushty_shrimankar.pdf` (§9)
>
> These are written in first person in the source and are the strongest prose available. They are intended as the long-form project pages of the site. Each follows the same three-beat structure: **The question → My approach → What I found**, plus a recommended figure.

---

## Project 1 — Is the distance duality relation the same in every direction?

**Short title:** Directional tests of the cosmic distance duality relation
**Linked publication:** arXiv:2604.04436

### The question

The Etherington reciprocity relation, η(z) = D_L / [(1+z)² D_A] = 1, follows from pure geometry and holds in any metric theory of gravity. But nearly every test of it assumes the universe looks the same in all directions. If it doesn't — and radio-source dipoles and supernova data both hint that it might not — those tests could be quietly biased. Does the relation itself depend on where you look?

### My approach

I combined 960 Pantheon+ supernovae at z > 0.1 with twelve BAO measurements spanning 6dFGS through DESI DR2, plus 32 cosmic chronometer H(z) points. Rather than assuming ΛCDM, I reconstructed the BAO-derived luminosity distance with Gaussian Process Regression — a Matérn ν = 3/2 kernel for H(z), an RBF kernel for D_L^BAO, both chosen by 5-fold cross-validation. I then extended the standard parameterization to η(z, n̂) = (1 + η₁z)(1 + n̂·D), propagated the full Pantheon+ covariance into luminosity-distance space, and sampled the posterior with `emcee` under three different supernova calibrations (free M_B, DB23, SH0ES).

### What I found

No anisotropy — with a caveat that turned out to be the more interesting result. The dipole amplitude is constrained to A < 0.025 at 95%, stable across all three calibrations. But the null tests showed why that stability matters: shuffling supernova magnitudes while keeping the real sky positions produces a spurious dipole peaking at A ≈ 0.048, six times the observed value, purely from uneven survey coverage. Replacing the positions with isotropic random vectors drops that to A ≈ 0.017. In other words, survey geometry alone can manufacture an anisotropy signal larger than anything in the data, which is a caution for any dipole search that skips this step.

### Figures

- **Primary:** Figure 6 — the null-test histogram, with the green (real sky geometry) and blue (isotropic) distributions and the observed A = 0.008 marked as a vertical line. Tells the whole story in one image.
- **Alternative / homepage thumbnail:** Figure 1(a), the Mollweide sky projection — more visually striking.

> ⚠️ Figure image files are **not in the repo**. They need to be exported from the paper. See `10-open-questions.md`.

---

## Project 2 — Can gravitational waves from primordial magnetic fields ever be detected?

**Short title:** GW imprints from inflationary magnetogenesis
**Linked work:** Master's thesis (IIA, 2026)

### The question

Electromagnetism is conformally invariant in an FLRW universe, so electromagnetic fields can't be amplified during inflation without breaking that invariance. The standard fix is a time-dependent coupling J(φ) ∝ a⁻ⁿ between the inflaton and the gauge field. Those amplified fields carry anisotropic stress, which sources gravitational waves. Is the resulting background strong enough for LISA, DECIGO, or the Einstein Telescope to see?

### My approach

I derived the gauge-field mode equation in Coulomb gauge and solved it analytically across three eras — the pre-inflationary Bunch–Davies vacuum, inflation (Hankel index ν = n + ½), and reheating (μ = 2n + ½) — matching the mode function and its derivative at the end of inflation. From these I computed the electric and magnetic power spectra P_E(k) and P_B(k), evaluated them numerically in Python using the exact half-integer Hankel expansions, and checked the backreaction condition Ω_EM ≪ 1 before converting to a gravitational-wave energy density.

### What I found

For n = 2 the magnetic spectrum is nearly scale-invariant — the observationally favoured case, since it can seed galactic dynamos — and Ω_EM ≈ 2.1 × 10⁻⁵, comfortably satisfying backreaction. But the payoff is a gravitational-wave background of only Ω_GW ≈ 4.4 × 10⁻¹⁹, roughly six orders of magnitude below every current and planned detector. The mirror case n = −2 gives a scale-invariant electric spectrum whose energy density blows past unity at small scales, violating consistency outright. So the non-helical mechanism is self-consistent and invisible at the same time — which is precisely the argument for turning to helical models, where inverse cascade pushes Ω_GW up toward 10⁻¹³.

### Figures

- **Primary:** Figure 3.4 — Ω_GW plotted against the LISA, DECIGO, BBO, ET and aLIGO sensitivity curves. The gap is the point.
- **Supporting:** Figure 3.1 — the P_B / P_E spectra, showing the flat magnetic spectrum against the falling electric one.

> These figures exist inside the thesis PDF and can be extracted from it.

---

## Project 3 — Scaling analogies between plasma waves and gravitational waves

**Status:** ⚠️ **Incomplete — do not build a full project page yet.**

### The question

Do the self-similar scaling laws that govern wave propagation in plasmas have structural analogues in gravitational-wave propagation, and can similarity parameters transfer between the two?

### Missing

The approach and findings were not supplied. The content sheet's own recommendation:

> If it stayed exploratory and produced no figure, my recommendation is to drop it from the featured projects and keep it as a one-line entry under Research Experience instead. Three strong projects beat two strong and one vague — a reviewer who clicks into a thin third project may discount the first two.

**Default for the build:** keep Projects 1 and 2 as featured; leave Project 3 as the existing one-line entry in `03-research-experience.md`. Revisit if Pushty supplies content.
