# Printable CV

The Home introduction actions and About heading both expose **Print CV**. The link opens `/cv` for review. **Print / Save as PDF** uses the browser's native print dialog; it does not send profile information to a document service or require a backend.

The screen preview keeps the site's dark shell around a white document. Printing removes navigation, footer, controls, animations, and dark backgrounds. The document uses a single text column, clear headings, Arial, dark text, and restrained blue rules. It targets one A4 page with 14 mm vertical and 15 mm horizontal margins. Select A4 and disable browser headers/footers in the print dialog.

## Content ownership

- Identity, contact details, education, and academic highlights come from the existing typed profile.
- Skill groups reuse the existing Skills data.
- `src/pages/profile/data/printableCv.ts` selects and condenses existing experience and project records for paper. No role dates, graduation dates, personal duties, or completion metrics are invented.
- The CV highlights Motorpool, BALE, and Collection Management. The full 31-project archive stays online and is linked in the document.
- `useCvPrint` owns print readiness and the print-only body class. Leaving `/cv` removes that class. A named page rule applies only to this document, preserving other routes' print behavior.
- `printable-cv.css` owns the paper layout; the website's shared dark tokens remain unchanged.

## Verification

Type checking and production build passed. The complete local browser suite passed 26 checks; the three focused print checks also passed against the final print styles. Checks exercise both button placements, native print invocation, route focus, cleanup on return to About, direct visits/reloads, mobile/tablet/desktop overflow, and print-only visibility/colors.

Chromium export produced exactly one A4 page. Independent `pypdf` inspection confirmed the page dimensions, required content, and absence of website controls/footer text. The PDF was rendered with PDFium and visually reviewed for legibility, margins, clipping, and section flow.

Browser export evidence is generated in ignored `test-results/`. A reviewed PDF snapshot is retained in ignored `output/pdf/`; it is an optional local artifact, not the website's printing source. The live document always renders current content. No dependencies, environment variables, migrations, or external configuration were added.

Actual printer hardware and mobile operating-system print dialogs were not exercised. Browser print settings can affect the final margins and headers.
