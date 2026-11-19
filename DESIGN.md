# Design System: Michelle Banti Portfolio

Single-page portfolio for an audiovisual producer. **Dark, warm and personal**: deep burgundy surfaces, one grotesque typeface, large photos, and the IconScout pieces (vinyl, clapper stamp, animated pills, envelope) as personal touches. Sections are full-bleed surfaces that alternate dark and light, so every boundary is a clean full-width cut. Dial: ENERGY 2 / RHYTHM 2 / MOTION 2.

## Color

`@theme static` tokens in `src/styles/global.css` (static so a colour used only from a component `<style>` is always emitted). Palette from the owner.

| Token | Hex | Use |
|---|---|---|
| `ink` | `#400007` Charred Brown | Page base (hero, Hacia dónde voy, teatro slide, footer), MercadoLibre tile, text on light surfaces |
| `wine` | `#59000F` Saving Light | Mi recorrido; title and highlights in Quién soy; "Ver proyecto" pill |
| `brown` | `#753707` Tostado | BANCA slide, button fills, phone screen gradient |
| `gravel` | `#B7896C` Red Gravel | Accent: hero roles, Eter tile, "En curso" chip, envelope circle, text selection |
| `sand` | `#E3CFC2` Rosa arena | Quién soy background |
| `cream` | `#F0EAE7` Sweet Cream | Text on dark, polaroid frames, badge, Contacto background |

Verified contrast: cream on ink 14.4 / wine 12.3 / brown 7.7; white on brown 9.1 / wine 14.7; ink on sand 11.4, wine on sand 9.8; ink on cream 14.4; gravel text on ink 5.6. **Never cream or white text on gravel (2.6 / 3.1).** Focus ring cream; ink inside `.on-light`.

## Typography

- Bricolage Grotesque variable, self-hosted (`@fontsource-variable/bricolage-grotesque`, ~41 KB latin) for display and body.
- `font-hand` (Segoe Print): only "Hola, soy" (cream, like the name) and the animated pills.
- Hero name uppercase extrabold, up to 10.5rem. `.section-title` 700, `clamp(2.25rem, 6vw, 4.25rem)`, tracking -0.035em, identical in every section.

## Sections

Container `max-w-7xl`, `px-4`/`lg:px-8`, mobile first (md 768, lg 1024).

- **Hero (ink, wine radial glow, light grain):** greeting, name, roles (gravel), tagline, LottiePill CTAs (brown, white text). Tall 3:5 portrait (rounded-2xl) with vinyl behind, clapper stamp on the vinyl, and the social phone peeking right (screen gradient clay > brown > wine with a glass highlight, white icons).
- **Quién soy (sand, `.on-light`):** ink paragraphs, wine title and bold highlights; polaroid stack (cream frames, tilted, cycles every 3.5 s, pauses on hover/focus).
- **Dónde estoy:** one project per screen in a horizontal carousel, each slide its own colour (BANCA brown, teatro ink); collage of tilted card, perspective wide photo and circle logo; next slide peeks on desktop. "Ver proyecto" sits on the collage corner on lg+, below the collage on mobile/tablet.
- **Mi recorrido (wine):** text tile + media per stage, alternating on lg (5 + 7 of 12), stacked on mobile; 4:5 photos; EterShowcase video carousel with pause. Its index: the current dot stretches into a pill that fills over the 4 s auto-advance (stays full when stopped).
- **Hacia dónde voy (ink):** each step is status chip + title + text, then its vertical photos in an equal 3:4 grid (2 per row on mobile, 4 on md+). Photos via `photos` (`file` + `alt`) in `content.ts`, from `src/assets/hacia-donde-voy/`; a step without photos shows text only. Steps without content stay commented out in `content.ts`.
- **Contacto (cream, `.on-light`):** section title with the envelope Lottie, ink/25 divider, Email and WhatsApp in two equal columns (icon label, large underlined value; email wraps before the @), `.btn-ink` "Copiar email" with live feedback.

## Components

- Radius: cards, photos, posters, video `rounded-xl`; hero portrait `rounded-2xl`; pills `rounded-full`; chips 0.375rem.
- Buttons have white text. `.btn-primary` brown fill and `.btn-ghost` outline both fill cream with ink text on hover. `.btn-ink` (light surfaces): ink outline/text, fills ink with cream text. "Ver proyecto": wine, white text and ring, hover cream with ink text.
- Status chips: En curso gravel, Próximo cream, Hecho ink with cream outline.

## Motion

- Hero vinyl (6 s/turn), badge ring (32 s/turn) and clapper loop continuously from load: owner's decision over the antislop 5 s pause rule.
- Envelope plays to frame 120 (4.8 s), replays when the pointer enters Contacto.
- Hero entrance, phone peek, polaroid cycle, carousel fade. All decorative motion stops under `prefers-reduced-motion`.

## Don'ts

- No cream/white text on gravel; no reduced-opacity text on mid tones.
- No film-strip divider, dashed borders, bento mosaics or eyebrow labels above titles.
- No green, pink, violet, light blue or pastels.
