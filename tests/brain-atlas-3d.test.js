"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { normalizeLabel, findAtlasMatch, indexManifestNodes } = require("../brain-atlas-3d.js");

const data = { systems: [
  { id: "limbic", title: "Limbic system", structures: [
    { id: "hippocampus", name: "Hippocampal formation", aliases: ["hippocampus", "CA1"] },
    { id: "amygdala", name: "Amygdala", aliases: ["amygdaloid complex"] }
  ] }
] };

test("normalizes case, punctuation and hemisphere suffixes", () => {
  assert.equal(normalizeLabel("Hippocampus (Left)"), "hippocampus");
  assert.equal(normalizeLabel("Caudate nucleus.l"), "caudate nucleus");
});

test("matches model labels to local chapter names and aliases", () => {
  assert.equal(findAtlasMatch(data, "Hippocampus.l").id, "hippocampus");
  assert.equal(findAtlasMatch(data, "Amygdaloid complex (Right)").id, "amygdala");
});

test("returns null rather than inventing a chapter for unmatched model structures", () => {
  assert.equal(findAtlasMatch(data, "Superior sagittal sinus"), null);
});

test("indexes manifest nodes with stable ids, labels and laterality", () => {
  const index = indexManifestNodes({ nodes: [
    { id: 12, label: "Hippocampus", category: "deep_grey", side: "left", region: "Temporal lobe", ta2: ["Brain", "Temporal lobe"] },
    { id: 13, label: "Hippocampus", category: "deep_grey", side: "right", region: "Temporal lobe", ta2: ["Brain", "Temporal lobe"] }
  ] });
  assert.equal(index.length, 2);
  assert.equal(index[0].id, 12);
  assert.equal(index[1].side, "right");
});
