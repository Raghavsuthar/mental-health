# Interactive 3D Brain Explorer — Implementation Plan

> Execute task-by-task. Keep the work on `feat/interactive-3d-brain-explorer`; do not merge without the user's explicit integration choice.

**Goal:** Add a lazy-loaded 3D brain explorer to the existing static Brain Atlas, with mesh selection and links to local teaching chapters.

**Architecture:** `brain-atlas-3d.js` owns the lazy-loaded Three.js viewer, GLB/manifest loading, picking and structure search. `brain-atlas-ui.js` exposes a small chapter-selection bridge. `index.html` adds viewer controls and corrects duplicate/missing Brain Atlas navigation links. `styles.css` adds responsive viewer styles. Tests use Node's built-in test runner.

**Spec:** `docs/superpowers/specs/2026-11-21-interactive-3d-brain-explorer-design.md`

## Global constraints
- No paid APIs, framework changes or model binary copied into this repo.
- Upstream GLB/manifest/Draco assets are loaded only after an explicit click.
- Preserve upstream CC BY-SA 4.0 attribution and educational limitations.
- Safe text rendering; do not invent chapter coverage.
- Existing text Brain Atlas must remain usable if WebGL/CDN/model loading fails.

## Task 1 — Test the structure metadata and chapter matching
- [ ] Add `tests/brain-atlas-3d.test.js` with failing tests for normalized labels, laterality suffixes, matching local chapter names/aliases, and unknown structures.
- [ ] Run tests and confirm expected failures before implementation.
- [ ] Implement/export pure helpers in `brain-atlas-3d.js`; re-run tests green.
- [ ] Commit the tested helper layer.

## Task 2 — Add accessible lazy-load viewer shell and integration bridge
- [ ] Add load button, viewer canvas, progress/status text, search, structure list, selection panel, reset control, fallback and attribution in `index.html`.
- [ ] Add a public chapter selection bridge in `brain-atlas-ui.js` that opens an existing chapter safely.
- [ ] Add navigation repair: exactly one desktop Brain Atlas link and one mobile Brain Atlas link.
- [ ] Add responsive and focus-visible CSS.
- [ ] Test DOM hooks, syntax and chapter bridge behavior where feasible; commit.

## Task 3 — Implement Three.js loading, selection and controls
- [ ] Inject pinned Three.js r137, OrbitControls, GLTFLoader and DRACOLoader only after activation.
- [ ] Load the upstream GLB and manifest; expose progress and failure/retry state.
- [ ] Build mesh-ID and metadata indexes from glTF extras/manifest; raycast pointer selection and highlight the selected mesh.
- [ ] Implement searchable manifest list, click-to-focus, zoom/reset, and local chapter action.
- [ ] Add WebGL capability fallback and resize handling; dispose renderer/listeners on page teardown.
- [ ] Commit viewer implementation.

## Task 4 — Verification and review
- [ ] Run all Node tests and `node --check` on every project JavaScript file.
- [ ] Verify HTML references and script order; confirm all viewer resources are lazy-loaded.
- [ ] Review license/attribution and limitations.
- [ ] Inspect changes as a separate self-review (no subagent tool is available); record findings.
- [ ] Report tests and browser/device checks that could not be run.
- [ ] Provide PR link and wait for user's choice before merge.
