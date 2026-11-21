# Brain Atlas Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a resident-level, searchable Brain Atlas to the existing static mental-health website.

**Architecture:** Keep the existing HTML/CSS/vanilla-JavaScript application. Store atlas content in brain-atlas.js, keep rendering and interaction logic in brain-atlas-ui.js, and add a dedicated section and navigation anchors to index.html. Extend styles.css with responsive atlas styles; make only narrowly scoped corrections to existing evidence-library metadata and malformed topic-card markup.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript; Node.js built-in test runner for data/schema and helper tests where feasible. No new runtime dependencies or paid services.

**Spec:** docs/superpowers/specs/2026-11-21-brain-atlas-design.md

## Global Constraints

- No framework migration or paid API.
- Preserve existing site design tokens, navigation, language switcher and evidence library.
- Keep the Brain Atlas educational and non-diagnostic.
- Use English-first atlas content unless complete translations are actually supplied; never imply an English entry is translated.
- Never fabricate references, review dates or clinician-review claims.
- Render authored content safely; do not treat content strings as arbitrary HTML.
- Support Android/mobile layouts and keyboard-accessible controls.

## Review Focus

- Empty, whitespace-only and unmatched search queries must show a useful empty/default state without breaking selection.
- Search terms with punctuation, mixed case and common synonyms must match predictably.
- Switching site language must not erase the current atlas chapter or falsely label English content as translated.
- Missing optional fields or empty chapter arrays must not crash rendering.
- Very long chapter titles, pathway names and explanations must wrap without horizontal overflow.

---

### Task 1: Stabilise existing page integration and establish checks

**Files:**
- Modify: index.html
- Modify: script.js
- Modify: evidence-library.js
- Modify: styles.css only if required for a minimal existing markup correction
- Create: tests/brain-atlas-smoke.test.js or equivalent dependency-free test harness

**Interfaces:**
- Preserve the existing global evidenceLibrary data contract and current script.js IIFE.
- Do not rename existing DOM IDs or alter unrelated site sections.

- [ ] Inspect the end of index.html and verify script tags are real separate HTML elements in the correct dependency order; correct literal escaped newline text if present.
- [ ] Inspect the topic-card HTML template and remove the JSX-like token; retain valid role, tabindex and accessible dialog semantics.
- [ ] Replace unsupported “Reviewed” display metadata in the evidence library with neutral “Content updated” metadata unless an actual documented review is available; update the renderer labels accordingly.
- [ ] Add a minimal repeatable smoke check for script syntax and required page anchors/asset references using Node built-ins only.
- [ ] Run node --check on script.js, translations.js and evidence-library.js; run the smoke test and record baseline results.
- [ ] Commit the stabilisation changes separately.

### Task 2: Add Brain Atlas content model and core anatomical dataset

**Files:**
- Create: brain-atlas.js
- Create: tests/brain-atlas-data.test.js

**Interfaces:**
- Export/global: window.brainAtlasData (or a single documented global compatible with the existing non-module script loading).
- Each system: id, title, shortDescription, structures[].
- Each structure: id, name, aliases[], location, anatomy, subdivisions[], connections, functions[], lesionEffects[], clinicalSyndromes[], psychiatryRelevance[], clinicalExample, examPearls[], questions[], references[].
- Each MCQ: stem, options[], correctIndex, explanation.
- Each reference: title, authorOrOrganisation, year when known, url, sourceType.

- [ ] Write failing Node tests for ten required system IDs, unique structure IDs, required fields, valid MCQ answer indices and non-empty reference records.
- [ ] Run the data tests and confirm they fail before the dataset exists.
- [ ] Create the data model and populate all ten systems from the approved specification: cortex, limbic system, basal ganglia, thalamus, hypothalamus, cerebellum, brainstem, white matter, ventricular system/meninges and neurotransmitter systems.
- [ ] Include clinically useful structures and pathways at MBBS/DNB Psychiatry level; distinguish well-established anatomy from proposed psychiatric models.
- [ ] Add source links only when the source and URL are verifiable; prefer standard neuroanatomy texts and authoritative neuroscience/clinical resources.
- [ ] Run the data tests and confirm all schema and content checks pass.
- [ ] Commit the content model and initial atlas dataset.

### Task 3: Build accessible Brain Atlas renderer and navigation

**Files:**
- Create: brain-atlas-ui.js
- Create: tests/brain-atlas-ui.test.js
- Modify: index.html

**Interfaces:**
- Consumes: window.brainAtlasData.
- Public UI functions: initBrainAtlas(), renderBrainAtlas().
- Search indexes structure names, aliases, functions, lesion effects, syndromes and psychiatry relevance.
- Renderer must use textContent/createElement for authored text and only construct safe, fixed markup.

- [ ] Write failing tests for case-insensitive search, alias matching, empty query, no-results state and selection persistence.
- [ ] Add the Brain Atlas section with search input, anatomical-system filters, chapter list, reader panel, MCQ region and educational disclaimer.
- [ ] Add Brain Atlas links to desktop and mobile navigation without removing existing links.
- [ ] Implement search indexing and filtering with predictable whitespace/punctuation normalisation.
- [ ] Implement system filter, chapter selection, chapter sections and related-structure links.
- [ ] Implement MCQs with answer feedback and explanation; ensure answer state is not shown before the learner responds.
- [ ] Implement safe rendering, keyboard operation, focus visibility and meaningful aria labels/live-region feedback.
- [ ] Run UI helper tests and syntax checks; verify the atlas initializes when data is loaded and fails gracefully if data is unavailable.
- [ ] Commit the renderer and page integration.

### Task 4: Add diagrams, pathway teaching aids and clinical correlations

**Files:**
- Modify: brain-atlas.js
- Modify: brain-atlas-ui.js
- Create: tests/brain-atlas-diagrams.test.js if a testable diagram schema is used

**Interfaces:**
- Diagram data should use a small declarative schema with title, accessibleDescription, labels and connections; renderer owns SVG element creation.
- Diagrams must remain optional per structure and must not block text learning.

- [ ] Add failing checks for diagram labels and accessible descriptions.
- [ ] Add original schematic diagrams for high-yield pathways (e.g. Papez circuit, direct/indirect basal ganglia pathways, mesocortical/mesolimbic/nigrostriatal/tuberoinfundibular dopamine pathways, major memory circuitry) using clearly labelled simplified schematics.
- [ ] Add explanatory notes distinguishing schematic simplification from full neuroanatomical complexity.
- [ ] Add clinical correlation boxes for recognised lesion patterns and psychiatric relevance, avoiding single-region explanations of complex disorders.
- [ ] Render diagrams with accessible text alternatives and responsive sizing.
- [ ] Run diagram checks and manually inspect SVG scaling and labels on narrow widths.
- [ ] Commit diagrams and clinical correlations.

### Task 5: Responsive styling and multilingual compatibility

**Files:**
- Modify: styles.css
- Modify: brain-atlas-ui.js
- Modify: index.html

**Interfaces:**
- Atlas UI strings use a small translation dictionary for English, Hindi and Gujarati where translations are actually available.
- Anatomy content language is explicitly identified per entry; English-first content remains labelled English when the main site language is Hindi or Gujarati.

- [ ] Add responsive styles using existing CSS variables, card radii and typography.
- [ ] Ensure the layout collapses to a single column on small screens and that search, filters, chapter navigation and MCQ controls are touch-friendly.
- [ ] Add reduced-motion handling and visible keyboard focus styles.
- [ ] Add translated interface labels only where accurate translations are supplied; do not auto-translate medical terminology or claim translated content.
- [ ] Test narrow viewport layout, long words, long references and large diagrams for horizontal overflow.
- [ ] Commit responsive and language compatibility changes.

### Task 6: End-to-end regression and final review

**Files:**
- Modify any Brain Atlas files only for verified fixes.
- Update: docs/superpowers/specs/2026-11-21-brain-atlas-design.md only if implementation materially changes the approved scope.

- [ ] Run all Node tests and node --check on every JavaScript file.
- [ ] Verify every HTML script reference points to an existing file and script load order is correct.
- [ ] Verify all ten systems, search synonyms, chapter navigation, related links, MCQ feedback and source links.
- [ ] Verify existing home, topics, evidence library, language switching, mobile menu, resources and contact sections remain functional.
- [ ] Perform mobile-width and keyboard-accessibility checks; report any check that cannot be run in this environment.
- [ ] Review all “reviewed/updated” labels and citations for accuracy; remove any unsupported claim.
- [ ] Commit verified fixes and provide the exact commit SHA and changed-file summary. Do not claim a live deployment unless deployment is separately performed and verified.
