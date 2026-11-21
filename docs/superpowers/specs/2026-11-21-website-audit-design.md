# Website Audit and Bug-Fix Design

**Date:** 2026-11-21  
**Repository:** `Raghavsuthar/mental-health`  
**Base:** `main` at `c880d3c1818a64b80666050ea2c1aae3f04a1a79`

## Intent

Stabilise the existing public mental-health education website by correcting confirmed user-facing defects and adding regression checks. The site is a static, trilingual HTML/CSS/JavaScript project; the work should preserve that architecture and avoid new runtime dependencies.

## Goals

- Ensure each topic card opens the correct matching evidence guide.
- Stop presenting a local-only contact form as if it sent or stored a message.
- Remove the placeholder email address and the misleading anonymity claim.
- Remove inert blog links that look actionable but do nothing.
- Prevent hidden 3D layers from being selected by canvas hit-testing.
- Improve mobile-menu state announcements and keyboard dismissal.
- Strengthen automated checks so these defects are caught in future changes.

## Non-goals

- No framework migration, backend creation, paid service, or new dependency.
- No invented contact details or promise that messages are transmitted.
- No clinical-content expansion or unreviewed clinical claims.
- No merge or modification of the separate open Brain Atlas PR #3.
- No claim of real-device, visual-browser, or production verification unless actually performed.

## Approaches considered

1. **Rebuild the site architecture:** disproportionate to the defects and adds migration risk.
2. **Only document findings:** leaves known user-facing defects active.
3. **Focused, test-first patch on a dedicated branch:** corrects the confirmed behaviours while retaining the current static-site structure.

**Selected approach:** focused, test-first patch on `fix/website-audit-2026-11-21`, with a pull request targeting `main`. This follows the user's previously selected safe-mode workflow.

## Design decisions

- Topic-guide relationships will be explicit and will not rely on a misaligned numeric index.
- The Stress & Burnout card will not advertise a guide until a matching evidence-library entry exists.
- The contact section will state that no secure message channel is currently configured; it will not collect names, emails, or health information and will not claim successful submission.
- The placeholder email will be removed rather than replaced with an invented address.
- Blog teaser cards will remain non-interactive until real article destinations exist.
- 3D raycasting will consider only currently visible meshes.
- The mobile menu will keep `aria-expanded` in sync and close on Escape.

## Safety and verification

- Keep all work on the audit branch; do not push to `main`.
- Add regression tests before production changes and confirm the relevant tests fail for the expected reason.
- Run the complete existing Node test suite and JavaScript syntax checks in GitHub Actions.
- Review the resulting diff and CI result before opening/finishing the PR.
- Browser/WebGL and Android-device behaviour remain unverified unless an actual browser test is run.
