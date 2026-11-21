# Interactive 3D Brain Explorer — Design

**Status:** Approved by user request to proceed with the proposed 3D explorer.
**Date:** 2026-11-21
**Repository:** `Raghavsuthar/mental-health`

## Intent
Add an optional, interactive 3D brain viewer inside the existing Brain Atlas. Learners should rotate and zoom a real anatomical model, select individual structures, and jump directly to the matching resident-level chapter when one exists.

## Chosen approach
Use the open-source Brain Project GLB model and manifest as remotely hosted, versioned assets; build a small vanilla-JavaScript Three.js viewer inside this repository. The source model exposes individually selectable structures through glTF metadata. Load the viewer and model only after the user presses “Load interactive 3D brain” to protect initial page performance and avoid unsolicited third-party requests.

The model assets are CC BY-SA 4.0 and must retain attribution to Z-Anatomy / BodyParts3D and the Brain Project contributors. The viewer code is Apache-2.0 in its source project. Keep the asset unmodified and display its license/educational limitations. Do not copy the model binary into this repository. The browser will request Three.js/loader scripts from jsDelivr and the model/manifest/Draco decoder from the upstream GitHub Pages host.

## User experience
- A responsive viewer stage with explicit load, progress, error and retry states.
- Pointer/touch rotation, pinch/scroll zoom, reset view and selectable anatomy.
- Selecting a mesh highlights it and shows its name, side, category and anatomical parent where available.
- If a local Brain Atlas chapter matches the selected structure, provide an action that opens that chapter in the existing chapter reader; otherwise clearly say that no dedicated chapter exists yet.
- Searchable list of structures sourced from the model manifest; clicking a result focuses/highlights its mesh.
- Keyboard-operable list and controls; a text-based structure list remains available if WebGL is unavailable.
- Lazy-load all third-party runtime/model assets only after explicit user action.
- Existing 2D chapter navigation remains fully functional.

## Technical constraints
- Preserve static HTML/CSS/vanilla JS. No build system, framework migration, account, backend or paid API.
- Use a pinned Three.js version compatible with the upstream GLB loader and Draco-compressed asset.
- Use safe DOM APIs/textContent for model labels and local chapter text.
- Do not treat model geometry as patient-specific, volumetric imaging, clinical measurement or diagnostic evidence.
- Honour reduced-motion settings; avoid forced auto-rotation.
- Keep the feature optional and disclose that WebGL and an internet connection are required.

## Non-goals
- No AI-generated anatomy, no generated 3D mesh, no MRI/DICOM viewer, no volumetry, no diagnostic/surgical use.
- No editing or redistributing modified model geometry.
- No claim that every mesh has a full local teaching chapter.

## Acceptance criteria
1. 3D viewer is integrated into the Brain Atlas section and remains unloaded until the user activates it.
2. Viewer loads the upstream GLB and manifest with visible progress/error recovery.
3. Rotation, zoom, reset, search, selection and highlight work.
4. Selected structure metadata is shown accurately from the model manifest/glTF extras.
5. Matching local chapter opens through the existing Brain Atlas UI; missing chapters are not fabricated.
6. Controls and structure list work with keyboard/touch and narrow screens.
7. WebGL/asset/CDN failure leaves the existing text atlas usable.
8. Attribution and CC BY-SA 4.0 notice are visible.
9. Automated tests cover normalisation, local chapter matching and model metadata indexing; JavaScript syntax checks pass.
10. Existing navigation, language switcher and atlas features remain intact.
