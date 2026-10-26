# Alex Aparece — Personal CV

A professional, responsive personal CV for **Alex, Jr. A. Aparece**, **Fullstack Developer** and fourth-year BS Information Technology student at Davao del Norte State College. Seven main pages present his profile, education, skills, projects, experience, achievements, and contact information. A separate CV page supports professional printing.

**Live URL:** <https://personal-cv-two-lime.vercel.app>

**CV repository:** <https://github.com/Etriii/personal-cv>. The dedicated public repository contains the genuine implementation milestones. Its existing Vercel integration publishes the `main` branch.

## Stack and requirements

Vue 3, TypeScript, Vite, and Vue Router with HTML5 history. The dark design uses system fonts, charcoal surfaces, mint accents, and a monochrome portrait treatment. Native CSS and browser APIs provide finite entrance animations, scroll reveals, and hover feedback. Playwright is a development dependency for browser verification; it is not shipped in the application.

Use Node.js `^20.19.0 || >=22.12.0` and npm. Local implementation used Node.js 24.19.0 and npm 11.17.0. No backend, database, runtime GitHub requests, environment variables, or secrets are required.

## Local setup

```sh
npm ci
npm run dev
```

Use the URL printed by Vite. To check and preview the production output:

```sh
npm run type-check
npm run build
npm run preview
```

The build also runs the strict TypeScript check. For browser checks, install Microsoft Edge if it is unavailable, then run:

```sh
npm run build
npm run test:e2e
```

Playwright starts and stops a production preview at `http://127.0.0.1:4173`. Port 4173 must be free. The configuration selects the installed Microsoft Edge browser; no downloaded Playwright browser is required. Screenshots and failure traces are written under ignored `test-results/`.

Check the actual public deployment with the same browser suite:

```sh
npm run test:live
```

The production configuration targets the live URL above, starts no local server, and writes screenshots and failure traces under `test-results/live/`. Image checks and screenshot capture wait for the portrait to finish loading and decoding.

## Routes and behavior

| Route | Content |
| --- | --- |
| `/` | Introduction, objective, portrait, education, project/contact links |
| `/about` | Personal description, interests, education, academic highlights |
| `/skills` | Technology groups with public project evidence |
| `/projects` | 31 projects from the local collection and public repositories, with side-project badges and labeled screenshot placeholders |
| `/experience` | Internship, project work, student leadership, volunteering, family farm support |
| `/achievements` | Honest notice that detailed achievements and certificates are pending |
| `/contact` | Native email/phone actions, location, four social profiles |
| `/cv` | Professional CV preview with native printing and Save as PDF support |
| Other paths | Not-found page with a working home link |

Navigation changes pages. Each route updates its document title and announces its name. Client-side route changes focus the main content. The mobile menu supports keyboard access, Escape, route-change closing, and focus restoration when selecting the current route. A skip link, visible focus indicators, meaningful portrait alternative text, safe external links, and reduced-motion styles are included.

The site stays dark regardless of the device’s color-scheme preference. Motion stops when reduced motion is enabled, including animations already running. Content remains readable when reveal APIs are unavailable. See [design and motion](docs/DESIGN.md) for the palette, behavior, and verification boundaries.

**Print CV** appears alongside the Home introduction actions and beside the About heading. It opens `/cv` for review; **Print / Save as PDF** opens the browser’s print dialog. Choose A4 and disable browser headers/footers for a clean copy. The document uses white paper, dark text, text-based sections, verified profile details, and three selected projects, with the complete archive linked online. Missing employment/education dates are omitted. Print-only styling is removed when leaving the CV route; the main website stays dark.

## Folder ownership

```text
src/
  app/                  Application shell, route definitions, navigation
  components/layout/    Shared header and footer
  components/ui/        Page headings and social links
  composables/          Mobile menu and route/focus behavior
  pages/
    profile/            Home, About, Contact, printable CV, typed profile data
    skills/             Typed skill groups and Skills page
    projects/           Typed projects, project cards, Projects page
    experience/         Typed experience data and Experience page
    achievements/       Achievement notice data and page
    NotFound.vue        Route recovery
  assets/images/        Bundled supplied portrait
  styles/               Design tokens, shared shell, page layouts
tests/                  Production-browser behavior and responsive checks
docs/                   Original plan, content sources, phase evidence
```

Feature `domain/entities` modules define framework-independent types; `data` modules export typed static content. Pages compose presentational components. Composables own stateful behavior. No shared store is needed for this static site. Edit profile facts in `src/pages/profile/data/profile.ts`, not in templates. Project, skill, and experience modules follow the same ownership pattern.

## Content and limitations

See [content sources](docs/CONTENT_SOURCES.md) for the verified repositories and evidence boundaries. The supplied email spelling `alexarnaizapece@gmail.com` is preserved exactly. Experience and academic highlights are self-reported. Missing dates, event names, certificate details, and individual project contribution details remain explicitly unclaimed. Project illustrations are placeholders, not screenshots.

The project archive includes systems, developer tools, academic work, and side projects. Related frontend/backend clients and duplicate checkouts are grouped under one project. Side projects carry a visible badge. Source links appear only for verified public repositories; other cards state that the source is not publicly linked.

See [Phase 2 verification](docs/PHASE_2.md) for public deployment evidence and the nine rubric checks. [Phase 1 verification](docs/PHASE_1.md) records the earlier local-only milestone. The [original implementation plan](docs/IMPLEMENTATION_PLAN.md) is preserved as a historical input; its pre-implementation status is not the current progress record.

## Vercel deployment

The existing Vercel project `personal-cv` is connected to this GitHub repository. Phase 2 reused that integration and preserved its project configuration. No duplicate project or deployment account was created.

The committed `vercel.json` declares `npm run build`, the `dist` output directory, and the SPA fallback. Direct visits and refreshes of nested routes were verified on the public domain. No environment variables are required. Node 24 matches the local build; the supported Node range is declared in `package.json`.

For future updates:

1. Run the type check, production build, and local browser suite.
2. Commit the verified changes and push to `main`, preserving independent remote work.
3. Wait for the pushed commit’s Vercel status to report success.
4. Run `npm run test:live` and check that the deployed assets match the intended build.

For a fresh Vercel project, select the **Vite** preset, repository-root directory, `npm run build`, and `dist`. Use a compatible Node version. The existing deployment does not require re-importing the repository.
