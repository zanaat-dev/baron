---
name: Baron
description: Landing for an open-source layer that lets a coding agent write to Azure DevOps, GitHub, Jira and Linear through one contract.
colors:
  ground: "#0e0e0f"
  ink: "#ecebe5"
  muted: "#948d86"
  quiet: "#8a8580"
  label-grey: "#8d8984"
  link-grey: "#a3a3a0"
  surface-sunk: "#161616"
  surface-command: "#171718"
  surface-raised: "#1e1e1f"
  surface-header: "#191919"
  hairline: "#262626"
  hairline-soft: "#222222"
  hairline-raised: "#333335"
  graphite-fill: "#3a3937"
  graphite-stroke: "#575551"
  amber: "#e8a13a"
  amber-ink: "#f3d6ad"
  amber-wash: "rgba(232, 161, 58, 0.08)"
  code-tint: "#d8c9b2"
  card-fill: "#2c2926"
  card-stroke: "rgba(176, 128, 66, 0.55)"
  card-stroke-dim: "rgba(176, 128, 66, 0.28)"
typography:
  display:
    fontFamily: "'Funnel Sans', 'Segoe UI', system-ui, sans-serif"
    fontSize: "calc(47 * min(100vw, 1280px) / 1024)"
    fontWeight: 500
    lineHeight: 0.99
    letterSpacing: "-0.012em"
  display-narrow:
    fontFamily: "'Funnel Sans', 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(34px, 9.4vw, 52px)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.012em"
  headline:
    fontFamily: "'Funnel Sans', 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(26px, calc(30 * min(100vw, 1280px) / 1024), 44px)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  title:
    fontFamily: "'Funnel Sans', 'Segoe UI', system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 500
  body-lede:
    fontFamily: "'Funnel Sans', 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(16px, calc(16 * min(100vw, 1280px) / 1024), 21px)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "'Funnel Sans', 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(15px, calc(14.5 * min(100vw, 1280px) / 1024), 18px)"
    fontWeight: 400
    lineHeight: 1.55
  mono:
    fontFamily: "'Geist Mono', ui-monospace, 'Cascadia Mono', Consolas, monospace"
    fontSize: "0.92em"
    fontWeight: 400
  mono-label:
    fontFamily: "'Geist Mono', ui-monospace, 'Cascadia Mono', Consolas, monospace"
    fontSize: "0.86em"
    fontWeight: 500
  mono-block:
    fontFamily: "'Geist Mono', ui-monospace, 'Cascadia Mono', Consolas, monospace"
    fontSize: "clamp(12.5px, calc(12.5 * min(100vw, 1280px) / 1024), 15px)"
    fontWeight: 400
    lineHeight: 1.75
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "12px"
spacing:
  hair: "4px"
  xs: "8px"
  sm: "14px"
  md: "18px"
  lg: "22px"
  xl: "26px"
  section: "clamp(72px, calc(110 * min(100vw, 1280px) / 1024), 150px)"
components:
  button-primary:
    backgroundColor: "{colors.graphite-fill}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "11px 18px"
  command-box:
    backgroundColor: "{colors.surface-command}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    rounded: "{rounded.sm}"
    padding: "0 14px"
    height: "46px"
  panel:
    backgroundColor: "{colors.surface-sunk}"
    rounded: "{rounded.xl}"
    padding: "36px 34px 34px"
  window:
    backgroundColor: "{colors.surface-raised}"
    rounded: "{rounded.lg}"
  role-cell-active:
    backgroundColor: "{colors.amber-wash}"
    textColor: "{colors.amber-ink}"
    typography: "{typography.mono}"
    padding: "14px 16px"
  tracker-card:
    backgroundColor: "{colors.card-fill}"
    rounded: "{rounded.md}"
    padding: "8px 9px"
  nav-link:
    textColor: "{colors.muted}"
---

# Design System: Baron

<!-- Provenance: scanned 2026-10-11 from the shipped landing, src/pages/index.astro (all tokens, type,
colour, spacing, components and motion live in that file), against PRODUCT.md, the surface brief
.impeccable/surfaces/src-pages-index-astro.md, the approved comp .impeccable/mocks/comp-2.png (seed
1b384e33) and the captures in .impeccable/review/ (desktop.png, mobile.png, hero-repro.png).
Build state: the hero gate in .impeccable/build/state.json is still OPEN on record. On 2026-10-11 the
user accepted five deliberate departures from the comp ("Kabul ediyorum"): the license pill moved
under the command as a quiet line, the next section heading set at full size, the Jira and GitHub
cards set in real text, and the moving card shifted left. The tool's --force check did not accept
that quote as a comp downgrade, so the gate was left open rather than forced; this file records the
build as shipped, departures included.
Scope: this system is the landing's. The Starlight docs (src/styles/theme.css) speak the same
language since #269: Funnel Sans / Geist Mono, the warm near-black ground and warm greys, amber as
the only accent, medium-weight headings, the Baron mark beside a lowercase wordmark. The docs keep a
light theme for reading (warm paper, a darker amber for contrast); the landing stays dark only. Docs prose is 17px on a 40rem column (about 80 to 85 characters a line), bold renders at the loaded 600, the mark sits 0.42em from the wordmark as on the landing, the phone menu button is graphite, and the two Funnel Sans weights are preloaded (src/components/Head.astro). -->

## Overview

**Creative North Star: "One Light Source"**

A near-black room lit from above, where the only colour is a single warm amber that travels. The
ground falls off from a faint warm grey at the top of the page into #0e0e0f; panels and windows are
dark, hairline-bordered and softly lit on their top edge, as if by the same overhead lamp. Amber is
never decoration: it is the light that leaves the agent panel, the trace that lands on a card, the
column a role maps to, the focus ring. Everything else is soft white and warm greys.

The page plays the developer-tool category standard straight (the bar is Linear, Vercel, Resend,
Raycast), at full craft rather than with a gimmick. Density is calm: one idea per band, generous
section gaps, left-aligned copy on one column. The first viewport is a composed scene scaled as a
whole from a 1024px comp unit; below it the page returns to ordinary document flow on the same column.
The landing is dark only, by decision; it ships `color-scheme: dark` and no light theme.

Confirmed rejections (PRODUCT.md and the brief): the hacker/terminal cliché, generic SaaS (purple
gradients, three-icon card rows, logo clouds), corporate coldness, anything cute, and third-party
logos used as tracker marks.

**Key Characteristics:**
- Near-black warm ground, one amber accent reserved for light, the active state and focus.
- Funnel Sans for everything read; Geist Mono for commands, ids and state names.
- Hairline-bordered dark surfaces with small radii and a single top light.
- The product mechanism drawn in CSS and canvas, never shipped as a raster.
- Motion is one authored moment: light travelling out and cards lighting as it lands.

## Colors

A warm-neutral dark palette with one amber voice; greys lean faintly warm, never blue.

### Primary
- **Lamp Amber** (`amber`): the light. Canvas traces (gradient from rgba(240,168,72,0.95) to rgba(232,150,58,0.7) with an 8px amber blur), the active role column header, the role label of an active cell on phones, focus outlines, hover borders on graphite buttons, link hover, and text selection (with #111 ink).
- **Amber Ink** (`amber-ink`): text inside an active role cell, over the **Amber Wash** (`amber-wash`) fill with 0.35-alpha amber side rules.
- **Card Bronze** (`card-stroke`, `card-stroke-dim`, `card-fill`): the tracker card. A dim bronze stroke before its trace arrives, the full stroke once lit, over a warm umber gradient (#2c2926 to #24211f).
- **Code Tint** (`code-tint`): inline code and in-flow links below the hero; a parchment tone that reads as warm without spending the amber.

### Neutral
- **Lamp-black Ground** (`ground`): page background, with a radial warm-grey falloff at the top (rgba(54,50,46,0.35) on the body; rgba(66,65,63,0.8) and rgba(54,50,46,0.45) ellipses on the hero stage).
- **Bone** (`ink`): headlines, primary text, row headers, recipe names. 16:1 on ground.
- **Warm Stone** (`muted`): subheads, ledes, body descriptions. The floor for running secondary text (5.5:1 or better on every surface it sits on).
- **Quiet** (`quiet`, #8a8580): nav links, the license line, the footer, tracker notes, role labels and unmapped cells. The floor for any text at all (4.5:1 or better on every surface, 5.3:1 on ground).
- **Label Grey** (`label-grey`): mono column headers and footer links (5:1 or better).
- **Link Grey** (`link-grey`): the hero's Read the docs link.
- **Sunk Surface** (`surface-sunk`): content panels and install cards. **Header Surface** (`surface-header`): table header row. **Command Surface** (`surface-command`): the init command box. **Raised Surface** (`surface-raised`): window-like objects (agent panel, transcript).
- **Hairlines** (`hairline`, `hairline-soft`, `hairline-raised`): 1px borders and dividers; raised objects take the lighter `hairline-raised`.
- **Graphite** (`graphite-fill`, `graphite-stroke`): the filled-and-stroked button.
- **Graphite scrollbar**: the page scrollbar is themed `scrollbar-color: graphite-fill on ground`, so the one browser surface always on screen belongs to the palette. The mobile browser chrome takes the ground through `theme-color` (the docs switch it with the system theme), and the home-screen icon `public/apple-touch-icon.png` is the mark in Bone on the ground, drawn from `src/assets/mark-dark.svg`.

### Named Rules
**The One Light Rule.** Amber marks light, the active role and focus; nothing else. If an element is amber, it must be either where the agent's action landed or where the keyboard is.

**The Warm Grey Rule.** Neutrals carry a faint warm cast (R ≥ B). No cool slate or blue-grey surfaces.

## Typography

**Display Font:** Funnel Sans (with Segoe UI, system-ui), self-hosted via @fontsource at 400, 500, 600
**Body Font:** Funnel Sans
**Label/Mono Font:** Geist Mono (with ui-monospace, Cascadia Mono, Consolas), self-hosted at 400, 500

**Character:** A refined, slightly open grotesk set at medium weight with tight tracking, paired with a clean geometric mono that carries everything a machine would read. No third-party font requests at runtime.

### Hierarchy
- **Display** (500, 47 comp units, about 47px at 1024 and up to 59px at the 1280px cap; 0.99; -0.012em): the hero headline only, two set lines. On narrow screens `display-narrow` (clamp 34–52px, 1.02) and the lines run inline.
- **Headline** (500, clamp 26–44px, 1.1, -0.015em, balanced wrap): one per band below the hero.
- **Title** (500, 17px): card titles such as the install paths.
- **Body lede** (400, clamp 16–21px, 1.55, max 62ch): the paragraph under a headline, in Warm Stone. Running text below the hero sets `text-wrap: pretty`, so no paragraph ends on a single word.
- **Body** (400, clamp 15–18px, 1.55): list descriptions and gap definitions.
- **Mono** (Geist Mono 400, 0.92em of its context): inline code, state names, role names, ids.
- **Mono label** (Geist Mono 500, 0.86em): table column headers (role names).
- **Mono block** (Geist Mono 400, clamp 12.5–15px, 1.75): terminal transcript and install commands, with a 2ch hanging indent on wrap.

### Named Rules
**The Machine Reads Mono Rule.** Commands, package names, item ids, role names and native state names are always Geist Mono; prose about them is always Funnel Sans.

**The Medium Weight Rule.** Headings sit at 500, never bold; emphasis comes from size and Bone against Warm Stone, not weight.

## Layout

The first viewport is a fixed composition of 1024 x 687 comp units, every hero element placed in comp units (`--u` = min(100vw, 1280px, 100svh x 1024/687) / 1024, floored at 860px), so the scene scales as a whole, stops growing at 1280px and never grows taller than the window. The stage spans the window and clips only at its edges; the composition sits centred in it, so on wide screens the boards end inside the page and on narrower ones they bleed off the screen edge, never against an invisible box. Copy sits left in the upper third from a 104-unit margin; the scene (agent panel front left, four tilted boards bleeding right) fills the lower two thirds, and the first panel overlaps the stage bottom by 69 units so the next heading peeks.

Below the hero the page is ordinary flow on an 814-unit column (the hero's own column), with section gaps of clamp(72px, 110 units, 150px). Bands are single column except the recipes band, which pairs text and transcript at 1 : 1.15; the transcript is sticky (32px from the top) so it stays in view beside the longer recipe list, and returns to flow on phones. Transcript lines hang: a wrapped step continues under its text, past the check. Gap policies sit in three hairline-divided columns.

At 860px and below the stage drops its fixed composition: copy returns to flow at reading sizes with 20px gutters, the agent panel renders at a fixed 1.15px unit across the full column, so its edges line up with the boards, and the four boards lie flat in a two-by-two grid, each showing only its in_progress column with the card, so card text stays at 11px or more. Multi-column bands collapse to one; the role table becomes one bordered block per tracker with each state labelled by its role.

## Elevation & Depth

Depth is tonal first, with a single overhead light. Surfaces step up from ground to sunk (#161616) to raised (#1e1e1f); raised objects take a lighter hairline. Only objects that read as physical things floating above the page (the agent panel, the transcript window, the boards) carry a soft drop shadow, and boards add a 1px lit top edge.

### Shadow Vocabulary
- **Window drop** (`box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45)`; 0 18u 40u on the agent panel): window-like objects.
- **Board** (`box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.09), 0 30u 60u rgba(0, 0, 0, 0.55)`): lit top edge plus deep drop for the tilted boards; phones keep only the lit edge.
- **Card glow** (`box-shadow: 0 0 10u rgba(200, 140, 60, 0.18)`): a lit tracker card. This is the amber light landing, not elevation.

### Named Rules
**The Overhead Lamp Rule.** One light source, from above: drop shadows fall straight down, lit edges sit on top. No side-cast or offset shadows.

**The Glow Is Light Rule.** Amber glow appears only where a trace lands (cards) and along the traces themselves. Panels, buttons and text never glow.

## Shapes

Small, consistent radii: 6px on the command box, 8px on cards, buttons and the agent panel, 10px on the table and transcript, 12px on content panels. Circles only for the agent avatar. Borders are 1px hairlines everywhere except tracker cards (1.5px bronze). The tracker boards share one fixed tilt (rotateX 48deg, rotateZ -24deg, skewX 8deg) under a shared perspective so they read as one fanned stack; nothing else on the page is rotated.

## Components

### Buttons
Quiet, solid and warm; they do not shout.
- **Shape:** gently rounded (`rounded.md`; the nav Get started uses 7 comp units).
- **Primary:** Graphite fill with a Graphite stroke and Bone text, 500 weight (Get started, Read the getting started guide).
- **Hover / Focus:** the stroke turns Lamp Amber; focus is a 2px amber outline offset 3px with a 4px radius.
- **Icon button (copy):** no chrome and no word; an outline copy SVG (12 comp units in the hero, 15px on phones and install cards) in grey on a square hit area (23 units, 30px on cards, 38px on phones) that takes a faint white wash and Bone on hover. On success the icon swaps to a check for 1.6s; if the clipboard is refused the command is selected instead. A shared visually hidden status line announces either outcome.

### Command box
The install command as an object: Command Surface, a hairline, `rounded.sm`, Geist Mono command at left and the copy icon button at right, sized to its command. It shares one row with the Read the docs link, 22 units apart (stacked 16px apart on phones). Set once, in the hero.

### Cards / Containers
- **Corner Style:** `rounded.xl` for content panels and install cards, `rounded.lg` for the table and windows.
- **Background:** Sunk Surface for content; Raised Surface for windows.
- **Shadow Strategy:** flat for content; Window drop for windows (see Elevation & Depth).
- **Border:** 1px `hairline` (content) or `hairline-raised` (windows); window title rows are split off by a hairline.
- **Internal Padding:** content panel 36/34 comp units (24px 20px on phones); install card 22px 24px.

### Navigation
The Baron mark (`src/assets/mark-dark.svg`, inline and hidden from assistive tech, 1.26em tall, 0.42em from the text, the docs header's proportion) beside the wordmark "baron" lowercase at 400 weight in Funnel Sans on the left, the mark on the content column's edge; Docs, GitHub, npm as 500-weight links (13 comp units, 14px on phones) turning Bone on hover; set in Quiet (#8a8580, 5.3:1 on ground); the graphite Get started button at the far right. On phones it sits on one row with the links pushed right; at 440px and below the Docs link hides, since Get started opens the same page, so the row still fits.

### Role table (signature)
The idea of the product as a table: roles across the top in Geist Mono labels, one row per tracker with its native states in mono, a Bone row header with a small note under it. The `in_progress` column is the one amber moment in the band: amber header, Amber Wash fill, amber side rules, Amber Ink text. Unmapped roles show a dash. Rows lift to #1b1b1b on hover. On phones each tracker becomes its own bordered block.

### Tracker card and traces (signature)
The same item card (mono id over a two-line 500-weight title) sits in each tracker's own column. Cards start one step dim; a canvas trace leaves the agent panel and, on arrival, the card lights (stroke to full bronze, soft glow) over 0.6s on `cubic-bezier(0.16, 1, 0.3, 1)`. Traces draw with an exponential ease-out over 900ms, staggered 140ms per card, positioned from where the cards actually render so they stay attached at every width; on phones they leave the panel's lower edge and run behind the boards. Under `prefers-reduced-motion` every card is lit and traces draw complete with no animation.

### Agent panel
A small chat window: title row, a right-aligned user bubble (#38383a), and a reply list of checked lines (inline SVG checks) next to a graphite avatar. Its four lines are the four steps `task-start` really runs, matching the transcript below. It is the source of the light.

## Do's and Don'ts

### Do:
- **Do** keep amber for light, the active role and focus (The One Light Rule).
- **Do** set every command, id, role and native state in Geist Mono, and all prose in Funnel Sans.
- **Do** draw product illustration in CSS, SVG or canvas from real component markup; ship no rasters for the scene. The one exception is the share card `public/og.png` (1200 x 630), since link unfurlers do not run the page: it is the hero itself, captured at a 1600 x 840 viewport, device pixel ratio 1.5, `--u` forced to 1.4px, nav links, the flow below and the scrollbar hidden, traces settled, then downscaled to 1200 x 630. Recapture it whenever the hero changes.
- **Do** keep running secondary text at Warm Stone (`muted`) or brighter; it holds 5.5:1 on every surface.
- **Do** name trackers in text; illustrative boards use each tracker's own column names.
- **Do** give every animated state a reduced-motion resting state that shows the finished picture.

### Don't:
- **Don't** add a light theme to the landing; it is dark only by decision.
- **Don't** use third-party logos as tracker marks, or logo clouds, customer names, testimonials or invented numbers.
- **Don't** place a label, pill or kicker above the headline; the license line sits under the command.
- **Don't** introduce a second accent hue, cool grey-blue surfaces, or purple gradients.
- **Don't** make text, panels or buttons glow; glow belongs to traces and lit cards only.
- **Don't** use bold headings; 500 is the heading weight.
