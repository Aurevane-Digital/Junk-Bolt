---
name: Commercial Trade Pro
colors:
  surface: '#f8f9ff'
  surface-dim: '#d1dbec'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dfe9fa'
  surface-container-highest: '#d9e3f4'
  on-surface: '#121c28'
  on-surface-variant: '#44474e'
  inverse-surface: '#27313e'
  inverse-on-surface: '#eaf1ff'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#4d5f80'
  primary: '#00102a'
  on-primary: '#ffffff'
  primary-container: '#122543'
  on-primary-container: '#7b8db0'
  inverse-primary: '#b5c7ed'
  secondary: '#bb0027'
  on-secondary: '#ffffff'
  secondary-container: '#e0283c'
  on-secondary-container: '#fffbff'
  tertiary: '#000d33'
  on-tertiary: '#ffffff'
  tertiary-container: '#002060'
  on-tertiary-container: '#5986ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e3ff'
  primary-fixed-dim: '#b5c7ed'
  on-primary-fixed: '#061b39'
  on-primary-fixed-variant: '#354767'
  secondary-fixed: '#ffdad8'
  secondary-fixed-dim: '#ffb3b1'
  on-secondary-fixed: '#410007'
  on-secondary-fixed-variant: '#92001c'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#003ea8'
  background: '#f8f9ff'
  on-background: '#121c28'
  surface-variant: '#d9e3f4'
typography:
  display:
    fontFamily: Montserrat
    fontSize: 44px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: 0.02em
  display-mobile:
    fontFamily: Montserrat
    fontSize: 30px
    fontWeight: '800'
    lineHeight: 38px
    letterSpacing: 0.01em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '800'
    lineHeight: 32px
    letterSpacing: 0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: 0.01em
  headline-sm:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: 0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.04em
  label-md:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system targets residential and commercial trade services (electrical, HVAC, plumbing, general contracting) requiring an immediate impression of trust, licensed authority, punctuality, and uncompromising reliability. 

The aesthetic is **Corporate Modern with High-Contrast Industrial utility**. It combines crisp pure white surfaces with commanding, deep navy field plates and urgent, high-energy red accents. The UI avoids soft decorative gimmicks in favor of structural clarity: heavy uppercase titles, crisp 4px to 6px corner radiuses, clean thin rules, high-contrast typography, and round badge iconography that signals certifications, safety, and direct phone contact.

## Colors

The palette establishes an authoritative, all-American trade service visual language:

- **Primary (`#122543` / `#1E3A8A` range):** A commanding midnight navy blue utilized for primary headers, full-width alternating service bands, high-priority navigation links, and structural container backgrounds.
- **Secondary (`#C8102E`):** A bright crimson red dedicated to conversion triggers—primary phone dispatch buttons, emergency banners, review star icons, and circular badge outlines.
- **Tertiary (`#2563EB`):** A vivid electric blue reserved for subtle highlights, interactive link hovers, badge rings, and focused form outlines.
- **Neutral (`#4B5563`):** Neutral slate grays for readable body text on white sections, balanced with `#94A3B8` for secondary text against dark navy canvas tiers, and `#E2E8F0` for structural grid borders and horizontal dividers.
- **Base Surfaces:** Pure `#FFFFFF` canvas alternating rhythmically with `#0F1E36` deep dark navy field plates.

## Typography

The typographic pairing provides high clarity and industrial strength:
- **Headlines (Montserrat):** Bold, wide geometric uppercase or sentence-case headers communicate stability, licensed credibility, and visibility from a distance. Primary section titles should utilize uppercase styling (`text-transform: uppercase`) with subtle letter spacing (`0.02em` to `0.05em`).
- **Body & Captions (Inter):** Highly legible, neutral sans-serif designed for frictionless reading across desktop service descriptions, mobile estimate forms, and contractor credentials.
- **Accents:** Red badge callouts and emergency badges apply uppercase Montserrat bold weights for rapid scanning.

## Layout & Spacing

The layout operates on a 12-column responsive fluid grid with a maximum content container width of `1240px`.

- **Section Alternation:** Content flows between full-bleed Pure White (`#FFFFFF`) and Deep Navy (`#122543`) vertical sections. Each section receives generous vertical breathing room (`space-2xl` desktop, `space-xl` mobile).
- **Service Cards & Badges:** Multi-column grids reflow from 4 or 3 columns on desktop down to 2 columns on tablet, collapsing cleanly to single-column vertical stacks on mobile screens.
- **Contact & Trust Strips:** Horizontal icon badge bars (e.g., "Licensed & Insured", "Since 1989", "Free Estimates") feature equal distribution across a flex row on wide screens and a 2x2 grid on mobile viewports.

## Elevation & Depth

This system avoids blurred decorative neumorphism and complex multi-step drop shadows. Depth is achieved through contrast, framing, and clean linear overlays:

- **Flat Surface Anchors:** Primary cards resting on white backgrounds use a crisp `1px solid #E2E8F0` border with a subtle ambient shadow (`0 2px 8px rgba(18, 37, 67, 0.06)`).
- **Navy Surface Depth:** When cards reside on navy sections, they employ translucent field cards (`rgba(255, 255, 255, 0.06)`) bounded by a subtle `1px solid rgba(255, 255, 255, 0.15)` border and an inner hairline highlight.
- **Image Overlays:** Hero panels and featured service cards use dark navy gradient overlays (`linear-gradient(180deg, rgba(18, 37, 67, 0.85) 0%, rgba(18, 37, 67, 0.95) 100%)`) over on-site photography to ensure 100% legibility of overlaid white Montserrat text.
- **Badge Lift:** Circular icon badges apply a clean double-ring effect: a solid `#FFFFFF` disk surrounded by a `2px solid #C8102E` or `#1E3A8A` ring, accompanied by a micro shadow (`0 4px 12px rgba(0,0,0,0.08)`).

## Shapes

The design language embodies structural rigidity and practical service equipment:
- **Base Components (Inputs, Buttons, Cards):** Built with subtle `roundedness: 1` (4px to 6px). This delivers a sharp, clean architectural silhouette while softening extreme harsh corners.
- **Badges & Trust Seals:** Exceptionally circular (`rounded-full` / 50% border radius) for credential seals, year stamps, technician portraits, and five-star rating containers.
- **Dividers:** Crisp 1px to 2px solid lines with zero roundedness, anchoring headers and review quotes.

## Components

### Buttons
- **Primary CTA (Phone / Emergency / Book Now):** Solid `#C8102E` crimson background, `#FFFFFF` bold Montserrat text, 4px border radius, uppercase typography, padding `12px 24px`. Hover state shifts to `#A60D24` with a quick 150ms transition.
- **Secondary CTA (View Services / Details):** Solid navy `#122543` background or ghost outline with a `1.5px solid #FFFFFF` or `1.5px solid #122543` border, white or navy bold text.
- **Navigation Action Button:** Compact dark navy button in the top navigation bar with 4px border radius and uppercase text for "Contact Us" or "Schedule Service".

### Trust & Credential Badges
- Circular containers (`80px` to `96px` diameter) centered above title text.
- White background, `2px solid #C8102E` outer perimeter, housing clean red trade icons (wire strippers, panel boards, shield checkmarks, 24/7 clocks).

### Cards (Service & Testimonial)
- **Service Tiles:** Contained blocks displaying high-contrast photography under dark navy tint filters, bold uppercase Montserrat headers, 2-line service summary in white Inter body text, and an outlined rectangular link button at the bottom.
- **Review / Testimonial Cards:** Solid deep navy `#0F1E36` cards with `1px solid rgba(255,255,255,0.12)`, featuring a row of 5 filled red stars (`#C8102E`), italicized quotation body in `#E2E8F0`, and an em-dash author signature in bold white uppercase.

### Header & Navigation
- Crisp white (`#FFFFFF`) header with a centered trade logo, left-aligned standard navigation links in bold dark blue (`#122543`), and right-aligned social badges and primary CTA button.
- Bottom border features a crisp `1px solid #E5E7EB` baseline.

### Input Fields & Forms
- Crisp white fill, `1.5px solid #CBD5E1` border, 4px corner radius, dark slate text.
- Focus state activates a `2px solid #1E3A8A` perimeter with no heavy blur ring.