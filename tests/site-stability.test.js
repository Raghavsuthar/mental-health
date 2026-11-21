const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const html = fs.readFileSync('index.html', 'utf8');
const script = fs.readFileSync('script.js', 'utf8');
const evidence = fs.readFileSync('evidence-library.js', 'utf8');

test('HTML loads the evidence library as a real script element', () => {
  assert.match(html, /<script src="translations\.js"><\/script>\s*<script src="evidence-library\.js"><\/script>/);
  assert.doesNotMatch(html, /\\\\n<script src="evidence-library\.js">/);
});

test('topic cards contain valid HTML rather than JSX-only syntax', () => {
  assert.doesNotMatch(script, /\{\{\s*\/\*\s*Access indicators\s*\*\/\}\}/);
  assert.match(script, /class="card topic-card reveal"/);
});

test('evidence entries do not claim an undocumented clinical review', () => {
  assert.doesNotMatch(evidence, /\breview\s*:/i);
  assert.match(evidence, /contentUpdated\s*:/);
  assert.doesNotMatch(script, /Reviewed\s*\$\{/);
  assert.match(script, /Content updated/);
});
