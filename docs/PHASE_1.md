# Phase 1 — Local CV

Status: Phase 1 complete. Phase 2 publication is not started.

This is the historical local-only milestone record. See [Phase 2 verification](PHASE_2.md) for the later public release and current publication evidence.

## Delivered

Seven distinct Vue Router pages, route titles, a not-found recovery page, typed static profile/project/skill/experience modules, the supplied local portrait with an accessible failure state, a shared shell, responsive navigation, keyboard focus management, reduced-motion support, safe external links, project placeholders, and a Vercel SPA rewrite.

The original plan is preserved in `IMPLEMENTATION_PLAN.md`. Content sources and factual limits are recorded in `CONTENT_SOURCES.md`. No backend, database, environment variables, API credentials, or runtime network content are required. Runtime dependencies are Vue and Vue Router; the remaining packages are build/type-check/browser-test tools.

## Verification

Checked on 2026-10-26 with Node.js 24.19.0, npm 11.17.0, Vue 3.5.44, Vue Router 4.6.4, TypeScript 5.9.3, Vite 7.3.7, and Playwright 1.64.1.

| Check | Result |
| --- | --- |
| `npm run type-check` | Passed; strict TypeScript, no errors. |
| `npm run build` | Passed; 66 modules transformed, production output in `dist/`. The build also runs type checking. |
| `npm run test:e2e` | 18 passed, 0 failed, 16.0 seconds; installed Microsoft Edge, headless, local production preview. |
| `git diff --check` | Passed before final staging. |
| Original plan and portrait copies | SHA-256 matches their supplied source files. |
| Configuration review | No new environment variables, backend hooks, migrations, credentials, or runtime network requests. `import.meta.env.BASE_URL` is Vite’s built-in static base path. |

Browser checks cover all seven routes by direct visit and reload, unique titles and active navigation, not-found recovery, valid portrait loading and a blocked-image fallback, mobile keyboard use, Escape focus restoration, current-route selection, route-change closing/focus/announcements, resizing across the navigation breakpoint, browser back/forward, the skip link, contact destinations, external-link safety, and normal/reduced motion. All seven routes fit 360, 768, 1024, and 1440 CSS-pixel viewports without horizontal overflow.

The first browser run found four pixels of mobile overflow caused by the rotated portrait outline. Its mobile inset was corrected; the complete final suite passed. No clipping workaround was added to the page.

Six generated screenshots were visually inspected: Home at all four widths, plus Projects at 360 and 1440 pixels. The screenshots remain under ignored `test-results/`; rerunning the suite regenerates them. This is browser emulation, not physical-device proof. Local preview reloads do not verify Vercel hosting.

The production portrait is 110.57 kB. The main JavaScript bundle is 99.11 kB (38.89 kB gzip), with lazy-loaded route modules; CSS is 16.43 kB (3.83 kB gzip). These are build sizes, not measured network or performance results.

## Remaining boundaries

`origin` currently points to `https://github.com/Etriii/personal-cv.git`. That configuration appeared during implementation and was preserved; the implementation did not add or alter it. No repository was created remotely, no push was performed, and no deployment was attempted. Remote contents and history have not been checked for integration.

Physical devices, assistive technology, other browser engines, third-party contact-app launching, social-account ownership, and public deployment remain unverified. Project screenshots and detailed achievement/certificate content remain intentional placeholders.

Phase 2 must inspect the intended remote repository, verify live Vercel fallback behavior, and replace the README live-URL placeholder only after a real deployment exists.
