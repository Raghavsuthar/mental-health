# Website Repository Audit Report

**Date:** 2026-11-21  
**Repository:** `Raghavsuthar/mental-health`  
**Audited base:** `main` at `c880d3c1818a64b80666050ea2c1aae3f04a1a79`  
**Fix branch:** `fix/website-audit-2026-11-21`  
**Pull request:** [#4 — Website interaction bug fixes](https://github.com/Raghavsuthar/mental-health/pull/4)

## Executive summary

The repository is a static HTML/CSS/vanilla-JavaScript mental-health education site. The review found several user-visible interaction defects and misleading contact behaviour. Confirmed defects were fixed on a dedicated branch, with regression tests added before the production changes.

## Confirmed findings and fixes

| Priority | Finding | Resolution |
|---|---|---|
| High | Evidence-library search and filter controls were never initialised, so they appeared but did not respond | Call `initEvidenceLibrary()` during page startup; preserve live search rendering and reset stale filters when opening a guide |
| High | Topic cards were associated with the wrong evidence IDs; in particular Stress & Burnout could open Bipolar, and Bipolar could open Schizophrenia | Replace the incorrect mapping with an explicit guide map; Stress & Burnout is no longer presented as an actionable guide until a matching guide exists |
| High | Contact form showed a success message despite having no delivery service; it collected name/email while English called it anonymous | Remove the nonfunctional form and state clearly that no contact channel is configured and nothing is sent or stored |
| High | Contact panel displayed `temporary-email@example.com` | Remove the placeholder rather than inventing a real address |
| Medium | Hero query CTA pointed to a contact section that cannot accept messages | Change it to a working Resources link and relabel it |
| Medium | Blog cards displayed inert “Read more” anchors | Remove nonfunctional links until real article pages exist |
| Medium | Hidden 3D brain meshes could still be hit-tested after a layer was switched off | Filter invisible meshes out of raycasting |
| Medium | Keyboard-activatable topic cards lacked a visible focus outline | Add a clear `:focus-visible` indicator |
| Medium | Topic cards used an invalid `aria-haspopup="region"` value after the interaction changed from a modal to an in-page guide | Remove the obsolete popup attribute |
| Medium | Mobile menu did not expose expanded state or close on Escape | Add `aria-controls`, synchronised `aria-expanded`, Escape dismissal and focus return |
| Low | CI used action versions that produced Node 20 deprecation warnings and ran only on a narrow set of push branches | Upgrade to `actions/checkout@v7.0.1` and `actions/setup-node@v7.1.0`, run checks on `main`, `feat/**`, and `fix/**`, and set `contents: read` |

## Verification

- JavaScript syntax check: passed.
- Node test suite: **23 passed, 0 failed**.
- GitHub Actions push run: [44879547983](https://github.com/Raghavsuthar/mental-health/actions/runs/44879547983) — success.
- GitHub Actions pull-request run: [44879550244](https://github.com/Raghavsuthar/mental-health/actions/runs/44879550244) — success.
- Main-branch GitHub Pages build before this PR: [44878475580](https://github.com/Raghavsuthar/mental-health/actions/runs/44878475580) — success.

## Findings not changed / limitations

1. **Contact remains intentionally unavailable.** A real owner-approved email address or secure form backend is needed before accepting messages. The site no longer pretends to deliver them.
2. **No live browser or Android visual test was run.** Canvas/WebGL rendering, touch gestures, responsive layouts and screen-reader behaviour still need manual/device verification.
3. **The 3D brain is a teaching schematic.** It is not anatomical imaging or a to-scale atlas; the existing on-page disclaimer remains important.
4. **Language coverage is incomplete.** Main interface copy is available in English, Hindi and Gujarati, while the detailed Brain Atlas and evidence-library learning content is currently primarily English.
5. **Clinical accuracy was not certified by this code audit.** The review checks software behaviour and presentation, not a clinician-led evidence review of every educational statement or citation.
6. **No package manifest is present.** A package-manager dependency audit (for example, `npm audit`) could not be run. The reviewed project uses browser scripts and Node's built-in test runner.
7. **3D loading is not lazy.** The current implementation imports Three.js on page load; deferring the import until a user asks to open the 3D view remains a performance improvement.
8. **Separate Brain Atlas PR #3 was not modified or merged.** It is a distinct implementation branch and should be reviewed independently.

## Release status

This report and all fixes are on the audit branch and PR #4. **Nothing has been merged into `main` or deployed by this change.** Production remains unchanged until the PR is reviewed and merged.
