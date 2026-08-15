"""Hand-author the Open Graph card in the new violet/gold palette.

next/og can't be used: it needs a runtime, and the site is a static export.
"""
from PIL import Image, ImageDraw, ImageFont

W, H = 1600, 840
GRAD_FROM = (74, 51, 132)   # #4a3384
GRAD_TO = (142, 60, 112)    # #8e3c70
BASE = (36, 27, 61)         # #241b3d
GOLD = (201, 169, 97)       # #c9a961
INK = (255, 255, 255)
MUTED = (215, 208, 232)

img = Image.new("RGB", (W, H), BASE)
px = img.load()

# Diagonal gradient, matching .band--gradient's 135deg.
for y in range(H):
    for x in range(0, W, 4):
        t = (x / W + y / H) / 2
        r = int(GRAD_FROM[0] + (GRAD_TO[0] - GRAD_FROM[0]) * t)
        g = int(GRAD_FROM[1] + (GRAD_TO[1] - GRAD_FROM[1]) * t)
        b = int(GRAD_FROM[2] + (GRAD_TO[2] - GRAD_FROM[2]) * t)
        for dx in range(4):
            if x + dx < W:
                px[x + dx, y] = (r, g, b)

draw = ImageDraw.Draw(img)


def font(path_candidates, size):
    for p in path_candidates:
        try:
            return ImageFont.truetype(p, size)
        except OSError:
            continue
    return ImageFont.load_default()


# Agdasima isn't installed system-wide; a condensed grotesque is the closest
# stand-in, and the card only has to read as the same family of thing.
DISPLAY = font(
    [
        "/System/Library/Fonts/Supplemental/Impact.ttf",
        "/System/Library/Fonts/HelveticaNeue.ttc",
        "/System/Library/Fonts/Helvetica.ttc",
    ],
    132,
)
LABEL = font(["/System/Library/Fonts/Supplemental/Arial.ttf"], 32)
BODY = font(["/System/Library/Fonts/Supplemental/Arial.ttf"], 40)

MARGIN = 110

# Eyebrow
draw.text((MARGIN, 210), "E A R L Y - U N I V E R S E   C O S M O L O G Y", font=LABEL, fill=GOLD)

# Name
draw.text((MARGIN, 268), "PUSHTY SHRIMANKAR", font=DISPLAY, fill=INK)

# Gradient bar under the name (gold → white, as on the gradient band)
bar_y = 432
for i in range(150):
    t = i / 150
    r = int(GOLD[0] + (255 - GOLD[0]) * t)
    g = int(GOLD[1] + (255 - GOLD[1]) * t)
    b = int(GOLD[2] + (255 - GOLD[2]) * t)
    draw.rectangle([MARGIN + i, bar_y, MARGIN + i + 1, bar_y + 7], fill=(r, g, b))

# Standfirst
draw.text(
    (MARGIN, 492),
    "Gravitational-wave signatures of",
    font=BODY,
    fill=MUTED,
)
draw.text((MARGIN, 546), "primordial magnetic fields", font=BODY, fill=MUTED)

# Footer line
draw.text(
    (MARGIN, 668),
    "M.Sc. Physics, VIT Vellore   ·   Visiting Student, Indian Institute of Astrophysics",
    font=LABEL,
    fill=(200, 190, 220),
)

img.save("/Users/kushagrapandya/Desktop/pushty_portfolio/public/og.png", optimize=True)
print("wrote public/og.png", img.size)
