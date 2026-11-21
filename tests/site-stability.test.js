const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const html = fs.readFileSync('index.html', 'utf8');
const script = fs.readFileSync('script.js', 'utf8');
const evidence = fs.readFileSync('evidence-library.js', 'utf8');
const translations = fs.readFileSync('translations.js', 'utf8');

test('HTML loads the evidence library as a real script element', () => {
  assert.match(html, /<script src="translations\.js"><\/script>\s*<script src="evidence-library\.js"><\/script>/);
  assert.doesNotMatch(html, /\\\\n<script src="evidence-library\.js">/);
});

test('topic cards map only to the matching evidence guides', () => {
  assert.match(script, /const TOPIC_EVIDENCE_IDS = Object\.freeze\(\['depression', 'anxiety', null, 'bipolar', 'ocd', 'substance-use', 'child-adolescent', 'suicide'\]\)/);
  assert.match(script, /const topicId = TOPIC_EVIDENCE_IDS\[i\]/);
  assert.match(script, /topic-card-static/);
  assert.doesNotMatch(script, /const evidenceIds = \['depression','anxiety','bipolar','schizophrenia'/);
});

test('contact section does not collect data or claim messages were sent', () => {
  assert.doesNotMatch(html, /<form id="contactForm"/);
  assert.doesNotMatch(html, /temporary-email@example\.com/);
  assert.match(html, /data-i18n="contact\.unavailable"/);
  assert.doesNotMatch(translations, /Ask an Anonymous Question/);
  assert.doesNotMatch(translations, /formSuccess:/);
  assert.doesNotMatch(script, /formSuccess|function initForm/);
});

test('blog cards do not render inert read-more links', () => {
  assert.doesNotMatch(script, /href="#" class="readmore"/);
  assert.doesNotMatch(script, /onclick="return false;"/);
});

test('mobile menu exposes and updates its expanded state', () => {
  assert.match(html, /id="hamburger"[^>]*aria-controls="mobileMenu"[^>]*aria-expanded="false"/);
  assert.match(script, /setAttribute\('aria-expanded'/);
  assert.match(script, /event\.key === 'Escape'/);
});

test('topic cards contain valid HTML rather than JSX-only syntax', () => {
  assert.doesNotMatch(script, /\{\{\s*\/\*\s*Access indicators\s*\*\/\}\}/);
  assert.match(script, /const cardClass = topicId \? 'topic-card' : 'topic-card-static'/);
});

test('evidence entries do not claim an undocumented clinical review', () => {
  assert.doesNotMatch(evidence, /\breview\s*:/i);
  assert.match(evidence, /contentUpdated\s*:/);
  assert.doesNotMatch(script, /Reviewed\s*\$\{/);
  assert.match(script, /Content updated/);
});
