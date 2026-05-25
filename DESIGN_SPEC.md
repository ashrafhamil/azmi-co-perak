# Twenty One Cafe — Porting Spec (Serene structure → warm palette)

Implementation-ready spec for a frontend engineer. Build directly from this; no further design input.

## Ground rules

- **Keep the warm palette.** Do NOT adopt Serene's dark theme. Source of truth: `src/app/globals.css` `:root`.
- **Keep the founder story** (Nazirul Naim) and feature it. No Serene equivalent — this is the unique asset.
- **Contact = Instagram**, never WhatsApp. `@twenty0ne.cafe` → `https://www.instagram.com/twenty0ne.cafe/`.
- **No fabricated content.** Reviews are clearly-marked placeholders. Menu stays the 4 existing category cards. Only 3 images exist.
- Reference files cited as `serene styles.css L<from>–<to>`, read from `/Users/GSMBP14001/Documents/serene-coffee-website/`.
- Repo note: `AGENTS.md` warns this is a modified Next.js. This spec is design-level. Do not prescribe Next APIs beyond patterns already in `page.tsx`/`layout.tsx` (`next/image`, `"use client"`, `next/font`). Before adding any new client-component pattern, check `node_modules/next/dist/docs/`.

### Palette mapping (lock once, reuse everywhere)

| Serene var | Role | Twenty One token (globals.css) |
|---|---|---|
| `--bg` `#0f0d0b` | page bg | `--paper` `#faf5ee` |
| `--bg-2` | alternate section bg | `--cream` `#f3e9da` |
| `--panel` | card surface | `--paper` on cream sections; `--cream` on paper sections |
| `--cream` (their text) | primary text | `--espresso` `#241710` |
| `--muted` | muted text | `--bean` `#3a2418` at `/70`–`/60` opacity |
| `--gold` | accent / eyebrow | `--caramel` `#b07b46` |
| `--gold-soft` | hover accent / numerals | `--crema` `#cd9b6c` |
| `--line` | hairline border | `--bean/15` on light; `--cream/15` on dark (Menu) sections |

Dark sections (only Hero overlay + Menu) keep Serene's inverted relationship: text `--cream`, muted `--cream/70`, accent `--crema`.

### Type scale (use `clamp()`, Tailwind utilities mapped via `@theme inline`)

- Hero title: `font-display`, `clamp(3rem, 10vw, 6.5rem)`, line-height `0.95`.
- Section title: `font-display`, `clamp(2rem, 4.5vw, 3.4rem)`, line-height `1.12` (mirrors serene L38–41).
- Section eyebrow: `0.72rem`, `letter-spacing: 0.32em`, uppercase, weight 500, color `--caramel`, `margin-bottom: 1rem` (serene L33–36).
- Body: `1rem`, line-height `1.7`, color `--bean`. Fonts already wired: `--font-display` Playfair, `--font-body` Inter (layout.tsx).
- Border-radius house value: `3px` square-ish like Serene (their cards/imgs use `3px`; buttons `2px`). Current site uses `rounded-2xl` — **change to the tighter Serene radius** for the editorial feel. Define a Tailwind arbitrary `rounded-[3px]` (cards/images) and `rounded-[2px]` (buttons). FAB stays `rounded-full`.

### globals.css additions (keyframes live here; everything else is Tailwind)

Add to `globals.css`:

- `@keyframes marquee { to { transform: translateX(-50%) } }` (serene L155 `scroll`).
- `@keyframes reviews-scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }` (serene L378).
- `@keyframes slowzoom { to { transform: scale(1.12) } }` (serene L108) — Hero image idle zoom.
- `@keyframes bob { 50% { transform: translate(-50%, 8px) } }` (serene L141) — scroll cue.
- `.marquee-track { animation: marquee 28s linear infinite }`
- `.reviews-track { animation: reviews-scroll 60s linear infinite }`
- `.reviews-slider:hover .reviews-track { animation-play-state: paused }` (serene L373).
- `@media (prefers-reduced-motion: reduce) { .reviews-track, .marquee-track { animation: none } .reviews-track { transform: none } }` (serene L379). `Reveal.tsx` already respects reduced-motion — no change.
- Keep existing `.grain` + `.font-display` rules.

`Reveal.tsx` is reused unchanged for all `reveal` behaviors (serene L427–429 equivalent).

---

## 1. Nav

Maps to serene `.nav` L60–99.

- **Changes vs current:** add a brand mark (circle monogram) left of wordmark; expand links; add scroll-state shrink/blur; add working mobile hamburger (see §12). Keep `sticky top-0 z-50`.
- **Brand:** circular mark `38px`, `border: 1px solid --caramel`, color `--caramel`, `rounded-full`, grid-centered glyph `font-display` `1.2rem` weight 600 — content `21`. Beside it: `Twenty One` `font-display` `1.3rem` weight 600 with sub-label `MERU · IPOH` `0.6rem` `letter-spacing 0.28em` uppercase `--bean/60` (serene L73–86).
- **Links:** Story, Menu, The Space, Reviews, Visit. `0.82rem`, `letter-spacing 0.12em`, uppercase, `--espresso` at 85% opacity → 100% + `--crema`… on light bg use `--caramel` on hover (serene L88–92). Gap `2.2rem`.
- **CTA:** replace "Find us"-to-Maps with **Instagram CTA**: text `@twenty0ne.cafe`, `border: 1px solid --caramel`, color `--caramel`, `rounded-[2px]`, `padding .6rem 1.3rem`; hover fills `--caramel` with `--paper` text (serene `.nav__cta` L93–97). Opens `INSTAGRAM_URL` in new tab.
- **Type/spacing:** `nav__inner` max-width matches page `max-w-6xl`, `px-6`. Default vertical pad `1.4rem`; scrolled `0.85rem` (see §11).

## 2. Hero

Maps to serene `.hero` L101–141.

- **Changes vs current:** keep `cafe.jpg` full-bleed via `next/image fill`. Add idle slow-zoom on the image wrapper (`animation: slowzoom 20s ease-in-out infinite alternate`, serene L106–108). Keep dark overlay but tune to Serene's two-stop gradient: `linear-gradient(180deg, rgba(36,23,16,.55) 0%, rgba(36,23,16,.55) 40%, rgba(36,23,16,.92) 100%)` using `--espresso` rgb (serene L109–112). Center the content like Serene (currently bottom-left) — `min-h-[100vh] min-h-[640px]`, grid place-items center, text-center.
- **Content order:** eyebrow → title → sub → rating → actions → hours; plus bottom scroll cue `▾` with `bob` animation (serene L136–141).
- **Eyebrow:** `Meru · Ipoh · Perak`, `0.78rem`, `letter-spacing 0.42em`, uppercase, color `--crema`.
- **Title:** `Twenty One Cafe`, hero clamp above, color `--cream`.
- **Sub:** existing copy, `clamp(1rem, 2vw, 1.25rem)`, `--cream/88`.
- **Rating:** stars in `--crema` + text `4.8 · 23 Google reviews` `--cream/70` (real aggregate, links to `MAPS_URL`). Reuse `RatingBadge` styling on dark.
- **Actions:** primary `See the menu` → solid `--caramel` bg, `--espresso` text, `rounded-[2px]`, `padding 1rem 2.1rem`, uppercase `0.8rem` `letter-spacing .16em`, hover `--crema` + `translateY(-2px)` (serene `.btn--solid` L53–54). Secondary `@twenty0ne.cafe` → ghost: `border 1px --cream/40`, hover border `--cream` (serene `.btn--ghost` L55–56), opens Instagram.
- **Hours:** `Open daily · 4 PM – 12 AM`, `0.78rem`, `letter-spacing .26em`, uppercase, `--cream/60`.

## 3. Marquee

Maps to serene `.marquee` L143–155. **New section** (not in current page).

- Place directly after Hero, before Story.
- Strip: `background: --caramel`, text `--espresso`, `overflow-hidden`, `padding .9rem 0`, `aria-hidden="true"`.
- Track: `flex`, `gap 2.5rem`, `white-space:nowrap`, `width:max-content`, class `marquee-track` (28s linear loop).
- Each token: `font-display`, `1.15rem`, weight 600, `letter-spacing .04em`. Separator `•` between tokens.
- **Exact tokens (render this array TWICE consecutively in JSX so the `-50%` loop is seamless):**
  `Specialty Coffee` · `Fresh Pastry` · `Late-Night Food` · `Shareable Snacks` · `Open Daily 4PM–12AM` · `Meru Impian` · `Jersey 21`
- Reduced-motion: `marquee-track` animation disabled by the global media query (static, first copy visible).

## 4. Story (the founder asset — polish, don't cut)

Maps to serene `.about` L157–186; add stats row L179–186.

- **Changes vs current:** keep all founder copy, the pull-quote, and the timeline. Restyle to Serene's two-image overlap composition + add a stats row. Tighten image radius to `rounded-[3px]`.
- **Section frame:** `bg-paper`, `py-24 sm:py-32`, `max-w-6xl`, `px-6`. Eyebrow `Our story` `--caramel`; title `From the pitch to the pour`, left-aligned (serene L177–178).
- **Image composition (serene L163–175):** replace the equal 2-up grid with the overlapped pair:
  - Container `position:relative; height:520px` (`420px` under 900px).
  - Image A `football.jpg`: `70%` wide × `75%` tall, top-left, `box-shadow: 0 30px 60px rgba(36,23,16,.35)`.
  - Image B `barista.jpg`: `55%` wide × `60%` tall, bottom-right, `border: 6px solid --paper` (serene L173 uses bg color as the cut — use `--paper` here), overlapping A.
  - Each wrapped in `Reveal` (B with `delay={120}`).
- **Text column:** existing 3 paragraphs, `--bean`, `max-width: 46ch`. Keep the bold spans.
- **Pull-quote:** keep existing blockquote; restyle to Serene review-quote feel — `font-display`, italic, `1.7rem`, `--espresso`, left border `2px --caramel`, `pl-6`. Footer attribution `0.85rem` non-italic `--bean/70`.
- **Stats row (new, serene L179–186):** flex row, `gap 2.5rem`, `margin-top 2.5rem`, `padding-top 2rem`, `border-top 1px --bean/15`. Use **only existing facts** — three cells:
  - `2018` / `Malaysia Cup winner`
  - `21` / `Career jersey number`
  - `Jan 2026` / `Opened in Meru`
  - `strong`: `font-display`, `1.9rem`, color `--crema`. `span`: `0.72rem`, `letter-spacing .18em`, uppercase, `--bean/60`.
- **Timeline:** keep the existing 5-cell `ol`. Restyle cells: bg `--paper`, hairline grid via `gap-px` on `--bean/15`, year `--caramel` `font-display`, text `--bean/80`. Radius `rounded-[3px]`.

## 5. Menu

Maps to serene `.menu` + `.menu__card` L188–217 (use the card grid, NOT the full transcribed `menu__cats`).

- **Changes vs current:** keep the 4 category objects (Coffee/Pastry/Food/Snacks) and the Instagram note. Keep this as a **dark section** (`bg-espresso`, `.grain`) for rhythm contrast — this is allowed (Hero overlay + Menu are the only dark blocks). Restyle cards to Serene card spec.
- **Head:** eyebrow `What we serve` color `--crema`; title `On the menu` `--cream`; optional lead `Coffee, pastry, food & snacks — a proper bite any time of night.` `--cream/70`, centered (serene `.section__head` L45 + L42–44).
- **Cards (serene L194–210):** 4-up grid `sm:grid-cols-2 lg:grid-cols-4`, `gap 2.5rem`. Each card: `bg-cream/[0.04]`, `border 1px --cream/15`, `padding 2.5rem`, `rounded-[3px]`, `transition .35s`; hover `border-color rgba(176,123,70,.4)` (caramel/.4) + `translateY(-4px)`. Title `font-display`, `1.7rem`, weight 600, color `--crema`, `padding-bottom 1rem`, `border-bottom 1px --cream/15`. Desc `0.98rem`, `--cream/70`.
- **Note:** keep existing line, `--cream/60`, `0.78rem`, centered (serene `.menu__note` L217); Instagram link `--crema` underlined.

## 6. Gallery / The Space

Maps to serene `.gallery` L264–280 (grid + hover de-saturate). Title borrows Serene's "The Space" eyebrow; this **replaces no current section — it is new**, inserted between Menu and Reviews.

- **Head:** eyebrow `The Space`, title `Made for hanging out`, centered.
- **Grid (serene L266–273):** `max-w-6xl`, `grid-cols-3`, `grid-auto-rows: 240px`, `gap 1rem`. Under 900px → 2 cols; under 680px → 1 col, rows `220px`, no row-spans.
- **Only 3 images exist — reuse with distinct crops via `next/image fill` + `object-cover` + per-cell `object-position` / aspect.** 6 cells:
  1. `cafe.jpg` — `object-position: center`, `grid-row: span 2` (tall hero crop).
  2. `barista.jpg` — `object-position: center top` (hands/pour crop).
  3. `football.jpg` — `object-position: center` (portrait).
  4. `cafe.jpg` — `object-position: right` (wide interior, different region).
  5. `barista.jpg` — `object-position: center`, `grid-row: span 2` (full figure).
  6. `football.jpg` — `object-position: top` (jersey/number crop).
- **Treatment (serene L271–274):** default `filter: grayscale(.25) brightness(.85)`, `rounded-[3px]`, `transition .5s`; hover `grayscale(0) brightness(1) scale(1.02)`. Each cell wrapped in `Reveal`. Do not reference any path other than `/images/cafe.jpg`, `/images/barista.jpg`, `/images/football.jpg`.

## 7. Reviews slider

Maps to serene reviews bar L348–362 + slider L364–381 + JS clone L32–38. **New section.**

- **Head:** eyebrow `Reviews`, title `Loved in Meru`, centered.
- **Aggregate bar (serene `.reviews__bar` L348–362):** flex row, `bg-cream`, `border 1px --bean/15`, `rounded-[3px]`, `padding 1.5rem 2.4rem`, `gap 1.8rem`. Score `4.8` `font-display` `3rem` `--crema`. Meta: stars `--caramel` `1.15rem`; text `Rated by **23** guests on Google` `--bean/70` `0.85rem`. Under 680px → column, centered.
- **Caveat line (mandatory, exact text):** directly under the head or the bar, centered, `0.78rem`, `--bean/60`:
  `Sample reviews — to be replaced with verbatim Google reviews before public launch.`
- **Slider (serene L364–381):** outer `reviews-slider` class, `overflow-hidden`, edge fade mask `mask-image: linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)` (both `-webkit-mask-image` and `mask-image`). Inner `reviews-track` class: `flex`, `align-items stretch`, `gap 1.6rem`, `width max-content`, `animation reviews-scroll 60s linear infinite`.
- **Cards:** width `min(360px, 80vw)`, `flex:none`, column. Surface `bg-paper`, `border 1px --bean/15`, `padding 2.4rem`, `rounded-[3px]`. Stars `--caramel` `1rem`. Quote `font-display`, italic, `1.3rem`, `--espresso`, `flex:1`. Caption weight 500 `--espresso` `0.85rem` with neutral sub `--bean/60`.
- **Placeholder content — 5 cards. Do NOT name people or label "Google review".** Each `figcaption`: `Guest review · placeholder`. Suggested neutral filler text (engineer may keep verbatim — these are explicitly placeholder, not attributed):
  1. ★★★★★ — "Placeholder review copy — cozy late-night spot, friendly service. Replace with a verbatim Google review before launch."
  2. ★★★★★ — "Placeholder review copy — coffee and food were solid; great for hanging out. Replace before launch."
  3. ★★★★☆ — "Placeholder review copy — nice atmosphere, will come back. Replace with a real Google review before launch."
  4. ★★★★★ — "Placeholder review copy — loved the story behind the cafe. Replace before launch."
  5. ★★★★★ — "Placeholder review copy — good prices, chill vibe in Meru. Replace before launch."
- **Seamless loop:** render the 5-card array **TWICE in a row inside `reviews-track`** in JSX (no JS clone needed — Serene does it via script; we do it statically). The `-50%` keyframe lands exactly on the start of the second copy.
- **Interaction:** `:hover` on `reviews-slider` pauses (CSS rule in globals.css). `prefers-reduced-motion: reduce` disables the animation (global media query) — track stays static; acceptable since it overflows with the edge mask. Optionally add `overflow-x:auto` fallback so reduced-motion users can scroll manually.
- **Footer line (serene L381):** under the slider, `--bean/60` `0.78rem`, centered: `See all 23 ratings on the Google listing.` linking `MAPS_URL`.

## 8. Visit

Maps to serene `.visit` L383–402.

- **Changes vs current:** keep address, hours, map iframe, Maps actions. Convert section to alternating bg `--cream` (serene `.visit` uses `--bg-2`). Add a structured info block layout + an Instagram action. Tighten map radius.
- **Layout (serene L385–388):** `grid lg:grid-cols-[1fr_1.1fr]`, `gap 4rem`, `items-stretch`.
- **Info column:** eyebrow `Come by` left-aligned `--caramel`; title `Visit us` left-aligned. Then labeled blocks (serene `.visit__block` L390–396) — each: label `0.72rem` `letter-spacing .22em` uppercase `--caramel`; value `--bean` `0.98rem`:
  - **Hours** — `Open daily · 4:00 PM – 12:00 AM`
  - **Location** — existing `ADDRESS`
  - **Follow** — `@twenty0ne.cafe` → `INSTAGRAM_URL`
- **Actions (serene `.visit__actions` L397):** `Get directions` solid `--caramel`/`--espresso` → `MAPS_URL`; `Read 23 reviews on Google` ghost (`border 1px --bean/30`, hover `--espresso`) → `MAPS_URL`; `@twenty0ne.cafe` ghost → Instagram. Buttons `rounded-[2px]`, uppercase, Serene `.btn` metrics.
- **Map (serene L398–402):** `min-height 460px`, `rounded-[3px]`, `border 1px --bean/15`, keep existing `MAP_EMBED`. Do **not** apply Serene's `invert/hue-rotate` filter (that was for dark theme); optionally `filter: grayscale(.15)` only.

## 9. Footer

Maps to serene `.footer` L404–425.

- **Changes vs current:** keep `bg-espresso` (already dark, matches Serene's near-black). Expand from the current 2-row strip to Serene's brand + 3-column layout, then a bottom bar.
- **Brand block (serene L410–412):** the `21` circle mark (reuse Nav mark, `--crema` on dark) + `Twenty One Cafe` `font-display` `1.3rem` `--cream` and sub `Coffee & Dining · Meru, Ipoh` `0.78rem` `--cream/60`.
- **Columns (serene L413–419):** 3 cols, headers `0.7rem` `letter-spacing .2em` uppercase `--crema`; body `0.88rem` `--cream/60` line-height `1.9`:
  - **Visit** — `ADDRESS`
  - **Hours** — `Open daily` / `4:00 PM – 12:00 AM`
  - **Contact** — `@twenty0ne.cafe` → Instagram, `Directions` → Maps
- **Bottom bar (serene L420–425):** `border-top 1px --cream/10`, flex space-between, `0.75rem` `--cream/40`: left `© {year} Twenty One Cafe.` + keep the existing preview/photo-credit disclaimer line; right `Meru Impian, Ipoh`.
- Responsive: stack columns < 680px, center bottom bar (serene L451–453).

## 10. Instagram FAB

Maps to serene `.wa-fab` L461–470 (position/shape/behavior) — **but Instagram, not WhatsApp**.

- Server-rendered `<a>` placed once at the end of the page tree (after `<Footer/>`), no JS.
- `href = INSTAGRAM_URL`, `target="_blank"`, `rel="noopener noreferrer"`, `aria-label="Open Instagram — @twenty0ne.cafe"`.
- Position: `fixed; right: 1.4rem; bottom: 1.4rem; z-index: 120; width: 58px; height: 58px; border-radius: 50%; display:grid; place-items:center; transition: .3s ease`.
- **Background (exact):** `linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)`. Icon white.
- Shadow: `0 12px 30px rgba(220,39,67,.35)`; hover `translateY(-3px)` + `0 16px 36px rgba(220,39,67,.5)`.
- Icon: inline Instagram glyph SVG (camera outline), `viewBox="0 0 24 24"`, `width/height 26`, `fill: none; stroke: #fff; stroke-width 2` (rounded-square + circle + dot). Do not use the WhatsApp path from serene L433.
- Do not collide with the reduced-motion rules; FAB has no looping animation.

## 11. Sticky-nav scroll state

Maps to serene `.nav.scrolled` L65–68 + script.js L4–7.

- Behavior: toggle a "scrolled" state when `window.scrollY > 40`.
- **Default (top):** transparent/`bg-paper/0`, vertical padding `1.4rem`, no border.
- **Scrolled:** `bg-paper/92` (`rgba(250,245,238,.92)`), `backdrop-blur` (`backdrop-filter: blur(12px)`), vertical padding `0.85rem`, `border-bottom 1px --bean/15`, subtle `shadow-sm`. Transition `0.4s ease`.
- Implementation: this is client-only state. Fold it into the same client component that owns the mobile toggle (§12) — a single `components/SiteNav.tsx` (or `MobileNav.tsx`) `"use client"` component holding both `scrolled` and `menuOpen`. Use a passive `scroll` listener; clean up on unmount. Server `Nav` may render static markup and delegate the interactive shell to this client component, or the whole nav becomes the client component (simpler — recommended given it's small).

## 12. Mobile nav (currently broken — must fix)

Maps to serene mobile nav L441–456 + script.js L9–15. **Current bug:** links are `hidden sm:flex` with no toggle → unreachable on mobile.

- Add a hamburger button, hidden ≥ `680px`, shown below: 3 bars `24px × 2px` `--espresso`, `gap 5px`, `aria-label="Toggle menu"`, `aria-expanded` bound to state, `z-index 101`.
- Drawer (serene L442–448): `position: fixed; inset: 0 0 0 auto; width: 78%; max-width: 320px; background: --cream; flex-direction: column; justify-content: center; gap: 2.2rem; transform: translateX(100%); transition: .4s; border-left: 1px solid --bean/15`. Open state `transform: none`.
- Links: same 5 + Instagram CTA as desktop §1; `--espresso`, larger tap targets.
- Closes on any link click (serene script L13–15) and on hamburger re-tap. Optional: backdrop scrim + `Esc` to close + lock body scroll while open (nice-to-have, not required).
- Implementation: new `"use client"` component (combine with §11 as `components/SiteNav.tsx`). Keep it small and focused; the rest of `page.tsx` stays server components. Reuse existing `Reveal.tsx` as-is — do not rewrite it. Before introducing the client component, confirm the `"use client"` + event-listener pattern against `node_modules/next/dist/docs/` per repo `AGENTS.md`.

---

## Build order (suggested)

1. globals.css: keyframes + marquee/reviews helper classes + reduced-motion media query + `rounded-[3px]/[2px]` usage.
2. `components/SiteNav.tsx` (client): scroll state + mobile drawer (§1, §11, §12).
3. Hero overlay + slow-zoom + centered layout (§2).
4. Marquee component (§3).
5. Restyle Story with overlap images + stats row (§4).
6. Restyle Menu cards (§5).
7. New Gallery section with 3-image reuse (§6).
8. New Reviews slider, array rendered twice, placeholder cards + caveat (§7).
9. Restyle Visit + Footer (§8, §9).
10. Instagram FAB (§10).
11. Verify: reduced-motion stops marquee + slider; mobile drawer reachable; FAB + all CTAs open Instagram; no nonexistent image paths; no invented review attribution.
