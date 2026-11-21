# Brain Atlas — Integrated Neuroanatomy Learning Section

**Status:** Design approved in conversation; implementation not yet authorized.
**Date:** 2026-11-21
**Repository:** `Raghavsuthar/mental-health`

## Goal

Add a detailed, searchable, mobile-friendly Brain Atlas to the existing mental-health awareness website, pitched at MBBS/DNB Psychiatry resident level, while preserving the current static HTML/CSS/JavaScript architecture and visual identity.

## Audience and educational level

Primary audience: medical students, psychiatry residents and clinicians seeking structured revision. The content should be anatomically accurate, clinically grounded and sufficiently detailed for postgraduate psychiatry learning. It is educational material, not a diagnostic or treatment service.

## Information architecture

The Brain Atlas will be a distinct section linked from the site's main navigation and accessible by an in-page anchor. It will be organised into these systems:

1. **Cerebral cortex:** frontal, parietal, temporal and occipital lobes; major gyri, sulci and functional cortical areas.
2. **Limbic system:** hippocampus, amygdala, cingulate gyrus, parahippocampal region and fornix.
3. **Basal ganglia:** caudate, putamen, globus pallidus, substantia nigra and subthalamic nucleus.
4. **Thalamus:** major nuclei, functional roles and connections.
5. **Hypothalamus:** nuclei and autonomic, endocrine, homeostatic and behavioural functions.
6. **Cerebellum:** lobes, deep nuclei, connections and clinical syndromes.
7. **Brainstem:** midbrain, pons, medulla and clinically relevant cranial nerve nuclei.
8. **White matter:** corpus callosum, internal capsule and major association, commissural and projection pathways.
9. **Ventricular system and meninges:** ventricles, CSF circulation, meninges and relevant clinical correlations.
10. **Neurotransmitter systems:** dopamine, serotonin, noradrenaline, acetylcholine, GABA and glutamate pathways.

## Chapter template

Each structure or pathway entry should include, where relevant:

- Location and anatomical boundaries
- Gross anatomy, subdivisions and constituent nuclei/gyri
- Afferent and efferent connections
- Normal physiological and behavioural functions
- Lesion effects and recognised clinical syndromes
- Psychiatric relevance, clearly separating established evidence from proposed or simplified models
- Clinical examples and examination pearls
- Memory aids and DNB-style revision questions
- References and further reading

The content should avoid implying that one brain region alone causes a complex psychiatric disorder. Functional networks and distributed systems should be emphasised where appropriate.

## User experience

- Search across structure names, functions, symptoms, pathways and aliases.
- Browse by anatomical system.
- Select a chapter and read its structured content without leaving the page.
- Provide clear chapter navigation and useful cross-links between related structures.
- Include simple original schematic diagrams/pathway illustrations where they improve understanding; diagrams must have labels and accessible text alternatives.
- Include clinical-correlation and DNB examination sections.
- Include MCQs with explanations and feedback.
- Ensure comfortable reading and usable controls on Android/mobile screens.
- Follow the existing calm teal/sage/gold visual language and typography.

## Technical approach

- Keep the existing static HTML, CSS and vanilla JavaScript architecture; no framework migration.
- Add a dedicated content data file (for example, `brain-atlas.js`) and a focused renderer/module (for example, `brain-atlas-ui.js`) rather than embedding all content into the main script.
- Add a Brain Atlas section to `index.html`, a navigation link in desktop and mobile navigation, and focused styles in `styles.css`.
- Load the data and UI scripts in dependency order.
- Use safe DOM/text rendering for authored content; do not inject untrusted HTML.
- Keep language behaviour compatible with the site's existing English/Hindi/Gujarati switcher. Initial Brain Atlas content may be English-first, but the UI should not break when another site language is selected; translation coverage and language limitations must be explicit rather than presenting English content as translated.
- Avoid paid APIs, external runtime dependencies and build tooling.

## Evidence and safety standards

- Prefer standard neuroanatomy/neuroscience textbooks and authoritative educational sources, supplemented by peer-reviewed literature and relevant clinical guidance for clinical correlations.
- Provide source details and links at topic or chapter level.
- Do not fabricate citations, DOI details, review dates or clinical endorsements.
- Distinguish established anatomy/physiology from simplified teaching models and evolving psychiatric hypotheses.
- Do not label material as clinically reviewed unless a qualified reviewer has actually reviewed it.
- Keep an educational disclaimer visible.

## Acceptance criteria

1. Brain Atlas is reachable from both desktop and mobile navigation.
2. All ten systems are represented with a consistent chapter structure and clinically relevant depth.
3. Search finds content by a structure name and at least one functional/symptom synonym.
4. System filters and chapter selection work by mouse, keyboard and touch.
5. MCQs reveal the correct answer and a meaningful explanation.
6. Schematic diagrams include accessible labels or text alternatives.
7. Layout remains usable at narrow mobile widths and does not cause horizontal overflow.
8. Existing language switching, navigation, evidence library and other site sections continue to work.
9. No false review labels, unsupported clinical claims or invented references are introduced.
10. JavaScript syntax and available automated/manual checks pass; any unavailable runtime check is reported honestly.

## Out of scope

- A standalone second website or separate application.
- React/Vue/other framework migration.
- User accounts, progress synchronisation, backend database or paid API.
- Patient-specific diagnosis, treatment recommendations or symptom triage.
- Claiming independent clinician review without an actual review process.

## Known repository considerations to verify during implementation

- The current site is static HTML/CSS/JavaScript with a main `script.js` IIFE and a separate `evidence-library.js` data file.
- The evidence library currently displays a “Reviewed” label based on a `review` field. The existing values should be audited and changed to neutral content-update metadata unless a real review is documented.
- The existing topic-card template contains a JSX-like token inside HTML output; inspect and correct if it is confirmed to affect rendered markup.
- Verify script inclusion order and ensure no literal escaped newline text appears between script tags.
- Preserve the existing language switcher and mobile navigation.
