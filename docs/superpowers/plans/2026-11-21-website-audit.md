# Website Audit Bug-Fix Implementation Plan

> **For agentic workers:** Use the Superpowers executing-plans workflow. Steps use checkbox syntax for tracking.

**Goal:** Fix confirmed user-facing defects in the existing static mental-health website without changing its architecture.

**Architecture:** Keep the current HTML/CSS/vanilla-JS design. Add focused regression tests, make minimal source changes, and verify through the repository's Node test runner and GitHub Actions.

**Tech Stack:** Static HTML, CSS, browser JavaScript, Node.js built-in test runner, GitHub Actions.

**Spec:** `docs/superpowers/specs/2026-11-21-website-audit-design.md`

## Global Constraints

- Work only on `fix/website-audit-2026-11-21`, based on `main`.
- No framework migration or new runtime dependencies.
- Do not invent a contact address, backend, or successful message delivery.
- Do not merge or alter the separate open Brain Atlas PR #3.
- Keep mental-health education and crisis messaging conservative and transparent.

## Review Focus

- A topic card must not open an unrelated evidence guide.
- The contact section must not imply that data was sent, stored, or anonymous when that is untrue.
- A hidden 3D layer must not remain selectable by pointer hit-testing.
- A nonfunctional blog link must not appear to be an active navigation action.
- Mobile navigation state must be perceivable and dismissible by keyboard.

---

### Task 1: Add regression tests for confirmed defects

**Files:**
- Modify: `tests/site-stability.test.js`
- Modify: `tests/brain-atlas-3d.test.cjs`

**Interfaces:**
- Add a pure `visibleMeshesForPicking(meshes)` helper to `brain-atlas-3d.js`; it returns only meshes whose `visible` property is not false.

- [x] Add tests for explicit topic-to-guide mapping, truthful/non-collecting contact UI, removal of inert blog anchors, and mobile-menu ARIA state.
- [x] Add a test proving invisible meshes are excluded from the 3D pick list.
- [x] Run the relevant tests and confirm the new assertions fail against the current code.

### Task 2: Correct topic guide mapping and inactive blog links

**Files:**
- Modify: `script.js`
- Test: `tests/site-stability.test.js`

- [x] Replace the incorrect index-to-guide mapping with the correct explicit mapping; leave Stress & Burnout non-interactive until a matching guide exists.
- [x] Remove the inert `href="#"` Read More anchors from blog cards.
- [x] Run the focused regression tests.

### Task 3: Make contact UI honest and privacy-preserving

**Files:**
- Modify: `index.html`
- Modify: `translations.js`
- Modify: `script.js`
- Test: `tests/site-stability.test.js`

- [x] Replace the inactive form with a clear notice that no secure contact channel is configured and no messages are sent or stored.
- [x] Remove the placeholder email and the English anonymity claim.
- [x] Remove obsolete fake-success form handling.
- [x] Update English, Hindi, and Gujarati contact copy consistently.
- [x] Run the focused regression tests.

### Task 4: Exclude hidden 3D meshes from picking

**Files:**
- Modify: `brain-atlas-3d.js`
- Modify: `tests/brain-atlas-3d.test.cjs`

- [x] Add and export `visibleMeshesForPicking(meshes)`.
- [x] Use the helper before raycasting.
- [x] Run the 3D regression tests.

### Task 5: Improve mobile-menu and topic-card accessibility

**Files:**
- Modify: `index.html`
- Modify: `script.js`
- Test: `tests/site-stability.test.js`

- [x] Add `aria-controls` and `aria-expanded` to the menu button.
- [x] Keep `aria-expanded` synchronised when opening and closing.
- [x] Close the menu on Escape and return focus to the menu button.
- [x] Add a visible focus indicator and remove obsolete popup semantics from topic cards.
- [x] Run the focused regression tests.


### Task 6: Restore evidence-library interactions

**Files:**
- Modify: `script.js`
- Test: `tests/site-stability.test.js`

- [x] Initialise search and filter listeners during page startup.
- [x] Ensure typing rerenders results and opening a topic clears stale search/filter state.
- [x] Run the focused regression tests.

### Task 7: Verify and review

**Files:**
- Review all changed files and workflow output.

- [x] Run `node --check` on all top-level JavaScript and test files.
- [x] Run `node --test tests/*.test.*`.
- [x] Confirm GitHub Actions checks pass on the pull request.
- [x] Perform a separate self-review because no independent reviewer subagent is available.
- [x] Open a PR to `main`; do not merge it.
- [x] Document any deferred findings and verification limitations.
