# Master's Thesis — Structured Summary

**Computational Exploration of Gravitational Wave Imprints from Magnetogenesis During Inflation**

> Source: `GW imprints(Masters thesis) Pushty Shrimankar.pdf` (50 pages)
> Verbatim text in `09-thesis-full-text.md`. Equations below have been hand-corrected — the PDF's Greek glyphs extract incorrectly, so trust **this** file over the raw transcript for any symbol.

---

## Metadata

| Field | Value |
| --- | --- |
| Author | Pushty Shrimankar (24MSP0062) |
| Degree | Master of Science in Physics, VIT Vellore |
| External supervisor | Dr. Debika Chowdhury, DST INSPIRE Faculty Fellow, IIA Bengaluru |
| Internal supervisor | Dr. Gopal Kashyap, School of Advanced Sciences, VIT Vellore |
| Programme | Visiting Student Programme 2026, Indian Institute of Astrophysics (IIA), Bengaluru |
| Submitted | May 2026 |
| Length | 6 chapters, 16 references, 4 figures, 2 code listings |
| Similarity index | 12% |

---

## Plain-language summary (site-ready, from the content sheet)

> Magnetic fields are found everywhere in the universe, from galaxies to the near-empty space between them, and nobody is certain where the first seed fields came from. One possibility is that they were created during inflation, the burst of expansion in the universe's first instant. This thesis works out how strong such primordial fields would be, and whether the gravitational waves they generate could ever be detected. The answer, for the simplest non-helical case, is no — the signal sits about six orders of magnitude below what LISA, DECIGO, or the Einstein Telescope could see, which points toward helical models as the more promising place to look.

## Executive summary (thesis abstract, cleaned)

Primordial magnetic fields observed in galaxies and intergalactic regions may have a cosmological origin. Inflationary magnetogenesis is one of the most promising mechanisms for generating such fields. However, the standard electromagnetic action is conformally invariant in an FLRW universe, preventing amplification of electromagnetic fields during inflation.

To generate primordial electromagnetic fields, this conformal invariance must be broken. One widely studied mechanism introduces a coupling between the inflaton and the electromagnetic field through a time-dependent coupling function J(φ) ∝ a⁻ⁿ.

This work studies the generation of electromagnetic fields during inflation in the **non-helical** case: deriving the gauge-field mode equation, obtaining analytic solutions in the pre-inflationary vacuum, inflationary, and reheating eras, and computing the electric and magnetic power spectra P_E(k) and P_B(k), which source primordial gravitational waves.

For n = 2 the magnetic power spectrum is scale-invariant while Ω_EM stays well below unity (backreaction satisfied). The resulting Ω_GW ≈ 4.4 × 10⁻¹⁹ lies ~6 orders of magnitude below current and planned detector sensitivity.

---

## Headline numbers

| Quantity | Value | Note |
| --- | --- | --- |
| Ω_GW (n = 2, non-helical) | **≈ 4.4 × 10⁻¹⁹** | ~6 orders of magnitude below all detectors |
| Ω_EM (n = 2, at k_max = 1 Mpc⁻¹) | **≈ 2.1 × 10⁻⁵** | ≪ 1, backreaction satisfied |
| Ω_GW (helical models, literature) | ~10⁻¹³ | the motivation for future work |
| Allowed coupling range (literature) | −2.2 < n < 0 | n = 2 safe but negligible; n = −2 marginal |
| Inflationary Hubble parameter | H_I = 10⁻⁵ M_Pl | fiducial |
| Reduced Planck mass | M_Pl = 2.435 × 10¹⁸ GeV | |
| CMB pivot scale | k* = 10⁻⁴ Mpc⁻¹ | |
| Upper wavenumber cutoff | k_max = 1 Mpc⁻¹ | |
| Observed galactic B-field | ~10⁻⁶ G (spiral galaxies) | motivation |
| Observed intergalactic B-field | as low as 10⁻¹⁶ G | motivation |

Detectors compared against: **LISA, DECIGO, BBO, Einstein Telescope (ET), aLIGO**. Future work mentions PTAs (SKA, IPTA).

---

## Chapter 1 — Introduction

**Motivation.** Magnetic fields are ubiquitous — ~10⁻⁶ G in spiral galaxies, down to 10⁻¹⁶ G in intergalactic space. Astrophysical dynamo amplification cannot create seed fields from nothing, so a primordial origin is attractive. Inflation stretches quantum fluctuations to cosmological scales, but electromagnetism is conformally invariant in FLRW, so EM modes decay. A non-minimal coupling J(φ) between the inflaton and F_μν breaks that invariance and allows amplification. The amplified fields also carry anisotropic stress and therefore source stochastic gravitational waves — relevant given LISA, DECIGO, ET and PTAs.

**Objectives.**

1. Solve the gauge-field mode equation with the non-minimal coupling J(φ) ∝ a⁻ⁿ.
2. Determine analytic forms of P_E(k) and P_B(k) in the super-horizon regime.
3. Evaluate the spectra numerically and compute Ω_EM for various n.
4. Evaluate Ω_GW from the non-helical EM fields.
5. Determine the parameter space allowed by the backreaction constraint Ω_EM ≪ 1.

---

## Chapter 2 — Inflation

- Inflation defined by ä > 0; smooths inhomogeneities and stretches quantum fluctuations. Introduced to solve fine-tuning problems of the standard Big Bang, e.g. the horizon problem (CMB isotropy across causally disconnected regions).
- Driven by a scalar inflaton φ rolling along V(φ).
- **Slow-roll parameters:** ε₁ = −Ḣ/H², ε₂ = ε̇₁/(Hε₁). Sustained inflation requires ε₁ ≪ 1.
- **Conformal time:** dη = dt/a(t), so ds² = a²(η)(−dη² + dx²). Conformal Hubble rate ℋ = aH. For de Sitter, a ∝ e^{Ht} and η ≃ −1/(aH), running from −∞ to 0⁻.

### The three cosmological eras (§2.3, Figure 2.1)

| Era | Range | Coupling behaviour |
| --- | --- | --- |
| Pre-inflationary | a < a_i | I(a) constant; EM field in Bunch–Davies vacuum |
| Inflation | a_i < a < a_e | I(a) ∝ a⁻ⁿ — conformal invariance broken, modes amplified |
| Reheating | a_e < a < a_r | coupling continues to evolve (inflaton-oscillation / matter-like) |
| Post-reheating | a > a_r | I(a) = 1, amplification stops |

`a_i` = start of magnetogenesis, `a_e` = end of inflation, `a_r` = end of reheating. Figure 2.1 is adapted from Fig. 1 of Fujita et al. [ref 1].

---

## Chapter 3 — Magnetogenesis During Inflation

### 3.1 Action and gauge choice

Extended Maxwell action with non-minimal coupling:

```
S[A_μ] = −(1/16π) ∫ d⁴x √(−g) J²(φ) F_μν F^{μν},    F_μν = ∂_μ A_ν − ∂_ν A_μ
```

J = 1 recovers standard Maxwell and restores conformal symmetry.
**Coulomb gauge:** A₀ = 0, ∂_i A_i = 0 — removes the spurious mode, leaving the two transverse photon polarisations.

### 3.2 Mode equation

With Ā_k = A_k/J:

```
Ā_k'' + 2(J'/J) Ā_k' + k² Ā_k = 0
```

Setting A_k ≡ J Ā_k gives the Schrödinger-like form:

```
A_k'' + [ k² − J''/J ] A_k = 0
```

Primes are derivatives w.r.t. conformal time η. The effective potential J''/J decides amplification: for k² ≫ J''/J the mode oscillates freely (Minkowski-like); for k² ≪ J''/J it can grow.

### 3.3 Analytic solutions in three eras

**Era 1 — pre-inflationary vacuum (a < a_i).** J = J_i = const so J''/J = 0:

```
(∂_η² + k²) A_k = 0
A_k(η) = (1 / (J_i √(2k))) e^{−ik(η − η_i)}      [Bunch–Davies]
```

**Era 2 — inflation (a_i < a < a_e).** J ∝ a⁻ⁿ, a ∝ (−η)⁻¹:

```
J''/J = n(n+1)/η²
(∂_η² + k² − n(n+1)/η²) A_k = 0
```

Hankel index **ν = n + ½**. Bunch–Davies solution:

```
A_k(η) = (1/J(η)) √(−πη/4) · e^{i(n+1)π/2} · H^(1)_{n+1/2}(−kη)
```

**Era 3 — reheating (a_e < a < a_r).** Matter-dominated-like; J ∝ a⁻²ⁿ:

```
J''/J = 2n(2n+1)/η²
```

Hankel index **μ = 2n + ½**:

```
A_k(η) = (1/J(η)) √(−πη/4) [ C₁ H^(1)_μ(−kη) + C₂ H^(2)_μ(−kη) ]
```

C₁, C₂ fixed by continuously matching the solution and its derivative to the inflationary solution at η = η_e.

### 3.4 Derivative of the mode function

Writing A_k(η) = C(η) H^(1)_ν(z), z = −kη, with C(η) = (1/J(η))√(−πη/4) e^{i(n+1)π/2}, and using ∂_z H^(1)_ν = H^(1)_{ν−1} − (ν/z)H^(1)_ν:

```
A_k' − (J'/J) A_k = (dC/dη − (J'/J)C) H^(1)_ν(z) − kC [ H^(1)_{ν−1}(z) − (ν/z) H^(1)_ν(z) ]
```

### 3.5 Power spectra

```
P_B(k) = k⁵ / (2π² a⁴) · |A_k|²
P_E(k) = k³ / (2π² a⁴) · |A_k' − (J'/J) A_k|²
```

The a⁻⁴ factor is the dilution of physical energy density by expansion. Initial conditions set in the sub-horizon limit (k ≫ √(J''/J)); spectra evaluated in the super-horizon limit (k ≪ √(J''/J)).

### 3.6 Numerical behaviour (Figure 3.1)

- For **n = 2**, P_B(k) is nearly constant in k — scale-invariant. Observationally favoured, since a scale-invariant seed can feed the galactic dynamo to produce observed large-scale fields.
- P_E(k) ∝ 1/k — electric modes decay faster than magnetic ones after horizon crossing.
- Large-scale electric contribution is heavily suppressed, keeping electric energy from overwhelming the background.
- Consistent with earlier analyses (Tripathy, Chowdhury, Jain & Sriramkumar, ref [2]), where n = 2 is preferred for the same reasons.

### 3.7 Backreaction constraint

```
Ω_EM = ρ_EM / ρ_tot,    ρ_EM = ½ ∫ (dk/k)(P_E + P_B)
Consistency requires Ω_EM ≪ 1
```

Integrated from the CMB pivot scale k* = 10⁻⁴ Mpc⁻¹ to k_max, with ρ_tot = 3 M_Pl² H_I²:

```
Ω_EM = (1 / 2ρ_tot) ∫_{k*}^{k_max} (dk/k) [P_E(k) + P_B(k)]
```

**Case n = 2 (magnetic dominance)** — Figure 3.2

```
P_B(k) = B₀ = 0.227 H_I⁴                  (scale-invariant)
P_E(k) = E₀ k⁻² = 0.0253 H_I⁴ k⁻²
```

Ω_EM stays ≪ 1 at all scales. At k_max = 1 Mpc⁻¹: **Ω_EM ≈ 2.1 × 10⁻⁵**.

**Case n = −2 (electric dominance)** — Figure 3.3

```
P_E(k) = E₀ = 0.227 H_I⁴                  (scale-invariant)
P_B(k) = B₀ k² = 0.0253 H_I⁴ k²
```

The magnetic term grows as k² and dominates at small scales; Ω_EM exceeds unity at high k, **violating** the constraint.

**Electric spectral index.** P_E(k) ∝ k^{n_E} with

```
n_E = 2n + 4    for n < ½
n_E = 6 − 2n    for n > ½
```

For n = −2: n_E = 0, confirming scale invariance of P_E.

**Summary:** the analysis reinforces the literature range −2.2 < n < 0; n = −2 is marginally allowed only if integrated scales are restricted, while n = 2 is safe but yields negligible EM energy at observable scales.

### 3.8 Gravitational wave energy density

```
Ω_GW(f) = (1/ρ_tot) · dρ_GW / d ln f
```

Primordial magnetic fields source GWs via their anisotropic stress-energy tensor. Efficiency depends strongly on helicity. In the **non-helical** case: no inverse cascade to large scales, magnetic energy confined to small scales, so GW production is much less efficient.

**Computation for n = 2:**

Magnetic contribution: ∫ (dk/k) P_B = B₀ ln(k_max/k*) = 0.227 × ln(10⁴) ≈ 2.09 H_I⁴
Electric contribution: ∫ (dk/k) P_E = E₀/(2k*²) − E₀/(2k_max²) ≈ E₀/(2k*²) ≈ 1.265 × 10⁶ H_I⁴
Prefactor H_I²/(6 M_Pl²) ≈ 1.66 × 10⁻¹¹

→ **Ω_EM ≈ 2.1 × 10⁻⁵**

Using the relation from Okano & Fujita (ref [1], Eq. 3.11):

```
Ω_GW ≈ 10⁻¹³ (Ω_EM(η_r) / 10⁻²)²
     = 10⁻¹³ (2.1 × 10⁻³)²
     ≈ 4.4 × 10⁻¹⁹
```

**Key result (Figure 3.4):** Ω_GW^{non-helical} ~ 10⁻¹⁹, about six orders of magnitude below the sensitivity of LISA, DECIGO, BBO, ET and aLIGO. Helical models give ~10⁻¹³.

---

## Chapter 4 — Computational Implementation

**Environment:** Python 3.

**Libraries:** `numpy` (arrays, special functions, integration), `scipy` (`scipy.special.hankel1`, `hankel2`; `solve_ivp`), `matplotlib` (all figures).

**Fiducial parameters** (natural units ħ = c = 1): H_I = 10⁻⁵ M_Pl; M_Pl = 2.435 × 10¹⁸ GeV; k* = 10⁻⁴ Mpc⁻¹; k_max = 1 Mpc⁻¹; n = 2.

**Listing 4.1** computes P_B(k) and P_E(k) using exact half-integer Hankel expansions for ν = 5/2:

```
H^(1)_{5/2}(z) = √(2/πz) e^{iz} ( −3/z² − 3i/z + 1 )
H^(1)_{3/2}(z) = √(2/πz) e^{iz} ( −i/z + 1 )
```

with z = −kη. These are exact for half-integer orders, which significantly improves numerical precision.

**Listing 4.2** computes Ω_GW = 10⁻¹³ (Ω_EM/10⁻²)² from Ω_EM = 2.1 × 10⁻⁵ and plots it as a flat line over k ∈ [10⁻⁴, 10²] Mpc⁻¹ — scale-invariant because P_B is scale-invariant for n = 2 and Ω_GW ∝ Ω_EM².

**Numerical accuracy notes:**

- Half-integer-order Hankel functions reduce to elementary functions, boosting precision for n = 2.
- Analytic matching performed at η_e; C₁ and C₂ carried into the reheating-era solution.
- The logarithmically divergent Ω_EM integral converges cleanly for n = 2 thanks to the scale-invariant magnetic spectrum. For n = −2 the integrand behaves as (1 + k²/k_min²)² and depends strongly on the k_max cutoff.
- All plots rendered at 150 dpi with logarithmic axes.

Full code listings are reproduced verbatim in `09-thesis-full-text.md`.

---

## Chapter 5 — Conclusion

Electromagnetic field generation during inflation was studied via non-minimal inflaton–gauge-field coupling. Spectral functions were obtained in three eras (pre-inflationary Bunch–Davies vacuum, inflation, reheating) by solving the gauge-field mode equation in conformal time.

For n = 2: P_B(k) is scale-invariant, P_E(k) is scale-dependent, and Ω_EM ≈ 2.1 × 10⁻⁵ — backreaction satisfied. For n = −2 the electric energy density dominates and grows rapidly with k_max, violating consistency.

Ω_GW^{non-helical} ≈ 4.4 × 10⁻¹⁹ — roughly 6 orders of magnitude beyond the detection threshold of LISA, DECIGO, BBO, ET and aLIGO. So non-helical, magnetic-dominated spectra with n = 2 are internally consistent but observationally invisible, motivating helical magnetogenesis models.

---

## Chapter 6 — Future Aspects

1. Build a complete model of GW production from non-helical magnetogenesis — the full GW power spectrum and present-day Ω_GW(f), rather than the current order-of-magnitude estimate.
2. Determine how the reheating temperature T_reh and equation-of-state parameter w set the location and shape of the peak in Ω_GW(f) — potentially constraining otherwise inaccessible reheating parameters.
3. Compare predicted spectra against LISA, DECIGO, ET and pulsar timing array (SKA, IPTA) sensitivity curves.
4. Extend to the **helical** case with a J²(φ) F_μν F̃^{μν} term. Helical fields undergo inverse cascade, giving much stronger GW production and a chiral GW background — absent in the non-helical case.
5. Test whether the generated magnetic fields satisfy observational amplitude constraints from Faraday rotation, blazars and the CMB, and whether the seed fields can account for observed μG galactic fields after dynamo amplification.

---

## Figures

| Figure | Content | Site use |
| --- | --- | --- |
| 2.1 | Coupling function I(a) vs scale factor across the three eras (adapted from Fujita et al.) | explanatory diagram |
| 3.1 | P_B(k) (blue) and P_E(k) (orange) for n = 2 — flat magnetic, falling electric | supporting figure for Project 2 |
| 3.2 | Ω_EM vs k_max for n = 2 — stays ≪ 1 | optional |
| 3.3 | Ω_EM vs k_max for n = −2 — exceeds unity at high k | optional |
| 3.4 | **Ω_GW vs LISA / DECIGO / BBO / ET / aLIGO sensitivity curves**, three reheating temperatures | **primary figure for Project 2** |

---

## Bibliography

1. *Chiral Gravitational Waves Produced in a Helical Magnetogenesis Model*, arXiv:2005.13833 [astro-ph.CO]. (Cited in-text as Okano & Fujita.)
2. S. Tripathy, D. Chowdhury, R. K. Jain, L. Sriramkumar, *On the challenges in the choice of the non-conformal coupling function in inflationary magnetogenesis*, arXiv:2111.01478 [astro-ph.CO].
3. T. Fujita, R. Durrer, JCAP **1909**, 008 (2019), arXiv:1904.11428 [astro-ph.CO].
4. K. Subramanian, Astron. Nachr. **331**, 110 (2010), arXiv:0911.4771 [astro-ph.CO].
5. A. Kandus, K. E. Kunze, C. G. Tsagas, Phys. Rept. **505**, 1 (2011), arXiv:1007.3891 [astro-ph.CO].
6. J. Martin, J. Yokoyama, JCAP **01**, 025 (2008), arXiv:0711.4307 [astro-ph].
7. R. Durrer, A. Neronov, Astron. Astrophys.
8. T. Fujita, R. Namba, Y. Tada, N. Takeda, H. Tashiro, JCAP **1505**, 054 (2015), arXiv:1503.05802 [astro-ph.CO].
9. C. Caprini, L. Sorbo, JCAP **1410**, 056 (2014), arXiv:1407.2809 [astro-ph.CO].
10. T. Vachaspati, *Progress on Cosmological Magnetic Fields*, Rep. Prog. Phys. (2020), arXiv:2010.10525 [astro-ph.CO].
11. M.-a. Watanabe, S. Kanno, J. Soda, *Inflationary Universe with Anisotropic Hair*, PRL **102**, 191302 (2009), arXiv:0902.2833 [hep-th].
12. S. Kanno, J. Soda, M.-a. Watanabe, *Anisotropic Power-law Inflation*, JCAP **12**, 009 (2009), arXiv:0908.3509 [astro-ph.CO].
13. Y. Akrami et al. (Planck), *Planck 2018 Results. X. Constraints on Inflation*, A&A **641**, A10 (2020), arXiv:1807.06211 [astro-ph.CO].
14. P. A. R. Ade et al. (BICEP/Keck), PRL **127**, 151301 (2021), arXiv:2110.00483 [astro-ph.CO].
15. T. Fujita, K. Kamada, PRD **93**, 083520 (2016), arXiv:1602.02109 [hep-ph].
16. K. Kamada, A. J. Long, *Baryogenesis from Decaying Magnetic Helicity*, PRD **94**, 063501 (2016), arXiv:1606.08891 [astro-ph.CO].

---

## Glossary of abbreviations used in the thesis

FLRW · CMB · GW · GWB · SGWB · PGW · PMF · EM · QFT · BBN · OPM · VEV · BD (Bunch–Davies) · P_B · P_E · Ω_EM · Ω_GW · n_B · n_E · PDE · ODE · WKB · FRW · LISA · DECIGO · BBO · ET · aLIGO · PTA · SKA · IPTA · IIA · VIT · VSP · DST · INSPIRE

## Symbol table

| Symbol | Meaning |
| --- | --- |
| a(t) | Cosmological scale factor |
| H | Hubble parameter, H = ȧ/a |
| η | Conformal time, dη = dt/a |
| ℋ | Conformal Hubble parameter, ℋ = aH |
| ε₁ | First slow-roll parameter, ε₁ = −Ḣ/H² |
| ε₂ | Second slow-roll parameter, ε₂ = ε̇₁/(Hε₁) |
| a_i | Scale factor at the start of magnetogenesis |
| a_e | Scale factor at the end of inflation |
| a_r | Scale factor at the end of reheating |
| A_μ | Electromagnetic four-potential |
| F_μν | Electromagnetic field-strength tensor |
| φ | Inflaton scalar field |
| J(φ) | Non-conformal coupling function |
| n | Power-law index of the coupling, J ∝ a⁻ⁿ |
| A_k(η) | Fourier mode of the gauge field |
| k | Comoving wavenumber |
| H^(1,2)_ν | Hankel functions of the first and second kind, order ν |
| ν | Hankel index during inflation, ν = n + ½ |
| μ | Hankel index during reheating, μ = 2n + ½ |
| C₁, C₂ | Matching coefficients at a_e |
| P_B(k) | Magnetic power spectrum |
| P_E(k) | Electric power spectrum |
| ρ_tot | Total background energy density |
| ρ_EM | Electromagnetic energy density |
| Ω_EM | Electromagnetic energy density fraction |
| Ω_GW | Gravitational wave energy density parameter |
| H_I | Hubble parameter during inflation |
| M_Pl | Reduced Planck mass, M_Pl = (8πG)^{−1/2} |
| f | Gravitational wave frequency (present day) |
| k* | CMB pivot scale (k* = 0.05 Mpc⁻¹ in the symbol table; 10⁻⁴ Mpc⁻¹ used in the calculations — see `10-open-questions.md`) |
