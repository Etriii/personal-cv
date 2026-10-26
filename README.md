# Alex Aparece — Personal CV

A professional, responsive personal CV for **Alex, Jr. A. Aparece**, **Fullstack Developer** and fourth-year BS Information Technology student at Davao del Norte State College. Seven distinct pages present his profile, education, skills, projects, experience, achievements, and contact information.

**Live URL:** Pending Phase 2 — not deployed.

**CV repository:** [Etriii/personal-cv](https://github.com/Etriii/personal-cv) is the currently configured `origin`. The remote appeared during local implementation and was preserved. Phase 1 did not create it, configure it, or push to it. Check its contents and history before publication in Phase 2.

## Stack and requirements

Vue 3, TypeScript, Vite, and Vue Router with HTML5 history. CSS uses system fonts and a shared warm off-white, ink, and deep teal palette. Playwright is a development dependency for browser verification; it is not shipped in the application.

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

## Routes and behavior

| Route | Content |
| --- | --- |
| `/` | Introduction, objective, portrait, education, project/contact links |
| `/about` | Personal description, interests, education, academic highlights |
| `/skills` | Technology groups with public project evidence |
| `/projects` | Three verified public projects and labeled screenshot placeholders |
| `/experience` | Internship, project work, student leadership, volunteering, family farm support |
| `/achievements` | Honest notice that detailed achievements and certificates are pending |
| `/contact` | Native email/phone actions, location, four social profiles |
| Other paths | Not-found page with a working home link |

Navigation changes pages. Each route updates its document title and announces its name. Client-side route changes focus the main content. The mobile menu supports keyboard access, Escape, route-change closing, and focus restoration when selecting the current route. A skip link, visible focus indicators, meaningful portrait alternative text, safe external links, and reduced-motion styles are included.

## Folder ownership

```text
src/
  app/                  Application shell, route definitions, navigation
  components/layout/    Shared header and footer
  components/ui/        Page headings and social links
  composables/          Mobile menu and route/focus behavior
  pages/
    profile/            Home, About, Contact, typed profile, portrait component
    skills/             Typed skill groups and Skills page
    projects/           Typed projects, project cards, Projects page
    experience/         Typed experience data and Experience page
    achievements/       Achievement notice data and page
    NotFound.vue        Route recovery
  assets/images/        Bundled supplied portrait
  styles/               Design tokens, shared shell, page layouts
tests/                  Production-browser behavior and responsive checks
docs/                   Original plan, content sources, Phase 1 evidence
```

Feature `domain/entities` modules define framework-independent types; `data` modules export typed static content. Pages compose presentational components. Composables own stateful behavior. No shared store is needed for this static site. Edit profile facts in `src/pages/profile/data/profile.ts`, not in templates. Project, skill, and experience modules follow the same ownership pattern.

## Content and limitations

See [content sources](docs/CONTENT_SOURCES.md) for the verified repositories and evidence boundaries. The supplied email spelling `alexarnaizapece@gmail.com` is preserved exactly. Experience and academic highlights are self-reported. Missing dates, event names, certificate details, and individual project contribution details remain explicitly unclaimed. Project illustrations are placeholders, not screenshots.

See [Phase 1 verification](docs/PHASE_1.md) for actual check results and remaining proof. The [original implementation plan](docs/IMPLEMENTATION_PLAN.md) is preserved as a historical input; its pre-implementation status is not the current progress record.

## Vercel deployment — Phase 2 only

1. Recheck the existing `origin` and inspect the remote repository’s contents and history before publication. Preserve any independent remote work. Push only after Phase 2 authorization.
2. Import that repository into Vercel with the **Vite** framework preset and this directory as the project root.
3. Use `npm run build` and the `dist` output directory. Select a Node version compatible with the requirement above; Node 24 matches the local build.
4. No environment variables are needed. The committed `vercel.json` supplies the SPA fallback for direct nested-route visits and refreshes.
5. Verify the actual public home page, every route, nested-route reloads, images, and keyboard/mobile navigation. Local preview success does not prove the Vercel rewrite.
6. Replace the pending live URL above with the real URL, commit and push the documentation, and verify the resulting final deployment.

Phase 1 does not create or modify a remote repository, push commits, or deploy anything.
