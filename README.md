# LOOP Design System · v3 Precisione

Tokens, components and a homepage UI kit for **LOOP** (Loop S.R.L.), an Italian performance marketing agency based in Rome and working full remote. LOOP covers strategy, paid social (Meta, TikTok), search and shopping (Google Ads, Performance Max), and CRM and marketing automation (Klaviyo).

**Who we are** (source: "Presentazione deck Loop", the reference for every claim):
- *Siamo l'azienda del marketing profit-driven.* We start from the business numbers and build the marketing system that makes the company grow: strategy, vertical skills, proactivity, proprietary technology and frameworks.
- **Loop in cifre:** nearly €40M invested in advertising in 2025 (about €28M Meta, €10M Google, €1.5M TikTok). Founded in 2017. 50+ professionals, full remote across Europe. Multilingual, multi-country and multi-currency projects in [X] countries. Expected growth of 20% in 2026.
- **Levers:** Acquisizione, Conversione, Retention, Dati, Strategia e Advisory. Only the levers a project needs are activated.
- **Partners:** Google Premier Partner 2026 (about 3% of Google Partners per country), Meta Business Partner, TikTok Marketing Partner, Klaviyo Partner · Platinum Master.
- **Clients:** Alessi, Seletti, Lastminute.com, Moby, Harmont & Blaine, Bottega Verde, Würth, Cisalfa, Fanatics, Laika, Stihl, LuisaViaRoma, plus NDA projects in European apparel and retail.
- **Differentiators:** start from objectives, not channels. Profit-driven measurement (revenue, margin and cash, acquisition cost, customer lifetime value). A single senior lead (Digital Strategist Senior) on every project. Fewer clients, followed in more depth. Entrepreneurs and investors themselves.
- **Proprietary:** the frameworks C.O.R.E. (Dati, Conversione, Ottimizzazione, Retention, Espansione: finds the bottleneck) and R.E.A.C.H. (Rilevanza, Efficienza, Accessibilità, Connessione, Hype: readiness to scale), created by Francesco Agostinis. Also in-house reporting, tracking and landing-page technology (R&D led by Simone Magazzù).
- **Come lavoriamo:** Capiamo l'azienda, Troviamo il blocco, Stabiliamo le priorità, Eseguiamo, Misuriamo, Impariamo e iteriamo.
- **People:** Francesco Agostinis, Lorenzo Tombari, Simone Magazzù (Managing Partners); Elisabetta Gallucci (Head of Performance), Gabriele Agostinis (Head of Creative), Felice Carotenuto (Head of Tracking).
- **Never invent** claims, figures, slogans or methods beyond this list. Unknowns go in `[brackets]`.

**Direction.** "E · Precisione". Inter for text and headings, Geist Mono for figures and data. Navy leads; blue and teal from the logo are active brand colours,.

---

## Sources
- `uploads/LOOP_UI Guidelines.pdf` — original brand sheet (logo, palette, "Spigoli / Rotondità", buttons, inputs).
- `uploads/logo-loop-{color,b,w}.{svg,png,pdf}` — official logos. Real gradient: `#1A2980 → #26D0CE`.
- loopsrl.agency — services, tone, public figures (the only figure used is +130% ROAS).
- Client list and partners supplied by the brand owner (v3 brief).

## Index
```
README.md                 this file
SKILL.md                  agent skill manifest
styles.css                entry: imports colors_and_type.css + components.css
colors_and_type.css       ALL tokens + base + semantic type roles (the only file with raw values)
components.css            component styles (lp- prefix), tokens only
components/<group>/       JSX components + .d.ts + one @dsCard per group
preview/                  foundation cards (colours, contrast, type, spacing, radii, depth, logo, signature)
assets/logo-loop-*.svg    official logos
assets/clients/           12 client logos (PNG, black on white, 1200×630 with padding)
assets/partners/          official partner badges
assets/icons/             30 icons + sprite.svg + icons.json
templates/                email, whitepaper (A4), company-presentation, slidedeck
thumbnail.html            project tile
```

## Components
Namespace: `window.LOOPDesignSystem_29467e`. Load `_ds_bundle.js` after React 18, plus `styles.css`.

| Component | File | States / notes |
| --- | --- | --- |
| Button | components/button | primary, secondary, link; md / sm; hover, focus-visible, active, disabled, loading; on-navy variant via `.loop-on-navy` ancestor |
| Input, Textarea, Select | components/fields | label, required marker, help, error (aria-invalid + aria-describedby), hover, focus, disabled |
| ChoiceChips | components/chips | single = radiogroup with arrow keys; multi = aria-pressed toggles |
| FilterChips | components/chips | aria-pressed, optional counts |
| Tabs | components/disclosure | ARIA tabs, arrow/Home/End, roving tabindex |
| Accordion | components/disclosure | aria-expanded / aria-controls, heading level prop |
| Stat | components/data | value, label, period, baseline, channels, markets; missing fields render as [placeholders] |
| CaseCard | components/data | brand chip on the creative, sector, one sentence, optional single result, levers; featured = navy horizontal. No dates |
| CaseRow | components/data | expandable row with the same metadata |
| WorkFrame | components/data | client-work frame: feed 4:5, story 9:16, email 3:5, dashboard 16:10, wide 16:9; optional signature corner |
| ClientLogoWall | components/brand | client logos from `assets/clients/`, greyscale + multiply on white, scaled to crop the files' padding; NDA note |
| PartnerBadgeRow | components/brand | official badges in `assets/partners/` (Google Premier Partner 2026, Meta Business Partner, TikTok Marketing Partner, Klaviyo Platinum Master), equal tiles |
| KeyFigures | components/data | one statement figure with its channel split as a proportional bar, then one row of facts |
| Levers | components/content | five levers: name, what, business outcome |
| ProcessSteps | components/content | the six real working steps on one track, the last feeding back to the first |
| Framework | components/content | shared anatomy for every LOOP framework: acronym + claim, optional diagram, letter row (big letter, word, question); light or navy |
| CoreFramework | components/content | C.O.R.E. = Framework + schema (Dati ↔ core ↔ Strategy) |
| PartnersCollage | components/people | managing partners only: overlapping photo collage + names, roles, LinkedIn |
| TeamCarousel | components/people | everyone else: scroll-snap carousel, alternating heights, arrows + progress |
| PersonCard, TeamGrid | components/people | simple portrait card / grid for documents |
| SectionHeader | components/content | title + intro + action; no eyebrow |
| Quote | components/content | approved quotes only |
| InsightCard | components/content | In The Loop, Creative.Lab, Ecom.Lab, Podcast |
| Header | components/layout | solid sticky; dropdown on click/Enter, closes on Escape / outside click; mobile menu < 60em |
| Footer | components/layout | navy, white logo, teal focus |
| PersonCard | components/people | portrait 4:5, name, role, specialism; md / sm |
| Icon | components/icon | `name`, `size` sm/md/lg, optional `label` |

---

## Content fundamentals (Italian)
- Address the reader as **tu**. Sober, precise, expert. Short sentences. No hype words (rivoluzionario, magia, esplodere).
- Positioning lines to reuse verbatim: "Siamo l'azienda del marketing profit-driven", "Partner per una crescita profittevole".
- **We disclose what we choose.** A result can appear on its own (e.g. "+130% ROAS") with no context grid. Never invent a figure. Unknown copy stays in `[brackets]`, styled with `.loop-placeholder`.
- CTAs: **"Richiedi un incontro"**, **"Scopri i casi studio"**. Never "Contattaci" on its own.
- Headings in sentence case, no final period. No eyebrows or kickers. Avoid slogans as headlines.
- No emoji, no exclamation marks.
- **Brand name:** never write "Loop" as a standalone signature (footers, sign-offs, credits). Use the logo or "loopsrl.agency". In running text the legal name is "Loop srl".

## Visual foundations

### Colour
| Token | Value | Use |
| --- | --- | --- |
| `--loop-navy` | #192575 | Primary: headings, primary buttons, links, footer, contact band |
| `--loop-navy-700` / `-900` | #121B5C / #0B1240 | hover / active on primary |
| `--loop-blue` | #2074A3 | Second brand colour: blue cards and covers, second step/data series. Body-safe on white (5.1:1) |
| `--loop-teal` | #26D0CE | Accent: focus on navy, accent rules, data series. Never used to single out one item in a set (colour must mean something). Never as text on white (1.9:1): use `--loop-teal-700` |
| `--loop-navy-50 / 100 / 200` | #F3F4FA / #E6E9F4 / #CDD2E8 | surfaces, depth, disabled |
| `--loop-ink` / `--loop-ink-muted` | #0E1236 / #4A5072 | text / secondary text |
| `--loop-on-navy` / `-muted` | #FFFFFF / #C3C8E6 | text on navy |
| `--loop-rule` | navy 12% | decorative dividers only |
| `--loop-rule-strong` | navy 52% | **control boundaries** (inputs, chips, secondary button): 3.2:1 on white, 3.1:1 on navy-50 |
| `--loop-danger / warning / success` | #B8352E / #8F620A / #16794F | status, each ≥5:1 on white |
| `--loop-logo-gradient` | #1A2980 → #26D0CE | **Exactly once per site**: 2px rule under the hero |

**How colour is used.** White and navy carry the system. Colour is added discreetly and always means something:
- **Navy:** structure and brand (headings, primary actions, numbers, key surfaces).
- **Teal:** at most one thin accent per component, marking the single idea that matters. In Process Steps it is the return line, because the last step feeds the first. In C.O.R.E. it is the connections inside the core. Never a fill, never a large letter, never one item picked out of a set.
- **Blue:** the second series in charts and the blue newsletter cover. Not used for decoration.
- **Data colours:** charts only, in fixed order.
- Never assign colour by position, alternate colours across items, or tint something just to add variety. See `preview/contrast.html` for the full matrix.

### Type: Inter + Geist Mono
Inter (Google Fonts, opsz 14–32) carries all text, headings and UI. Geist Mono carries numbers that need to be compared: stats, table figures, chip counts, step numbers. Hierarchy comes from weight and size. The width tokens (`--loop-wdth-*`) remain but resolve to 100%.

| Role | Token | Size | Weight | Family |
| --- | --- | --- | --- | --- |
| Display | `--loop-text-6xl` | 42–72 | 600 | Inter |
| H1 | `--loop-text-5xl` | 38–56 | 600 | Inter |
| H2 | `--loop-text-4xl` | 32–44 | 600 | Inter |
| H3 | `--loop-text-2xl` | 26 | 600 | Inter |
| H4 | `--loop-text-lg` | 18 | 600 | Inter |
| Lead | `--loop-text-xl` | 21 | 400 | Inter |
| Body | `--loop-text-md` | 16 | 400 | Inter |
| Small / Label | `--loop-text-sm` | 14 | 400 / 600 | Inter |
| Caption | `--loop-text-xs` | 12 | 400 | Inter |
| Stat | `--loop-text-4xl` (lg: 5xl) | 32–56 | 500, tabular | Geist Mono |

Classes: `.loop-display .loop-h1…h4 .loop-lead .loop-body .loop-small .loop-caption .loop-label .loop-stat .loop-mono`.

### Spacing and layout
4px base: `--loop-space-1…12` = 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 96, 128. `--loop-section` = 128 desktop and 64 mobile; `--loop-section-tight` = 96 / 48. The container is 1240 with a 32 gutter (20 on mobile). Sections deliberately vary in weight: the hero dominates, proof is tight, cases are deep, the selector sits on a tint, method and insights are tight, and contact is a navy band.

### Radii (nested rule)
`--loop-radius-sm` 8 for controls, `-md` 12 for inner media and menus, `-lg` 18 for cards and frames. **Outer = inner + padding**: a frame with radius 18 holds media with radius 12 at `--loop-frame-pad` 6. No pills and no zero-radius brutalism.

### Depth
Light rules, depth from tint (white, then navy-50, then navy-100). There is one shadow, `--loop-shadow-overlay`, and it is used only for menus and dialogs. No glass, no backdrop blur.

### Signature: Spigolo
Derived from "Spigoli / Rotondità". **Option A (chosen):** one square top-left corner on an otherwise rounded frame (`.lp-sig` or `WorkFrame signature`). It appears **at most 3 times**: the hero work frame, the first featured case frame and the contact band. **Option B (rejected):** a square plus circle index marker for steps. It read as a bullet and competed with the icons.

### Imagery
Imagery is client work: ad creatives, emails, Klaviyo flows and campaign dashboards, always inside a `WorkFrame`.

| Format | Ratio | Crop rule |
| --- | --- | --- |
| feed | 4:5 | full creative, no crop of copy or logo |
| story | 9:16 | keep the safe area; crop top and bottom UI chrome |
| email | 3:5 | top of the email: header plus first module |
| dashboard | 16:10 | the chart area only, client data anonymised unless approved |

Placeholders are always labelled `[Creatività · cliente]`; never use a bare grey box. In the kit they are `<image-slot>` drop zones.

### Focus, keyboard and motion
- `:focus-visible`: a 2px navy outline at 3px offset (`--loop-focus`). On navy surfaces it is teal (`--loop-focus-color-inverse`). `outline:none` is never used without this replacement.
- Dropdowns open on click/Enter and close on Escape or an outside click, with `aria-expanded`. Tabs, accordions and chips follow the ARIA patterns listed above. A skip link sits at the top of the kit.
- Motion: `--loop-dur-fast` 140ms, `--loop-dur-base` 240ms, `--loop-ease`. `prefers-reduced-motion` reduces every transition and animation to 1ms.

### Animation rules
Tokens: `--loop-dur-instant` 80 · `-fast` 140 · `-base` 240 · `-slow` 400 · `-count` 1200 · `--loop-stagger` 60 · `--loop-reveal-y` 12px · easings `--loop-ease`, `--loop-ease-out`, `--loop-ease-in`. All collapse to ~0 under `prefers-reduced-motion`.
- **Moves:** state changes only (hover colour/border 140, press 1px 80, menus/accordions 240), one-time section reveal (fade + 12px rise, 400 ease-out, stagger 60, max 6 items), one-time count-up for **confirmed** stats (1200), slide builds in reading order.
- **Social/video:** cuts on the beat, captions always on, 1.5s logo end-card, no kinetic-type gimmicks.
- **Never:** parallax, scroll-jacking, marquees, auto-advancing carousels, bounce/elastic, looping decorative motion, animating width/height.
See `preview/motion-tokens.html` and `preview/motion-rules.html`.

### People
`PersonCard` (components/people). Portrait 4:5, head and shoulders, eyes on the upper third, natural light, same framing and grade across the team. Real people only: no stock, no AI faces. Show name, role and specialism, nothing else. Placeholder: `[Ritratto · Nome]`.

## Templates
Each is a folder in `templates/<slug>/` with a `.dc.html` entry and `ds-base.js`.
| Template | Size | Contents |
| --- | --- | --- |
| Email · Newsletter | 600px | Switch by series. **In The Loop:** intro, 3 blog articles (thumb, title, summary, link), 3 external resources (source, title, why read it), navy CTA. **Creative.Lab:** intro, one creative in a frame with brand/channel/format, "Perché funziona" bullets (hook, message, format, CTA), Ad Library link, extra tips. Ecom.Lab: structure to be defined. **Raw hex by design** (email clients have no CSS variables). |
| Whitepaper · A4 | 210×297mm × 4 | cover (navy, signature frame, gradient rule), summary + contents, content page (2 columns, figure, table), back cover. Prints 1 page per sheet |
| Company Presentation | 1920×1080 × 10 | cover, who we are, capabilities, clients, 2 cases, method, team, partners, next steps |
| Slidedeck · Loop | 1920×1080 × 40 | The approved Loop slide system (see below) |

Template rules: slide text ≥ 24px; social text ≥ 26px at 1080 wide; the gradient appears at most once per piece; teal is never text on white; every number carries its context or a [placeholder].

### Slide system (templates/slidedeck)
Derived from the approved "Loop Template Presentazioni" deck: structure, components and content kept 1:1; aligned to v3 tokens.
- **Frame:** 1920×1080. Content slides padding 42/60; cover, dividers and closing padding 74.
- **Header:** section name top-left (25/600, ink-muted). This is a running header for navigation, the one place a label sits above the title. Logo top-right: colour on white, white on navy.
- **Title** 56/700 navy-900, −0.02em; **subtitle** 26/400 ink-muted. **Footer:** client · project left, page number right, 14/600 ink-muted.
- **Takeaway bar:** navy-900, radius md, 26/700 white, emphasis in teal. This is the deck's one teal moment.
- **Cards:** white with a navy-100 rule, or tint; the key card is navy. Progressive navy cards (navy-900 → navy → blue) encode order.
- **Tables:** navy-900 header with white sentence-case labels; rows alternate white and surface; first column blue and bold; totals row navy-900.
- **Charts:** use `--loop-data-1…5` in order (navy, blue, teal-700, data-4, navy-200). Teal-700 replaces the old green-teal for text.
- **Text on blue:** on `--loop-blue` surfaces all text is `--loop-on-navy` (white, 5.1:1). `--loop-on-navy-muted` and teal are for navy / navy-900 only.
- **Deltas (Δ):** a change sits under its value, smaller, as "▲ +12%", "▼ −4%" or "= 0%". Colours `--loop-delta-up` (success), `--loop-delta-down` (danger), `--loop-delta-flat` (ink-muted). Always pair the colour with the arrow and sign, never colour alone.
- **If-then rules (slide 35):** the condition sits on `--loop-warning-50` with `--loop-warning` text; the response sits on surface.
- **40 layouts:** cover, agenda, agenda in two parts, executive summary, divider, chapter summary, takeaways, statement, 3 cards, 3 highlighted cards, 3 rankings, 4 cards, 4 numbered columns, 5 numbered cards, 3 priority levels, key number + levers, key numbers, comparison, system to case, text table, number table, table with deltas, channel band, bar chart, chart + reading, small multiples, budget split, budget by item, composition + table, flow, funnel, measured journey, hub, timeline, if-then rules, image + text, image grid, demo with link, team, closing.
- **Changed from the original:** Poppins → Inter (800 → 700); cover gradient and blur orbs → solid navy; gradient fills → solid navy steps (the logo gradient survives once, as a thin rule); soft drop shadows removed; uppercase tracked labels → sentence case; light greys (#8A94A0, #AAB2BD) → ink-muted for contrast; radii snapped to 4 / 8 / 12 / 18; all colours → tokens. Fixed a stray "undefined" label on slide 11.

### Banned
Eyebrows and kickers. Arrow chips or dots inside CTAs. Glass or blur headers. Colour by position. Big numbers without context. Three identical stat cards. Uniform section rhythm. Lorem ipsum or invented figures. Slogans as hero headlines. Key content hidden in carousels or tabs.

## Iconography
`assets/icons/` holds 30 icons on a 24 grid with a 1.5 stroke, round caps and joins, and `currentColor`. Search, target, globe and user were redrawn in v3 so they read instantly. Use them through `<Icon name>` or `sprite.svg`. Icons sit bare next to text; never inside chips or CTAs except as a trailing arrow on link buttons. No emoji.

## Partner and client logos
Official files only, never redrawn. Partner badges appear unaltered on white. Client logos appear greyscale at 72% opacity in the logo wall. Until the files arrive, slots read `[Badge ufficiale · Google]` and `[Logo · Alessi]`.

## Known limitations
- The editor re-adds C2PA provenance metadata to every saved SVG, so it cannot be stripped here. Strip it at export (e.g. `svgo`) before production.
- Inter and Geist Mono load from Google Fonts. Self-host them for production.
