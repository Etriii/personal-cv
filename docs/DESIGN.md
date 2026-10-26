# Dark portfolio design

The portfolio uses a dark editorial direction: charcoal surfaces, mint actions, cool neutral body text, strong sans-serif headings, compact monospace labels, a monochrome portrait, and consistent SVG icons. The real profile content, seven routes, contact actions, and project/certificate limitations remain intact.

## Design ownership

`src/styles/tokens.css` holds palette primitives, semantic surfaces/foregrounds, component treatments, spacing, typography, and timing. `global.css` owns the shared shell and controls; `pages.css` owns page composition. Shared arrow icons live in `components/ui/ArrowIcon.vue`. The supplied portrait is styled with CSS; the image file is unchanged.

| Purpose | Color |
| --- | --- |
| Page | `#0c0f14` |
| Surface | `#12171e` |
| Raised surface | `#1a222c` |
| Primary text | `#f0f3f6` |
| Secondary text | `#acb7c4` |
| Primary action/accent | `#c3f58a` |
| Secondary accent | `#8bdfd1` |

Primary buttons use dark text on mint. Normal primary, secondary, and mint text are checked at a minimum 4.5:1 contrast on the three shared dark surfaces. Dark mode is the fixed presentation and does not depend on a saved preference, system theme, environment variable, or startup script.

The local `ui-ux-pro-max`, `design-system`, and `ui-styling` guidance informed contrast, semantic tokens, responsive layouts, focus, and motion. Dataset recommendations were filtered for this existing Vue portfolio. The broad generator’s FAQ/handwritten suggestions were unsuitable; its focused dark-style and reduced-motion guidance fit. Two Vue motion searches returned no verified match, so the implementation uses native browser animation APIs with Vue lifecycle cleanup.

## Motion

- Pages enter with a short opacity/vertical transition.
- Homepage text enters in a finite stagger; the portrait and decorative orbit settle once.
- Navigation, buttons, SVG arrows, and project illustrations respond to hover or interaction.
- Feature rows/cards reveal once when they enter the viewport. No scroll position is intercepted or pinned.

`useRevealMotion` owns IntersectionObserver and Web Animations API lifecycles. Route changes cancel existing animations and replace the observer. Watching matched routes covers the first lazy homepage load even when its path remains `/`. Focused content finishes its reveal immediately. Enabling reduced motion cancels running animations and suppresses subsequent reveals; CSS entrances/transitions are disabled as well.

Content is visible by default. Missing browser reveal APIs leave it readable and navigable. There are no perpetual animations, animation dependencies, new packages, fonts fetched from a provider, or new backend/configuration requirements.

## Verification

The production browser suite contains 22 checks: the existing 18 route/interaction/responsive checks plus dark contrast with both system color preferences, first-load scroll reveal and live reduced-motion changes, and navigation without reveal APIs. Target widths remain 360, 768, 1024, and 1440 CSS pixels.

Local verification on 2026-10-26: `npm run type-check` and `npm run build` passed; `npm run test:e2e` passed all 22 checks in 26.8 seconds. Desktop/mobile Home and Projects screenshots were visually inspected before publication.

Screenshots are generated under ignored `test-results/` locally and `test-results/live/` on the public target. Type checking and the production build are required before publication; the live suite verifies the deployed update afterward. Earlier phase records describe their original release snapshots.

Browser emulation does not establish physical-device, screen-reader, or other-browser-engine proof. Project screenshots and detailed certificates remain intentional content gaps.
