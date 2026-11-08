# Design System: Michelle Banti Portfolio

Single-page portfolio for an audiovisual producer. Direction: **scrapbook / film set**. Warm, tactile, handmade, with hard offset shadows, skewed accents and film motifs. Minimal ornament: no dashed borders, no tape, no glow.

## 1. Color

Defined as `@theme` tokens in `src/styles/global.css`.

| Token | Hex | Role |
|---|---|---|
| `paper` | `#DDD8BA` | Page background (with light SVG grain), text on dark |
| `cream` | `#F1EDD6` | Light cards, media frames, "Quién soy" and "Mi recorrido" section background |
| `terracotta` | `#8E4F36` | Hero/section brand surface |
| `terracotta-dark` | `#7a3f29` | Dark cards, secondary text accents |
| `rust` | `#A0471C` | Accent: focus ring, play button, skewed bars, vinyl label |
| `ink` | `#231a14` | Body text, footer, hard shadows (at 40% alpha) |

Rules:
- Dark surfaces (`terracotta*`, `ink`) use `paper` text. Light surfaces use `ink` text.
- `rust` does not reach 3:1 on dark backgrounds: use `paper` for focus rings there (`.on-dark`).
- Photo frames match the color of the adjacent text card.

## 2. Typography

System fonts only (0 KB).

| Role | Stack | Use |
|---|---|---|
| `font-display` | Avenir Next, Trebuchet MS, Segoe UI, system-ui | Headings, nav, buttons, labels. Weight 700-800, often uppercase |
| `font-body` | Charter, Sitka Text, Cambria, Georgia | Paragraphs (serif, 1.125rem, line-height 1.625) |
| `font-hand` | Segoe Print, Bradley Hand, Comic Sans MS | Hero greeting, nav accents, captions. Sparingly |

Scale:
- Hero name: uppercase, extrabold, `leading-[0.86]`, fluid `clamp()` up to 9.5rem.
- Section H2: `text-3xl/4xl` (Dónde estoy, Mi recorrido), `text-4xl/5xl` (Quién soy, Hacia dónde voy), `text-5xl/6xl` (Escribime).
- Card title: 2.25rem mobile, 3rem md+, uppercase, 800, `line-height 1.05`.
- `text-wrap: balance` on headings, `pretty` on paragraphs.
- Root font size scales up at 1536px (112.5%) and 1920px (125%).

## 3. Signature elements

- **Hard offset shadow:** `6px 7px 0 rgb(35 26 20 / .4)` (cards), `7px 8px 0` (Dónde estoy). No blur.
- **Skewed accent bar:** `skewX(-20deg)`, 3.5rem x 0.35rem under card titles, color `--accent` (`paper` on dark cards, `rust` on light). Also a small `h-3 w-1.5` skewed rust marker beside hero roles and nav.
- **Polaroid tilt:** photos rotated slightly (`--tilt`, e.g. -3deg).
- **Vinyl:** hero decoration behind the portrait (grooves, conic highlights, rust label with paper hole) plus a rotating dashed ring.
- **Film motifs:** `FilmStrip` divider, `Clapperboard` icon.
- **Grain:** tiny repeated SVG noise tile on `body`, never a full-screen filter.

## 4. Layout

- Container: `max-w-5xl`, `px-4`. Mobile first; breakpoints md 768, lg 1024.
- Vertical rhythm is tight: sections use `py-6 md:py-8` to `py-10 md:py-14`.
- **Bento grid** (Mi recorrido): 1 column on mobile (text then media), 12 columns on md+. Row 1: 7 (text) + 5 (photos). Row 2: 5 (text) + 7 (video carousel). Gap 1.5rem / 1.75rem.
- **Dónde estoy:** two square cards. Title and Instagram icon sit in a bottom overlay (`from-ink/90 via-ink/60 to-transparent`).
- Sticky nav, compact bar 4rem; on small screens the resting index stacks the 5 pills.
- Landscape phones: custom `land` variant (max-height 540px).

## 5. Components

- **Tile:** padding 1.25rem (1.5rem md), hard shadow. Variants: `tile-dark` (terracotta-dark / paper), `tile-light` (cream / ink), `tile-media` and `frame` (padding 0.75rem, photo-only).
- **CastCrossfade:** CSS-only crossfade of 2 or 3 photos (6 s or 9 s cycle), first photo shown under reduced motion. Per-image `object-position`.
- **EterShowcase carousel:** scroll-snap, hidden scrollbar, YouTube facade (thumbnail plus rust round play button, `youtube-nocookie` iframe on click). Autoplay every 4 s; pauses on playing video, mouse hover, off-screen, hidden tab or reduced motion. Inactive slides fade and scale to .94 (0.5 s). Controls: borderless chevrons at both ends of the dots, 44px targets, 60% opacity (100% on hover/focus). Dots are outlined circles, filled when current.
- **Instagram link (`.ig`):** icon only, opacity .8, hover scale 1.18, rotate -6deg and soft glow.
- **Hero social links:** plain text/icon, no glow.
- **PillCta:** rounded-full paper pill with trailing round arrow, `min-h-14`.
- **Footer:** `ink` background, paper text, centered.

## 6. Motion

- Subtle only: hero entrance (`hero-in`), crossfades, carousel fade/scale, hover lift `-translate-y-0.5`.
- Everything is wrapped in `prefers-reduced-motion: no-preference`; reduced motion shows static first frames and disables autoplay and smooth scroll.

## 7. Accessibility

- Focus: 3px `rust` outline, offset 3px; `paper` on dark.
- Touch targets 44px or more; `touch-action: manipulation`.
- Carousel: `role="region"`, `aria-roledescription`, slide groups labeled "n de N", `inert` on inactive slides, `aria-live` switched off during autoplay.
- Decorative images use `alt=""`; photo groups use `role="img"` with a descriptive `aria-label`.
- Scroll margin accounts for the sticky nav and safe-area inset.

## 8. Don'ts

- No dashed card borders, no tape, no texture overlays on cards, no big outline years, no glow on social links.
- No external fonts or heavy full-screen filters.
- Don't put UI labels above card titles in "Dónde estoy".
