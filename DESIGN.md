# Design Brief: Prakash Electronics

**Tone:** Premium retail authority, trustworthy electronics expert, accessible Indian retail warmth.
**Differentiation:** Contact-first UX with high-trust navy + orange, prominent phone/WhatsApp in 4+ locations, embedded map, clean grid layout.

## Palette

| Token | OKLCH | Hex | Purpose |
| --- | --- | --- | --- |
| Primary | `0.10 0.04 264` | `#0A1628` | Headers, footers, text |
| Accent | `0.65 0.25 39` | `#FF6B00` | CTAs, highlights |
| Success | `0.63 0.17 142` | `#22C55E` | WhatsApp |
| Foreground | `0.98 0 0` | `#FAFAF8` | Light text |
| Background | `0.98 0 0` | `#FAFAF8` | Light surfaces |
| Card | `1.0 0 0` | `#FFFFFF` | Elevated surfaces |
| Muted | `0.94 0 0` | `#F0F0ED` | Subtle separators |

## Typography

| Layer | Family | Scale | Weight | Purpose |
| --- | --- | --- | --- | --- |
| Display | General Sans | 48–56px | 700–800 | Hero, titles |
| Heading | General Sans | 28–32px | 700 | Card titles |
| Body | General Sans | 16px | 400–500 | Text |
| Small | General Sans | 14px | 400 | Labels |
| Mono | Geist Mono | 12–14px | 400–600 | Specs |

## Structural Zones

| Zone | Background | Treatment |
| --- | --- | --- |
| Sticky Header | Navy | Fixed, white text, clickable phone |
| Hero | Navy | Dark, bold headline, orange CTAs |
| Content | White | Alternating grey sections |
| Cards | White | Subtle border, lift on hover |
| Contact | Navy | Split: left info, right map |
| Footer | Navy | Mirrors header |
| Mobile CTA | Navy | Fixed bottom, split Call/WhatsApp |

## Component Patterns

- **Buttons:** Orange for primary (Call, Directions, WhatsApp), navy secondary, white outline on dark
- **Cards:** White bg, subtle border, icon + title + description, shadow-sm → shadow-md on hover
- **Contact:** Large touch targets (48px), green WhatsApp, orange Call
- **Forms:** Navy labels, grey inputs, orange focus ring

## Motion & Animation

- **Transition:** `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` smooth
- **Card hover:** Lift 4px, shadow elevation
- **Section entry:** Fade-in + slide-up 16px over 0.4s
- **NO bouncy animations** — premium feel maintained

## Responsive

- **Mobile:** 1 column cards, stacked contact, fixed CTA bar
- **Tablet:** 2–3 column cards, side-by-side contact
- **Desktop:** 6 column grid (2×3), full map

## Accessibility

- **Contrast:** WCAG AAA (navy on white)
- **Focus:** Orange ring on all interactive elements
- **Touch:** 48px minimum heights
- **Mobile:** Floating CTA always visible
