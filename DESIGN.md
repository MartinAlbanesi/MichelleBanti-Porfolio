# Design System: Michelle Banti Portfolio

Single-page portfolio for an audiovisual producer. **Dark, warm and personal**: deep burgundy surfaces, one grotesque typeface, large photos, and the IconScout pieces (vinyl, clapper stamp, animated pills, envelope) as personal touches. Sections are full-bleed surfaces that alternate dark and light, so every boundary is a clean full-width cut. Dial: ENERGY 2 / RHYTHM 2 / MOTION 2.

## Color

`@theme static` tokens in `src/styles/global.css` (static so a colour used only from a component `<style>` is always emitted). Palette from the owner.

| Token | Hex | Use |
|---|---|---|
| `ink` | `#400007` Charred Brown | Page base (hero, Hacia dónde voy, footer), MercadoLibre and seminar tiles, end of the Mi recorrido gradient, text on light surfaces |
| `wine` | `#59000F` Saving Light | Middle of the Mi recorrido gradient (starts `#7a1420`); title and highlights in Quién soy; "Ver proyecto" pill |
| `brown` | `#753707` Tostado | Button fills, phone screen gradient, Contacto link hover |
| `gravel` | `#B7896C` Red Gravel | Accent: hero roles, Eter tile, envelope circle, text selection |
| `sand` | `#E3CFC2` Rosa arena | Quién soy background |
| `cream` | `#F0EAE7` Sweet Cream | Text on dark, polaroid frames, badge, Contacto background |

Verified contrast: cream on ink 14.4 / wine 12.3 / brown 7.7; white on brown 9.1 / wine 14.7; ink on sand 11.4, wine on sand 9.8; ink on cream 14.4; gravel text on ink 5.6. **Never cream or white text on gravel (2.6 / 3.1).** Focus ring cream; ink inside `.on-light`.

## Typography

- Bricolage Grotesque variable, self-hosted (`@fontsource-variable/bricolage-grotesque`, ~41 KB latin) for display and body.
- `font-hand`: only "Hola, soy" (cream, like the name) and the animated pills. Segoe Print on Windows; everywhere else Kalam 700, self-hosted (`@fontsource/kalam`, latin only). Never fall back to the generic `cursive` (joined script on phones).
- Hero name uppercase extrabold, up to 10.5rem. `.section-title` 700, `clamp(2.25rem, 6vw, 4.25rem)`, tracking -0.035em, identical in every section.

## Sections

Container `max-w-7xl`, `px-4`/`lg:px-8`, mobile first (md 768, lg 1024).

- **Hero (ink, wine radial glow, lighter `#8a1c28` glow top-right, light grain):** greeting, name, roles (gravel), tagline, LottiePill CTAs (brown, white text). Tall 3:5 portrait (rounded-2xl) with vinyl behind, clapper stamp on the vinyl, and the social phone peeking right (screen gradient clay > brown > wine with a glass highlight, white icons). A blurred production spotlight beam falls from the top-right corner (screen blend) with 22 dust motes inside it. Badge ring text is fitted to the circle by JS after fonts load (font size scaled, never compressed spacing; `xml:space="preserve"` keeps the double spaces around "·").
- **Quién soy (sand, `.on-light`):** ink paragraphs, wine title and bold highlights; polaroid stack (cream frames, tilted, cycles every 3.5 s, pauses on hover/focus).
- **Dónde estoy:** one project per screen in a horizontal carousel; each slide's background is its own circle logo, enlarged and blurred (56px) under a dark left-to-right scrim (fallback colour while loading: BANCA black, teatro ink). Collage of tilted card, perspective wide photo and circle logo; next slide peeks on desktop. "Ver proyecto" sits on the collage corner on lg+, below the collage on mobile/tablet.
- **Mi recorrido (gradient `#7a1420` > wine 45% > ink, so it melts into Hacia dónde voy):** glass text tile + media per stage, alternating on lg, stacked on mobile; 4:5 photos; EterShowcase video carousel with pause (current dot stretches into a pill that fills over the 4 s auto-advance). Stages: MercadoLibre (dark tile 5 + two photos 7), Eter (light tile + video, then three photos), Seminario de producción de stream y podcast (dark tile 5 + the studio photo 16:9 in 7, then three 4:5 photos). Every photo is `.zoomable` and opens the shared lightbox on all screen sizes.
- **Hacia dónde voy (ink):** closing statement before Contacto, title and text only: title left, text right aligned to its baseline on lg, stacked on mobile. Finished courses go to Mi recorrido as a new stage, not here.
- **Contacto (cream, `.on-light`):** section title with the envelope Lottie, ink/25 divider, Email and WhatsApp in two equal columns (icon label, large underlined value that turns brown on hover/focus). Values never wrap: font size follows the column width (`cqi`) so the email fits on one line next to a borderless copy icon (ink at 55%, 3:1 on cream) with live feedback below.

## Components

- Radius: cards, photos, posters, video `rounded-xl`; hero portrait `rounded-2xl`; pills `rounded-full`.
- Glass tiles (Mi recorrido): translucent gradient fill + `backdrop-filter: blur(16px) saturate(1.3)`, 1px light edge, inset top highlight, top-left radial sheen and a deep drop shadow; titles get a soft text-shadow. The light (gravel) tile stays 88–96% opaque so ink text keeps 4.5:1.
- Buttons have white text. `.btn-primary` brown fill and `.btn-ghost` outline both fill cream with ink text on hover. `.btn-ink` (light surfaces): ink outline/text, fills ink with cream text. "Ver proyecto": wine, white text and ring, hover cream with ink text.

## Motion

- Hero vinyl (6 s/turn), badge ring (32 s/turn) and clapper loop continuously from load: owner's decision over the antislop 5 s pause rule.
- Envelope plays to frame 120 (4.8 s), replays when the pointer enters Contacto.
- Hero entrance, phone peek, polaroid cycle, carousel fade.
- Hero spotlight sways ±2° over 9 s with a faint flicker; dust motes fade in and drift over 7–14 s each.
- Mi recorrido photos: on hover (pointer devices) they lift (-8px, scale 1.03, -0.6°) with a shadow and a cream expand badge; on phones each pulses once (scale 1.04) when it first enters the viewport, and sinks to 0.97 while pressed. The lightbox grows from the thumbnail and shrinks back; it opens with the cached thumbnail and swaps to the large file once decoded, so the previous photo never flashes.
- Dónde estoy on mobile/tablet: slides bounce left once (-56px, then -18px) the first time the section is 40% visible, hinting the next project.
- All decorative motion stops under `prefers-reduced-motion`.

## Don'ts

- No cream/white text on gravel; no reduced-opacity text on mid tones.
- No film-strip divider, dashed borders, bento mosaics or eyebrow labels above titles.
- No green, pink, violet, light blue or pastels.
