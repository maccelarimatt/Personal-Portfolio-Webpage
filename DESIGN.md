---
name: Matthew Maccelari
description: One building of lit signs read from the street; every page is a signed floor and the directory is the navigation.
colors:
  asphalt: "#0d0e10"
  street: "#16171a"
  rule: "#2a2c30"
  steel: "#4a4e54"
  panel: "#f4f1ea"
  ink: "#111214"
  ink-soft: "#4f4b45"
  ash: "#a8a49c"
  neon: "#c8241a"
  lantern: "#ff6b35"
typography:
  display:
    fontFamily: "League Gothic, Arial Narrow, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "0.01em"
  headline:
    fontFamily: "League Gothic, Arial Narrow, sans-serif"
    fontSize: "3rem"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "0.01em"
  sign:
    fontFamily: "League Gothic, Arial Narrow, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "0.01em"
  title:
    fontFamily: "Sofia Sans, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.375
  body-lead:
    fontFamily: "Sofia Sans, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Sofia Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Sofia Sans Condensed, Sofia Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.08em"
  label-action:
    fontFamily: "Sofia Sans Condensed, Sofia Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.08em"
rounded:
  none: "0px"
spacing:
  sign-gap: "6px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  gutter: "20px"
  lg: "32px"
  xl: "40px"
  section: "56px"
  2xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.neon}"
    textColor: "{colors.panel}"
    typography: "{typography.label-action}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
  button-secondary:
    backgroundColor: "{colors.asphalt}"
    textColor: "{colors.panel}"
    typography: "{typography.label-action}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
  sign-module:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    typography: "{typography.sign}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "64px"
  sign-module-lit:
    backgroundColor: "{colors.neon}"
    textColor: "{colors.panel}"
  sign-heading:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
    height: "112px"
  sign-heading-lit:
    backgroundColor: "{colors.neon}"
    textColor: "{colors.panel}"
  plate-lit:
    backgroundColor: "{colors.neon}"
    textColor: "{colors.panel}"
    rounded: "{rounded.none}"
    padding: "2px 8px"
  plate-panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "2px 8px"
  plate-unlit:
    backgroundColor: "{colors.asphalt}"
    textColor: "{colors.ash}"
    rounded: "{rounded.none}"
    padding: "2px 8px"
  lightbox:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.none}"
    padding: "8px"
  nav-link:
    backgroundColor: "{colors.asphalt}"
    textColor: "{colors.panel}"
    typography: "{typography.label-action}"
    rounded: "{rounded.none}"
    padding: "0 12px"
    height: "36px"
  nav-link-hover:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
  nav-link-active:
    backgroundColor: "{colors.neon}"
    textColor: "{colors.panel}"
---

# Design System: Matthew Maccelari

## Overview

**Creative North Star: "Signboard Canyon"**

The site is one building of lit signs read from a wet street at midnight. Every page is a signed floor (1F Research, 2F Projects, 3F About, 4F Record, 5F Contact), and the floor directory is the navigation: the Home spine, the top bar and the mobile menu all list the same floors. Signs are flat backlit off-white acrylic panels carrying heavy condensed gothic caps in near-black. A sign that is open, current or under the pointer snaps to solid neon red. A small lantern vermilion marks floor numbers, dates and current work. That is the whole vocabulary.

The system is flat, square and lit from within. There are no glows, no gradients, no translucent tints and no rounded corners; light is carried by solid fills, never by blur. Density is that of a street-facing directory: one identical sign module repeats as the page ruler, steel lines divide the ground, and long-form reading sits in a calm off-white on asphalt at a 68ch measure. The world replaced an earlier neon-and-glass portfolio that read as AI-generated; the answer to that is physical honesty, not ornament. Every label is a real name (a floor, a result, a year), never a decorative kicker.

Motion is a building switching on, once. On Home the signs power on floor by floor from the ground sign upward with a short fluorescent flicker, and the wet-street reflection beneath the spine follows the hover state. Under reduced motion nothing animates. Page changes are a 160ms linear cut to black and back.

**Key Characteristics:**
- One sign module (floor cell, backlit panel, spec cell) repeated as the ruler for navigation and every page heading.
- Lit state is a solid neon red panel; there is no other emphasis treatment.
- Square corners everywhere; 1px steel frames and 2px off-white rules.
- Condensed gothic display caps against a humanist sans for reading and a condensed sans for labels.
- Flat surfaces only; the street reflection is the single gradient in the system, used as a mask.
- One-time power-on flicker on Home, disabled under reduced motion.

## Colors

A locked ten-color night palette: near-black ground, two greys for structure, an off-white acrylic, and two reds that do all the signalling.

### Primary
- **Sign Neon Red** (neon): the lit state. Fills the open or current sign (5F Contact on Home, the page's own floor heading, the active nav item), the floor a visitor hovers or focuses, the primary button, the ground sign's research line, lit plates and text selection. Text on it is always Acrylic Off-White.

### Secondary
- **Lantern Vermilion** (lantern): small marks of life. Floor numbers on unlit signs, dates and periods in lists, competition years, project highlight figures, icons in the contact directory, the focus ring, the caret, and the hover color for text links and the email address. Never a fill for a large surface.

### Neutral
- **Wet Asphalt** (asphalt): the page ground, the sticky top bar, the scrollbar track.
- **Night Street** (street): the second ground. The frame behind each sign, the footer, and the reflection band under the Home spine.
- **Gutter Rule** (rule): quiet 1px dividers between list rows and table rows.
- **Signframe Steel** (steel): 1px sign frames, the floor-cell divider, outlined unlit plates, the header and footer borders, text-link underlines, the scrollbar thumb and image placeholders.
- **Acrylic Off-White** (panel): the unlit sign face, the Lightbox mount, the panel note card, primary text on dark ground, 2px section rules and the secondary button outline.
- **Sign Ink** (ink): text set on Acrylic Off-White panels.
- **Worn Ink** (ink-soft): secondary text on panels (mobile spec lines, Lightbox captions, panel footnotes).
- **Street Ash** (ash): secondary text on dark ground (intros, subtitles, spec cells, metadata labels, table headers).

### Named Rules
**The Lit Means Open Rule.** Neon red is a state, not a decoration: it marks the open, current, hovered or focused floor and the single primary action. If a red surface does not mean "this one", it should not be red.

**The No Glow Rule.** Light is carried by solid fills. No box-shadow glows, no text-shadow halos, no translucent tints of neon or lantern, no gradient fills.

**The Two Reds Rule.** Neon fills; lantern marks. Lantern never fills a panel and neon never sets small body-scale text on dark ground.

## Typography

**Display Font:** League Gothic (with Arial Narrow, sans-serif)
**Body Font:** Sofia Sans (with system-ui, sans-serif)
**Label/Mono Font:** Sofia Sans Condensed (with Sofia Sans, system-ui)

All three are self-hosted variable or single-weight woff2 files in `public/fonts`, split into latin and latin-ext subsets with `font-display: swap`.

**Character:** League Gothic is the sign painter's condensed caps, always uppercase and tightly led so a word fills its panel. Sofia Sans carries reading text with tabular numerals on by default; its condensed cut sets every label, button and spec line in tracked caps, the voice of a building directory.

### Hierarchy
- **Display** (League Gothic 400, 4.5rem at desktop down to 2.75rem on phones, line-height 0.92, uppercase): heading signs (each page's floor sign and each Home floor section), the ground sign name, the Projects highlight figure, and the email address on Contact (fluid up to 6rem).
- **Headline** (League Gothic 400, 3rem desktop / 2.25rem mobile, line-height 0.92, uppercase): in-page section titles sitting on a 2px off-white rule; also footer name and Contact directory entries at 2.25rem.
- **Sign** (League Gothic 400, 2.5rem desktop / 2rem mobile, line-height 0.92, uppercase, truncates): the label inside a standard floor-sign module and the top-bar name plate (1.625rem).
- **Title** (Sofia Sans 700, 1.25 to 1.875rem, line-height 1.25 to 1.375): entry, paper and project titles.
- **Body Lead** (Sofia Sans 400, 1.25rem, line-height 1.625): summary paragraphs at the top of a floor, max 68ch.
- **Body** (Sofia Sans 400, 1.0625rem, line-height 1.6, tabular numerals): running text, max 68ch.
- **Label** (Sofia Sans Condensed 600, 0.875rem, 0.08em tracking, uppercase): metadata, periods, spec cells, table headers, plates (700 at 0.8125rem) and captions (0.06em).
- **Label Action** (Sofia Sans Condensed 700, 1rem, 0.08em tracking, uppercase): buttons, nav items (0.9375rem) and footer links.

### Named Rules
**The Caps Are Signs Rule.** League Gothic appears only on sign faces and sign-scale headings, always uppercase at line-height 0.92. It is never used for paragraphs, labels or buttons.

**The Honest Label Rule.** Every condensed caps label names a real thing: a floor, a year, a status, a count, a role. There are no eyebrows or kickers above headings; the floor sign is the heading's only preamble.

## Layout

A centred container (max 1280px) with a 20px side gutter, 32px from the md breakpoint. Reading columns stop at 68ch.

The Home first viewport is a 7/12 and 5/12 split at the lg breakpoint (1024px): the left column stacks the floor spine (5F at top down to 1F, 6px between signs), the ground sign, then the street reflection; the right column holds the portrait Lightbox, the NOW note, the summary paragraph and the two actions. Below lg it collapses to one column in the order ground sign, copy, floors, photo, and the reflection is hidden.

Each floor section opens on a heading sign and then a two-column body (equal columns, or content plus a 20 to 22rem photo rail) with a 64px gap at lg and 40px when stacked. Floor sections breathe at 56px vertical padding; page headers at 40 to 56px top. Dated records use a three-track grid (11rem period, flexible record, 20rem photo) that drops the photo track below lg and stacks below md. Lists and tables are ruled, not boxed: rows divide on 1px Gutter Rule lines and a group starts on a 2px off-white rule.

The standard sign module is 64px tall from sm upward (60px minimum below), with a 56 to 64px floor cell, a flexible panel and a 15rem spec cell that appears from sm; below sm the spec drops into the panel as a small line. Heading signs are 80px tall on phones and 112px from md.

## Elevation & Depth

The system is flat. There is no shadow vocabulary: depth comes from tonal layering (asphalt ground, street frames, off-white panels) and from the lit state, which changes fill rather than height. Nothing lifts on hover.

The one exception is the Home street reflection, a decorative, inert, aria-hidden mirror of the spine. It is flipped vertically at 22% opacity, distorted by an SVG rain filter (a vertical blur streak displaced by fractal noise), and faded out with a top-to-bottom linear-gradient mask. Its Night Street band extends full-bleed to the viewport edges by a zero-blur spread of the street color clipped to the band, which is a background extension, not an elevation.

### Named Rules
**The Flat Acrylic Rule.** Surfaces never cast shadows. A state change is a fill change (off-white to neon red, outline to solid), executed in 75ms.

**The One Gradient Rule.** The only gradient in the system is the reflection's fade mask. Do not use gradients as fills, borders, overlays or text effects anywhere else.

## Shapes

Every corner is square (0px). Signs are framed rectangles: a 1px steel frame on a street ground, a floor cell divided from the panel by a 1px steel rule, and a lit sign whose frame turns neon to become one solid red block. Photographs are mounted in an off-white Lightbox frame with an 8px mat, like a backlit display case. Plates are small hard-edged rectangles. Dividers are 1px Gutter Rule lines; group starts and section titles sit on a 2px Acrylic Off-White rule; the NOW note sits on a 2px lantern rule. Outlined controls use a 2px off-white border.

## Components

### Buttons
Flat sign plates, decisive and immediate.
- **Shape:** square corners (0px), 48px tall, 20px horizontal padding, 10px gap to a trailing 18px icon.
- **Primary:** solid Sign Neon Red with Acrylic Off-White label in Label Action caps. One per cluster: "Email Matthew", "Write an email".
- **Secondary:** 2px Acrylic Off-White outline on the ground, off-white label: "Download CV", "Contact details", "Copy address".
- **Hover / Focus:** both variants invert to a solid off-white panel with Sign Ink text in 75ms. Keyboard focus adds the global 2px lantern outline at 3px offset.

### Chips (Plates)
- **Style:** small rectangles in Label caps (700, 0.8125rem, 0.08em tracking), 2px by 8px padding. Three tones: lit (neon fill, off-white text) for settled or current status and the inline NOW tag; panel (off-white fill, ink text) for project categories; unlit (1px steel outline, ash text) for in-progress status and badges.
- **State:** static labels, never interactive.

### Cards / Containers
The system avoids cards. Content sits on ruled rows and in sign frames. The one panel container is the Contact "Open to" note: an off-white panel with Sign Ink text, a League Gothic headline and 24 to 32px padding, square, no border, no shadow.

### Navigation
- **Top bar:** sticky, Wet Asphalt with a 1px steel bottom border, 56px tall. The name sits on a small off-white sign plate (36px tall, League Gothic 1.625rem) that turns neon on hover.
- **Floor links (lg and up):** ground floor first, each a 36px Label Action item with its floor number in lantern. Hover inverts to an off-white panel with ink text; the current floor is solid neon with the floor number in off-white. A steel divider separates a 2px-outlined "CV (PDF)" link.
- **Mobile:** a 40px square outlined menu toggle opens a full-width panel listing the floors top-down as full floor-sign modules (current floor lit), then a full-width outlined CV link.
- **Footer:** Night Street band with a League Gothic name, ash location line, and 44px outlined Label Action links (1px steel border) with 17px icons that invert to off-white on hover.

### Floor Sign (signature component)
The one module the site repeats as its ruler: floor cell, backlit panel, spec cell, inside a 1px steel frame on Night Street.
- **Floor cell:** Label Action numeral (1F to 5F) in lantern, off-white when lit, divided from the panel by a 1px steel rule.
- **Panel:** Acrylic Off-White with a League Gothic label in Sign Ink. Lit, it becomes solid Sign Neon Red with off-white text, and the frame turns neon too.
- **Spec cell:** a 15rem Label line in ash naming real content (for example a ranking or a count), off-white when lit; on phones it moves inside the panel.
- **Heading size:** the same module at 80 to 112px with a Display label opens every page (lit, as the page's own floor) and every Home floor section.
- **Interaction:** a linked sign lights red on hover or keyboard focus in 75ms, and on Home the mirrored reflection lights the same floor. On first load of Home the panels power on bottom-up, ground sign first, 140ms apart, each with a 900ms linear flicker (dim, flash, dip, settle). Under prefers-reduced-motion there is no animation.

### Lightbox
A photograph mounted in a backlit frame: an 8px Acrylic Off-White mat around the image (portrait 3:4, landscape 4:3 or wide 16:10, cropped from the top), with an optional caption in Worn Ink Label caps beneath. Photos load lazily except the Home portrait.

### Entry List
Dated records on rules: a lantern Label period (with an optional unlit plate) on the left, a Title and ash subtitle with body text at 68ch in the middle, and a Lightbox on the right where a photo exists. Rows are separated by 1px Gutter Rule lines with 32px vertical padding.

### Text Link
Condensed caps in off-white with a 1px steel underline and a trailing arrow; hover turns both text and underline lantern.

## Do's and Don'ts

### Do:
- **Do** open every page with its own floor sign, lit, at heading size, and keep the floor numbers 1F Research, 2F Projects, 3F About, 4F Record, 5F Contact consistent across spine, top bar and menu.
- **Do** express every active, current, hovered or focused state as a solid neon red fill with off-white text, switched in 75ms.
- **Do** keep all corners at 0px and all frames at 1px steel or 2px off-white.
- **Do** set sign labels in League Gothic caps at line-height 0.92, and labels, buttons and specs in Sofia Sans Condensed caps at 0.06 to 0.08em tracking.
- **Do** use lantern only for small marks: floor numbers, dates, highlight figures, icons, focus rings and link hover.
- **Do** divide content with ruled rows instead of boxing it in cards.
- **Do** gate the power-on flicker and any other motion behind prefers-reduced-motion.

### Don't:
- **Don't** add glows, drop shadows, text halos, blur effects or translucent tints of the reds.
- **Don't** use gradients anywhere except the street reflection's fade mask.
- **Don't** round corners on any surface, button, plate or image.
- **Don't** put eyebrows or kickers above headings; a floor sign or a real label is the only preamble.
- **Don't** introduce colors outside the locked ten-color palette.
- **Don't** use League Gothic for paragraphs, buttons or small labels.
- **Don't** build glass cards or a split hero over a card row; the building directory is the structure.
