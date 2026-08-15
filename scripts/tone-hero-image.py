"""Tone a hero background into the site's band gradient.

Hero images from NASA/ESA are mostly high-key — bright subjects on white — and
dropping one straight into a dark violet band means either a scrim heavy enough
to hide the picture, or text that fails contrast. Multiplying the image through
the same violet→magenta gradient the bands use solves both at once: multiply
only ever darkens, so no pixel in the result is brighter than a plain gradient
band, and the picture ends up in the palette instead of sitting on top of it.

Structure, colour ordering and texture are preserved — nothing is inverted or
remapped — so the image still reads the way the original does. Record every
image and its alterations in public/images/CREDITS.md.

    python3 -m venv venv && ./venv/bin/pip install pillow
    ./venv/bin/python scripts/tone-hero-image.py in.jpg public/images/out.webp

Requires Pillow; it is not a project dependency because this is a one-off bake,
not part of the build.
"""

import sys

from PIL import Image, ImageChops

GRAD_FROM = (74, 51, 132)  # #4a3384
GRAD_TO = (142, 60, 112)  # #8e3c70
TARGET_WIDTH = 1800


def main(src: str, dst: str) -> None:
    im = Image.open(src).convert("RGB")
    im = im.resize(
        (TARGET_WIDTH, round(TARGET_WIDTH * im.height / im.width)), Image.LANCZOS
    )
    width, height = im.size

    grad = Image.new("RGB", (width, height))
    px = grad.load()
    for y in range(height):
        for x in range(0, width, 2):
            t = (x / width + y / height) / 2  # 135°, matching .band--gradient
            colour = tuple(
                int(GRAD_FROM[i] + (GRAD_TO[i] - GRAD_FROM[i]) * t) for i in range(3)
            )
            px[x, y] = colour
            if x + 1 < width:
                px[x + 1, y] = colour

    out = ImageChops.multiply(im, grad)
    out.save(dst, "WEBP", quality=84, method=6)

    # The whole contrast argument rests on this bound, so assert it.
    peak = tuple(channel[1] for channel in out.getextrema())
    ceiling = tuple(max(GRAD_FROM[i], GRAD_TO[i]) for i in range(3))
    assert all(peak[i] <= ceiling[i] for i in range(3)), (peak, ceiling)
    print(f"wrote {dst} {out.size}, peak {peak} within gradient ceiling {ceiling}")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    main(sys.argv[1], sys.argv[2])
