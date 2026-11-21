# Interactive 3D Brain Atlas Design

## Intent
Add an interactive, rotatable 3D teaching view to the existing Brain Atlas so MBBS and DNB Psychiatry learners can orient themselves to major surface regions and selected deep structures, select a region, and open the matching chapter.

## Goals
- Add a 3D view with pointer/touch rotation, zoom, reset view, and accessible region selection.
- Surface regions: frontal, parietal, temporal and occipital lobes; show cerebellum and brainstem.
- Deep structures: thalamus, hippocampus, amygdala and basal ganglia group as simplified internal markers.
- Selecting a region synchronizes with the existing chapter reader where a matching structure exists; otherwise show a concise anatomy note.
- Keep a text-based region list and chapter search usable without WebGL.
- Clearly label geometry and positions as a schematic teaching model, not a diagnostic, surgical or MRI-accurate atlas.
- Keep the current static HTML/CSS/JS architecture and preserve existing content and language switcher.

## Non-goals
- Patient-specific imaging, segmentation, radiological localization, surgical planning or quantitative coordinates.
- Claiming exact anatomical boundaries or representing every nucleus.
- Requiring a paid service, API key, build system or large downloaded 3D asset.

## Approaches
1. **Three.js with procedural schematic geometry (chosen):** no model download; lightweight regions are built from local geometry, selectable and rotatable. Trade-off: deliberately simplified anatomy, explicitly disclosed.
2. External GLB/GLTF model: potentially more realistic, but licensing/provenance, model size, network dependency and region-picking complexity make it a weaker fit for this static, mobile-first site.
3. Hand-authored SVG/2D only: most robust and light, but does not meet the requested 3D interaction.

## Architecture
- Add `brain-atlas-3d.js` as a self-contained progressive enhancement. It loads a pinned Three.js ES module from a public CDN only when the atlas section is initialized; if loading or WebGL fails, the rest of the atlas remains fully usable and a clear fallback message appears.
- Add a labelled canvas container, controls and accessible region buttons inside the existing atlas host.
- Use named meshes and raycasting for selection; synchronize selected region to existing `brainAtlasData` chapters by stable structure IDs where possible.
- Add focused CSS in `styles.css`; no existing data schema changes are required.
- Add a small Node built-in test suite for region metadata, matching IDs, safe fallback and module syntax.

## Interaction and accessibility
- Drag to rotate; wheel/pinch-compatible zoom via OrbitControls if available; buttons reset camera and toggle surface/deep layer visibility.
- Region buttons provide a keyboard-accessible alternative to canvas picking.
- Canvas has an accessible label; selection is announced through a live region.
- Respect reduced-motion preference; do not auto-spin by default.
- Touch targets remain usable on narrow screens; render size and pixel ratio are capped for mobile performance.

## Safety and scientific framing
- Region colors are didactic, not functional maps.
- Deep structures are markers/volumes for orientation only; no claims of exact coordinates or boundaries.
- Keep the on-screen disclaimer visible: "Schematic 3D teaching model — not to scale; not for diagnosis, imaging interpretation or procedural planning."
- Do not imply psychiatric diagnoses can be inferred from a selected brain region.

## Acceptance criteria
- 3D view loads when CDN and WebGL are available.
- Region selection works with mouse/touch raycasting and keyboard buttons.
- Selecting structures synchronizes to the matching chapter where one exists.
- Reset and surface/deep visibility controls work.
- CDN/WebGL failure does not break search, chapter navigation or existing content.
- No console-breaking syntax errors; tests cover metadata and mapping.
- Mobile layout and reduced-motion behavior are supported.
