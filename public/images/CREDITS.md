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
