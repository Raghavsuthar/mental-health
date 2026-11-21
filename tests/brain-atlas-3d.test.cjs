const test = require('node:test');
const assert = require('node:assert/strict');
const data = require('../brain-atlas-3d-data.js');

test('3D atlas regions have unique stable IDs and valid layers', () => {
  const ids = data.map(region => region.id);
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(ids.length >= 10);
  for (const region of data) {
    assert.ok(region.id && region.label && region.description);
    assert.ok(['surface', 'deep'].includes(region.layer));
    assert.ok(Array.isArray(region.position) && region.position.length === 3);
    assert.ok(Array.isArray(region.scale) && region.scale.length === 3);
    assert.ok([...region.position, ...region.scale].every(Number.isFinite));
    assert.ok(region.scale.every(value => value > 0));
    assert.match(region.color, /^#[0-9a-f]{6}$/i);
  }
});

test('chapter IDs are either null or known Brain Atlas chapter IDs', () => {
  const allowed = new Set([
    'prefrontal-cortex', 'primary-somatosensory-cortex', 'hippocampus', 'amygdala', 'mediodorsal-thalamus', 'caudate-nucleus',
    'cerebellar-hemispheres', 'midbrain'
  ]);
  for (const region of data) {
    assert.ok(region.chapterId === null || allowed.has(region.chapterId), region.id);
  }
});

const { brainAtlasData } = require('../brain-atlas.js');
const { getStructureById } = require('../brain-atlas-ui.js');
const { initBrainAtlas3D, visibleMeshesForPicking } = require('../brain-atlas-3d.js');

test('each mapped 3D region opens an existing chapter; unmapped regions stay unmapped', () => {
  for (const region of data) {
    if (region.chapterId) {
      assert.ok(getStructureById(brainAtlasData, region.chapterId), region.id);
    } else {
      assert.equal(getStructureById(brainAtlasData, region.chapterId), null);
    }
  }
});

test('hidden 3D layers are excluded from pointer hit-testing', () => {
  const visible = { visible: true };
  const hidden = { visible: false };
  const defaultVisible = {};
  assert.deepEqual(visibleMeshesForPicking([visible, hidden, defaultVisible]), [visible, defaultVisible]);
});

test('3D viewer safely no-ops when no host is available', () => {
  const viewer = initBrainAtlas3D({ host: null, regions: data });
  assert.equal(typeof viewer.destroy, 'function');
  assert.equal(typeof viewer.selectRegion, 'function');
  assert.equal(typeof viewer.resetView, 'function');
  viewer.destroy();
});
