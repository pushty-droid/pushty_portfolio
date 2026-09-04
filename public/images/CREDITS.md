# Image credits

Every third-party image used on the site is listed here, with its source and
the terms it's used under. Anything added to `public/images/` later belongs in
this file too.

## planck-galactic-magnetic-field.webp

**Polarised emission from Milky Way dust** — the interaction between
interstellar dust and the structure of the Galaxy's magnetic field, mapped over
the whole sky by ESA's Planck satellite. The colour scale is the total
intensity of dust emission; the texture is the direction of the polarised
light, which traces the orientation of the magnetic field.

- **Credit:** ESA and the Planck Collaboration
- **Licence:** ESA Standard Licence
- **Source:** https://www.esa.int/ESA_Multimedia/Images/2015/02/Polarised_emission_from_Milky_Way_dust
- **Original:** 2048 × 1024 JPEG.
- **Alterations:** resized to 1800 × 900, converted to WebP, and multiplied
  through the site's violet→magenta band gradient so it sits in the palette
  rather than on top of it. Multiply only darkens, so no pixel in the result
  is brighter than a plain gradient band — which is what makes the hero text
  legible without a scrim heavy enough to hide the map. The structure, the
  colour *ordering* and the polarisation texture are unchanged; nothing has
  been inverted or remapped, so the image still reads the way the original
  does. The unaltered original is one click away at the source URL below.
- **Used on:** the homepage hero (`src/app/page.tsx`), where the credit line is
  rendered by `BandHero`'s `credit` prop.
- **To re-tone a different image the same way:** the bake script pattern is in
  this repo's history; it is a `PIL.ImageChops.multiply` of the resized image
  against a 135° `#4a3384 → #8e3c70` gradient.

The ESA Standard Licence permits use for educational and informational
purposes provided ESA is credited. It is not a Creative Commons licence — if
this site ever becomes commercial, check the terms again.

## Project backgrounds (added for the Projects section)

These three sit full-bleed behind the Projects index and the two write-up
heroes, under a dark scrim (`Band` / `BandHero`). They are **not** toned into
the band gradient like the Planck hero — the scrim does the contrast work.
Confirm each source and licence before the site goes public; placeholder
credits are rendered via the `credit` prop for now.

### neutron-star-black-hole-merger-artist-impression.jpg
- **Shows:** artist's impression of a neutron star spiralling into a black hole.
- **Used on:** the `gw-from-magnetogenesis` band (`src/app/projects/page.tsx`)
  and that write-up's hero (`src/components/ProjectPage.tsx`).
- **Credit / licence:** ⚠️ to confirm. Likely an ESO/LIGO press illustration
  for a neutron-star–black-hole merger event — verify the exact source.

### milky-way-full-sky-panorama.jpeg
- **Shows:** 360° panorama of the Milky Way with the Magellanic Clouds.
- **Used on:** the `distance-duality-anisotropy` band and its write-up hero.
- **Credit / licence:** ESO / S. Brunier (*The Milky Way panorama*), ESO
  images are CC BY 4.0 — ⚠️ confirm this is the ESO original.

### black-hole-accretion-disk-artist-impression.jpeg
- **Shows:** artist's impression of a black hole with an accretion disk.
- **Used on:** the Projects index hero (`src/app/projects/page.tsx`).
- **Credit / licence:** ⚠️ to confirm before publishing.

### supernova-explosion-with-surviving-companion-star-artist-impression.jpeg
- **Shows:** artist's impression of a core-collapse supernova with a blue
  companion star that survives the explosion.
- **Used on:** the Publications page hero (`src/app/publications/page.tsx`).
- **Credit / licence:** ⚠️ to confirm. Almost certainly an ESO press
  illustration (ESO images are CC BY 4.0) — verify the exact release.

### m82-cigar-galaxy-starburst-superwind.jpeg
- **Shows:** M82, the Cigar starburst galaxy, as a multi-wavelength composite
  (Chandra X-ray, Hubble optical, Spitzer infrared) with its superwind outflow.
- **Used on:** the Research page hero (`src/app/research/page.tsx`).
- **Credit / licence:** ⚠️ to confirm — NASA composite (NASA/CXC/JPL-Caltech/STScI),
  generally public domain with attribution. Verify before publishing.

### ngc6559-star-forming-region.jpeg
- **Shows:** NGC 6559, a star-forming region of gas and dust in Sagittarius,
  with red Hα emission, blue reflection nebulosity and dark dust lanes.
- **Used on:** the About page hero (`src/app/about/page.tsx`).
- **Credit / licence:** ⚠️ to confirm — ESO/VLT image (ESO images are CC BY 4.0);
  verify the exact release before publishing.

### rho-ophiuchi-cloud-complex-jwst.jpeg
- **Shows:** the Rho Ophiuchi cloud complex, the nearest star-forming region
  to Earth — JWST's first-anniversary image.
- **Used on:** the Talks & outreach page hero (`src/app/talks/page.tsx`).
- **Credit / licence:** NASA, ESA, CSA, STScI (Klaus Pontoppidan). JWST images
  are public domain with attribution — ⚠️ confirm and swap in a higher-res
  copy; the file in the repo is small.

### gw170817-neutron-star-merger-illustration.jpg
- **Shows:** artist's illustration of the GW170817 binary neutron-star merger —
  the two neutron stars, a relativistic jet, and the warped spacetime grid.
- **Used on:** the CV page hero (`src/app/cv/page.tsx`); the hero is inside
  `data-print-hide`, so it does not appear in the printed PDF.
- **Credit / licence:** NSF / LIGO / Sonoma State University / A. Simonnet.
  Widely released for press/education use — ⚠️ confirm the exact terms before
  the site goes public.
