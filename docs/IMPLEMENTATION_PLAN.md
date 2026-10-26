# Personal CV Website Implementation Plan

## Understanding and confidence

Build a professional personal CV website for **Alex, Jr. A. Aparece**, with the title **Fullstack Developer**. Use **Vue 3, TypeScript, Vite, and Vue Router**. Navigation must open distinct route pages, rather than scroll to sections on one long page. Deliver a dedicated GitHub repository and a publicly accessible Vercel deployment.

Use the feature-based `domain`, `data`, and `presentation` organization from the supplied authentication module. Adapt its ownership boundaries to a static CV. Keep content, presentation logic, and Vue templates separate. Do not add authentication, a backend, a database, or runtime GitHub API calls.

Confidence in requirements and technical approach: **95%**. Completing both phases in about one hour depends on available packages, usable GitHub/Vercel access, and quickly identifying verifiable project details. The time allocations are targets, not completion guarantees.

This document is a plan. Website implementation, installation, repository creation, commits, pushing, and deployment have not started.

## Sources and current state

- Requirements: `C:\Users\ACER\Downloads\CV_ForRequirements.pdf`, all six pages read.
- Architecture reference: `D:\A Collection Of developed systems\Development\collection_management_system\src\pages\auth`.
- Working directory: `D:\A Collection Of developed systems\ActiveDevelopment\cv`.
- The working directory was empty and was not a Git repository when inspected.
- Profile image exists: `C:\Users\ACER\Downloads\785279902_1708494626936165_7436392022395885412_n (1).png`.
- GitHub profile: <https://github.com/Etriii>.
- Grading covers CV content, UI design, user experience, animation, responsive design, functionality, code quality, GitHub usage, and Vercel deployment.
- GitHub profile content, project repositories, external account access, and live deployment have not been verified.

## Scope and page map

| Route | Content |
| --- | --- |
| `/` | Name, developer title, real portrait, short introduction, career objective, and links to Projects and Contact. |
| `/about` | Basic information, personal description, career interests, education, and academic highlights. |
| `/skills` | Technical skills grouped by purpose, supported by the GitHub profile or verified project stacks. |
| `/projects` | Selected projects with descriptions, technologies, intentional screenshot placeholders, and verified repository links. |
| `/experience` | Internship, independent project work, volunteering, organization role, and systems leadership. |
| `/achievements` | Dedicated page with an honest short notice that the detailed achievements and certificates have not yet been added. |
| `/contact` | Email, phone, location, GitHub, LinkedIn, Facebook, and Instagram. |
| unmatched paths | Accessible not-found page with a working return-home link. |

Each main route needs its own meaningful content and page title. Short pages may scroll naturally. Shared navigation must change routes. Use Vue Router HTML5 history and a Vercel SPA fallback so direct visits and refreshes work.

### Content to use

- **Name:** Alex, Jr. A. Aparece.
- **Title:** Fullstack Developer.
- **Suggested introduction:** "I'm a fourth-year BS Information Technology student at Davao del Norte State College. I build full-stack applications, solve programming problems, and contribute to projects that connect useful ideas with working software."
- **Suggested objective:** "To grow as a full-stack developer by building reliable software, contributing to a strong engineering team, and creating lasting financial stability for my family."
- **Personal description:** Enjoys complex programming problems, project collaboration, gaming, and recording ideas for future software projects. Works effectively under pressure. Use professional language without inventing strengths or achievements.
- **Location:** Prk. 2 FFF Village, Bobongon, Sto. Tomas, Davao del Norte.
- **Email:** `alexarnaizapece@gmail.com`. Preserve this exact supplied spelling unless the owner corrects it.
- **Phone:** Display `09633127462`; link with `tel:+639633127462`.
- **Education:** Davao del Norte State College; Bachelor of Science in Information Technology; fourth year. Do not invent dates or senior high school details.
- **Academic highlights, self-reported:** NC II in Computer Systems Servicing; hackathon and programming competition participation; first-place hackathon award; Rubik's Cube champion; fourth-place chess finish; Codex Programmer President. Do not invent event names, dates, issuers, or certificate images.
- **Experience:** Appwardtech intern; independent software project development and contributions; helping with the family farm; teaching or assisting IT students when instructors are absent; Codex Programmer President.
- **Leadership:** Led development of eight systems and work toward a shared platform using APIs, a shared database, and API synchronization for other databases. Do not imply all integrations are already complete.
- **Achievements page:** "Detailed achievements and certificates have not yet been added." Keep known academic highlights on About; do not invent a certificate gallery.
- **Project screenshots:** Styled placeholders are explicitly allowed. Show a neutral illustration or labeled placeholder, never a broken image or fabricated screenshot.
- **GitHub:** <https://github.com/Etriii>.
- **LinkedIn:** <https://www.linkedin.com/in/alexaparecejr>.
- **Facebook:** <https://www.facebook.com/alexaparecejr>.
- **Instagram:** <https://www.instagram.com/alexaparecejr/>.

For projects, inspect the GitHub profile and selected repository README files. Use `git remote -v` only in relevant local project repositories; never change them. Confirm technologies from manifests or source where available. Distinguish personal contributions from ownership. If information is unavailable, record the gap rather than invent a description, URL, metric, or skill rating.

## Architecture

The reference module uses Vue pages, presentation composables and Pinia stores, domain entities and use cases, and data repositories/API adapters. Retain the feature organization and separation of responsibilities. A static CV does not need the authentication module's full repository and datasource chain.

```text
src/
  app/
    App.vue
    router.ts
  components/
    layout/
      SiteHeader.vue
      SiteFooter.vue
    ui/
      PageHeading.vue
      SocialLinks.vue
  pages/
    profile/
      domain/entities/profile.ts
      data/profile.ts
      presentation/components/
      Home.vue
      About.vue
      Contact.vue
    skills/
      domain/entities/skill.ts
      data/skills.ts
      presentation/components/
      Skills.vue
    projects/
      domain/entities/project.ts
      data/projects.ts
      presentation/components/ProjectCard.vue
      Projects.vue
    experience/
      domain/entities/experience.ts
      data/experience.ts
      presentation/components/
      Experience.vue
    achievements/
      Achievements.vue
    NotFound.vue
  composables/
    useMobileNavigation.ts
    usePageNavigation.ts
  assets/
    images/profile.png
  styles/
    tokens.css
    global.css
public/
  projects/
index.html
vercel.json
README.md
```

Create only files with a concrete responsibility; omit empty component folders or unnecessary wrappers. Domain types must remain independent of Vue and data modules. Data modules export typed static content. Pages compose presentational components. Composables own stateful interactions such as mobile navigation and route-change focus handling.

Use a store only if actual shared state requires one. Use native `mailto:`, `tel:`, and external links for contact. No fake message form, nonfunctional download button, repository interfaces for a single static source, pass-through use cases, or environment variables for fixed content.

## Visual and interaction direction

- Use a restrained professional palette: warm off-white background, dark ink text, and a deep teal accent. Define colors, spacing, radii, and typography as CSS tokens.
- Create a consistent shell with prominent name or initials, persistent desktop navigation, active-route styling, a compact mobile menu, and a simple footer.
- Give the homepage a clear portrait-and-introduction composition. Keep supporting pages readable, with strong headings and purposeful whitespace.
- Use system fonts, comfortable line heights, readable body text, accessible contrast, and visible keyboard focus. Prefer a few deliberate components over many decorative cards.
- Animate page entry and button/card feedback with short opacity and transform transitions. Honor `prefers-reduced-motion`; keep all content accessible without animation.
- Mobile menu must expose `aria-expanded`, close on route change and Escape, and restore focus appropriately. Manage focus and document titles when routes change. Include a skip link.
- Keep layout usable at 360, 768, 1024, and 1440 CSS pixels. Verify readable text, image proportions, touch targets, navigation access, and no horizontal overflow.
- New-tab external links need `rel="noopener noreferrer"`. Portrait needs meaningful alt text; decorative graphics should be hidden from assistive technology.

## Phase 1 — Build the complete local CV (target: 40 minutes)

### Execution prompt

> Implement Phase 1 of this plan only. Read applicable AGENTS.md instructions and inspect the current directory before editing. Use Vue 3, TypeScript, Vite, and Vue Router. Follow the supplied feature-based architecture reference, with lean domain/data/presentation separation. Build all specified route pages, typed content modules, reusable components, responsive navigation, accessible interactions, subtle reduced-motion-aware animation, portrait, project placeholders, and README. Verify project facts from available sources and record missing facts honestly. Do not modify reference repositories. Initialize Git only in this CV directory and make real Conventional Commits at completed milestones. Install only dependencies needed for the approved implementation. Do not create a remote repository, push, or deploy during Phase 1. Run type checking and the production build. Report exact results and unresolved gaps, then stop.

### Work and outputs

1. Recheck Git ownership and existing files. Preserve this plan and any work added after it. If no application exists, scaffold the Vue TypeScript app without overwriting existing files. Initialize a dedicated Git repository only if one does not already exist.
2. Add Vue Router, the feature structure, content types, static content modules, and the shared shell. Copy the supplied portrait into project assets; do not reference an absolute Windows path from the website.
3. Read the GitHub profile and verify a small selection of representative projects. Avoid allowing network research to consume the build window. Record any unavailable source details.
4. Build every route and its content, reusable components, navigation, responsive styles, animation, and accessible focus behavior.
5. Add a SPA rewrite in `vercel.json`, the required build scripts, lockfile, and README. No secrets, backend configuration, or environment variables are expected.
6. Make multiple meaningful commits as milestones complete, such as scaffold/routing followed by CV content/design. Stage explicit task files, inspect staged content and whitespace, and use Conventional Commit messages without signatures or conversational text.
7. Run `npm run type-check` and `npm run build`. Inspect the production preview if browser tooling is available. Fix discovered implementation failures before stopping.

### Phase 1 acceptance

- All seven main routes render distinct, meaningful pages; unknown paths have a recovery link.
- Supplied identity, education, experience, social links, and honest placeholders are present.
- All content stays typed and separate from templates; stateful interactions have clear ownership.
- Portrait and local assets resolve. Every displayed action has working behavior.
- Type checking and production build pass. Document unavailable browser proof explicitly.
- README contains title, description, stack, student name, setup commands, folder explanation, deployment instructions, and a clearly marked live-URL field awaiting Phase 2.
- Git history reflects actual completed milestones. No remote publication has occurred.

## Phase 2 — Verify, publish, and prove deployment (target: 20 minutes)

### Execution prompt

> Implement Phase 2 of this plan only. Inspect Phase 1 output, Git status, and outstanding gaps. Verify all nine rubric criteria using the smallest sufficient checks. Fix defects within this CV scope. Run type checking and production build, check route navigation and keyboard use, and inspect responsive layouts at the specified widths where browser tooling is available. Create or connect the owner's dedicated GitHub repository and deploy it to Vercel using existing authorized accounts. Never overwrite an unrelated remote or production project. If account access or required authorization is missing, finish all independent local work and report the exact remaining action; do not claim publication succeeded. Verify the deployed home page and direct visits/refreshes of nested routes. Update README with the actual public URL, commit verified changes, and push them so repository, deployment, and README agree. Report evidence, URLs, commit hashes, remaining gaps, then stop.

### Work and outputs

1. Check all rubric rows below. Fix broken links, missing assets, misleading content, overflow, keyboard failures, and route-refresh failures.
2. Run `npm run type-check` and `npm run build`. Use the production preview for local browser checks. Exercise the mobile menu, active navigation, contact links, external links, browser back/forward, and not-found recovery.
3. Confirm a dedicated personal GitHub repository. Inspect any existing `origin` before changing it. Push the real milestone history without rewriting timestamps or manufacturing commits.
4. Import that repository into Vercel. Use the Vite preset, project-root directory, `npm run build`, and `dist` output. Confirm Node compatibility with installed package requirements. Commit any configuration actually required.
5. Open the actual public URL. Check home, every main route, a direct nested-route visit, refresh, and static assets. Distinguish external sites being reachable from their profiles being the correct accounts.
6. Put the real Vercel URL in README. Commit and push final documentation/fixes, wait for the resulting deployment, and verify the final deployed version.
7. Report GitHub URL, Vercel URL, exact commit hashes, checks performed, and any unverified criteria. Do not count configured deployment as public deployment proof.

### Rubric acceptance and evidence

| Criterion | Acceptance | Evidence |
| --- | --- | --- |
| CV Content | Required sections, professional wording, verifiable skills/projects, transparent achievement and screenshot placeholders. | Inspect every route against the content list; list unresolved factual gaps. |
| UI Design | Consistent palette, typography, spacing, portrait treatment, and clear page hierarchy. | Desktop and mobile screenshots plus visual inspection. |
| User Experience | Distinct pages, active navigation, readable content, keyboard access, useful mobile menu, and clear actions. | Navigate all routes by mouse and keyboard; check focus and back/forward behavior. |
| Animation | Subtle, responsive transitions with no hidden content or layout disruption. | Exercise normal motion and reduced-motion preference. |
| Responsive Design | Usable desktop, laptop, tablet, and mobile layouts without overflow. | Inspect 360, 768, 1024, and 1440 CSS-pixel widths. Record emulation separately from physical-device tests. |
| Functionality | Links, menu, routes, images, placeholders, and components work; nested routes survive refresh. | Local production preview checks and deployed route/asset checks. |
| Code Quality | Feature-based domain/data/presentation ownership, strict TypeScript, small components, and no duplicated content. | Source review, `npm run type-check`, and `npm run build`. |
| GitHub Usage | Dedicated repository, complete source, readable structure, required README fields, and genuine milestone commits. | Inspect public repository, tracked files, README, and commit history. |
| Vercel Deployment | Final website is publicly accessible and serves the version documented in README. | Open actual Vercel URL and directly load/refresh nested routes after final deployment. |

## Recovery and stop conditions

- If installation or network access fails, record the exact failure. Do not claim a build, profile lookup, push, or deployment passed.
- If a project cannot be verified quickly, leave it out or mark its missing details explicitly. Do not fabricate repository links or skills.
- If portrait loading fails, keep layout stable with an accessible fallback and report the unresolved asset issue.
- If GitHub or Vercel access is missing, finish the local application and deployment configuration, then record the precise account action needed. Keep GitHub/deployment criteria pending.
- Intentional screenshot and detailed-certificate placeholders remain content limitations. They may reduce the content score; they are not proof of full content completeness.
- Do not start another phase automatically. Do not add optional features once the selected phase's acceptance conditions are met.

## Final handoff format

Report the completed phase, changed paths, exact verification results, actual commit hashes, GitHub URL, Vercel URL, and material remaining gaps. Keep local automated proof, browser inspection, physical-device testing, and public deployment proof distinct.
