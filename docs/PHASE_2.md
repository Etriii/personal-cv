# Phase 2 — Public release verification

Status: public application verified on 2026-10-26. GitHub and Vercel publication use the existing dedicated repository and project.

- GitHub: <https://github.com/Etriii/personal-cv>
- Live site: <https://personal-cv-two-lime.vercel.app>
- Production branch: `main`.

## Publication and version evidence

The initial remote `main` was `9560758c9b99702c2e654c6c5d6a1f473c727723`, an ancestor of the completed local application. The public GitHub API confirmed the repository, its visibility, and the homepage URL. No unrelated repository content or history was overwritten.

The verified application milestone `bb347cba78c02ddf458edbb565a7290608bef05d` was pushed as a normal fast-forward. Its existing Vercel integration reported `success` and “Deployment has completed.” The application was then tested through its actual public domain. The release handoff adds documentation and browser-test tooling without changing application sources; its exact commit, remote branch, deployment status, and public build are rechecked at handoff.

The existing Vercel project and GitHub connection were reused. Git credentials allowed pushing even though the GitHub CLI was not signed in. The Vercel CLI was also signed out; deployment proceeded through the already configured GitHub integration. No Vercel project settings, account credentials, or environment variables were changed.

## Checks and results

| Check | Result |
| --- | --- |
| `npm run type-check` | Passed; no TypeScript errors. |
| `npm run build` | Passed; 66 modules, production output in `dist/`. |
| `npm run test:e2e` | 18 passed against the local production preview. |
| `npm run test:e2e -- --grep portrait` | 1 passed after fixing the image test’s loading wait. |
| `npm run test:live` | 18 passed against the public Vercel domain. |
| Public HTTP route checks | Home, six supporting routes, and an unknown route returned HTTP 200 with the expected build entry assets. The unknown route renders the client’s not-found page. |
| Public asset integrity | Main JavaScript, CSS, favicon, and portrait returned HTTP 200 and matched SHA-256 hashes of the local build/source bytes. |
| Git history and publication | Genuine milestone history, preserved remote ancestry, normal fast-forward pushes, public repository, and Vercel commit success status. |
| Configuration review | No new packages, application environment variables, migrations, database hooks, backend services, or runtime API calls. Added only a browser-test script and public-target test configuration. |

The first public-browser run exposed an immediate image-completion assertion that could execute before the network image loaded. The test now polls for completion and a nonzero natural width. Screenshot capture also waits for image decoding to prevent partial-image evidence. The focused local regression and complete live suite passed. No application behavior was changed to accommodate the tests.

Public nested routes are exercised by direct navigation and reload, not only by client-side links. The same suite verifies all route titles and active links, route-change focus and announcements, browser back/forward, skip navigation, mobile keyboard use, Escape and current-route focus restoration, menu closing and resizing, real contact destinations, safe new-tab links, portrait loading/failure, not-found recovery, and normal/reduced motion.

## Rubric review

| Criterion | Evidence and limit |
| --- | --- |
| CV Content | All required pages and supplied identity, education, experience, leadership, and contact content are present. Project sources and self-reported facts remain distinguished. Screenshot and certificate details are intentionally incomplete. |
| UI Design | Shared off-white/ink/teal tokens, typography, spacing, portrait treatment, and editorial layouts. Public Home screenshots at four widths and Projects screenshots at mobile/desktop are visually reviewed. |
| User Experience | Distinct routes, active navigation, working actions, mobile menu, keyboard paths, visible focus styles, route focus, announcements, and recovery links. Public browser checks pass. |
| Animation | Short opacity/transform page entry and hover feedback; reduced-motion tests confirm animations and transitions are disabled while content stays available. |
| Responsive Design | Every main route fits 360, 768, 1024, and 1440 CSS-pixel widths without horizontal overflow. Screenshots verify portrait proportions, readable content, and navigation access. This is browser emulation. |
| Functionality | Public route visits/reloads, links, menu, assets, fallback states, and not-found recovery pass. Native email/phone destinations are checked without sending messages or initiating calls. |
| Code Quality | Feature-owned domain types/static data/presentation, shared components, composable-owned interactions, strict TypeScript, and production build. No additional application layers or dependencies were needed. |
| GitHub Usage | Dedicated public repository, source, lockfile, setup/deployment documentation, genuine Conventional Commit history, and normal fast-forward publication. |
| Vercel Deployment | Public site responds, Vercel reports successful deployment, live browser checks pass, nested-route refreshes work, and public asset hashes match the local build. |

## Evidence artifacts and remaining limits

`npm run test:live` uses `playwright.production.config.ts` and regenerates screenshots under ignored `test-results/live/`. Six public screenshots cover Home at all four target widths and Projects at 360/1440 pixels. Failure traces are retained only on failure. Successful browser runs do not establish physical-device or assistive-technology proof.

Project screenshots and detailed certificates remain intentional placeholders. Role dates, event names, issuers, and individual feature contributions remain unavailable beyond the evidence listed in `CONTENT_SOURCES.md`. Social URLs are supplied account links; their ownership is not independently established. External email/calling applications, physical devices, screen readers, and other browser engines remain untested. None of these limits is represented as completed proof.
