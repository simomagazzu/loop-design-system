# Handoff: LOOP Design System v3 (Precisione)

## Overview
This folder is the complete LOOP design system: tokens, component styles, React components, preview cards, templates (emails, decks, A4 whitepaper) and brand assets. LOOP (Loop S.R.L., Rome, full remote) is a profit-driven performance marketing company.

**Task for Claude Code:**
1. Turn this folder into a GitHub repository and push it (see "Repository setup").
2. Optionally package the components as an installable library (see "Packaging").

Brand rules, voice, facts about LOOP and the full token reference are in **`DESIGN_SYSTEM.md`**. Read it before changing anything.

## About the design files
Everything here was authored as **browser-native HTML/CSS/JSX design references**. Tokens and component CSS are production-ready as-is. The `.jsx` components are written as plain ES modules (React 18, no TypeScript, no build-time CSS). They work in a bundler, but they were authored for a design tool, so:
- Treat the `.jsx` + `.d.ts` pairs as the reference implementation. When moving them into a real codebase, keep the class names (`lp-*`), props and markup, and adapt the imports.
- `*.dc.html` templates are **Design Component** files. They need `templates/<slug>/support.js` (included) to run in a browser. In a real codebase, recreate them in the target stack: an MJML / React Email setup for the two newsletters, and the existing deck tool for the slides. The inline styles and copy in them are the spec.

## Fidelity
**High-fidelity.** Colours, type, spacing, radii and states are final. Reproduce them exactly using the tokens in `colors_and_type.css`. Copy in templates is final where written; anything in `[brackets]` is a placeholder for real content.

## Repository setup
Suggested name: `loop-design-system`. Default branch: `main`.

```bash
cd design_handoff_loop_design_system
git init -b main
```

Add a `.gitignore`:
```
node_modules/
.DS_Store
```

**Before the first commit:**
1. Strip the C2PA provenance metadata from every SVG. The design tool re-added it on save and it could not be removed there:
   ```bash
   npx svgo -r assets/ --multipass
   ```
   Check the result: `grep -rl c2pa assets/` should return nothing. Also make sure `assets/logo-loop-*.svg` still render correctly (gradient intact).
2. Rename `DESIGN_SYSTEM.md` to `docs/design-system.md`, or keep it at the root. This README can then become the repo README, replacing the "Handoff" framing with install and usage instructions.
3. Delete `templates/*/support.js` and `templates/*/ds-base.js` only if you rebuild the templates. They are runtime shims for the `.dc.html` files.

Then:
```bash
git add .
git commit -m "LOOP design system v3"
gh repo create <org>/loop-design-system --private --source=. --push
```

## Files

```
styles.css               entry point: @imports colors_and_type.css + components.css
colors_and_type.css      ALL tokens (113 custom properties), base styles, type roles, focus, reduced motion
components.css           all component styles (lp-* classes), tokens only, no raw hex/px
_ds_bundle.js            prebuilt browser bundle of every component → window.LOOPDesignSystem_29467e
                         (generated; regenerate from components/ if you add a build, or delete it)
components/<group>/      <Name>.jsx + <Name>.d.ts per component, one preview .html card per group
preview/                 foundation cards: colours, contrast matrix, type, spacing, radii, depth, motion, logo, signature
templates/
  creative-lab/          Creative.Lab newsletter (600px email, navy masthead)
  in-the-loop/           In The Loop newsletter (600px email, teal-700 masthead)
  slidedeck/             40 slide layouts at 1920×1080 (the approved Loop deck)
  company-presentation/  company presentation deck
  whitepaper/            A4 whitepaper
assets/
  logo-loop-color.svg / -b.svg / -w.svg   official LOOP logos
  icons/                 30 icons (24 grid, 1.5 stroke, round caps) + sprite.svg + icons.json
  clients/               12 client logos (PNG 1200×630, black on white, with padding)
  partners/              official badges: Google Premier Partner 2026, Meta Business Partner,
                         TikTok Marketing Partner, Klaviyo Platinum Master
SKILL.md                 short rules for AI agents using the system
thumbnail.html           1280×854 tile
```

### Components
| Group | Components |
| --- | --- |
| button | Button: primary / secondary / link, md / sm, hover, active, disabled, loading, on-navy |
| fields | Input, Textarea, Select: label, help, error (aria-invalid / aria-describedby), disabled |
| chips | ChoiceChips (single = radiogroup with arrow keys, multi = aria-pressed), FilterChips |
| disclosure | Tabs (ARIA, arrows / Home / End), Accordion (aria-expanded) |
| data | Stat, KeyFigures, CaseCard, CaseRow, WorkFrame |
| content | SectionHeader, Quote, InsightCard, Levers, ProcessSteps, CoreFramework (C.O.R.E.), Framework (R.E.A.C.H.) |
| brand | ClientLogoWall (per-logo `scale` to crop file padding), PartnerBadgeRow (`basePath` prop) |
| people | PartnersCollage (managing partners), TeamCarousel (team), PersonCard / TeamGrid |
| layout | Header (click / Enter dropdowns, Escape closes, mobile menu below 60em), Footer |
| icon | Icon (`name`, `size` sm / md / lg, optional `label`) |

Prop contracts are in each `.d.ts`.

## Design tokens (summary; source of truth is `colors_and_type.css`)
**Colour**
- Navy `#192575` (primary), navy-700 `#121B5C` (hover), navy-900 `#0B1240`
- Blue `#2074A3`, teal `#26D0CE` (rare), teal-700 `#0E7C82` (text-safe teal)
- Navy-50 / 100 / 200: `#F3F4FA` / `#E6E9F4` / `#CDD2E8`
- Ink `#0E1236`, ink-muted `#4A5072`, on-navy `#FFFFFF`, on-navy-muted `#C3C8E6`
- Rule: navy at 12%; rule-strong: navy at 52% (control borders, 3:1)
- Danger `#B8352E`, warning `#8F620A`, success `#16794F`, each with a -50 tint
- Δ tokens: up = success, down = danger, flat = ink-muted. Always pair the colour with ▲ / ▼ / = and the sign.
- Logo gradient `#1A2980 → #26D0CE`: once per surface, as a thin rule only.
- On blue surfaces all text is white. Muted text and teal are for navy only.

**Type:** Inter (text and UI) and Geist Mono (figures), both from Google Fonts; self-host for production. Scale `--loop-text-xs…6xl` = 12 / 14 / 16 / 18 / 21 / 26 / 28–34 / 32–44 / 38–56 / 42–72; `--loop-text-hero` = 48–120.

**Spacing:** 4px base, `--loop-space-1…12` = 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 96, 128. Section padding 128 desktop, 64 mobile. Container 1240.

**Radii:** 4 / 8 / 12 / 18. Nested rule: outer = inner + padding (18 = 12 + 6).

**Elevation:** one overlay shadow, used for menus and dialogs only.

**Motion:** 140 / 240ms, `cubic-bezier(.2,0,0,1)`. Every transition drops to 1ms under `prefers-reduced-motion`.

**Focus:** `:focus-visible` is a 2px navy outline at 3px offset; on navy surfaces it is teal.

## Interactions and behaviour
- Header: dropdowns toggle on click or Enter and close on Escape or an outside click, with `aria-expanded`. A burger button below 960px opens the mobile menu.
- Tabs: roving tabindex, arrow keys, Home and End.
- Accordion and CaseRow: `aria-expanded` / `aria-controls`; the plus icon rotates 45°.
- TeamCarousel: scroll-snap, arrow buttons that disable at each end, a progress rule, horizontal keyboard scroll.
- Button `loading`: spinner, `aria-busy`, disabled.
- Fields: errors render with `role="alert"` and are linked through `aria-describedby`.

## Assets
- LOOP logos: official files from the brand owner.
- Client logos and partner badges: official files supplied by LOOP. Never redraw them; display client logos in greyscale.
- Icons: custom set drawn for this system.
- No photography is included. Portraits and creatives are drop-zone placeholders.

## Packaging (optional)
To publish the components as `@loop/design-system`:
- Add `package.json` with `react` and `react-dom` (^18) as peer dependencies.
- Bundle `components/**/*.jsx` with tsup or esbuild into ESM and CJS, plus `.d.ts` files copied from `components/`.
- Ship `styles.css` as a side-effect import.
- Delete `_ds_bundle.js` and the per-folder `image-slot.js` copies. `image-slot.js` is a design-tool drop-zone helper; replace it with a real `<img>` in production.
