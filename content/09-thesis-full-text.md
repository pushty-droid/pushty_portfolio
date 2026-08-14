# Master's Thesis — Full Text (verbatim transcription)

**Computational Exploration of Gravitational Wave Imprints from Magnetogenesis During Inflation**
Pushty Shrimankar (24MSP0062) · M.Sc. Physics, VIT Vellore · Visiting Student Programme 2026, IIA Bengaluru · Submitted May 2026

---

## How to read this file

This is a page-by-page text extraction of `GW imprints(Masters thesis) Pushty Shrimankar.pdf`, kept for reference and searching.

**Caveats — read before quoting anything from here:**

- The PDF was produced by LaTeX with Type 1 fonts whose Unicode mapping is broken, so Greek letters and math operators extracted as wrong characters. A repair pass has been applied (Ω, ν, η, φ, ε, ρ, π, −, ≈, ×, ≪, ≫, primes, subscripts), but **display equations are still mangled by line-wrapping** and some symbols may be wrong.
- **`08-thesis-summary.md` is authoritative for all equations and numbers.** Use this file for prose, structure and code listings only.
- Figures are not included (they are images in the PDF). Figure captions are present.
- Pages 47–50 (the Turnitin similarity report) are omitted.

---



---

## Page 1

```
Computational Exploration of Gravitational
Wave
Imprints from Magnetogenesis During Inﬂation
Submitted in partial fulﬁllment of the requirements for the degree of
Master of Science
in
Physics
A report submitted by
Pushty Shrimankar
24MSP0062
Under the Guidance of
Dr. Debika Chowdhury
DST INSPIRE Faculty Fellow
Indian Institute of Astrophysics (IIA), Bengaluru
Internal Supervisor
Dr. Gopal Kashyap
School of Advanced Sciences
VIT, Vellore
As part of
Visiting Student Programme 2026
Indian Institute of Astrophysics (IIA), Bengaluru
May 2026
```


---

## Page 2

```
Declaration
I hereby declare that the thesis entitled “Computational Exploration of Gravitational
Wave Imprints from Magnetogenesis During Inﬂation” submitted by me, for the award
of the degree of Master of Science in Physics to VIT, is a record of bona ﬁde work carried
out by me under the supervision of Dr. Debika Chowdhury, Indian Institute of Astro-
physics (IIA), Bengaluru, and Dr. Gopal Kashyap, School of Advanced Sciences, VIT,
Vellore.
I further declare that the work reported in this thesis has not been submitted and will
not be submitted, either in part or in full, for the award of any other degree or diploma in
this institute or any other institute or university.
Place: Bengaluru / Vellore
Date:
Pushty Shrimankar
24MSP0062
i
```


---

## Page 3

```
Certiﬁcate
This is to certify that the thesis entitled “Computational Exploration of Gravitational.
Wave Imprints from Magnetogenesis During Inﬂation” submitted by Pushty Shri-
mankar (24MSP0062), School of Advanced Sciences, VIT, for the award of the degree
of Master of Science in Physics is a record of bona ﬁde work carried out by her under
our supervision. During the period of the Visiting Student Program 2026 at the Indian
Institute of Astrophysics (IIA), Bengaluru, as per the VIT code of academic and research
ethics.
The contents of this report have not been submitted. They will not be submitted either
in part or in full, for the award of any other degree or diploma in this institute or any other
institute or university. The thesis fulﬁlls the requirements and regulations of the university
and, in our opinion, meets the necessary standards for submission.
Dr. Debika Chowdhury
DST INSPIRE Faculty Fellow
Indian Institute of Astrophysics
(IIA), Bengaluru
(External Supervisor)
Dr. Gopal Kashyap
School of Advanced Sciences
VIT, Vellore
(Internal Supervisor)
Head, Department of Physics
School of Advanced Sciences, VIT Vellore
ii
```


---

## Page 4

```
Acknowledgements
I genuinely appreciate the help and assistance provided by my internal supervisor, Dr.
Gopal Kashyap, School of Advanced Sciences, Vellore Institute of Technology (VIT),
Vellore. The guidance provided by him at VIT has contributed signiﬁcantly in the suc-
cessful completion of this project. I wish to acknowledge the sincere support offered by
the Vellore Institute of Technology in the academic ﬁeld. I express my gratitude to the
Head of the Department, Dean of Academics, and Dean of Student Welfare for their
guidance.
I sincerely acknowledge the support provided by the Indian Institute of Astrophysics
(IIA), Bengaluru, which enabled this work to take place. IIA has provided an environment
that is conducive for research, and being part of the Visiting Student Programme 2026
at IIA has been a great experience.
My sincere appreciation and thanks to my external supervisor, Dr. Debika Chowd-
hury, DST INSPIRE Faculty Fellow at IIA, for the excellent guidance, patience, and
unfailing support extended to me during the course of the project. Her clarity of thoughts
and understanding in the topics of Inﬂationary Cosmology and primordial magnetogene-
sis have been an inspiration to me. It is my sincere thanks to the effort she put into this
project and for always remaining open to discussion, nurturing independence, and prod-
ding me out of complacency and into critical examination of concepts. Being guided by
her has indeed been an honour.
I would like to extend my thanks to the Ofﬁce of the BGS at IIA for their excel-
lent administrative support, to the Computer Service (IT) team for their technical assis-
tance, and the Library staff at IIA for providing me access to the vital literature and data
iii
```


---

## Page 5

```
sources. The ease with which all of this was done undoubtedly facilitated my lengthy
calculations and write up.
Finally, I am deeply grateful to my friends in IIA and RRI — Mahavirya Pawar,
Kanchan Jangle, Yash Bhat, Arya Talegaonkar, Anshul Sharma, and Varun Kher.
These were the individuals who helped make my stay at Bengaluru comfortable. In long
coffee chats about physics, cosmology and much more, as well as their silent company
through hard times, they made this a joyful experience. At VIT, I was also fortunate
enough to make some very good friends. I would like to thank Parth Joshi, Mihir
Palekar, Ujjwal Rai, Vrunda Lokare, Mansi Beloshe, Dhruv Porwal, Atharva Patil,
and Harsha Varthan for all the support and encouragement they offered me and were
always there on the other end of a phone call when I needed them. The faith that they
showed in me even from such a far distance meant a lot to me.
There are also those who have made my hostel life much more memorable — Preetisha
Baruah, Gautami Kandalgaonkar, Amrita Malini, Chitrali Ojha, Hridija Banerjee,
Athira Jain, and Almitra Dravid. They are not only the people who I shared a corridor
with but the ones who stood by me even when I was at my tired, weakest best and helped
me celebrate each little victory over a shared meal. It is for them that the hostel felt more
like a second home.
I would also like to thank my senior batch mates, Yash Jogia and Srujal Kacha, who
have always been willing to guide me with everything and help me out with any problems
I might have faced either academically or otherwise.
First and foremost, I wish to express my deepest gratitude towards my parents, Shilpa
Shrimankar and Dharmendra Shrimankar, and my grandparents Pravin Patel and
Usha Patel for their unending love, immense patience, and constant support at every
stage of this process. All that I have achieved and all the decisions I have taken owe their
existence entirely to the base laid down by them with so much dedication and hard work.
Pushty Shrimankar
24MSP0062
iv
```


---

## Page 6

```
Executive Summery
Primordial magnetic ﬁelds observed in galaxies and intergalactic regions may have a cos-
mological origin. Inﬂationary magnetogenesis is one of the most promising mechanisms
for generating such magnetic ﬁelds. However, the standard electromagnetic action is con-
formally invariant in a Friedmann–Lemaˆıtre–Robertson–Walker (FLRW) universe, pre-
venting ampliﬁcation of electromagnetic ﬁelds during inﬂation.
To generate primordial electromagnetic ﬁelds, this conformal invariance must be bro-
ken. One widely studied mechanism introduces a coupling between the inﬂaton ﬁeld and
the electromagnetic ﬁeld through a time-dependent coupling function J(φ) ∝ a−n.
In this work, we study the generation of electromagnetic ﬁelds during inﬂation in the
non-helical case. We derive the mode equation for the gauge ﬁeld, obtain analytic so-
lutions in different cosmological eras (pre-inﬂationary vacuum, inﬂation, and reheating),
and compute the electric and magnetic power spectra, P_E(k) and P_B(k). These spectra
describe the strength of electromagnetic ﬁelds across different length scales and act as the
source for primordial gravitational waves (GWs).
For the parameter choice n = 2, the magnetic power spectrum becomes scale invari-
ant while the electromagnetic energy density fraction Ω_EM remains well below unity,
satisfying the backreaction constraint. The resulting gravitational wave energy density
Ω_GW ≈4.4 ×10−19 lies approximately six orders of magnitude below the sensitivity of
current and planned detectors, establishing that non-helical magnetogenesis produces an
extremely weak GW background.
v
```


---

## Page 7

```
Contents
Declaration
i
Certiﬁcate
ii
Acknowledgements
iii
Abstract
v
List of Figures
viii
List of Abbreviations
x
Symbols and Notations
xiii
1
Introduction
1
1.1
Motivation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
2
1.2
Objective
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
2
1.3
Organisation of the Thesis
. . . . . . . . . . . . . . . . . . . . . . . . .
3
2
Inﬂation
4
2.1
Slow-Roll Parameters . . . . . . . . . . . . . . . . . . . . . . . . . . . .
5
2.2
Conformal Time and the Hubble Radius . . . . . . . . . . . . . . . . . .
5
2.3
Evolution of the Coupling Function and Cosmological Eras . . . . . . . .
6
3
Magnetogenesis During Inﬂation
8
3.1
Gauge Choice . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
8
3.2
Mode Equation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
9
vi
```


---

## Page 8

```
3.3
Analytic Solutions in Different Eras . . . . . . . . . . . . . . . . . . . .
9
3.3.1
Era 1: Pre-inﬂationary Vacuum (a < ai) . . . . . . . . . . . . . .
9
3.3.2
Era 2: Inﬂation (ai < a < ae) . . . . . . . . . . . . . . . . . . . .
10
3.3.3
Era 3: Reheating (ae < a < ar) . . . . . . . . . . . . . . . . . . .
10
3.4
Derivative of the Mode Function . . . . . . . . . . . . . . . . . . . . . .
11
3.5
Electromagnetic Power Spectra . . . . . . . . . . . . . . . . . . . . . . .
11
3.5.1
Super-Horizon Limit . . . . . . . . . . . . . . . . . . . . . . . .
12
3.6
Numerical Evaluation of the Power Spectra
. . . . . . . . . . . . . . . .
12
3.6.1
Behaviour of the Spectra . . . . . . . . . . . . . . . . . . . . . .
13
3.7
Consistency Condition: Backreaction Constraint . . . . . . . . . . . . . .
13
3.7.1
Electromagnetic Energy Fraction for n = 2 and n = −2 . . . . . .
14
3.8
Gravitational Wave Energy Density Ω_GW
. . . . . . . . . . . . . . . . .
16
3.8.1
Physical Motivation
. . . . . . . . . . . . . . . . . . . . . . . .
16
3.8.2
Computation of Ω_EM for n = 2 . . . . . . . . . . . . . . . . . . .
17
3.8.3
Gravitational Wave Energy Density . . . . . . . . . . . . . . . .
17
3.8.4
Plot of Ω_GW
. . . . . . . . . . . . . . . . . . . . . . . . . . . .
18
3.8.5
Key Result
. . . . . . . . . . . . . . . . . . . . . . . . . . . . .
18
4
Computational Implementation
19
4.1
Software Environment and Libraries . . . . . . . . . . . . . . . . . . . .
19
4.2
Physical Parameters . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
19
4.3
Mode Function and Power Spectra . . . . . . . . . . . . . . . . . . . . .
20
4.4
Gravitational Wave Spectrum Ω_GW . . . . . . . . . . . . . . . . . . . . .
22
4.5
Notes on Numerical Accuracy
. . . . . . . . . . . . . . . . . . . . . . .
25
5
Conclusion
26
6
Future Aspects
28
vii
```


---

## Page 9

```
List of Figures
2.1
The behavior of the coupling function I(a) in relation to the scale factor
can be summarized as follows: Initially, the coupling remains constant up
to ai. Thereafter, during the inﬂationary and reheating epochs, it evolves
according to a power-law dependence. Once reheating is complete, the
coupling returns to unity. This illustration is adapted from Fig. 1 of Fujita,
et al. [1] . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
6
3.1
Numerical calculation of electromagnetic power spectra. The blue line
shows the power spectrum of magnetic ﬁelds P_B(k), and the orange one
is the power spectrum of electric ﬁelds P_E(k). In the case of n = 2, the
magnetic power spectrum, it is close to scale-invariant, whereas the elec-
tric one is scale-dependent. This ﬁgure was been made using the Python
programming language and numerical solutions of the gauge-ﬁeld mode
equation. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
12
3.2
Ω_EM vs k_max for n = 2 (magnetic dominance). The electromagnetic en-
ergy fraction remains ≪1 for all scales, conﬁrming that backreaction is
negligible. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
15
3.3
Ω_EM vs k_max for n = −2 (electric dominance). The electromagnetic en-
ergy fraction exceeds unity at high k, violating the consistency condition
Ω_EM ≪1. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
16
viii
```


---

## Page 10

```
3.4
Gravitational wave energy density spectrum, Ω_GW, for the non-helical
case with n = 2. The three different graphs represent the same for different
reheating temperatures. The sensitivity graphs for LISA, DECIGO, BBO,
ET, and ALIGO are plotted along with the gravitational waves spectrum.
The peak value is very much less than all the sensitivities at Ω_GW ≈4.4×
10−19
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
18
ix
```


---

## Page 11

```
List of Abbreviations
Abbreviation
Full Form
FLRW
Friedmann–Lemaˆıtre–Robertson–Walker
CMB
Cosmic Microwave Background
GW
Gravitational Wave
GWB
Gravitational Wave Background (stochastic)
SGWB
Stochastic Gravitational Wave Background
PGW
Primordial Gravitational Wave
PMF
Primordial Magnetic Field
EM
Electromagnetic
QFT
Quantum Field Theory
BBN
Big Bang Nucleosynthesis
OPM
Optical Potential Method
VEV
Vacuum Expectation Value
BD
Bunch–Davies (vacuum state)
x
```


---

## Page 12

```
(Continued from previous page)
Abbreviation
Full Form
P_B
Magnetic Power Spectrum
P_E
Electric Power Spectrum
Ω_EM
Electromagnetic Energy Density Fraction
Ω_GW
Gravitational Wave Energy Density
n_B
Magnetic Spectral Index
n_E
Electric Spectral Index
PDE
Partial Differential Equation
ODE
Ordinary Differential Equation
WKB
Wentzel–Kramers–Brillouin (approximation)
FRW
Friedmann–Robertson–Walker (alternate form)
LISA
Laser Interferometer Space Antenna
DECIGO
Deci-hertz Interferometer Gravitational Wave Observatory
BBO
Big Bang Observer
ET
Einstein Telescope
aLIGO
Advanced Laser Interferometer Gravitational-Wave Obser-
vatory
PTA
Pulsar Timing Array
xi
```


---

## Page 13

```
(Continued from previous page)
Abbreviation
Full Form
SKA
Square Kilometre Array
IPTA
International Pulsar Timing Array
IIA
Indian Institute of Astrophysics
VIT
Vellore Institute of Technology
VSP
Visiting Student Programme
DST
Department of Science and Technology
INSPIRE
Innovation in Science Pursuit for Inspired Research
xii
```


---

## Page 14

```
Symbols and Notations
Symbol
Description
a(t)
Cosmological scale factor
H
Hubble parameter, H = ˙a/a
η
Conformal time, dη= dt/a
H
Conformal Hubble parameter, H = aH
ε₁
First slow-roll parameter, ε₁ = −˙H/H2
ε₂
Second slow-roll parameter, ε₂ = ˙ε₁/(Hε₁)
ai
Scale factor at the start of magnetogenesis
ae
Scale factor at the end of inﬂation
ar
Scale factor at the end of reheating
Aµ
Electromagnetic four-potential
F_μν
Electromagnetic ﬁeld-strength tensor
∝
Inﬂaton scalar ﬁeld
J(φ)
Non-conformal coupling function (inﬂaton–EM coupling)
xiii
```


---

## Page 15

```
(Continued from previous page)
Symbol
Description
n
Power-law index of the coupling, J ∝ a−n
A_k(η)
Fourier mode of the gauge ﬁeld
k
Comoving wavenumber
H(1,2)
ν
Hankel functions of the ﬁrst and second kind, order ν
ν
Hankel index during inﬂation, ν = n+1/2
µ
Hankel index during reheating, µ = 2n+1/2
C1,C2
Integration constants (matching coefﬁcients at ae)
P_B(k)
Magnetic power spectrum
P_E(k)
Electric power spectrum
ρ_tot
Total background energy density
ρ_EM
Electromagnetic energy density
Ω_EM
Electromagnetic energy density fraction
Ω_GW
Gravitational wave energy density parameter
H_I
Hubble parameter during inﬂation
M_Pl
Reduced Planck mass, M_Pl = (8πG)−1/2
f
Gravitational wave frequency (present day)
k*
CMB pivot scale (k*= 0.05Mpc−1)
xiv
```


---

## Page 16

```
Chapter 1
Introduction
Magnetic ﬁelds are ubiquitous in nature, from galaxies to galaxy clusters and even in
intergalactic space. Magnetic ﬁeld strength is estimated to be 10−6 G in spiral galaxies
whereas up to as low as 10−16 G in intergalactic space. It is difﬁcult to explain the
presence of such large-scale magnetic ﬁelds through astrophysical processes, as dynamo
ampliﬁcation, for example, requires a seed magnetic ﬁeld to begin with.
The other alternative would be to propose that magnetic ﬁelds arise from the very early
universe. The framework of inﬂation is one in which quantum ﬂuctuations are stretched
to cosmological scales. While it is quite plausible that quantum ﬂuctuations would create
density perturbations that eventually give rise to structure formation in the universe, it can
be proposed that these ﬂuctuations could similarly give rise to electromagnetic waves.
However, in an FLRW spacetime, electromagnetism is conformally invariant, and thus
the amplitude of electromagnetic modes would decay rapidly.
One of the commonly considered mechanisms involves the introduction of the non-
minimal coupling of the inﬂaton ﬁeld ∝ and the electromagnetic ﬁeld tensor F_μνvia some
time-dependent function J(φ). Such a coupling mechanism breaks the conformal invari-
ance of the system, leading to a considerable ampliﬁcation of electromagnetic modes.
In this work, we study the generation of electromagnetic ﬁelds in such a non-minimal
coupling scenario, considering a case without helicity effects. The corresponding equa-
tion of motion of the gauge ﬁeld is derived and solved analytically in different cosmo-
logical eras (sub-horizon vacuum regime, inﬂationary era, and reheating epoch). Then,
1
```


---

## Page 17

```
we calculate the power spectrum of the produced electromagnetic ﬁelds, both electric
and magnetic, which is characterized by the spectral densities P_E(k) and P_B(k). They
give the description of the energy of generated electromagnetic ﬁelds at different scales
and form the initial condition for the generation of the primordial gravitational waves.
Moreover, the fractions of the energy density Ω_EM and Ω_GW are computed.
1.1
Motivation
The observations of the cosmic magnetic ﬁeld is one of the biggest unanswered questions
in contemporary cosmology. Astrophysical processes such as the galactic dynamo help in
amplifying the presence of any seed ﬁelds, but do not create such seed ﬁelds out of noth-
ing. The idea behind the inﬂationary magnetogenesis model is straightforward; namely,
vacuum ﬂuctuations during inﬂation can give rise to electromagnetic ﬁelds that will serve
as seeds for the magnetic ﬁelds seen in the present universe.
Apart from the process of magnetogenesis, the electromagnetic ﬁelds that have been
generated also serve as a source of stochastic gravitational waves owing to anisotropic
stresses. Such primordial GWs provide information regarding the early epoch of the uni-
verse during which inﬂation took place, and also during the reheating process after inﬂa-
tion. The question of how efﬁcient GW production is in the absence of helicity becomes
highly relevant in light of current and future GW observatories such as LISA, DECIGO,
ET, and PTAs.
1.2
Objective
The key objectives of this study include:
• Solve the gauge ﬁeld mode equation, taking into account the non-minimal interac-
tion between the inﬂaton and electromagnetic ﬁeld: J(φ) ∝ a−n.
• Determine the analytical form of the electric and magnetic power spectra, namely,
P_E(k) and P_B(k), in the super-horizon regime.
2
```


---

## Page 18

```
• Evaluate these power spectra numerically and calculate the fraction of electromag-
netic energy density Ω_EM for various coupling parameters n.
• Evaluate the gravitational energy density Ω_GW from the non-helical electromag-
netic ﬁelds.
• Determine the allowed parameter space for backreaction constraint (Ω_EM ≪1).
1.3
Organisation of the Thesis
The thesis is structured as follows. In Chapter 2, we discuss the fundamentals of inﬂation-
ary cosmology, the slow-roll approximation, and the behaviour of the coupling parameter
throughout the various eras. In Chapter 3, we derive the modiﬁed action for the gauge
ﬁelds, obtain the mode equation in the Coulomb gauge, and ﬁnd an analytical solution for
each era. In addition, we calculate the electric and magnetic power spectra, compute their
value numerically, check the backreaction criterion, and calculate the gravitational wave
energy density. In Chapter 4, we describe the computational procedure and provide the
code in Python to evaluate all numerical calculations performed in this thesis. Chapter 5
contains our conclusions, while Chapter 6 gives suggestions for future work.
3
```


---

## Page 19

```
Chapter 2
Inﬂation
Inﬂation is deﬁned as the period of rapid expansion during the early epochs of our uni-
verse, where
¨a > 0,
(2.1)
a(t) being the cosmological scale factor, and the overdots denote derivatives with
respect to the cosmic time t. During this period, the universe saw an incredible and
rapid growth in size, thus smoothing out any inhomogeneities that were present as well as
stretching quantum ﬂuctuations to much larger scales.
Inﬂation was ﬁrst postulated as a mechanism to address certain ﬁne-tuning problems
that arise within the conventional Big Bang theory. The horizon problem, for instance,
addresses the issue of why the cosmic microwave background (CMB) shows such perfect
isotropy. Namely, regions that are widely spaced in the CMB seem to exhibit the same
temperature despite not being causally connected, according to the Big Bang paradigm.
This happens because the physical wavelengths of these ﬂuctuations grew faster than the
Hubble radius; therefore, super-horizon ﬂuctuations were well inside the horizon before
inﬂation set in.
4
```


---

## Page 20

```
2.1
Slow-Roll Parameters
Inﬂation is driven by the rolling of a scalar ﬁeld ∝ – the inﬂaton – along a potential V(φ).
The extent to which the inﬂationary expansion behaves de Sitter-like can be described
through the slow-roll parameters
ε₁ = −
˙H
H2,
(2.2)
ε₂ =
˙ε₁
H ε₁
.
(2.3)
Conditions for the sustained period of inﬂation are met when
ε₁ ≪1.
(2.4)
2.2
Conformal Time and the Hubble Radius
Conformal time η can be introduced via the relation
dη= dt
a(t).
(2.5)
Thus, the FLRW metric takes on the form ds2 = a2(η)(−dη2 +dx2). The conformal
Hubble rate is denoted H = aH.
For de Sitter inﬂation, a ∝ eHt, and the conformal time ranges from −# to 0−, during
which we have
η √−1
aH .
(2.6)
5
```


---

## Page 21

```
2.3
Evolution of the Coupling Function and Cosmologi-
cal Eras
For understanding the generation of electromagnetic ﬁelds due to magnetogenesis, it is
necessary to know about the various cosmological periods where the coupling function
varies. The variation of the coupling function I(a) as a function of the scale factor a is
represented in Fig. 2.1.
Figure 2.1: The behavior of the coupling function I(a) in relation to the scale factor can be
summarized as follows: Initially, the coupling remains constant up to ai. Thereafter, during the
inﬂationary and reheating epochs, it evolves according to a power-law dependence. Once reheating
is complete, the coupling returns to unity. This illustration is adapted from Fig. 1 of Fujita, et al. [1]
The evolution of the scale factor can be described in three stages:
• Time ai: This marks the point at which the coupling starts to evolve. Before this
point (a < ai), the coupling is constant, and the electromagnetic ﬁeld appears as
usual vacuum ﬂuctuations. At this stage, the modes of the gauge ﬁelds are in the
Bunch-Davies (BD) vacuum.
• Time ae: After time ai, until time ae, the coupling function evolves following a
power-law dependence on the scale factor:
I(a) ∝ a−n.
(2.7)
6
```


---

## Page 22

```
In this epoch, the conformal invariance of electromagnetism gets broken, thus per-
mitting the ampliﬁcation of the electromagnetic ﬁeld modes.
• End of reheating ar: Once the inﬂationary stage ends, the universe enters the
inﬂaton-oscillation regime, which is approximately similar to the matter-dominated
epoch. The form of the coupling keeps varying till the end of reheating at ar, after
which the coupling remains constant, given by
I(a) = 1,
a > ar.
(2.8)
Thus the ampliﬁcation of electromagnetic modes occurs during the interval ai < a <
ar, and the three characteristic scale factors ai, ae, and ar represent the beginning of
magnetogenesis, the end of inﬂation, and the completion of reheating, respectively.
7
```


---

## Page 23

```
Chapter 3
Magnetogenesis During Inﬂation
To generate electromagnetic ﬁelds during inﬂation, we extend the usual Maxwell action
by coupling the inﬂaton ﬁeld ∝ with the electromagnetic ﬁeld strength tensor F_μνin a
non-minimal way,
S[Aµ] = −1
16π
∝
d4x√(−g) J²(φ)F_μνF_μν,
(3.1)
where
F_μν= ∂_μ A_ν − ∂_ν A_μ.
(3.2)
If we consider the conventional Maxwellian case, where J = 1, the conformal sym-
metry is restored.
3.1
Gauge Choice
We are working in Coulomb gauge:
A0 = 0,
∂_i A_i = 0.
(3.3)
This eliminates the spurious mode of propagation and leaves behind only the two
transverse modes of the photon. The variation of the action (3.1) w.r.t Ai provides us with
the equation of motion.
8
```


---

## Page 24

```
3.2
Mode Equation
Decomposing the gauge ﬁeld into Fourier modes and working with the rescaled variable
Ā_k = A_k/J, the equation of motion for the Fourier modes takes the form
¯A''
k +2J'
J
¯A'
k +k2 Ā_k = 0,
(3.4)
where primes denote derivatives with respect to conformal time η. Deﬁning A_k ≡ J Ā_k
one obtains the more transparent Schr¨odinger-like equation
A''
k +
"
k2 −J''
J
#
A_k = 0.
(3.5)
The effective potential J''/J determines whether a given mode is ampliﬁed. In the sub-
horizon limit k2 ≫J''/J, the mode oscillates freely (Minkowski-like behaviour), while in
the super-horizon limit, k2 ≪J''/J the mode can grow.
3.3
Analytic Solutions in Different Eras
3.3.1
Era 1: Pre-inﬂationary Vacuum (a < ai)
Before the coupling begins to evolve, J = Ji = const, so J''/J = 0 and Eq. (3.5) reduces
to
$
∂_η²+k2%
A_k = 0.
(3.6)
The solution that corresponds to the Bunch-Davies vacuum (positive-frequency mode
in the sub-horizon limit) is
A_k(η) =
1
Ji
√
2k
e−ik(η−ηi).
(3.7)
This sets the initial condition for the subsequent evolution.
9
```


---

## Page 25

```
3.3.2
Era 2: Inﬂation (ai < a < ae)
During inﬂation, with J ∝ a−n and using a ∝ (−η)−1 for de Sitter space, the effective
potential becomes
J''
J = n(n+1)
η²
.
(3.8)
The mode equation reads
π
∂_η²+k2 −n(n+1)
η²
'
A_k = 0.
(3.9)
For an index ν = n+ 1
2 for the Hankel function, the general solution is a linear com-
bination of the Hankel functions of order one and two, that is H^(1)_ν
and H(2)
ν. The Bunch-
Davies solution gives
A_k(η) =
1
J(η)
(
−πη
4 ei(n+1)π/2 H(1)
n+1/2(−kη).
(3.10)
3.3.3
Era 3: Reheating (ae < a < ar)
After inﬂation, the universe enters a matter-dominated, reheating-like phase. In this era
J ∝ a−2n and the effective potential becomes
J''
J = 2n(2n+1)
η²
.
(3.11)
The mode equation is
π
∂_η²+k2 −2n(2n+1)
η²
'
A_k = 0,
(3.12)
with Hankel index µ = 2n+ 1
2. The general solution is
A_k(η) =
1
J(η)
(
−πη
4
)
C1 H(1)
µ (−kη)+C2 H(2)
µ (−kη)
*
,
(3.13)
where the coefﬁcients C1 and C2 are ﬁxed by matching the solution and its derivative
continuously to the inﬂationary solution (3.10) at η = η_e (the end of inﬂation).
10
```


---

## Page 26

```
3.4
Derivative of the Mode Function
The electric power spectrum (see Section 3.5) requires the combination A'
k −(J'/J)A_k.
Writing A_k(η) = C(η)H^(1)_ν(z) with z = −kη and
C(η) =
1
J(η)
(
−πη
4 ei(n+1)π/2,
(3.14)
and using the Hankel-function recurrence relation ∋zH^(1)_ν
= H(1)
ν−1 −(ν/z)H^(1)_ν, one
obtains
A'
k = dC
dηH^(1)_ν(z)−kC
π
H(1)
ν−1(z)−ν
z H^(1)_ν(z)
'
.
(3.15)
The combination relevant for the electric spectrum is therefore
A'
k −J'
J A_k =
"dC
dη−J'
J C
#
H^(1)_ν(z)−kC
π
H(1)
ν−1(z)−ν
z H^(1)_ν(z)
'
.
(3.16)
3.5
Electromagnetic Power Spectra
Power spectra for the magnetic ﬁeld and electric ﬁeld are expressed using the two-point
correlation function of the physical electromagnetic ﬁelds. Using the mode function, the
above quantities are
P_B(k) =
k5
2π2 a4 |A_k|2,
(3.17)
P_E(k) =
k3
2π2 a4
++++A'
k −J'
J A_k
++++
2
.
(3.18)
The term a−4 is a measure of the dilution effect of physical energy density caused by
the expansion of the Universe.
11
```


---

## Page 27

```
3.5.1
Super-Horizon Limit
For initial conditions, the limit used is that of the sub-horizon limit, i.e., k ≫
,
J''/J.
Here, the behavior of the mode is that of a free harmonic oscillator. Power spectra are
calculated in the super-horizon limit, i.e., k ≪
,
J''/J.
3.6
Numerical Evaluation of the Power Spectra
Having the analytic formulae for P_B and P_E, we then calculate the above spectra numer-
ically to gain insight into their evolution on cosmological scales. The spectral formulas
were obtained from the solutions of the mode function equations obtained in Section 3.3
and both P_B and P_E were computed as functions of the comoving wavenumber k via
numerical solutions of the mode function equation using Python.
The resulting spectra are shown in Figure 3.1.
Figure 3.1: Numerical calculation of electromagnetic power spectra. The blue line shows the
power spectrum of magnetic ﬁelds P_B(k), and the orange one is the power spectrum of electric
ﬁelds P_E(k). In the case of n = 2, the magnetic power spectrum, it is close to scale-invariant,
whereas the electric one is scale-dependent. This ﬁgure was been made using the Python pro-
gramming language and numerical solutions of the gauge-ﬁeld mode equation.
12
```


---

## Page 28

```
3.6.1
Behaviour of the Spectra
From the numerical results, we observe the following features:
• For n = 2, the magnetic power spectrum P_B(k) exhibits almost the same value
for all values of k. Observations favor the above scenario because a scale-invariant
magnetic seed ﬁeld can account for the observed magnetic ﬁeld on a large scale
through dynamical processes.
• The power spectrum of the electric ﬁeld P_E(k) is inversely proportional to k. The
reason is that the modes of the electric ﬁeld die down faster than the modes of the
magnetic ﬁeld after crossing the horizon.
• For the energy density of the electric ﬁeld not to overwhelm the background, the
large-scale electric-ﬁeld contribution has been heavily suppressed.
These features are consistent with earlier analyses of inﬂationary magnetogenesis
models [2], which n = 2 is often preferred because it yields a nearly scale-invariant
magnetic spectrum while keeping the electric backreaction under control. The spectra
obtained here reproduce the qualitative behavior reported in Ref. [2].
3.7
Consistency Condition: Backreaction Constraint
To make the inﬂationary scenario of magnetic ﬁeld generation consistent, it must be en-
sured that the energy density of the generated ﬁelds remains well below the background
energy density at all times during the period of inﬂation. The electromagnetic energy
density ratio Ω_EM is deﬁned by
Ω_EM = ρ_EM
ρ_tot
,
(3.19)
where
ρ_EM = 1
2
∝ dk
k (P_E +P_B).
(3.20)
13
```


---

## Page 29

```
Consistency demands that
Ω_EM ≪1.
(3.21)
Failure to satisfy this relation would imply that the EM ﬁeld backreaction on the In-
ﬂationary dynamics are strong enough to render the background solution invalid.
3.7.1
Electromagnetic Energy Fraction for n = 2 and n = −2
The calculation of Ω_EM is done under the following two scenarios. Here, the integral
extends over comoving wavenumbers from the CMB pivot scale k*= 10−4 Mpc−1 to an
arbitrary maximum wavenumber k_max, with the background energy density being set to
ρ_tot = 3M_Pl²H2
I :
Ω_EM =
1
2ρ_tot
∝ k_max
k*
dk
k [P_E(k)+P_B(k)].
(3.22)
Case n = 2 (Magnetic Dominance)
For n = 2 the magnetic power spectrum is scale invariant and the electric power spectrum
is subdominant on large scales. Using the analytical forms
P_B(k) = B0 = 0.227H4
I ,
P_E(k) = E0 k−2 = 0.0253H4
I k−2,
(3.23)
Figure 3.2 shows Ω_EM as a function of k_max for n = 2. The value remains well be-
low unity across all scales, satisfying the backreaction constraint Ω_EM ≪1. At k_max =
1 Mpc−1 we obtain Ω_EM ≈2.1×10−5.
Case n = −2 (Electric Dominance and Backreaction Violation)
For n = −2 the electric spectrum becomes scale invariant while the magnetic spectrum is
blue-tilted (∝ k2):
P_E(k) = E0 = 0.227H4
I ,
P_B(k) = B0 k2 = 0.0253H4
I k2.
(3.24)
14
```


---

## Page 30

```
Figure 3.2: Ω_EM vs k_max for n = 2 (magnetic dominance). The electromagnetic energy fraction
remains ≪1 for all scales, conﬁrming that backreaction is negligible.
The magnetic term grows as k2 and dominates at small scales, causing ρ_EM to grow
rapidly.
Electric Spectral Index n_E
The spectral index of the electric power spectrum is deﬁned through P_E(k) ∝ kn_E. The
analytic result is
n_E =











2n+4,
n < 1
2,
6−2n,
n > 1
2.
(3.25)
For n = −2 (since n < 1/2): n_E = 2(−2)+4 = 0, conﬁrming scale invariance of P_E
for this case.
Figure 3.3 shows Ω_EM for n = −2. The energy fraction grows rapidly with k_max and
exceeds unity at small scales, violating the backreaction constraint.
Summary of Backreaction Analysis
• For n = 2: Ω_EM remains ≪1 for all k_max, consistent with the backreaction con-
straint.
15
```


---

## Page 31

```
Figure 3.3: Ω_EM vs k_max for n = −2 (electric dominance). The electromagnetic energy fraction
exceeds unity at high k, violating the consistency condition Ω_EM ≪1.
• For n = −2: Ω_EM grows rapidly and exceeds unity at small scales, violating obser-
vational bounds.
This analysis reinforces the allowed range −2.2 < n < 0 from the literature, where
n = −2 is marginally allowed only if the integrated scales are restricted, while n = 2 is
safe but produces negligible electromagnetic energy at observable scales.
3.8
Gravitational Wave Energy Density Ω_GW
3.8.1
Physical Motivation
The value Ω_GW(f) is the ratio of gravitational wave energy density to the total energy
density per unit logarithm of frequency,
Ω_GW(f) = 1
ρ_tot
dρ_GW
d ln f .
(3.26)
In the early universe, primordial magnetic ﬁelds can be considered a source of grav-
itational waves, owing to their anisotropic stress-energy tensor. The efﬁciency of this
process depends strongly on whether the magnetic ﬁeld is helical or non-helical. In the
non-helical case:
• Magnetic energy does not cascade to large scales in an inverse cascade process.
16
```


---

## Page 32

```
• The magnetic energy is restricted to small scales.
• The efﬁciency of GW formation in this non-helical case is much less compared to
that in the previous example.
Therefore, the computation of Ω_GW in the non-helical case measures how insigniﬁ-
cant this GW background is and its detectability by present and future gravitational wave
detectors.
3.8.2
Computation of Ω_EM for n = 2
For the non-helical case (n = 2):
P_B(k) = B0 = 0.227H4
I
(scale invariant),
(3.27)
P_E(k) = E0 k−2 = 0.0253H4
I k−2.
(3.28)
Magnetic contribution:
∝ dk
k P_B(k) = B0 ln
"k_max
k*
#
= 0.227×ln(104) ≈2.09H4
I .
(3.29)
Electric contribution:
∝ dk
k P_E(k) = E0
2k2*
−
E0
2k2max
≈E0
2k2*
≈1.265×106 H4
I
(k_max ≫k*).
(3.30)
Including the prefactor H2
I /(6M_Pl²) ≈1.66×10−11:
Ω_EM ≈2.1×10−5.
(3.31)
3.8.3
Gravitational Wave Energy Density
Using the relation derived in Okano π Fujita [1] (Eq. (3.11)):
Ω_GW ≈10−13
"Ω_EM(η_r)
10−2
ε₂
,
(3.32)
17
```


---

## Page 33

```
we substitute Ω_EM = 2.1×10−5:
Ω_GW ≈10−13
"2.1×10−5
10−2
ε₂
= 10−13 (2.1×10−3)2.
(3.33)
Ω_GW ≈4.4×10−19.
(3.34)
3.8.4
Plot of Ω_GW
Figure 3.4: Gravitational wave energy density spectrum, Ω_GW, for the non-helical case with n = 2.
The three different graphs represent the same for different reheating temperatures. The sensitivity
graphs for LISA, DECIGO, BBO, ET, and ALIGO are plotted along with the gravitational waves
spectrum. The peak value is very much less than all the sensitivities at Ω_GW ≈4.4×10−19
3.8.5
Key Result
The non-helical gravitational wave signal is
Ω^non-helical
GW
∼10−19,
(3.35)
The value is about six orders of magnitude smaller than the sensitivity of present and
upcoming experiments. On the other hand, the helical model gives Ω_GW ∼10−13, which
is several orders of magnitude higher [1]. This implies that non-helical magnetogenesis
results in extremely small gravitational wave amplitudes.
18
```


---

## Page 34

```
Chapter 4
Computational Implementation
All numerical results included in this dissertation have been achieved via Python 3. This
chapter will describe the computational approach as well as provide all necessary code
snippets to compute the gauge ﬁeld mode function, electromagnetic power spectrum, Ω_EM
backreaction parameter, and gravitational wave energy spectrum Ω_GW(f).
4.1
Software Environment and Libraries
The following Python libraries were used throughout this work:
• numpy — array operations, special functions, and numerical integration.
• scipy — Hankel functions (scipy.special.hankel1, hankel2) and the ODE
integrator solve ivp.
• matplotlib — all ﬁgures and plots.
4.2
Physical Parameters
The calculations use the following ﬁducial parameter values, expressed in natural units
(¯h = c = 1):
• Inﬂationary Hubble parameter: H_I = 10−5 M_Pl
19
```


---

## Page 35

```
• Reduced Planck mass: M_Pl = 2.435×1018 GeV
• CMB pivot scale: k*= 10−4 Mpc−1
• Upper cutoff on comoving wavenumber: k_max = 1 Mpc−1
• Coupling parameter: n = 2 (magnetic-dominated, scale-invariant case)
4.3
Mode Function and Power Spectra
The following Python implementation computes the electromagnetic power spectra P_B(k)
and P_E(k) by directly utilizing the analytic forms of the Hankel functions for the cou-
pling index n = 2. This approach ensures high precision in the super-horizon regime.
∝
"
1
import
numpy as np
2
import
matplotlib.pyplot as plt
3
4 # --- Physical
and Model
Parameters
---
5 n
= 2
# Coupling
index
6
nu
= 5/2
# Hankel
index (nu = n + 1/2)
7
eta =
-0.1
# Conformal
time
during
inflation
8 a
= 1
# Scale
factor
normalization
9
10 # Comoving
wavenumber
range (logarithmic
spacing)
11 k = np.logspace (-1, 9, 600)
12
13 # Coupling
function J and its
conformal
time
derivative
14 J
= eta**n
15
Jp = n * eta **(n-1)
16
17 # Normalization
constant
for the mode
function
18 C = (1/J) * np.sqrt(-np.pi * n / 4 + 0j) * np.exp(-1j *
(n + 1) * np.pi / 2)
19
20
```


---

## Page 36

```
20 # Argument of the Hankel
function
21 z = -k * eta
22
23 # --- Analytic
Hankel
Function H^{(1)}_{5/2}(z) ---
24
Hnu = np.sqrt (2/( np.pi * z)) * np.exp(1j * z) * (
25
-3/z**2 - 3j/z + 1
26 )
27
28 # --- Analytic
Hankel
Function H^{(1)}_{3/2}(z) ---
29
Hnum1 = np.sqrt (2/( np.pi * z)) * np.exp(1j * z) * (
30
-1j/z + 1
31 )
32
33 # Gauge
field
mode
function
A_k
34 A = C * Hnu
35
36 # Derivative
combination: A_k’ - (J ’/J)A_k
37
Aprime_minus_term = (-Jp/J * C) * Hnu - k * C * (Hnum1 -
(nu/z) * Hnu)
38
39 # --- Power
Spectra
Computation
---
40
P_B = (k**5) / (2 * np.pi**2 * a**4) * np.abs(A)**2
41
P_E = (k**3) / (2 * np.pi**2 * a**4) *
np.abs( Aprime_minus_term )**2
42
43 # --- Plotting
---
44
plt.figure(figsize =(7, 5))
45
plt.loglog(k, P_B , label=r"$\mathcal{P}_B$ (n=2)",
color=’steelblue ’, lw=2)
46
plt.loglog(k, P_E , label=r"$\mathcal{P}_E$ (n=2)",
color=’darkorange ’, lw=2)
21
```


---

## Page 37

```
47
plt.xlabel(r"Comoving
wavenumber
$k$", fontsize =12)
48
plt.ylabel(r"Power
Spectrum", fontsize =12)
49
plt.xlim (1e-1, 1e1)
50
plt.ylim (1e1 , 1e20)
51
plt.grid(True , which="both", ls=’--’, alpha =0.5)
52
plt.legend(fontsize =11)
53
plt.show ()
#
$
Listing 4.1: Python implementation for the analytic computation of P_B(k) and P_E(k) using the
n = 2 Hankel function expansion.
Mathematical Deﬁnition of the Hankel Functions used
In the implementation above, for the speciﬁc case of n = 2 (which implies a Hankel index
ν= 5/2), the complex mode functions are expressed using the algebraic expansion of the
Hankel functions of the ﬁrst kind. The functions implemented in the code correspond to:
H(1)
5/2(z) =
(
2
πzeiz
"
−3
z2 −3i
z +1
#
(4.1)
and the lower-order function required for the derivative calculation:
H(1)
3/2(z) =
(
2
πzeiz
"
−i
z +1
#
(4.2)
where z = −kη. These analytic forms are derived from the general spherical Hankel
function relations and are exact for half-integer orders.
4.4
Gravitational Wave Spectrum Ω_GW
In the non-helical magnetogenesis for n = 2, the electromagnetic energy density that is
produced results in a stochastic background of gravitational waves. The accompanying
Python script calculates the maximum amplitude of Ω_GW and presents it as a uniform
spectral density over comoving scales k, demonstrating the scale-invariant characteristic
22
```


---

## Page 38

```
of the generated signal within this particular regime.
∝
"
1
import
numpy as np
2
import
matplotlib.pyplot as plt
3
4
print("="*70)
5
print("NON -HELICAL GW - CONSTANT
Omega_GW
WITH k AXIS")
6
print("="*70)
7
8 # Given
value
from
backreaction
analysis
9
Omega_EM = 2.1e-5
10
11 # Constant GW amplitude
based on Okano π Fujita
(2021)
relation
12
Omega_GW = 1e-13 * (Omega_EM / 1e-2) **2
13
14
print(f"\nComputed
value:")
15
print(f"Omega_GW = {Omega_GW :.2e} (independent of k)")
16
17 # Define k range (in Mpc^-1) from CMB scale to small
scales
18 k = np.logspace (-4, 2, 500)
19
20 # Constant
Omega_GW
array for
plotting
21
omega_gw = np.full_like(k, Omega_GW)
22
23
plt.figure(figsize =(9, 5))
24
plt.loglog(k, omega_gw , ’b-’, linewidth =2.5)
25
26
plt.xlabel(r’$k \; (\ mathrm{Mpc }^{ -1})$’, fontsize =13)
27
plt.ylabel(r’$\Omega_ {\ mathrm{GW}}$’, fontsize =13)
28
plt.title(’GW Energy
Density (Non -Helical , No k
23
```


---

## Page 39

```
Dependence)’, fontsize =13)
29
30
plt.grid(True , which="both", alpha =0.3)
31
32 # Annotation of the
computed
constant
value
33
plt.text (1e-3, Omega_GW *2,
34
f’$\\ Omega_ {{GW}} = {Omega_GW :.1e}$ (constant)’,
35
fontsize =11,
36
bbox=dict(boxstyle=’round ’,
facecolor=’lightyellow ’))
37
38
plt.ylim ([ Omega_GW /10, Omega_GW *10])
39
40
plt.tight_layout ()
41
plt.savefig(’omega_gw_vs_k_constant .png’, dpi =150)
42
plt.show ()
43
44
print("\n" + "="*70)
45
print(" INTERPRETATION")
46
print("="*70)
47
print("""
48
- x-axis: physical k (Mpc^-1)
49
- Omega_GW is constant
-> flat
horizontal
line
50
- No spectral
dependence on k in this
simplified
approximation
51
52
Final
result:
53
Omega_GW
approx
{:.2e}
54 """.format(Omega_GW))
#
$
Listing 4.2: Computation of the constant Ω_GW amplitude and spectral visualization for the non-
helical n = 2 case.
24
```


---

## Page 40

```
Spectral Characteristics
The plot generated by Listing 4.2 represents a ﬂat (scale-invariant) spectrum. This ap-
proximation is valid for the non-helical n = 2 case because:
• The magnetic power spectrum P_B(k) is nearly scale-invariant for n = 2.
• The sourced gravitational wave energy density Ω_GW scales with the square of the
electromagnetic energy fraction, Ω_EM².
• Consequently, the resulting stochastic background appears as a horizontal line in
log-log space across the relevant comoving wavenumbers k.
4.5
Notes on Numerical Accuracy
Several points regarding numerical accuracy deserve mention:
A few issues related to numerical precision should be highlighted:
• The functions H^(1)_ν(z) for half-integer orders simplify to elementary functions, sig-
niﬁcantly enhancing numerical precision for n = 2.
• The analytical matching is performed at ηe, which is the end of inﬂation. The
obtained coefﬁcients C1 and C2 are substituted into the solution for the reheating
era.
• The logarithmically divergent integral Ω_EM can be calculated accurately for n =
2 owing to the scale-invariant spectrum of the magnetic ﬁeld. For n = −2 the
integrand behaves as (1+k2/k2
min)2 and strongly depends on the upper cutoff k_max.
• All plots are generated at a resolution of 150 dpi using matplotlib with logarith-
mic axes to span the wide dynamic range of both k and frequency.
25
```


---

## Page 41

```
Chapter 5
Conclusion
In the current study, we have explored the generation of an electromagnetic ﬁeld in in-
ﬂation via the nonminimal coupling of the inﬂaton with the gauge ﬁeld. We obtained
the expression for spectral functions of electric and magnetic ﬁelds in three different sce-
narios: pre-inﬂationary Bunch–Davies vacuum, inﬂationary epoch, and reheating epoch
by solving the equation of motion for gauge ﬁeld mode in terms of conformal time using
numerical methods. It is seen from the results that there is the scale invariance of the mag-
netic spectral function, P_B(k), but the electric spectral function P_E(k) has the property
of scale dependence if n = 2. Under these circumstances, the ratio of the energy density
of the electromagnetic ﬁeld is approximately equal to Ω_EM ≈2.1×10−5.
The total energy density does not exceed unity; hence, the back reaction requirement is
fulﬁlled. On the other hand, when n = −2, the energy density associated with the electric
ﬁeld becomes dominant and increases rapidly with the increase of k_max; this implies that
the consistency requirement is not satisﬁed, as mentioned in Ref. [1].
We ﬁnd that
Ω^non-helical
GW
≈4.4×10−19
(5.1)
in the n = 2 case. The signal is estimated to be approximately 6 orders of magnitude be-
yond the detection threshold of current and future gravitational wave experiments (LISA,
DECIGO, BBO, Einstein Telescope, and Advanced LIGO), which means that gravita-
tional waves arising from non-helical magnetogenesis is very faint and currently out of
26
```


---

## Page 42

```
reach.
This implies that non-helical magnetic-dominated spectra with a power-law spectrum
n = 2 satisfy the backreaction constraints and thus does not produce any inconsistencies.
Nevertheless, the predicted gravitational wave signal in the non-helical case is extremely
weak and therefore not detectable in the near future, which gives rise to considering heli-
cal magnetogenesis models and their observational features.
27
```


---

## Page 43

```
Chapter 6
Future Aspects
The current analysis introduces the analysis and numerical tools necessary for the study
of the power spectra of EM radiation, as well as the gravitational waves produced through
the non-helical magnetogenesis mechanism of inﬂation. A number of interesting research
avenues are open for future study.
In particular, our next objective is to formulate a complete model of GW production
from the process of non-helical magnetogenesis. Speciﬁcally, we must obtain the com-
plete power spectrum of the GW radiation is produced via the action of electromagnetic
ﬁelds, which determines the energy density parameter Ω_GW(f) at present.
Our current analysis provides only an order-of-magnitude estimate. We are inter-
ested in ﬁnding out how the subsequent reheating period inﬂuences the properties of the
produced GWs, namely how its temperature Treh and its equation-of-state parameter w
determine the location and shape of the peak in Ω_GW(f). These spectral features may be
employed to constrain the otherwise inaccessible reheating parameters. A comparative
analysis of the expected spectra against the sensitivity curves of LISA, DECIGO, The
Einstein Telescope and pulsar timing array (SKA, IPTA) experiments will be performed.
A straightforward extension of the current project is to study the case where the elec-
tromagnetic action features a J²(φ)F_μν˜F_μνterm coupling the inﬂaton to the dual ﬁeld
strength. The presence of a helical magnetic ﬁeld results in an inverse cascade of mag-
netic energy, making the GW production much stronger and creating a chiral background
of gravitational waves, a feature not found in the case where helicity is absent [1]. Com-
28
```


---

## Page 44

```
parison of these predictions should help determine which is more consistent with future
observations, including those of large-scale magnetic ﬁelds in voids.
Lastly, our goal is to test if the magnetic ﬁeld created by the process described above
matches the observational constraints for the amplitude of such ﬁelds from Faraday ro-
tation measurements, blazars, and CMB measurements and to determine whether the re-
sulting seed ﬁelds can account for observed µG magnetic ﬁelds after the dynamo effect
in galaxies.
29
```


---

## Page 45

```
Bibliography
[1] Chiral Gravitational Waves Produced in a Helical Magnetogenesis Model,
arXiv:2005.13833 [astro-ph.CO].
[2] S. Tripathy, D. Chowdhury, R. K. Jain, and L. Sriramkumar, On the challenges in
the choice of the non-conformal coupling function in inﬂationary magnetogenesis,
arXiv:2111.01478 [astro-ph.CO].
[3] T. Fujita and R. Durrer,
,
JCAP 1909,
008 (2019),
doi:10.1088/1475-
7516/2019/09/008, arXiv:1904.11428 [astro-ph.CO].
[4] K. Subramanian, , Astron. Nachr. 331, 110 (2010), arXiv:0911.4771 [astro-ph.CO].
[5] A. Kandus, K. E. Kunze, and C. G. Tsagas, , Phys. Rept. 505, 1 (2011),
arXiv:1007.3891 [astro-ph.CO].
[6] J. Martin and J. Yokoyama, , JCAP 01, 025 (2008), arXiv:0711.4307 [astro-ph].
[7] R. Durrer and A. Neronov, , Astron. Astrophys.
[8] T. Fujita, R. Namba, Y. Tada, N. Takeda and H. Tashiro, , JCAP 1505, 054 (2015),
doi:10.1088/1475-7516/2015/05/054, arXiv:1503.05802 [astro-ph.CO].
[9] C. Caprini and L. Sorbo,
,
JCAP 1410,
056 (2014),
doi:10.1088/1475-
7516/2014/10/056, arXiv:1407.2809 [astro-ph.CO].
[10] T. Vachaspati, Progress on Cosmological Magnetic Fields, Rep. Prog. Phys. (2020),
doi:10.1088/1361-6633/ac03a9, arXiv:2010.10525 [astro-ph.CO].
30
```


---

## Page 46

```
[11] M.-a. Watanabe, S. Kanno, and J. Soda, Inﬂationary Universe with Anisotropic Hair,
Phys. Rev. Lett. 102, 191302 (2009), arXiv:0902.2833 [hep-th].
[12] S. Kanno, J. Soda, and M.-a. Watanabe, Anisotropic Power-law Inﬂation, JCAP 12,
009 (2009), arXiv:0908.3509 [astro-ph.CO].
[13] Y. A_krami et al. (Planck Collaboration), Planck 2018 Results. X. Constraints on
Inﬂation, Astron. Astrophys. 641, A10 (2020), arXiv:1807.06211 [astro-ph.CO].
[14] P. A. R. Ade et al. (BICEP/Keck Collaboration), Improved Constraints on Primor-
dial Gravitational Waves using BICEP/Keck Data, Phys. Rev. Lett. 127, 151301
(2021), arXiv:2110.00483 [astro-ph.CO].
[15] T. Fujita and K. Kamada,
Large-scale Magnetic Fields can explain the
Baryon
Asymmetry
of
the
Universe,
Phys.
Rev.
D
93,
083520
(2016),
doi:10.1103/PhysRevD.93.083520, arXiv:1602.02109 [hep-ph].
[16] K. Kamada and A. J. Long, Baryogenesis from Decaying Magnetic Helicity, Phys.
Rev. D 94, 063501 (2016), doi:10.1103/PhysRevD.94.063501, arXiv:1606.08891
[astro-ph.CO].
31
```
