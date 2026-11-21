# Interactive 3D Brain Atlas Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a mobile-friendly, interactive schematic 3D brain view to the existing Brain Atlas.

**Architecture:** Progressive enhancement in a separate vanilla JS module, using a pinned Three.js ES module CDN and procedural named meshes. The existing chapter dataset and reader remain the source of learning content; accessible text controls and graceful fallback preserve usability without WebGL.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, Three.js ES modules (CDN), Node built-in test runner.

**Spec:** `docs/superpowers/specs/2026-11-21-interactive-3d-brain-atlas-design.md`

## Global Constraints
- No framework migration, backend, paid API, API key or required build step.
- Keep current Brain Atlas search and reader functional when 3D is unavailable.
- Clearly disclose schematic/non-diagnostic geometry.
- Preserve mobile usability, keyboard access and reduced-motion preference.
- Do not imply psychiatric diagnosis from anatomy.

## Review Focus
- CDN unavailable or WebGL unsupported: fallback must not stop atlas rendering.
- User switches chapters or language: selected 3D state must not corrupt chapter content.
- Narrow mobile viewport / high device pixel ratio: canvas must stay bounded and responsive.
- Keyboard-only use: every region must be selectable without canvas interaction.
- Unknown/unmapped region: show an explanatory note without throwing or selecting an unrelated chapter.

---

### Task 1: Define and test region metadata

**Files:**
- Create: `brain-atlas-3d-data.js`
- Create: `tests/brain-atlas-3d.test.cjs`

**Interfaces:**
- Expose `window.brainAtlas3DData` in browsers and `module.exports` in Node.
- Each region: `id`, `label`, `layer` (`surface` or `deep`), `chapterId` (nullable), `description`, `color`, `shape`, `position`, `scale`.

- [ ] Write tests for unique IDs, valid layers, finite geometry values, and chapter mapping allowlist.
- [ ] Run tests and verify expected failure before implementation.
- [ ] Implement data for four lobes, cerebellum, brainstem, thalamus, hippocampus, amygdala and basal ganglia.
- [ ] Run tests and verify all pass.

### Task 2: Build progressive 3D renderer

**Files:**
- Create: `brain-atlas-3d.js`
- Modify: `index.html`

**Interfaces:**
- `initBrainAtlas3D(options)` consumes host element, region data and `onSelect(region)`; returns `{ destroy, selectRegion, resetView }`.
- Lazy-load pinned Three.js module and OrbitControls; failure updates fallback text only.
- Use named meshes and raycasting; no external geometry assets.

- [ ] Add a test for graceful missing-WebGL / failed-loader behavior using a dependency-injected renderer loader.
- [ ] Run test and verify failure before implementation.
- [ ] Implement renderer, raycast selection, resize handling, capped pixel ratio, and teardown.
- [ ] Add canvas host, status/live region, region buttons, reset and layer toggles.
- [ ] Run tests and syntax checks.

### Task 3: Integrate selection with existing atlas

**Files:**
- Modify: `brain-atlas-ui.js`
- Modify: `index.html`

**Interfaces:**
- Region selection calls existing chapter navigation by `chapterId` only when the chapter exists.
- Unmapped region displays its description and never changes to an unrelated chapter.

- [ ] Add tests for mapped and unmapped selection behavior.
- [ ] Run tests and verify failure before implementation.
- [ ] Integrate accessible region list and synchronized selection.
- [ ] Verify chapter search, filtering, MCQs and references remain intact.

### Task 4: Style, accessibility and final verification

**Files:**
- Modify: `styles.css`
- Modify: `README.md`
- Test: `tests/brain-atlas-3d.test.cjs`

- [ ] Add responsive viewer styling, focus states, reduced-motion behavior and fallback presentation.
- [ ] Run the complete Node test suite and syntax checks for every JS file.
- [ ] Review the diff for scientific framing, security, accessibility and mobile performance.
- [ ] Commit the feature on `feat/interactive-3d-brain-atlas` and open a PR; do not merge or publish without the user's confirmation.

