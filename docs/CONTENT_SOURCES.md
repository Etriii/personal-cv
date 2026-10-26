# Content sources

Checked on 2026-10-26. Research used public GitHub HTTP requests during implementation. The website bundles static content and makes no GitHub API calls at runtime.

## Supplied profile

Identity, introduction, objective, education, contact details, social URLs, academic highlights, experience, and the eight-system leadership statement come from the supplied implementation plan. The source portrait was copied into `src/assets/images/profile.png`; the website does not refer to the original Windows path.

The email is deliberately `alexarnaizapece@gmail.com`, matching the supplied plan. Do not infer a correction from other account settings. Appwardtech role dates and responsibilities, competition dates and names, certificate issuers, and senior high school details were not supplied. They are not invented.

## Public project evidence

| Project | Checked sources | Supported content |
| --- | --- | --- |
| [Ocean View](https://github.com/Etriii/IT223_resort_booking_and_management_system) | [README](https://github.com/Etriii/IT223_resort_booking_and_management_system/blob/main/README.md), [package.json](https://github.com/Etriii/IT223_resort_booking_and_management_system/blob/main/package.json) | Resort booking/management purpose; Alex explicitly credited among five developers; React, JavaScript, Vite in manifest; PHP and MySQL in README. |
| [Agent Skills](https://github.com/Etriii/agent-skills) | [README](https://github.com/Etriii/agent-skills/blob/main/README.md) | Skill packs, Python standard-library installer, Markdown operation records, backup/recovery, and CLI workflow. |
| [FastAPI Pagination](https://github.com/Etriii/fastapi_pagination) | [README](https://github.com/Etriii/fastapi_pagination/blob/main/README.md), [requirements.txt](https://github.com/Etriii/fastapi_pagination/blob/main/requirements.txt) | Python, FastAPI, SQLModel, SQLAlchemy; page/per-page pagination, response validation, and SQLite described by README. |
| [Motorpool frontend](https://github.com/Etriii/motorpool-management-system-frontend) | [package.json](https://github.com/Etriii/motorpool-management-system-frontend/blob/main/package.json) | Vue 3, Vue Router, TypeScript, Vite, and npm evidence for the Skills page. No unsupported feature descriptions are used. |

The GitHub API confirmed the [Etriii profile](https://github.com/Etriii) and these repositories are public and listed under that account. Repository location does not establish sole authorship. Ocean View explicitly credits collaborators; the remaining selected projects do not itemize individual contributions in the checked sources. No claims about production status, usage, performance, or completion of every README feature are made. LinkedIn, Facebook, and Instagram URLs are supplied contact information; account ownership and login-only pages were not independently verified.

The public `Etriii/personal-cv` repository already exists. It was discovered read-only. A later local Git inspection found `origin` configured to `https://github.com/Etriii/personal-cv.git`; implementation did not configure or change this remote and did not push content. Phase 2 must inspect its contents and history before publication.

## Intentional content gaps

- All three project visuals are labeled screenshot placeholders.
- Detailed achievements and certificates remain pending on their dedicated page.
- Academic highlights and experience are self-reported, with no invented dates or issuers.
- Individual feature ownership and contribution scope are unavailable beyond the explicit Ocean View developer credit.
- Shared platform and API/database synchronization work is ongoing; the site does not claim all integrations are complete.

Reference architecture was read from the supplied authentication module. Its repository was not modified. Only the useful domain/data/presentation boundaries were retained; authentication services, stores, repository adapters, and backend configuration were unnecessary for this static CV.
