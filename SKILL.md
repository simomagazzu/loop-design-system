---
name: loop-design
description: Use this skill to generate well-branded interfaces and assets for LOOP, the Italian performance marketing agency (loopsrl.agency), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Quick rules (v3 · Precisione):
- "L'azienda del marketing profit-driven". Facts, clients, partners, people and frameworks are listed in README "Who we are": use only those, never invent.
- Poppins only (never a mono or second font, especially in emails). Hierarchy by weight + size.
- White and navy carry everything. Colour is discreet and meaningful: teal = one thin accent per component marking the key idea (never fills, never alternating, never one item singled out); blue = second data series. Logo gradient once, as a 2px rule.
- Radii 12 / 20 / 28 (rounder), nested rule outer = inner + padding. Containers fit their content; no unnecessary text; use the icons.
- Signature "Spigolo": one square top-left corner, max 3 uses per page.
- Share only the results we choose; one figure at most, never invented. Unknown copy in [brackets].
- CTAs: "Richiedi un incontro", "Scopri i casi studio". No eyebrows, no arrow-chip pills, no glass headers.
- Tokens only: no raw hex/px outside colors_and_type.css. :focus-visible everywhere; respect prefers-reduced-motion.
- Components: window.LOOPDesignSystem_29467e (Button, Input, Textarea, Select, ChoiceChips, FilterChips, Tabs, Accordion, CaseCard, WorkFrame, ClientLogoWall, PartnerBadgeRow, SectionHeader, Quote, InsightCard, Header, Footer, PersonCard, Icon).
- Templates in templates/: CreativeLab (email), InTheLoop (email), CompanyPresentation, Slidedeck. Motion: state changes + one-time reveals only; no parallax, bounce or auto-advance.
