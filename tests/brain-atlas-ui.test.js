const test = require('node:test');
const assert = require('node:assert/strict');
const { brainAtlasData } = require('../brain-atlas.js');
const { searchStructures, getStructureById } = require('../brain-atlas-ui.js');

test('search matches structure names and case-insensitive aliases', () => {
  assert.ok(searchStructures(brainAtlasData, 'AMYGDALA').some(x => x.id === 'amygdala'));
  assert.ok(searchStructures(brainAtlasData, 'fear conditioning').some(x => x.id === 'amygdala'));
});

test('search matches functional and clinical correlations', () => {
  assert.ok(searchStructures(brainAtlasData, 'reward motivation').some(x => x.id === 'nucleus-accumbens'));
  assert.ok(searchStructures(brainAtlasData, 'hemiballismus').some(x => x.id === 'subthalamic-nucleus'));
});

test('search safely returns no matches for unmatched input and supports system filtering', () => {
  assert.deepEqual(searchStructures(brainAtlasData, 'zz-no-such-structure-zz'), []);
  const results = searchStructures(brainAtlasData, 'memory', 'limbic');
  assert.ok(results.length > 0);
  assert.ok(results.every(x => x.systemId === 'limbic'));
});

test('structure lookup returns null for unknown identifiers', () => {
  assert.equal(getStructureById(brainAtlasData, 'not-a-real-id'), null);
});
