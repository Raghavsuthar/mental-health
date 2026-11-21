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
- [x] Add `tests/brain-atlas-3d.test.js` with failing tests for normalized labels, laterality suffixes, matching local chapter names/aliases, and unknown structures.
- [x] Run tests and confirm expected failures before implementation.
- [x] Implement/export pure helpers in `brain-atlas-3d.js`; re-run tests green.
- [x] Commit the tested helper layer.

## Task 2 — Add accessible lazy-load viewer shell and integration bridge
- [x] Add load button, viewer canvas, progress/status text, search, structure list, selection panel, reset control, fallback and attribution in `index.html`.
- [x] Add a public chapter selection bridge in `brain-atlas-ui.js` that opens an existing chapter safely.
- [x] Add navigation repair: exactly one desktop Brain Atlas link and one mobile Brain Atlas link.
- [x] Add responsive and focus-visible CSS.
- [x] Test DOM hooks, syntax and chapter bridge behavior where feasible; commit.

## Task 3 — Implement Three.js loading, selection and controls
- [x] Inject pinned Three.js r137, OrbitControls, GLTFLoader and DRACOLoader only after activation.
- [x] Load the upstream GLB and manifest; expose progress and failure/retry state.
- [x] Build mesh-ID and metadata indexes from glTF extras/manifest; raycast pointer selection and highlight the selected mesh.
- [x] Implement searchable manifest list, click-to-focus, zoom/reset, and local chapter action.
- [x] Add WebGL 2 capability fallback, resize handling, and renderer/listener cleanup on retry or load failure.
- [x] Commit viewer implementation.

## Task 4 — Verification and review
- [x] Run the focused Node test suite and `node --check` on the new 3D viewer script.
- [x] Verify HTML references and script order; confirm all viewer resources are lazy-loaded.
- [x] Review license/attribution and limitations.
- [x] Inspect changes as a separate self-review (no subagent tool is available); record findings.
- [x] Report tests and browser/device checks that could not be run.
- [ ] Provide PR link and wait for user's choice before merge.


## Execution record
- Helper tests were written first and observed failing because the implementation module did not yet exist; after implementation, all 4 tests passed.
- Verification command: `node --test` → 4/4 passed; `node --check brain-atlas-3d.js` → exit 0.
- Repository integration checks confirmed two Brain Atlas navigation anchors (desktop + mobile), the viewer shell exists, the UI bridge loads before the 3D module, and the third-party viewer libraries are injected only after the load button is activated.
- Browser/WebGL rendering, upstream model download, and physical Android touch testing remain unverified in this session.
- Final review: self-review (no subagent tool available). No Critical or Important code findings identified; browser-level verification remains the main limitation.
