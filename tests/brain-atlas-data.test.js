const test = require('node:test');
const assert = require('node:assert/strict');
const { brainAtlasData } = require('../brain-atlas.js');

test('atlas contains all ten approved anatomical systems', () => {
  assert.deepEqual(brainAtlasData.systems.map(system => system.id), [
    'cortex','limbic','basal-ganglia','thalamus','hypothalamus',
    'cerebellum','brainstem','white-matter','ventricular-system','neurotransmitters'
  ]);
});

test('every structure has core anatomy, clinical and reference fields', () => {
  const ids = [];
  for (const system of brainAtlasData.systems) {
    assert.ok(system.structures.length > 0, system.id);
    for (const structure of system.structures) {
      ids.push(structure.id);
      for (const key of ['name','aliases','location','anatomy','connections','functions','lesionEffects','psychiatryRelevance','clinicalExample','examPearls','mcqs','references']) {
        assert.ok(structure[key] !== undefined && structure[key] !== null, system.id + '/' + structure.id + ' missing ' + key);
      }
      assert.ok(structure.mcqs.length > 0, structure.id + ' needs a revision MCQ');
      for (const q of structure.mcqs) {
        assert.ok(q.options.length >= 2, structure.id + ' needs at least two answer choices');
        assert.ok(q.correctIndex >= 0 && q.correctIndex < q.options.length);
        assert.ok(q.explanation.length > 20);
      }
      assert.ok(structure.references.length > 0, structure.id + ' needs a reference');
    }
  }
  assert.equal(new Set(ids).size, ids.length, 'structure IDs must be unique');
});
